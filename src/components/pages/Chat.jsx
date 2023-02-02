import { io } from "socket.io-client";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'
import { PLACEHOLDERS_ALIAS } from "@babel/types";
const socket = io.connect(`${process.env.REACT_APP_SERVER_URL}`);
export default function Chat() {
  const [currentUserComment, setCurrentUserComment] = useState([]);
  const [comment, setComment] = useState("");
  const [otherUserComment, setOtherUserComment] = useState([]);
  const [search, setSearch] = useState('')
  const [showSearch, setShowSearch] = useState(false)
  const [list, setList] = useState({})
  const [chatRoom, setChatRoom] = useState('')
  let navigate = useNavigate();

  // handler for message
  const message = async (e) => {
    e.preventDefault();
    // setting state of message
    setCurrentUserComment([...currentUserComment, comment]);
    // sending message to backend socket
    socket.emit("send-comment", { comment: currentUserComment, room: chatRoom });
    try {
      const comments = await axios.post(`${process.env.REACT_APP_SERVER_URL}chats/${chatRoom}/comment`, { content: `${comment}` })
    } catch (err) {
      console.log(err)
    }
  };

  // handler for searching for a chat
  const handleSearch = async (e) => {
    e.preventDefault()
    try {
      // searching for a chat with forced lowercase filter
      const searchFor = await axios.get(`${process.env.REACT_APP_SERVER_URL}chats?search=${search.toLowerCase()}`)
      // setting the state of search
      setShowSearch(!showSearch)
      // mapping out search into an interactable dropdown menu
      const searchList = searchFor.data.map((search) => {
        return (
          <a className="dropdown-item" key={search._id} onClick={() => joinChat(search._id)}>
            {search.title}
          </a>
        )
      })
      // updating list state
      setList(searchList)
    } catch (err) {
      navigate('/error')
      console.warn(err)
    }
  }

  // handler for clicking on a search 
  const joinChat = async (id) => {
    try {
      // joins chat room based on id clicked on
      setChatRoom(id)
      // communicates with backend
      socket.emit('join-chat', `${id}`)
    } catch (err) {
      console.warn(err)
    }
    navigate(`/chat-room/${id}`)
  }

  // handler of receiving comments from another user
  useEffect(() => {
    socket.on("receive-comment", (comment) => {
      setOtherUserComment([...otherUserComment, comment.comment]);
    });
  }, []);


  return (
    <>
      <section className="hero is-large">
        <section className="hero-body is-medium has-background-warning">
          <div className="field has-text-centered is-bold">
            <p className="title is-1">Welcome To CHAPPIE</p>
          </div>
          <div className="field is-grouped is-grouped-centered">
            {/* form for sending a message */}
            <form onSubmit={handleSearch}>
              <label className="label title is-2" htmlFor="search">Search for a Chat</label>
              <div className="dropdown is-active">
                <div className="dropdown-trigger">
                  <input
                    className="input"
                    autoComplete="off"
                    id="search"
                    type='text'
                    value={search}
                    placeholder='Look for a chat!'
                    onChange={(e) => setSearch(e.target.value)}
                    required
                  />
                </div>
                <div className="dropdown-menu">
                  <div className="dropdown-content">
                    {/* rendering list from state */}
                    {showSearch ? list : null}
                  </div>
                </div>
              </div>
              <button className="button mx-1" type="submit">Find</button>
              <button className="button" type='submit' onClick={() => navigate('/chat-form')}>+</button>
            </form>

          </div>
        </section>
      </section>
    </>
  );
}

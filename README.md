# CHAPPIE
Welcome to CHAPPIE, an open-sourced lobby for user interactions through chatting. Out of CHAPPIE, you can expect a real time chat experience, with friends, co-workers, or just random people! 

# To Visit
CHAPPIE can be accessed via the browser at, [Link for CHAPPIE]().

# User Stories 
- As a User, I would like to have an account.
- As a User, I would like to update my account.
- As a User, I would like to be able to create and find chat rooms to access. 
- As a User, I would like to be able to chat with other people in chat rooms.

# Socket.io
Socket.IO is a JavaScript library that enables real-time, bidirectional communication between web clients and servers. It uses a combination of WebSockets, long polling, and other technologies to provide a seamless experience for real-time communication. The purpose of Socket.io in our project, is to connect users across ports to allow for chat groups to be made and interacted with, wherever you are. We are going to be utilizing, it's event-listening, namespaces, rooms, and auto-reconnection functionalities. 

# Techstack
- JavaScript
    - Express
    - Nodejs
    - React
    - react-router-dom
    - react-dom
    - socket.io
    - cors
    - axios
- Databasing
    - MongoDB
    - Mongoose
    - Mongo Atlas
- CSS
    - Bulma
- User Auth
    - Bcrypt
    - JSON Web Token
    - JWT.decode
- DEVOPS
    - Heroku CLI
    - Netlify

# ERD
![ERD](img/Screenshot%202023-01-27%20at%2012.10.08%20PM.png)
# RESTful Routing
![RESTful](img/Screenshot%202023-01-27%20at%2012.13.47%20PM.png)
# Wireframing
![Wireframe 1](./img/Screenshot%202023-01-27%20at%209.14.16%20AM.png)
![Wireframe 2](./img/Screenshot%202023-01-27%20at%209.14.27%20AM.png)
# MVP Goals
### The MVP for CHAPPIE is: 
- Allow users to create accounts, and allow them to be personally customizable..
- Allow users to message with random people in a "chat lobby" style format.
- Allow users to find chat rooms and create chat rooms.

# Stretch Goals
- Allow for a user to have a friends List.
- Allow for a user search for friends and others. 
- Allow for private user rooms.

# Approach Taken
As we first started getting this project started, we quickly as a team set out the ground-work to accomplish the minimal viable product for this project to meet it's requirements. We split up the smaller work amongst ourselves and quickly configured all the small steps needed to approach MVP. Once we finally go to configuring socket io the way we wanted it to work we had to change our work routine. 

Given that this was the first time that anyone in this group has worked together on a team project, we took a very interactive approach when working on big components of the project. The biggest part being working with socket io on the front-end, we weren't very familiar with this new technology so decided to have one team member share their screen on a zoom call while the other members share their ideas to tackle our biggest issues. This may not have been the greatest approach to take as opposed to just splitting up work, but it helped our team ensure that we all had well rounded idea on how the center piece of our project would function with react.

# Unsolved Problems / Hurdles
* The biggest problem that we encountered when working on this project was interacting with socket io from the front-end. Not being too familiar with this new technology stumped us as a team but in the end we finally were able to configure it to work for us as intended. 

* Another problem that we had constantly was working with react and rendering incoming messages from other users correctly, there were many times where we would observe progress while working on sections of code and suddenly something goes wrong somewhere else. Eventually we found ways to answer our own questions about what was going wrong and fixed our react issues.

* A problem that we didn't fully accomplish due to time was having appropriate time stamps to incoming and outgoing messages, we wanted to not only show what day a message was going out but the time and how long ago from the current hour it was. This will be something that we can definitely solve with a little more time.

import React from 'react';

// Component for handling errors

export default function Error() {
    return (
        <section className="hero is-large">
            <section className="hero-body is-medium has-background-warning">
                <div className="error-page">
                    <div className='field has-text-centered'>
                        <p className='title'>Error 404: Page Not Found</p>
                        <p className='title is-3'>
                            Please try again!
                        </p>
                        <p className='title is-4'>Oops, seems like the chat you searched for doesn't exist, and you broke the search.
                        </p>
                    </div>
                </div>
            </section>
        </section>
    )

}
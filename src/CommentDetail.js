import React from 'react'
import Faker from 'faker'
const CommentDetail = () => {
    return (
        <div className="comment">
            <a href="/" className="avatar">
                <img alt="avatar" src={Faker.image.avatar()} />
            </a>
            <div className="content">
                <a href="/" className="author">
                    Sam
                        </a>
                <div className="metadata">
                    <span className="date"> Today at 7:00PM</span>
                </div>
                <div className="text">Nice blog post!</div>
            </div>
        </div>
    )
}

export default CommentDetail
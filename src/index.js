import React from 'react'
import ReactDOM from 'react-dom'
import Faker from 'faker'
import CommentDetail from "./CommentDetail.js"

const App = () => {
    return (
        <div className = "ui container comments">
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />
            <CommentDetail />

        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)
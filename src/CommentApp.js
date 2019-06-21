import React, { Component } from 'react'
import CommentInput from './CommentInput'
import CommentList from './CommentList'

class CommentApp extends Component {
    // 提交事件（子组件 CommentInput 提交时触发）
    handleSubmitComment (comment) {
        console.log(comment)
    }

    render() {
        return (
            <div className='wrapper'>
                <CommentInput onSubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList />
            </div>
        )
    }
}

export default CommentApp
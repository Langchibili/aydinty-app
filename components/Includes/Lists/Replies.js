import React from "react";
import Reply from "../ContentUI/Reply";
import ReplyingForm from "../Forms/ReplyingForm";

export default class Replies extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      replies: this.props.replies
    }
  }
  addReply = (reply) =>{
    const replies = this.state.replies
    replies.push(reply)
    this.setState({ 
         replies: replies
    })
  }
  renderReplies = () =>{
      return this.state.replies.map((reply)=>{
          return <Reply key={reply._id} reply={reply} loggedInUser={this.props.loggedInUser}/>
      }) 
  }
  render(){
      return (<>
          {this.renderReplies()}
          {this.props.loggedInUser? <ReplyingForm commentId={this.props.commentId} addReply={this.addReply} loggedInUser={this.props.loggedInUser}/> : <></>}
      </>)
  }
}
import React from "react";
import Comment from "../ContentUI/Comment";
import CommentingForm from "../Forms/CommentingForm";

export default class Comments extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      comments: this.props.comments
    }
  }
  addComment = (comment) =>{
    const comments = this.state.comments
    comments.push(comment)
    this.setState({ 
         comments: comments
    })
  }
  renderComments = () =>{
      return this.state.comments.map((comment)=>{
          return <Comment key={comment._id} comment={comment} loggedInUser={this.props.loggedInUser} />
      }) 
  }
  render(){
      return (<>
          {this.renderComments()}
          {this.props.loggedInUser? <CommentingForm addComment={this.addComment}/> : <></>}
      </>)
  }
}
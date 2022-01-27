import React from "react";
import api from "../../../../store/api";

export default class DeletePostForm extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            disabled: false,
            postingText: "DELETE"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    
    handleCancel(e){
        e.preventDefault();
        history.back()
    }
    async handleSubmit(e){
        e.preventDefault();
        const postId = this.props.postId;
        this.setState({disabled: true, postingText: "DELETING..."})

        const response = await api.deleteItem("/posts/"+postId);
        if(response || response === []){ // disable posting button to avoid repost
            this.setState({disabled: true, postingText: "post deleted"},()=>{
                history.back()
            })
        }
     }

  render(){
    return ( 
        <div className="quick-post-footer-actions">
        <p style={{color:"red"}}>Are you sure you want to delete this post?</p>
        {/* BUTTON */}
        <button className="button small void" onClick={this.handleCancel}>Cancel</button>
        {/* /BUTTON */}
        {/* BUTTON */}
        <button className={this.state.disabled === true? "button small void" : "button small danger"}  onClick={this.handleSubmit}>{this.state.postingText}</button>
        {/* /BUTTON */}
      </div>
    )
   }
}
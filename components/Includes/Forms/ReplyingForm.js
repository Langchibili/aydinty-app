import React from "react";
import api from "../../../store/api";

export default class ReplyingForm extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            disabled: false,
            postingText: "Reply"
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDiscard = this.handleDiscard.bind(this);
        this.createRefs();
    }
    createRefs = () => {
        this.textField = React.createRef();
    }
    isEmpty(value){
      if(value.length === 0) return true
      return false
    }
    handleDiscard(e){
        e.preventDefault();
        this.textField.current.value = "";
        this.setState({disabled: false, postingText: "Reply"}) // undisable posting button to repost
    }
    handleChange = (e) =>{
        e.preventDefault();
        if(this.isEmpty(this.textField)) {
            this.setState({disabled: true})
        }
        else{
            this.setState({disabled: false})
        }
    }
    async handleSubmit(e){
        e.preventDefault();
        const text = this.textField.current.value;
        const postObject = {
            user_id: loggedInUser._id,
            user_picture_xl: loggedInUser.picture.small,
            comment_id: comment._id,
            post_id : comment.post_id,
            user_name: loggedInUser.username,
            user_nice_name: loggedInUser.niceName,
            reply_body: {
                body:text,
                reply_description: text
            }

        }
        
        if(this.isEmpty(text)) return
        this.setState({disabled: true, postingText: "Replying..."})
        
        //const response = await api.createItem("/posts",postObject);
        const response = postObject
        console.log(response)
        if(response){ // disable posting button to avoid repost
            this.setState({disabled: true, postingText: "Done"})
            this.textField.current.value = "";
            this.props.addReply(response)
        }
     }

  render(){
    return (
        <div className="post-comment-form">
  {/* USER AVATAR */}
  <div className="user-avatar small no-outline">
    {/* USER AVATAR CONTENT */}
    <div className="user-avatar-content">
      {/* HEXAGON */}
      <div className="hexagon-image-30-32" data-src="img/avatar/01.jpg" style={{"width":"30px","height":"32px","position":"relative"}}><canvas width={30} height={32} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
      {/* /HEXAGON */}
    </div>
    {/* /USER AVATAR CONTENT */}
    {/* USER AVATAR PROGRESS */}
    <div className="user-avatar-progress">
      {/* HEXAGON */}
      <div className="hexagon-progress-40-44" style={{"width":"40px","height":"44px","position":"relative"}}><canvas width={40} height={44} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
      {/* /HEXAGON */}
    </div>
    {/* /USER AVATAR PROGRESS */}
    {/* USER AVATAR PROGRESS BORDER */}
    <div className="user-avatar-progress-border">
      {/* HEXAGON */}
      <div className="hexagon-border-40-44" style={{"width":"40px","height":"44px","position":"relative"}}><canvas width={40} height={44} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
      {/* /HEXAGON */}
    </div>
    {/* /USER AVATAR PROGRESS BORDER */}
    {/* USER AVATAR BADGE */}
    <div className="user-avatar-badge">
      {/* USER AVATAR BADGE BORDER */}
      <div className="user-avatar-badge-border">
        {/* HEXAGON */}
        <div className="hexagon-22-24" style={{"width":"22px","height":"24px","position":"relative"}}><canvas width={22} height={24} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
        {/* /HEXAGON */}
      </div>
      {/* /USER AVATAR BADGE BORDER */}
      {/* USER AVATAR BADGE CONTENT */}
      <div className="user-avatar-badge-content">
        {/* HEXAGON */}
        <div className="hexagon-dark-16-18" style={{"width":"16px","height":"18px","position":"relative"}}><canvas width={16} height={18} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
        {/* /HEXAGON */}
      </div>
      {/* /USER AVATAR BADGE CONTENT */}
      {/* USER AVATAR BADGE TEXT */}
      <p className="user-avatar-badge-text">24</p>
      {/* /USER AVATAR BADGE TEXT */}
    </div>
    {/* /USER AVATAR BADGE */}
  </div>
  {/* /USER AVATAR */}
  {/* FORM */}
   {/* FORM */}
   <form className="form">
    {/* FORM ROW */}
    <div className="form-row">
      {/* FORM ITEM */}
      <div className="form-item">
        {/* FORM INPUT */}
        <div className="form-input small">
          <label htmlFor="post-reply">Your Reply</label>
          <input type="text" id="post-reply" name="post_reply" ref={this.textField} onChange={this.handleChange} />
        </div>
        {/* /FORM INPUT */}
      </div>
      {/* /FORM ITEM */}
    </div>
    {/* /FORM ROW */}
  </form>
  <button className={this.state.disabled === true? "button small void" : "button small secondary"}  onClick={this.handleSubmit}>{this.state.postingText}</button>
  {/* /FORM */}
</div>
    )
   }
}
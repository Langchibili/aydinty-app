import React from "react";
import api from "../../../store/api";

export default class PostingForm extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            disabled: false,
            postingText: "Post"
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
        this.setState({disabled: false, postingText: "Post"}) // undisable posting button to repost
    }
    async handleSubmit(e){
        e.preventDefault();
        const loggedInUser = this.props.loggedInUser;
        const text = this.textField.current.value;
        const postObject = {
            userId: loggedInUser._id,
            userName: loggedInUser.username,
            userfullName: loggedInUser.niceName,
            author: {
                authorId:loggedInUser._id,
                authorName: loggedInUser.niceName,
                picture_xl: loggedInUser.picture.small,
                authorUserName: loggedInUser.username
            },
            description: text

        }
        
        if(this.isEmpty(text)) return
        this.setState({disabled: true, postingText: "Posting..."})

        const response = await api.createItem("/posts",postObject);
        console.log(response)
        if(response){ // disable posting button to avoid repost
            this.setState({disabled: true, postingText: "Done"})
            this.textField.current.value = "";
        }
     }

  render(){
    return (  <div className="quick-post">
    {/* QUICK POST HEADER */}
    <div className="quick-post-header">
      {/* OPTION ITEMS */}
      <div className="option-items">
        {/* OPTION ITEM */}
        <div className="option-item active">
          {/* OPTION ITEM ICON */}
          <svg className="option-item-icon icon-status">
            <use xlinkHref="#svg-status" />
          </svg>
          {/* /OPTION ITEM ICON */}
          {/* OPTION ITEM TITLE */}
          <p className="option-item-title">Status</p>
          {/* /OPTION ITEM TITLE */}
        </div>
        {/* /OPTION ITEM */}
        {/* OPTION ITEM */}
        <div className="option-item">
          {/* OPTION ITEM ICON */}
          <svg className="option-item-icon icon-blog-posts">
            <use xlinkHref="#svg-blog-posts" />
          </svg>
          {/* /OPTION ITEM ICON */}
          {/* OPTION ITEM TITLE */}
          <p className="option-item-title">Blog Post</p>
          {/* /OPTION ITEM TITLE */}
        </div>
        {/* /OPTION ITEM */}
        {/* OPTION ITEM */}
        <div className="option-item">
          {/* OPTION ITEM ICON */}
          <svg className="option-item-icon icon-poll">
            <use xlinkHref="#svg-poll" />
          </svg>
          {/* /OPTION ITEM ICON */}
          {/* OPTION ITEM TITLE */}
          <p className="option-item-title">Poll</p>
          {/* /OPTION ITEM TITLE */}
        </div>
        {/* /OPTION ITEM */}
      </div>
      {/* /OPTION ITEMS */}
    </div>
    {/* /QUICK POST HEADER */}
    {/* QUICK POST BODY */}
    <div className="quick-post-body">
      {/* FORM */}
      <form className="form">
        {/* FORM ROW */}
        <div className="form-row">
          {/* FORM ITEM */}
          <div className="form-item">
            {/* FORM TEXTAREA */}
            <div className="form-textarea">
              <textarea
                ref={this.textField}
                id="quick-post-text"
                name="quick-post-text"
                placeholder="Hi Marina! Share your post here..."
                defaultValue={""}
              />
              {/* FORM TEXTAREA LIMIT TEXT */}
              <p className="form-textarea-limit-text">998/1000</p>
              {/* /FORM TEXTAREA LIMIT TEXT */}
            </div>
            {/* /FORM TEXTAREA */}
          </div>
          {/* /FORM ITEM */}
        </div>
        {/* /FORM ROW */}
      </form>
      {/* /FORM */}
    </div>
    {/* /QUICK POST BODY */}
    {/* QUICK POST FOOTER */}
    <div className="quick-post-footer">
      {/* QUICK POST FOOTER ACTIONS */}
      <div className="quick-post-footer-actions">
        {/* QUICK POST FOOTER ACTION */}
        <div
          className="quick-post-footer-action text-tooltip-tft-medium"
          data-title="Insert Photo"
          style={{ position: "relative" }}
        >
          {/* QUICK POST FOOTER ACTION ICON */}
          <svg className="quick-post-footer-action-icon icon-camera">
            <use xlinkHref="#svg-camera" />
          </svg>
          {/* /QUICK POST FOOTER ACTION ICON */}
          <div
            className="xm-tooltip"
            style={{
              whiteSpace: "nowrap",
              position: "absolute",
              zIndex: 99999,
              top: "-32px",
              left: "50%",
              marginLeft: "-47px",
              opacity: 0,
              visibility: "hidden",
              transform: "translate(0px, 10px)",
              transition: "all 0.3s ease-in-out 0s"
            }}
          >
            <p className="xm-tooltip-text">Insert Photo</p>
          </div>
        </div>
        {/* /QUICK POST FOOTER ACTION */}
        {/* QUICK POST FOOTER ACTION */}
        <div
          className="quick-post-footer-action text-tooltip-tft-medium"
          data-title="Insert GIF"
          style={{ position: "relative" }}
        >
          {/* QUICK POST FOOTER ACTION ICON */}
          <svg className="quick-post-footer-action-icon icon-gif">
            <use xlinkHref="#svg-gif" />
          </svg>
          {/* /QUICK POST FOOTER ACTION ICON */}
          <div
            className="xm-tooltip"
            style={{
              whiteSpace: "nowrap",
              position: "absolute",
              zIndex: 99999,
              top: "-32px",
              left: "50%",
              marginLeft: "-40px",
              opacity: 0,
              visibility: "hidden",
              transform: "translate(0px, 10px)",
              transition: "all 0.3s ease-in-out 0s"
            }}
          >
            <p className="xm-tooltip-text">Insert GIF</p>
          </div>
        </div>
        {/* /QUICK POST FOOTER ACTION */}
        {/* QUICK POST FOOTER ACTION */}
        <div
          className="quick-post-footer-action text-tooltip-tft-medium"
          data-title="Insert Tag"
          style={{ position: "relative" }}
        >
          {/* QUICK POST FOOTER ACTION ICON */}
          <svg className="quick-post-footer-action-icon icon-tags">
            <use xlinkHref="#svg-tags" />
          </svg>
          {/* /QUICK POST FOOTER ACTION ICON */}
          <div
            className="xm-tooltip"
            style={{
              whiteSpace: "nowrap",
              position: "absolute",
              zIndex: 99999,
              top: "-32px",
              left: "50%",
              marginLeft: "-40px",
              opacity: 0,
              visibility: "hidden",
              transform: "translate(0px, 10px)",
              transition: "all 0.3s ease-in-out 0s"
            }}
          >
            <p className="xm-tooltip-text">Insert Tag</p>
          </div>
        </div>
        {/* /QUICK POST FOOTER ACTION */}
      </div>
      {/* /QUICK POST FOOTER ACTIONS */}
      {/* QUICK POST FOOTER ACTIONS */}
      <div className="quick-post-footer-actions">
        {/* BUTTON */}
        <button className="button small void" onClick={this.handleDiscard}>Discard</button>
        {/* /BUTTON */}
        {/* BUTTON */}
        <button className={this.state.disabled === true? "button small void" : "button small secondary"}  onClick={this.handleSubmit}>{this.state.postingText}</button>
        {/* /BUTTON */}
      </div>
      {/* /QUICK POST FOOTER ACTIONS */}
    </div>
    {/* /QUICK POST FOOTER */}
  </div>)
   }
}
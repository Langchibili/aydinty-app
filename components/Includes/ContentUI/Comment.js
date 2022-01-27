import React from "react"
import Link from "next/link"
import Replies from "../Lists/Replies"
import api from "../../../store/api"

export default class Comment extends React.Component{
     constructor(props){
       super(props)
       this.state = {
         replies: <></>,
         showReplies: false
       }
     }

     renderCommentActions(){
      const comment = this.props.comment;
      const loggedInUser = this.props.loggedInUser;

      if(!loggedInUser){ // you aren't loggged in
        return <></>
      }
      
      if(loggedInUser._id == comment.user_id){ // you own the comment
        return (<>
              <p className="simple-dropdown-link"><Link href={"/manage/post?action=edit&id="+post._id}>Edit Post</Link></p>
              {/* /SIMPLE DROPDOWN LINK */}
              {/* SIMPLE DROPDOWN LINK */}
              <p className="simple-dropdown-link"><Link href={"/manage/post?action=delete&id="+post._id}>Delete Post</Link></p>
              {/* /SIMPLE DROPDOWN LINK */}
            </>)
      }
      else{ // you don't own the comment
        return <p className="simple-dropdown-link">Report Post</p>   
      }
    }
    
    async displayReplies(){
      const loggedInUser = this.props.loggedInUser;

      const getReplyBody = {
        commentId: this.props.comment._id,
        limit: 20
      }
      const response = await api.createItem("/replies/get", getReplyBody)
      if(response){
          if(!loggedInUser){
            this.setState({
              replies : <Replies replies={response} comment={comment}/>
            })
            return
          }
          this.setState({
            replies: <Replies replies={response} loggedInUser={loggedInUser} comment={comment}/>
          })
      }
    }
    toggleReplies = () =>{
      const showReplies = this.state.showReplies
      this.setState({
        showReplies: !showReplies
      })
}

    componentDidMount(){
      this.displayReplies()
    }

    render(){
      return (
        <><div className="post-comment">
        {/* USER AVATAR */}
        <a className="user-avatar small no-outline" href="profile-timeline.html">
          {/* USER AVATAR CONTENT */}
          <div className="user-avatar-content">
            {/* HEXAGON */}
            <div className="hexagon-image-30-32" data-src="https://odindesignthemes.com/vikinger/img/avatar/05.jpg" style={{"width":"30px","height":"32px","position":"relative"}}><canvas width={30} height={32} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
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
            <p className="user-avatar-badge-text">12</p>
            {/* /USER AVATAR BADGE TEXT */}
          </div>
          {/* /USER AVATAR BADGE */}
        </a>
        {/* /USER AVATAR */}
        {/* POST COMMENT TEXT */}
        <p className="post-comment-text"><a className="post-comment-text-author" href="profile-timeline.html">Neko Bebop</a>It's always a pleasure to do this streams with you! If we have at least half the fun than last time it will be an incredible success!</p>
        {/* /POST COMMENT TEXT */}
        {/* CONTENT ACTIONS */}
        <div className="content-actions">
          {/* CONTENT ACTION */}
          <div className="content-action">
            {/* META LINE */}
            <div className="meta-line">
              {/* META LINE LIST */}
              <div className="meta-line-list reaction-item-list small">
                {/* REACTION ITEM */}
                <div className="reaction-item" style={{"position":"relative"}}>
                  {/* REACTION IMAGE */}
                  <img className="reaction-image reaction-item-dropdown-trigger" src="https://odindesignthemes.com/vikinger/img/reaction/happy.png" alt="reaction-happy" />
                  {/* /REACTION IMAGE */}
                  {/* SIMPLE DROPDOWN */}
                  <div className="simple-dropdown padded reaction-item-dropdown" style={{"position":"absolute","z-index":"9999","bottom":"38px","left":"-16px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 20px)","-ms-transform":"translate(0px, 20px)","transform":"translate(0px, 20px)","-webkit-transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s","transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"}}>
                    {/* SIMPLE DROPDOWN TEXT */}
                    <p className="simple-dropdown-text"><img className="reaction" src="https://odindesignthemes.com/vikinger/img/reaction/happy.png" alt="reaction-happy" /> <span className="bold">Happy</span></p>
                    {/* /SIMPLE DROPDOWN TEXT */}
                    {/* SIMPLE DROPDOWN TEXT */}
                    <p className="simple-dropdown-text">Marcus Jhonson</p>
                    {/* /SIMPLE DROPDOWN TEXT */}
                  </div>
                  {/* /SIMPLE DROPDOWN */}
                </div>
                {/* /REACTION ITEM */}
                {/* REACTION ITEM */}
                <div className="reaction-item" style={{"position":"relative"}}>
                  {/* REACTION IMAGE */}
                  <img className="reaction-image reaction-item-dropdown-trigger" src="https://odindesignthemes.com/vikinger/img/reaction/like.png" alt="reaction-like" />
                  {/* /REACTION IMAGE */}
                  {/* SIMPLE DROPDOWN */}
                  <div className="simple-dropdown padded reaction-item-dropdown" style={{"position":"absolute","z-index":"9999","bottom":"38px","left":"-16px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 20px)","-ms-transform":"translate(0px, 20px)","transform":"translate(0px, 20px)","-webkit-transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s","transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"}}>
                    {/* SIMPLE DROPDOWN TEXT */}
                    <p className="simple-dropdown-text"><img className="reaction" src="https://odindesignthemes.com/vikinger/img/reaction/like.png" alt="reaction-like" /> <span className="bold">Like</span></p>
                    {/* /SIMPLE DROPDOWN TEXT */}
                    {/* SIMPLE DROPDOWN TEXT */}
                    <p className="simple-dropdown-text">Neko Bebop</p>
                    {/* /SIMPLE DROPDOWN TEXT */}
                    {/* SIMPLE DROPDOWN TEXT */}
                    <p className="simple-dropdown-text">Nick Grissom</p>
                    {/* /SIMPLE DROPDOWN TEXT */}
                    {/* SIMPLE DROPDOWN TEXT */}
                    <p className="simple-dropdown-text">Sarah Diamond</p>
                    {/* /SIMPLE DROPDOWN TEXT */}
                  </div>
                  {/* /SIMPLE DROPDOWN */}
                </div>
                {/* /REACTION ITEM */}
              </div>
              {/* /META LINE LIST */}
              {/* META LINE TEXT */}
              <p className="meta-line-text">4</p>
              {/* /META LINE TEXT */}
            </div>
            {/* /META LINE */}
            {/* META LINE */}
            <div className="meta-line" style={{"position":"relative"}}>
              {/* META LINE LINK */}
              <p className="meta-line-link light reaction-options-small-dropdown-trigger">React!</p>
              {/* /META LINE LINK */}
              {/* REACTION OPTIONS */}
              <div className="reaction-options small reaction-options-small-dropdown" style={{"position":"absolute","z-index":"9999","bottom":"30px","left":"-80px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 16px)","-ms-transform":"translate(0px, 16px)","transform":"translate(0px, 16px)","-webkit-transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s","transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"}}>
                {/* REACTION OPTION */}
                <div className="reaction-option text-tooltip-tft" data-title="Like" style={{"position":"relative"}}>
                  {/* REACTION OPTION IMAGE */}
                  <img className="reaction-option-image" src="https://odindesignthemes.com/vikinger/img/reaction/like.png" alt="reaction-like" />
                  {/* /REACTION OPTION IMAGE */}
                  <div className="xm-tooltip" style={{"white-space":"nowrap","position":"absolute","z-index":"99999","top":"-28px","left":"50%","margin-left":"-24px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 10px)","-ms-transform":"translate(0px, 10px)","transform":"translate(0px, 10px)","-webkit-transition":"all 0.3s ease-in-out 0s","transition":"all 0.3s ease-in-out 0s"}}><p className="xm-tooltip-text">Like</p></div></div>
                {/* /REACTION OPTION */}
                {/* REACTION OPTION */}
                <div className="reaction-option text-tooltip-tft" data-title="Love" style={{"position":"relative"}}>
                  {/* REACTION OPTION IMAGE */}
                  <img className="reaction-option-image" src="https://odindesignthemes.com/vikinger/img/reaction/love.png" alt="reaction-love" />
                  {/* /REACTION OPTION IMAGE */}
                  <div className="xm-tooltip" style={{"white-space":"nowrap","position":"absolute","z-index":"99999","top":"-28px","left":"50%","margin-left":"-26px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 10px)","-ms-transform":"translate(0px, 10px)","transform":"translate(0px, 10px)","-webkit-transition":"all 0.3s ease-in-out 0s","transition":"all 0.3s ease-in-out 0s"}}><p className="xm-tooltip-text">Love</p></div></div>
                {/* /REACTION OPTION */}
                {/* REACTION OPTION */}
                <div className="reaction-option text-tooltip-tft" data-title="Dislike" style={{"position":"relative"}}>
                  {/* REACTION OPTION IMAGE */}
                  <img className="reaction-option-image" src="https://odindesignthemes.com/vikinger/img/reaction/dislike.png" alt="reaction-dislike" />
                  {/* /REACTION OPTION IMAGE */}
                  <div className="xm-tooltip" style={{"white-space":"nowrap","position":"absolute","z-index":"99999","top":"-28px","left":"50%","margin-left":"-31.5px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 10px)","-ms-transform":"translate(0px, 10px)","transform":"translate(0px, 10px)","-webkit-transition":"all 0.3s ease-in-out 0s","transition":"all 0.3s ease-in-out 0s"}}><p className="xm-tooltip-text">Dislike</p></div></div>
                {/* /REACTION OPTION */}
                {/* REACTION OPTION */}
                <div className="reaction-option text-tooltip-tft" data-title="Happy" style={{"position":"relative"}}>
                  {/* REACTION OPTION IMAGE */}
                  <img className="reaction-option-image" src="https://odindesignthemes.com/vikinger/img/reaction/happy.png" alt="reaction-happy" />
                  {/* /REACTION OPTION IMAGE */}
                  <div className="xm-tooltip" style={{"white-space":"nowrap","position":"absolute","z-index":"99999","top":"-28px","left":"50%","margin-left":"-30.5px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 10px)","-ms-transform":"translate(0px, 10px)","transform":"translate(0px, 10px)","-webkit-transition":"all 0.3s ease-in-out 0s","transition":"all 0.3s ease-in-out 0s"}}><p className="xm-tooltip-text">Happy</p></div></div>
                {/* /REACTION OPTION */}
                {/* REACTION OPTION */}
                <div className="reaction-option text-tooltip-tft" data-title="Funny" style={{"position":"relative"}}>
                  {/* REACTION OPTION IMAGE */}
                  <img className="reaction-option-image" src="https://odindesignthemes.com/vikinger/img/reaction/funny.png" alt="reaction-funny" />
                  {/* /REACTION OPTION IMAGE */}
                  <div className="xm-tooltip" style={{"white-space":"nowrap","position":"absolute","z-index":"99999","top":"-28px","left":"50%","margin-left":"-30px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 10px)","-ms-transform":"translate(0px, 10px)","transform":"translate(0px, 10px)","-webkit-transition":"all 0.3s ease-in-out 0s","transition":"all 0.3s ease-in-out 0s"}}><p className="xm-tooltip-text">Funny</p></div></div>
                {/* /REACTION OPTION */}
                {/* REACTION OPTION */}
                <div className="reaction-option text-tooltip-tft" data-title="Wow" style={{"position":"relative"}}>
                  {/* REACTION OPTION IMAGE */}
                  <img className="reaction-option-image" src="https://odindesignthemes.com/vikinger/img/reaction/wow.png" alt="reaction-wow" />
                  {/* /REACTION OPTION IMAGE */}
                  <div className="xm-tooltip" style={{"white-space":"nowrap","position":"absolute","z-index":"99999","top":"-28px","left":"50%","margin-left":"-26px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 10px)","-ms-transform":"translate(0px, 10px)","transform":"translate(0px, 10px)","-webkit-transition":"all 0.3s ease-in-out 0s","transition":"all 0.3s ease-in-out 0s"}}><p className="xm-tooltip-text">Wow</p></div></div>
                {/* /REACTION OPTION */}
                {/* REACTION OPTION */}
                <div className="reaction-option text-tooltip-tft" data-title="Angry" style={{"position":"relative"}}>
                  {/* REACTION OPTION IMAGE */}
                  <img className="reaction-option-image" src="https://odindesignthemes.com/vikinger/img/reaction/angry.png" alt="reaction-angry" />
                  {/* /REACTION OPTION IMAGE */}
                  <div className="xm-tooltip" style={{"white-space":"nowrap","position":"absolute","z-index":"99999","top":"-28px","left":"50%","margin-left":"-29.5px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 10px)","-ms-transform":"translate(0px, 10px)","transform":"translate(0px, 10px)","-webkit-transition":"all 0.3s ease-in-out 0s","transition":"all 0.3s ease-in-out 0s"}}><p className="xm-tooltip-text">Angry</p></div></div>
                {/* /REACTION OPTION */}
                {/* REACTION OPTION */}
                <div className="reaction-option text-tooltip-tft" data-title="Sad" style={{"position":"relative"}}>
                  {/* REACTION OPTION IMAGE */}
                  <img className="reaction-option-image" src="https://odindesignthemes.com/vikinger/img/reaction/sad.png" alt="reaction-sad" />
                  {/* /REACTION OPTION IMAGE */}
                  <div className="xm-tooltip" style={{"white-space":"nowrap","position":"absolute","z-index":"99999","top":"-28px","left":"50%","margin-left":"-23px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 10px)","-ms-transform":"translate(0px, 10px)","transform":"translate(0px, 10px)","-webkit-transition":"all 0.3s ease-in-out 0s","transition":"all 0.3s ease-in-out 0s"}}><p className="xm-tooltip-text">Sad</p></div></div>
                {/* /REACTION OPTION */}
              </div>
              {/* /REACTION OPTIONS */}
            </div>
            {/* /META LINE */}
            {/* META LINE */}
            <div className="meta-line">
              {/* META LINE LINK */}
              <p className="meta-line-link light" onClick={this.toggleReplies}>Reply</p>
              {/* /META LINE LINK */}
            </div>
            {/* /META LINE */}
            {/* META LINE */}
            <div className="meta-line">
              {/* META LINE TIMESTAMP */}
              <p className="meta-line-timestamp">15 minutes ago</p>
              {/* /META LINE TIMESTAMP */}
            </div>
            {/* /META LINE */}
            {/* META LINE */}
            <div className="meta-line settings">
              {/* POST SETTINGS WRAP */}
              <div className="post-settings-wrap" style={{"position":"relative"}}>
                {/* POST SETTINGS */}
                <div className="post-settings post-settings-dropdown-trigger">
                  {/* POST SETTINGS ICON */}
                  <svg className="post-settings-icon icon-more-dots">
                    <use xlinkHref="#svg-more-dots" />
                  </svg>
                  {/* /POST SETTINGS ICON */}
                </div>
                {/* /POST SETTINGS */}
                {/* SIMPLE DROPDOWN */}
                <div className="simple-dropdown post-settings-dropdown" style={{"position":"absolute","z-index":"9999","bottom":"30px","right":"0px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 16px)","-ms-transform":"translate(0px, 16px)","transform":"translate(0px, 16px)","-webkit-transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s","transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"}}>
                  {/* SIMPLE DROPDOWN LINK */}
                  <p className="simple-dropdown-link">Report Post</p>
                  {/* /SIMPLE DROPDOWN LINK */}
                </div>
                {/* /SIMPLE DROPDOWN */}
              </div>
              {/* /POST SETTINGS WRAP */}
            </div>
            {/* /META LINE */}
          </div>
          {/* /CONTENT ACTION */}
        </div>
        {/* /CONTENT ACTIONS */}
      </div>
      {this.state.replies}
      </>
    )}
}
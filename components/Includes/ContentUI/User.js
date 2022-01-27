import Link from "next/link"
import React from "react";
import api from "../../../store/api"

export default class User extends React.Component{
  constructor(props){
    super(props)
    this.state ={
       followState: "" 
    }
  }


   handleFollow = () =>{
    const user = this.props.user;
    const loggedInUser = this.props.loggedInUser;

    const followObject = {
      otherUserId: user._id,
      userId: loggedInUser._id
    }
     const response = api.createItem("/user_following",followObject)
     if(response){
       this.setState({
         followState : "unfollow"
       })
     }
  }
  handleUnFollow = () =>{
    const user = this.props.user;
    const loggedInUser = this.props.loggedInUser;
    
    const unFollowObject = {
      otherUserId: user._id,
      userId: loggedInUser._id
    }
    const response = api.deleteItem("/user_following",unFollowObject)
    if(response){
      this.setState({
        followState: "follow"
      })
     }
  }

  renderFollow = () =>{
      if(this.state.followState === "follow"){
         return  <button className="button secondary" onClick={this.handleFollow}>Follow +</button>
      }
      else if(this.state.followState === "unfollow"){
        return  <button className="button void" onClick={this.handleUnFollow}>UnFollow -</button>
      }
      return <></>
  }

   renderActionButtons = () =>{
           const user = this.props.user;
           const loggedInUser = this.props.loggedInUser;

           if(loggedInUser === null) {
              return  <Link href="/signup"><a className="button secondary">Follow</a></Link>
           }
           if(user._id !== loggedInUser._id) {
               return (<>
                {this.renderFollow()}
                <p className="button primary">Send Message</p>
                </>)
           }
           else{
               return (<>
                <Link href="/manage/profile?action=edit"><a className="button secondary">Edit Profile</a></Link>
                <p className="button primary">Settings</p>
               </>)
           }   
    }
    renderFollowersCount = () =>{
        const user = this.props.user;
        const loggedInUser = this.props.loggedInUser;

        if(loggedInUser === null) {
          return user.followers.length;
        }
        if(user._id !== loggedInUser._id) {
          return user.followers.length;
        }
        return loggedInUser.followers.length;
    }
    renderFollowingCount = () =>{
      const user = this.props.user;
      const loggedInUser = this.props.loggedInUser;

      if(loggedInUser === null) {
        return user.following.length;
      }
      if(user._id !== loggedInUser._id) {
        return user.following.length;
      }
      return loggedInUser.following.length;
  }
     renderProfileHref = ()=>{
       const user = this.props.user;
       const loggedInUser = this.props.loggedInUser;

       if(loggedInUser === null) {
          return "/member/"+user._id
        }
       if(user._id !== loggedInUser._id) {
          return "/member/"+user._id 
       }
       return "/profile"
    }
    componentDidMount(){
      if(loggedInUser === null) return

      const user = this.props.user;
      const loggedInUser = this.props.loggedInUser;

      const following = loggedInUser.following
console.log(loggedInUser)
      if(!following.includes(user._id)){
        this.setState({
          followState:"follow"
        })
      }
      else{
        this.setState({
          followState:"unfollow"
        })
      }
    }
    render(){ 
    return (
        <div className="user-preview">
        {/* USER PREVIEW COVER */}
        <figure className="user-preview-cover liquid" style={{"background":"url(\"img/cover/04.jpg\") center center / cover no-repeat"}}>
          <img src="/img/cover/04.jpg" alt="cover-04" style={{"display":"none"}} />
        </figure>
        {/* /USER PREVIEW COVER */}
        {/* USER PREVIEW INFO */}
        <div className="user-preview-info">
          {/* USER SHORT DESCRIPTION */}
          <div className="user-short-description">
            {/* USER SHORT DESCRIPTION AVATAR */}
            <a className="user-short-description-avatar user-avatar medium" href="profile-timeline.html">
              {/* USER AVATAR BORDER */}
              <div className="user-avatar-border">
                {/* HEXAGON */}
                <div className="hexagon-120-132" style={{"width":"120px","height":"132px","position":"relative"}}><canvas width={120} height={132} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR BORDER */}
              {/* USER AVATAR CONTENT */}
              <div className="user-avatar-content">
                {/* HEXAGON */}
                <div className="hexagon-image-82-90" data-src="/img/avatar/05.jpg" style={{"width":"82px","height":"90px","position":"relative"}}><canvas width={82} height={90} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR CONTENT */}
              {/* USER AVATAR PROGRESS */}
              <div className="user-avatar-progress">
                {/* HEXAGON */}
                <div className="hexagon-progress-100-110" style={{"width":"100px","height":"110px","position":"relative"}}><canvas width={100} height={110} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR PROGRESS */}
              {/* USER AVATAR PROGRESS BORDER */}
              <div className="user-avatar-progress-border">
                {/* HEXAGON */}
                <div className="hexagon-border-100-110" style={{"width":"100px","height":"110px","position":"relative"}}><canvas width={100} height={110} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
                {/* /HEXAGON */}
              </div>
              {/* /USER AVATAR PROGRESS BORDER */}
              {/* USER AVATAR BADGE */}
              <div className="user-avatar-badge">
                {/* USER AVATAR BADGE BORDER */}
                <div className="user-avatar-badge-border">
                  {/* HEXAGON */}
                  <div className="hexagon-32-36" style={{"width":"32px","height":"36px","position":"relative"}}><canvas width={32} height={36} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
                  {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR BADGE BORDER */}
                {/* USER AVATAR BADGE CONTENT */}
                <div className="user-avatar-badge-content">
                  {/* HEXAGON */}
                  <div className="hexagon-dark-26-28" style={{"width":"26px","height":"28px","position":"relative"}}><canvas width={26} height={28} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
                  {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR BADGE CONTENT */}
                {/* USER AVATAR BADGE TEXT */}
                <p className="user-avatar-badge-text">12</p>
                {/* /USER AVATAR BADGE TEXT */}
              </div>
              {/* /USER AVATAR BADGE */}
            </a>
            {/* /USER SHORT DESCRIPTION AVATAR */}
            {/* USER SHORT DESCRIPTION TITLE */}
            <p className="user-short-description-title"><Link href={this.renderProfileHref()}>{this.props.user.niceName}</Link></p>
            {/* /USER SHORT DESCRIPTION TITLE */}
            {/* USER SHORT DESCRIPTION TEXT */}
            <p className="user-short-description-text"><a href="#">aydinty/contributor</a></p>
            {/* /USER SHORT DESCRIPTION TEXT */}
          </div>
          {/* /USER SHORT DESCRIPTION */}
          {/* BADGE LIST */}
          <div className="badge-list small">
            {/* BADGE ITEM */}
            <div className="badge-item">
              <img src="/img/badge/silver-s.png" alt="badge-silver-s" />
            </div>
            {/* /BADGE ITEM */}
            {/* BADGE ITEM */}
            <div className="badge-item">
              <img src="/img/badge/fcultivator-s.png" alt="badge-fcultivator-s" />
            </div>
            {/* /BADGE ITEM */}
            {/* BADGE ITEM */}
            <div className="badge-item">
              <img src="/img/badge/scientist-s.png" alt="badge-scientist-s" />
            </div>
            {/* /BADGE ITEM */}
            {/* BADGE ITEM */}
            <div className="badge-item">
              <img src="/img/badge/rmachine-s.png" alt="badge-rmachine-s" />
            </div>
            {/* /BADGE ITEM */}
            {/* BADGE ITEM */}
            <a className="badge-item" href="profile-badges.html">
              <img src="/img/badge/blank-s.png" alt="badge-blank-s" />
              {/* BADGE ITEM TEXT */}
              <p className="badge-item-text">+29</p>
              {/* /BADGE ITEM TEXT */}
            </a>
            {/* /BADGE ITEM */}
          </div>
          {/* /BADGE LIST */}
          {/* USER PREVIEW STATS SLIDES */}
          <div className="tns-outer" id="user-preview-stats-slides-01-ow"><div className="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span className="current">1</span>  of 2</div><div id="user-preview-stats-slides-01-mw" className="tns-ovh"><div className="tns-inner" id="user-preview-stats-slides-01-iw"><div id="user-preview-stats-slides-01" className="user-preview-stats-slides  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" style={{"-webkit-transform":"translate3d(0%, 0px, 0px)","-ms-transform":"translate3d(0%, 0px, 0px)","transform":"translate3d(0%, 0px, 0px)"}}>
                  {/* USER PREVIEW STATS SLIDE */}
                  <div className="user-preview-stats-slide tns-item tns-slide-active" id="user-preview-stats-slides-01-item0">
                    {/* USER STATS */}
                    <div className="user-stats">
                      {/* USER STAT */}
                      <div className="user-stat">
                        {/* USER STAT TITLE */}
                        <p className="user-stat-title">874</p>
                        {/* /USER STAT TITLE */}
                        {/* USER STAT TEXT */}
                        <p className="user-stat-text">posts</p>
                        {/* /USER STAT TEXT */}
                      </div>
                      {/* /USER STAT */}
                      {/* USER STAT */}
                      <div className="user-stat">
                        {/* USER STAT TITLE */}
                        <p className="user-stat-title">{this.renderFollowersCount()}</p>
                        {/* /USER STAT TITLE */}
                        {/* USER STAT TEXT */}
                        <p className="user-stat-text">followers</p>
                        {/* /USER STAT TEXT */}
                      </div>
                      {/* /USER STAT */}
                      {/* USER STAT */}
                      <div className="user-stat">
                        {/* USER STAT TITLE */}
                        <p className="user-stat-title">{this.renderFollowersCount()}</p>
                        {/* /USER STAT TITLE */}
                        {/* USER STAT TEXT */}
                        <p className="user-stat-text">following</p>
                        {/* /USER STAT TEXT */}
                      </div>
                      {/* /USER STAT */}
                    </div>
                    {/* /USER STATS */}
                  </div>
                  {/* /USER PREVIEW STATS SLIDE */}
                  {/* USER PREVIEW STATS SLIDE */}
                  <div className="user-preview-stats-slide tns-item" id="user-preview-stats-slides-01-item1" aria-hidden="true" tabIndex={-1}>
                    {/* USER PREVIEW TEXT */}
                    <p className="user-preview-text">{this.props.user.bio.about}</p>
                    {/* /USER PREVIEW TEXT */}
                  </div>
                  {/* /USER PREVIEW STATS SLIDE */}
                </div></div></div></div>
          {/* /USER PREVIEW STATS SLIDES */}
          {/* USER PREVIEW STATS ROSTER */}
          <div id="user-preview-stats-roster-01" className="user-preview-stats-roster slider-roster" aria-label="Carousel Pagination">
            {/* SLIDER ROSTER ITEM */}
            <div className="slider-roster-item tns-nav-active" data-nav={0} aria-label="Carousel Page 1 (Current Slide)" aria-controls="user-preview-stats-slides-01" />
            {/* /SLIDER ROSTER ITEM */}
            {/* SLIDER ROSTER ITEM */}
            <div className="slider-roster-item" data-nav={1} aria-label="Carousel Page 2" aria-controls="user-preview-stats-slides-01" tabIndex={-1} />
            {/* /SLIDER ROSTER ITEM */}
          </div>
          {/* /USER PREVIEW STATS ROSTER */}
          {/* SOCIAL LINKS */}
          <div className="social-links small">
            {/* SOCIAL LINK */}
            <a className="social-link small twitter" href="#">
              {/* SOCIAL LINK ICON */}
              <svg className="social-link-icon icon-twitter">
                <use xlinkHref="#svg-twitter" />
              </svg>
              {/* /SOCIAL LINK ICON */}
            </a>
            {/* /SOCIAL LINK */}
            {/* SOCIAL LINK */}
            <a className="social-link small instagram" href="#">
              {/* SOCIAL LINK ICON */}
              <svg className="social-link-icon icon-instagram">
                <use xlinkHref="#svg-instagram" />
              </svg>
              {/* /SOCIAL LINK ICON */}
            </a>
            {/* /SOCIAL LINK */}
            {/* SOCIAL LINK */}
            <a className="social-link small twitch" href="#">
              {/* SOCIAL LINK ICON */}
              <svg className="social-link-icon icon-twitch">
                <use xlinkHref="#svg-twitch" />
              </svg>
              {/* /SOCIAL LINK ICON */}
            </a>
            {/* /SOCIAL LINK */}
            {/* SOCIAL LINK */}
            <a className="social-link small discord" href="#">
              {/* SOCIAL LINK ICON */}
              <svg className="social-link-icon icon-discord">
                <use xlinkHref="#svg-discord" />
              </svg>
              {/* /SOCIAL LINK ICON */}
            </a>
            {/* /SOCIAL LINK */}
          </div>
          {/* /SOCIAL LINKS */}
          {/* USER PREVIEW ACTIONS */}
          <div className="user-preview-actions">
            {this.renderActionButtons()}
          </div>
          {/* /USER PREVIEW ACTIONS */}
        </div>
        {/* /USER PREVIEW INFO */}
      </div>
        )
    }
}
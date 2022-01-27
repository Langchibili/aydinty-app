import React from "react";
import api from "../store/api";
import Header from '../components/Includes/Header/Header'
import Nav from '../components/Includes/Nav/Nav'
import HeadMetaLoggedIn from '../components/Includes/HtmlMeta/HeadMetaLoggedIn'
import FootMetaLoggedIn from '../components/Includes/HtmlMeta/FootMetaLoggedIn'
import HeadMeta from '../components/Includes/HtmlMeta/HeadMeta'
import FootMeta from '../components/Includes/HtmlMeta/FootMeta'
import Aside from '../components/Includes/Aside/Aside'
import Users from '../components/Includes/Lists/Users'
import Loader from "../components/Includes/Loader/Loader";
import PageLoader from "../components/Includes/Loader/PageLoader";


export default class members extends React.Component{
    constructor(props){
       super(props)
       this.state = {
         requestDone: false,
         users: [],
         loggedIn: false,
         isLoggedIn: false
       }
     }
 
     async componentDidMount(){
        fetch("/app.bundle.min.js").then(v => {
            v.text().then(txt => {
              eval(txt);
             })
           })
         const response = await api.getItems("/user_status") // get loggedInUser
         if(response.hasOwnProperty("isLoggedIn")){
           this.setState({
             ...response,
             loggedIn: response.isLoggedIn,
             requestDone: true
           },async ()=>{
            const users = await api.getItems("/users","","","","","",20)
            this.setState({
                users: users
            })  
        })
      }   
     }
     renderComponent = (loggedInComponent, loggedOutCpomponent,loggedIn)=>{
         if(loggedIn){
             return loggedInComponent
         }
         return loggedOutCpomponent
     }

     render(){
        return (
           this.state.requestDone?<>
            {this.renderComponent(<></>, <HeadMeta />, this.state.loggedIn)}
            <HeadMetaLoggedIn />
            <Nav {...this.state} />
            <Aside widget="chat" {...this.state}/>
            <Header {...this.state}/>
            <Aside widget="floaty-bar" {...this.state}/>
            
            <div className="content-grid" style={{"-webkit-transform":"translate(140.5px, 0px)","-ms-transform":"translate(140.5px, 0px)","transform":"translate(140.5px, 0px)","-webkit-transition":"transform 0.4s ease-in-out 0s","transition":"transform 0.4s ease-in-out 0s"}}>
            {/* SECTION BANNER */}
            <div className="section-banner">
                {/* SECTION BANNER ICON */}
                <img className="section-banner-icon" src="img/banner/members-icon.png" alt="members-icon" />
                {/* /SECTION BANNER ICON */}
                {/* SECTION BANNER TITLE */}
                <p className="section-banner-title">Members (256)</p>
                {/* /SECTION BANNER TITLE */}
                {/* SECTION BANNER TEXT */}
                <p className="section-banner-text">Browse all the members of the community!</p>
                {/* /SECTION BANNER TEXT */}
            </div>
            {/* /SECTION BANNER */}
            {/* SECTION FILTERS BAR */}
            <div className="section-filters-bar v1">
                {/* SECTION FILTERS BAR ACTIONS */}
                <div className="section-filters-bar-actions">
                {/* FORM */}
                <form className="form">
                    {/* FORM INPUT */}
                    <div className="form-input small with-button">
                    <label htmlFor="friends-search">Search Friends</label>
                    <input type="text" id="friends-search" name="friends_search" />
                    {/* BUTTON */}
                    <button className="button primary">
                        {/* ICON MAGNIFYING GLASS */}
                        <svg className="icon-magnifying-glass">
                        <use xlinkHref="#svg-magnifying-glass" />
                        </svg>
                        {/* /ICON MAGNIFYING GLASS */}
                    </button>
                    {/* /BUTTON */}
                    </div>
                    {/* /FORM INPUT */}
                    {/* FORM SELECT */}
                    <div className="form-select">
                    <label htmlFor="friends-filter-category">Filter By</label>
                    <select id="friends-filter-category" name="friends_filter_category">
                        <option value={0}>Recently Active</option>
                        <option value={1}>Newest Friends</option>
                        <option value={2}>Alphabetical</option>
                    </select>
                    {/* FORM SELECT ICON */}
                    <svg className="form-select-icon icon-small-arrow">
                        <use xlinkHref="#svg-small-arrow" />
                    </svg>
                    {/* /FORM SELECT ICON */}
                    </div>
                    {/* /FORM SELECT */}
                </form>
                {/* /FORM */}
                {/* FILTER TABS */}
                <div className="filter-tabs">
                    {/* FILTER TAB */}
                    <div className="filter-tab active">
                    {/* FILTER TAB TEXT */}
                    <p className="filter-tab-text">Recently Active</p>
                    {/* /FILTER TAB TEXT */}
                    </div>
                    {/* /FILTER TAB */}
                    {/* FILTER TAB */}
                    <div className="filter-tab">
                    {/* FILTER TAB TEXT */}
                    <p className="filter-tab-text">Newest Friends</p>
                    {/* /FILTER TAB TEXT */}
                    </div>
                    {/* /FILTER TAB */}
                    {/* FILTER TAB */}
                    <div className="filter-tab">
                    {/* FILTER TAB TEXT */}
                    <p className="filter-tab-text">Alphabetical</p>
                    {/* /FILTER TAB TEXT */}
                    </div>
                    {/* /FILTER TAB */}
                </div>
                {/* /FILTER TABS */}
                </div>
                {/* /SECTION FILTERS BAR ACTIONS */}
                {/* SECTION FILTERS BAR ACTIONS */}
                <div className="section-filters-bar-actions">
                {/* VIEW ACTIONS */}
                <div className="view-actions">
                    {/* VIEW ACTION */}
                    <div className="view-action text-tooltip-tft-medium active" data-title="Big Grid" style={{"position":"relative"}}>
                    {/* VIEW ACTION ICON */}
                    <svg className="view-action-icon icon-big-grid-view">
                        <use xlinkHref="#svg-big-grid-view" />
                    </svg>
                    {/* /VIEW ACTION ICON */}
                    <div className="xm-tooltip" style={{"white-space":"nowrap","position":"absolute","z-index":"99999","top":"-32px","left":"50%","margin-left":"-35.5px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 10px)","-ms-transform":"translate(0px, 10px)","transform":"translate(0px, 10px)","-webkit-transition":"all 0.3s ease-in-out 0s","transition":"all 0.3s ease-in-out 0s"}}><p className="xm-tooltip-text">Big Grid</p></div></div>
                    {/* /VIEW ACTION */}
                    {/* VIEW ACTION */}
                    <div className="view-action text-tooltip-tft-medium" data-title="Small Grid" style={{"position":"relative"}}>
                    {/* VIEW ACTION ICON */}
                    <svg className="view-action-icon icon-small-grid-view">
                        <use xlinkHref="#svg-small-grid-view" />
                    </svg>
                    {/* /VIEW ACTION ICON */}
                    <div className="xm-tooltip" style={{"white-space":"nowrap","position":"absolute","z-index":"99999","top":"-32px","left":"50%","margin-left":"-42px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 10px)","-ms-transform":"translate(0px, 10px)","transform":"translate(0px, 10px)","-webkit-transition":"all 0.3s ease-in-out 0s","transition":"all 0.3s ease-in-out 0s"}}><p className="xm-tooltip-text">Small Grid</p></div></div>
                    {/* /VIEW ACTION */}
                    {/* VIEW ACTION */}
                    <div className="view-action text-tooltip-tft-medium" data-title="List" style={{"position":"relative"}}>
                    {/* VIEW ACTION ICON */}
                    <svg className="view-action-icon icon-list-grid-view">
                        <use xlinkHref="#svg-list-grid-view" />
                    </svg>
                    {/* /VIEW ACTION ICON */}
                    <div className="xm-tooltip" style={{"white-space":"nowrap","position":"absolute","z-index":"99999","top":"-32px","left":"50%","margin-left":"-22.5px","opacity":"0","visibility":"hidden","-webkit-transform":"translate(0px, 10px)","-ms-transform":"translate(0px, 10px)","transform":"translate(0px, 10px)","-webkit-transition":"all 0.3s ease-in-out 0s","transition":"all 0.3s ease-in-out 0s"}}><p className="xm-tooltip-text">List</p></div></div>
                    {/* /VIEW ACTION */}
                </div>
                {/* /VIEW ACTIONS */}
                </div>
                {/* /SECTION FILTERS BAR ACTIONS */}
            </div>
            {/* /SECTION FILTERS BAR */}
            {/* GRID */}
            <div className="grid grid-4-4-4 centered">
                 {this.renderComponent(<Users {...this.state} />, <Users users={this.state.users} />, this.state.loggedIn)}
            </div>
            {/* /GRID */}
            {/* SECTION PAGER BAR */}
            <div className="section-pager-bar">
                {/* SECTION PAGER */}
                <div className="section-pager">
                {/* SECTION PAGER ITEM */}
                <div className="section-pager-item active">
                    {/* SECTION PAGER ITEM TEXT */}
                    <p className="section-pager-item-text">01</p>
                    {/* /SECTION PAGER ITEM TEXT */}
                </div>
                {/* /SECTION PAGER ITEM */}
                {/* SECTION PAGER ITEM */}
                <div className="section-pager-item">
                    {/* SECTION PAGER ITEM TEXT */}
                    <p className="section-pager-item-text">02</p>
                    {/* /SECTION PAGER ITEM TEXT */}
                </div>
                {/* /SECTION PAGER ITEM */}
                {/* SECTION PAGER ITEM */}
                <div className="section-pager-item">
                    {/* SECTION PAGER ITEM TEXT */}
                    <p className="section-pager-item-text">03</p>
                    {/* /SECTION PAGER ITEM TEXT */}
                </div>
                {/* /SECTION PAGER ITEM */}
                {/* SECTION PAGER ITEM */}
                <div className="section-pager-item">
                    {/* SECTION PAGER ITEM TEXT */}
                    <p className="section-pager-item-text">04</p>
                    {/* /SECTION PAGER ITEM TEXT */}
                </div>
                {/* /SECTION PAGER ITEM */}
                {/* SECTION PAGER ITEM */}
                <div className="section-pager-item">
                    {/* SECTION PAGER ITEM TEXT */}
                    <p className="section-pager-item-text">05</p>
                    {/* /SECTION PAGER ITEM TEXT */}
                </div>
                {/* /SECTION PAGER ITEM */}
                {/* SECTION PAGER ITEM */}
                <div className="section-pager-item">
                    {/* SECTION PAGER ITEM TEXT */}
                    <p className="section-pager-item-text">06</p>
                    {/* /SECTION PAGER ITEM TEXT */}
                </div>
                {/* /SECTION PAGER ITEM */}
                </div>
                {/* /SECTION PAGER */}
                {/* SECTION PAGER CONTROLS */}
                <div className="section-pager-controls">
                {/* SLIDER CONTROL */}
                <div className="slider-control left disabled">
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
                {/* /SECTION PAGER CONTROLS */}
            </div>
            {/* /SECTION PAGER BAR */}
            {/* SECTION RESULTS TEXT */}
            <p className="section-results-text">Showing 9 out of 256 members</p>
            {/* /SECTION RESULTS TEXT */}
            </div>

       {this.renderComponent(<FootMetaLoggedIn />, <FootMeta />, this.state.loggedIn)}
        </>: <PageLoader />
    )
    }
}

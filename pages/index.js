import React from "react";
import Home from "../components/Views/Home";
import Feed from "../components/Views/Feed";
import Loader from "../components/Includes/Loader/Loader";
import PageLoader from "../components/Includes/Loader/PageLoader";
import api from "../store/api";
import HeadMetaLoggedIn from "../components/Includes/HtmlMeta/HeadMetaLoggedIn";
import FootMetaLoggedIn from "../components/Includes/HtmlMeta/FootMetaLoggedIn";
import HeadMeta from "../components/Includes/HtmlMeta/HeadMeta";
import FootMeta from "../components/Includes/HtmlMeta/FootMeta";

export default class index extends React.Component{
   constructor(props){
      super(props)
      this.state = {
        requestDone: false,
        posts: [],
        isLoggedIn: false
      }
    }

    async componentDidMount(){
        const response = await api.getItems("/user_status")
        let posts;
        if(response.hasOwnProperty("isLoggedIn")){
          if(response.isLoggedIn){
            const feedBody = {   
               userId: response.loggedInUser._id,
               fields: " ",
               limit: 20
            }
            posts = await api.createItem("/newsfeed",feedBody) // get feed posts
          }
          else{
            posts = await api.getItems("/posts","","","","","",20) // get home posts
          }
          this.setState({
            ...response,
            posts: posts,
            requestDone: true    
          })
        }   
    }
    homepage = () =>{
      if(!this.state.requestDone){
        return <PageLoader/>
      }
      if(this.state.isLoggedIn){
         return <Feed {...this.state} loggedIn={true}/>
      }
      return <Home loggedIn={false} posts={this.state.posts}/>
    }
    render(){
       return this.homepage()
    }
  } 
 
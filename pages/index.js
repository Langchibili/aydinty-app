import React from "react";
import Home from "../components/Views/Home";
import Feed from "../components/Views/Feed";
import Loader from "../components/Includes/Loader/Loader";
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
        isLoggedIn: false
      }
    }

    async componentDidMount(){
        const response = await api.getItems("/user_status")
        if(response.hasOwnProperty("isLoggedIn")){
          this.setState({
            ...response,
            requestDone: true
          })
        }   
        console.log(this.state) 
    }
    homepage = () =>{
      if(!this.state.requestDone){
        return (<><HeadMetaLoggedIn /><HeadMeta /><Loader/><FootMeta/></>)
      }
      if(this.state.isLoggedIn){
         return <Feed {...this.state} loggedIn={true}/>
      }
      return <Home loggedIn={false}/>
    }
    render(){
       return this.homepage()
    }
  } 
 
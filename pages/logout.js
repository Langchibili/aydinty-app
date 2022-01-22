import React from "react";
import api from "../store/api";

export default class logout extends React.Component{
    async componentDidMount(){
         const apiResponse = await api.getItems("/logout");
         if(apiResponse){
            window.location = "/" // redirect user to homepage 
         }
    }
    render(){ return <></> }
}

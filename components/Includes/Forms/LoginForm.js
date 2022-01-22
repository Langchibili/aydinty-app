import React from "react";
import api from "../../../store/api";

export default class SignUpForm extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            disabled: false,
            generalErrors: "",
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.createRefs();
    }
    createRefs = () => {
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
    }
    isEmpty(value){
      if(value.length === 0) return true
      return false
    }

    async handleSubmit(e){
        e.preventDefault();
        const username = this.usernameRef.current.value;
        const password = this.passwordRef.current.value;
     
        
        if(this.isEmpty(password)) {this.setState({generalErrors: "please enter a password"})
          return
        }
        if(this.isEmpty(username)) {this.setState({generalErrors: "please enter a username"})
          return
        }
        
        const response = await api.createItem("/login",{username: username, password: password});
        if(response.hasOwnProperty("error")){ // display any error from api
          this.setState({generalErrors: response.error})
          return
        }
        if(response.hasOwnProperty("unsuccesful")){ // display any error from api
          this.setState({generalErrors: response.unsuccesful})
          return
        }
        
        else{ // disable register button 
          this.setState({disabled: true})
        }
        window.location = "/" // redirect user to homepage (newsfeed in this case)
    }

  render(){
    return ( <form className="form">
        {/* FORM ROW */}
        <div className="form-row">
          {/* FORM ITEM */}
          <div className="form-item">
            {/* FORM INPUT */}
            <div className="form-input">
              <label htmlFor="login-username">Username</label>
              <input type="text" id="login-username" name="login_username" ref={this.usernameRef}/>
            </div>
            {/* /FORM INPUT */}
          </div>
          {/* /FORM ITEM */}
        </div>
        {/* /FORM ROW */}
        {/* FORM ROW */}
        <div className="form-row">
          {/* FORM ITEM */}
          <div className="form-item">
            {/* FORM INPUT */}
            <div className="form-input">
              <label htmlFor="login-password">Password</label>
              <input type="password" id="login-password" name="login_password" ref={this.passwordRef}/>
            </div>
            {/* /FORM INPUT */}
          </div>
          {/* /FORM ITEM */}
          <span className="danger" style={{color:"red"}}>{this.state.generalErrors}</span>
        </div>
        {/* /FORM ROW */}
        {/* FORM ROW */}
        <div className="form-row space-between">
          {/* FORM ITEM */}
          <div className="form-item">
            {/* CHECKBOX WRAP */}
            <div className="checkbox-wrap">
              <input type="checkbox" id="login-remember" name="login_remember" defaultChecked />
              {/* CHECKBOX BOX */}
              <div className="checkbox-box">
                {/* ICON CROSS */}
                <svg className="icon-cross">
                  <use xlinkHref="#svg-cross" />
                </svg>
                {/* /ICON CROSS */}
              </div>
              {/* /CHECKBOX BOX */}
              <label htmlFor="login-remember">Remember Me</label>
            </div>
            {/* /CHECKBOX WRAP */}
          </div>
          {/* /FORM ITEM */}
          {/* FORM ITEM */}
          <div className="form-item">
            {/* FORM LINK */}
            <a className="form-link" href="#">Forgot Password?</a>
            {/* /FORM LINK */}
          </div>
          {/* /FORM ITEM */}
        </div>
        {/* /FORM ROW */}
        {/* FORM ROW */}
        <div className="form-row">
          {/* FORM ITEM */}
          <div className="form-item">
            {/* BUTTON */}
            <button className="button medium secondary" disabled={this.state.disabled} onClick={this.handleSubmit}>Login to your Account!</button>
            {/* /BUTTON */}
          </div>
          {/* /FORM ITEM */}
        </div>
        {/* /FORM ROW */}
      </form>)
   }
}
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
        this.firstNameRef = React.createRef();
        this.lastNameRef = React.createRef();
        this.emailRef = React.createRef();
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
    }
    ValidateEmail = (email) => {
      if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
      {
        return true
      }
      return false
    } 
   
    isEmpty(value){
      if(value.length === 0) return true
      return false
    }

    async handleSubmit(e){
        e.preventDefault();
        const firstName = this.firstNameRef.current.value;
        const lastName = this.lastNameRef.current.value;
        const username = this.usernameRef.current.value;
        const password = this.passwordRef.current.value;
        const email = this.emailRef.current.value;
     
        if(!this.ValidateEmail(email)) {
          this.setState({generalErrors: "please enter a valid email address"})
          return
        }
        if(this.isEmpty(password)) {this.setState({generalErrors: "please enter a password"})
          return
        }
        if(this.isEmpty(username)) {this.setState({generalErrors: "please enter a username"})
          return
        }
        if(this.isEmpty(firstName)) {this.setState({generalErrors: "please enter a firstname"})
          return
        }
        if(this.isEmpty(lastName)) {this.setState({generalErrors: "please enter a lastname"})
          return
        }

        const userObject = { // prepare user object to submit
            authentication: {type: 'local', externalSite: 'none'},
            username: username,
            email: email,
            password: password,
            first_name: firstName,
            last_name: lastName
        }
        //const users = await api.getItems("/users","","","","","",2)
        const response = await api.createItem("/signup",userObject) // send user add request
        if(response.hasOwnProperty("error")){ // display any error from api
          this.setState({generalErrors: response.error})
          return
        }
        else{ // disable register button 
          this.setState({disabled: true})
        }
        window.location = "/" // redirect user to homepage (newsfeed in this case)
    }
    render(){
      return (  <form className="form">
        {/* FORM ROW */}
        <div className="form-row">
          {/* FORM ITEM */}
          <div className="form-item">
            {/* FORM INPUT */}
            <div className="form-input">
              <label htmlFor="register-email">Your Email</label>
              <input type="text" id="register-email" name="register_email" ref={this.emailRef} />
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
              <label htmlFor="register-username">Username</label>
              <input type="text" id="register-username" name="register_username" ref={this.usernameRef}  />
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
              <label htmlFor="register-username">Firstname</label>
              <input type="text" id="register-username" name="register_username" ref={this.firstNameRef}  />
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
              <label htmlFor="register-username">Lastname</label>
              <input type="text" id="register-username" name="register_username" ref={this.lastNameRef}  />
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
              <label htmlFor="register-password">Password</label>
              <input type="password" id="register-password" name="register_password" ref={this.passwordRef} />
            </div>
            {/* /FORM INPUT */}
          </div>
          {/* /FORM ITEM */}
          <span className="danger" style={{color:"red"}}>{this.state.generalErrors}</span>
        </div>
        {/* /FORM ROW */}
        {/* FORM ROW */}
        <div className="form-row">
          {/* FORM ITEM */}
          <div className="form-item">
            {/* CHECKBOX WRAP */}
            <div className="checkbox-wrap">
              <input type="checkbox" id="register-newsletter" name="register_newsletter" defaultChecked />
              {/* CHECKBOX BOX */}
              <div className="checkbox-box">
                {/* ICON CROSS */}
                <svg className="icon-cross">
                  <use xlinkHref="#svg-cross" />
                </svg>
                {/* /ICON CROSS */}
              </div>
              {/* /CHECKBOX BOX */}
              <label htmlFor="register-newsletter">Send me news and updates via email</label>
            </div>
            {/* /CHECKBOX WRAP */}
          </div>
          {/* /FORM ITEM */}
        </div>
        {/* /FORM ROW */}
        {/* FORM ROW */}
        <div className="form-row">
          {/* FORM ITEM */}
          <div className="form-item">
            {/* BUTTON */}
            <button className="button medium primary" disabled={this.state.disabled} onClick={this.handleSubmit}>Register Now!</button>
            {/* /BUTTON */}
          </div>
          {/* /FORM ITEM */}
        </div>
        {/* /FORM ROW */}
      </form>)
   }
}

import React from "react";
import api from "../../../Store/api";

export default class SignUpForm extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            email: null,
            username: null,
            uErrorText:"",
            pErrorText: "",
            nErrorText: "",
            disabled: false,
            loginText: "Login",
            generalErrors: "",
            showloader: false,
            showContent: true,
            redirectUser: false
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
    handleSubmit(e){
        e.preventDefault();
        const userObject = {
             
        }
        console.log("we are here first")
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
              <input type="text" id="register-email" name="register_email" />
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
              <input type="text" id="register-username" name="register_username" />
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
              <input type="text" id="register-username" name="register_username" />
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
              <input type="text" id="register-username" name="register_username" />
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
              <input type="password" id="register-password" name="register_password" />
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
              <label htmlFor="register-password-repeat">Repeat Password</label>
              <input type="password" id="register-password-repeat" name="register_password_repeat" />
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
            <button className="button medium primary" onClick={this.handleSubmit}>Register Now!</button>
            {/* /BUTTON */}
          </div>
          {/* /FORM ITEM */}
        </div>
        {/* /FORM ROW */}
      </form>)
   }
}

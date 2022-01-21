import LoginForm from "../components/Includes/Forms/LoginForm"
import SignUpForm from "../components/Includes/Forms/SignUpForm"
import HeadMetaLoggedIn from "../components/Includes/HtmlMeta/HeadMetaLoggedIn"
import FootMetaLoggedIn from "../components/Includes/HtmlMeta/FootMetaLoggedIn"


export default function signup(){
    return (<>
     <HeadMetaLoggedIn />
                <div className="landing">
  {/* LANDING DECORATION */}
  <div className="landing-decoration" />
  {/* /LANDING DECORATION */}
  {/* LANDING INFO */}
  <div className="landing-info">
    {/* LOGO */}
    <div className="logo">
      {/* ICON LOGO VIKINGER */}
      <svg className="icon-logo-vikinger">
        <use xlinkHref="#svg-logo-vikinger" />
      </svg>
      {/* /ICON LOGO VIKINGER */}
    </div>
    {/* /LOGO */}
    {/* LANDING INFO PRETITLE */}
    <h2 className="landing-info-pretitle">Welcome to</h2>
    {/* /LANDING INFO PRETITLE */}
    {/* LANDING INFO TITLE */}
    <h1 className="landing-info-title">Aydinty</h1>
    {/* /LANDING INFO TITLE */}
    {/* LANDING INFO TEXT */}
    <p className="landing-info-text">The next generation social network &amp; community! Connect with your friends and play with our quests and badges gamification system!</p>
    {/* /LANDING INFO TEXT */}
    {/* TAB SWITCH */}
    <div className="tab-switch">
      {/* TAB SWITCH BUTTON */}
      <p className="tab-switch-button login-register-form-trigger">Login</p>
      {/* /TAB SWITCH BUTTON */}
      {/* TAB SWITCH BUTTON */}
      <p className="tab-switch-button login-register-form-trigger active">Register</p>
      {/* /TAB SWITCH BUTTON */}
    </div>
    {/* /TAB SWITCH */}
  </div>
  {/* /LANDING INFO */}
  {/* LANDING FORM */}
  <div className="landing-form">
    {/* FORM BOX */}
    <div className="form-box login-register-form-element" style={{"-webkit-transform":"translate(50%, 0px)","-ms-transform":"translate(50%, 0px)","transform":"translate(50%, 0px)","opacity":"0","visibility":"hidden","z-index":"1","position":"absolute","left":"0px","-webkit-transition":"all 0.6s ease-in-out 0s","transition":"all 0.6s ease-in-out 0s"}}>
      {/* FORM BOX DECORATION */}
      <img className="form-box-decoration overflowing" src="img/landing/rocket.png" alt="rocket" />
      {/* /FORM BOX DECORATION */}
      {/* FORM BOX TITLE */}
      <h2 className="form-box-title">Account Login</h2>
      {/* /FORM BOX TITLE */}
      {/* FORM */}
      <LoginForm />
      {/* /FORM */}
      {/* LINED TEXT */}
      <p className="lined-text">Login with your Social Account</p>
      {/* /LINED TEXT */}
      {/* SOCIAL LINKS */}
      <div className="social-links">
        {/* SOCIAL LINK */}
        <a className="social-link facebook" href="#">
          {/* ICON FACEBOOK */}
          <svg className="icon-facebook">
            <use xlinkHref="#svg-facebook" />
          </svg>
          {/* /ICON FACEBOOK */}
        </a>
        {/* /SOCIAL LINK */}
        {/* SOCIAL LINK */}
        <a className="social-link twitter" href="#">
          {/* ICON TWITTER */}
          <svg className="icon-twitter">
            <use xlinkHref="#svg-twitter" />
          </svg>
          {/* /ICON TWITTER */}
        </a>
        {/* /SOCIAL LINK */}
        {/* SOCIAL LINK */}
        <a className="social-link twitch" href="#">
          {/* ICON TWITCH */}
          <svg className="icon-twitch">
            <use xlinkHref="#svg-twitch" />
          </svg>
          {/* /ICON TWITCH */}
        </a>
        {/* /SOCIAL LINK */}
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
      {/* /SOCIAL LINKS */}
    </div>
    {/* /FORM BOX */}
    {/* FORM BOX */}
    <div className="form-box login-register-form-element" style={{"-webkit-transform":"translate(0px, 0px)","-ms-transform":"translate(0px, 0px)","transform":"translate(0px, 0px)","opacity":"1","visibility":"visible","z-index":"2","position":"absolute","left":"0px","-webkit-transition":"all 0.6s ease-in-out 0s","transition":"all 0.6s ease-in-out 0s"}}>
      {/* FORM BOX DECORATION */}
      <img className="form-box-decoration" src="img/landing/rocket.png" alt="rocket" />
      {/* /FORM BOX DECORATION */}
      {/* FORM BOX TITLE */}
      <h2 className="form-box-title">Create your Account!</h2>
      {/* /FORM BOX TITLE */}
      {/* FORM */}
      <SignUpForm />
      {/* /FORM */}
      {/* FORM TEXT */}
      <p className="form-text">Make sure your email address has an invitation to join, otherwise your registration will be declined. To get invited, either an admin or friend of yours who has an account with us should create an invitation with your email address<a href="#">contact us</a>!</p>
      {/* /FORM TEXT */}
    </div>
    {/* /FORM BOX */}
  </div>
  {/* /LANDING FORM */}
</div>
<FootMetaLoggedIn/>
          </>)
}
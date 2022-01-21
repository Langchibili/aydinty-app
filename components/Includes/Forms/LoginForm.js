export default function LoginForm(props){
    return ( <form className="form">
        {/* FORM ROW */}
        <div className="form-row">
          {/* FORM ITEM */}
          <div className="form-item">
            {/* FORM INPUT */}
            <div className="form-input">
              <label htmlFor="login-username">Username or Email</label>
              <input type="text" id="login-username" name="login_username" />
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
              <input type="password" id="login-password" name="login_password" />
            </div>
            {/* /FORM INPUT */}
          </div>
          {/* /FORM ITEM */}
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
            <button className="button medium secondary">Login to your Account!</button>
            {/* /BUTTON */}
          </div>
          {/* /FORM ITEM */}
        </div>
        {/* /FORM ROW */}
      </form>)
}
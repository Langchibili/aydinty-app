
export default function FloatBar(props){
    return (<>
              <aside className="floaty-bar">
  {/* BAR ACTIONS */}
  <div className="bar-actions">
    {/* PROGRESS STAT */}
    <div className="progress-stat">
      {/* BAR PROGRESS WRAP */}
      <div className="bar-progress-wrap">
        {/* BAR PROGRESS INFO */}
        <p className="bar-progress-info">Next: <span className="bar-progress-text">NaN<span className="bar-progress-unit">exp</span></span></p>
        {/* /BAR PROGRESS INFO */}
      </div>
      {/* /BAR PROGRESS WRAP */}
      {/* PROGRESS STAT BAR */}
      <div id="logged-user-level-cp" className="progress-stat-bar" style={{"width":"0px","height":"4px","position":"relative"}}><canvas width={0} height={4} style={{"position":"absolute","top":"0px","left":"0px"}} /><canvas width={0} height={4} style={{"position":"absolute","top":"0px","left":"0px"}} /></div>
      {/* /PROGRESS STAT BAR */}
    </div>
    {/* /PROGRESS STAT */}
  </div>
  {/* /BAR ACTIONS */}
  {/* BAR ACTIONS */}
  <div className="bar-actions">
    {/* ACTION LIST */}
    <div className="action-list dark">
      {/* ACTION LIST ITEM */}
      <a className="action-list-item" href="marketplace-cart.html">
        {/* ACTION LIST ITEM ICON */}
        <svg className="action-list-item-icon icon-shopping-bag">
          <use xlinkHref="#svg-shopping-bag" />
        </svg>
        {/* /ACTION LIST ITEM ICON */}
      </a>
      {/* /ACTION LIST ITEM */}
      {/* ACTION LIST ITEM */}
      <a className="action-list-item" href="hub-profile-requests.html">
        {/* ACTION LIST ITEM ICON */}
        <svg className="action-list-item-icon icon-friend">
          <use xlinkHref="#svg-friend" />
        </svg>
        {/* /ACTION LIST ITEM ICON */}
      </a>
      {/* /ACTION LIST ITEM */}
      {/* ACTION LIST ITEM */}
      <a className="action-list-item" href="hub-profile-messages.html">
        {/* ACTION LIST ITEM ICON */}
        <svg className="action-list-item-icon icon-messages">
          <use xlinkHref="#svg-messages" />
        </svg>
        {/* /ACTION LIST ITEM ICON */}
      </a>
      {/* /ACTION LIST ITEM */}
      {/* ACTION LIST ITEM */}
      <a className="action-list-item unread" href="hub-profile-notifications.html">
        {/* ACTION LIST ITEM ICON */}
        <svg className="action-list-item-icon icon-notification">
          <use xlinkHref="#svg-notification" />
        </svg>
        {/* /ACTION LIST ITEM ICON */}
      </a>
      {/* /ACTION LIST ITEM */}
    </div>
    {/* /ACTION LIST */}
    {/* ACTION ITEM WRAP */}
    <a className="action-item-wrap" href="hub-profile-info.html">
      {/* ACTION ITEM */}
      <div className="action-item dark">
        {/* ACTION ITEM ICON */}
        <svg className="action-item-icon icon-settings">
          <use xlinkHref="#svg-settings" />
        </svg>
        {/* /ACTION ITEM ICON */}
      </div>
      {/* /ACTION ITEM */}
    </a>
    {/* /ACTION ITEM WRAP */}
  </div>
  {/* /BAR ACTIONS */}
</aside>
           </>)
}
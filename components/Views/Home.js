import Image from 'next/image'
import HeadMeta from '../Includes/HtmlMeta/HeadMeta'
import FootMeta from '../Includes/HtmlMeta/FootMeta'
import Header from '../Includes/Header/Header'
import Nav from '../Includes/Nav/Nav'
import Footer from '../Includes/Footer/Footer'
import Posts from '../Includes/Lists/Posts'
import Loader from '../Includes/Loader/Loader'
import Aside from '../Includes/Aside/Aside'

export default function Home(props) {
  return (
    <>
    <HeadMeta />
    <Header {...props}/>
    <Nav {...props}/>
    <div
  className="content-grid"
  style={{
    transform: "translate(122.5px, 0px)",
    margin: 0,
    transition: "transform 0.4s ease-in-out 0s"
  }}
>
  {/* SECTION BANNER */}
  <div
    className="section-banner"
    style={{
      background:
        'url("https://odindesignthemes.com/vikinger-theme/wp-content/themes/vikinger/img/banner/banner-bg.png") center center / cover no-repeat'
    }}
  >
    {/* SECTION BANNER ICON */}
    <img
      className="section-banner-icon"
      src="https://odindesignthemes.com/vikinger-theme/wp-content/themes/vikinger/img/banner/newsfeed-icon.png"
      alt="section-icon"
    />
    {/* /SECTION BANNER ICON */}
    {/* SECTION BANNER TITLE */}
    <p className="section-banner-title">Newsfeed</p>
    {/* /SECTION BANNER TITLE */}
    {/* SECTION BANNER TEXT */}
    <p className="section-banner-text">
      Check what your friends have been up to!
    </p>
    {/* /SECTION BANNER TEXT */}
  </div>
  {/* /SECTION BANNER */}
  {/* GRID */}
  <div className="grid grid-3-6-3 mobile-prefer-content">
    {/* GRID COLUMN */}
    <div className="grid-column">
      {/* WIDGET BOX */}
     <Aside widget="newest-members"/>
      {/* /WIDGET BOX */}
      {/* WIDGET BOX */}
      <div className="widget-box">
        {/* WIDGET BOX TITLE */}
        <p className="widget-box-title">Quests</p>
        {/* /WIDGET BOX TITLE */}
        {/* WIDGET BOX CONTENT */}
        <div className="widget-box-content">
          {/* ACHIEVEMENT PREVIEW LIST */}
          <div className="achievement-preview-list">
            {/* ACHIEVEMENT PREVIEW */}
            <div className="achievement-preview">
              {/* ACHIEVEMENT PREVIEW INFO */}
              <div className="achievement-preview-info">
                <img
                  className="achievement-preview-image"
                  src="https://odindesignthemes.com/vikinger-theme/wp-content/themes/vikinger/img/quest/quest-open.png"
                  alt="quest-open"
                />
                {/* ACHIEVEMENT PREVIEW TITLE */}
                <p className="achievement-preview-title">VIP Pass</p>
                {/* /ACHIEVEMENT PREVIEW TITLE */}
                {/* ACHIEVEMENT PREVIEW TEXT */}
                <p className="achievement-preview-text">
                  Got successfully accepted in a private group
                </p>
                {/* /ACHIEVEMENT PREVIEW TEXT */}
              </div>
              {/* /ACHIEVEMENT PREVIEW INFO */}
              {/* PROGRESS STAT */}
              <div className="progress-stat">
                {/* PROGRESS STAT BAR */}
                <div
                  className="progress-stat-bar achievement-simple-progress"
                  data-scalestop={0}
                  data-scaleend={1}
                  style={{ width: 228, height: 4, position: "relative" }}
                >
                  <canvas
                    width={228}
                    height={4}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                  <canvas
                    width={228}
                    height={4}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
                {/* /PROGRESS STAT BAR */}
              </div>
              {/* /PROGRESS STAT */}
            </div>
            {/* /ACHIEVEMENT PREVIEW */}
            {/* ACHIEVEMENT PREVIEW */}
            <div className="achievement-preview">
              {/* ACHIEVEMENT PREVIEW INFO */}
              <div className="achievement-preview-info">
                <img
                  className="achievement-preview-image"
                  src="https://odindesignthemes.com/vikinger-theme/wp-content/themes/vikinger/img/quest/quest-open.png"
                  alt="quest-open"
                />
                {/* ACHIEVEMENT PREVIEW TITLE */}
                <p className="achievement-preview-title">For The Community</p>
                {/* /ACHIEVEMENT PREVIEW TITLE */}
                {/* ACHIEVEMENT PREVIEW TEXT */}
                <p className="achievement-preview-text">
                  Posted more than 40 group activities
                </p>
                {/* /ACHIEVEMENT PREVIEW TEXT */}
              </div>
              {/* /ACHIEVEMENT PREVIEW INFO */}
              {/* PROGRESS STAT */}
              <div className="progress-stat">
                {/* PROGRESS STAT BAR */}
                <div
                  className="progress-stat-bar achievement-simple-progress"
                  data-scalestop={0}
                  data-scaleend={1}
                  style={{ width: 228, height: 4, position: "relative" }}
                >
                  <canvas
                    width={228}
                    height={4}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                  <canvas
                    width={228}
                    height={4}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
                {/* /PROGRESS STAT BAR */}
              </div>
              {/* /PROGRESS STAT */}
            </div>
            {/* /ACHIEVEMENT PREVIEW */}
            {/* ACHIEVEMENT PREVIEW */}
            <div className="achievement-preview">
              {/* ACHIEVEMENT PREVIEW INFO */}
              <div className="achievement-preview-info">
                <img
                  className="achievement-preview-image"
                  src="https://odindesignthemes.com/vikinger-theme/wp-content/themes/vikinger/img/quest/quest-open.png"
                  alt="quest-open"
                />
                {/* ACHIEVEMENT PREVIEW TITLE */}
                <p className="achievement-preview-title">Making Friends</p>
                {/* /ACHIEVEMENT PREVIEW TITLE */}
                {/* ACHIEVEMENT PREVIEW TEXT */}
                <p className="achievement-preview-text">
                  Successfully sent 5 friend request
                </p>
                {/* /ACHIEVEMENT PREVIEW TEXT */}
              </div>
              {/* /ACHIEVEMENT PREVIEW INFO */}
              {/* PROGRESS STAT */}
              <div className="progress-stat">
                {/* PROGRESS STAT BAR */}
                <div
                  className="progress-stat-bar achievement-simple-progress"
                  data-scalestop={0}
                  data-scaleend={1}
                  style={{ width: 228, height: 4, position: "relative" }}
                >
                  <canvas
                    width={228}
                    height={4}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                  <canvas
                    width={228}
                    height={4}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
                {/* /PROGRESS STAT BAR */}
              </div>
              {/* /PROGRESS STAT */}
            </div>
            {/* /ACHIEVEMENT PREVIEW */}
            {/* ACHIEVEMENT PREVIEW */}
            <div className="achievement-preview">
              {/* ACHIEVEMENT PREVIEW INFO */}
              <div className="achievement-preview-info">
                <img
                  className="achievement-preview-image"
                  src="https://odindesignthemes.com/vikinger-theme/wp-content/themes/vikinger/img/quest/quest-open.png"
                  alt="quest-open"
                />
                {/* ACHIEVEMENT PREVIEW TITLE */}
                <p className="achievement-preview-title">BestSeller Post</p>
                {/* /ACHIEVEMENT PREVIEW TITLE */}
                {/* ACHIEVEMENT PREVIEW TEXT */}
                <p className="achievement-preview-text">
                  Received more than 100 total visits on any post
                </p>
                {/* /ACHIEVEMENT PREVIEW TEXT */}
              </div>
              {/* /ACHIEVEMENT PREVIEW INFO */}
              {/* PROGRESS STAT */}
              <div className="progress-stat">
                {/* PROGRESS STAT BAR */}
                <div
                  className="progress-stat-bar achievement-simple-progress"
                  data-scalestop={0}
                  data-scaleend={1}
                  style={{ width: 228, height: 4, position: "relative" }}
                >
                  <canvas
                    width={228}
                    height={4}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                  <canvas
                    width={228}
                    height={4}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
                {/* /PROGRESS STAT BAR */}
              </div>
              {/* /PROGRESS STAT */}
            </div>
            {/* /ACHIEVEMENT PREVIEW */}
            {/* ACHIEVEMENT PREVIEW */}
            <div className="achievement-preview">
              {/* ACHIEVEMENT PREVIEW INFO */}
              <div className="achievement-preview-info">
                <img
                  className="achievement-preview-image"
                  src="https://odindesignthemes.com/vikinger-theme/wp-content/themes/vikinger/img/quest/quest-open.png"
                  alt="quest-open"
                />
                {/* ACHIEVEMENT PREVIEW TITLE */}
                <p className="achievement-preview-title">The Publisher</p>
                {/* /ACHIEVEMENT PREVIEW TITLE */}
                {/* ACHIEVEMENT PREVIEW TEXT */}
                <p className="achievement-preview-text">
                  Successfully published a new blog post
                </p>
                {/* /ACHIEVEMENT PREVIEW TEXT */}
              </div>
              {/* /ACHIEVEMENT PREVIEW INFO */}
              {/* PROGRESS STAT */}
              <div className="progress-stat">
                {/* PROGRESS STAT BAR */}
                <div
                  className="progress-stat-bar achievement-simple-progress"
                  data-scalestop={0}
                  data-scaleend={1}
                  style={{ width: 228, height: 4, position: "relative" }}
                >
                  <canvas
                    width={228}
                    height={4}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                  <canvas
                    width={228}
                    height={4}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
                {/* /PROGRESS STAT BAR */}
              </div>
              {/* /PROGRESS STAT */}
            </div>
            {/* /ACHIEVEMENT PREVIEW */}
          </div>
          {/* /ACHIEVEMENT PREVIEW LIST */}
        </div>
        {/* /WIDGET BOX CONTENT */}
      </div>
      {/* /WIDGET BOX */}{" "}
    </div>
    {/* /GRID COLUMN */}
    {/* ACTIVITY FILTERABLE LIST */}
    <div id="activity-filterable-list" className="grid-column">
      <div className="grid">
        <div className="quick-filters">
          <div className="quick-filters-tabs">
            <p className="quick-filters-tab active">All Updates</p>
          </div>
          <form className="quick-filters-form quick-filters-form-mobile">
            <div className="form-row">
              <div className="form-item">
                <div className="form-select">
                  <label htmlFor="activity-scope">Scope</label>
                  <select id="activity-scope" name="scope">
                    <option value="false">All Updates</option>
                  </select>
                  <svg className="icon-small-arrow form-select-icon">
                    <use href="#svg-small-arrow" />
                  </svg>
                </div>
              </div>
            </div>
          </form>
          <form className="quick-filters-form">
            <div className="form-row">
              <div className="form-item">
                <div className="form-select">
                  <label htmlFor="activity-show">Show</label>
                  <select id="activity-show" name="action">
                    <option value="all">Everything</option>
                    <option value="activity_update">Status</option>
                    <option value="activity_share,post_share">Shares</option>
                    <option value="activity_media_update,activity_media_upload,activity_video_update,activity_video_upload">
                      Media
                    </option>
                    <option value="activity_media_update,activity_media_upload">
                      Photos
                    </option>
                    <option value="activity_video_update,activity_video_upload">
                      Videos
                    </option>
                    <option value="friendship_created">Friendships</option>
                    <option value="created_group">New Groups</option>
                    <option value="bbp_topic_create">Forum Topics</option>
                    <option value="bbp_reply_create">Forum Replies</option>
                  </select>
                  <svg className="icon-small-arrow form-select-icon">
                    <use href="#svg-small-arrow" />
                  </svg>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="grid">
            {/* WIDGET BOX */}
            <Posts />
            {/* /WIDGET BOX */}

            {/* LOADER BARS */}
            <Loader />
            {/* /LOADER BARS */}
        </div>
      </div>
    </div>
    {/* /ACTIVITY FILTERABLE LIST */}
    {/* GRID COLUMN */}
    <div className="grid-column">
      {/* WIDGET BOX */}
      <div className="widget-box">
        {/* WIDGET BOX TITLE */}
        <p className="widget-box-title">Popular Groups</p>
        {/* /WIDGET BOX TITLE */}
        {/* WIDGET BOX CONTENT */}
        <div className="widget-box-content">
          {/* USER STATUS LIST */}
          <div className="user-status-list">
            {/* USER STATUS */}
            <div className="user-status user-status-with-icon">
              {/* USER AVATAR */}
              <a
                className="user-avatar small no-stats user-status-avatar no-border"
                href="https://odindesignthemes.com/vikinger-theme/groups/street-artists/"
              >
                {/* USER AVATAR CONTENT */}
                <div className="user-avatar-content">
                  {/* HEXAGON */}
                  <div
                    className="hexagon-image-40-44"
                    data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/group-avatars/3/5f6e4ace97f3f-bpfull.jpg"
                    style={{ width: 40, height: 44, position: "relative" }}
                  >
                    <canvas
                      width={40}
                      height={44}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                  {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR CONTENT */}
              </a>
              {/* /USER AVATAR */}
              {/* USER STATUS TITLE */}
              <p className="user-status-title">
                <a
                  className="bold"
                  href="https://odindesignthemes.com/vikinger-theme/groups/street-artists/"
                >
                  Street Artists
                </a>
              </p>
              {/* /USER STATUS TITLE */}
              {/* USER STATUS TEXT */}
              <p className="user-status-text small">4 members</p>
              {/* /USER STATUS TEXT */}
              {/* ICON SVG */}
              <svg className="icon-public user-status-icon user-status-privacy-icon">
                <use href="#svg-public" />
              </svg>
              {/* ICON SVG */}
            </div>
            {/* /USER STATUS */}
            {/* USER STATUS */}
            <div className="user-status user-status-with-icon">
              {/* USER AVATAR */}
              <a
                className="user-avatar small no-stats user-status-avatar no-border"
                href="https://odindesignthemes.com/vikinger-theme/groups/cosplayers-of-the-world/"
              >
                {/* USER AVATAR CONTENT */}
                <div className="user-avatar-content">
                  {/* HEXAGON */}
                  <div
                    className="hexagon-image-40-44"
                    data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/group-avatars/1/5f6e4a8528f4e-bpfull.jpg"
                    style={{ width: 40, height: 44, position: "relative" }}
                  >
                    <canvas
                      width={40}
                      height={44}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                  {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR CONTENT */}
              </a>
              {/* /USER AVATAR */}
              {/* USER STATUS TITLE */}
              <p className="user-status-title">
                <a
                  className="bold"
                  href="https://odindesignthemes.com/vikinger-theme/groups/cosplayers-of-the-world/"
                >
                  Cosplayers of the World
                </a>
              </p>
              {/* /USER STATUS TITLE */}
              {/* USER STATUS TEXT */}
              <p className="user-status-text small">3 members</p>
              {/* /USER STATUS TEXT */}
              {/* ICON SVG */}
              <svg className="icon-public user-status-icon user-status-privacy-icon">
                <use href="#svg-public" />
              </svg>
              {/* ICON SVG */}
            </div>
            {/* /USER STATUS */}
            {/* USER STATUS */}
            <div className="user-status user-status-with-icon">
              {/* USER AVATAR */}
              <a
                className="user-avatar small no-stats user-status-avatar no-border"
                href="https://odindesignthemes.com/vikinger-theme/groups/stream-designers/"
              >
                {/* USER AVATAR CONTENT */}
                <div className="user-avatar-content">
                  {/* HEXAGON */}
                  <div
                    className="hexagon-image-40-44"
                    data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/group-avatars/2/5f6e4aaf89ab9-bpfull.jpg"
                    style={{ width: 40, height: 44, position: "relative" }}
                  >
                    <canvas
                      width={40}
                      height={44}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                  {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR CONTENT */}
              </a>
              {/* /USER AVATAR */}
              {/* USER STATUS TITLE */}
              <p className="user-status-title">
                <a
                  className="bold"
                  href="https://odindesignthemes.com/vikinger-theme/groups/stream-designers/"
                >
                  Stream Designers
                </a>
              </p>
              {/* /USER STATUS TITLE */}
              {/* USER STATUS TEXT */}
              <p className="user-status-text small">3 members</p>
              {/* /USER STATUS TEXT */}
              {/* ICON SVG */}
              <svg className="icon-public user-status-icon user-status-privacy-icon">
                <use href="#svg-public" />
              </svg>
              {/* ICON SVG */}
            </div>
            {/* /USER STATUS */}
            {/* USER STATUS */}
            <div className="user-status user-status-with-icon">
              {/* USER AVATAR */}
              <a
                className="user-avatar small no-stats user-status-avatar no-border"
                href="https://odindesignthemes.com/vikinger-theme/groups/gaming-watchtower/"
              >
                {/* USER AVATAR CONTENT */}
                <div className="user-avatar-content">
                  {/* HEXAGON */}
                  <div
                    className="hexagon-image-40-44"
                    data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/group-avatars/4/5f6e4af513567-bpfull.jpg"
                    style={{ width: 40, height: 44, position: "relative" }}
                  >
                    <canvas
                      width={40}
                      height={44}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                  {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR CONTENT */}
              </a>
              {/* /USER AVATAR */}
              {/* USER STATUS TITLE */}
              <p className="user-status-title">
                <a
                  className="bold"
                  href="https://odindesignthemes.com/vikinger-theme/groups/gaming-watchtower/"
                >
                  Gaming Watchtower
                </a>
              </p>
              {/* /USER STATUS TITLE */}
              {/* USER STATUS TEXT */}
              <p className="user-status-text small">3 members</p>
              {/* /USER STATUS TEXT */}
              {/* ICON SVG */}
              <svg className="icon-private user-status-icon user-status-privacy-icon">
                <use href="#svg-private" />
              </svg>
              {/* ICON SVG */}
            </div>
            {/* /USER STATUS */}
            {/* USER STATUS */}
            <div className="user-status user-status-with-icon">
              {/* USER AVATAR */}
              <a
                className="user-avatar small no-stats user-status-avatar no-border"
                href="https://odindesignthemes.com/vikinger-theme/groups/living-in-japan/"
              >
                {/* USER AVATAR CONTENT */}
                <div className="user-avatar-content">
                  {/* HEXAGON */}
                  <div
                    className="hexagon-image-40-44"
                    data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/group-avatars/5/5f6e4b297a802-bpfull.jpg"
                    style={{ width: 40, height: 44, position: "relative" }}
                  >
                    <canvas
                      width={40}
                      height={44}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                  {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR CONTENT */}
              </a>
              {/* /USER AVATAR */}
              {/* USER STATUS TITLE */}
              <p className="user-status-title">
                <a
                  className="bold"
                  href="https://odindesignthemes.com/vikinger-theme/groups/living-in-japan/"
                >
                  Living in Japan
                </a>
              </p>
              {/* /USER STATUS TITLE */}
              {/* USER STATUS TEXT */}
              <p className="user-status-text small">2 members</p>
              {/* /USER STATUS TEXT */}
              {/* ICON SVG */}
              <svg className="icon-public user-status-icon user-status-privacy-icon">
                <use href="#svg-public" />
              </svg>
              {/* ICON SVG */}
            </div>
            {/* /USER STATUS */}
          </div>
          {/* /USER STATUS LIST */}
        </div>
        {/* /WIDGET BOX CONTENT */}
      </div>
      {/* /WIDGET BOX */}
      {/* WIDGET BOX */}
      <div className="widget-box">
        {/* WIDGET BOX TITLE */}
        <p className="widget-box-title">Badges</p>
        {/* /WIDGET BOX TITLE */}
        {/* WIDGET BOX CONTENT */}
        <div className="widget-box-content">
          {/* ACHIEVEMENT PREVIEW LIST */}
          <div className="achievement-preview-list">
            {/* ACHIEVEMENT PREVIEW */}
            <div className="achievement-preview">
              {/* ACHIEVEMENT PREVIEW INFO */}
              <div className="achievement-preview-info">
                <img
                  className="achievement-preview-image"
                  src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Gold-Amasser.png"
                  alt="Gold Amasser"
                />
                {/* ACHIEVEMENT PREVIEW TITLE */}
                <p className="achievement-preview-title">Gold Amasser</p>
                {/* /ACHIEVEMENT PREVIEW TITLE */}
                {/* ACHIEVEMENT PREVIEW TEXT */}
                <p className="achievement-preview-text">
                  Has reached a balance of 400 gold credits
                </p>
                {/* /ACHIEVEMENT PREVIEW TEXT */}
              </div>
              {/* /ACHIEVEMENT PREVIEW INFO */}
              {/* PROGRESS STAT */}
              <div className="progress-stat">
                {/* PROGRESS STAT BAR */}
                <div
                  className="progress-stat-bar achievement-simple-progress"
                  data-scalestop={0}
                  data-scaleend={1}
                  style={{ width: 228, height: 4, position: "relative" }}
                >
                  <canvas
                    width={228}
                    height={4}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                  <canvas
                    width={228}
                    height={4}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
                {/* /PROGRESS STAT BAR */}
              </div>
              {/* /PROGRESS STAT */}
            </div>
            {/* /ACHIEVEMENT PREVIEW */}
            {/* ACHIEVEMENT PREVIEW */}
            <div className="achievement-preview">
              {/* ACHIEVEMENT PREVIEW INFO */}
              <div className="achievement-preview-info">
                <img
                  className="achievement-preview-image"
                  src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Gem-Accumulator.png"
                  alt="Gem Accumulator"
                />
                {/* ACHIEVEMENT PREVIEW TITLE */}
                <p className="achievement-preview-title">Gem Accumulator</p>
                {/* /ACHIEVEMENT PREVIEW TITLE */}
                {/* ACHIEVEMENT PREVIEW TEXT */}
                <p className="achievement-preview-text">
                  Has reached a balance of 400 gem credits
                </p>
                {/* /ACHIEVEMENT PREVIEW TEXT */}
              </div>
              {/* /ACHIEVEMENT PREVIEW INFO */}
              {/* PROGRESS STAT */}
              <div className="progress-stat">
                {/* PROGRESS STAT BAR */}
                <div
                  className="progress-stat-bar achievement-simple-progress"
                  data-scalestop={0}
                  data-scaleend={1}
                  style={{ width: 228, height: 4, position: "relative" }}
                >
                  <canvas
                    width={228}
                    height={4}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                  <canvas
                    width={228}
                    height={4}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
                {/* /PROGRESS STAT BAR */}
              </div>
              {/* /PROGRESS STAT */}
            </div>
            {/* /ACHIEVEMENT PREVIEW */}
            {/* ACHIEVEMENT PREVIEW */}
            <div className="achievement-preview">
              {/* ACHIEVEMENT PREVIEW INFO */}
              <div className="achievement-preview-info">
                <img
                  className="achievement-preview-image"
                  src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Quest-Conqueror.png"
                  alt="Quest Conqueror"
                />
                {/* ACHIEVEMENT PREVIEW TITLE */}
                <p className="achievement-preview-title">Quest Conqueror</p>
                {/* /ACHIEVEMENT PREVIEW TITLE */}
                {/* ACHIEVEMENT PREVIEW TEXT */}
                <p className="achievement-preview-text">
                  Successfully completed 100% of all the quests
                </p>
                {/* /ACHIEVEMENT PREVIEW TEXT */}
              </div>
              {/* /ACHIEVEMENT PREVIEW INFO */}
              {/* PROGRESS STAT */}
              <div className="progress-stat">
                {/* PROGRESS STAT BAR */}
                <div
                  className="progress-stat-bar achievement-simple-progress"
                  data-scalestop={0}
                  data-scaleend={1}
                  style={{ width: 228, height: 4, position: "relative" }}
                >
                  <canvas
                    width={228}
                    height={4}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                  <canvas
                    width={228}
                    height={4}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
                {/* /PROGRESS STAT BAR */}
              </div>
              {/* /PROGRESS STAT */}
            </div>
            {/* /ACHIEVEMENT PREVIEW */}
            {/* ACHIEVEMENT PREVIEW */}
            <div className="achievement-preview">
              {/* ACHIEVEMENT PREVIEW INFO */}
              <div className="achievement-preview-info">
                <img
                  className="achievement-preview-image"
                  src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Gold-Cup.png"
                  alt="Gold Cup"
                />
                {/* ACHIEVEMENT PREVIEW TITLE */}
                <p className="achievement-preview-title">Gold Cup</p>
                {/* /ACHIEVEMENT PREVIEW TITLE */}
                {/* ACHIEVEMENT PREVIEW TEXT */}
                <p className="achievement-preview-text">
                  Won first place on a verified community competition
                </p>
                {/* /ACHIEVEMENT PREVIEW TEXT */}
              </div>
              {/* /ACHIEVEMENT PREVIEW INFO */}
              {/* PROGRESS STAT */}
              <div className="progress-stat">
                {/* PROGRESS STAT BAR */}
                <div
                  className="progress-stat-bar achievement-simple-progress"
                  data-scalestop={0}
                  data-scaleend={0}
                  style={{ width: 228, height: 4, position: "relative" }}
                >
                  <canvas
                    width={228}
                    height={4}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                  <canvas
                    width={228}
                    height={4}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
                {/* /PROGRESS STAT BAR */}
              </div>
              {/* /PROGRESS STAT */}
            </div>
            {/* /ACHIEVEMENT PREVIEW */}
            {/* ACHIEVEMENT PREVIEW */}
            <div className="achievement-preview">
              {/* ACHIEVEMENT PREVIEW INFO */}
              <div className="achievement-preview-info">
                <img
                  className="achievement-preview-image"
                  src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/Crazy-Scientist.png"
                  alt="Crazy Scientist"
                />
                {/* ACHIEVEMENT PREVIEW TITLE */}
                <p className="achievement-preview-title">Crazy Scientist</p>
                {/* /ACHIEVEMENT PREVIEW TITLE */}
                {/* ACHIEVEMENT PREVIEW TEXT */}
                <p className="achievement-preview-text">
                  Helped us beta test new awesome features
                </p>
                {/* /ACHIEVEMENT PREVIEW TEXT */}
              </div>
              {/* /ACHIEVEMENT PREVIEW INFO */}
              {/* PROGRESS STAT */}
              <div className="progress-stat">
                {/* PROGRESS STAT BAR */}
                <div
                  className="progress-stat-bar achievement-simple-progress"
                  data-scalestop={0}
                  data-scaleend={0}
                  style={{ width: 228, height: 4, position: "relative" }}
                >
                  <canvas
                    width={228}
                    height={4}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                  <canvas
                    width={228}
                    height={4}
                    style={{ position: "absolute", top: 0, left: 0 }}
                  />
                </div>
                {/* /PROGRESS STAT BAR */}
              </div>
              {/* /PROGRESS STAT */}
            </div>
            {/* /ACHIEVEMENT PREVIEW */}
          </div>
          {/* /ACHIEVEMENT PREVIEW LIST */}
        </div>
        {/* /WIDGET BOX CONTENT */}
      </div>
      {/* /WIDGET BOX */}{" "}
    </div>
    {/* /GRID COLUMN */}
  </div>
  {/* /GRID */}
</div>

    <Footer/>
    <FootMeta/>
    </>
  )
}

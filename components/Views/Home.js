import Image from 'next/image'
import HeadMeta from '../Includes/HtmlMeta/HeadMeta'
import FootMeta from '../Includes/HtmlMeta/FootMeta'
import Header from '../Includes/Header/Header'
import Nav from '../Includes/Nav/Nav'
import Footer from '../Includes/Footer/Footer'
import Posts from '../Includes/Lists/Posts'

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
      <div className="widget-box">
        {/* WIDGET BOX TITLE */}
        <p className="widget-box-title">Newest Members</p>
        {/* /WIDGET BOX TITLE */}
        {/* WIDGET BOX CONTENT */}
        <div className="widget-box-content">
          {/* USER STATUS LIST */}
          <div className="user-status-list">
            {/* USER STATUS */}
            <div className="user-status">
              {/* USER AVATAR */}
              <a
                className="user-avatar small  user-status-avatar no-border no-outline"
                href="https://odindesignthemes.com/vikinger-theme/members/sanstrange/"
              >
                {/* USER AVATAR CONTENT */}
                <div className="user-avatar-content">
                  {/* HEXAGON */}
                  <div
                    className="hexagon-image-30-32"
                    data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/10/5f6d2f896ea48-bpfull.jpg"
                    style={{ width: 30, height: 32, position: "relative" }}
                  >
                    <canvas
                      width={30}
                      height={32}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                  {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR CONTENT */}
                {/* USER AVATAR PROGRESS */}
                <div className="user-avatar-progress">
                  {/* HEXAGON */}
                  <div
                    className="hexagon-progress-40-44"
                    data-scalestop={1}
                    data-scaleend={6}
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
                {/* /USER AVATAR PROGRESS */}
                {/* USER AVATAR PROGRESS BORDER */}
                <div className="user-avatar-progress-border">
                  {/* HEXAGON */}
                  <div
                    className="hexagon-border-40-44"
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
                {/* /USER AVATAR PROGRESS BORDER */}
                {/* USER AVATAR BADGE */}
                <div className="user-avatar-badge">
                  {/* USER AVATAR BADGE BORDER */}
                  <div className="user-avatar-badge-border">
                    {/* HEXAGON */}
                    <div
                      className="hexagon-22-24"
                      style={{ width: 22, height: 24, position: "relative" }}
                    >
                      <canvas
                        width={22}
                        height={24}
                        style={{ position: "absolute", top: 0, left: 0 }}
                      />
                    </div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR BADGE BORDER */}
                  {/* USER AVATAR BADGE CONTENT */}
                  <div className="user-avatar-badge-content">
                    {/* HEXAGON */}
                    <div
                      className="hexagon-dark-16-18"
                      style={{ width: 16, height: 18, position: "relative" }}
                    >
                      <canvas
                        width={16}
                        height={18}
                        style={{ position: "absolute", top: 0, left: 0 }}
                      />
                    </div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR BADGE CONTENT */}
                  {/* USER AVATAR BADGE TEXT */}
                  <p className="user-avatar-badge-text">1</p>
                  {/* /USER AVATAR BADGE TEXT */}
                </div>
                {/* /USER AVATAR BADGE */}
              </a>
              {/* /USER AVATAR */} {/* USER STATUS TITLE */}
              <div className="user-status-title">
                <a
                  className="bold"
                  href="https://odindesignthemes.com/vikinger-theme/members/sanstrange/"
                >
                  Sandra Strange
                </a>
                <span className="bp-verified-badge" />
                <span
                  className="bp-verified-badge-tooltip"
                  role="tooltip"
                  style={{
                    visibility: "hidden",
                    position: "absolute",
                    inset: "auto auto 0px 0px",
                    margin: 0,
                    transform: "translate(125px, -43.8125px)"
                  }}
                  data-popper-placement="top"
                >
                  Verified
                  <span
                    className="bp-verified-badge-tooltip-arrow"
                    data-popper-arrow
                    style={{
                      position: "absolute",
                      left: 0,
                      transform: "translate(26px, 0px)"
                    }}
                  />
                </span>
              </div>
              {/* /USER STATUS TITLE */}
              {/* USER STATUS TEXT */}
              <p className="user-status-text small">@sanstrange </p>
              {/* /USER STATUS TEXT */}
            </div>
            {/* /USER STATUS */}
            {/* USER STATUS */}
            <div className="user-status">
              {/* USER AVATAR */}
              <a
                className="user-avatar small  user-status-avatar no-border no-outline"
                href="https://odindesignthemes.com/vikinger-theme/members/sakuraro/"
              >
                {/* USER AVATAR CONTENT */}
                <div className="user-avatar-content">
                  {/* HEXAGON */}
                  <div
                    className="hexagon-image-30-32"
                    data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/9/5f6d2f71afac2-bpfull.jpg"
                    style={{ width: 30, height: 32, position: "relative" }}
                  >
                    <canvas
                      width={30}
                      height={32}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                  {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR CONTENT */}
                {/* USER AVATAR PROGRESS */}
                <div className="user-avatar-progress">
                  {/* HEXAGON */}
                  <div
                    className="hexagon-progress-40-44"
                    data-scalestop={4}
                    data-scaleend={6}
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
                {/* /USER AVATAR PROGRESS */}
                {/* USER AVATAR PROGRESS BORDER */}
                <div className="user-avatar-progress-border">
                  {/* HEXAGON */}
                  <div
                    className="hexagon-border-40-44"
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
                {/* /USER AVATAR PROGRESS BORDER */}
                {/* USER AVATAR BADGE */}
                <div className="user-avatar-badge">
                  {/* USER AVATAR BADGE BORDER */}
                  <div className="user-avatar-badge-border">
                    {/* HEXAGON */}
                    <div
                      className="hexagon-22-24"
                      style={{ width: 22, height: 24, position: "relative" }}
                    >
                      <canvas
                        width={22}
                        height={24}
                        style={{ position: "absolute", top: 0, left: 0 }}
                      />
                    </div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR BADGE BORDER */}
                  {/* USER AVATAR BADGE CONTENT */}
                  <div className="user-avatar-badge-content">
                    {/* HEXAGON */}
                    <div
                      className="hexagon-dark-16-18"
                      style={{ width: 16, height: 18, position: "relative" }}
                    >
                      <canvas
                        width={16}
                        height={18}
                        style={{ position: "absolute", top: 0, left: 0 }}
                      />
                    </div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR BADGE CONTENT */}
                  {/* USER AVATAR BADGE TEXT */}
                  <p className="user-avatar-badge-text">4</p>
                  {/* /USER AVATAR BADGE TEXT */}
                </div>
                {/* /USER AVATAR BADGE */}
              </a>
              {/* /USER AVATAR */} {/* USER STATUS TITLE */}
              <div className="user-status-title">
                <a
                  className="bold"
                  href="https://odindesignthemes.com/vikinger-theme/members/sakuraro/"
                >
                  Rosie Sakura
                </a>
              </div>
              {/* /USER STATUS TITLE */}
              {/* USER STATUS TEXT */}
              <p className="user-status-text small">@sakuraro </p>
              {/* /USER STATUS TEXT */}
            </div>
            {/* /USER STATUS */}
            {/* USER STATUS */}
            <div className="user-status">
              {/* USER AVATAR */}
              <a
                className="user-avatar small  user-status-avatar no-border no-outline"
                href="https://odindesignthemes.com/vikinger-theme/members/dgreyson/"
              >
                {/* USER AVATAR CONTENT */}
                <div className="user-avatar-content">
                  {/* HEXAGON */}
                  <div
                    className="hexagon-image-30-32"
                    data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/8/5f6d2f6a96770-bpfull.jpg"
                    style={{ width: 30, height: 32, position: "relative" }}
                  >
                    <canvas
                      width={30}
                      height={32}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                  {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR CONTENT */}
                {/* USER AVATAR PROGRESS */}
                <div className="user-avatar-progress">
                  {/* HEXAGON */}
                  <div
                    className="hexagon-progress-40-44"
                    data-scalestop={1}
                    data-scaleend={6}
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
                {/* /USER AVATAR PROGRESS */}
                {/* USER AVATAR PROGRESS BORDER */}
                <div className="user-avatar-progress-border">
                  {/* HEXAGON */}
                  <div
                    className="hexagon-border-40-44"
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
                {/* /USER AVATAR PROGRESS BORDER */}
                {/* USER AVATAR BADGE */}
                <div className="user-avatar-badge">
                  {/* USER AVATAR BADGE BORDER */}
                  <div className="user-avatar-badge-border">
                    {/* HEXAGON */}
                    <div
                      className="hexagon-22-24"
                      style={{ width: 22, height: 24, position: "relative" }}
                    >
                      <canvas
                        width={22}
                        height={24}
                        style={{ position: "absolute", top: 0, left: 0 }}
                      />
                    </div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR BADGE BORDER */}
                  {/* USER AVATAR BADGE CONTENT */}
                  <div className="user-avatar-badge-content">
                    {/* HEXAGON */}
                    <div
                      className="hexagon-dark-16-18"
                      style={{ width: 16, height: 18, position: "relative" }}
                    >
                      <canvas
                        width={16}
                        height={18}
                        style={{ position: "absolute", top: 0, left: 0 }}
                      />
                    </div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR BADGE CONTENT */}
                  {/* USER AVATAR BADGE TEXT */}
                  <p className="user-avatar-badge-text">1</p>
                  {/* /USER AVATAR BADGE TEXT */}
                </div>
                {/* /USER AVATAR BADGE */}
              </a>
              {/* /USER AVATAR */} {/* USER STATUS TITLE */}
              <div className="user-status-title">
                <a
                  className="bold"
                  href="https://odindesignthemes.com/vikinger-theme/members/dgreyson/"
                >
                  Damian Greyson
                </a>
              </div>
              {/* /USER STATUS TITLE */}
              {/* USER STATUS TEXT */}
              <p className="user-status-text small">@dgreyson </p>
              {/* /USER STATUS TEXT */}
            </div>
            {/* /USER STATUS */}
            {/* USER STATUS */}
            <div className="user-status">
              {/* USER AVATAR */}
              <a
                className="user-avatar small  user-status-avatar no-border no-outline"
                href="https://odindesignthemes.com/vikinger-theme/members/greengoo/"
              >
                {/* USER AVATAR CONTENT */}
                <div className="user-avatar-content">
                  {/* HEXAGON */}
                  <div
                    className="hexagon-image-30-32"
                    data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/7/5f6d2f62a8690-bpfull.jpg"
                    style={{ width: 30, height: 32, position: "relative" }}
                  >
                    <canvas
                      width={30}
                      height={32}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                  {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR CONTENT */}
                {/* USER AVATAR PROGRESS */}
                <div className="user-avatar-progress">
                  {/* HEXAGON */}
                  <div
                    className="hexagon-progress-40-44"
                    data-scalestop={1}
                    data-scaleend={6}
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
                {/* /USER AVATAR PROGRESS */}
                {/* USER AVATAR PROGRESS BORDER */}
                <div className="user-avatar-progress-border">
                  {/* HEXAGON */}
                  <div
                    className="hexagon-border-40-44"
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
                {/* /USER AVATAR PROGRESS BORDER */}
                {/* USER AVATAR BADGE */}
                <div className="user-avatar-badge">
                  {/* USER AVATAR BADGE BORDER */}
                  <div className="user-avatar-badge-border">
                    {/* HEXAGON */}
                    <div
                      className="hexagon-22-24"
                      style={{ width: 22, height: 24, position: "relative" }}
                    >
                      <canvas
                        width={22}
                        height={24}
                        style={{ position: "absolute", top: 0, left: 0 }}
                      />
                    </div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR BADGE BORDER */}
                  {/* USER AVATAR BADGE CONTENT */}
                  <div className="user-avatar-badge-content">
                    {/* HEXAGON */}
                    <div
                      className="hexagon-dark-16-18"
                      style={{ width: 16, height: 18, position: "relative" }}
                    >
                      <canvas
                        width={16}
                        height={18}
                        style={{ position: "absolute", top: 0, left: 0 }}
                      />
                    </div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR BADGE CONTENT */}
                  {/* USER AVATAR BADGE TEXT */}
                  <p className="user-avatar-badge-text">1</p>
                  {/* /USER AVATAR BADGE TEXT */}
                </div>
                {/* /USER AVATAR BADGE */}
              </a>
              {/* /USER AVATAR */} {/* USER STATUS TITLE */}
              <div className="user-status-title">
                <a
                  className="bold"
                  href="https://odindesignthemes.com/vikinger-theme/members/greengoo/"
                >
                  The Green Goo
                </a>
              </div>
              {/* /USER STATUS TITLE */}
              {/* USER STATUS TEXT */}
              <p className="user-status-text small">@greengoo </p>
              {/* /USER STATUS TEXT */}
            </div>
            {/* /USER STATUS */}
            {/* USER STATUS */}
            <div className="user-status">
              {/* USER AVATAR */}
              <a
                className="user-avatar small  user-status-avatar no-border no-outline"
                href="https://odindesignthemes.com/vikinger-theme/members/brdwonder/"
              >
                {/* USER AVATAR CONTENT */}
                <div className="user-avatar-content">
                  {/* HEXAGON */}
                  <div
                    className="hexagon-image-30-32"
                    data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/6/5f6d2f1e67572-bpfull.jpg"
                    style={{ width: 30, height: 32, position: "relative" }}
                  >
                    <canvas
                      width={30}
                      height={32}
                      style={{ position: "absolute", top: 0, left: 0 }}
                    />
                  </div>
                  {/* /HEXAGON */}
                </div>
                {/* /USER AVATAR CONTENT */}
                {/* USER AVATAR PROGRESS */}
                <div className="user-avatar-progress">
                  {/* HEXAGON */}
                  <div
                    className="hexagon-progress-40-44"
                    data-scalestop={2}
                    data-scaleend={6}
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
                {/* /USER AVATAR PROGRESS */}
                {/* USER AVATAR PROGRESS BORDER */}
                <div className="user-avatar-progress-border">
                  {/* HEXAGON */}
                  <div
                    className="hexagon-border-40-44"
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
                {/* /USER AVATAR PROGRESS BORDER */}
                {/* USER AVATAR BADGE */}
                <div className="user-avatar-badge">
                  {/* USER AVATAR BADGE BORDER */}
                  <div className="user-avatar-badge-border">
                    {/* HEXAGON */}
                    <div
                      className="hexagon-22-24"
                      style={{ width: 22, height: 24, position: "relative" }}
                    >
                      <canvas
                        width={22}
                        height={24}
                        style={{ position: "absolute", top: 0, left: 0 }}
                      />
                    </div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR BADGE BORDER */}
                  {/* USER AVATAR BADGE CONTENT */}
                  <div className="user-avatar-badge-content">
                    {/* HEXAGON */}
                    <div
                      className="hexagon-dark-16-18"
                      style={{ width: 16, height: 18, position: "relative" }}
                    >
                      <canvas
                        width={16}
                        height={18}
                        style={{ position: "absolute", top: 0, left: 0 }}
                      />
                    </div>
                    {/* /HEXAGON */}
                  </div>
                  {/* /USER AVATAR BADGE CONTENT */}
                  {/* USER AVATAR BADGE TEXT */}
                  <p className="user-avatar-badge-text">2</p>
                  {/* /USER AVATAR BADGE TEXT */}
                </div>
                {/* /USER AVATAR BADGE */}
              </a>
              {/* /USER AVATAR */} {/* USER STATUS TITLE */}
              <div className="user-status-title">
                <a
                  className="bold"
                  href="https://odindesignthemes.com/vikinger-theme/members/brdwonder/"
                >
                  Bearded Wonder
                </a>
              </div>
              {/* /USER STATUS TITLE */}
              {/* USER STATUS TEXT */}
              <p className="user-status-text small">@brdwonder </p>
              {/* /USER STATUS TEXT */}
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
          <div className="widget-box no-padding animate-slide-down ">
            <div className="tag-stickers" />
            <div className="widget-box-status">
              <div className="widget-box-status-header">
                <div className="user-status">
                  <div className="user-status-avatar">
                    <a
                      className="user-avatar small  no-outline no-border "
                      href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/"
                    >
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/1/5f6d2c93a53d1-bpfull.jpg"
                          style={{
                            width: 30,
                            height: 32,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={30}
                            height={32}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress">
                        <div
                          className="hexagon-progress-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress-border">
                        <div
                          className="hexagon-border-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                          <div
                            className="hexagon-22-24"
                            style={{
                              width: 22,
                              height: 24,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={22}
                              height={24}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <div className="user-avatar-badge-content">
                          <div
                            className="hexagon-dark-16-18"
                            style={{
                              width: 16,
                              height: 18,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={16}
                              height={18}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <p className="user-avatar-badge-text">4</p>
                      </div>
                    </a>
                  </div>
                  <div className="user-status-title medium">
                    <a href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/">
                      Marina Valentine
                    </a>
                    <span>
                      <span className="bp-verified-badge" />
                    </span>
                    <div className="vikinger-pmpro-level-tag vikinger-pmpro-level-tag_small">
                      <p className="vikinger-pmpro-level-tag-text">
                        Pro Member
                      </p>
                    </div>
                    <span> posted an update</span>
                  </div>
                  <p className="user-status-text small">4 months ago</p>
                </div>
              </div>
              <div className="widget-box-status-content">
                <p className="widget-box-status-text">
                  <a href="https://www.twitch.tv/blizzard" target="_blank">
                    https://www.twitch.tv/blizzard
                  </a>
                </p>
                <div className="iframe-wrap">
                  <iframe
                    src="//player.twitch.tv/?channel=blizzard&parent=odindesignthemes.com"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            <div className="post-footer">
              <div className="content-actions">
                <div className="content-action">
                  <div className="meta-line">
                    <div className="reaction-item-list meta-line-list ">
                      <div className="reaction-item-wrap">
                        <div
                          className="reaction-item"
                          style={{ position: "relative" }}
                        >
                          <img
                            className="reaction-image"
                            src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/like.png"
                            alt="reaction-like"
                          />
                          <div
                            className="simple-dropdown padded"
                            style={{
                              position: "absolute",
                              zIndex: 9999,
                              bottom: 38,
                              left: "-16px",
                              opacity: 0,
                              visibility: "hidden",
                              transform: "translate(0px, 20px)",
                              transition:
                                "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
                            }}
                          >
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/like.png"
                                alt="reaction-like"
                              />
                              <span className="bold">Like</span>
                            </p>
                            <p className="simple-dropdown-text">
                              Marina Valentine
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="meta-line-text meta-line-text-trigger">1</p>
                  </div>
                </div>
                <div className="content-action">
                  <div className="meta-line">
                    <p className="meta-line-text">0 Comments</p>
                  </div>
                  <div className="meta-line">
                    <p className="meta-line-text">0 Shares</p>
                  </div>
                </div>
              </div>
              <div className="post-comments" />
            </div>
          </div>
          <div className="widget-box no-padding animate-slide-down ">
            <div className="tag-stickers" />
            <div className="widget-box-status">
              <div className="widget-box-status-header">
                <div className="user-status">
                  <div className="user-status-avatar">
                    <a
                      className="user-avatar small  no-outline no-border "
                      href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/"
                    >
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/1/5f6d2c93a53d1-bpfull.jpg"
                          style={{
                            width: 30,
                            height: 32,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={30}
                            height={32}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress">
                        <div
                          className="hexagon-progress-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress-border">
                        <div
                          className="hexagon-border-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                          <div
                            className="hexagon-22-24"
                            style={{
                              width: 22,
                              height: 24,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={22}
                              height={24}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <div className="user-avatar-badge-content">
                          <div
                            className="hexagon-dark-16-18"
                            style={{
                              width: 16,
                              height: 18,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={16}
                              height={18}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <p className="user-avatar-badge-text">4</p>
                      </div>
                    </a>
                  </div>
                  <div className="user-status-title medium">
                    <a href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/">
                      Marina Valentine
                    </a>
                    <span>
                      <span className="bp-verified-badge" />
                    </span>
                    <div className="vikinger-pmpro-level-tag vikinger-pmpro-level-tag_small">
                      <p className="vikinger-pmpro-level-tag-text">
                        Pro Member
                      </p>
                    </div>
                    <span> posted an update</span>
                  </div>
                  <p className="user-status-text small">4 months ago</p>
                </div>
              </div>
              <div className="widget-box-status-content">
                <p className="widget-box-status-text">
                  <a
                    href="https://www.twitch.tv/videos/411305682"
                    target="_blank"
                  >
                    https://www.twitch.tv/videos/411305682
                  </a>
                </p>
                <div className="iframe-wrap">
                  <iframe
                    src="//player.twitch.tv/?autoplay=false&video=v411305682&parent=odindesignthemes.com"
                    allowFullScreen
                  />
                </div>
              </div>
            </div>
            <div className="post-footer">
              <div className="content-actions">
                <div className="content-action" />
                <div className="content-action">
                  <div className="meta-line">
                    <p className="meta-line-text">0 Comments</p>
                  </div>
                  <div className="meta-line">
                    <p className="meta-line-text">0 Shares</p>
                  </div>
                </div>
              </div>
              <div className="post-comments" />
            </div>
          </div>
          <div className="widget-box no-padding animate-slide-down ">
            <div className="tag-stickers" />
            <div className="widget-box-status">
              <div className="widget-box-status-header">
                <div className="user-status">
                  <div className="user-status-avatar">
                    <a
                      className="user-avatar small  no-outline no-border "
                      href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/"
                    >
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/1/5f6d2c93a53d1-bpfull.jpg"
                          style={{
                            width: 30,
                            height: 32,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={30}
                            height={32}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress">
                        <div
                          className="hexagon-progress-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress-border">
                        <div
                          className="hexagon-border-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                          <div
                            className="hexagon-22-24"
                            style={{
                              width: 22,
                              height: 24,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={22}
                              height={24}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <div className="user-avatar-badge-content">
                          <div
                            className="hexagon-dark-16-18"
                            style={{
                              width: 16,
                              height: 18,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={16}
                              height={18}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <p className="user-avatar-badge-text">4</p>
                      </div>
                    </a>
                  </div>
                  <div className="user-status-title medium">
                    <a href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/">
                      Marina Valentine
                    </a>
                    <span>
                      <span className="bp-verified-badge" />
                    </span>
                    <div className="vikinger-pmpro-level-tag vikinger-pmpro-level-tag_small">
                      <p className="vikinger-pmpro-level-tag-text">
                        Pro Member
                      </p>
                    </div>
                    <span> posted a video update</span>
                  </div>
                  <p className="user-status-text small">
                    10 months ago * edited by
                    <a href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/">
                      {" "}
                      Marina Valentine{" "}
                    </a>
                  </p>
                </div>
              </div>
              <div className="widget-box-status-content">
                <p className="widget-box-status-text">
                  Hi! This is an example of the video uploader! Edited by me{" "}
                  <img
                    draggable="false"
                    role="img"
                    className="emoji"
                    alt="😀"
                    src="https://s.w.org/images/core/emoji/13.1.0/svg/1f600.svg"
                  />{" "}
                  !
                </p>
                <div className="video-wrap">
                  <video
                    src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/vikinger/member/1/VikingerColorThemeSwitch.mp4"
                    controls
                    disablepictureinpicture
                    controlslist="nodownload"
                  />
                </div>
              </div>
            </div>
            <div className="post-footer">
              <div className="content-actions">
                <div className="content-action">
                  <div className="meta-line">
                    <div className="reaction-item-list meta-line-list ">
                      <div className="reaction-item-wrap">
                        <div
                          className="reaction-item"
                          style={{ position: "relative" }}
                        >
                          <img
                            className="reaction-image"
                            src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/happy.png"
                            alt="reaction-happy"
                          />
                          <div
                            className="simple-dropdown padded"
                            style={{
                              position: "absolute",
                              zIndex: 9999,
                              bottom: 38,
                              left: "-16px",
                              opacity: 0,
                              visibility: "hidden",
                              transform: "translate(0px, 20px)",
                              transition:
                                "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
                            }}
                          >
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/happy.png"
                                alt="reaction-happy"
                              />
                              <span className="bold">Happy</span>
                            </p>
                            <p className="simple-dropdown-text">
                              Marina Valentine
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="meta-line-text meta-line-text-trigger">1</p>
                  </div>
                </div>
                <div className="content-action">
                  <div className="meta-line">
                    <p className="meta-line-text">0 Comments</p>
                  </div>
                  <div className="meta-line">
                    <p className="meta-line-text">0 Shares</p>
                  </div>
                </div>
              </div>
              <div className="post-comments" />
            </div>
          </div>
          <div className="widget-box no-padding animate-slide-down ">
            <div className="tag-stickers" />
            <div className="widget-box-status">
              <div className="widget-box-status-header">
                <div className="user-status">
                  <div className="user-status-avatar">
                    <a
                      className="user-avatar small  no-outline no-border "
                      href="https://odindesignthemes.com/vikinger-theme/members/brdwonder/"
                    >
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/6/5f6d2f1e67572-bpfull.jpg"
                          style={{
                            width: 30,
                            height: 32,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={30}
                            height={32}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress">
                        <div
                          className="hexagon-progress-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress-border">
                        <div
                          className="hexagon-border-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                          <div
                            className="hexagon-22-24"
                            style={{
                              width: 22,
                              height: 24,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={22}
                              height={24}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <div className="user-avatar-badge-content">
                          <div
                            className="hexagon-dark-16-18"
                            style={{
                              width: 16,
                              height: 18,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={16}
                              height={18}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <p className="user-avatar-badge-text">2</p>
                      </div>
                    </a>
                  </div>
                  <div className="user-status-title medium">
                    <a href="https://odindesignthemes.com/vikinger-theme/members/brdwonder/">
                      Bearded Wonder
                    </a>
                    <span> posted an update</span>
                  </div>
                  <p className="user-status-text small">1 year ago</p>
                </div>
              </div>
              <div className="widget-box-status-content">
                <p className="widget-box-status-text">
                  Check out this tutorial!!
                  <a
                    href=" https://www.youtube.com/watch?v=elFHdvvessk"
                    target="_blank"
                  >
                    {" "}
                    https://www.youtube.com/watch?v=elFHdvvessk
                  </a>
                </p>
                <div className="iframe-wrap">
                  <iframe
                    src="https://www.youtube.com/embed/elFHdvvessk?enablejsapi=1"
                    allowFullScreen
                    id="widget2"
                  />
                </div>
              </div>
            </div>
            <div className="post-footer">
              <div className="content-actions">
                <div className="content-action">
                  <div className="meta-line">
                    <div className="reaction-item-list meta-line-list ">
                      <div className="reaction-item-wrap">
                        <div
                          className="reaction-item"
                          style={{ position: "relative" }}
                        >
                          <img
                            className="reaction-image"
                            src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/wow.png"
                            alt="reaction-wow"
                          />
                          <div
                            className="simple-dropdown padded"
                            style={{
                              position: "absolute",
                              zIndex: 9999,
                              bottom: 38,
                              left: "-16px",
                              opacity: 0,
                              visibility: "hidden",
                              transform: "translate(0px, 20px)",
                              transition:
                                "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
                            }}
                          >
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/wow.png"
                                alt="reaction-wow"
                              />
                              <span className="bold">Wow</span>
                            </p>
                            <p className="simple-dropdown-text">
                              Bearded Wonder
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="reaction-item-wrap">
                        <div
                          className="reaction-item"
                          style={{ position: "relative" }}
                        >
                          <img
                            className="reaction-image"
                            src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/like.png"
                            alt="reaction-like"
                          />
                          <div
                            className="simple-dropdown padded"
                            style={{
                              position: "absolute",
                              zIndex: 9999,
                              bottom: 38,
                              left: "-16px",
                              opacity: 0,
                              visibility: "hidden",
                              transform: "translate(0px, 20px)",
                              transition:
                                "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
                            }}
                          >
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/like.png"
                                alt="reaction-like"
                              />
                              <span className="bold">Like</span>
                            </p>
                            <p className="simple-dropdown-text">
                              Nicholas Grissom
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="reaction-item-wrap">
                        <div
                          className="reaction-item"
                          style={{ position: "relative" }}
                        >
                          <img
                            className="reaction-image"
                            src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/love.png"
                            alt="reaction-love"
                          />
                          <div
                            className="simple-dropdown padded"
                            style={{
                              position: "absolute",
                              zIndex: 9999,
                              bottom: 38,
                              left: "-16px",
                              opacity: 0,
                              visibility: "hidden",
                              transform: "translate(0px, 20px)",
                              transition:
                                "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
                            }}
                          >
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/love.png"
                                alt="reaction-love"
                              />
                              <span className="bold">Love</span>
                            </p>
                            <p className="simple-dropdown-text">
                              Marina Valentine
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="meta-line-text meta-line-text-trigger">3</p>
                  </div>
                </div>
                <div className="content-action">
                  <div className="meta-line">
                    <p className="meta-line-text">0 Comments</p>
                  </div>
                  <div className="meta-line">
                    <p className="meta-line-text">0 Shares</p>
                  </div>
                </div>
              </div>
              <div className="post-comments" />
            </div>
          </div>
          <div className="widget-box no-padding animate-slide-down ">
            <div className="tag-stickers" />
            <div className="widget-box-status">
              <div className="widget-box-status-header">
                <div className="user-status">
                  <div className="user-status-avatar">
                    <a
                      className="user-avatar small  no-outline no-border "
                      href="https://odindesignthemes.com/vikinger-theme/members/nickgrissom/"
                    >
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/4/5f6d2f1fd4af8-bpfull.jpg"
                          style={{
                            width: 30,
                            height: 32,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={30}
                            height={32}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress">
                        <div
                          className="hexagon-progress-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress-border">
                        <div
                          className="hexagon-border-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                          <div
                            className="hexagon-22-24"
                            style={{
                              width: 22,
                              height: 24,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={22}
                              height={24}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <div className="user-avatar-badge-content">
                          <div
                            className="hexagon-dark-16-18"
                            style={{
                              width: 16,
                              height: 18,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={16}
                              height={18}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <p className="user-avatar-badge-text">1</p>
                      </div>
                    </a>
                  </div>
                  <div className="user-status-title medium">
                    <a href="https://odindesignthemes.com/vikinger-theme/members/nickgrissom/">
                      Nicholas Grissom
                    </a>
                    <span>
                      <span className="bp-verified-badge" />
                    </span>
                    <span> shared a post</span>
                  </div>
                  <p className="user-status-text small">1 year ago</p>
                </div>
              </div>
              <div className="widget-box-status-content">
                <p className="widget-box-status-text">
                  This is a shared blog post!
                </p>
                <div className="widget-box no-padding">
                  <div className="post-preview animate-slide-down ">
                    <a href="https://odindesignthemes.com/vikinger-theme/heres-the-how-and-why-did-i-became-a-full-time-gaming-streamer/">
                      <div
                        className="post-preview-image"
                        style={{
                          background:
                            'url("https://odindesignthemes.com/vikinger-theme/wp-content/uploads/2020/09/lukas-eggers-_rKl0w9BdiM-unsplash.jpg") center center / cover no-repeat'
                        }}
                      />
                    </a>
                    <div className="post-preview-info fixed-height">
                      <div className="post-preview-info-top">
                        <p className="post-preview-timestamp">
                          <span>
                            <a href="https://odindesignthemes.com/vikinger-theme/category/stories/">
                              Stories
                            </a>{" "}
                            -{" "}
                          </span>
                          September 22, 2020
                        </p>
                        <p className="post-preview-title">
                          <a href="https://odindesignthemes.com/vikinger-theme/heres-the-how-and-why-did-i-became-a-full-time-gaming-streamer/">
                            Here’s the how and why did I became a full time
                            Gaming Streamer
                          </a>
                        </p>
                      </div>
                      <div className="post-preview-info-bottom">
                        <p className="post-preview-text">
                          An online streamer, also known as a live streamer,
                          internet streamer, or streamer, is a person who
                          broadcasts themself online through a live stream or
                          pre-recorded video. The scope of online streamers has
                          grown to includ...
                        </p>
                        <a
                          className="post-preview-link"
                          href="https://odindesignthemes.com/vikinger-theme/heres-the-how-and-why-did-i-became-a-full-time-gaming-streamer/"
                        >
                          Read More...
                        </a>
                      </div>
                    </div>
                    <div className="content-actions">
                      <div className="content-action">
                        <div className="meta-line">
                          <div className="reaction-item-list meta-line-list ">
                            <div className="reaction-item-wrap">
                              <div
                                className="reaction-item"
                                style={{ position: "relative" }}
                              >
                                <img
                                  className="reaction-image"
                                  src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/love.png"
                                  alt="reaction-love"
                                />
                                <div
                                  className="simple-dropdown padded"
                                  style={{
                                    position: "absolute",
                                    zIndex: 9999,
                                    bottom: 38,
                                    left: "-16px",
                                    opacity: 0,
                                    visibility: "hidden",
                                    transform: "translate(0px, 20px)",
                                    transition:
                                      "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
                                  }}
                                >
                                  <p className="simple-dropdown-text">
                                    <img
                                      className="reaction"
                                      src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/love.png"
                                      alt="reaction-love"
                                    />
                                    <span className="bold">Love</span>
                                  </p>
                                  <p className="simple-dropdown-text">
                                    Sarah Diamond
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="reaction-item-wrap">
                              <div
                                className="reaction-item"
                                style={{ position: "relative" }}
                              >
                                <img
                                  className="reaction-image"
                                  src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/wow.png"
                                  alt="reaction-wow"
                                />
                                <div
                                  className="simple-dropdown padded"
                                  style={{
                                    position: "absolute",
                                    zIndex: 9999,
                                    bottom: 38,
                                    left: "-16px",
                                    opacity: 0,
                                    visibility: "hidden",
                                    transform: "translate(0px, 20px)",
                                    transition:
                                      "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
                                  }}
                                >
                                  <p className="simple-dropdown-text">
                                    <img
                                      className="reaction"
                                      src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/wow.png"
                                      alt="reaction-wow"
                                    />
                                    <span className="bold">Wow</span>
                                  </p>
                                  <p className="simple-dropdown-text">
                                    Nicholas Grissom
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="reaction-item-wrap">
                              <div
                                className="reaction-item"
                                style={{ position: "relative" }}
                              >
                                <img
                                  className="reaction-image"
                                  src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/like.png"
                                  alt="reaction-like"
                                />
                                <div
                                  className="simple-dropdown padded"
                                  style={{
                                    position: "absolute",
                                    zIndex: 9999,
                                    bottom: 38,
                                    left: "-16px",
                                    opacity: 0,
                                    visibility: "hidden",
                                    transform: "translate(0px, 20px)",
                                    transition:
                                      "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
                                  }}
                                >
                                  <p className="simple-dropdown-text">
                                    <img
                                      className="reaction"
                                      src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/like.png"
                                      alt="reaction-like"
                                    />
                                    <span className="bold">Like</span>
                                  </p>
                                  <p className="simple-dropdown-text">
                                    Marina Valentine
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="meta-line-text meta-line-text-trigger">
                            3
                          </p>
                        </div>
                      </div>
                      <div className="content-action">
                        <div className="meta-line">
                          <a
                            className="meta-line-link"
                            href="https://odindesignthemes.com/vikinger-theme/heres-the-how-and-why-did-i-became-a-full-time-gaming-streamer/#comment-list"
                          >
                            0 Comments
                          </a>
                        </div>
                        <div className="meta-line">
                          <p className="meta-line-text">1 Share</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-footer">
              <div className="content-actions">
                <div className="content-action">
                  <div className="meta-line">
                    <div className="reaction-item-list meta-line-list ">
                      <div className="reaction-item-wrap">
                        <div
                          className="reaction-item"
                          style={{ position: "relative" }}
                        >
                          <img
                            className="reaction-image"
                            src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/happy.png"
                            alt="reaction-happy"
                          />
                          <div
                            className="simple-dropdown padded"
                            style={{
                              position: "absolute",
                              zIndex: 9999,
                              bottom: 38,
                              left: "-16px",
                              opacity: 0,
                              visibility: "hidden",
                              transform: "translate(0px, 20px)",
                              transition:
                                "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
                            }}
                          >
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/happy.png"
                                alt="reaction-happy"
                              />
                              <span className="bold">Happy</span>
                            </p>
                            <p className="simple-dropdown-text">
                              Nicholas Grissom
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="meta-line-text meta-line-text-trigger">1</p>
                  </div>
                </div>
                <div className="content-action">
                  <div className="meta-line">
                    <p className="meta-line-text">0 Comments</p>
                  </div>
                  <div className="meta-line">
                    <p className="meta-line-text">0 Shares</p>
                  </div>
                </div>
              </div>
              <div className="post-comments" />
            </div>
          </div>
          <div className="widget-box no-padding animate-slide-down ">
            <div className="tag-stickers" />
            <div className="widget-box-status">
              <div className="widget-box-status-header">
                <div className="user-status">
                  <div className="user-status-avatar">
                    <a
                      className="user-avatar small  no-outline no-border "
                      href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/"
                    >
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/1/5f6d2c93a53d1-bpfull.jpg"
                          style={{
                            width: 30,
                            height: 32,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={30}
                            height={32}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress">
                        <div
                          className="hexagon-progress-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress-border">
                        <div
                          className="hexagon-border-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                          <div
                            className="hexagon-22-24"
                            style={{
                              width: 22,
                              height: 24,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={22}
                              height={24}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <div className="user-avatar-badge-content">
                          <div
                            className="hexagon-dark-16-18"
                            style={{
                              width: 16,
                              height: 18,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={16}
                              height={18}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <p className="user-avatar-badge-text">4</p>
                      </div>
                    </a>
                  </div>
                  <div className="user-status-title medium">
                    <a href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/">
                      Marina Valentine
                    </a>
                    <span>
                      <span className="bp-verified-badge" />
                    </span>
                    <div className="vikinger-pmpro-level-tag vikinger-pmpro-level-tag_small">
                      <p className="vikinger-pmpro-level-tag-text">
                        Pro Member
                      </p>
                    </div>
                    <span> posted a photo update</span>
                  </div>
                  <p className="user-status-text small">1 year ago</p>
                </div>
              </div>
              <div className="widget-box-status-content">
                <p className="widget-box-status-text">
                  This is a GIF upload test!
                </p>
                <figure className="widget-box-picture">
                  <img
                    src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/vikinger/member/1/giphy.gif"
                    alt="giphy"
                  />
                </figure>
              </div>
            </div>
            <div className="post-footer">
              <div className="content-actions">
                <div className="content-action">
                  <div className="meta-line">
                    <div className="reaction-item-list meta-line-list ">
                      <div className="reaction-item-wrap">
                        <div
                          className="reaction-item"
                          style={{ position: "relative" }}
                        >
                          <img
                            className="reaction-image"
                            src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/like.png"
                            alt="reaction-like"
                          />
                          <div
                            className="simple-dropdown padded"
                            style={{
                              position: "absolute",
                              zIndex: 9999,
                              bottom: 38,
                              left: "-16px",
                              opacity: 0,
                              visibility: "hidden",
                              transform: "translate(0px, 20px)",
                              transition:
                                "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
                            }}
                          >
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/like.png"
                                alt="reaction-like"
                              />
                              <span className="bold">Like</span>
                            </p>
                            <p className="simple-dropdown-text">
                              Nicholas Grissom
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="reaction-item-wrap">
                        <div
                          className="reaction-item"
                          style={{ position: "relative" }}
                        >
                          <img
                            className="reaction-image"
                            src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/funny.png"
                            alt="reaction-funny"
                          />
                          <div
                            className="simple-dropdown padded"
                            style={{
                              position: "absolute",
                              zIndex: 9999,
                              bottom: 38,
                              left: "-16px",
                              opacity: 0,
                              visibility: "hidden",
                              transform: "translate(0px, 20px)",
                              transition:
                                "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
                            }}
                          >
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/funny.png"
                                alt="reaction-funny"
                              />
                              <span className="bold">Funny</span>
                            </p>
                            <p className="simple-dropdown-text">Neko Bebop</p>
                          </div>
                        </div>
                      </div>
                      <div className="reaction-item-wrap">
                        <div
                          className="reaction-item"
                          style={{ position: "relative" }}
                        >
                          <img
                            className="reaction-image"
                            src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/love.png"
                            alt="reaction-love"
                          />
                          <div
                            className="simple-dropdown padded"
                            style={{
                              position: "absolute",
                              zIndex: 9999,
                              bottom: 38,
                              left: "-16px",
                              opacity: 0,
                              visibility: "hidden",
                              transform: "translate(0px, 20px)",
                              transition:
                                "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
                            }}
                          >
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/love.png"
                                alt="reaction-love"
                              />
                              <span className="bold">Love</span>
                            </p>
                            <p className="simple-dropdown-text">
                              Marina Valentine
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="meta-line-text meta-line-text-trigger">3</p>
                  </div>
                </div>
                <div className="content-action">
                  <div className="meta-line">
                    <p className="meta-line-text">0 Comments</p>
                  </div>
                  <div className="meta-line">
                    <p className="meta-line-text">0 Shares</p>
                  </div>
                </div>
              </div>
              <div className="post-comments" />
            </div>
          </div>
          <div className="widget-box no-padding animate-slide-down ">
            <div className="tag-stickers" />
            <div className="widget-box-status">
              <div className="widget-box-status-header">
                <div className="user-status">
                  <div className="user-status-avatar">
                    <a
                      className="user-avatar small  no-outline no-border "
                      href="https://odindesignthemes.com/vikinger-theme/members/sanstrange/"
                    >
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/10/5f6d2f896ea48-bpfull.jpg"
                          style={{
                            width: 30,
                            height: 32,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={30}
                            height={32}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress">
                        <div
                          className="hexagon-progress-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress-border">
                        <div
                          className="hexagon-border-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                          <div
                            className="hexagon-22-24"
                            style={{
                              width: 22,
                              height: 24,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={22}
                              height={24}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <div className="user-avatar-badge-content">
                          <div
                            className="hexagon-dark-16-18"
                            style={{
                              width: 16,
                              height: 18,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={16}
                              height={18}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <p className="user-avatar-badge-text">1</p>
                      </div>
                    </a>
                  </div>
                  <div className="user-status-title medium">
                    <a href="https://odindesignthemes.com/vikinger-theme/members/sanstrange/">
                      Sandra Strange
                    </a>
                    <span>
                      <span className="bp-verified-badge" />
                    </span>
                    <span>
                      {" "}
                      joined the group{" "}
                      <a href="https://odindesignthemes.com/vikinger-theme/groups/street-artists/">
                        Street Artists
                      </a>
                    </span>
                  </div>
                  <p className="user-status-text small">1 year ago</p>
                </div>
              </div>
              <div className="widget-box-status-content">
                <div className="user-preview-widget">
                  <a href="https://odindesignthemes.com/vikinger-theme/groups/street-artists/">
                    <div
                      className="user-preview-widget-cover"
                      style={{
                        background:
                          'url("https://odindesignthemes.com/vikinger-theme/wp-content/uploads/buddypress/groups/3/cover-image/5f6e4aced8e45-bp-cover-image.jpg") center center / cover no-repeat'
                      }}
                    />
                  </a>
                  <div className="tag-sticker ">
                    <svg className="icon-public tag-sticker-icon  ">
                      <use href="#svg-public" />
                    </svg>
                  </div>
                  <div className="user-short-description small">
                    <a
                      className="user-avatar no-stats   user-short-description-avatar"
                      href="https://odindesignthemes.com/vikinger-theme/groups/street-artists/"
                    >
                      <div className="user-avatar-border">
                        <div
                          className="hexagon-100-110"
                          style={{
                            width: 100,
                            height: 110,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={100}
                            height={110}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-82-90"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/group-avatars/3/5f6e4ace97f3f-bpfull.jpg"
                          style={{
                            width: 82,
                            height: 90,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={82}
                            height={90}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                    </a>
                    <p className="user-short-description-title">
                      <a href="https://odindesignthemes.com/vikinger-theme/groups/street-artists/">
                        Street Artists
                      </a>
                    </p>
                    <p className="user-short-description-text">
                      <a href="https://odindesignthemes.com/vikinger-theme/groups/street-artists/">
                        @street-artists
                      </a>
                    </p>
                  </div>
                  <div className="user-preview-widget-footer">
                    <div className="user-preview-widget-footer-action" />
                    <div className="user-stats">
                      <div className="user-stat">
                        <p className="user-stat-title">4</p>
                        <p className="user-stat-text">Members</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-footer">
              <div className="content-actions">
                <div className="content-action">
                  <div className="meta-line">
                    <div className="reaction-item-list meta-line-list ">
                      <div className="reaction-item-wrap">
                        <div
                          className="reaction-item"
                          style={{ position: "relative" }}
                        >
                          <img
                            className="reaction-image"
                            src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/love.png"
                            alt="reaction-love"
                          />
                          <div
                            className="simple-dropdown padded"
                            style={{
                              position: "absolute",
                              zIndex: 9999,
                              bottom: 38,
                              left: "-16px",
                              opacity: 0,
                              visibility: "hidden",
                              transform: "translate(0px, 20px)",
                              transition:
                                "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
                            }}
                          >
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/love.png"
                                alt="reaction-love"
                              />
                              <span className="bold">Love</span>
                            </p>
                            <p className="simple-dropdown-text">
                              Marina Valentine
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="meta-line-text meta-line-text-trigger">1</p>
                  </div>
                </div>
                <div className="content-action">
                  <div className="meta-line">
                    <p className="meta-line-text">1 Comment</p>
                  </div>
                  <div className="meta-line">
                    <p className="meta-line-text">0 Shares</p>
                  </div>
                </div>
              </div>
              <div className="post-comments">
                <div className="post-comment-list-wrap">
                  <div className="post-comment-list ">
                    <div className="post-comment animate-slide-down reply-1">
                      <a
                        className="user-avatar small  no-outline no-border "
                        href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/"
                      >
                        <div className="user-avatar-content">
                          <div
                            className="hexagon-image-30-32"
                            data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/1/5f6d2c93a53d1-bpfull.jpg"
                            style={{
                              width: 30,
                              height: 32,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={30}
                              height={32}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <div className="user-avatar-progress">
                          <div
                            className="hexagon-progress-40-44"
                            style={{
                              width: 40,
                              height: 44,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={40}
                              height={44}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <div className="user-avatar-progress-border">
                          <div
                            className="hexagon-border-40-44"
                            style={{
                              width: 40,
                              height: 44,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={40}
                              height={44}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <div className="user-avatar-badge">
                          <div className="user-avatar-badge-border">
                            <div
                              className="hexagon-22-24"
                              style={{
                                width: 22,
                                height: 24,
                                position: "relative"
                              }}
                            >
                              <canvas
                                width={22}
                                height={24}
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0
                                }}
                              />
                            </div>
                          </div>
                          <div className="user-avatar-badge-content">
                            <div
                              className="hexagon-dark-16-18"
                              style={{
                                width: 16,
                                height: 18,
                                position: "relative"
                              }}
                            >
                              <canvas
                                width={16}
                                height={18}
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0
                                }}
                              />
                            </div>
                          </div>
                          <p className="user-avatar-badge-text">4</p>
                        </div>
                      </a>
                      <div className="post-comment-text ">
                        <a
                          className="post-comment-text-author"
                          href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/"
                        >
                          Marina Valentine
                        </a>
                        <span>
                          <span className="bp-verified-badge" />
                        </span>
                        <div className="vikinger-pmpro-level-tag vikinger-pmpro-level-tag_small">
                          <p className="vikinger-pmpro-level-tag-text">
                            Pro Member
                          </p>
                        </div>
                        <div className="post-comment-text-content">Hello!</div>
                      </div>
                      <div className="content-actions">
                        <div className="content-action">
                          <div className="meta-line">
                            <p className="meta-line-timestamp">1 year ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="widget-box no-padding animate-slide-down ">
            <div className="tag-stickers" />
            <div className="widget-box-status">
              <div className="widget-box-status-header">
                <div className="user-status">
                  <div className="user-status-avatar">
                    <a
                      className="user-avatar small  no-outline no-border "
                      href="https://odindesignthemes.com/vikinger-theme/members/sakuraro/"
                    >
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/9/5f6d2f71afac2-bpfull.jpg"
                          style={{
                            width: 30,
                            height: 32,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={30}
                            height={32}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress">
                        <div
                          className="hexagon-progress-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress-border">
                        <div
                          className="hexagon-border-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                          <div
                            className="hexagon-22-24"
                            style={{
                              width: 22,
                              height: 24,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={22}
                              height={24}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <div className="user-avatar-badge-content">
                          <div
                            className="hexagon-dark-16-18"
                            style={{
                              width: 16,
                              height: 18,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={16}
                              height={18}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <p className="user-avatar-badge-text">4</p>
                      </div>
                    </a>
                  </div>
                  <div className="user-status-title medium">
                    <a href="https://odindesignthemes.com/vikinger-theme/members/sakuraro/">
                      Rosie Sakura
                    </a>
                    <span> posted an update</span>
                  </div>
                  <p className="user-status-text small">1 year ago</p>
                </div>
              </div>
              <div className="widget-box-status-content">
                <p className="widget-box-status-text">
                  Hello!! This looks great!
                </p>
              </div>
            </div>
            <div className="post-footer">
              <div className="content-actions">
                <div className="content-action">
                  <div className="meta-line">
                    <div className="reaction-item-list meta-line-list ">
                      <div className="reaction-item-wrap">
                        <div
                          className="reaction-item"
                          style={{ position: "relative" }}
                        >
                          <img
                            className="reaction-image"
                            src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/love.png"
                            alt="reaction-love"
                          />
                          <div
                            className="simple-dropdown padded"
                            style={{
                              position: "absolute",
                              zIndex: 9999,
                              bottom: 38,
                              left: "-16px",
                              opacity: 0,
                              visibility: "hidden",
                              transform: "translate(0px, 20px)",
                              transition:
                                "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
                            }}
                          >
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/love.png"
                                alt="reaction-love"
                              />
                              <span className="bold">Love</span>
                            </p>
                            <p className="simple-dropdown-text">Rosie Sakura</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="meta-line-text meta-line-text-trigger">1</p>
                  </div>
                </div>
                <div className="content-action">
                  <div className="meta-line">
                    <p className="meta-line-text">1 Comment</p>
                  </div>
                  <div className="meta-line">
                    <p className="meta-line-text">0 Shares</p>
                  </div>
                </div>
              </div>
              <div className="post-comments">
                <div className="post-comment-list-wrap">
                  <div className="post-comment-list ">
                    <div className="post-comment animate-slide-down reply-1">
                      <a
                        className="user-avatar small  no-outline no-border "
                        href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/"
                      >
                        <div className="user-avatar-content">
                          <div
                            className="hexagon-image-30-32"
                            data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/1/5f6d2c93a53d1-bpfull.jpg"
                            style={{
                              width: 30,
                              height: 32,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={30}
                              height={32}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <div className="user-avatar-progress">
                          <div
                            className="hexagon-progress-40-44"
                            style={{
                              width: 40,
                              height: 44,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={40}
                              height={44}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <div className="user-avatar-progress-border">
                          <div
                            className="hexagon-border-40-44"
                            style={{
                              width: 40,
                              height: 44,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={40}
                              height={44}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <div className="user-avatar-badge">
                          <div className="user-avatar-badge-border">
                            <div
                              className="hexagon-22-24"
                              style={{
                                width: 22,
                                height: 24,
                                position: "relative"
                              }}
                            >
                              <canvas
                                width={22}
                                height={24}
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0
                                }}
                              />
                            </div>
                          </div>
                          <div className="user-avatar-badge-content">
                            <div
                              className="hexagon-dark-16-18"
                              style={{
                                width: 16,
                                height: 18,
                                position: "relative"
                              }}
                            >
                              <canvas
                                width={16}
                                height={18}
                                style={{
                                  position: "absolute",
                                  top: 0,
                                  left: 0
                                }}
                              />
                            </div>
                          </div>
                          <p className="user-avatar-badge-text">4</p>
                        </div>
                      </a>
                      <div className="post-comment-text ">
                        <a
                          className="post-comment-text-author"
                          href="https://odindesignthemes.com/vikinger-theme/members/odindesign-themes/"
                        >
                          Marina Valentine
                        </a>
                        <span>
                          <span className="bp-verified-badge" />
                        </span>
                        <div className="vikinger-pmpro-level-tag vikinger-pmpro-level-tag_small">
                          <p className="vikinger-pmpro-level-tag-text">
                            Pro Member
                          </p>
                        </div>
                        <div className="post-comment-text-content">thanks!</div>
                      </div>
                      <div className="content-actions">
                        <div className="content-action">
                          <div className="meta-line">
                            <p className="meta-line-timestamp">1 year ago</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="widget-box no-padding animate-slide-down ">
            <div className="tag-stickers" />
            <div className="widget-box-status">
              <div className="widget-box-status-header">
                <div className="user-status">
                  <div className="user-status-avatar">
                    <a
                      className="user-avatar small  no-outline no-border "
                      href="https://odindesignthemes.com/vikinger-theme/members/sakuraro/"
                    >
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/9/5f6d2f71afac2-bpfull.jpg"
                          style={{
                            width: 30,
                            height: 32,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={30}
                            height={32}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress">
                        <div
                          className="hexagon-progress-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress-border">
                        <div
                          className="hexagon-border-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                          <div
                            className="hexagon-22-24"
                            style={{
                              width: 22,
                              height: 24,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={22}
                              height={24}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <div className="user-avatar-badge-content">
                          <div
                            className="hexagon-dark-16-18"
                            style={{
                              width: 16,
                              height: 18,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={16}
                              height={18}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <p className="user-avatar-badge-text">4</p>
                      </div>
                    </a>
                  </div>
                  <div className="user-status-title medium">
                    <a href="https://odindesignthemes.com/vikinger-theme/members/sakuraro/">
                      Rosie Sakura
                    </a>
                    <span>
                      {" "}
                      joined the group{" "}
                      <a href="https://odindesignthemes.com/vikinger-theme/groups/stream-designers/">
                        Stream Designers
                      </a>
                    </span>
                  </div>
                  <p className="user-status-text small">1 year ago</p>
                </div>
              </div>
              <div className="widget-box-status-content">
                <div className="user-preview-widget">
                  <a href="https://odindesignthemes.com/vikinger-theme/groups/stream-designers/">
                    <div
                      className="user-preview-widget-cover"
                      style={{
                        background:
                          'url("https://odindesignthemes.com/vikinger-theme/wp-content/uploads/buddypress/groups/2/cover-image/5f6e4aafbf820-bp-cover-image.jpg") center center / cover no-repeat'
                      }}
                    />
                  </a>
                  <div className="tag-sticker ">
                    <svg className="icon-public tag-sticker-icon  ">
                      <use href="#svg-public" />
                    </svg>
                  </div>
                  <div className="user-short-description small">
                    <a
                      className="user-avatar no-stats   user-short-description-avatar"
                      href="https://odindesignthemes.com/vikinger-theme/groups/stream-designers/"
                    >
                      <div className="user-avatar-border">
                        <div
                          className="hexagon-100-110"
                          style={{
                            width: 100,
                            height: 110,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={100}
                            height={110}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-82-90"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/group-avatars/2/5f6e4aaf89ab9-bpfull.jpg"
                          style={{
                            width: 82,
                            height: 90,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={82}
                            height={90}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                    </a>
                    <p className="user-short-description-title">
                      <a href="https://odindesignthemes.com/vikinger-theme/groups/stream-designers/">
                        Stream Designers
                      </a>
                    </p>
                    <p className="user-short-description-text">
                      <a href="https://odindesignthemes.com/vikinger-theme/groups/stream-designers/">
                        @stream-designers
                      </a>
                    </p>
                  </div>
                  <div className="user-preview-widget-footer">
                    <div className="user-preview-widget-footer-action" />
                    <div className="user-stats">
                      <div className="user-stat">
                        <p className="user-stat-title">3</p>
                        <p className="user-stat-text">Members</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-footer">
              <div className="content-actions">
                <div className="content-action" />
                <div className="content-action">
                  <div className="meta-line">
                    <p className="meta-line-text">0 Comments</p>
                  </div>
                  <div className="meta-line">
                    <p className="meta-line-text">0 Shares</p>
                  </div>
                </div>
              </div>
              <div className="post-comments" />
            </div>
          </div>
          <div className="widget-box no-padding animate-slide-down ">
            <div className="tag-stickers" />
            <div className="widget-box-status">
              <div className="widget-box-status-header">
                <div className="user-status">
                  <div className="user-status-avatar">
                    <a
                      className="user-avatar small  no-outline no-border "
                      href="https://odindesignthemes.com/vikinger-theme/members/greengoo/"
                    >
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/7/5f6d2f62a8690-bpfull.jpg"
                          style={{
                            width: 30,
                            height: 32,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={30}
                            height={32}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress">
                        <div
                          className="hexagon-progress-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress-border">
                        <div
                          className="hexagon-border-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                          <div
                            className="hexagon-22-24"
                            style={{
                              width: 22,
                              height: 24,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={22}
                              height={24}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <div className="user-avatar-badge-content">
                          <div
                            className="hexagon-dark-16-18"
                            style={{
                              width: 16,
                              height: 18,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={16}
                              height={18}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <p className="user-avatar-badge-text">1</p>
                      </div>
                    </a>
                  </div>
                  <div className="user-status-title medium">
                    <a href="https://odindesignthemes.com/vikinger-theme/members/greengoo/">
                      The Green Goo
                    </a>
                    <span> posted an update</span>
                  </div>
                  <p className="user-status-text small">1 year ago</p>
                </div>
              </div>
              <div className="widget-box-status-content">
                <p className="widget-box-status-text">
                  The badges page looks awesome!
                  <a
                    href=" https://www.youtube.com/watch?v=OAjeraXClSs"
                    target="_blank"
                  >
                    {" "}
                    https://www.youtube.com/watch?v=OAjeraXClSs
                  </a>
                </p>
                <div className="iframe-wrap">
                  <iframe
                    src="https://www.youtube.com/embed/OAjeraXClSs?enablejsapi=1"
                    allowFullScreen
                    id="widget4"
                  />
                </div>
              </div>
            </div>
            <div className="post-footer">
              <div className="content-actions">
                <div className="content-action">
                  <div className="meta-line">
                    <div className="reaction-item-list meta-line-list ">
                      <div className="reaction-item-wrap">
                        <div
                          className="reaction-item"
                          style={{ position: "relative" }}
                        >
                          <img
                            className="reaction-image"
                            src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/wow.png"
                            alt="reaction-wow"
                          />
                          <div
                            className="simple-dropdown padded"
                            style={{
                              position: "absolute",
                              zIndex: 9999,
                              bottom: 38,
                              left: "-16px",
                              opacity: 0,
                              visibility: "hidden",
                              transform: "translate(0px, 20px)",
                              transition:
                                "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
                            }}
                          >
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/wow.png"
                                alt="reaction-wow"
                              />
                              <span className="bold">Wow</span>
                            </p>
                            <p className="simple-dropdown-text">
                              The Green Goo
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="meta-line-text meta-line-text-trigger">1</p>
                  </div>
                </div>
                <div className="content-action">
                  <div className="meta-line">
                    <p className="meta-line-text">0 Comments</p>
                  </div>
                  <div className="meta-line">
                    <p className="meta-line-text">0 Shares</p>
                  </div>
                </div>
              </div>
              <div className="post-comments" />
            </div>
          </div>
          <div className="widget-box no-padding animate-slide-down ">
            <div className="tag-stickers" />
            <div className="widget-box-status">
              <div className="widget-box-status-header">
                <div className="user-status">
                  <div className="user-status-avatar">
                    <a
                      className="user-avatar small  no-outline no-border "
                      href="https://odindesignthemes.com/vikinger-theme/members/dgreyson/"
                    >
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/8/5f6d2f6a96770-bpfull.jpg"
                          style={{
                            width: 30,
                            height: 32,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={30}
                            height={32}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress">
                        <div
                          className="hexagon-progress-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress-border">
                        <div
                          className="hexagon-border-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                          <div
                            className="hexagon-22-24"
                            style={{
                              width: 22,
                              height: 24,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={22}
                              height={24}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <div className="user-avatar-badge-content">
                          <div
                            className="hexagon-dark-16-18"
                            style={{
                              width: 16,
                              height: 18,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={16}
                              height={18}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <p className="user-avatar-badge-text">1</p>
                      </div>
                    </a>
                  </div>
                  <div className="user-status-title medium">
                    <a href="https://odindesignthemes.com/vikinger-theme/members/dgreyson/">
                      Damian Greyson
                    </a>{" "}
                    and
                    <a href="https://odindesignthemes.com/vikinger-theme/members/greengoo/">
                      {" "}
                      The Green Goo
                    </a>
                    <span> are now friends</span>
                  </div>
                  <p className="user-status-text small">1 year ago</p>
                </div>
              </div>
              <div className="widget-box-status-content">
                <div className="user-preview-widget">
                  <a href="https://odindesignthemes.com/vikinger-theme/members/greengoo/">
                    <div
                      className="user-preview-widget-cover"
                      style={{
                        background:
                          'url("https://odindesignthemes.com/vikinger-theme/wp-content/uploads/buddypress/members/7/cover-image/5f6d2f638c845-bp-cover-image.jpg") center center / cover no-repeat'
                      }}
                    />
                  </a>
                  <div className="user-short-description small">
                    <a
                      className="user-avatar    user-short-description-avatar"
                      href="https://odindesignthemes.com/vikinger-theme/members/greengoo/"
                    >
                      <div className="user-avatar-border">
                        <div
                          className="hexagon-100-110"
                          style={{
                            width: 100,
                            height: 110,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={100}
                            height={110}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-68-74"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/7/5f6d2f62a8690-bpfull.jpg"
                          style={{
                            width: 68,
                            height: 74,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={68}
                            height={74}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress">
                        <div
                          className="hexagon-progress-84-92"
                          style={{
                            width: 84,
                            height: 92,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={84}
                            height={92}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress-border">
                        <div
                          className="hexagon-border-84-92"
                          style={{
                            width: 84,
                            height: 92,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={84}
                            height={92}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                          <div
                            className="hexagon-28-32"
                            style={{
                              width: 28,
                              height: 32,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={28}
                              height={32}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <div className="user-avatar-badge-content">
                          <div
                            className="hexagon-dark-22-24"
                            style={{
                              width: 22,
                              height: 24,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={22}
                              height={24}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <p className="user-avatar-badge-text">1</p>
                      </div>
                    </a>
                    <p className="user-short-description-title">
                      <a href="https://odindesignthemes.com/vikinger-theme/members/greengoo/">
                        The Green Goo
                      </a>
                    </p>
                    <p className="user-short-description-text">
                      <a href="https://odindesignthemes.com/vikinger-theme/members/greengoo/">
                        @greengoo
                      </a>
                    </p>
                  </div>
                  <div className="user-preview-widget-footer">
                    <div className="user-preview-widget-footer-action" />
                    <div className="user-preview-widget-footer-action" />
                  </div>
                </div>
              </div>
            </div>
            <div className="post-footer">
              <div className="content-actions">
                <div className="content-action" />
                <div className="content-action">
                  <div className="meta-line">
                    <p className="meta-line-text">0 Comments</p>
                  </div>
                  <div className="meta-line">
                    <p className="meta-line-text">0 Shares</p>
                  </div>
                </div>
              </div>
              <div className="post-comments" />
            </div>
          </div>
          <div className="widget-box no-padding animate-slide-down ">
            <div className="tag-stickers" />
            <div className="widget-box-status">
              <div className="widget-box-status-header">
                <div className="user-status">
                  <div className="user-status-avatar">
                    <a
                      className="user-avatar small  no-outline no-border "
                      href="https://odindesignthemes.com/vikinger-theme/members/nickgrissom/"
                    >
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/4/5f6d2f1fd4af8-bpfull.jpg"
                          style={{
                            width: 30,
                            height: 32,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={30}
                            height={32}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress">
                        <div
                          className="hexagon-progress-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress-border">
                        <div
                          className="hexagon-border-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                          <div
                            className="hexagon-22-24"
                            style={{
                              width: 22,
                              height: 24,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={22}
                              height={24}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <div className="user-avatar-badge-content">
                          <div
                            className="hexagon-dark-16-18"
                            style={{
                              width: 16,
                              height: 18,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={16}
                              height={18}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <p className="user-avatar-badge-text">1</p>
                      </div>
                    </a>
                  </div>
                  <div className="user-status-title medium">
                    <a href="https://odindesignthemes.com/vikinger-theme/members/nickgrissom/">
                      Nicholas Grissom
                    </a>
                    <span>
                      <span className="bp-verified-badge" />
                    </span>{" "}
                    and
                    <a href="https://odindesignthemes.com/vikinger-theme/members/diamond-s/">
                      {" "}
                      Sarah Diamond
                    </a>
                    <span> are now friends</span>
                  </div>
                  <p className="user-status-text small">1 year ago</p>
                </div>
              </div>
              <div className="widget-box-status-content">
                <div className="user-preview-widget">
                  <a href="https://odindesignthemes.com/vikinger-theme/members/diamond-s/">
                    <div
                      className="user-preview-widget-cover"
                      style={{
                        background:
                          'url("https://odindesignthemes.com/vikinger-theme/wp-content/uploads/buddypress/members/5/cover-image/5f6d2f589c282-bp-cover-image.jpg") center center / cover no-repeat'
                      }}
                    />
                  </a>
                  <div className="user-short-description small">
                    <a
                      className="user-avatar    user-short-description-avatar"
                      href="https://odindesignthemes.com/vikinger-theme/members/diamond-s/"
                    >
                      <div className="user-avatar-border">
                        <div
                          className="hexagon-100-110"
                          style={{
                            width: 100,
                            height: 110,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={100}
                            height={110}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-68-74"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/5/5f6d2f582b140-bpfull.jpg"
                          style={{
                            width: 68,
                            height: 74,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={68}
                            height={74}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress">
                        <div
                          className="hexagon-progress-84-92"
                          style={{
                            width: 84,
                            height: 92,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={84}
                            height={92}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress-border">
                        <div
                          className="hexagon-border-84-92"
                          style={{
                            width: 84,
                            height: 92,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={84}
                            height={92}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                          <div
                            className="hexagon-28-32"
                            style={{
                              width: 28,
                              height: 32,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={28}
                              height={32}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <div className="user-avatar-badge-content">
                          <div
                            className="hexagon-dark-22-24"
                            style={{
                              width: 22,
                              height: 24,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={22}
                              height={24}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <p className="user-avatar-badge-text">5</p>
                      </div>
                    </a>
                    <p className="user-short-description-title">
                      <a href="https://odindesignthemes.com/vikinger-theme/members/diamond-s/">
                        Sarah Diamond
                      </a>
                    </p>
                    <p className="user-short-description-text">
                      <a href="https://odindesignthemes.com/vikinger-theme/members/diamond-s/">
                        @diamond-s
                      </a>
                    </p>
                  </div>
                  <div className="user-preview-widget-footer">
                    <div className="user-preview-widget-footer-action" />
                    <div className="user-preview-widget-footer-action" />
                  </div>
                </div>
              </div>
            </div>
            <div className="post-footer">
              <div className="content-actions">
                <div className="content-action" />
                <div className="content-action">
                  <div className="meta-line">
                    <p className="meta-line-text">0 Comments</p>
                  </div>
                  <div className="meta-line">
                    <p className="meta-line-text">0 Shares</p>
                  </div>
                </div>
              </div>
              <div className="post-comments" />
            </div>
          </div>
          <div className="widget-box no-padding animate-slide-down ">
            <div className="tag-stickers" />
            <div className="widget-box-status">
              <div className="widget-box-status-header">
                <div className="user-status">
                  <div className="user-status-avatar">
                    <a
                      className="user-avatar small  no-outline no-border "
                      href="https://odindesignthemes.com/vikinger-theme/members/diamond-s/"
                    >
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/5/5f6d2f582b140-bpfull.jpg"
                          style={{
                            width: 30,
                            height: 32,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={30}
                            height={32}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress">
                        <div
                          className="hexagon-progress-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress-border">
                        <div
                          className="hexagon-border-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                          <div
                            className="hexagon-22-24"
                            style={{
                              width: 22,
                              height: 24,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={22}
                              height={24}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <div className="user-avatar-badge-content">
                          <div
                            className="hexagon-dark-16-18"
                            style={{
                              width: 16,
                              height: 18,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={16}
                              height={18}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <p className="user-avatar-badge-text">5</p>
                      </div>
                    </a>
                  </div>
                  <div className="user-status-title medium">
                    <a href="https://odindesignthemes.com/vikinger-theme/members/diamond-s/">
                      Sarah Diamond
                    </a>
                    <span> posted a photo update</span>
                  </div>
                  <p className="user-status-text small">1 year ago</p>
                </div>
              </div>
              <div className="widget-box-status-content">
                <p className="widget-box-status-text">
                  What do you think of my new cover image?
                </p>
                <figure className="widget-box-picture">
                  <img
                    src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/vikinger/member/5/witch_by_real_sonkes-d8hv0b1.jpg"
                    alt="witch_by_real_sonkes-d8hv0b1"
                  />
                </figure>
              </div>
            </div>
            <div className="post-footer">
              <div className="content-actions">
                <div className="content-action">
                  <div className="meta-line">
                    <div className="reaction-item-list meta-line-list ">
                      <div className="reaction-item-wrap">
                        <div
                          className="reaction-item"
                          style={{ position: "relative" }}
                        >
                          <img
                            className="reaction-image"
                            src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/love.png"
                            alt="reaction-love"
                          />
                          <div
                            className="simple-dropdown padded"
                            style={{
                              position: "absolute",
                              zIndex: 9999,
                              bottom: 38,
                              left: "-16px",
                              opacity: 0,
                              visibility: "hidden",
                              transform: "translate(0px, 20px)",
                              transition:
                                "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
                            }}
                          >
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/love.png"
                                alt="reaction-love"
                              />
                              <span className="bold">Love</span>
                            </p>
                            <p className="simple-dropdown-text">
                              Sarah Diamond
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="meta-line-text meta-line-text-trigger">1</p>
                  </div>
                </div>
                <div className="content-action">
                  <div className="meta-line">
                    <p className="meta-line-text">0 Comments</p>
                  </div>
                  <div className="meta-line">
                    <p className="meta-line-text">0 Shares</p>
                  </div>
                </div>
              </div>
              <div className="post-comments" />
            </div>
          </div>
          <div className="widget-box no-padding animate-slide-down ">
            <div className="tag-stickers" />
            <div className="widget-box-status">
              <div className="widget-box-status-header">
                <div className="user-status">
                  <div className="user-status-avatar">
                    <a
                      className="user-avatar small  no-outline no-border "
                      href="https://odindesignthemes.com/vikinger-theme/members/diamond-s/"
                    >
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/5/5f6d2f582b140-bpfull.jpg"
                          style={{
                            width: 30,
                            height: 32,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={30}
                            height={32}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress">
                        <div
                          className="hexagon-progress-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress-border">
                        <div
                          className="hexagon-border-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                          <div
                            className="hexagon-22-24"
                            style={{
                              width: 22,
                              height: 24,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={22}
                              height={24}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <div className="user-avatar-badge-content">
                          <div
                            className="hexagon-dark-16-18"
                            style={{
                              width: 16,
                              height: 18,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={16}
                              height={18}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <p className="user-avatar-badge-text">5</p>
                      </div>
                    </a>
                  </div>
                  <div className="user-status-title medium">
                    <a href="https://odindesignthemes.com/vikinger-theme/members/diamond-s/">
                      Sarah Diamond
                    </a>
                    <span>
                      {" "}
                      joined the group{" "}
                      <a href="https://odindesignthemes.com/vikinger-theme/groups/street-artists/">
                        Street Artists
                      </a>
                    </span>
                  </div>
                  <p className="user-status-text small">1 year ago</p>
                </div>
              </div>
              <div className="widget-box-status-content">
                <div className="user-preview-widget">
                  <a href="https://odindesignthemes.com/vikinger-theme/groups/street-artists/">
                    <div
                      className="user-preview-widget-cover"
                      style={{
                        background:
                          'url("https://odindesignthemes.com/vikinger-theme/wp-content/uploads/buddypress/groups/3/cover-image/5f6e4aced8e45-bp-cover-image.jpg") center center / cover no-repeat'
                      }}
                    />
                  </a>
                  <div className="tag-sticker ">
                    <svg className="icon-public tag-sticker-icon  ">
                      <use href="#svg-public" />
                    </svg>
                  </div>
                  <div className="user-short-description small">
                    <a
                      className="user-avatar no-stats   user-short-description-avatar"
                      href="https://odindesignthemes.com/vikinger-theme/groups/street-artists/"
                    >
                      <div className="user-avatar-border">
                        <div
                          className="hexagon-100-110"
                          style={{
                            width: 100,
                            height: 110,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={100}
                            height={110}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-82-90"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/group-avatars/3/5f6e4ace97f3f-bpfull.jpg"
                          style={{
                            width: 82,
                            height: 90,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={82}
                            height={90}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                    </a>
                    <p className="user-short-description-title">
                      <a href="https://odindesignthemes.com/vikinger-theme/groups/street-artists/">
                        Street Artists
                      </a>
                    </p>
                    <p className="user-short-description-text">
                      <a href="https://odindesignthemes.com/vikinger-theme/groups/street-artists/">
                        @street-artists
                      </a>
                    </p>
                  </div>
                  <div className="user-preview-widget-footer">
                    <div className="user-preview-widget-footer-action" />
                    <div className="user-stats">
                      <div className="user-stat">
                        <p className="user-stat-title">4</p>
                        <p className="user-stat-text">Members</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-footer">
              <div className="content-actions">
                <div className="content-action" />
                <div className="content-action">
                  <div className="meta-line">
                    <p className="meta-line-text">0 Comments</p>
                  </div>
                  <div className="meta-line">
                    <p className="meta-line-text">0 Shares</p>
                  </div>
                </div>
              </div>
              <div className="post-comments" />
            </div>
          </div>
          <div className="widget-box no-padding animate-slide-down ">
            <div className="tag-stickers" />
            <div className="widget-box-status">
              <div className="widget-box-status-header">
                <div className="user-status">
                  <div className="user-status-avatar">
                    <a
                      className="user-avatar small  no-outline no-border "
                      href="https://odindesignthemes.com/vikinger-theme/members/brdwonder/"
                    >
                      <div className="user-avatar-content">
                        <div
                          className="hexagon-image-30-32"
                          data-src="https://odindesignthemes.com/vikinger-theme/wp-content/uploads/avatars/6/5f6d2f1e67572-bpfull.jpg"
                          style={{
                            width: 30,
                            height: 32,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={30}
                            height={32}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress">
                        <div
                          className="hexagon-progress-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-progress-border">
                        <div
                          className="hexagon-border-40-44"
                          style={{
                            width: 40,
                            height: 44,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={40}
                            height={44}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                      </div>
                      <div className="user-avatar-badge">
                        <div className="user-avatar-badge-border">
                          <div
                            className="hexagon-22-24"
                            style={{
                              width: 22,
                              height: 24,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={22}
                              height={24}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <div className="user-avatar-badge-content">
                          <div
                            className="hexagon-dark-16-18"
                            style={{
                              width: 16,
                              height: 18,
                              position: "relative"
                            }}
                          >
                            <canvas
                              width={16}
                              height={18}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                        </div>
                        <p className="user-avatar-badge-text">2</p>
                      </div>
                    </a>
                  </div>
                  <div className="user-status-title medium">
                    <a href="https://odindesignthemes.com/vikinger-theme/members/brdwonder/">
                      Bearded Wonder
                    </a>
                    <span> posted a photo update</span>
                  </div>
                  <p className="user-status-text small">1 year ago</p>
                </div>
              </div>
              <div className="widget-box-status-content">
                <p className="widget-box-status-text">
                  Check out this cool street art!
                </p>
                <div className="picture-collage">
                  <div className="picture-collage-row ">
                    <div className="picture-collage-item">
                      <div className="photo-preview-wrap">
                        <div className="photo-preview ">
                          <div
                            className="photo-preview-image"
                            style={{
                              background:
                                'url("https://odindesignthemes.com/vikinger-theme/wp-content/uploads/vikinger/member/6/jeff-kepler-R3IRoTjU0mk-unsplash.jpg") center center / cover no-repeat'
                            }}
                          />
                          <div className="photo-preview-info">
                            <div className="reaction-count-list">
                              <div className="reaction-count negative">
                                <svg className="icon-thumbs-up reaction-count-icon">
                                  <use href="#svg-thumbs-up" />
                                </svg>
                                <p className="reaction-count-text">0</p>
                              </div>
                              <div className="reaction-count negative">
                                <svg className="icon-comment reaction-count-icon">
                                  <use href="#svg-comment" />
                                </svg>
                                <p className="reaction-count-text">0</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div />
                      </div>
                    </div>
                    <div className="picture-collage-item">
                      <div className="photo-preview-wrap">
                        <div className="photo-preview ">
                          <div
                            className="photo-preview-image"
                            style={{
                              background:
                                'url("https://odindesignthemes.com/vikinger-theme/wp-content/uploads/vikinger/member/6/matthew-t-rader-RgicPdBNAHo-unsplash(1).jpg") center center / cover no-repeat'
                            }}
                          />
                          <div className="photo-preview-info">
                            <div className="reaction-count-list">
                              <div className="reaction-count negative">
                                <svg className="icon-thumbs-up reaction-count-icon">
                                  <use href="#svg-thumbs-up" />
                                </svg>
                                <p className="reaction-count-text">0</p>
                              </div>
                              <div className="reaction-count negative">
                                <svg className="icon-comment reaction-count-icon">
                                  <use href="#svg-comment" />
                                </svg>
                                <p className="reaction-count-text">0</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div />
                      </div>
                    </div>
                    <div className="picture-collage-item">
                      <div className="photo-preview-wrap">
                        <div className="photo-preview ">
                          <div
                            className="photo-preview-image"
                            style={{
                              background:
                                'url("https://odindesignthemes.com/vikinger-theme/wp-content/uploads/vikinger/member/6/stacey-gabrielle-koenitz-rozells-484681-unsplash.jpg") center center / cover no-repeat'
                            }}
                          />
                          <div className="photo-preview-info">
                            <div className="reaction-count-list">
                              <div className="reaction-count negative">
                                <svg className="icon-thumbs-up reaction-count-icon">
                                  <use href="#svg-thumbs-up" />
                                </svg>
                                <p className="reaction-count-text">0</p>
                              </div>
                              <div className="reaction-count negative">
                                <svg className="icon-comment reaction-count-icon">
                                  <use href="#svg-comment" />
                                </svg>
                                <p className="reaction-count-text">0</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="post-footer">
              <div className="content-actions">
                <div className="content-action">
                  <div className="meta-line">
                    <div className="reaction-item-list meta-line-list ">
                      <div className="reaction-item-wrap">
                        <div
                          className="reaction-item"
                          style={{ position: "relative" }}
                        >
                          <img
                            className="reaction-image"
                            src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/like.png"
                            alt="reaction-like"
                          />
                          <div
                            className="simple-dropdown padded"
                            style={{
                              position: "absolute",
                              zIndex: 9999,
                              bottom: 38,
                              left: "-16px",
                              opacity: 0,
                              visibility: "hidden",
                              transform: "translate(0px, 20px)",
                              transition:
                                "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
                            }}
                          >
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/like.png"
                                alt="reaction-like"
                              />
                              <span className="bold">Like</span>
                            </p>
                            <p className="simple-dropdown-text">
                              Bearded Wonder
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="reaction-item-wrap">
                        <div
                          className="reaction-item"
                          style={{ position: "relative" }}
                        >
                          <img
                            className="reaction-image"
                            src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/happy.png"
                            alt="reaction-happy"
                          />
                          <div
                            className="simple-dropdown padded"
                            style={{
                              position: "absolute",
                              zIndex: 9999,
                              bottom: 38,
                              left: "-16px",
                              opacity: 0,
                              visibility: "hidden",
                              transform: "translate(0px, 20px)",
                              transition:
                                "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
                            }}
                          >
                            <p className="simple-dropdown-text">
                              <img
                                className="reaction"
                                src="https://odindesignthemes.com/vikinger-theme/wp-content/plugins/vkreact//img/happy.png"
                                alt="reaction-happy"
                              />
                              <span className="bold">Happy</span>
                            </p>
                            <p className="simple-dropdown-text">
                              Marina Valentine
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="meta-line-text meta-line-text-trigger">2</p>
                  </div>
                </div>
                <div className="content-action">
                  <div className="meta-line">
                    <p className="meta-line-text">0 Comments</p>
                  </div>
                  <div className="meta-line">
                    <p className="meta-line-text">0 Shares</p>
                  </div>
                </div>
              </div>
              <div className="post-comments" />
            </div>
          </div>
          <div className="page-loader-indicator">
            <div className="loader-bars">
              <div className="loader-bar" />
              <div className="loader-bar" />
              <div className="loader-bar" />
              <div className="loader-bar" />
              <div className="loader-bar" />
              <div className="loader-bar" />
              <div className="loader-bar" />
              <div className="loader-bar" />
            </div>
          </div>
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

export default function LoggedIn(props){
    return (
        <>
        <nav
          id="navigation-widget-small"
          className="navigation-widget navigation-widget-desktop closed sidebar left delayed"
        >
          {/* USER AVATAR */}
          <a
            className="user-avatar small no-outline online"
            href="profile-timeline.html"
          >
            {/* USER AVATAR CONTENT */}
            <div className="user-avatar-content">
              {/* HEXAGON */}
              <div
                className="hexagon-image-30-32"
                data-src="/img/avatar/01.jpg"
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
              <p className="user-avatar-badge-text">24</p>
              {/* /USER AVATAR BADGE TEXT */}
            </div>
            {/* /USER AVATAR BADGE */}
          </a>
          {/* /USER AVATAR */}
          {/* MENU */}
          <ul className="menu small">
            {/* MENU ITEM */}
            <li className="menu-item active">
              {/* MENU ITEM LINK */}
              <a
                className="menu-item-link text-tooltip-tfr"
                href="newsfeed.html"
                data-title="Newsfeed"
                style={{ position: "relative" }}
              >
                {/* MENU ITEM LINK ICON */}
                <svg className="menu-item-link-icon icon-newsfeed">
                  <use xlinkHref="#svg-newsfeed" />
                </svg>
                {/* /MENU ITEM LINK ICON */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    right: "-84px",
                    top: "50%",
                    marginTop: "-12px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(10px, 0px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Newsfeed</p>
                </div>
              </a>
              {/* /MENU ITEM LINK */}
            </li>
            {/* /MENU ITEM */}
            {/* MENU ITEM */}
            <li className="menu-item">
              {/* MENU ITEM LINK */}
              <a
                className="menu-item-link text-tooltip-tfr"
                href="overview.html"
                data-title="Overview"
                style={{ position: "relative" }}
              >
                {/* MENU ITEM LINK ICON */}
                <svg className="menu-item-link-icon icon-overview">
                  <use xlinkHref="#svg-overview" />
                </svg>
                {/* /MENU ITEM LINK ICON */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    right: "-81px",
                    top: "50%",
                    marginTop: "-12px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(10px, 0px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Overview</p>
                </div>
              </a>
              {/* /MENU ITEM LINK */}
            </li>
            {/* /MENU ITEM */}
            {/* MENU ITEM */}
            <li className="menu-item">
              {/* MENU ITEM LINK */}
              <a
                className="menu-item-link text-tooltip-tfr"
                href="groups.html"
                data-title="Groups"
                style={{ position: "relative" }}
              >
                {/* MENU ITEM LINK ICON */}
                <svg className="menu-item-link-icon icon-group">
                  <use xlinkHref="#svg-group" />
                </svg>
                {/* /MENU ITEM LINK ICON */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    right: "-71px",
                    top: "50%",
                    marginTop: "-12px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(10px, 0px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Groups</p>
                </div>
              </a>
              {/* /MENU ITEM LINK */}
            </li>
            {/* /MENU ITEM */}
            {/* MENU ITEM */}
            <li className="menu-item">
              {/* MENU ITEM LINK */}
              <a
                className="menu-item-link text-tooltip-tfr"
                href="members.html"
                data-title="Members"
                style={{ position: "relative" }}
              >
                {/* MENU ITEM LINK ICON */}
                <svg className="menu-item-link-icon icon-members">
                  <use xlinkHref="#svg-members" />
                </svg>
                {/* /MENU ITEM LINK ICON */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    right: "-81px",
                    top: "50%",
                    marginTop: "-12px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(10px, 0px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Members</p>
                </div>
              </a>
              {/* /MENU ITEM LINK */}
            </li>
            {/* /MENU ITEM */}
            {/* MENU ITEM */}
            <li className="menu-item">
              {/* MENU ITEM LINK */}
              <a
                className="menu-item-link text-tooltip-tfr"
                href="badges.html"
                data-title="Badges"
                style={{ position: "relative" }}
              >
                {/* MENU ITEM LINK ICON */}
                <svg className="menu-item-link-icon icon-badges">
                  <use xlinkHref="#svg-badges" />
                </svg>
                {/* /MENU ITEM LINK ICON */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    right: "-71px",
                    top: "50%",
                    marginTop: "-12px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(10px, 0px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Badges</p>
                </div>
              </a>
              {/* /MENU ITEM LINK */}
            </li>
            {/* /MENU ITEM */}
            {/* MENU ITEM */}
            <li className="menu-item">
              {/* MENU ITEM LINK */}
              <a
                className="menu-item-link text-tooltip-tfr"
                href="quests.html"
                data-title="Quests"
                style={{ position: "relative" }}
              >
                {/* MENU ITEM LINK ICON */}
                <svg className="menu-item-link-icon icon-quests">
                  <use xlinkHref="#svg-quests" />
                </svg>
                {/* /MENU ITEM LINK ICON */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    right: "-69px",
                    top: "50%",
                    marginTop: "-12px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(10px, 0px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Quests</p>
                </div>
              </a>
              {/* /MENU ITEM LINK */}
            </li>
            {/* /MENU ITEM */}
            {/* MENU ITEM */}
            <li className="menu-item">
              {/* MENU ITEM LINK */}
              <a
                className="menu-item-link text-tooltip-tfr"
                href="streams.html"
                data-title="Streams"
                style={{ position: "relative" }}
              >
                {/* MENU ITEM LINK ICON */}
                <svg className="menu-item-link-icon icon-streams">
                  <use xlinkHref="#svg-streams" />
                </svg>
                {/* /MENU ITEM LINK ICON */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    right: "-75px",
                    top: "50%",
                    marginTop: "-12px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(10px, 0px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Streams</p>
                </div>
              </a>
              {/* /MENU ITEM LINK */}
            </li>
            {/* /MENU ITEM */}
            {/* MENU ITEM */}
            <li className="menu-item">
              {/* MENU ITEM LINK */}
              <a
                className="menu-item-link text-tooltip-tfr"
                href="events.html"
                data-title="Events"
                style={{ position: "relative" }}
              >
                {/* MENU ITEM LINK ICON */}
                <svg className="menu-item-link-icon icon-events">
                  <use xlinkHref="#svg-events" />
                </svg>
                {/* /MENU ITEM LINK ICON */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    right: "-67px",
                    top: "50%",
                    marginTop: "-12px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(10px, 0px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Events</p>
                </div>
              </a>
              {/* /MENU ITEM LINK */}
            </li>
            {/* /MENU ITEM */}
            {/* MENU ITEM */}
            <li className="menu-item">
              {/* MENU ITEM LINK */}
              <a
                className="menu-item-link text-tooltip-tfr"
                href="forums.html"
                data-title="Forums"
                style={{ position: "relative" }}
              >
                {/* MENU ITEM LINK ICON */}
                <svg className="menu-item-link-icon icon-forums">
                  <use xlinkHref="#svg-forums" />
                </svg>
                {/* /MENU ITEM LINK ICON */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    right: "-72px",
                    top: "50%",
                    marginTop: "-12px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(10px, 0px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Forums</p>
                </div>
              </a>
              {/* /MENU ITEM LINK */}
            </li>
            {/* /MENU ITEM */}
            {/* MENU ITEM */}
            <li className="menu-item">
              {/* MENU ITEM LINK */}
              <a
                className="menu-item-link text-tooltip-tfr"
                href="marketplace.html"
                data-title="Marketplace"
                style={{ position: "relative" }}
              >
                {/* MENU ITEM LINK ICON */}
                <svg className="menu-item-link-icon icon-marketplace">
                  <use xlinkHref="#svg-marketplace" />
                </svg>
                {/* /MENU ITEM LINK ICON */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    right: "-97px",
                    top: "50%",
                    marginTop: "-12px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(10px, 0px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Marketplace</p>
                </div>
              </a>
              {/* /MENU ITEM LINK */}
            </li>
            {/* /MENU ITEM */}
          </ul>
          {/* /MENU */}
        </nav>
        <nav
          id="navigation-widget"
          className="navigation-widget navigation-widget-desktop sidebar left hidden"
          data-simplebar="init"
          style={{ height: 169 }}
        >
          <div className="simplebar-wrapper" style={{ margin: "0px 0px -40px" }}>
            <div className="simplebar-height-auto-observer-wrapper">
              <div className="simplebar-height-auto-observer" />
            </div>
            <div className="simplebar-mask">
              <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
                <div
                  className="simplebar-content-wrapper"
                  style={{ height: "100%", overflow: "hidden scroll" }}
                >
                  <div
                    className="simplebar-content"
                    style={{ padding: "0px 0px 40px" }}
                  >
                    {/* NAVIGATION WIDGET COVER */}
                    <figure
                      className="navigation-widget-cover liquid"
                      style={{
                        background:
                          'url("/img/cover/01.jpg") center center / cover no-repeat'
                      }}
                    >
                      <img
                        src="/img/cover/01.jpg"
                        alt="cover-01"
                        style={{ display: "none" }}
                      />
                    </figure>
                    {/* /NAVIGATION WIDGET COVER */}
                    {/* USER SHORT DESCRIPTION */}
                    <div className="user-short-description">
                      {/* USER SHORT DESCRIPTION AVATAR */}
                      <a
                        className="user-short-description-avatar user-avatar medium"
                        href="profile-timeline.html"
                      >
                        {/* USER AVATAR BORDER */}
                        <div className="user-avatar-border">
                          {/* HEXAGON */}
                          <div
                            className="hexagon-120-132"
                            style={{ width: 120, height: 132, position: "relative" }}
                          >
                            <canvas
                              width={120}
                              height={132}
                              style={{ position: "absolute", top: 0, left: 0 }}
                            />
                          </div>
                          {/* /HEXAGON */}
                        </div>
                        {/* /USER AVATAR BORDER */}
                        {/* USER AVATAR CONTENT */}
                        <div className="user-avatar-content">
                          {/* HEXAGON */}
                          <div
                            className="hexagon-image-82-90"
                            data-src="/img/avatar/01.jpg"
                            style={{ width: 82, height: 90, position: "relative" }}
                          >
                            <canvas
                              width={82}
                              height={90}
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
                            className="hexagon-progress-100-110"
                            style={{ width: 100, height: 110, position: "relative" }}
                          >
                            <canvas
                              width={100}
                              height={110}
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
                            className="hexagon-border-100-110"
                            style={{ width: 100, height: 110, position: "relative" }}
                          >
                            <canvas
                              width={100}
                              height={110}
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
                              className="hexagon-32-36"
                              style={{ width: 32, height: 36, position: "relative" }}
                            >
                              <canvas
                                width={32}
                                height={36}
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
                              className="hexagon-dark-26-28"
                              style={{ width: 26, height: 28, position: "relative" }}
                            >
                              <canvas
                                width={26}
                                height={28}
                                style={{ position: "absolute", top: 0, left: 0 }}
                              />
                            </div>
                            {/* /HEXAGON */}
                          </div>
                          {/* /USER AVATAR BADGE CONTENT */}
                          {/* USER AVATAR BADGE TEXT */}
                          <p className="user-avatar-badge-text">24</p>
                          {/* /USER AVATAR BADGE TEXT */}
                        </div>
                        {/* /USER AVATAR BADGE */}
                      </a>
                      {/* /USER SHORT DESCRIPTION AVATAR */}
                      {/* USER SHORT DESCRIPTION TITLE */}
                      <p className="user-short-description-title">
                        <a href="profile-timeline.html">Marina Valentine</a>
                      </p>
                      {/* /USER SHORT DESCRIPTION TITLE */}
                      {/* USER SHORT DESCRIPTION TEXT */}
                      <p className="user-short-description-text">
                        <a href="#">www.gamehuntress.com</a>
                      </p>
                      {/* /USER SHORT DESCRIPTION TEXT */}
                    </div>
                    {/* /USER SHORT DESCRIPTION */}
                    {/* BADGE LIST */}
                    <div className="badge-list small">
                      {/* BADGE ITEM */}
                      <div className="badge-item">
                        <img src="/img/badge/gold-s.png" alt="badge-gold-s" />
                      </div>
                      {/* /BADGE ITEM */}
                      {/* BADGE ITEM */}
                      <div className="badge-item">
                        <img src="/img/badge/age-s.png" alt="badge-age-s" />
                      </div>
                      {/* /BADGE ITEM */}
                      {/* BADGE ITEM */}
                      <div className="badge-item">
                        <img
                          src="/img/badge/caffeinated-s.png"
                          alt="badge-caffeinated-s"
                        />
                      </div>
                      {/* /BADGE ITEM */}
                      {/* BADGE ITEM */}
                      <div className="badge-item">
                        <img src="/img/badge/warrior-s.png" alt="badge-warrior-s" />
                      </div>
                      {/* /BADGE ITEM */}
                      {/* BADGE ITEM */}
                      <a className="badge-item" href="profile-badges.html">
                        <img src="/img/badge/blank-s.png" alt="badge-blank-s" />
                        {/* BADGE ITEM TEXT */}
                        <p className="badge-item-text">+9</p>
                        {/* /BADGE ITEM TEXT */}
                      </a>
                      {/* /BADGE ITEM */}
                    </div>
                    {/* /BADGE LIST */}
                    {/* USER STATS */}
                    <div className="user-stats">
                      {/* USER STAT */}
                      <div className="user-stat">
                        {/* USER STAT TITLE */}
                        <p className="user-stat-title">930</p>
                        {/* /USER STAT TITLE */}
                        {/* USER STAT TEXT */}
                        <p className="user-stat-text">posts</p>
                        {/* /USER STAT TEXT */}
                      </div>
                      {/* /USER STAT */}
                      {/* USER STAT */}
                      <div className="user-stat">
                        {/* USER STAT TITLE */}
                        <p className="user-stat-title">82</p>
                        {/* /USER STAT TITLE */}
                        {/* USER STAT TEXT */}
                        <p className="user-stat-text">friends</p>
                        {/* /USER STAT TEXT */}
                      </div>
                      {/* /USER STAT */}
                      {/* USER STAT */}
                      <div className="user-stat">
                        {/* USER STAT TITLE */}
                        <p className="user-stat-title">5.7k</p>
                        {/* /USER STAT TITLE */}
                        {/* USER STAT TEXT */}
                        <p className="user-stat-text">visits</p>
                        {/* /USER STAT TEXT */}
                      </div>
                      {/* /USER STAT */}
                    </div>
                    {/* /USER STATS */}
                    {/* MENU */}
                    <ul className="menu">
                      {/* MENU ITEM */}
                      <li className="menu-item active">
                        {/* MENU ITEM LINK */}
                        <a className="menu-item-link" href="newsfeed.html">
                          {/* MENU ITEM LINK ICON */}
                          <svg className="menu-item-link-icon icon-newsfeed">
                            <use xlinkHref="#svg-newsfeed" />
                          </svg>
                          {/* /MENU ITEM LINK ICON */}
                          Newsfeed
                        </a>
                        {/* /MENU ITEM LINK */}
                      </li>
                      {/* /MENU ITEM */}
                      {/* MENU ITEM */}
                      <li className="menu-item">
                        {/* MENU ITEM LINK */}
                        <a className="menu-item-link" href="overview.html">
                          {/* MENU ITEM LINK ICON */}
                          <svg className="menu-item-link-icon icon-overview">
                            <use xlinkHref="#svg-overview" />
                          </svg>
                          {/* /MENU ITEM LINK ICON */}
                          Overview
                        </a>
                        {/* /MENU ITEM LINK */}
                      </li>
                      {/* /MENU ITEM */}
                      {/* MENU ITEM */}
                      <li className="menu-item">
                        {/* MENU ITEM LINK */}
                        <a className="menu-item-link" href="groups.html">
                          {/* MENU ITEM LINK ICON */}
                          <svg className="menu-item-link-icon icon-group">
                            <use xlinkHref="#svg-group" />
                          </svg>
                          {/* /MENU ITEM LINK ICON */}
                          Groups
                        </a>
                        {/* /MENU ITEM LINK */}
                      </li>
                      {/* /MENU ITEM */}
                      {/* MENU ITEM */}
                      <li className="menu-item">
                        {/* MENU ITEM LINK */}
                        <a className="menu-item-link" href="members.html">
                          {/* MENU ITEM LINK ICON */}
                          <svg className="menu-item-link-icon icon-members">
                            <use xlinkHref="#svg-members" />
                          </svg>
                          {/* /MENU ITEM LINK ICON */}
                          Members
                        </a>
                        {/* /MENU ITEM LINK */}
                      </li>
                      {/* /MENU ITEM */}
                      {/* MENU ITEM */}
                      <li className="menu-item">
                        {/* MENU ITEM LINK */}
                        <a className="menu-item-link" href="badges.html">
                          {/* MENU ITEM LINK ICON */}
                          <svg className="menu-item-link-icon icon-badges">
                            <use xlinkHref="#svg-badges" />
                          </svg>
                          {/* /MENU ITEM LINK ICON */}
                          Badges
                        </a>
                        {/* /MENU ITEM LINK */}
                      </li>
                      {/* /MENU ITEM */}
                      {/* MENU ITEM */}
                      <li className="menu-item">
                        {/* MENU ITEM LINK */}
                        <a className="menu-item-link" href="quests.html">
                          {/* MENU ITEM LINK ICON */}
                          <svg className="menu-item-link-icon icon-quests">
                            <use xlinkHref="#svg-quests" />
                          </svg>
                          {/* /MENU ITEM LINK ICON */}
                          Quests
                        </a>
                        {/* /MENU ITEM LINK */}
                      </li>
                      {/* /MENU ITEM */}
                      {/* MENU ITEM */}
                      <li className="menu-item">
                        {/* MENU ITEM LINK */}
                        <a className="menu-item-link" href="streams.html">
                          {/* MENU ITEM LINK ICON */}
                          <svg className="menu-item-link-icon icon-streams">
                            <use xlinkHref="#svg-streams" />
                          </svg>
                          {/* /MENU ITEM LINK ICON */}
                          Streams
                        </a>
                        {/* /MENU ITEM LINK */}
                      </li>
                      {/* /MENU ITEM */}
                      {/* MENU ITEM */}
                      <li className="menu-item">
                        {/* MENU ITEM LINK */}
                        <a className="menu-item-link" href="events.html">
                          {/* MENU ITEM LINK ICON */}
                          <svg className="menu-item-link-icon icon-events">
                            <use xlinkHref="#svg-events" />
                          </svg>
                          {/* /MENU ITEM LINK ICON */}
                          Events
                        </a>
                        {/* /MENU ITEM LINK */}
                      </li>
                      {/* /MENU ITEM */}
                      {/* MENU ITEM */}
                      <li className="menu-item">
                        {/* MENU ITEM LINK */}
                        <a className="menu-item-link" href="forums.html">
                          {/* MENU ITEM LINK ICON */}
                          <svg className="menu-item-link-icon icon-forums">
                            <use xlinkHref="#svg-forums" />
                          </svg>
                          {/* /MENU ITEM LINK ICON */}
                          Forums
                        </a>
                        {/* /MENU ITEM LINK */}
                      </li>
                      {/* /MENU ITEM */}
                      {/* MENU ITEM */}
                      <li className="menu-item">
                        {/* MENU ITEM LINK */}
                        <a className="menu-item-link" href="marketplace.html">
                          {/* MENU ITEM LINK ICON */}
                          <svg className="menu-item-link-icon icon-marketplace">
                            <use xlinkHref="#svg-marketplace" />
                          </svg>
                          {/* /MENU ITEM LINK ICON */}
                          Marketplace
                        </a>
                        {/* /MENU ITEM LINK */}
                      </li>
                      {/* /MENU ITEM */}
                    </ul>
                    {/* /MENU */}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="simplebar-placeholder"
              style={{ width: "auto", height: 1019 }}
            />
          </div>
          <div
            className="simplebar-track simplebar-horizontal"
            style={{ visibility: "hidden" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{
                width: 0,
                transform: "translate3d(0px, 0px, 0px)",
                display: "none"
              }}
            />
          </div>
          <div
            className="simplebar-track simplebar-vertical"
            style={{ visibility: "visible" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{
                height: 28,
                transform: "translate3d(0px, 55px, 0px)",
                display: "block"
              }}
            />
          </div>
        </nav>
        <nav
          id="navigation-widget-mobile"
          className="navigation-widget navigation-widget-mobile sidebar left hidden"
          data-simplebar="init"
          style={{ height: 249 }}
        >
          <div className="simplebar-wrapper" style={{ margin: "0px 0px -40px" }}>
            <div className="simplebar-height-auto-observer-wrapper">
              <div className="simplebar-height-auto-observer" />
            </div>
            <div className="simplebar-mask">
              <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
                <div
                  className="simplebar-content-wrapper"
                  style={{ height: "100%", overflow: "hidden scroll" }}
                >
                  <div
                    className="simplebar-content"
                    style={{ padding: "0px 0px 40px" }}
                  >
                    {/* NAVIGATION WIDGET CLOSE BUTTON */}
                    <div className="navigation-widget-close-button">
                      {/* NAVIGATION WIDGET CLOSE BUTTON ICON */}
                      <svg className="navigation-widget-close-button-icon icon-back-arrow">
                        <use xlinkHref="#svg-back-arrow" />
                      </svg>
                      {/* NAVIGATION WIDGET CLOSE BUTTON ICON */}
                    </div>
                    {/* /NAVIGATION WIDGET CLOSE BUTTON */}
                    {/* NAVIGATION WIDGET INFO WRAP */}
                    <div className="navigation-widget-info-wrap">
                      {/* NAVIGATION WIDGET INFO */}
                      <div className="navigation-widget-info">
                        {/* USER AVATAR */}
                        <a
                          className="user-avatar small no-outline"
                          href="profile-timeline.html"
                        >
                          {/* USER AVATAR CONTENT */}
                          <div className="user-avatar-content">
                            {/* HEXAGON */}
                            <div
                              className="hexagon-image-30-32"
                              data-src="/img/avatar/01.jpg"
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
                              {/* /HEXAGON */}
                            </div>
                            {/* /USER AVATAR BADGE BORDER */}
                            {/* USER AVATAR BADGE CONTENT */}
                            <div className="user-avatar-badge-content">
                              {/* HEXAGON */}
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
                              {/* /HEXAGON */}
                            </div>
                            {/* /USER AVATAR BADGE CONTENT */}
                            {/* USER AVATAR BADGE TEXT */}
                            <p className="user-avatar-badge-text">24</p>
                            {/* /USER AVATAR BADGE TEXT */}
                          </div>
                          {/* /USER AVATAR BADGE */}
                        </a>
                        {/* /USER AVATAR */}
                        {/* NAVIGATION WIDGET INFO TITLE */}
                        <p className="navigation-widget-info-title">
                          <a href="profile-timeline.html">Marina Valentine</a>
                        </p>
                        {/* /NAVIGATION WIDGET INFO TITLE */}
                        {/* NAVIGATION WIDGET INFO TEXT */}
                        <p className="navigation-widget-info-text">Welcome Back!</p>
                        {/* /NAVIGATION WIDGET INFO TEXT */}
                      </div>
                      {/* /NAVIGATION WIDGET INFO */}
                      {/* NAVIGATION WIDGET BUTTON */}
                      <p className="navigation-widget-info-button button small secondary">
                        Logout
                      </p>
                      {/* /NAVIGATION WIDGET BUTTON */}
                    </div>
                    {/* /NAVIGATION WIDGET INFO WRAP */}
                    {/* NAVIGATION WIDGET SECTION TITLE */}
                    <p className="navigation-widget-section-title">Sections</p>
                    {/* /NAVIGATION WIDGET SECTION TITLE */}
                    {/* MENU */}
                    <ul className="menu">
                      {/* MENU ITEM */}
                      <li className="menu-item active">
                        {/* MENU ITEM LINK */}
                        <a className="menu-item-link" href="newsfeed.html">
                          {/* MENU ITEM LINK ICON */}
                          <svg className="menu-item-link-icon icon-newsfeed">
                            <use xlinkHref="#svg-newsfeed" />
                          </svg>
                          {/* /MENU ITEM LINK ICON */}
                          Newsfeed
                        </a>
                        {/* /MENU ITEM LINK */}
                      </li>
                      {/* /MENU ITEM */}
                      {/* MENU ITEM */}
                      <li className="menu-item">
                        {/* MENU ITEM LINK */}
                        <a className="menu-item-link" href="overview.html">
                          {/* MENU ITEM LINK ICON */}
                          <svg className="menu-item-link-icon icon-overview">
                            <use xlinkHref="#svg-overview" />
                          </svg>
                          {/* /MENU ITEM LINK ICON */}
                          Overview
                        </a>
                        {/* /MENU ITEM LINK */}
                      </li>
                      {/* /MENU ITEM */}
                      {/* MENU ITEM */}
                      <li className="menu-item">
                        {/* MENU ITEM LINK */}
                        <a className="menu-item-link" href="groups.html">
                          {/* MENU ITEM LINK ICON */}
                          <svg className="menu-item-link-icon icon-group">
                            <use xlinkHref="#svg-group" />
                          </svg>
                          {/* /MENU ITEM LINK ICON */}
                          Groups
                        </a>
                        {/* /MENU ITEM LINK */}
                      </li>
                      {/* /MENU ITEM */}
                      {/* MENU ITEM */}
                      <li className="menu-item">
                        {/* MENU ITEM LINK */}
                        <a className="menu-item-link" href="members.html">
                          {/* MENU ITEM LINK ICON */}
                          <svg className="menu-item-link-icon icon-members">
                            <use xlinkHref="#svg-members" />
                          </svg>
                          {/* /MENU ITEM LINK ICON */}
                          Members
                        </a>
                        {/* /MENU ITEM LINK */}
                      </li>
                      {/* /MENU ITEM */}
                      {/* MENU ITEM */}
                      <li className="menu-item">
                        {/* MENU ITEM LINK */}
                        <a className="menu-item-link" href="badges.html">
                          {/* MENU ITEM LINK ICON */}
                          <svg className="menu-item-link-icon icon-badges">
                            <use xlinkHref="#svg-badges" />
                          </svg>
                          {/* /MENU ITEM LINK ICON */}
                          Badges
                        </a>
                        {/* /MENU ITEM LINK */}
                      </li>
                      {/* /MENU ITEM */}
                      {/* MENU ITEM */}
                      <li className="menu-item">
                        {/* MENU ITEM LINK */}
                        <a className="menu-item-link" href="quests.html">
                          {/* MENU ITEM LINK ICON */}
                          <svg className="menu-item-link-icon icon-quests">
                            <use xlinkHref="#svg-quests" />
                          </svg>
                          {/* /MENU ITEM LINK ICON */}
                          Quests
                        </a>
                        {/* /MENU ITEM LINK */}
                      </li>
                      {/* /MENU ITEM */}
                      {/* MENU ITEM */}
                      <li className="menu-item">
                        {/* MENU ITEM LINK */}
                        <a className="menu-item-link" href="streams.html">
                          {/* MENU ITEM LINK ICON */}
                          <svg className="menu-item-link-icon icon-streams">
                            <use xlinkHref="#svg-streams" />
                          </svg>
                          {/* /MENU ITEM LINK ICON */}
                          Streams
                        </a>
                        {/* /MENU ITEM LINK */}
                      </li>
                      {/* /MENU ITEM */}
                      {/* MENU ITEM */}
                      <li className="menu-item">
                        {/* MENU ITEM LINK */}
                        <a className="menu-item-link" href="events.html">
                          {/* MENU ITEM LINK ICON */}
                          <svg className="menu-item-link-icon icon-events">
                            <use xlinkHref="#svg-events" />
                          </svg>
                          {/* /MENU ITEM LINK ICON */}
                          Events
                        </a>
                        {/* /MENU ITEM LINK */}
                      </li>
                      {/* /MENU ITEM */}
                      {/* MENU ITEM */}
                      <li className="menu-item">
                        {/* MENU ITEM LINK */}
                        <a className="menu-item-link" href="forums.html">
                          {/* MENU ITEM LINK ICON */}
                          <svg className="menu-item-link-icon icon-forums">
                            <use xlinkHref="#svg-forums" />
                          </svg>
                          {/* /MENU ITEM LINK ICON */}
                          Forums
                        </a>
                        {/* /MENU ITEM LINK */}
                      </li>
                      {/* /MENU ITEM */}
                      {/* MENU ITEM */}
                      <li className="menu-item">
                        {/* MENU ITEM LINK */}
                        <a className="menu-item-link" href="marketplace.html">
                          {/* MENU ITEM LINK ICON */}
                          <svg className="menu-item-link-icon icon-marketplace">
                            <use xlinkHref="#svg-marketplace" />
                          </svg>
                          {/* /MENU ITEM LINK ICON */}
                          Marketplace
                        </a>
                        {/* /MENU ITEM LINK */}
                      </li>
                      {/* /MENU ITEM */}
                    </ul>
                    {/* /MENU */}
                    {/* NAVIGATION WIDGET SECTION TITLE */}
                    <p className="navigation-widget-section-title">My Profile</p>
                    {/* /NAVIGATION WIDGET SECTION TITLE */}
                    {/* NAVIGATION WIDGET SECTION LINK */}
                    <a
                      className="navigation-widget-section-link"
                      href="hub-profile-info.html"
                    >
                      Profile Info
                    </a>
                    {/* /NAVIGATION WIDGET SECTION LINK */}
                    {/* NAVIGATION WIDGET SECTION LINK */}
                    <a
                      className="navigation-widget-section-link"
                      href="hub-profile-social.html"
                    >
                      Social &amp; Stream
                    </a>
                    {/* /NAVIGATION WIDGET SECTION LINK */}
                    {/* NAVIGATION WIDGET SECTION LINK */}
                    <a
                      className="navigation-widget-section-link"
                      href="hub-profile-notifications.html"
                    >
                      Notifications
                    </a>
                    {/* /NAVIGATION WIDGET SECTION LINK */}
                    {/* NAVIGATION WIDGET SECTION LINK */}
                    <a
                      className="navigation-widget-section-link"
                      href="hub-profile-messages.html"
                    >
                      Messages
                    </a>
                    {/* /NAVIGATION WIDGET SECTION LINK */}
                    {/* NAVIGATION WIDGET SECTION LINK */}
                    <a
                      className="navigation-widget-section-link"
                      href="hub-profile-requests.html"
                    >
                      Friend Requests
                    </a>
                    {/* /NAVIGATION WIDGET SECTION LINK */}
                    {/* NAVIGATION WIDGET SECTION TITLE */}
                    <p className="navigation-widget-section-title">Account</p>
                    {/* /NAVIGATION WIDGET SECTION TITLE */}
                    {/* NAVIGATION WIDGET SECTION LINK */}
                    <a
                      className="navigation-widget-section-link"
                      href="hub-account-info.html"
                    >
                      Account Info
                    </a>
                    {/* /NAVIGATION WIDGET SECTION LINK */}
                    {/* NAVIGATION WIDGET SECTION LINK */}
                    <a
                      className="navigation-widget-section-link"
                      href="hub-account-password.html"
                    >
                      Change Password
                    </a>
                    {/* /NAVIGATION WIDGET SECTION LINK */}
                    {/* NAVIGATION WIDGET SECTION LINK */}
                    <a
                      className="navigation-widget-section-link"
                      href="hub-account-settings.html"
                    >
                      General Settings
                    </a>
                    {/* /NAVIGATION WIDGET SECTION LINK */}
                    {/* NAVIGATION WIDGET SECTION TITLE */}
                    <p className="navigation-widget-section-title">Groups</p>
                    {/* /NAVIGATION WIDGET SECTION TITLE */}
                    {/* NAVIGATION WIDGET SECTION LINK */}
                    <a
                      className="navigation-widget-section-link"
                      href="hub-group-management.html"
                    >
                      Manage Groups
                    </a>
                    {/* /NAVIGATION WIDGET SECTION LINK */}
                    {/* NAVIGATION WIDGET SECTION LINK */}
                    <a
                      className="navigation-widget-section-link"
                      href="hub-group-invitations.html"
                    >
                      Invitations
                    </a>
                    {/* /NAVIGATION WIDGET SECTION LINK */}
                    {/* NAVIGATION WIDGET SECTION TITLE */}
                    <p className="navigation-widget-section-title">My Store</p>
                    {/* /NAVIGATION WIDGET SECTION TITLE */}
                    {/* NAVIGATION WIDGET SECTION LINK */}
                    <a
                      className="navigation-widget-section-link"
                      href="hub-store-account.html"
                    >
                      My Account <span className="highlighted">$250,32</span>
                    </a>
                    {/* /NAVIGATION WIDGET SECTION LINK */}
                    {/* NAVIGATION WIDGET SECTION LINK */}
                    <a
                      className="navigation-widget-section-link"
                      href="hub-store-statement.html"
                    >
                      Sales Statement
                    </a>
                    {/* /NAVIGATION WIDGET SECTION LINK */}
                    {/* NAVIGATION WIDGET SECTION LINK */}
                    <a
                      className="navigation-widget-section-link"
                      href="hub-store-items.html"
                    >
                      Manage Items
                    </a>
                    {/* /NAVIGATION WIDGET SECTION LINK */}
                    {/* NAVIGATION WIDGET SECTION LINK */}
                    <a
                      className="navigation-widget-section-link"
                      href="hub-store-downloads.html"
                    >
                      Downloads
                    </a>
                    {/* /NAVIGATION WIDGET SECTION LINK */}
                    {/* NAVIGATION WIDGET SECTION TITLE */}
                    <p className="navigation-widget-section-title">Main Links</p>
                    {/* /NAVIGATION WIDGET SECTION TITLE */}
                    {/* NAVIGATION WIDGET SECTION LINK */}
                    <a className="navigation-widget-section-link" href="#">
                      Home
                    </a>
                    {/* /NAVIGATION WIDGET SECTION LINK */}
                    {/* NAVIGATION WIDGET SECTION LINK */}
                    <a className="navigation-widget-section-link" href="#">
                      Careers
                    </a>
                    {/* /NAVIGATION WIDGET SECTION LINK */}
                    {/* NAVIGATION WIDGET SECTION LINK */}
                    <a className="navigation-widget-section-link" href="#">
                      Faqs
                    </a>
                    {/* /NAVIGATION WIDGET SECTION LINK */}
                    {/* NAVIGATION WIDGET SECTION LINK */}
                    <a className="navigation-widget-section-link" href="#">
                      About Us
                    </a>
                    {/* /NAVIGATION WIDGET SECTION LINK */}
                    {/* NAVIGATION WIDGET SECTION LINK */}
                    <a className="navigation-widget-section-link" href="#">
                      Our Blog
                    </a>
                    {/* /NAVIGATION WIDGET SECTION LINK */}
                    {/* NAVIGATION WIDGET SECTION LINK */}
                    <a className="navigation-widget-section-link" href="#">
                      Contact Us
                    </a>
                    {/* /NAVIGATION WIDGET SECTION LINK */}
                    {/* NAVIGATION WIDGET SECTION LINK */}
                    <a className="navigation-widget-section-link" href="#">
                      Privacy Policy
                    </a>
                    {/* /NAVIGATION WIDGET SECTION LINK */}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="simplebar-placeholder"
              style={{ width: "auto", height: 1976 }}
            />
          </div>
          <div
            className="simplebar-track simplebar-horizontal"
            style={{ visibility: "hidden" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{
                width: 0,
                transform: "translate3d(0px, 0px, 0px)",
                display: "none"
              }}
            />
          </div>
          <div
            className="simplebar-track simplebar-vertical"
            style={{ visibility: "visible" }}
          >
            <div
              className="simplebar-scrollbar"
              style={{
                height: 31,
                transform: "translate3d(0px, 0px, 0px)",
                display: "block"
              }}
            />
          </div>
        </nav>
      </>
      
    );
}
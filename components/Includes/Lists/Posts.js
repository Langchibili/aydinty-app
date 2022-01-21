export default function Posts(){
    return (
            <>
               <div className="widget-box no-padding">
        {/* WIDGET BOX SETTINGS */}
        <div className="widget-box-settings">
          {/* POST SETTINGS WRAP */}
          <div className="post-settings-wrap" style={{ position: "relative" }}>
            {/* POST SETTINGS */}
            <div className="post-settings widget-box-post-settings-dropdown-trigger">
              {/* POST SETTINGS ICON */}
              <svg className="post-settings-icon icon-more-dots">
                <use xlinkHref="#svg-more-dots" />
              </svg>
              {/* /POST SETTINGS ICON */}
            </div>
            {/* /POST SETTINGS */}
            {/* SIMPLE DROPDOWN */}
            <div
              className="simple-dropdown widget-box-post-settings-dropdown"
              style={{
                position: "absolute",
                zIndex: 9999,
                top: 30,
                right: 9,
                opacity: 0,
                visibility: "hidden",
                transform: "translate(0px, -20px)",
                transition:
                  "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
              }}
            >
              {/* SIMPLE DROPDOWN LINK */}
              <p className="simple-dropdown-link">Edit Post</p>
              {/* /SIMPLE DROPDOWN LINK */}
              {/* SIMPLE DROPDOWN LINK */}
              <p className="simple-dropdown-link">Delete Post</p>
              {/* /SIMPLE DROPDOWN LINK */}
              {/* SIMPLE DROPDOWN LINK */}
              <p className="simple-dropdown-link">Make it Featured</p>
              {/* /SIMPLE DROPDOWN LINK */}
              {/* SIMPLE DROPDOWN LINK */}
              <p className="simple-dropdown-link">Report Post</p>
              {/* /SIMPLE DROPDOWN LINK */}
              {/* SIMPLE DROPDOWN LINK */}
              <p className="simple-dropdown-link">Report Author</p>
              {/* /SIMPLE DROPDOWN LINK */}
            </div>
            {/* /SIMPLE DROPDOWN */}
          </div>
          {/* /POST SETTINGS WRAP */}
        </div>
        {/* /WIDGET BOX SETTINGS */}
        {/* WIDGET BOX STATUS */}
        <div className="widget-box-status">
          {/* WIDGET BOX STATUS CONTENT */}
          <div className="widget-box-status-content">
            {/* USER STATUS */}
            <div className="user-status">
              {/* USER STATUS AVATAR */}
              <a className="user-status-avatar" href="profile-timeline.html">
                {/* USER AVATAR */}
                <div className="user-avatar small no-outline">
                  {/* USER AVATAR CONTENT */}
                  <div className="user-avatar-content">
                    {/* HEXAGON */}
                    <div
                      className="hexagon-image-30-32"
                      data-src="/img/avatar/04.jpg"
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
                    <p className="user-avatar-badge-text">6</p>
                    {/* /USER AVATAR BADGE TEXT */}
                  </div>
                  {/* /USER AVATAR BADGE */}
                </div>
                {/* /USER AVATAR */}
              </a>
              {/* /USER STATUS AVATAR */}
              {/* USER STATUS TITLE */}
              <p className="user-status-title medium">
                <a className="bold" href="profile-timeline.html">
                  Bearded Wonder
                </a>
              </p>
              {/* /USER STATUS TITLE */}
              {/* USER STATUS TEXT */}
              <p className="user-status-text small">39 minutes ago</p>
              {/* /USER STATUS TEXT */}
            </div>
            {/* /USER STATUS */}
            {/* WIDGET BOX STATUS TEXT */}
            <p className="widget-box-status-text">
              Sorry everyone, but from now on, I will only be able to edit and
              upload one design tutorial per month. This happens because I'm
              having a lot on my plate right now and recording and editing the
              tutorials requiere a lot of attention.
            </p>
            {/* /WIDGET BOX STATUS TEXT */}
            {/* CONTENT ACTIONS */}
            <div className="content-actions">
              {/* CONTENT ACTION */}
              <div className="content-action">
                {/* META LINE */}
                <div className="meta-line">
                  {/* META LINE LIST */}
                  <div className="meta-line-list reaction-item-list">
                    {/* REACTION ITEM */}
                    <div
                      className="reaction-item"
                      style={{ position: "relative" }}
                    >
                      {/* REACTION IMAGE */}
                      <img
                        className="reaction-image reaction-item-dropdown-trigger"
                        src="/img/reaction/dislike.png"
                        alt="reaction-dislike"
                      />
                      {/* /REACTION IMAGE */}
                      {/* SIMPLE DROPDOWN */}
                      <div
                        className="simple-dropdown padded reaction-item-dropdown"
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
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">
                          <img
                            className="reaction"
                            src="/img/reaction/dislike.png"
                            alt="reaction-dislike"
                          />{" "}
                          <span className="bold">Dislike</span>
                        </p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">Matt Parker</p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">Destroy Dex</p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">The Green Goo</p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                      </div>
                      {/* /SIMPLE DROPDOWN */}
                    </div>
                    {/* /REACTION ITEM */}
                    {/* REACTION ITEM */}
                    <div
                      className="reaction-item"
                      style={{ position: "relative" }}
                    >
                      {/* REACTION IMAGE */}
                      <img
                        className="reaction-image reaction-item-dropdown-trigger"
                        src="/img/reaction/love.png"
                        alt="reaction-love"
                      />
                      {/* /REACTION IMAGE */}
                      {/* SIMPLE DROPDOWN */}
                      <div
                        className="simple-dropdown padded reaction-item-dropdown"
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
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">
                          <img
                            className="reaction"
                            src="/img/reaction/love.png"
                            alt="reaction-love"
                          />{" "}
                          <span className="bold">Love</span>
                        </p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">Sandra Strange</p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">Jane Rodgers</p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                      </div>
                      {/* /SIMPLE DROPDOWN */}
                    </div>
                    {/* /REACTION ITEM */}
                    {/* REACTION ITEM */}
                    <div
                      className="reaction-item"
                      style={{ position: "relative" }}
                    >
                      {/* REACTION IMAGE */}
                      <img
                        className="reaction-image reaction-item-dropdown-trigger"
                        src="/img/reaction/like.png"
                        alt="reaction-like"
                      />
                      {/* /REACTION IMAGE */}
                      {/* SIMPLE DROPDOWN */}
                      <div
                        className="simple-dropdown padded reaction-item-dropdown"
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
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">
                          <img
                            className="reaction"
                            src="/img/reaction/like.png"
                            alt="reaction-like"
                          />{" "}
                          <span className="bold">Like</span>
                        </p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">Neko Bebop</p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">Nick Grissom</p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">Sarah Diamond</p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">Jett Spiegel</p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">
                          <span className="bold">and 2 more...</span>
                        </p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                      </div>
                      {/* /SIMPLE DROPDOWN */}
                    </div>
                    {/* /REACTION ITEM */}
                  </div>
                  {/* /META LINE LIST */}
                  {/* META LINE TEXT */}
                  <p className="meta-line-text">11</p>
                  {/* /META LINE TEXT */}
                </div>
                {/* /META LINE */}
                {/* META LINE */}
                <div className="meta-line">
                  {/* META LINE LIST */}
                  <div className="meta-line-list user-avatar-list">
                    {/* USER AVATAR */}
                    <div className="user-avatar micro no-stats">
                      {/* USER AVATAR BORDER */}
                      <div className="user-avatar-border">
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
                      {/* /USER AVATAR BORDER */}
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-18-20"
                          data-src="/img/avatar/08.jpg"
                          style={{
                            width: 18,
                            height: 20,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={18}
                            height={20}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
                    {/* USER AVATAR */}
                    <div className="user-avatar micro no-stats">
                      {/* USER AVATAR BORDER */}
                      <div className="user-avatar-border">
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
                      {/* /USER AVATAR BORDER */}
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-18-20"
                          data-src="/img/avatar/11.jpg"
                          style={{
                            width: 18,
                            height: 20,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={18}
                            height={20}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
                    {/* USER AVATAR */}
                    <div className="user-avatar micro no-stats">
                      {/* USER AVATAR BORDER */}
                      <div className="user-avatar-border">
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
                      {/* /USER AVATAR BORDER */}
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-18-20"
                          data-src="/img/avatar/06.jpg"
                          style={{
                            width: 18,
                            height: 20,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={18}
                            height={20}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
                    {/* USER AVATAR */}
                    <div className="user-avatar micro no-stats">
                      {/* USER AVATAR BORDER */}
                      <div className="user-avatar-border">
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
                      {/* /USER AVATAR BORDER */}
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-18-20"
                          data-src="/img/avatar/07.jpg"
                          style={{
                            width: 18,
                            height: 20,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={18}
                            height={20}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
                    {/* USER AVATAR */}
                    <div className="user-avatar micro no-stats">
                      {/* USER AVATAR BORDER */}
                      <div className="user-avatar-border">
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
                      {/* /USER AVATAR BORDER */}
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-18-20"
                          data-src="/img/avatar/10.jpg"
                          style={{
                            width: 18,
                            height: 20,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={18}
                            height={20}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
                  </div>
                  {/* /META LINE LIST */}
                  {/* META LINE TEXT */}
                  <p className="meta-line-text">18 Participants</p>
                  {/* /META LINE TEXT */}
                </div>
                {/* /META LINE */}
              </div>
              {/* /CONTENT ACTION */}
              {/* CONTENT ACTION */}
              <div className="content-action">
                {/* META LINE */}
                <div className="meta-line">
                  {/* META LINE LINK */}
                  <p className="meta-line-link">15 Comments</p>
                  {/* /META LINE LINK */}
                </div>
                {/* /META LINE */}
                {/* META LINE */}
                <div className="meta-line">
                  {/* META LINE TEXT */}
                  <p className="meta-line-text">0 Shares</p>
                  {/* /META LINE TEXT */}
                </div>
                {/* /META LINE */}
              </div>
              {/* /CONTENT ACTION */}
            </div>
            {/* /CONTENT ACTIONS */}
          </div>
          {/* /WIDGET BOX STATUS CONTENT */}
        </div>
        {/* /WIDGET BOX STATUS */}
        {/* POST OPTIONS */}
        <div className="post-options">
          {/* POST OPTION WRAP */}
          <div className="post-option-wrap" style={{ position: "relative" }}>
            {/* POST OPTION */}
            <div className="post-option reaction-options-dropdown-trigger">
              {/* POST OPTION ICON */}
              <svg className="post-option-icon icon-thumbs-up">
                <use xlinkHref="#svg-thumbs-up" />
              </svg>
              {/* /POST OPTION ICON */}
              {/* POST OPTION TEXT */}
              <p className="post-option-text">React!</p>
              {/* /POST OPTION TEXT */}
            </div>
            {/* /POST OPTION */}
            {/* REACTION OPTIONS */}
            <div
              className="reaction-options reaction-options-dropdown"
              style={{
                position: "absolute",
                zIndex: 9999,
                bottom: 54,
                left: "-16px",
                opacity: 0,
                visibility: "hidden",
                transform: "translate(0px, 20px)",
                transition:
                  "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
              }}
            >
              {/* REACTION OPTION */}
              <div
                className="reaction-option text-tooltip-tft"
                data-title="Like"
                style={{ position: "relative" }}
              >
                {/* REACTION OPTION IMAGE */}
                <img
                  className="reaction-option-image"
                  src="/img/reaction/like.png"
                  alt="reaction-like"
                />
                {/* /REACTION OPTION IMAGE */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    top: "-28px",
                    left: "50%",
                    marginLeft: "-24px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(0px, 10px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Like</p>
                </div>
              </div>
              {/* /REACTION OPTION */}
              {/* REACTION OPTION */}
              <div
                className="reaction-option text-tooltip-tft"
                data-title="Love"
                style={{ position: "relative" }}
              >
                {/* REACTION OPTION IMAGE */}
                <img
                  className="reaction-option-image"
                  src="/img/reaction/love.png"
                  alt="reaction-love"
                />
                {/* /REACTION OPTION IMAGE */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    top: "-28px",
                    left: "50%",
                    marginLeft: "-26px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(0px, 10px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Love</p>
                </div>
              </div>
              {/* /REACTION OPTION */}
              {/* REACTION OPTION */}
              <div
                className="reaction-option text-tooltip-tft"
                data-title="Dislike"
                style={{ position: "relative" }}
              >
                {/* REACTION OPTION IMAGE */}
                <img
                  className="reaction-option-image"
                  src="/img/reaction/dislike.png"
                  alt="reaction-dislike"
                />
                {/* /REACTION OPTION IMAGE */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    top: "-28px",
                    left: "50%",
                    marginLeft: "-31.5px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(0px, 10px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Dislike</p>
                </div>
              </div>
              {/* /REACTION OPTION */}
              {/* REACTION OPTION */}
              <div
                className="reaction-option text-tooltip-tft"
                data-title="Happy"
                style={{ position: "relative" }}
              >
                {/* REACTION OPTION IMAGE */}
                <img
                  className="reaction-option-image"
                  src="/img/reaction/happy.png"
                  alt="reaction-happy"
                />
                {/* /REACTION OPTION IMAGE */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    top: "-28px",
                    left: "50%",
                    marginLeft: "-30.5px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(0px, 10px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Happy</p>
                </div>
              </div>
              {/* /REACTION OPTION */}
              {/* REACTION OPTION */}
              <div
                className="reaction-option text-tooltip-tft"
                data-title="Funny"
                style={{ position: "relative" }}
              >
                {/* REACTION OPTION IMAGE */}
                <img
                  className="reaction-option-image"
                  src="/img/reaction/funny.png"
                  alt="reaction-funny"
                />
                {/* /REACTION OPTION IMAGE */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    top: "-28px",
                    left: "50%",
                    marginLeft: "-30px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(0px, 10px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Funny</p>
                </div>
              </div>
              {/* /REACTION OPTION */}
              {/* REACTION OPTION */}
              <div
                className="reaction-option text-tooltip-tft"
                data-title="Wow"
                style={{ position: "relative" }}
              >
                {/* REACTION OPTION IMAGE */}
                <img
                  className="reaction-option-image"
                  src="/img/reaction/wow.png"
                  alt="reaction-wow"
                />
                {/* /REACTION OPTION IMAGE */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    top: "-28px",
                    left: "50%",
                    marginLeft: "-26px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(0px, 10px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Wow</p>
                </div>
              </div>
              {/* /REACTION OPTION */}
              {/* REACTION OPTION */}
              <div
                className="reaction-option text-tooltip-tft"
                data-title="Angry"
                style={{ position: "relative" }}
              >
                {/* REACTION OPTION IMAGE */}
                <img
                  className="reaction-option-image"
                  src="/img/reaction/angry.png"
                  alt="reaction-angry"
                />
                {/* /REACTION OPTION IMAGE */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    top: "-28px",
                    left: "50%",
                    marginLeft: "-29.5px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(0px, 10px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Angry</p>
                </div>
              </div>
              {/* /REACTION OPTION */}
              {/* REACTION OPTION */}
              <div
                className="reaction-option text-tooltip-tft"
                data-title="Sad"
                style={{ position: "relative" }}
              >
                {/* REACTION OPTION IMAGE */}
                <img
                  className="reaction-option-image"
                  src="/img/reaction/sad.png"
                  alt="reaction-sad"
                />
                {/* /REACTION OPTION IMAGE */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    top: "-28px",
                    left: "50%",
                    marginLeft: "-23px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(0px, 10px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Sad</p>
                </div>
              </div>
              {/* /REACTION OPTION */}
            </div>
            {/* /REACTION OPTIONS */}
          </div>
          {/* /POST OPTION WRAP */}
          {/* POST OPTION */}
          <div className="post-option">
            {/* POST OPTION ICON */}
            <svg className="post-option-icon icon-comment">
              <use xlinkHref="#svg-comment" />
            </svg>
            {/* /POST OPTION ICON */}
            {/* POST OPTION TEXT */}
            <p className="post-option-text">Comment</p>
            {/* /POST OPTION TEXT */}
          </div>
          {/* /POST OPTION */}
          {/* POST OPTION */}
          <div className="post-option">
            {/* POST OPTION ICON */}
            <svg className="post-option-icon icon-share">
              <use xlinkHref="#svg-share" />
            </svg>
            {/* /POST OPTION ICON */}
            {/* POST OPTION TEXT */}
            <p className="post-option-text">Share</p>
            {/* /POST OPTION TEXT */}
          </div>
          {/* /POST OPTION */}
        </div>
        {/* /POST OPTIONS */}
      </div>
      <div className="widget-box no-padding">
        {/* WIDGET BOX SETTINGS */}
        <div className="widget-box-settings">
          {/* POST SETTINGS WRAP */}
          <div className="post-settings-wrap" style={{ position: "relative" }}>
            {/* POST SETTINGS */}
            <div className="post-settings widget-box-post-settings-dropdown-trigger">
              {/* POST SETTINGS ICON */}
              <svg className="post-settings-icon icon-more-dots">
                <use xlinkHref="#svg-more-dots" />
              </svg>
              {/* /POST SETTINGS ICON */}
            </div>
            {/* /POST SETTINGS */}
            {/* SIMPLE DROPDOWN */}
            <div
              className="simple-dropdown widget-box-post-settings-dropdown"
              style={{
                position: "absolute",
                zIndex: 9999,
                top: 30,
                right: 9,
                opacity: 0,
                visibility: "hidden",
                transform: "translate(0px, -20px)",
                transition:
                  "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
              }}
            >
              {/* SIMPLE DROPDOWN LINK */}
              <p className="simple-dropdown-link">Edit Post</p>
              {/* /SIMPLE DROPDOWN LINK */}
              {/* SIMPLE DROPDOWN LINK */}
              <p className="simple-dropdown-link">Delete Post</p>
              {/* /SIMPLE DROPDOWN LINK */}
              {/* SIMPLE DROPDOWN LINK */}
              <p className="simple-dropdown-link">Make it Featured</p>
              {/* /SIMPLE DROPDOWN LINK */}
              {/* SIMPLE DROPDOWN LINK */}
              <p className="simple-dropdown-link">Report Post</p>
              {/* /SIMPLE DROPDOWN LINK */}
              {/* SIMPLE DROPDOWN LINK */}
              <p className="simple-dropdown-link">Report Author</p>
              {/* /SIMPLE DROPDOWN LINK */}
            </div>
            {/* /SIMPLE DROPDOWN */}
          </div>
          {/* /POST SETTINGS WRAP */}
        </div>
        {/* /WIDGET BOX SETTINGS */}
        {/* WIDGET BOX STATUS */}
        <div className="widget-box-status">
          {/* WIDGET BOX STATUS CONTENT */}
          <div className="widget-box-status-content">
            {/* USER STATUS */}
            <div className="user-status">
              {/* USER STATUS AVATAR */}
              <a className="user-status-avatar" href="profile-timeline.html">
                {/* USER AVATAR */}
                <div className="user-avatar small no-outline">
                  {/* USER AVATAR CONTENT */}
                  <div className="user-avatar-content">
                    {/* HEXAGON */}
                    <div
                      className="hexagon-image-30-32"
                      data-src="/img/avatar/04.jpg"
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
                    <p className="user-avatar-badge-text">6</p>
                    {/* /USER AVATAR BADGE TEXT */}
                  </div>
                  {/* /USER AVATAR BADGE */}
                </div>
                {/* /USER AVATAR */}
              </a>
              {/* /USER STATUS AVATAR */}
              {/* USER STATUS TITLE */}
              <p className="user-status-title medium">
                <a className="bold" href="profile-timeline.html">
                  Bearded Wonder
                </a>
              </p>
              {/* /USER STATUS TITLE */}
              {/* USER STATUS TEXT */}
              <p className="user-status-text small">39 minutes ago</p>
              {/* /USER STATUS TEXT */}
            </div>
            {/* /USER STATUS */}
            {/* WIDGET BOX STATUS TEXT */}
            <p className="widget-box-status-text">
              Sorry everyone, but from now on, I will only be able to edit and
              upload one design tutorial per month. This happens because I'm
              having a lot on my plate right now and recording and editing the
              tutorials requiere a lot of attention.
            </p>
            {/* /WIDGET BOX STATUS TEXT */}
            {/* CONTENT ACTIONS */}
            <div className="content-actions">
              {/* CONTENT ACTION */}
              <div className="content-action">
                {/* META LINE */}
                <div className="meta-line">
                  {/* META LINE LIST */}
                  <div className="meta-line-list reaction-item-list">
                    {/* REACTION ITEM */}
                    <div
                      className="reaction-item"
                      style={{ position: "relative" }}
                    >
                      {/* REACTION IMAGE */}
                      <img
                        className="reaction-image reaction-item-dropdown-trigger"
                        src="/img/reaction/dislike.png"
                        alt="reaction-dislike"
                      />
                      {/* /REACTION IMAGE */}
                      {/* SIMPLE DROPDOWN */}
                      <div
                        className="simple-dropdown padded reaction-item-dropdown"
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
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">
                          <img
                            className="reaction"
                            src="/img/reaction/dislike.png"
                            alt="reaction-dislike"
                          />{" "}
                          <span className="bold">Dislike</span>
                        </p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">Matt Parker</p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">Destroy Dex</p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">The Green Goo</p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                      </div>
                      {/* /SIMPLE DROPDOWN */}
                    </div>
                    {/* /REACTION ITEM */}
                    {/* REACTION ITEM */}
                    <div
                      className="reaction-item"
                      style={{ position: "relative" }}
                    >
                      {/* REACTION IMAGE */}
                      <img
                        className="reaction-image reaction-item-dropdown-trigger"
                        src="/img/reaction/love.png"
                        alt="reaction-love"
                      />
                      {/* /REACTION IMAGE */}
                      {/* SIMPLE DROPDOWN */}
                      <div
                        className="simple-dropdown padded reaction-item-dropdown"
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
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">
                          <img
                            className="reaction"
                            src="/img/reaction/love.png"
                            alt="reaction-love"
                          />{" "}
                          <span className="bold">Love</span>
                        </p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">Sandra Strange</p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">Jane Rodgers</p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                      </div>
                      {/* /SIMPLE DROPDOWN */}
                    </div>
                    {/* /REACTION ITEM */}
                    {/* REACTION ITEM */}
                    <div
                      className="reaction-item"
                      style={{ position: "relative" }}
                    >
                      {/* REACTION IMAGE */}
                      <img
                        className="reaction-image reaction-item-dropdown-trigger"
                        src="/img/reaction/like.png"
                        alt="reaction-like"
                      />
                      {/* /REACTION IMAGE */}
                      {/* SIMPLE DROPDOWN */}
                      <div
                        className="simple-dropdown padded reaction-item-dropdown"
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
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">
                          <img
                            className="reaction"
                            src="/img/reaction/like.png"
                            alt="reaction-like"
                          />{" "}
                          <span className="bold">Like</span>
                        </p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">Neko Bebop</p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">Nick Grissom</p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">Sarah Diamond</p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">Jett Spiegel</p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">
                          <span className="bold">and 2 more...</span>
                        </p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                      </div>
                      {/* /SIMPLE DROPDOWN */}
                    </div>
                    {/* /REACTION ITEM */}
                  </div>
                  {/* /META LINE LIST */}
                  {/* META LINE TEXT */}
                  <p className="meta-line-text">11</p>
                  {/* /META LINE TEXT */}
                </div>
                {/* /META LINE */}
                {/* META LINE */}
                <div className="meta-line">
                  {/* META LINE LIST */}
                  <div className="meta-line-list user-avatar-list">
                    {/* USER AVATAR */}
                    <div className="user-avatar micro no-stats">
                      {/* USER AVATAR BORDER */}
                      <div className="user-avatar-border">
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
                      {/* /USER AVATAR BORDER */}
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-18-20"
                          data-src="/img/avatar/08.jpg"
                          style={{
                            width: 18,
                            height: 20,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={18}
                            height={20}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
                    {/* USER AVATAR */}
                    <div className="user-avatar micro no-stats">
                      {/* USER AVATAR BORDER */}
                      <div className="user-avatar-border">
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
                      {/* /USER AVATAR BORDER */}
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-18-20"
                          data-src="/img/avatar/11.jpg"
                          style={{
                            width: 18,
                            height: 20,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={18}
                            height={20}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
                    {/* USER AVATAR */}
                    <div className="user-avatar micro no-stats">
                      {/* USER AVATAR BORDER */}
                      <div className="user-avatar-border">
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
                      {/* /USER AVATAR BORDER */}
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-18-20"
                          data-src="/img/avatar/06.jpg"
                          style={{
                            width: 18,
                            height: 20,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={18}
                            height={20}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
                    {/* USER AVATAR */}
                    <div className="user-avatar micro no-stats">
                      {/* USER AVATAR BORDER */}
                      <div className="user-avatar-border">
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
                      {/* /USER AVATAR BORDER */}
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-18-20"
                          data-src="/img/avatar/07.jpg"
                          style={{
                            width: 18,
                            height: 20,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={18}
                            height={20}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
                    {/* USER AVATAR */}
                    <div className="user-avatar micro no-stats">
                      {/* USER AVATAR BORDER */}
                      <div className="user-avatar-border">
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
                      {/* /USER AVATAR BORDER */}
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-18-20"
                          data-src="/img/avatar/10.jpg"
                          style={{
                            width: 18,
                            height: 20,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={18}
                            height={20}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
                  </div>
                  {/* /META LINE LIST */}
                  {/* META LINE TEXT */}
                  <p className="meta-line-text">18 Participants</p>
                  {/* /META LINE TEXT */}
                </div>
                {/* /META LINE */}
              </div>
              {/* /CONTENT ACTION */}
              {/* CONTENT ACTION */}
              <div className="content-action">
                {/* META LINE */}
                <div className="meta-line">
                  {/* META LINE LINK */}
                  <p className="meta-line-link">15 Comments</p>
                  {/* /META LINE LINK */}
                </div>
                {/* /META LINE */}
                {/* META LINE */}
                <div className="meta-line">
                  {/* META LINE TEXT */}
                  <p className="meta-line-text">0 Shares</p>
                  {/* /META LINE TEXT */}
                </div>
                {/* /META LINE */}
              </div>
              {/* /CONTENT ACTION */}
            </div>
            {/* /CONTENT ACTIONS */}
          </div>
          {/* /WIDGET BOX STATUS CONTENT */}
        </div>
        {/* /WIDGET BOX STATUS */}
        {/* POST OPTIONS */}
        <div className="post-options">
          {/* POST OPTION WRAP */}
          <div className="post-option-wrap" style={{ position: "relative" }}>
            {/* POST OPTION */}
            <div className="post-option reaction-options-dropdown-trigger">
              {/* POST OPTION ICON */}
              <svg className="post-option-icon icon-thumbs-up">
                <use xlinkHref="#svg-thumbs-up" />
              </svg>
              {/* /POST OPTION ICON */}
              {/* POST OPTION TEXT */}
              <p className="post-option-text">React!</p>
              {/* /POST OPTION TEXT */}
            </div>
            {/* /POST OPTION */}
            {/* REACTION OPTIONS */}
            <div
              className="reaction-options reaction-options-dropdown"
              style={{
                position: "absolute",
                zIndex: 9999,
                bottom: 54,
                left: "-16px",
                opacity: 0,
                visibility: "hidden",
                transform: "translate(0px, 20px)",
                transition:
                  "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
              }}
            >
              {/* REACTION OPTION */}
              <div
                className="reaction-option text-tooltip-tft"
                data-title="Like"
                style={{ position: "relative" }}
              >
                {/* REACTION OPTION IMAGE */}
                <img
                  className="reaction-option-image"
                  src="/img/reaction/like.png"
                  alt="reaction-like"
                />
                {/* /REACTION OPTION IMAGE */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    top: "-28px",
                    left: "50%",
                    marginLeft: "-24px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(0px, 10px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Like</p>
                </div>
              </div>
              {/* /REACTION OPTION */}
              {/* REACTION OPTION */}
              <div
                className="reaction-option text-tooltip-tft"
                data-title="Love"
                style={{ position: "relative" }}
              >
                {/* REACTION OPTION IMAGE */}
                <img
                  className="reaction-option-image"
                  src="/img/reaction/love.png"
                  alt="reaction-love"
                />
                {/* /REACTION OPTION IMAGE */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    top: "-28px",
                    left: "50%",
                    marginLeft: "-26px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(0px, 10px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Love</p>
                </div>
              </div>
              {/* /REACTION OPTION */}
              {/* REACTION OPTION */}
              <div
                className="reaction-option text-tooltip-tft"
                data-title="Dislike"
                style={{ position: "relative" }}
              >
                {/* REACTION OPTION IMAGE */}
                <img
                  className="reaction-option-image"
                  src="/img/reaction/dislike.png"
                  alt="reaction-dislike"
                />
                {/* /REACTION OPTION IMAGE */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    top: "-28px",
                    left: "50%",
                    marginLeft: "-31.5px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(0px, 10px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Dislike</p>
                </div>
              </div>
              {/* /REACTION OPTION */}
              {/* REACTION OPTION */}
              <div
                className="reaction-option text-tooltip-tft"
                data-title="Happy"
                style={{ position: "relative" }}
              >
                {/* REACTION OPTION IMAGE */}
                <img
                  className="reaction-option-image"
                  src="/img/reaction/happy.png"
                  alt="reaction-happy"
                />
                {/* /REACTION OPTION IMAGE */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    top: "-28px",
                    left: "50%",
                    marginLeft: "-30.5px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(0px, 10px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Happy</p>
                </div>
              </div>
              {/* /REACTION OPTION */}
              {/* REACTION OPTION */}
              <div
                className="reaction-option text-tooltip-tft"
                data-title="Funny"
                style={{ position: "relative" }}
              >
                {/* REACTION OPTION IMAGE */}
                <img
                  className="reaction-option-image"
                  src="/img/reaction/funny.png"
                  alt="reaction-funny"
                />
                {/* /REACTION OPTION IMAGE */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    top: "-28px",
                    left: "50%",
                    marginLeft: "-30px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(0px, 10px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Funny</p>
                </div>
              </div>
              {/* /REACTION OPTION */}
              {/* REACTION OPTION */}
              <div
                className="reaction-option text-tooltip-tft"
                data-title="Wow"
                style={{ position: "relative" }}
              >
                {/* REACTION OPTION IMAGE */}
                <img
                  className="reaction-option-image"
                  src="/img/reaction/wow.png"
                  alt="reaction-wow"
                />
                {/* /REACTION OPTION IMAGE */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    top: "-28px",
                    left: "50%",
                    marginLeft: "-26px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(0px, 10px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Wow</p>
                </div>
              </div>
              {/* /REACTION OPTION */}
              {/* REACTION OPTION */}
              <div
                className="reaction-option text-tooltip-tft"
                data-title="Angry"
                style={{ position: "relative" }}
              >
                {/* REACTION OPTION IMAGE */}
                <img
                  className="reaction-option-image"
                  src="/img/reaction/angry.png"
                  alt="reaction-angry"
                />
                {/* /REACTION OPTION IMAGE */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    top: "-28px",
                    left: "50%",
                    marginLeft: "-29.5px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(0px, 10px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Angry</p>
                </div>
              </div>
              {/* /REACTION OPTION */}
              {/* REACTION OPTION */}
              <div
                className="reaction-option text-tooltip-tft"
                data-title="Sad"
                style={{ position: "relative" }}
              >
                {/* REACTION OPTION IMAGE */}
                <img
                  className="reaction-option-image"
                  src="/img/reaction/sad.png"
                  alt="reaction-sad"
                />
                {/* /REACTION OPTION IMAGE */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    top: "-28px",
                    left: "50%",
                    marginLeft: "-23px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(0px, 10px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Sad</p>
                </div>
              </div>
              {/* /REACTION OPTION */}
            </div>
            {/* /REACTION OPTIONS */}
          </div>
          {/* /POST OPTION WRAP */}
          {/* POST OPTION */}
          <div className="post-option">
            {/* POST OPTION ICON */}
            <svg className="post-option-icon icon-comment">
              <use xlinkHref="#svg-comment" />
            </svg>
            {/* /POST OPTION ICON */}
            {/* POST OPTION TEXT */}
            <p className="post-option-text">Comment</p>
            {/* /POST OPTION TEXT */}
          </div>
          {/* /POST OPTION */}
          {/* POST OPTION */}
          <div className="post-option">
            {/* POST OPTION ICON */}
            <svg className="post-option-icon icon-share">
              <use xlinkHref="#svg-share" />
            </svg>
            {/* /POST OPTION ICON */}
            {/* POST OPTION TEXT */}
            <p className="post-option-text">Share</p>
            {/* /POST OPTION TEXT */}
          </div>
          {/* /POST OPTION */}
        </div>
        {/* /POST OPTIONS */}
      </div>
      <div className="widget-box no-padding">
        {/* WIDGET BOX SETTINGS */}
        <div className="widget-box-settings">
          {/* POST SETTINGS WRAP */}
          <div className="post-settings-wrap" style={{ position: "relative" }}>
            {/* POST SETTINGS */}
            <div className="post-settings widget-box-post-settings-dropdown-trigger">
              {/* POST SETTINGS ICON */}
              <svg className="post-settings-icon icon-more-dots">
                <use xlinkHref="#svg-more-dots" />
              </svg>
              {/* /POST SETTINGS ICON */}
            </div>
            {/* /POST SETTINGS */}
            {/* SIMPLE DROPDOWN */}
            <div
              className="simple-dropdown widget-box-post-settings-dropdown"
              style={{
                position: "absolute",
                zIndex: 9999,
                top: 30,
                right: 9,
                opacity: 0,
                visibility: "hidden",
                transform: "translate(0px, -20px)",
                transition:
                  "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
              }}
            >
              {/* SIMPLE DROPDOWN LINK */}
              <p className="simple-dropdown-link">Edit Post</p>
              {/* /SIMPLE DROPDOWN LINK */}
              {/* SIMPLE DROPDOWN LINK */}
              <p className="simple-dropdown-link">Delete Post</p>
              {/* /SIMPLE DROPDOWN LINK */}
              {/* SIMPLE DROPDOWN LINK */}
              <p className="simple-dropdown-link">Make it Featured</p>
              {/* /SIMPLE DROPDOWN LINK */}
              {/* SIMPLE DROPDOWN LINK */}
              <p className="simple-dropdown-link">Report Post</p>
              {/* /SIMPLE DROPDOWN LINK */}
              {/* SIMPLE DROPDOWN LINK */}
              <p className="simple-dropdown-link">Report Author</p>
              {/* /SIMPLE DROPDOWN LINK */}
            </div>
            {/* /SIMPLE DROPDOWN */}
          </div>
          {/* /POST SETTINGS WRAP */}
        </div>
        {/* /WIDGET BOX SETTINGS */}
        {/* WIDGET BOX STATUS */}
        <div className="widget-box-status">
          {/* WIDGET BOX STATUS CONTENT */}
          <div className="widget-box-status-content">
            {/* USER STATUS */}
            <div className="user-status">
              {/* USER STATUS AVATAR */}
              <a className="user-status-avatar" href="profile-timeline.html">
                {/* USER AVATAR */}
                <div className="user-avatar small no-outline">
                  {/* USER AVATAR CONTENT */}
                  <div className="user-avatar-content">
                    {/* HEXAGON */}
                    <div
                      className="hexagon-image-30-32"
                      data-src="/img/avatar/04.jpg"
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
                    <p className="user-avatar-badge-text">6</p>
                    {/* /USER AVATAR BADGE TEXT */}
                  </div>
                  {/* /USER AVATAR BADGE */}
                </div>
                {/* /USER AVATAR */}
              </a>
              {/* /USER STATUS AVATAR */}
              {/* USER STATUS TITLE */}
              <p className="user-status-title medium">
                <a className="bold" href="profile-timeline.html">
                  Bearded Wonder
                </a>
              </p>
              {/* /USER STATUS TITLE */}
              {/* USER STATUS TEXT */}
              <p className="user-status-text small">39 minutes ago</p>
              {/* /USER STATUS TEXT */}
            </div>
            {/* /USER STATUS */}
            {/* WIDGET BOX STATUS TEXT */}
            <p className="widget-box-status-text">
              Sorry everyone, but from now on, I will only be able to edit and
              upload one design tutorial per month. This happens because I'm
              having a lot on my plate right now and recording and editing the
              tutorials requiere a lot of attention.
            </p>
            {/* /WIDGET BOX STATUS TEXT */}
            {/* CONTENT ACTIONS */}
            <div className="content-actions">
              {/* CONTENT ACTION */}
              <div className="content-action">
                {/* META LINE */}
                <div className="meta-line">
                  {/* META LINE LIST */}
                  <div className="meta-line-list reaction-item-list">
                    {/* REACTION ITEM */}
                    <div
                      className="reaction-item"
                      style={{ position: "relative" }}
                    >
                      {/* REACTION IMAGE */}
                      <img
                        className="reaction-image reaction-item-dropdown-trigger"
                        src="/img/reaction/dislike.png"
                        alt="reaction-dislike"
                      />
                      {/* /REACTION IMAGE */}
                      {/* SIMPLE DROPDOWN */}
                      <div
                        className="simple-dropdown padded reaction-item-dropdown"
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
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">
                          <img
                            className="reaction"
                            src="/img/reaction/dislike.png"
                            alt="reaction-dislike"
                          />{" "}
                          <span className="bold">Dislike</span>
                        </p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">Matt Parker</p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">Destroy Dex</p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">The Green Goo</p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                      </div>
                      {/* /SIMPLE DROPDOWN */}
                    </div>
                    {/* /REACTION ITEM */}
                    {/* REACTION ITEM */}
                    <div
                      className="reaction-item"
                      style={{ position: "relative" }}
                    >
                      {/* REACTION IMAGE */}
                      <img
                        className="reaction-image reaction-item-dropdown-trigger"
                        src="/img/reaction/love.png"
                        alt="reaction-love"
                      />
                      {/* /REACTION IMAGE */}
                      {/* SIMPLE DROPDOWN */}
                      <div
                        className="simple-dropdown padded reaction-item-dropdown"
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
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">
                          <img
                            className="reaction"
                            src="/img/reaction/love.png"
                            alt="reaction-love"
                          />{" "}
                          <span className="bold">Love</span>
                        </p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">Sandra Strange</p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">Jane Rodgers</p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                      </div>
                      {/* /SIMPLE DROPDOWN */}
                    </div>
                    {/* /REACTION ITEM */}
                    {/* REACTION ITEM */}
                    <div
                      className="reaction-item"
                      style={{ position: "relative" }}
                    >
                      {/* REACTION IMAGE */}
                      <img
                        className="reaction-image reaction-item-dropdown-trigger"
                        src="/img/reaction/like.png"
                        alt="reaction-like"
                      />
                      {/* /REACTION IMAGE */}
                      {/* SIMPLE DROPDOWN */}
                      <div
                        className="simple-dropdown padded reaction-item-dropdown"
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
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">
                          <img
                            className="reaction"
                            src="/img/reaction/like.png"
                            alt="reaction-like"
                          />{" "}
                          <span className="bold">Like</span>
                        </p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">Neko Bebop</p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">Nick Grissom</p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">Sarah Diamond</p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">Jett Spiegel</p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                        {/* SIMPLE DROPDOWN TEXT */}
                        <p className="simple-dropdown-text">
                          <span className="bold">and 2 more...</span>
                        </p>
                        {/* /SIMPLE DROPDOWN TEXT */}
                      </div>
                      {/* /SIMPLE DROPDOWN */}
                    </div>
                    {/* /REACTION ITEM */}
                  </div>
                  {/* /META LINE LIST */}
                  {/* META LINE TEXT */}
                  <p className="meta-line-text">11</p>
                  {/* /META LINE TEXT */}
                </div>
                {/* /META LINE */}
                {/* META LINE */}
                <div className="meta-line">
                  {/* META LINE LIST */}
                  <div className="meta-line-list user-avatar-list">
                    {/* USER AVATAR */}
                    <div className="user-avatar micro no-stats">
                      {/* USER AVATAR BORDER */}
                      <div className="user-avatar-border">
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
                      {/* /USER AVATAR BORDER */}
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-18-20"
                          data-src="/img/avatar/08.jpg"
                          style={{
                            width: 18,
                            height: 20,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={18}
                            height={20}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
                    {/* USER AVATAR */}
                    <div className="user-avatar micro no-stats">
                      {/* USER AVATAR BORDER */}
                      <div className="user-avatar-border">
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
                      {/* /USER AVATAR BORDER */}
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-18-20"
                          data-src="/img/avatar/11.jpg"
                          style={{
                            width: 18,
                            height: 20,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={18}
                            height={20}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
                    {/* USER AVATAR */}
                    <div className="user-avatar micro no-stats">
                      {/* USER AVATAR BORDER */}
                      <div className="user-avatar-border">
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
                      {/* /USER AVATAR BORDER */}
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-18-20"
                          data-src="/img/avatar/06.jpg"
                          style={{
                            width: 18,
                            height: 20,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={18}
                            height={20}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
                    {/* USER AVATAR */}
                    <div className="user-avatar micro no-stats">
                      {/* USER AVATAR BORDER */}
                      <div className="user-avatar-border">
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
                      {/* /USER AVATAR BORDER */}
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-18-20"
                          data-src="/img/avatar/07.jpg"
                          style={{
                            width: 18,
                            height: 20,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={18}
                            height={20}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
                    {/* USER AVATAR */}
                    <div className="user-avatar micro no-stats">
                      {/* USER AVATAR BORDER */}
                      <div className="user-avatar-border">
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
                      {/* /USER AVATAR BORDER */}
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-18-20"
                          data-src="/img/avatar/10.jpg"
                          style={{
                            width: 18,
                            height: 20,
                            position: "relative"
                          }}
                        >
                          <canvas
                            width={18}
                            height={20}
                            style={{ position: "absolute", top: 0, left: 0 }}
                          />
                        </div>
                        {/* /HEXAGON */}
                      </div>
                      {/* /USER AVATAR CONTENT */}
                    </div>
                    {/* /USER AVATAR */}
                  </div>
                  {/* /META LINE LIST */}
                  {/* META LINE TEXT */}
                  <p className="meta-line-text">18 Participants</p>
                  {/* /META LINE TEXT */}
                </div>
                {/* /META LINE */}
              </div>
              {/* /CONTENT ACTION */}
              {/* CONTENT ACTION */}
              <div className="content-action">
                {/* META LINE */}
                <div className="meta-line">
                  {/* META LINE LINK */}
                  <p className="meta-line-link">15 Comments</p>
                  {/* /META LINE LINK */}
                </div>
                {/* /META LINE */}
                {/* META LINE */}
                <div className="meta-line">
                  {/* META LINE TEXT */}
                  <p className="meta-line-text">0 Shares</p>
                  {/* /META LINE TEXT */}
                </div>
                {/* /META LINE */}
              </div>
              {/* /CONTENT ACTION */}
            </div>
            {/* /CONTENT ACTIONS */}
          </div>
          {/* /WIDGET BOX STATUS CONTENT */}
        </div>
        {/* /WIDGET BOX STATUS */}
        {/* POST OPTIONS */}
        <div className="post-options">
          {/* POST OPTION WRAP */}
          <div className="post-option-wrap" style={{ position: "relative" }}>
            {/* POST OPTION */}
            <div className="post-option reaction-options-dropdown-trigger">
              {/* POST OPTION ICON */}
              <svg className="post-option-icon icon-thumbs-up">
                <use xlinkHref="#svg-thumbs-up" />
              </svg>
              {/* /POST OPTION ICON */}
              {/* POST OPTION TEXT */}
              <p className="post-option-text">React!</p>
              {/* /POST OPTION TEXT */}
            </div>
            {/* /POST OPTION */}
            {/* REACTION OPTIONS */}
            <div
              className="reaction-options reaction-options-dropdown"
              style={{
                position: "absolute",
                zIndex: 9999,
                bottom: 54,
                left: "-16px",
                opacity: 0,
                visibility: "hidden",
                transform: "translate(0px, 20px)",
                transition:
                  "transform 0.3s ease-in-out 0s, opacity 0.3s ease-in-out 0s, visibility 0.3s ease-in-out 0s"
              }}
            >
              {/* REACTION OPTION */}
              <div
                className="reaction-option text-tooltip-tft"
                data-title="Like"
                style={{ position: "relative" }}
              >
                {/* REACTION OPTION IMAGE */}
                <img
                  className="reaction-option-image"
                  src="/img/reaction/like.png"
                  alt="reaction-like"
                />
                {/* /REACTION OPTION IMAGE */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    top: "-28px",
                    left: "50%",
                    marginLeft: "-24px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(0px, 10px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Like</p>
                </div>
              </div>
              {/* /REACTION OPTION */}
              {/* REACTION OPTION */}
              <div
                className="reaction-option text-tooltip-tft"
                data-title="Love"
                style={{ position: "relative" }}
              >
                {/* REACTION OPTION IMAGE */}
                <img
                  className="reaction-option-image"
                  src="/img/reaction/love.png"
                  alt="reaction-love"
                />
                {/* /REACTION OPTION IMAGE */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    top: "-28px",
                    left: "50%",
                    marginLeft: "-26px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(0px, 10px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Love</p>
                </div>
              </div>
              {/* /REACTION OPTION */}
              {/* REACTION OPTION */}
              <div
                className="reaction-option text-tooltip-tft"
                data-title="Dislike"
                style={{ position: "relative" }}
              >
                {/* REACTION OPTION IMAGE */}
                <img
                  className="reaction-option-image"
                  src="/img/reaction/dislike.png"
                  alt="reaction-dislike"
                />
                {/* /REACTION OPTION IMAGE */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    top: "-28px",
                    left: "50%",
                    marginLeft: "-31.5px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(0px, 10px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Dislike</p>
                </div>
              </div>
              {/* /REACTION OPTION */}
              {/* REACTION OPTION */}
              <div
                className="reaction-option text-tooltip-tft"
                data-title="Happy"
                style={{ position: "relative" }}
              >
                {/* REACTION OPTION IMAGE */}
                <img
                  className="reaction-option-image"
                  src="/img/reaction/happy.png"
                  alt="reaction-happy"
                />
                {/* /REACTION OPTION IMAGE */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    top: "-28px",
                    left: "50%",
                    marginLeft: "-30.5px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(0px, 10px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Happy</p>
                </div>
              </div>
              {/* /REACTION OPTION */}
              {/* REACTION OPTION */}
              <div
                className="reaction-option text-tooltip-tft"
                data-title="Funny"
                style={{ position: "relative" }}
              >
                {/* REACTION OPTION IMAGE */}
                <img
                  className="reaction-option-image"
                  src="/img/reaction/funny.png"
                  alt="reaction-funny"
                />
                {/* /REACTION OPTION IMAGE */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    top: "-28px",
                    left: "50%",
                    marginLeft: "-30px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(0px, 10px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Funny</p>
                </div>
              </div>
              {/* /REACTION OPTION */}
              {/* REACTION OPTION */}
              <div
                className="reaction-option text-tooltip-tft"
                data-title="Wow"
                style={{ position: "relative" }}
              >
                {/* REACTION OPTION IMAGE */}
                <img
                  className="reaction-option-image"
                  src="/img/reaction/wow.png"
                  alt="reaction-wow"
                />
                {/* /REACTION OPTION IMAGE */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    top: "-28px",
                    left: "50%",
                    marginLeft: "-26px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(0px, 10px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Wow</p>
                </div>
              </div>
              {/* /REACTION OPTION */}
              {/* REACTION OPTION */}
              <div
                className="reaction-option text-tooltip-tft"
                data-title="Angry"
                style={{ position: "relative" }}
              >
                {/* REACTION OPTION IMAGE */}
                <img
                  className="reaction-option-image"
                  src="/img/reaction/angry.png"
                  alt="reaction-angry"
                />
                {/* /REACTION OPTION IMAGE */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    top: "-28px",
                    left: "50%",
                    marginLeft: "-29.5px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(0px, 10px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Angry</p>
                </div>
              </div>
              {/* /REACTION OPTION */}
              {/* REACTION OPTION */}
              <div
                className="reaction-option text-tooltip-tft"
                data-title="Sad"
                style={{ position: "relative" }}
              >
                {/* REACTION OPTION IMAGE */}
                <img
                  className="reaction-option-image"
                  src="/img/reaction/sad.png"
                  alt="reaction-sad"
                />
                {/* /REACTION OPTION IMAGE */}
                <div
                  className="xm-tooltip"
                  style={{
                    whiteSpace: "nowrap",
                    position: "absolute",
                    zIndex: 99999,
                    top: "-28px",
                    left: "50%",
                    marginLeft: "-23px",
                    opacity: 0,
                    visibility: "hidden",
                    transform: "translate(0px, 10px)",
                    transition: "all 0.3s ease-in-out 0s"
                  }}
                >
                  <p className="xm-tooltip-text">Sad</p>
                </div>
              </div>
              {/* /REACTION OPTION */}
            </div>
            {/* /REACTION OPTIONS */}
          </div>
          {/* /POST OPTION WRAP */}
          {/* POST OPTION */}
          <div className="post-option">
            {/* POST OPTION ICON */}
            <svg className="post-option-icon icon-comment">
              <use xlinkHref="#svg-comment" />
            </svg>
            {/* /POST OPTION ICON */}
            {/* POST OPTION TEXT */}
            <p className="post-option-text">Comment</p>
            {/* /POST OPTION TEXT */}
          </div>
          {/* /POST OPTION */}
          {/* POST OPTION */}
          <div className="post-option">
            {/* POST OPTION ICON */}
            <svg className="post-option-icon icon-share">
              <use xlinkHref="#svg-share" />
            </svg>
            {/* /POST OPTION ICON */}
            {/* POST OPTION TEXT */}
            <p className="post-option-text">Share</p>
            {/* /POST OPTION TEXT */}
          </div>
          {/* /POST OPTION */}
        </div>
        {/* /POST OPTIONS */}
      </div>
            </>
    )
}
import Image from 'next/image';
import Link from "next/link";

export default function LoggedIn(props){
    return (
        <header className="header">
        {/* HEADER ACTIONS */}
        <div className="header-actions">
          {/* HEADER BRAND */}
          <div className="header-brand">
            {/* LOGO */}
            <div className="logo">
              {/* ICON LOGO VIKINGER */}
              <svg className="icon-logo-vikinger small">
                <use xlinkHref="#svg-logo-vikinger" />
              </svg>
              {/* /ICON LOGO VIKINGER */}
            </div>
            {/* /LOGO */}
            {/* HEADER BRAND TEXT */}
            <h1 className="header-brand-text">Vikinger</h1>
            {/* /HEADER BRAND TEXT */}
          </div>
          {/* /HEADER BRAND */}
        </div>
        {/* /HEADER ACTIONS */}
        {/* HEADER ACTIONS */}
        <div className="header-actions">
          {/* SIDEMENU TRIGGER */}
          <div className="sidemenu-trigger navigation-widget-trigger">
            {/* ICON GRID */}
            <svg className="icon-grid">
              <use xlinkHref="#svg-grid" />
            </svg>
            {/* /ICON GRID */}
          </div>
          {/* /SIDEMENU TRIGGER */}
          {/* MOBILEMENU TRIGGER */}
          <div className="mobilemenu-trigger navigation-widget-mobile-trigger">
            {/* BURGER ICON */}
            <div className="burger-icon inverted">
              {/* BURGER ICON BAR */}
              <div className="burger-icon-bar" />
              {/* /BURGER ICON BAR */}
              {/* BURGER ICON BAR */}
              <div className="burger-icon-bar" />
              {/* /BURGER ICON BAR */}
              {/* BURGER ICON BAR */}
              <div className="burger-icon-bar" />
              {/* /BURGER ICON BAR */}
            </div>
            {/* /BURGER ICON */}
          </div>
          {/* /MOBILEMENU TRIGGER */}
          {/* NAVIGATION */}
          <nav className="navigation">
            {/* MENU MAIN */}
            <ul className="menu-main">
              {/* MENU MAIN ITEM */}
              <li className="menu-main-item">
                {/* MENU MAIN ITEM LINK */}
                <a className="menu-main-item-link" href="#">
                  Home
                </a>
                {/* /MENU MAIN ITEM LINK */}
              </li>
              {/* /MENU MAIN ITEM */}
              {/* MENU MAIN ITEM */}
              <li className="menu-main-item">
                {/* MENU MAIN ITEM LINK */}
                <a className="menu-main-item-link" href="#">
                  Careers
                </a>
                {/* /MENU MAIN ITEM LINK */}
              </li>
              {/* /MENU MAIN ITEM */}
              {/* MENU MAIN ITEM */}
              <li className="menu-main-item">
                {/* MENU MAIN ITEM LINK */}
                <a className="menu-main-item-link" href="#">
                  Faqs
                </a>
                {/* /MENU MAIN ITEM LINK */}
              </li>
              {/* /MENU MAIN ITEM */}
              {/* MENU MAIN ITEM */}
              <li className="menu-main-item">
                {/* MENU MAIN ITEM LINK */}
                <p className="menu-main-item-link">
                  {/* ICON DOTS */}
                  <svg className="icon-dots">
                    <use xlinkHref="#svg-dots" />
                  </svg>
                  {/* /ICON DOTS */}
                </p>
                {/* /MENU MAIN ITEM LINK */}
                {/* MENU MAIN */}
                <ul className="menu-main">
                  {/* MENU MAIN ITEM */}
                  <li className="menu-main-item">
                    {/* MENU MAIN ITEM LINK */}
                    <a className="menu-main-item-link" href="#">
                      About Us
                    </a>
                    {/* /MENU MAIN ITEM LINK */}
                  </li>
                  {/* /MENU MAIN ITEM */}
                  {/* MENU MAIN ITEM */}
                  <li className="menu-main-item">
                    {/* MENU MAIN ITEM LINK */}
                    <a className="menu-main-item-link" href="#">
                      Our Blog
                    </a>
                    {/* /MENU MAIN ITEM LINK */}
                  </li>
                  {/* /MENU MAIN ITEM */}
                  {/* MENU MAIN ITEM */}
                  <li className="menu-main-item">
                    {/* MENU MAIN ITEM LINK */}
                    <a className="menu-main-item-link" href="#">
                      Contact Us
                    </a>
                    {/* /MENU MAIN ITEM LINK */}
                  </li>
                  {/* /MENU MAIN ITEM */}
                  {/* MENU MAIN ITEM */}
                  <li className="menu-main-item">
                    {/* MENU MAIN ITEM LINK */}
                    <a className="menu-main-item-link" href="#">
                      Privacy Policy
                    </a>
                    {/* /MENU MAIN ITEM LINK */}
                  </li>
                  {/* /MENU MAIN ITEM */}
                </ul>
                {/* /MENU MAIN */}
              </li>
              {/* /MENU MAIN ITEM */}
            </ul>
            {/* /MENU MAIN */}
          </nav>
          {/* /NAVIGATION */}
        </div>
        {/* /HEADER ACTIONS */}
        {/* HEADER ACTIONS */}
        <div className="header-actions search-bar" style={{ position: "relative" }}>
          {/* INTERACTIVE INPUT */}
          <div className="interactive-input dark">
            <input
              type="text"
              id="search-main"
              name="search_main"
              placeholder="Search here for people or groups"
            />
            {/* INTERACTIVE INPUT ICON WRAP */}
            <div className="interactive-input-icon-wrap">
              {/* INTERACTIVE INPUT ICON */}
              <svg className="interactive-input-icon icon-magnifying-glass">
                <use xlinkHref="#svg-magnifying-glass" />
              </svg>
              {/* /INTERACTIVE INPUT ICON */}
            </div>
            {/* /INTERACTIVE INPUT ICON WRAP */}
            {/* INTERACTIVE INPUT ACTION */}
            <div className="interactive-input-action">
              {/* INTERACTIVE INPUT ACTION ICON */}
              <svg className="interactive-input-action-icon icon-cross-thin">
                <use xlinkHref="#svg-cross-thin" />
              </svg>
              {/* /INTERACTIVE INPUT ACTION ICON */}
            </div>
            {/* /INTERACTIVE INPUT ACTION */}
          </div>
          {/* /INTERACTIVE INPUT */}
          {/* DROPDOWN BOX */}
          <div
            className="dropdown-box padding-bottom-small header-search-dropdown"
            style={{
              position: "absolute",
              zIndex: 9999,
              top: 57,
              left: 0,
              opacity: 0,
              visibility: "hidden",
              transform: "translate(0px, -40px)",
              transition:
                "transform 0.4s ease-in-out 0s, opacity 0.4s ease-in-out 0s, visibility 0.4s ease-in-out 0s"
            }}
          >
            {/* DROPDOWN BOX CATEGORY */}
            <div className="dropdown-box-category">
              {/* DROPDOWN BOX CATEGORY TITLE */}
              <p className="dropdown-box-category-title">Members</p>
              {/* /DROPDOWN BOX CATEGORY TITLE */}
            </div>
            {/* /DROPDOWN BOX CATEGORY */}
            {/* DROPDOWN BOX LIST */}
            <div className="dropdown-box-list small no-scroll">
              {/* DROPDOWN BOX LIST ITEM */}
              <a className="dropdown-box-list-item" href="profile-timeline.html">
                {/* USER STATUS */}
                <div className="user-status notification">
                  {/* USER STATUS AVATAR */}
                  <div className="user-status-avatar">
                    {/* USER AVATAR */}
                    <div className="user-avatar small no-outline">
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-30-32"
                          data-src="img/avatar/05.jpg"
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
                        <p className="user-avatar-badge-text">12</p>
                        {/* /USER AVATAR BADGE TEXT */}
                      </div>
                      {/* /USER AVATAR BADGE */}
                    </div>
                    {/* /USER AVATAR */}
                  </div>
                  {/* /USER STATUS AVATAR */}
                  {/* USER STATUS TITLE */}
                  <p className="user-status-title">
                    <span className="bold">Neko Bebop</span>
                  </p>
                  {/* /USER STATUS TITLE */}
                  {/* USER STATUS TEXT */}
                  <p className="user-status-text">1 friends in common</p>
                  {/* /USER STATUS TEXT */}
                  {/* USER STATUS ICON */}
                  <div className="user-status-icon">
                    {/* ICON FRIEND */}
                    <svg className="icon-friend">
                      <use xlinkHref="#svg-friend" />
                    </svg>
                    {/* /ICON FRIEND */}
                  </div>
                  {/* /USER STATUS ICON */}
                </div>
                {/* /USER STATUS */}
              </a>
              {/* /DROPDOWN BOX LIST ITEM */}
              {/* DROPDOWN BOX LIST ITEM */}
              <a className="dropdown-box-list-item" href="profile-timeline.html">
                {/* USER STATUS */}
                <div className="user-status notification">
                  {/* USER STATUS AVATAR */}
                  <div className="user-status-avatar">
                    {/* USER AVATAR */}
                    <div className="user-avatar small no-outline">
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-30-32"
                          data-src="img/avatar/15.jpg"
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
                        <p className="user-avatar-badge-text">7</p>
                        {/* /USER AVATAR BADGE TEXT */}
                      </div>
                      {/* /USER AVATAR BADGE */}
                    </div>
                    {/* /USER AVATAR */}
                  </div>
                  {/* /USER STATUS AVATAR */}
                  {/* USER STATUS TITLE */}
                  <p className="user-status-title">
                    <span className="bold">Tim Rogers</span>
                  </p>
                  {/* /USER STATUS TITLE */}
                  {/* USER STATUS TEXT */}
                  <p className="user-status-text">4 friends in common</p>
                  {/* /USER STATUS TEXT */}
                  {/* USER STATUS ICON */}
                  <div className="user-status-icon">
                    {/* ICON FRIEND */}
                    <svg className="icon-friend">
                      <use xlinkHref="#svg-friend" />
                    </svg>
                    {/* /ICON FRIEND */}
                  </div>
                  {/* /USER STATUS ICON */}
                </div>
                {/* /USER STATUS */}
              </a>
              {/* /DROPDOWN BOX LIST ITEM */}
            </div>
            {/* /DROPDOWN BOX LIST */}
            {/* DROPDOWN BOX CATEGORY */}
            <div className="dropdown-box-category">
              {/* DROPDOWN BOX CATEGORY TITLE */}
              <p className="dropdown-box-category-title">Groups</p>
              {/* /DROPDOWN BOX CATEGORY TITLE */}
            </div>
            {/* /DROPDOWN BOX CATEGORY */}
            {/* DROPDOWN BOX LIST */}
            <div className="dropdown-box-list small no-scroll">
              {/* DROPDOWN BOX LIST ITEM */}
              <a className="dropdown-box-list-item" href="group-timeline.html">
                {/* USER STATUS */}
                <div className="user-status notification">
                  {/* USER STATUS AVATAR */}
                  <div className="user-status-avatar">
                    {/* USER AVATAR */}
                    <div className="user-avatar small no-border">
                      {/* USER AVATAR CONTENT */}
                      <div className="user-avatar-content">
                        {/* HEXAGON */}
                        <div
                          className="hexagon-image-40-44"
                          data-src="img/avatar/24.jpg"
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
                    </div>
                    {/* /USER AVATAR */}
                  </div>
                  {/* /USER STATUS AVATAR */}
                  {/* USER STATUS TITLE */}
                  <p className="user-status-title">
                    <span className="bold">Cosplayers of the World</span>
                  </p>
                  {/* /USER STATUS TITLE */}
                  {/* USER STATUS TEXT */}
                  <p className="user-status-text">139 members</p>
                  {/* /USER STATUS TEXT */}
                  {/* USER STATUS ICON */}
                  <div className="user-status-icon">
                    {/* ICON GROUP */}
                    <svg className="icon-group">
                      <use xlinkHref="#svg-group" />
                    </svg>
                    {/* /ICON GROUP */}
                  </div>
                  {/* /USER STATUS ICON */}
                </div>
                {/* /USER STATUS */}
              </a>
              {/* /DROPDOWN BOX LIST ITEM */}
            </div>
            {/* /DROPDOWN BOX LIST */}
            {/* DROPDOWN BOX CATEGORY */}
            <div className="dropdown-box-category">
              {/* DROPDOWN BOX CATEGORY TITLE */}
              <p className="dropdown-box-category-title">Marketplace</p>
              {/* /DROPDOWN BOX CATEGORY TITLE */}
            </div>
            {/* /DROPDOWN BOX CATEGORY */}
            {/* DROPDOWN BOX LIST */}
            <div className="dropdown-box-list small no-scroll">
              {/* DROPDOWN BOX LIST ITEM */}
              <a className="dropdown-box-list-item" href="marketplace-product.html">
                {/* USER STATUS */}
                <div className="user-status no-padding-top">
                  {/* USER STATUS AVATAR */}
                  <div className="user-status-avatar">
                    {/* PICTURE */}
                    <figure
                      className="picture small round liquid"
                      style={{
                        background:
                          'url("img/marketplace/items/07.jpg") center center / cover no-repeat'
                      }}
                    >
                      <img
                        src="img/marketplace/items/07.jpg"
                        alt="item-07"
                        style={{ display: "none" }}
                      />
                    </figure>
                    {/* /PICTURE */}
                  </div>
                  {/* /USER STATUS AVATAR */}
                  {/* USER STATUS TITLE */}
                  <p className="user-status-title">
                    <span className="bold">Mercenaries White Frame</span>
                  </p>
                  {/* /USER STATUS TITLE */}
                  {/* USER STATUS TEXT */}
                  <p className="user-status-text">By Neko Bebop</p>
                  {/* /USER STATUS TEXT */}
                  {/* USER STATUS ICON */}
                  <div className="user-status-icon">
                    {/* ICON MARKETPLACE */}
                    <svg className="icon-marketplace">
                      <use xlinkHref="#svg-marketplace" />
                    </svg>
                    {/* /ICON MARKETPLACE */}
                  </div>
                  {/* /USER STATUS ICON */}
                </div>
                {/* /USER STATUS */}
              </a>
              {/* /DROPDOWN BOX LIST ITEM */}
            </div>
            {/* /DROPDOWN BOX LIST */}
          </div>
          {/* /DROPDOWN BOX */}
        </div>
        {/* /HEADER ACTIONS */}
        {/* HEADER ACTIONS */}
        <div className="header-actions">
          {/* PROGRESS STAT */}
          <div className="progress-stat">
            {/* BAR PROGRESS WRAP */}
            <div className="bar-progress-wrap">
              {/* BAR PROGRESS INFO */}
              <p className="bar-progress-info">
                Next:{" "}
                <span className="bar-progress-text">
                  38<span className="bar-progress-unit">exp</span>
                </span>
              </p>
              {/* /BAR PROGRESS INFO */}
            </div>
            {/* /BAR PROGRESS WRAP */}
            {/* PROGRESS STAT BAR */}
            <div
              id="logged-user-level"
              className="progress-stat-bar"
              style={{ width: 110, height: 4, position: "relative" }}
            >
              <canvas
                width={110}
                height={4}
                style={{ position: "absolute", top: 0, left: 0 }}
              />
              <canvas
                width={110}
                height={4}
                style={{ position: "absolute", top: 0, left: 0 }}
              />
            </div>
            {/* /PROGRESS STAT BAR */}
          </div>
          {/* /PROGRESS STAT */}
        </div>
        {/* /HEADER ACTIONS */}
        {/* HEADER ACTIONS */}
        <div className="header-actions">
          {/* ACTION LIST */}
          <div className="action-list dark">
            {/* ACTION LIST ITEM WRAP */}
            <div className="action-list-item-wrap" style={{ position: "relative" }}>
              {/* ACTION LIST ITEM */}
              <div className="action-list-item header-dropdown-trigger">
                {/* ACTION LIST ITEM ICON */}
                <svg className="action-list-item-icon icon-shopping-bag">
                  <use xlinkHref="#svg-shopping-bag" />
                </svg>
                {/* /ACTION LIST ITEM ICON */}
              </div>
              {/* /ACTION LIST ITEM */}
              {/* DROPDOWN BOX */}
              <div
                className="dropdown-box no-padding-bottom header-dropdown"
                style={{
                  position: "absolute",
                  zIndex: 9999,
                  top: 64,
                  right: 6,
                  opacity: 0,
                  visibility: "hidden",
                  transform: "translate(0px, -40px)",
                  transition:
                    "transform 0.4s ease-in-out 0s, opacity 0.4s ease-in-out 0s, visibility 0.4s ease-in-out 0s"
                }}
              >
                {/* DROPDOWN BOX HEADER */}
                <div className="dropdown-box-header">
                  {/* DROPDOWN BOX HEADER TITLE */}
                  <p className="dropdown-box-header-title">
                    Shopping Cart <span className="highlighted">3</span>
                  </p>
                  {/* /DROPDOWN BOX HEADER TITLE */}
                </div>
                {/* /DROPDOWN BOX HEADER */}
                {/* DROPDOWN BOX LIST */}
                <div
                  className="dropdown-box-list scroll-small no-hover"
                  data-simplebar="init"
                >
                  <div className="simplebar-wrapper" style={{ margin: 0 }}>
                    <div className="simplebar-height-auto-observer-wrapper">
                      <div className="simplebar-height-auto-observer" />
                    </div>
                    <div className="simplebar-mask">
                      <div
                        className="simplebar-offset"
                        style={{ right: 0, bottom: 0 }}
                      >
                        <div
                          className="simplebar-content-wrapper"
                          style={{ height: "100%", overflow: "hidden scroll" }}
                        >
                          <div className="simplebar-content" style={{ padding: 0 }}>
                            {/* DROPDOWN BOX LIST ITEM */}
                            <div className="dropdown-box-list-item">
                              {/* CART ITEM PREVIEW */}
                              <div className="cart-item-preview">
                                {/* CART ITEM PREVIEW IMAGE */}
                                <a
                                  className="cart-item-preview-image"
                                  href="marketplace-product.html"
                                >
                                  {/* PICTURE */}
                                  <figure
                                    className="picture medium round liquid"
                                    style={{
                                      background:
                                        'url("img/marketplace/items/01.jpg") center center / cover no-repeat'
                                    }}
                                  >
                                    <img
                                      src="img/marketplace/items/01.jpg"
                                      alt="item-01"
                                      style={{ display: "none" }}
                                    />
                                  </figure>
                                  {/* /PICTURE */}
                                </a>
                                {/* /CART ITEM PREVIEW IMAGE */}
                                {/* CART ITEM PREVIEW TITLE */}
                                <p className="cart-item-preview-title">
                                  <a href="marketplace-product.html">
                                    Twitch Stream UI Pack
                                  </a>
                                </p>
                                {/* /CART ITEM PREVIEW TITLE */}
                                {/* CART ITEM PREVIEW TEXT */}
                                <p className="cart-item-preview-text">
                                  Regular License
                                </p>
                                {/* /CART ITEM PREVIEW TEXT */}
                                {/* CART ITEM PREVIEW PRICE */}
                                <p className="cart-item-preview-price">
                                  <span className="highlighted">$</span> 12.00 x 1
                                </p>
                                {/* /CART ITEM PREVIEW PRICE */}
                                {/* CART ITEM PREVIEW ACTION */}
                                <div className="cart-item-preview-action">
                                  {/* ICON DELETE */}
                                  <svg className="icon-delete">
                                    <use xlinkHref="#svg-delete" />
                                  </svg>
                                  {/* /ICON DELETE */}
                                </div>
                                {/* /CART ITEM PREVIEW ACTION */}
                              </div>
                              {/* /CART ITEM PREVIEW */}
                            </div>
                            {/* /DROPDOWN BOX LIST ITEM */}
                            {/* DROPDOWN BOX LIST ITEM */}
                            <div className="dropdown-box-list-item">
                              {/* CART ITEM PREVIEW */}
                              <div className="cart-item-preview">
                                {/* CART ITEM PREVIEW IMAGE */}
                                <a
                                  className="cart-item-preview-image"
                                  href="marketplace-product.html"
                                >
                                  {/* PICTURE */}
                                  <figure
                                    className="picture medium round liquid"
                                    style={{
                                      background:
                                        'url("img/marketplace/items/11.jpg") center center / cover no-repeat'
                                    }}
                                  >
                                    <img
                                      src="img/marketplace/items/11.jpg"
                                      alt="item-11"
                                      style={{ display: "none" }}
                                    />
                                  </figure>
                                  {/* /PICTURE */}
                                </a>
                                {/* /CART ITEM PREVIEW IMAGE */}
                                {/* CART ITEM PREVIEW TITLE */}
                                <p className="cart-item-preview-title">
                                  <a href="marketplace-product.html">
                                    Gaming Coin Badges Pack
                                  </a>
                                </p>
                                {/* /CART ITEM PREVIEW TITLE */}
                                {/* CART ITEM PREVIEW TEXT */}
                                <p className="cart-item-preview-text">
                                  Regular License
                                </p>
                                {/* /CART ITEM PREVIEW TEXT */}
                                {/* CART ITEM PREVIEW PRICE */}
                                <p className="cart-item-preview-price">
                                  <span className="highlighted">$</span> 6.00 x 1
                                </p>
                                {/* /CART ITEM PREVIEW PRICE */}
                                {/* CART ITEM PREVIEW ACTION */}
                                <div className="cart-item-preview-action">
                                  {/* ICON DELETE */}
                                  <svg className="icon-delete">
                                    <use xlinkHref="#svg-delete" />
                                  </svg>
                                  {/* /ICON DELETE */}
                                </div>
                                {/* /CART ITEM PREVIEW ACTION */}
                              </div>
                              {/* /CART ITEM PREVIEW */}
                            </div>
                            {/* /DROPDOWN BOX LIST ITEM */}
                            {/* DROPDOWN BOX LIST ITEM */}
                            <div className="dropdown-box-list-item">
                              {/* CART ITEM PREVIEW */}
                              <div className="cart-item-preview">
                                {/* CART ITEM PREVIEW IMAGE */}
                                <a
                                  className="cart-item-preview-image"
                                  href="marketplace-product.html"
                                >
                                  {/* PICTURE */}
                                  <figure
                                    className="picture medium round liquid"
                                    style={{
                                      background:
                                        'url("img/marketplace/items/10.jpg") center center / cover no-repeat'
                                    }}
                                  >
                                    <img
                                      src="img/marketplace/items/10.jpg"
                                      alt="item-10"
                                      style={{ display: "none" }}
                                    />
                                  </figure>
                                  {/* /PICTURE */}
                                </a>
                                {/* /CART ITEM PREVIEW IMAGE */}
                                {/* CART ITEM PREVIEW TITLE */}
                                <p className="cart-item-preview-title">
                                  <a href="marketplace-product.html">
                                    Twitch Stream UI Pack
                                  </a>
                                </p>
                                {/* /CART ITEM PREVIEW TITLE */}
                                {/* CART ITEM PREVIEW TEXT */}
                                <p className="cart-item-preview-text">
                                  Regular License
                                </p>
                                {/* /CART ITEM PREVIEW TEXT */}
                                {/* CART ITEM PREVIEW PRICE */}
                                <p className="cart-item-preview-price">
                                  <span className="highlighted">$</span> 26.00 x 1
                                </p>
                                {/* /CART ITEM PREVIEW PRICE */}
                                {/* CART ITEM PREVIEW ACTION */}
                                <div className="cart-item-preview-action">
                                  {/* ICON DELETE */}
                                  <svg className="icon-delete">
                                    <use xlinkHref="#svg-delete" />
                                  </svg>
                                  {/* /ICON DELETE */}
                                </div>
                                {/* /CART ITEM PREVIEW ACTION */}
                              </div>
                              {/* /CART ITEM PREVIEW */}
                            </div>
                            {/* /DROPDOWN BOX LIST ITEM */}
                            {/* DROPDOWN BOX LIST ITEM */}
                            <div className="dropdown-box-list-item">
                              {/* CART ITEM PREVIEW */}
                              <div className="cart-item-preview">
                                {/* CART ITEM PREVIEW IMAGE */}
                                <a
                                  className="cart-item-preview-image"
                                  href="marketplace-product.html"
                                >
                                  {/* PICTURE */}
                                  <figure
                                    className="picture medium round liquid"
                                    style={{
                                      background:
                                        'url("img/marketplace/items/04.jpg") center center / cover no-repeat'
                                    }}
                                  >
                                    <img
                                      src="img/marketplace/items/04.jpg"
                                      alt="item-04"
                                      style={{ display: "none" }}
                                    />
                                  </figure>
                                  {/* /PICTURE */}
                                </a>
                                {/* /CART ITEM PREVIEW IMAGE */}
                                {/* CART ITEM PREVIEW TITLE */}
                                <p className="cart-item-preview-title">
                                  <a href="marketplace-product.html">
                                    Generic Joystick Pack
                                  </a>
                                </p>
                                {/* /CART ITEM PREVIEW TITLE */}
                                {/* CART ITEM PREVIEW TEXT */}
                                <p className="cart-item-preview-text">
                                  Regular License
                                </p>
                                {/* /CART ITEM PREVIEW TEXT */}
                                {/* CART ITEM PREVIEW PRICE */}
                                <p className="cart-item-preview-price">
                                  <span className="highlighted">$</span> 16.00 x 1
                                </p>
                                {/* /CART ITEM PREVIEW PRICE */}
                                {/* CART ITEM PREVIEW ACTION */}
                                <div className="cart-item-preview-action">
                                  {/* ICON DELETE */}
                                  <svg className="icon-delete">
                                    <use xlinkHref="#svg-delete" />
                                  </svg>
                                  {/* /ICON DELETE */}
                                </div>
                                {/* /CART ITEM PREVIEW ACTION */}
                              </div>
                              {/* /CART ITEM PREVIEW */}
                            </div>
                            {/* /DROPDOWN BOX LIST ITEM */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="simplebar-placeholder"
                      style={{ width: "auto", height: 360 }}
                    />
                  </div>
                  <div
                    className="simplebar-track simplebar-horizontal"
                    style={{ visibility: "hidden" }}
                  >
                    <div
                      className="simplebar-scrollbar"
                      style={{ width: 0, display: "none" }}
                    />
                  </div>
                  <div
                    className="simplebar-track simplebar-vertical"
                    style={{ visibility: "visible" }}
                  >
                    <div
                      className="simplebar-scrollbar"
                      style={{
                        height: 227,
                        transform: "translate3d(0px, 0px, 0px)",
                        display: "block"
                      }}
                    />
                  </div>
                </div>
                {/* /DROPDOWN BOX LIST */}
                {/* CART PREVIEW TOTAL */}
                <div className="cart-preview-total">
                  {/* CART PREVIEW TOTAL TITLE */}
                  <p className="cart-preview-total-title">Total:</p>
                  {/* /CART PREVIEW TOTAL TITLE */}
                  {/* CART PREVIEW TOTAL TEXT */}
                  <p className="cart-preview-total-text">
                    <span className="highlighted">$</span> 60.00
                  </p>
                  {/* /CART PREVIEW TOTAL TEXT */}
                </div>
                {/* /CART PREVIEW TOTAL */}
                {/* DROPDOWN BOX ACTIONS */}
                <div className="dropdown-box-actions">
                  {/* DROPDOWN BOX ACTION */}
                  <div className="dropdown-box-action">
                    {/* BUTTON */}
                    <a className="button secondary" href="marketplace-cart.html">
                      Shopping Cart
                    </a>
                    {/* /BUTTON */}
                  </div>
                  {/* /DROPDOWN BOX ACTION */}
                  {/* DROPDOWN BOX ACTION */}
                  <div className="dropdown-box-action">
                    {/* BUTTON */}
                    <a className="button primary" href="marketplace-checkout.html">
                      Go to Checkout
                    </a>
                    {/* /BUTTON */}
                  </div>
                  {/* /DROPDOWN BOX ACTION */}
                </div>
                {/* /DROPDOWN BOX ACTIONS */}
              </div>
              {/* /DROPDOWN BOX */}
            </div>
            {/* /ACTION LIST ITEM WRAP */}
            {/* ACTION LIST ITEM WRAP */}
            <div className="action-list-item-wrap" style={{ position: "relative" }}>
              {/* ACTION LIST ITEM */}
              <div className="action-list-item header-dropdown-trigger">
                {/* ACTION LIST ITEM ICON */}
                <svg className="action-list-item-icon icon-friend">
                  <use xlinkHref="#svg-friend" />
                </svg>
                {/* /ACTION LIST ITEM ICON */}
              </div>
              {/* /ACTION LIST ITEM */}
              {/* DROPDOWN BOX */}
              <div
                className="dropdown-box header-dropdown"
                style={{
                  position: "absolute",
                  zIndex: 9999,
                  top: 64,
                  right: 6,
                  opacity: 0,
                  visibility: "hidden",
                  transform: "translate(0px, -40px)",
                  transition:
                    "transform 0.4s ease-in-out 0s, opacity 0.4s ease-in-out 0s, visibility 0.4s ease-in-out 0s"
                }}
              >
                {/* DROPDOWN BOX HEADER */}
                <div className="dropdown-box-header">
                  {/* DROPDOWN BOX HEADER TITLE */}
                  <p className="dropdown-box-header-title">Friend Requests</p>
                  {/* /DROPDOWN BOX HEADER TITLE */}
                  {/* DROPDOWN BOX HEADER ACTIONS */}
                  <div className="dropdown-box-header-actions">
                    {/* DROPDOWN BOX HEADER ACTION */}
                    <p className="dropdown-box-header-action">Find Friends</p>
                    {/* /DROPDOWN BOX HEADER ACTION */}
                    {/* DROPDOWN BOX HEADER ACTION */}
                    <p className="dropdown-box-header-action">Settings</p>
                    {/* /DROPDOWN BOX HEADER ACTION */}
                  </div>
                  {/* /DROPDOWN BOX HEADER ACTIONS */}
                </div>
                {/* /DROPDOWN BOX HEADER */}
                {/* DROPDOWN BOX LIST */}
                <div className="dropdown-box-list no-hover" data-simplebar="init">
                  <div className="simplebar-wrapper" style={{ margin: 0 }}>
                    <div className="simplebar-height-auto-observer-wrapper">
                      <div className="simplebar-height-auto-observer" />
                    </div>
                    <div className="simplebar-mask">
                      <div
                        className="simplebar-offset"
                        style={{ right: 0, bottom: 0 }}
                      >
                        <div
                          className="simplebar-content-wrapper"
                          style={{ height: "100%", overflow: "hidden" }}
                        >
                          <div className="simplebar-content" style={{ padding: 0 }}>
                            {/* DROPDOWN BOX LIST ITEM */}
                            <div className="dropdown-box-list-item">
                              {/* USER STATUS */}
                              <div className="user-status request">
                                {/* USER STATUS AVATAR */}
                                <a
                                  className="user-status-avatar"
                                  href="profile-timeline.html"
                                >
                                  {/* USER AVATAR */}
                                  <div className="user-avatar small no-outline">
                                    {/* USER AVATAR CONTENT */}
                                    <div className="user-avatar-content">
                                      {/* HEXAGON */}
                                      <div
                                        className="hexagon-image-30-32"
                                        data-src="img/avatar/16.jpg"
                                        style={{
                                          width: 30,
                                          height: 32,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={30}
                                          height={32}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
                                          />
                                        </div>
                                        {/* /HEXAGON */}
                                      </div>
                                      {/* /USER AVATAR BADGE CONTENT */}
                                      {/* USER AVATAR BADGE TEXT */}
                                      <p className="user-avatar-badge-text">14</p>
                                      {/* /USER AVATAR BADGE TEXT */}
                                    </div>
                                    {/* /USER AVATAR BADGE */}
                                  </div>
                                  {/* /USER AVATAR */}
                                </a>
                                {/* /USER STATUS AVATAR */}
                                {/* USER STATUS TITLE */}
                                <p className="user-status-title">
                                  <a className="bold" href="profile-timeline.html">
                                    Ginny Danvers
                                  </a>
                                </p>
                                {/* /USER STATUS TITLE */}
                                {/* USER STATUS TEXT */}
                                <p className="user-status-text">
                                  6 friends in common
                                </p>
                                {/* /USER STATUS TEXT */}
                                {/* ACTION REQUEST LIST */}
                                <div className="action-request-list">
                                  {/* ACTION REQUEST */}
                                  <div className="action-request accept">
                                    {/* ACTION REQUEST ICON */}
                                    <svg className="action-request-icon icon-add-friend">
                                      <use xlinkHref="#svg-add-friend" />
                                    </svg>
                                    {/* /ACTION REQUEST ICON */}
                                  </div>
                                  {/* /ACTION REQUEST */}
                                  {/* ACTION REQUEST */}
                                  <div className="action-request decline">
                                    {/* ACTION REQUEST ICON */}
                                    <svg className="action-request-icon icon-remove-friend">
                                      <use xlinkHref="#svg-remove-friend" />
                                    </svg>
                                    {/* /ACTION REQUEST ICON */}
                                  </div>
                                  {/* /ACTION REQUEST */}
                                </div>
                                {/* ACTION REQUEST LIST */}
                              </div>
                              {/* /USER STATUS */}
                            </div>
                            {/* /DROPDOWN BOX LIST ITEM */}
                            {/* DROPDOWN BOX LIST ITEM */}
                            <div className="dropdown-box-list-item">
                              {/* USER STATUS */}
                              <div className="user-status request">
                                {/* USER STATUS AVATAR */}
                                <a
                                  className="user-status-avatar"
                                  href="profile-timeline.html"
                                >
                                  {/* USER AVATAR */}
                                  <div className="user-avatar small no-outline">
                                    {/* USER AVATAR CONTENT */}
                                    <div className="user-avatar-content">
                                      {/* HEXAGON */}
                                      <div
                                        className="hexagon-image-30-32"
                                        data-src="img/avatar/14.jpg"
                                        style={{
                                          width: 30,
                                          height: 32,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={30}
                                          height={32}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
                                          />
                                        </div>
                                        {/* /HEXAGON */}
                                      </div>
                                      {/* /USER AVATAR BADGE CONTENT */}
                                      {/* USER AVATAR BADGE TEXT */}
                                      <p className="user-avatar-badge-text">3</p>
                                      {/* /USER AVATAR BADGE TEXT */}
                                    </div>
                                    {/* /USER AVATAR BADGE */}
                                  </div>
                                  {/* /USER AVATAR */}
                                </a>
                                {/* /USER STATUS AVATAR */}
                                {/* USER STATUS TITLE */}
                                <p className="user-status-title">
                                  <a className="bold" href="profile-timeline.html">
                                    Paul Lang
                                  </a>
                                </p>
                                {/* /USER STATUS TITLE */}
                                {/* USER STATUS TEXT */}
                                <p className="user-status-text">
                                  2 friends in common
                                </p>
                                {/* /USER STATUS TEXT */}
                                {/* ACTION REQUEST LIST */}
                                <div className="action-request-list">
                                  {/* ACTION REQUEST */}
                                  <div className="action-request accept">
                                    {/* ACTION REQUEST ICON */}
                                    <svg className="action-request-icon icon-add-friend">
                                      <use xlinkHref="#svg-add-friend" />
                                    </svg>
                                    {/* /ACTION REQUEST ICON */}
                                  </div>
                                  {/* /ACTION REQUEST */}
                                  {/* ACTION REQUEST */}
                                  <div className="action-request decline">
                                    {/* ACTION REQUEST ICON */}
                                    <svg className="action-request-icon icon-remove-friend">
                                      <use xlinkHref="#svg-remove-friend" />
                                    </svg>
                                    {/* /ACTION REQUEST ICON */}
                                  </div>
                                  {/* /ACTION REQUEST */}
                                </div>
                                {/* ACTION REQUEST LIST */}
                              </div>
                              {/* /USER STATUS */}
                            </div>
                            {/* /DROPDOWN BOX LIST ITEM */}
                            {/* DROPDOWN BOX LIST ITEM */}
                            <div className="dropdown-box-list-item">
                              {/* USER STATUS */}
                              <div className="user-status request">
                                {/* USER STATUS AVATAR */}
                                <a
                                  className="user-status-avatar"
                                  href="profile-timeline.html"
                                >
                                  {/* USER AVATAR */}
                                  <div className="user-avatar small no-outline">
                                    {/* USER AVATAR CONTENT */}
                                    <div className="user-avatar-content">
                                      {/* HEXAGON */}
                                      <div
                                        className="hexagon-image-30-32"
                                        data-src="img/avatar/11.jpg"
                                        style={{
                                          width: 30,
                                          height: 32,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={30}
                                          height={32}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
                                          />
                                        </div>
                                        {/* /HEXAGON */}
                                      </div>
                                      {/* /USER AVATAR BADGE CONTENT */}
                                      {/* USER AVATAR BADGE TEXT */}
                                      <p className="user-avatar-badge-text">9</p>
                                      {/* /USER AVATAR BADGE TEXT */}
                                    </div>
                                    {/* /USER AVATAR BADGE */}
                                  </div>
                                  {/* /USER AVATAR */}
                                </a>
                                {/* /USER STATUS AVATAR */}
                                {/* USER STATUS TITLE */}
                                <p className="user-status-title">
                                  <a className="bold" href="profile-timeline.html">
                                    Cassie May
                                  </a>
                                </p>
                                {/* /USER STATUS TITLE */}
                                {/* USER STATUS TEXT */}
                                <p className="user-status-text">
                                  4 friends in common
                                </p>
                                {/* /USER STATUS TEXT */}
                                {/* ACTION REQUEST LIST */}
                                <div className="action-request-list">
                                  {/* ACTION REQUEST */}
                                  <div className="action-request accept">
                                    {/* ACTION REQUEST ICON */}
                                    <svg className="action-request-icon icon-add-friend">
                                      <use xlinkHref="#svg-add-friend" />
                                    </svg>
                                    {/* /ACTION REQUEST ICON */}
                                  </div>
                                  {/* /ACTION REQUEST */}
                                  {/* ACTION REQUEST */}
                                  <div className="action-request decline">
                                    {/* ACTION REQUEST ICON */}
                                    <svg className="action-request-icon icon-remove-friend">
                                      <use xlinkHref="#svg-remove-friend" />
                                    </svg>
                                    {/* /ACTION REQUEST ICON */}
                                  </div>
                                  {/* /ACTION REQUEST */}
                                </div>
                                {/* ACTION REQUEST LIST */}
                              </div>
                              {/* /USER STATUS */}
                            </div>
                            {/* /DROPDOWN BOX LIST ITEM */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="simplebar-placeholder"
                      style={{ width: "auto", height: 228 }}
                    />
                  </div>
                  <div
                    className="simplebar-track simplebar-horizontal"
                    style={{ visibility: "hidden" }}
                  >
                    <div
                      className="simplebar-scrollbar"
                      style={{ width: 0, display: "none" }}
                    />
                  </div>
                  <div
                    className="simplebar-track simplebar-vertical"
                    style={{ visibility: "hidden" }}
                  >
                    <div
                      className="simplebar-scrollbar"
                      style={{ height: 0, display: "none" }}
                    />
                  </div>
                </div>
                {/* /DROPDOWN BOX LIST */}
                {/* DROPDOWN BOX BUTTON */}
                <a
                  className="dropdown-box-button secondary"
                  href="hub-profile-requests.html"
                >
                  View all Requests
                </a>
                {/* /DROPDOWN BOX BUTTON */}
              </div>
              {/* /DROPDOWN BOX */}
            </div>
            {/* /ACTION LIST ITEM WRAP */}
            {/* ACTION LIST ITEM WRAP */}
            <div className="action-list-item-wrap" style={{ position: "relative" }}>
              {/* ACTION LIST ITEM */}
              <div className="action-list-item header-dropdown-trigger">
                {/* ACTION LIST ITEM ICON */}
                <svg className="action-list-item-icon icon-messages">
                  <use xlinkHref="#svg-messages" />
                </svg>
                {/* /ACTION LIST ITEM ICON */}
              </div>
              {/* /ACTION LIST ITEM */}
              {/* DROPDOWN BOX */}
              <div
                className="dropdown-box header-dropdown"
                style={{
                  position: "absolute",
                  zIndex: 9999,
                  top: 64,
                  right: 6,
                  opacity: 0,
                  visibility: "hidden",
                  transform: "translate(0px, -40px)",
                  transition:
                    "transform 0.4s ease-in-out 0s, opacity 0.4s ease-in-out 0s, visibility 0.4s ease-in-out 0s"
                }}
              >
                {/* DROPDOWN BOX HEADER */}
                <div className="dropdown-box-header">
                  {/* DROPDOWN BOX HEADER TITLE */}
                  <p className="dropdown-box-header-title">Messages</p>
                  {/* /DROPDOWN BOX HEADER TITLE */}
                  {/* DROPDOWN BOX HEADER ACTIONS */}
                  <div className="dropdown-box-header-actions">
                    {/* DROPDOWN BOX HEADER ACTION */}
                    <p className="dropdown-box-header-action">Mark all as Read</p>
                    {/* /DROPDOWN BOX HEADER ACTION */}
                    {/* DROPDOWN BOX HEADER ACTION */}
                    <p className="dropdown-box-header-action">Settings</p>
                    {/* /DROPDOWN BOX HEADER ACTION */}
                  </div>
                  {/* /DROPDOWN BOX HEADER ACTIONS */}
                </div>
                {/* /DROPDOWN BOX HEADER */}
                {/* DROPDOWN BOX LIST */}
                <div className="dropdown-box-list medium" data-simplebar="init">
                  <div className="simplebar-wrapper" style={{ margin: 0 }}>
                    <div className="simplebar-height-auto-observer-wrapper">
                      <div className="simplebar-height-auto-observer" />
                    </div>
                    <div className="simplebar-mask">
                      <div
                        className="simplebar-offset"
                        style={{ right: 0, bottom: 0 }}
                      >
                        <div
                          className="simplebar-content-wrapper"
                          style={{ height: "100%", overflow: "hidden scroll" }}
                        >
                          <div className="simplebar-content" style={{ padding: 0 }}>
                            {/* DROPDOWN BOX LIST ITEM */}
                            <a
                              className="dropdown-box-list-item"
                              href="hub-profile-messages.html"
                            >
                              {/* USER STATUS */}
                              <div className="user-status">
                                {/* USER STATUS AVATAR */}
                                <div className="user-status-avatar">
                                  {/* USER AVATAR */}
                                  <div className="user-avatar small no-outline">
                                    {/* USER AVATAR CONTENT */}
                                    <div className="user-avatar-content">
                                      {/* HEXAGON */}
                                      <div
                                        className="hexagon-image-30-32"
                                        data-src="img/avatar/04.jpg"
                                        style={{
                                          width: 30,
                                          height: 32,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={30}
                                          height={32}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
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
                                </div>
                                {/* /USER STATUS AVATAR */}
                                {/* USER STATUS TITLE */}
                                <p className="user-status-title">
                                  <span className="bold">Bearded Wonder</span>
                                </p>
                                {/* /USER STATUS TITLE */}
                                {/* USER STATUS TEXT */}
                                <p className="user-status-text">
                                  Great! Then will meet with them at the party...
                                </p>
                                {/* /USER STATUS TEXT */}
                                {/* USER STATUS TIMESTAMP */}
                                <p className="user-status-timestamp floaty">
                                  29 mins ago
                                </p>
                                {/* /USER STATUS TIMESTAMP */}
                              </div>
                              {/* /USER STATUS */}
                            </a>
                            {/* /DROPDOWN BOX LIST ITEM */}
                            {/* DROPDOWN BOX LIST ITEM */}
                            <a
                              className="dropdown-box-list-item"
                              href="hub-profile-messages.html"
                            >
                              {/* USER STATUS */}
                              <div className="user-status">
                                {/* USER STATUS AVATAR */}
                                <div className="user-status-avatar">
                                  {/* USER AVATAR */}
                                  <div className="user-avatar small no-outline">
                                    {/* USER AVATAR CONTENT */}
                                    <div className="user-avatar-content">
                                      {/* HEXAGON */}
                                      <div
                                        className="hexagon-image-30-32"
                                        data-src="img/avatar/05.jpg"
                                        style={{
                                          width: 30,
                                          height: 32,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={30}
                                          height={32}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
                                          />
                                        </div>
                                        {/* /HEXAGON */}
                                      </div>
                                      {/* /USER AVATAR BADGE CONTENT */}
                                      {/* USER AVATAR BADGE TEXT */}
                                      <p className="user-avatar-badge-text">12</p>
                                      {/* /USER AVATAR BADGE TEXT */}
                                    </div>
                                    {/* /USER AVATAR BADGE */}
                                  </div>
                                  {/* /USER AVATAR */}
                                </div>
                                {/* /USER STATUS AVATAR */}
                                {/* USER STATUS TITLE */}
                                <p className="user-status-title">
                                  <span className="bold">Neko Bebop</span>
                                </p>
                                {/* /USER STATUS TITLE */}
                                {/* USER STATUS TEXT */}
                                <p className="user-status-text">
                                  Awesome! I'll see you there!
                                </p>
                                {/* /USER STATUS TEXT */}
                                {/* USER STATUS TIMESTAMP */}
                                <p className="user-status-timestamp floaty">
                                  54 mins ago
                                </p>
                                {/* /USER STATUS TIMESTAMP */}
                              </div>
                              {/* /USER STATUS */}
                            </a>
                            {/* /DROPDOWN BOX LIST ITEM */}
                            {/* DROPDOWN BOX LIST ITEM */}
                            <a
                              className="dropdown-box-list-item"
                              href="hub-profile-messages.html"
                            >
                              {/* USER STATUS */}
                              <div className="user-status">
                                {/* USER STATUS AVATAR */}
                                <div className="user-status-avatar">
                                  {/* USER AVATAR */}
                                  <div className="user-avatar small no-outline">
                                    {/* USER AVATAR CONTENT */}
                                    <div className="user-avatar-content">
                                      {/* HEXAGON */}
                                      <div
                                        className="hexagon-image-30-32"
                                        data-src="img/avatar/03.jpg"
                                        style={{
                                          width: 30,
                                          height: 32,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={30}
                                          height={32}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
                                          />
                                        </div>
                                        {/* /HEXAGON */}
                                      </div>
                                      {/* /USER AVATAR BADGE CONTENT */}
                                      {/* USER AVATAR BADGE TEXT */}
                                      <p className="user-avatar-badge-text">16</p>
                                      {/* /USER AVATAR BADGE TEXT */}
                                    </div>
                                    {/* /USER AVATAR BADGE */}
                                  </div>
                                  {/* /USER AVATAR */}
                                </div>
                                {/* /USER STATUS AVATAR */}
                                {/* USER STATUS TITLE */}
                                <p className="user-status-title">
                                  <span className="bold">Nick Grissom</span>
                                </p>
                                {/* /USER STATUS TITLE */}
                                {/* USER STATUS TEXT */}
                                <p className="user-status-text">
                                  Can you stream that new game?
                                </p>
                                {/* /USER STATUS TEXT */}
                                {/* USER STATUS TIMESTAMP */}
                                <p className="user-status-timestamp floaty">
                                  2 hours ago
                                </p>
                                {/* /USER STATUS TIMESTAMP */}
                              </div>
                              {/* /USER STATUS */}
                            </a>
                            {/* /DROPDOWN BOX LIST ITEM */}
                            {/* DROPDOWN BOX LIST ITEM */}
                            <a
                              className="dropdown-box-list-item"
                              href="hub-profile-messages.html"
                            >
                              {/* USER STATUS */}
                              <div className="user-status">
                                {/* USER STATUS AVATAR */}
                                <div className="user-status-avatar">
                                  {/* USER AVATAR */}
                                  <div className="user-avatar small no-outline">
                                    {/* USER AVATAR CONTENT */}
                                    <div className="user-avatar-content">
                                      {/* HEXAGON */}
                                      <div
                                        className="hexagon-image-30-32"
                                        data-src="img/avatar/07.jpg"
                                        style={{
                                          width: 30,
                                          height: 32,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={30}
                                          height={32}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
                                          />
                                        </div>
                                        {/* /HEXAGON */}
                                      </div>
                                      {/* /USER AVATAR BADGE CONTENT */}
                                      {/* USER AVATAR BADGE TEXT */}
                                      <p className="user-avatar-badge-text">26</p>
                                      {/* /USER AVATAR BADGE TEXT */}
                                    </div>
                                    {/* /USER AVATAR BADGE */}
                                  </div>
                                  {/* /USER AVATAR */}
                                </div>
                                {/* /USER STATUS AVATAR */}
                                {/* USER STATUS TITLE */}
                                <p className="user-status-title">
                                  <span className="bold">Sarah Diamond</span>
                                </p>
                                {/* /USER STATUS TITLE */}
                                {/* USER STATUS TEXT */}
                                <p className="user-status-text">
                                  I'm sending you the latest news of the release...
                                </p>
                                {/* /USER STATUS TEXT */}
                                {/* USER STATUS TIMESTAMP */}
                                <p className="user-status-timestamp floaty">
                                  16 hours ago
                                </p>
                                {/* /USER STATUS TIMESTAMP */}
                              </div>
                              {/* /USER STATUS */}
                            </a>
                            {/* /DROPDOWN BOX LIST ITEM */}
                            {/* DROPDOWN BOX LIST ITEM */}
                            <a
                              className="dropdown-box-list-item"
                              href="hub-profile-messages.html"
                            >
                              {/* USER STATUS */}
                              <div className="user-status">
                                {/* USER STATUS AVATAR */}
                                <div className="user-status-avatar">
                                  {/* USER AVATAR */}
                                  <div className="user-avatar small no-outline">
                                    {/* USER AVATAR CONTENT */}
                                    <div className="user-avatar-content">
                                      {/* HEXAGON */}
                                      <div
                                        className="hexagon-image-30-32"
                                        data-src="img/avatar/12.jpg"
                                        style={{
                                          width: 30,
                                          height: 32,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={30}
                                          height={32}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
                                          />
                                        </div>
                                        {/* /HEXAGON */}
                                      </div>
                                      {/* /USER AVATAR BADGE CONTENT */}
                                      {/* USER AVATAR BADGE TEXT */}
                                      <p className="user-avatar-badge-text">10</p>
                                      {/* /USER AVATAR BADGE TEXT */}
                                    </div>
                                    {/* /USER AVATAR BADGE */}
                                  </div>
                                  {/* /USER AVATAR */}
                                </div>
                                {/* /USER STATUS AVATAR */}
                                {/* USER STATUS TITLE */}
                                <p className="user-status-title">
                                  <span className="bold">James Murdock</span>
                                </p>
                                {/* /USER STATUS TITLE */}
                                {/* USER STATUS TEXT */}
                                <p className="user-status-text">
                                  Great! Then will meet with them at the party...
                                </p>
                                {/* /USER STATUS TEXT */}
                                {/* USER STATUS TIMESTAMP */}
                                <p className="user-status-timestamp floaty">
                                  7 days ago
                                </p>
                                {/* /USER STATUS TIMESTAMP */}
                              </div>
                              {/* /USER STATUS */}
                            </a>
                            {/* /DROPDOWN BOX LIST ITEM */}
                            {/* DROPDOWN BOX LIST ITEM */}
                            <a
                              className="dropdown-box-list-item"
                              href="hub-profile-messages.html"
                            >
                              {/* USER STATUS */}
                              <div className="user-status">
                                {/* USER STATUS AVATAR */}
                                <div className="user-status-avatar">
                                  {/* USER AVATAR */}
                                  <div className="user-avatar small no-outline">
                                    {/* USER AVATAR CONTENT */}
                                    <div className="user-avatar-content">
                                      {/* HEXAGON */}
                                      <div
                                        className="hexagon-image-30-32"
                                        data-src="img/avatar/10.jpg"
                                        style={{
                                          width: 30,
                                          height: 32,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={30}
                                          height={32}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
                                          />
                                        </div>
                                        {/* /HEXAGON */}
                                      </div>
                                      {/* /USER AVATAR BADGE CONTENT */}
                                      {/* USER AVATAR BADGE TEXT */}
                                      <p className="user-avatar-badge-text">5</p>
                                      {/* /USER AVATAR BADGE TEXT */}
                                    </div>
                                    {/* /USER AVATAR BADGE */}
                                  </div>
                                  {/* /USER AVATAR */}
                                </div>
                                {/* /USER STATUS AVATAR */}
                                {/* USER STATUS TITLE */}
                                <p className="user-status-title">
                                  <span className="bold">The Green Goo</span>
                                </p>
                                {/* /USER STATUS TITLE */}
                                {/* USER STATUS TEXT */}
                                <p className="user-status-text">
                                  Can you stream that new game?
                                </p>
                                {/* /USER STATUS TEXT */}
                                {/* USER STATUS TIMESTAMP */}
                                <p className="user-status-timestamp floaty">
                                  10 days ago
                                </p>
                                {/* /USER STATUS TIMESTAMP */}
                              </div>
                              {/* /USER STATUS */}
                            </a>
                            {/* /DROPDOWN BOX LIST ITEM */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="simplebar-placeholder"
                      style={{ width: "auto", height: 504 }}
                    />
                  </div>
                  <div
                    className="simplebar-track simplebar-horizontal"
                    style={{ visibility: "hidden" }}
                  >
                    <div
                      className="simplebar-scrollbar"
                      style={{ width: 0, display: "none" }}
                    />
                  </div>
                  <div
                    className="simplebar-track simplebar-vertical"
                    style={{ visibility: "visible" }}
                  >
                    <div
                      className="simplebar-scrollbar"
                      style={{
                        height: 350,
                        transform: "translate3d(0px, 0px, 0px)",
                        display: "block"
                      }}
                    />
                  </div>
                </div>
                {/* /DROPDOWN BOX LIST */}
                {/* DROPDOWN BOX BUTTON */}
                <a
                  className="dropdown-box-button primary"
                  href="hub-profile-messages.html"
                >
                  View all Messages
                </a>
                {/* /DROPDOWN BOX BUTTON */}
              </div>
              {/* /DROPDOWN BOX */}
            </div>
            {/* /ACTION LIST ITEM WRAP */}
            {/* ACTION LIST ITEM WRAP */}
            <div className="action-list-item-wrap" style={{ position: "relative" }}>
              {/* ACTION LIST ITEM */}
              <div className="action-list-item unread header-dropdown-trigger">
                {/* ACTION LIST ITEM ICON */}
                <svg className="action-list-item-icon icon-notification">
                  <use xlinkHref="#svg-notification" />
                </svg>
                {/* /ACTION LIST ITEM ICON */}
              </div>
              {/* /ACTION LIST ITEM */}
              {/* DROPDOWN BOX */}
              <div
                className="dropdown-box header-dropdown"
                style={{
                  position: "absolute",
                  zIndex: 9999,
                  top: 64,
                  right: 6,
                  opacity: 0,
                  visibility: "hidden",
                  transform: "translate(0px, -40px)",
                  transition:
                    "transform 0.4s ease-in-out 0s, opacity 0.4s ease-in-out 0s, visibility 0.4s ease-in-out 0s"
                }}
              >
                {/* DROPDOWN BOX HEADER */}
                <div className="dropdown-box-header">
                  {/* DROPDOWN BOX HEADER TITLE */}
                  <p className="dropdown-box-header-title">Notifications</p>
                  {/* /DROPDOWN BOX HEADER TITLE */}
                  {/* DROPDOWN BOX HEADER ACTIONS */}
                  <div className="dropdown-box-header-actions">
                    {/* DROPDOWN BOX HEADER ACTION */}
                    <p className="dropdown-box-header-action">Mark all as Read</p>
                    {/* /DROPDOWN BOX HEADER ACTION */}
                    {/* DROPDOWN BOX HEADER ACTION */}
                    <p className="dropdown-box-header-action">Settings</p>
                    {/* /DROPDOWN BOX HEADER ACTION */}
                  </div>
                  {/* /DROPDOWN BOX HEADER ACTIONS */}
                </div>
                {/* /DROPDOWN BOX HEADER */}
                {/* DROPDOWN BOX LIST */}
                <div className="dropdown-box-list" data-simplebar="init">
                  <div className="simplebar-wrapper" style={{ margin: 0 }}>
                    <div className="simplebar-height-auto-observer-wrapper">
                      <div className="simplebar-height-auto-observer" />
                    </div>
                    <div className="simplebar-mask">
                      <div
                        className="simplebar-offset"
                        style={{ right: 0, bottom: 0 }}
                      >
                        <div
                          className="simplebar-content-wrapper"
                          style={{ height: "100%", overflow: "hidden scroll" }}
                        >
                          <div className="simplebar-content" style={{ padding: 0 }}>
                            {/* DROPDOWN BOX LIST ITEM */}
                            <div className="dropdown-box-list-item unread">
                              {/* USER STATUS */}
                              <div className="user-status notification">
                                {/* USER STATUS AVATAR */}
                                <a
                                  className="user-status-avatar"
                                  href="profile-timeline.html"
                                >
                                  {/* USER AVATAR */}
                                  <div className="user-avatar small no-outline">
                                    {/* USER AVATAR CONTENT */}
                                    <div className="user-avatar-content">
                                      {/* HEXAGON */}
                                      <div
                                        className="hexagon-image-30-32"
                                        data-src="img/avatar/03.jpg"
                                        style={{
                                          width: 30,
                                          height: 32,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={30}
                                          height={32}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
                                          />
                                        </div>
                                        {/* /HEXAGON */}
                                      </div>
                                      {/* /USER AVATAR BADGE CONTENT */}
                                      {/* USER AVATAR BADGE TEXT */}
                                      <p className="user-avatar-badge-text">16</p>
                                      {/* /USER AVATAR BADGE TEXT */}
                                    </div>
                                    {/* /USER AVATAR BADGE */}
                                  </div>
                                  {/* /USER AVATAR */}
                                </a>
                                {/* /USER STATUS AVATAR */}
                                {/* USER STATUS TITLE */}
                                <p className="user-status-title">
                                  <a className="bold" href="profile-timeline.html">
                                    Nick Grissom
                                  </a>{" "}
                                  posted a comment on your{" "}
                                  <a
                                    className="highlighted"
                                    href="profile-timeline.html"
                                  >
                                    status update
                                  </a>
                                </p>
                                {/* /USER STATUS TITLE */}
                                {/* USER STATUS TIMESTAMP */}
                                <p className="user-status-timestamp">2 minutes ago</p>
                                {/* /USER STATUS TIMESTAMP */}
                                {/* USER STATUS ICON */}
                                <div className="user-status-icon">
                                  {/* ICON COMMENT */}
                                  <svg className="icon-comment">
                                    <use xlinkHref="#svg-comment" />
                                  </svg>
                                  {/* /ICON COMMENT */}
                                </div>
                                {/* /USER STATUS ICON */}
                              </div>
                              {/* /USER STATUS */}
                            </div>
                            {/* /DROPDOWN BOX LIST ITEM */}
                            {/* DROPDOWN BOX LIST ITEM */}
                            <div className="dropdown-box-list-item">
                              {/* USER STATUS */}
                              <div className="user-status notification">
                                {/* USER STATUS AVATAR */}
                                <a
                                  className="user-status-avatar"
                                  href="profile-timeline.html"
                                >
                                  {/* USER AVATAR */}
                                  <div className="user-avatar small no-outline">
                                    {/* USER AVATAR CONTENT */}
                                    <div className="user-avatar-content">
                                      {/* HEXAGON */}
                                      <div
                                        className="hexagon-image-30-32"
                                        data-src="img/avatar/07.jpg"
                                        style={{
                                          width: 30,
                                          height: 32,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={30}
                                          height={32}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
                                          />
                                        </div>
                                        {/* /HEXAGON */}
                                      </div>
                                      {/* /USER AVATAR BADGE CONTENT */}
                                      {/* USER AVATAR BADGE TEXT */}
                                      <p className="user-avatar-badge-text">26</p>
                                      {/* /USER AVATAR BADGE TEXT */}
                                    </div>
                                    {/* /USER AVATAR BADGE */}
                                  </div>
                                  {/* /USER AVATAR */}
                                </a>
                                {/* /USER STATUS AVATAR */}
                                {/* USER STATUS TITLE */}
                                <p className="user-status-title">
                                  <a className="bold" href="profile-timeline.html">
                                    Sarah Diamond
                                  </a>{" "}
                                  left a like{" "}
                                  <img
                                    className="reaction"
                                    src="img/reaction/like.png"
                                    alt="reaction-like"
                                  />{" "}
                                  reaction on your{" "}
                                  <a
                                    className="highlighted"
                                    href="profile-timeline.html"
                                  >
                                    status update
                                  </a>
                                </p>
                                {/* /USER STATUS TITLE */}
                                {/* USER STATUS TIMESTAMP */}
                                <p className="user-status-timestamp">
                                  17 minutes ago
                                </p>
                                {/* /USER STATUS TIMESTAMP */}
                                {/* USER STATUS ICON */}
                                <div className="user-status-icon">
                                  {/* ICON THUMBS UP */}
                                  <svg className="icon-thumbs-up">
                                    <use xlinkHref="#svg-thumbs-up" />
                                  </svg>
                                  {/* /ICON THUMBS UP */}
                                </div>
                                {/* /USER STATUS ICON */}
                              </div>
                              {/* /USER STATUS */}
                            </div>
                            {/* /DROPDOWN BOX LIST ITEM */}
                            {/* DROPDOWN BOX LIST ITEM */}
                            <div className="dropdown-box-list-item">
                              {/* USER STATUS */}
                              <div className="user-status notification">
                                {/* USER STATUS AVATAR */}
                                <a
                                  className="user-status-avatar"
                                  href="profile-timeline.html"
                                >
                                  {/* USER AVATAR */}
                                  <div className="user-avatar small no-outline">
                                    {/* USER AVATAR CONTENT */}
                                    <div className="user-avatar-content">
                                      {/* HEXAGON */}
                                      <div
                                        className="hexagon-image-30-32"
                                        data-src="img/avatar/02.jpg"
                                        style={{
                                          width: 30,
                                          height: 32,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={30}
                                          height={32}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
                                          />
                                        </div>
                                        {/* /HEXAGON */}
                                      </div>
                                      {/* /USER AVATAR BADGE CONTENT */}
                                      {/* USER AVATAR BADGE TEXT */}
                                      <p className="user-avatar-badge-text">13</p>
                                      {/* /USER AVATAR BADGE TEXT */}
                                    </div>
                                    {/* /USER AVATAR BADGE */}
                                  </div>
                                  {/* /USER AVATAR */}
                                </a>
                                {/* /USER STATUS AVATAR */}
                                {/* USER STATUS TITLE */}
                                <p className="user-status-title">
                                  <a className="bold" href="profile-timeline.html">
                                    Destroy Dex
                                  </a>{" "}
                                  posted a comment on your{" "}
                                  <a
                                    className="highlighted"
                                    href="profile-photos.html"
                                  >
                                    photo
                                  </a>
                                </p>
                                {/* /USER STATUS TITLE */}
                                {/* USER STATUS TIMESTAMP */}
                                <p className="user-status-timestamp">
                                  31 minutes ago
                                </p>
                                {/* /USER STATUS TIMESTAMP */}
                                {/* USER STATUS ICON */}
                                <div className="user-status-icon">
                                  {/* ICON COMMENT */}
                                  <svg className="icon-comment">
                                    <use xlinkHref="#svg-comment" />
                                  </svg>
                                  {/* /ICON COMMENT */}
                                </div>
                                {/* /USER STATUS ICON */}
                              </div>
                              {/* /USER STATUS */}
                            </div>
                            {/* /DROPDOWN BOX LIST ITEM */}
                            {/* DROPDOWN BOX LIST ITEM */}
                            <div className="dropdown-box-list-item">
                              {/* USER STATUS */}
                              <div className="user-status notification">
                                {/* USER STATUS AVATAR */}
                                <a
                                  className="user-status-avatar"
                                  href="profile-timeline.html"
                                >
                                  {/* USER AVATAR */}
                                  <div className="user-avatar small no-outline">
                                    {/* USER AVATAR CONTENT */}
                                    <div className="user-avatar-content">
                                      {/* HEXAGON */}
                                      <div
                                        className="hexagon-image-30-32"
                                        data-src="img/avatar/10.jpg"
                                        style={{
                                          width: 30,
                                          height: 32,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={30}
                                          height={32}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
                                          />
                                        </div>
                                        {/* /HEXAGON */}
                                      </div>
                                      {/* /USER AVATAR BADGE CONTENT */}
                                      {/* USER AVATAR BADGE TEXT */}
                                      <p className="user-avatar-badge-text">5</p>
                                      {/* /USER AVATAR BADGE TEXT */}
                                    </div>
                                    {/* /USER AVATAR BADGE */}
                                  </div>
                                  {/* /USER AVATAR */}
                                </a>
                                {/* /USER STATUS AVATAR */}
                                {/* USER STATUS TITLE */}
                                <p className="user-status-title">
                                  <a className="bold" href="profile-timeline.html">
                                    The Green Goo
                                  </a>{" "}
                                  left a love{" "}
                                  <img
                                    className="reaction"
                                    src="img/reaction/love.png"
                                    alt="reaction-love"
                                  />{" "}
                                  reaction on your{" "}
                                  <a
                                    className="highlighted"
                                    href="profile-timeline.html"
                                  >
                                    status update
                                  </a>
                                </p>
                                {/* /USER STATUS TITLE */}
                                {/* USER STATUS TIMESTAMP */}
                                <p className="user-status-timestamp">2 hours ago</p>
                                {/* /USER STATUS TIMESTAMP */}
                                {/* USER STATUS ICON */}
                                <div className="user-status-icon">
                                  {/* ICON THUMBS UP */}
                                  <svg className="icon-thumbs-up">
                                    <use xlinkHref="#svg-thumbs-up" />
                                  </svg>
                                  {/* /ICON THUMBS UP */}
                                </div>
                                {/* /USER STATUS ICON */}
                              </div>
                              {/* /USER STATUS */}
                            </div>
                            {/* /DROPDOWN BOX LIST ITEM */}
                            {/* DROPDOWN BOX LIST ITEM */}
                            <div className="dropdown-box-list-item">
                              {/* USER STATUS */}
                              <div className="user-status notification">
                                {/* USER STATUS AVATAR */}
                                <a
                                  className="user-status-avatar"
                                  href="profile-timeline.html"
                                >
                                  {/* USER AVATAR */}
                                  <div className="user-avatar small no-outline">
                                    {/* USER AVATAR CONTENT */}
                                    <div className="user-avatar-content">
                                      {/* HEXAGON */}
                                      <div
                                        className="hexagon-image-30-32"
                                        data-src="img/avatar/05.jpg"
                                        style={{
                                          width: 30,
                                          height: 32,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={30}
                                          height={32}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                        style={{
                                          width: 40,
                                          height: 44,
                                          position: "relative"
                                        }}
                                      >
                                        <canvas
                                          width={40}
                                          height={44}
                                          style={{
                                            position: "absolute",
                                            top: 0,
                                            left: 0
                                          }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
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
                                            style={{
                                              position: "absolute",
                                              top: 0,
                                              left: 0
                                            }}
                                          />
                                        </div>
                                        {/* /HEXAGON */}
                                      </div>
                                      {/* /USER AVATAR BADGE CONTENT */}
                                      {/* USER AVATAR BADGE TEXT */}
                                      <p className="user-avatar-badge-text">12</p>
                                      {/* /USER AVATAR BADGE TEXT */}
                                    </div>
                                    {/* /USER AVATAR BADGE */}
                                  </div>
                                  {/* /USER AVATAR */}
                                </a>
                                {/* /USER STATUS AVATAR */}
                                {/* USER STATUS TITLE */}
                                <p className="user-status-title">
                                  <a className="bold" href="profile-timeline.html">
                                    Neko Bebop
                                  </a>{" "}
                                  posted a comment on your{" "}
                                  <a
                                    className="highlighted"
                                    href="profile-timeline.html"
                                  >
                                    status update
                                  </a>
                                </p>
                                {/* /USER STATUS TITLE */}
                                {/* USER STATUS TIMESTAMP */}
                                <p className="user-status-timestamp">3 hours ago</p>
                                {/* /USER STATUS TIMESTAMP */}
                                {/* USER STATUS ICON */}
                                <div className="user-status-icon">
                                  {/* ICON COMMENT */}
                                  <svg className="icon-comment">
                                    <use xlinkHref="#svg-comment" />
                                  </svg>
                                  {/* /ICON COMMENT */}
                                </div>
                                {/* /USER STATUS ICON */}
                              </div>
                              {/* /USER STATUS */}
                            </div>
                            {/* /DROPDOWN BOX LIST ITEM */}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="simplebar-placeholder"
                      style={{ width: "auto", height: 481 }}
                    />
                  </div>
                  <div
                    className="simplebar-track simplebar-horizontal"
                    style={{ visibility: "hidden" }}
                  >
                    <div
                      className="simplebar-scrollbar"
                      style={{ width: 0, display: "none" }}
                    />
                  </div>
                  <div
                    className="simplebar-track simplebar-vertical"
                    style={{ visibility: "visible" }}
                  >
                    <div
                      className="simplebar-scrollbar"
                      style={{
                        height: 366,
                        transform: "translate3d(0px, 0px, 0px)",
                        display: "block"
                      }}
                    />
                  </div>
                </div>
                {/* /DROPDOWN BOX LIST */}
                {/* DROPDOWN BOX BUTTON */}
                <a
                  className="dropdown-box-button secondary"
                  href="hub-profile-notifications.html"
                >
                  View all Notifications
                </a>
                {/* /DROPDOWN BOX BUTTON */}
              </div>
              {/* /DROPDOWN BOX */}
            </div>
            {/* /ACTION LIST ITEM WRAP */}
          </div>
          {/* /ACTION LIST */}
          {/* ACTION ITEM WRAP */}
          <div className="action-item-wrap" style={{ position: "relative" }}>
            {/* ACTION ITEM */}
            <div className="action-item dark header-settings-dropdown-trigger">
              {/* ACTION ITEM ICON */}
              <svg className="action-item-icon icon-settings">
                <use xlinkHref="#svg-settings" />
              </svg>
              {/* /ACTION ITEM ICON */}
            </div>
            {/* /ACTION ITEM */}
            {/* DROPDOWN NAVIGATION */}
            <div
              className="dropdown-navigation header-settings-dropdown"
              style={{
                position: "absolute",
                zIndex: 9999,
                top: 64,
                right: 22,
                opacity: 0,
                visibility: "hidden",
                transform: "translate(0px, -40px)",
                transition:
                  "transform 0.4s ease-in-out 0s, opacity 0.4s ease-in-out 0s, visibility 0.4s ease-in-out 0s"
              }}
            >
              {/* DROPDOWN NAVIGATION HEADER */}
              <div className="dropdown-navigation-header">
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
                          data-src="img/avatar/01.jpg"
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
                    </div>
                    {/* /USER AVATAR */}
                  </a>
                  {/* /USER STATUS AVATAR */}
                  {/* USER STATUS TITLE */}
                  <p className="user-status-title">
                    <span className="bold">Hi Marina!</span>
                  </p>
                  {/* /USER STATUS TITLE */}
                  {/* USER STATUS TEXT */}
                  <p className="user-status-text small">
                    <a href="profile-timeline.html">@marinavalentine</a>
                  </p>
                  {/* /USER STATUS TEXT */}
                </div>
                {/* /USER STATUS */}
              </div>
              {/* /DROPDOWN NAVIGATION HEADER */}
              {/* DROPDOWN NAVIGATION CATEGORY */}
              <p className="dropdown-navigation-category">My Profile</p>
              {/* /DROPDOWN NAVIGATION CATEGORY */}
              {/* DROPDOWN NAVIGATION LINK */}
              <a className="dropdown-navigation-link" href="hub-profile-info.html">
                Profile Info
              </a>
              {/* /DROPDOWN NAVIGATION LINK */}
              {/* DROPDOWN NAVIGATION LINK */}
              <a className="dropdown-navigation-link" href="hub-profile-social.html">
                Social &amp; Stream
              </a>
              {/* /DROPDOWN NAVIGATION LINK */}
              {/* DROPDOWN NAVIGATION LINK */}
              <a
                className="dropdown-navigation-link"
                href="hub-profile-notifications.html"
              >
                Notifications
              </a>
              {/* /DROPDOWN NAVIGATION LINK */}
              {/* DROPDOWN NAVIGATION LINK */}
              <a
                className="dropdown-navigation-link"
                href="hub-profile-messages.html"
              >
                Messages
              </a>
              {/* /DROPDOWN NAVIGATION LINK */}
              {/* DROPDOWN NAVIGATION LINK */}
              <a
                className="dropdown-navigation-link"
                href="hub-profile-requests.html"
              >
                Friend Requests
              </a>
              {/* /DROPDOWN NAVIGATION LINK */}
              {/* DROPDOWN NAVIGATION CATEGORY */}
              <p className="dropdown-navigation-category">Account</p>
              {/* /DROPDOWN NAVIGATION CATEGORY */}
              {/* DROPDOWN NAVIGATION LINK */}
              <a className="dropdown-navigation-link" href="hub-account-info.html">
                Account Info
              </a>
              {/* /DROPDOWN NAVIGATION LINK */}
              {/* DROPDOWN NAVIGATION LINK */}
              <a
                className="dropdown-navigation-link"
                href="hub-account-password.html"
              >
                Change Password
              </a>
              {/* /DROPDOWN NAVIGATION LINK */}
              {/* DROPDOWN NAVIGATION LINK */}
              <a
                className="dropdown-navigation-link"
                href="hub-account-settings.html"
              >
                General Settings
              </a>
              {/* /DROPDOWN NAVIGATION LINK */}
              {/* DROPDOWN NAVIGATION CATEGORY */}
              <p className="dropdown-navigation-category">Groups</p>
              {/* /DROPDOWN NAVIGATION CATEGORY */}
              {/* DROPDOWN NAVIGATION LINK */}
              <a
                className="dropdown-navigation-link"
                href="hub-group-management.html"
              >
                Manage Groups
              </a>
              {/* /DROPDOWN NAVIGATION LINK */}
              {/* DROPDOWN NAVIGATION LINK */}
              <a
                className="dropdown-navigation-link"
                href="hub-group-invitations.html"
              >
                Invitations
              </a>
              {/* /DROPDOWN NAVIGATION LINK */}
              {/* DROPDOWN NAVIGATION CATEGORY */}
              <p className="dropdown-navigation-category">My Store</p>
              {/* /DROPDOWN NAVIGATION CATEGORY */}
              {/* DROPDOWN NAVIGATION LINK */}
              <a className="dropdown-navigation-link" href="hub-store-account.html">
                My Account <span className="highlighted">$250,32</span>
              </a>
              {/* /DROPDOWN NAVIGATION LINK */}
              {/* DROPDOWN NAVIGATION LINK */}
              <a className="dropdown-navigation-link" href="hub-store-statement.html">
                Sales Statement
              </a>
              {/* /DROPDOWN NAVIGATION LINK */}
              {/* DROPDOWN NAVIGATION LINK */}
              <a className="dropdown-navigation-link" href="hub-store-items.html">
                Manage Items
              </a>
              {/* /DROPDOWN NAVIGATION LINK */}
              {/* DROPDOWN NAVIGATION LINK */}
              <a className="dropdown-navigation-link" href="hub-store-downloads.html">
                Downloads
              </a>
              {/* /DROPDOWN NAVIGATION LINK */}
              {/* DROPDOWN NAVIGATION BUTTON */}
              <p className="dropdown-navigation-button button small secondary">
                Logout
              </p>
              {/* /DROPDOWN NAVIGATION BUTTON */}
            </div>
            {/* /DROPDOWN NAVIGATION */}
          </div>
          {/* /ACTION ITEM WRAP */}
        </div>
        {/* /HEADER ACTIONS */}
      </header>
      
        )
}
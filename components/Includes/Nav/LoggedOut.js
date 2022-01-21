import Link from "next/link"

export default function LoggedOut(props){
    return (
        <>
        <nav
            id="navigation-widget-small"
            className="navigation-widget navigation-widget-desktop navigation-widget-closed sidebar left navigation-widget-delayed"
        >
            {/* MENU */}
            <ul className="menu small">
            {/* MENU ITEM */}
            <li className="menu-item active">
                {/* MENU ITEM LINK */}
                <Link href="/"><a
                className="menu-item-link text-tooltip-tfr"
                data-title="Newsfeed"
                >
                {/* ICON SVG */}
                <svg className="icon-newsfeed menu-item-link-icon">
                    <use href="#svg-newsfeed" />
                </svg>
                {/* ICON SVG */}{" "}
                </a></Link>
                {/* /MENU ITEM LINK */}
            </li>
            {/* /MENU ITEM */}
            {/* MENU ITEM */}
            <li className="menu-item ">
                {/* MENU ITEM LINK */}
                <Link href="/members">
                <a
                className="menu-item-link text-tooltip-tfr"
                data-title="Members"
                >
                {/* ICON SVG */}
                <svg className="icon-members menu-item-link-icon">
                    <use href="#svg-members" />
                </svg>
                {/* ICON SVG */}{" "}
                </a></Link>
                {/* /MENU ITEM LINK */}
            </li>
            {/* /MENU ITEM */}
            {/* MENU ITEM */}
            <li className="menu-item ">
                {/* MENU ITEM LINK */}
                <Link href="/posts">
                <a
                className="menu-item-link text-tooltip-tfr"
                data-title="Blog"
                >
                {/* ICON SVG */}
                <svg className="icon-blog-posts menu-item-link-icon">
                    <use href="#svg-blog-posts" />
                </svg>
                {/* ICON SVG */}{" "}
                </a></Link>
                {/* /MENU ITEM LINK */}
            </li>
            {/* /MENU ITEM */}
            {/* MENU ITEM */}
            <li className="menu-item ">
                {/* MENU ITEM LINK */}
                <a
                className="menu-item-link text-tooltip-tfr"
                href="../membership-account/membership-levels/index.html"
                data-title="Memberships"
                >
                {/* ICON SVG */}
                <svg className="icon-memberships menu-item-link-icon">
                    <use href="#svg-memberships" />
                </svg>
                {/* ICON SVG */}{" "}
                </a>
                {/* /MENU ITEM LINK */}
            </li>
            {/* /MENU ITEM */}
            </ul>
            {/* /MENU */}
        </nav>
        <nav
            id="navigation-widget"
            className="navigation-widget navigation-widget-desktop sidebar left navigation-widget-hidden"
            data-simplebar="init"
            style={{ height: 243 }}
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
                    {/* MENU */}
                    <ul className="menu ">
                        {/* MENU ITEM */}
                        <li className="menu-item active">
                        {/* MENU ITEM LINK */}
                        <Link href="/"><a
                            className="menu-item-link "
                            data-title="Newsfeed"
                        >
                            {/* ICON SVG */}
                            <svg className="icon-newsfeed menu-item-link-icon">
                            <use href="#svg-newsfeed" />
                            </svg>
                            {/* ICON SVG */}Newsfeed{" "}
                        </a></Link>
                        {/* /MENU ITEM LINK */}
                        </li>
                        {/* /MENU ITEM */}
                        {/* MENU ITEM */}
                        <li className="menu-item ">
                        {/* MENU ITEM LINK */}
                        <Link href="/members">
                        <a
                            className="menu-item-link "
                            data-title="Members"
                        >
                            {/* ICON SVG */}
                            <svg className="icon-members menu-item-link-icon">
                            <use href="#svg-members" />
                            </svg>
                            {/* ICON SVG */}Members{" "}
                        </a></Link>
                        {/* /MENU ITEM LINK */}
                        </li>
                        {/* /MENU ITEM */}
                        {/* MENU ITEM */}
                        <li className="menu-item ">
                        {/* MENU ITEM LINK */}
                        <Link href="/posts"><a
                            className="menu-item-link "
                            data-title="Blog"
                        >
                            {/* ICON SVG */}
                            <svg className="icon-blog-posts menu-item-link-icon">
                            <use href="#svg-blog-posts" />
                            </svg>
                            {/* ICON SVG */}Blog{" "}
                        </a></Link>
                        {/* /MENU ITEM LINK */}
                        </li>
                        {/* /MENU ITEM */}
                        {/* MENU ITEM */}
                        <li className="menu-item ">
                        {/* MENU ITEM LINK */}
                        <a
                            className="menu-item-link "
                            href="../membership-account/membership-levels/index.html"
                            data-title="Memberships"
                        >
                            {/* ICON SVG */}
                            <svg className="icon-memberships menu-item-link-icon">
                            <use href="#svg-memberships" />
                            </svg>
                            {/* ICON SVG */}Memberships{" "}
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
                style={{ width: 300, height: 760 }}
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
                height: 77,
                transform: "translate3d(0px, 0px, 0px)",
                display: "block"
                }}
            />
            </div>
        </nav>
        <nav
            id="navigation-widget-mobile"
            className="navigation-widget navigation-widget-mobile sidebar left navigation-widget-hidden"
            data-simplebar="init"
            style={{ height: 323 }}
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
                        {/* ICON SVG */}
                        <svg className="icon-back-arrow navigation-widget-close-button-icon">
                        <use href="#svg-back-arrow" />
                        </svg>
                        {/* ICON SVG */}
                    </div>
                    {/* /NAVIGATION WIDGET CLOSE BUTTON */}
                    {/* NAVIGATION WIDGET ACTIONS */}
                    <div className="navigation-widget-actions">
                        {/* BUTTON */}
                        <Link href="/login"><a
                        className="button primary login-button"
                        >
                        Login
                        </a></Link>
                        {/* /BUTTON */}
                    </div>
                    {/* /NAVIGATION WIDGET ACTIONS */}
                    {/* NAVIGATION WIDGET SECTION */}
                    <div className="navigation-widget-section">
                        {/* NAVIGATION WIDGET SECTION TITLE */}
                        <p className="navigation-widget-section-title">Sections</p>
                        {/* /NAVIGATION WIDGET SECTION TITLE */}
                        {/* MENU */}
                        <ul className="menu ">
                        {/* MENU ITEM */}
                        <li className="menu-item active">
                            {/* MENU ITEM LINK */}
                            <Link href="/"> 
                            <a className="menu-item-link " data-title="Newsfeed"            >
                            {/* ICON SVG */}
                            <svg className="icon-newsfeed menu-item-link-icon">
                                <use href="#svg-newsfeed" />
                            </svg>
                            {/* ICON SVG */}Newsfeed{" "}
                            </a>
                            </Link>
                            {/* /MENU ITEM LINK */}
                        </li>
                        {/* /MENU ITEM */}
                        {/* MENU ITEM */}
                        <li className="menu-item ">
                            {/* MENU ITEM LINK */}
                            <Link href="/members"><a
                            className="menu-item-link "
                            data-title="Members"
                            >
                            {/* ICON SVG */}
                            <svg className="icon-members menu-item-link-icon">
                                <use href="#svg-members" />
                            </svg>
                            {/* ICON SVG */}Members{" "}
                            </a></Link>
                            {/* /MENU ITEM LINK */}
                        </li>
                        {/* /MENU ITEM */}
                        {/* MENU ITEM */}
                        <li className="menu-item ">
                            {/* MENU ITEM LINK */}
                            <Link href="/posts"><a
                            className="menu-item-link "
                            data-title="Blog"
                            >
                            {/* ICON SVG */}
                            <svg className="icon-blog-posts menu-item-link-icon">
                                <use href="#svg-blog-posts" />
                            </svg>
                            {/* ICON SVG */}Posts{" "}
                            </a></Link>
                            {/* /MENU ITEM LINK */}
                        </li>
                        {/* /MENU ITEM */}
                        {/* MENU ITEM */}
                        <li className="menu-item ">
                            {/* MENU ITEM LINK */}
                            <a
                            className="menu-item-link "
                            href="../membership-account/membership-levels/index.html"
                            data-title="Memberships"
                            >
                            {/* ICON SVG */}
                            <svg className="icon-memberships menu-item-link-icon">
                                <use href="#svg-memberships" />
                            </svg>
                            {/* ICON SVG */}Memberships{" "}
                            </a>
                            {/* /MENU ITEM LINK */}
                        </li>
                        {/* /MENU ITEM */}
                        </ul>
                        {/* /MENU */}
                    </div>
                    {/* /NAVIGATION WIDGET SECTION */}
                  
                    </div>
                </div>
                </div>
            </div>
            <div
                className="simplebar-placeholder"
                style={{ width: 300, height: 2656 }}
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
                height: 39,
                transform: "translate3d(0px, 0px, 0px)",
                display: "block"
                }}
            />
            </div>
        </nav>
    </>

    );
}
import Image from 'next/image'
import Link from "next/link"

export default function LogOut(props){
    return (
        <header className="header logged-out">
        {/* HEADER ACTIONS */}
        <div className="header-actions header-actions-full">
            {/* HEADER BRAND */}
            <a href="../index.html" className="header-brand">
            {/* LOGO */}
            <div className="logo">
                {/* LOGO IMAGE */}
                <img
                className="logo-image"
                src="/theme/wp-content/uploads/2020/09/cropped-logovikinger.png"
                alt="logo"
                />
                {/* /LOGO IMAGE */}
            </div>
            {/* /LOGO */}
            {/* HEADER BRAND TEXT */}
            <h1 className="header-brand-text">Aydinty</h1>
            {/* /HEADER BRAND TEXT */}
            </a>
            {/* /HEADER BRAND */}
            {/* SIDEMENU TRIGGER */}
            <div className="sidemenu-trigger navigation-widget-trigger">
            {/* ICON SVG */}
            <svg className="icon-grid ">
                <use href="#svg-grid" />
            </svg>
            {/* ICON SVG */}{" "}
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
          
        </div>
        {/* /HEADER ACTIONS */}
        {/* HEADER ACTIONS */}
        <div className="header-actions search-bar">
            {/* SEARCH FORM */}
            <div id="vk-search-form" />
            {/* /SEARCH FORM */}
        </div>
        {/* /HEADER ACTIONS */}
        {/* HEADER ACTIONS */}
        <div className="header-actions">
            {/* ACTION LIST */}
            <div className="action-list action-list-small action-list-mobile dark">
            {/* ACTION LIST ITEM */}
            <a className="action-list-item" href="../cart/index.html">
                {/* ACTION LIST ITEM ICON WRAP */}
                <div className="action-list-item-icon-wrap ">
                {/* ICON SVG */}
                <svg className="icon-shopping-bag action-list-item-icon">
                    <use href="#svg-shopping-bag" />
                </svg>
                {/* ICON SVG */}
                </div>
                {/* /ACTION LIST ITEM ICON WRAP */}
            </a>
            {/* ACTION LIST ITEM */}
            {/* ACTION LIST ITEM WRAP */}
            <div className="action-list-item-wrap">
                {/* ACTION LIST ITEM */}
                <div className="action-list-item header-search-push-open">
                {/* ICON SVG */}
                <svg className="icon-magnifying-glass action-list-item-icon">
                    <use href="#svg-magnifying-glass" />
                </svg>
                {/* ICON SVG */}{" "}
                </div>
                {/* /ACTION LIST ITEM */}
                {/* ACTION LIST ITEM */}
                <div className="action-list-item action-list-item-hidden header-search-push-close">
                {/* ICON SVG */}
                <svg className="icon-cross-thin action-list-item-icon">
                    <use href="#svg-cross-thin" />
                </svg>
                {/* ICON SVG */}{" "}
                </div>
                {/* /ACTION LIST ITEM */}
            </div>
            {/* /ACTION LIST ITEM WRAP */}
            </div>
            {/* /ACTION LIST */}
        </div>
        {/* /HEADER ACTIONS */}
        {/* HEADER ACTIONS */}
        <div className="header-actions">
            {/* HEADER CART */}
            <div className="header-cart">
            {/* ACTION LIST */}
            <div className="action-list dark">
                {/* ACTION LIST ITEM WRAP */}
                <div className="action-list-item-wrap">
                {/* ACTION LIST ITEM */}
                <div className="action-list-item header-settings-dropdown-trigger">
                    {/* ACTION LIST ITEM ICON WRAP */}
                    <div className="action-list-item-icon-wrap vikinger-wc-cart-icon-wrap ">
                    {/* ICON SVG */}
                    <svg className="icon-shopping-bag action-list-item-icon">
                        <use href="#svg-shopping-bag" />
                    </svg>
                    {/* ICON SVG */}{" "}
                    </div>
                    {/* /ACTION LIST ITEM ICON WRAP */}
                </div>
                {/* ACTION LIST ITEM */}
                {/* DROPDOWN BOX */}
                <div className="dropdown-box no-padding-bottom header-settings-dropdown">
                    {/* DROPDOWN BOX HEADER */}
                    <div className="dropdown-box-header vikinger-wc-cart-header-title">
                    <p className="dropdown-box-header-title">
                        Shopping Cart <span className="highlighted">0</span>
                    </p>
                    </div>
                    {/* /DROPDOWN BOX HEADER */}
                    {/* DROPDOWN BOX LIST */}
                    <div
                    className="dropdown-box-list scroll-small vikinger-wc-minicart"
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
                            style={{ height: "100%", overflow: "hidden" }}
                            >
                            <div className="simplebar-content" style={{ padding: 0 }}>
                                <p className="woocommerce-mini-cart__empty-message">
                                No products in the cart.
                                </p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div
                        className="simplebar-placeholder"
                        style={{ width: 384, height: 32 }}
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
                    {/* CART PREVIEW TOTAL */}
                    <div className="cart-preview-total vikinger-wc-cart-preview-total">
                    <p className="cart-preview-total-title">Total:</p>
                    <p className="cart-preview-total-text">
                        <span className="woocommerce-Price-amount amount">
                        <bdi>
                            <span className="woocommerce-Price-currencySymbol">$</span>
                            &nbsp;0.00
                        </bdi>
                        </span>
                    </p>
                    </div>
                    {/* /CART PREVIEW TOTAL */}
                    {/* DROPDOWN BOX ACTIONS */}
                    <div className="dropdown-box-actions">
                    {/* DROPDOWN BOX ACTION */}
                    <div className="dropdown-box-action">
                        <a className="button secondary" href="../cart/index.html">
                        Shopping Cart
                        </a>
                    </div>
                    {/* /DROPDOWN BOX ACTION */}
                    {/* DROPDOWN BOX ACTION */}
                    <div className="dropdown-box-action">
                        <a className="button primary" href="../checkout/index.html">
                        Checkout
                        </a>
                    </div>
                    {/* /DROPDOWN BOX ACTION */}
                    </div>
                    {/* /DROPDOWN BOX ACTIONS */}
                </div>
                {/* /DROPDOWN BOX */}
                </div>
                {/* /ACTION LIST ITEM WRAP */}
            </div>
            {/* /ACTION LIST */}
            </div>
            {/* /HEADER CART */}
            {/* BUTTON */}
            <Link href="/login">
            <a className="button primary login-button">
            Login
            </a>
            </Link>
            {/* /BUTTON */}
            {/* BUTTON */}
            <Link href="/signup">
            <a className="button danger login-button">
            Signup
            </a>
            </Link>
            {/* /BUTTON */}
        </div>
        {/* /HEADER ACTIONS */}
        </header>
    )
}
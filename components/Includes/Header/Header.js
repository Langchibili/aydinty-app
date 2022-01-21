import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Header(props){
    const Header = props.loggedIn? <LoggedIn {...props}/> : <LoggedOut {...props}/>;
    return Header;
}
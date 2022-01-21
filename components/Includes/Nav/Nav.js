import LoggedIn from "./LoggedIn";
import LoggedOut from "./LoggedOut";

export default function Nav(props){
    const Nav = props.loggedIn? <LoggedIn {...props}/> : <LoggedOut {...props}/>;
    return Nav;
}
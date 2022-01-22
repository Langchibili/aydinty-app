import Chat from "./Chat";
import FloatBar from "./FloatBar";
import NewestMembers from "./NewestMembers";


export default function Aside(props){
    const widget = props.widget;
    let aside = <></>;

    if (widget === "chat") aside = <Chat {...props}/>
    if (widget === "floaty-bar") aside = <FloatBar/>
    if (widget === "newest-members") aside = <NewestMembers />
    
    return aside;
}
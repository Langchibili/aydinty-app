import Chat from "./Chat";
import FloatBar from "./FloatBar";


export default function Aside(props){
    const widget = props.widget;
    let aside = <></>;

    if (widget === "chat") aside = <Chat />
    if (widget === "floaty-bar") aside = <FloatBar />
    
    return aside;
}
import Post from "../ContentUI/Post";

export default function Posts(props){
    return (
            <>
            <Post key="1" {...props}/>
            <Post key="2" {...props}/>
            <Post key="3" {...props}/>
            <Post key="4" {...props}/>
            <Post key="5" {...props}/>
            </>
    )
}
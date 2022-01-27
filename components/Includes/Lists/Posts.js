import Post from "../ContentUI/Post";

export default function Posts(props){
    
    const posts = props.posts.map((post)=>{
        return <Post key={post._id} post={post} loggedInUser={props.loggedInUser}/>
    }) 
    return <>{posts}</>
}
import User from "../ContentUI/User";

export default function Users(props){
    
    return props.users.map((user)=>{
        if(props.loggedInUser){
            if(user._id === props.loggedInUser._id) return
            return <User key={user._id} user={user} loggedInUser={props.loggedInUser}/>
        }
        return <User key={user._id} user={user}/>
    }) 
    
}
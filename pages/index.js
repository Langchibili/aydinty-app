import Home from "../components/Views/Home";
import Feed from "../components/Views/Feed";
import Loader from "../components/Includes/Loader/Loader";

export async function getServerSideProps(){
  return {props: {
    loggedIn: true
  }}
}

export default function index(props){
  const mainPage = props.loggedIn? <Feed {...props}/> : <Home {...props}/>;
  return (<>
   <Loader/>
   {mainPage}
   </>)
}

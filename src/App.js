import {useState} from "react"
import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom";
import Home from"./Pages/Home";
import CreatePost from"./Pages/CreatePost";
import Login from"./Pages/Login";
import {signOut} from "firebase/auth";
import {auth} from "./fire";
function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));
  
 

  const  signUserOut =()=>
  {
    signOut(auth).then(()=>
      {
        localStorage.clear();
        setIsAuth(false);
        window.location.pathname="/Login";
      }
    )
  }
  return (
    <div>
    <Router>
      <nav>
        
        <Link to="/"> Home </Link>
       
        
       {!isAuth ? (
       <Link to="/Login"> Login </Link>
       ) :
       (
         <>
         <Link to="/createPost"> CreatePost </Link>
          <button onClick={signUserOut}>Log Out</button>
          </>
       )}
      </nav>
      <Routes>
        <Route path ="/" element = {<Home isAuth={isAuth}/>} />
        <Route path ="/createPost" element = {<CreatePost isAuth={isAuth}/>} />
        <Route path ="/Login" element = {<Login setIsAuth={setIsAuth}/>} />
      </Routes>
    </Router>
    </div>
    );
}

export default App;

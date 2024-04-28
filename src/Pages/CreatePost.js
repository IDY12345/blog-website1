
import React from 'react'
import {addDoc,collection} from "firebase/firestore"
import { db , auth} from '../fire'
import {useNavigate} from "react-router-dom"
import {useState,useEffect} from "react";
import { async } from '@firebase/util';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

function CreatePost({isAuth}) {
  let navigate=useNavigate();
  const [title, setTitle] = useState("")
  const [postText,setPostText] = useState("")
  const postsCollectionRef=collection(db,"posts")
  const [action, setaction] = useState("None")
  const [action1, setaction1] = useState("3+")
  const postsCollectionRef1=collection(db,"Educational")
  const postsCollectionRef2=collection(db,"Political")
  const postsCollectionRef3=collection(db,"Trading")
  const postsCollectionRef4=collection(db,"Entertainment")
  const postsCollectionRef5=collection(db,"Food")
  const postsCollectionRef6=collection(db,"Medical")
  const postsCollectionRef7=collection(db,"Sports")
  const postsCollectionRef8=collection(db,"Law")
  
   const actions = [
    { label: "Educational", value: 1 },
    { label: "Political", value: 2 },
    { label: "Sports", value: 3 },
    {label: "Entertainment",value:4},
    {label:"Food",value:5},
    {label:"Medical",value:6},
    {label:"Law",value:7},
    {label:"Trading",value:8}
  ];
  const actions1=[
    {label:"3+",value:1},
    {label:"6+",value:2},
    {label:"10+",value:3},
    {label:"12+",value:4},
    {label:"15+",value:5},
    {label:"18+",value:6},
  ];
  //const actionRef=collection(db,actions)
  const createPost = async () =>
  {
    await addDoc(postsCollectionRef,{title,postText,action,action1,
      author:{name :auth.currentUser.displayName,id:auth.currentUser.uid}})
    if(action==="Educational")
    {
    await  addDoc(postsCollectionRef1,{title,postText,action,action1,
        author:{name :auth.currentUser.displayName,id:auth.currentUser.uid}})
    }
    if(action==="Political"){
    await addDoc
    (postsCollectionRef2,{title,postText,action,action1,
      author:{name :auth.currentUser.displayName,id:auth.currentUser.uid}})
    }
    if(action==="Trading"){
      await addDoc
      (postsCollectionRef3,{title,postText,action,action1,
        author:{name :auth.currentUser.displayName,id:auth.currentUser.uid}})
      }

      if(action==="Entertainment"){
        await addDoc
        (postsCollectionRef4,{title,postText,action,action1,
          author:{name :auth.currentUser.displayName,id:auth.currentUser.uid}})
        }
    
        if(action==="Food"){
          await addDoc
          (postsCollectionRef5,{title,postText,action,action1,
            author:{name :auth.currentUser.displayName,id:auth.currentUser.uid}})
          }
    
          if(action==="Medical"){
            await addDoc
            (postsCollectionRef6,{title,postText,action,action1,
              author:{name :auth.currentUser.displayName,id:auth.currentUser.uid}})
            }

            if(action==="Sports"){
              await addDoc
              (postsCollectionRef7,{title,postText,action,action1,
                author:{name :auth.currentUser.displayName,id:auth.currentUser.uid}})
              }
              if(action==="Law"){
                await addDoc
                (postsCollectionRef8,{title,postText,action,action1,
                  author:{name :auth.currentUser.displayName,id:auth.currentUser.uid}})
                }
    navigate("/");
  }
  
  useEffect(() => {
   if(!isAuth){
     navigate("/Login");
   }
  }, [])
  
  return (
    <div className="createPostPage">
      <div className="cpContainer">
          <h1>Create a Post</h1>
          <div className="inputGp">
          <label>Title:</label>
            <input placeholder='Title..' onChange={(event)=>
            {
              setTitle(event.target.value);
            }}/>
          </div>
          <div className="inputGp">
          <label>Post:</label>
          <textarea placeholder="Post..." onChange={(event)=>
            {
              setPostText(event.target.value);
            }}/>
            
          </div>
          <div>
              <label>Type of Blog:</label>
              <div className="container">
              <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
              <Select options={ actions } onChange={(event)=>
              {

                setaction(event.label);
              }} className="tag1"/>
              </div>
              <div className="col-md-4"></div>
              </div>
              </div>      
             </div>
             <div>
              <label> Blog is Related till which age: </label>
              <div className="container">
              <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
              <Select options={ actions1 } onChange={(event)=>
              {

                setaction1(event.label);
              }} className="tag"/>
              </div>
              <div className="col-md-4"></div>
              </div>
              </div>  
               </div>
          <button onClick={createPost}>Submit Post</button>
      </div>      
    </div>
  )
}

export default CreatePost
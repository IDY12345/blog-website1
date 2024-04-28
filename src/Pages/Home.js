import React, { useState, useEffect } from 'react'
import { collection, deleteDoc, getDocs, doc } from "firebase/firestore"
import { auth, db } from "../fire"
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { async } from '@firebase/util';

function Home({ isAuth }) {
  const [postList, setPostList] = useState([])
  const postsCollectionRef = collection(db, "posts")
  // const postsCollectionRef1 = collection(db, "Educational")
  const [action, setaction] = useState("None")
  //const actionRef=collection(db,actions)
  const actions = [
    { label: "Educational", value: 1 },
    { label: "Political", value: 2 },
    { label: "Sports", value: 3 },
    { label: "Entertainment", value: 4 },
    { label: "Food", value: 5 },
    { label: "Medical", value: 6 },
    { label: "Law", value: 7 },
    { label: "Trading", value: 8 }
  ];
  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postsCollectionRef);
      setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  })
  const deletePost = async (id) => {
    const postDoc = doc(db, "posts", id);
    await deleteDoc(postDoc);
  };
  return (
    <div>
      <div className='filter'><h6 className='size'>Filters:</h6>
      
        <div className="container">
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <Select options={actions} onChange={(event) => {
                setaction(event.label);
              }}
              />
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
      <div className="homePage">
        {postList.map((post) => {
          return <div className="post">
            <div className="postHeader">
              <div className="title">
                <h1> {post.title} </h1>
              </div>
              <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid &&
                  <button
                    onClick=
                    {() => { deletePost(post.id) }
                    }>&#128465;
                  </button>}
              </div>
            </div>
            <div className="postTextContainer">{post.postText}</div>
            <h3>{`@${post.author.name}               `}</h3>
            <h3 className='field'>Field:{post.action}</h3>
          </div>
        })}
      </div>
      

    </div>
    
  )
}

export default Home
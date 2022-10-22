import React from 'react'
import axios from "axios";
import { useEffect } from 'react';
import { useState } from 'react';


export default function Post() {

  const [posts, setposts] = useState([]);
  const [messageAnnonce, setmessageAnnonce] = useState([]);
  

  useEffect(() => {
   
     axios.get("/post")
    .then((res)=>{
      setposts(res.data);
    })
    .catch((err)=>console.log(err));

    axios.get("/message/afficherAllMessage")
    .then((res)=>{
      setmessageAnnonce(res.data);
    })
    .catch((error)=>console.log(error));

  }, [])
  
  if (!posts.length){
    return(
      <div>
          Aucun post de disponible
      </div>
    )
  }else{
     return(
      <div>
          {posts.map((post)=>{
            return(
              <div style={{marginTop:50}} key={post._id}>
                  <p>{post.titre}</p>
                  <p>{post.createdAt}</p>
                  <p>créer par {post.nomCreateur} {post.prenomCreateur} allias {post.pseudoCreateur}</p>
                  {messageAnnonce.map((message)=>{
                    if(message.idPost === post._id){
                      return(
                        <p key={message._id}>{message.contenu}</p>
                      )
                    }

                  })}
              </div>
            )
          })}
      </div>
     )
  }
}

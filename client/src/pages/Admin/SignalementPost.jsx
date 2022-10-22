  import React from 'react'
  import axios from 'axios'
  import { useEffect } from 'react'
  import { useContext } from 'react';
  import {AuthContext} from "../../Context/AuthContext";
  import { useState } from 'react';
  import { useNavigate } from 'react-router-dom';
  
  export default function SignalementPost() {
    const {token,settoken}  = useContext(AuthContext);
    const [allSignalPost, setallSignalPost] = useState([]);
    const [errorMsg, seterrorMsg] = useState("");
  
    const navigate = useNavigate();
    
    useEffect( () => {
  
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
  
      axios.get("/signalement/afficherPostSignaler",config)
      .then((res)=>{setallSignalPost(res.data);
        console.log(res);
      })
      .catch((err)=>seterrorMsg(err.response.data))
  
    }, [])
  
    
    
    const redirectPageDetail = (e)=>{
      navigate(`/admin/signalementPost/details/${e}`);
    }
  
    if(allSignalPost.length!=0){
      return (
        allSignalPost.map((element)=>{
          return(
            <p key={element._id}>
                <span>pseudo : {element.pseudoCreateur} </span>
                <span>nom : {element.nomCreateur } </span>
                <span>prenom : {element.prenomCreateur} </span>
                <span>titre : {element.titre} </span>
                <span>description : {element.description} </span>
                <button onClick={()=>redirectPageDetail(element._id)}>detail signalement</button>
               
            </p>
          )
          
        })
      )
    }
    if(allSignalPost.length===0)
    return (
      <p>{errorMsg}</p>
    )
  }

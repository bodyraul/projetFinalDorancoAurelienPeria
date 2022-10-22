import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useContext } from 'react';
import {AuthContext} from "../../Context/AuthContext";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignalementMessage() {
  const {token,settoken}  = useContext(AuthContext);
  const [allSignalMsg, setallSignalMsg] = useState([]);
  const [errorMsg, seterrorMsg] = useState("");

  const navigate = useNavigate();
  
  useEffect( () => {

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios.get("/signalement/afficherMsgSignaler",config)
    .then((res)=>{setallSignalMsg(res.data);
      
    })
    .catch((err)=>seterrorMsg(err.response.data))

  }, [])

  
  
  const redirectPageDetail = (e)=>{
    navigate(`/admin/signalementMessage/details/${e}`);
  }

  if(allSignalMsg.length!=0){
    return (
      allSignalMsg.map((element)=>{
        return(
          <p key={element._id}>
              <span>pseudo : {element.pseudoCreateurMessage} </span>
              <span>nom : {element.nomCreateurMessage } </span>
              <span>prenom : {element.prenomCreateurMessage} </span>
              <span>contenu : {element.contenu} </span>
              <button onClick={()=>redirectPageDetail(element._id)}>detail signalement</button>
             
          </p>
        )
        
      })
    )
  }
  if(allSignalMsg.length===0)
  return (
    <p>{errorMsg}</p>
  )
}

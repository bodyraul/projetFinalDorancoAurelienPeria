import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';

export default function MessagesPost() {
  const {id} = useParams();
  const {token,settoken}  = useContext(AuthContext);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

 
    axios.get(`/message/afficherMesMessages/${id}`,config)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));
  }, [])
  

  
  return (
    <div>
        
    </div>
  )
}

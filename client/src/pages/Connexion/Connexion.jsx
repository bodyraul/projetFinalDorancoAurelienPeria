import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import Contact from"../contact/Contact"

export default function Connexion() {
  const navigate = useNavigate();
   const [mail, setmail] = useState("");
   const [password, setpassword] = useState(""); 
   const {token,settoken}  = useContext(AuthContext);

    const valideForm = async (e)=>{
        e.preventDefault();
        const connection ={email:mail,password};
        await axios.post("/user/login",connection)
        .then((res)=>{
           localStorage.setItem("token",res.data);
           settoken(res.data);
           navigate("/forum");
        })
        .catch((err)=>console.log(err));
    }
 

  return (
    <div>
       <form onSubmit={valideForm}>
            <input type="text" placeholder="mail" value={mail} onChange={(e)=>setmail(e.target.value)}/>
            <input type="text" placeholder="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
            <button>Se connecter</button>
       </form>
       <Contact/>
    </div>
  )
}

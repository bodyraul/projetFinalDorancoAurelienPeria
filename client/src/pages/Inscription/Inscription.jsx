import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";

export default function Inscription() {
  const [nom, setnom] = useState("");
  const [prenom, setprenom] = useState("");
  const [pseudonyme, setpseudonyme] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const navigate = useNavigate();

  const validerForm = (e)=>{
    e.preventDefault();
    const user ={nom,prenom,pseudonyme,email,password};
    axios.post("/user/register",user)
    .then((res)=>navigate("/connexion"))
    .catch((err)=>console.log(err));
    
  }

  return (
    <div>
        <form onSubmit={validerForm}>
            <input type="text" placeholder="nom" value={nom} onChange={(e)=>setnom(e.target.value)}></input>
            <input type="text"  placeholder="prenom" value={prenom} onChange={(e)=>setprenom(e.target.value)}></input>
            <input  type="text"  placeholder="pseudonyme" value={pseudonyme} onChange={(e)=>setpseudonyme(e.target.value)}></input>
            <input  type="text"  placeholder="email" value={email} onChange={(e)=>setemail(e.target.value)}></input>
            <input  type="text"  placeholder="password" value={password} onChange={(e)=>setpassword(e.target.value)}></input>
            <button>valider</button>
        </form>
    </div>
  )
}

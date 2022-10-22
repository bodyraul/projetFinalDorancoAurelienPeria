import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function Connexion() {
  const navigate = useNavigate();
   const [mail, setmail] = useState("");
   const [password, setpassword] = useState(""); 

    const valideForm =(e)=>{
        e.preventDefault();
        const connection ={email:mail,password};
        axios.post("/user/login",connection)
        .then((res)=>{
          localStorage.setItem("token",res.data);
          navigate("/post");
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
    </div>
  )
}

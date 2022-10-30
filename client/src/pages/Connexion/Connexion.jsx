import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import './connexion.css'

export default function Connexion() {
  const navigate = useNavigate();
   const [mail, setmail] = useState("");
   const [password, setpassword] = useState(""); 
   const {token,settoken}  = useContext(AuthContext);
   const [erreurMsg, seterreurMsg] = useState("")

    const valideForm = async (e)=>{
        e.preventDefault();
        const connection ={email:mail,password};
        await axios.post("/user/login",connection)
        .then((res)=>{
           localStorage.setItem("token",res.data);
           settoken(res.data);
           navigate("/forum");
        })
        .catch((err)=>seterreurMsg(err.response.data));
    }
 

  return (
    <div>
       <form className='formDeConnexion' onSubmit={valideForm}>
          <div className='labelMailConnexion'>
              <p>
                  Adresse email
              </p>
          </div>
          <div className='inputMailConnexion'>
            <input type="text" value={mail} onChange={(e)=>{setmail(e.target.value);seterreurMsg("")}}/>
          </div>
          <div className='labelPasswordConnexion'>
              <p>
                  Password
              </p>
          </div>
          <div className='inputPasswordConnexion'>
            <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value);seterreurMsg("")}}/>
          </div>
          <div className='msgErreurFormConnexion'>
              <p>{erreurMsg}</p>
          </div>
          <div className='btnValiderConnexion'>
             <button>Se connecter</button>
          </div>
       </form>
   
    </div>
  )
}

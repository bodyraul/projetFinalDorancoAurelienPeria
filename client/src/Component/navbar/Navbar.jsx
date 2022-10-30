import React from 'react'
import { useContext } from 'react';
import { AuthContext } from"../../Context/AuthContext"
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import "./navbar.css";

export default function Navbar() {
    const { token,settoken } = useContext(AuthContext);
    const [pseudo, setpseudo] = useState("");

    useEffect(() => {
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      if(token){
        axios.get("/user/recupPseudo",config)
        .then((res)=>setpseudo(res.data))
        .catch((err)=>console.log(err));
      }      
      if(!token){
        return;
      }
    }, [token])
    

    if(token) {
      return(
        <nav className='navbar'>
          <Link className='premierLink' to={"/"}>Accueil </Link>
          <Link className='deuxiemeLink' to={"/forum"}>forum </Link>
          <Link className='troisiemeLink' onClick={()=>{
            localStorage.removeItem("token");
            settoken("");
        }} to={"/connexion"}>Deconnexion </Link>
          <span id='pseudoNavbar'>{pseudo}</span>
        </nav>
     )
    }if(!token){
      return(
        <nav className='navbar'>
          <Link className='premierLink' to={"/"}>Accueil </Link>
          <Link className='deuxiemeLink'  to={"/forum"}>forum </Link>
          <Link className='troisiemeLink'  to={"/connexion"}>Connexion </Link>
          <Link className='quatriemeLink'  to={"/inscription"}>Inscription </Link>
        
        </nav>
     )
    }
      
  }

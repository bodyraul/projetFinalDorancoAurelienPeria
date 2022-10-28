import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

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
        <nav>
          <Link to={"/"}>Accueil </Link>
          <Link to={"/forum"}>forum </Link>
          <Link to={"/post"}>Post </Link>
          <Link to={"/post/creerPost"}>creer un post </Link>
          <Link onClick={()=>{
            localStorage.removeItem("token");
            settoken("");
        }} to={"/connexion"}>Deconnexion </Link>
          <span>{pseudo}</span>
        </nav>
     )
    }if(!token){
      return(
        <nav>
          <Link to={"/"}>Accueil </Link>
          <Link to={"/post"}>Post </Link>
          <Link to={"/connexion"}>Connexion </Link>
          <Link to={"/inscription"}>Inscription </Link>
        
        </nav>
     )
    }
      
  }

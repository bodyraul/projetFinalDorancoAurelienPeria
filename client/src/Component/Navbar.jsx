import React from 'react'
import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const { token,settoken } = useContext(AuthContext);
  
    if(token) {
      return(
        <nav>
          <Link to={"/"}>Accueil </Link>
          <Link to={"/post"}>Post </Link>
          <Link to={"/post/creerPost"}>creer un post </Link>
          <Link onClick={()=>{
            localStorage.removeItem("token");
            settoken("");
        }} to={"/connexion"}>Deconnexion </Link>
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

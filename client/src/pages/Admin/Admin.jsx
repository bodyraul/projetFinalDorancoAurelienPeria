import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react';
import {AuthContext} from "../../Context/AuthContext";
import axios from "axios";
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Admin() {

  const {token,settoken}  = useContext(AuthContext);
  const [admin, setadmin] = useState(false);
  const [nonAdmin, setnonAdmin] = useState("");
  const [nombreSignalMsg, setnombreSignalMsg] = useState("");
  const [nombreSignalPost, setnombreSignalPost] = useState("");

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios.get("/admin",config)
    .then((res)=>{
      if(res.data != 'admin'){
        return setnonAdmin("vous n'avez pas l'autorisation d'acceder à cette page.")
      }
      setadmin(true);
    
    })
    .catch((err)=>setnonAdmin(err.response.data));
    
    axios.get("signalement/nombreMessageSignaler",config)
    .then((res)=>setnombreSignalMsg(res.data))
    .catch((err)=>console.log(err));

    axios.get("signalement/nombrePostSignaler",config)
    .then((res)=>setnombreSignalPost(res.data))
    .catch((err)=>console.log(err));

  }, [])
  
  if(admin){
    return (
      <div >
              <Link to={"/admin/signalementPost"}>nombre signalements post : {nombreSignalPost} </Link>
              <Link to={"/admin/signalementMessage"}>nombre signalements message :{nombreSignalMsg} </Link>
            
            <p>
              Bienvenue sur la page d'admin. Vous pouvez faire une recherche de Post pour modifier ou supprimer ceux qui vous paraissent inapropriés.Vous pouvez également accéder aux signalements,
              que ce soit pour un post ou un message non conforme. Vous pouvez agir en conséquence en ayant la possibilité d'envoyer un message d'alerte à l'utilisateur ou de le bannir.
              S'il est bannis, l'utilisateur ne pourra alors plus se connecter et ne pourra donc ni créer de post ni de message.Il pourra cependant accéder à la page d'accueil et voir les messages et posts créés.
             </p>
      </div>
    )
  }
    if(!admin){
      return(
          <div>
              {nonAdmin}
          </div>
        )
    
  }
}

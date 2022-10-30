import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import Contact from"../contact/Contact"
import "./inscription.css"

export default function Inscription() {
  const [nom, setnom] = useState("");
  const [prenom, setprenom] = useState("");
  const [pseudonyme, setpseudonyme] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [errorMsg, seterrorMsg] = useState("");

  const navigate = useNavigate();

  const validerForm = (e)=>{
    e.preventDefault();
    const notNombre = new RegExp("^[^0-9]+$");
    const mailRegex = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    if(nom.length===0){
      return seterrorMsg("le nom ne peut pas être vide.");
    }
    if(!notNombre.test(nom)){
      return seterrorMsg("le nom ne peut pas contenir de chiffre.");
    }
    if(prenom.length===0){
      return seterrorMsg("le prénom ne peut pas être vide.");
    }
    if(!notNombre.test(prenom)){
      return seterrorMsg("le prénom ne peut pas contenir de chiffre.");
    }
    if(pseudonyme.length===0){
      return seterrorMsg("le pseudonyme ne peut pas être vide.");
    }
    if(pseudonyme.length>15){
      return seterrorMsg("le pseudonyme ne peut contenir plus de 15 caractères.");
    }
    if(email.length===0){
      return seterrorMsg("l'email ne peut pas être vide.");
    }
    if(!mailRegex.test(email)){
      return seterrorMsg("Cela ne correspond pas à un email.");
    }
    if(password.length===0){
      return seterrorMsg("Le mot de passe ne peut pas être vide");
    }
    if(confirmPassword!=password){
      return seterrorMsg("Les deux mots de passe sont différents.");
    }

    const user ={nom,prenom,pseudonyme,email,password};
    axios.post("/user/register",user)
    .then((res)=>navigate("/connexion"))
    .catch((err)=>seterrorMsg(err.response.data));
    
  }

  return (
    <div>
        <form className='formulaireInscription' onSubmit={validerForm}>
          <div className='titreFormInscription'>
              <p>Formulaire d'inscription</p>            
          </div>
          <p className='traitInscription'></p>
          <div className='saisiFormInscrition'>
              <div className='labelNomPrenom'>
                  <p>Nom 
                    <span>*</span>
                  </p>
                  <p>Prénom 
                    <span>*</span>
                  </p>
              </div>
              <div className='partieInputNomPrenom'>
                <input type="text"  value={nom} onChange={(e)=>{setnom(e.target.value);seterrorMsg("")}}></input>
                <input type="text"   value={prenom} onChange={(e)=>{setprenom(e.target.value);seterrorMsg("")}}></input>
              </div>
              <div className='labelPseudoMail'>
                  <p>Pseudonyme 
                    <span>*</span>
                  </p>
                  <p>adresse email 
                    <span>*</span>
                  </p>
              </div>
              <div className='partieInputPseudoMail'>
                <input  type="text"   value={pseudonyme} onChange={(e)=>{setpseudonyme(e.target.value);seterrorMsg("")}}></input>
                <input  type="text"  value={email} onChange={(e)=>{setemail(e.target.value);seterrorMsg("")}}></input>
              </div>
              <div className='labelMdp'>
                 <p>Mot de passe 
                    <span>*</span>
                  </p>
              </div>
              <div className='partieInputMdp'>
                 <input  type="password"  value={password} onChange={(e)=>{setpassword(e.target.value);seterrorMsg("")}}></input>
              </div>
              <div className='labelConfirmMdp'>
                 <p>Confirmer mot de passe
                    <span>*</span>
                  </p>
              </div>
              <div className='partieInputMdp'>
                 <input  type="password" value={confirmPassword} onChange={(e)=>{setconfirmPassword(e.target.value);seterrorMsg("")}}></input>
              </div>
              <div className='partieMsgErreur'>
                 <p>
                    {errorMsg}
                 </p>
              </div>
              <div className='partieBoutton'>
                 <button>valider</button>
              </div>
          </div>

            
      
        </form>
   
    </div>
  )
}

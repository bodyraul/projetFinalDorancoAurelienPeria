import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';

export default function ModifPost() {

    const idPost = useParams().id;
    const [titrePost, settitrePost] = useState("");
    const [MsgPost, setMsgPost] = useState("");
    const {token,settoken}  = useContext(AuthContext);
    const [errorTitreVide, seterrorTitreVide] = useState("Le titre ne peux pas être vide.");
    const [errorTitreNbCaractere, seterrorTitreNbCaractere] = useState("nombre de caractères insuffisants");
    const [errorMsgVide, seterrorMsgVide] = useState("Le message ne peut pas être vide");
    const [errorMsgNbCaractere, seterrorMsgNbCaractere] = useState("nombre de caractères insuffisants");
    const [nbCaractereMsg, setnbCaractereMsg] = useState(MsgPost.length);
    const [nbCaractereTitre, setnbCaractereTitre] = useState(titrePost.length);
    const [msgModif, setmsgModif] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
     
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

      axios.get(`/post/monPoste/${idPost}`,config)
      .then((res)=>{
        setMsgPost(res.data.description);
        settitrePost(res.data.titre);
        console.log(res);
      })
      .catch((err)=>console.log(err));

    }, [])

    // gestion du input titre du form créér post
  useEffect(() => {
    const button = document.getElementById("modifier");
    setnbCaractereTitre(titrePost.length);
    
    if(titrePost === "" )
      {
        seterrorTitreVide("Le titre ne peux pas être vide.");
        button.disabled=true;
      }
    if(titrePost.length<5 )
      {
        seterrorTitreNbCaractere("nombre de caractères insuffisants");
        button.disabled=true;
      }
    if(titrePost.length>30 )
      {
        seterrorTitreNbCaractere("nombre de caractères trop important");
        button.disabled=true;
      }
    if(titrePost.length>=5 && titrePost.length<=30 )
      {
        seterrorTitreNbCaractere("");
      }
    if(titrePost!=""){
      seterrorTitreVide("");
    }
    if(MsgPost!="" &&  MsgPost.length>=20 && MsgPost.length<=300 && titrePost!="" && titrePost.length>=5 && titrePost.length<=30){
      button.disabled=false;
    }
  }, [titrePost])


   // gestion du input msg du form créér post
  useEffect(() => {
    const button = document.getElementById("modifier");
    setnbCaractereMsg(MsgPost.length);
    
    if(MsgPost === "" )
      {
        seterrorMsgVide("Le titre ne peux pas être vide.");
        button.disabled=true;
      }
    if(MsgPost.length<20 )
      {
        seterrorMsgNbCaractere("nombre de caractères insuffisants");
        button.disabled=true;
      }
    if(MsgPost.length>300 )
      {
        seterrorMsgNbCaractere("nombre de caractères trop important");
        button.disabled=true;
      }
    if(MsgPost.length>=20 && MsgPost.length<=300 )
      {
        seterrorMsgNbCaractere("");
      }
    if(MsgPost!=""){
      seterrorMsgVide("");
    }
    if(MsgPost!="" &&  MsgPost.length>=20 && MsgPost.length<=300 && titrePost!="" && titrePost.length>=5 && titrePost.length<=30){
      button.disabled=false;
    }
  }, [MsgPost])

  //requete qui permet de modifier le post
  const modifierPost = ()=>{
    const button = document.getElementById("modifier");
    const monPost ={};
    monPost.titre = titrePost;
    monPost.description = MsgPost;

    const config = {
        headers:{
            Authorization: `Bearer ${token}`,
        },
    }

    axios.put(`/post/modifierPost/${idPost}`,monPost,config)
    .then((res)=>{
        console.log(res);
        setmsgModif(res.data);
    })
    .catch((err)=>console.log(err));

    setMsgPost("");
    settitrePost("");
    button.disabled=true;

    setTimeout(() => {
        navigate("/post/creerPost");
    }, 5000);
  }
    

  return (
    <div>
    <h1>Modifier mon post</h1>
    <div>
      <p>
        <label>titre : </label>
        <input value={titrePost} onChange={(e)=>settitrePost(e.target.value)} type="text" placeholder="titre"/>
        {nbCaractereTitre === 0 ? <label> {nbCaractereTitre} caractère (min : 5  max : 30)</label> : <label> {nbCaractereTitre} caractères(min : 5  max : 30)</label>}
      </p>
      <p>
        <span>{errorTitreVide}</span>
      </p>
      <p>
        <span>{errorTitreNbCaractere}</span>
      </p>
      <p>
        <label>premier message : </label>
        <input value={MsgPost} onChange={(e)=>setMsgPost(e.target.value)} type="text" placeholder="message"/>
        {nbCaractereMsg === 0? <label> {nbCaractereMsg} caractère (min : 20  max : 300)</label> : <label> {nbCaractereMsg} caractères(min : 20  max : 300)</label>}
      </p>
      <p>
        <span>{errorMsgVide}</span>
      </p>
      <p>
        <span>{errorMsgNbCaractere}</span>
      </p>
      <button onClick={modifierPost}  id='modifier'>Modifier</button>
    </div>
    <p>
        <span>{msgModif}</span>
    </p>
    
</div>
  )
}


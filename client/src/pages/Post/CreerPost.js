import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./creerPost.css";

export default function CreerPost() {
  const [titrePost, settitrePost] = useState("");
  const [MsgPost, setMsgPost] = useState("");
  const {token,settoken}  = useContext(AuthContext);
  const [errorTitreVide, seterrorTitreVide] = useState("Le titre ne peux pas être vide.");
  const [errorTitreNbCaractere, seterrorTitreNbCaractere] = useState("nombre de caractères insuffisants");
  const [errorMsgVide, seterrorMsgVide] = useState("Le message ne peut pas être vide");
  const [errorMsgNbCaractere, seterrorMsgNbCaractere] = useState("nombre de caractères insuffisants");
  const [nbCaractereMsg, setnbCaractereMsg] = useState(MsgPost.length);
  const [nbCaractereTitre, setnbCaractereTitre] = useState(titrePost.length);
  const [post, setpost] = useState({});
  const [listePost, setlistePost] = useState([]);
  const [boolSupPost, setboolSupPost] = useState(false);
  const [messageAnnonce, setmessageAnnonce] = useState([]);
  const [msgMessage, setmsgMessage] = useState("");
  const [nb, setnb] = useState(0);
  const navigate = useNavigate();
 
  
  // récupération de nos propres post au chargement de la page
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    axios.get("/post/accesPost",config)
    .then((res)=>{
      setlistePost(res.data);
      console.log(res.data);
    })
    .catch((err)=>console.log(err));

    axios.get("/message/afficherAllMessage")
    .then((res)=>{
      setmessageAnnonce(res.data);
    })
    .catch((error)=>console.log(error));

  }, [])
  

  // gestion du input titre du form créér post
  useEffect(() => {
    const button = document.getElementById("creer");
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
    const button = document.getElementById("creer");
    setnbCaractereMsg(MsgPost.length);
    
    if(MsgPost === "" )
      {
        seterrorMsgVide("Le message ne peux pas être vide.");
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


  // requette qui permet de créer un post
  const creerPost = () =>{
    post.titre = titrePost;
    post.description = MsgPost;
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios.post("/post/creerPost",post,config)
    .then((res)=>{
      setlistePost([res.data,...listePost]);
    })
    .catch((err)=>console.log(err))
    setMsgPost("");
    settitrePost("");
  }

  // on récupère l'id du stop que l'on veut sup et on a l'emplacement de cet id dans la liste poste
 const supPost =(e)=>{
    console.log(e);
    for(let k=0;k<=listePost.length-1;k++){
      if(listePost[k]._id === e){
        setboolSupPost(true);
        setnb(k);
        return ;
      }
    }
 }

 //requete efféctué après avoir valider la supréssion du post
 const validationSupPost = (idPost)=>{
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

    axios.delete(`/post/supprimerPost/${idPost}`,config)
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));

    setlistePost(listePost.filter(element=>element._id != idPost));
    setnb(0);
    setboolSupPost(false);
 }

 // ce qu'il se passe après avoir changer d'avis sur la suppréssion du post
 const nonSupPost = ()=>{
  setboolSupPost(false);
  setnb(0);
 }

 //requete accès page modif post
 const pageModifPost = (idPost)=>{
  navigate(`/post/modifPost/${idPost}`);
 }

 //requete qui permet de créér un message et de mettre à jour le post
 const creerMessage = (idPost)=>{
    console.log(idPost);
    console.log(msgMessage);

    const config ={
      headers:{
        Authorization : `BEARER ${token}`,
      },
    }

    var message = {};
    message.contenu = msgMessage;
    axios.post(`/message/creerMessage/${idPost}`,message,config)
    .then((res)=> setmessageAnnonce([res.data,...messageAnnonce]))
    .catch((err)=>console.log(err));

   
    
 }


  return (
    <div>
        <h1 className='titre1'>Créér un post</h1>
        <div className='formCreerPost'>
          <div className='formPostPartieTitre'>
              <div className='partieSaisieTitre'>
                <p>
                  <textarea value={titrePost} onChange={(e)=>settitrePost(e.target.value)} type="text" placeholder="Saisir titre"/>
                </p>
                <p>
                 {nbCaractereTitre === 0 ? <span> {nbCaractereTitre} caractère (min : 5  max : 30)</span> : <span> {nbCaractereTitre} caractères(min : 5  max : 30)</span>}
                </p>
              </div>
              <div>
                <span>{errorTitreVide}</span>
              </div>
              <div>
                <span>{errorTitreNbCaractere}</span>
              </div>
          </div>
          <div className='FormPartieSaisieMessage'>
              <div className='partieSaisieMessage'>
                <p>
                  <textarea value={MsgPost} onChange={(e)=>setMsgPost(e.target.value)} type="text" placeholder="Saisir message"/>
                </p>
                <p>
                  {nbCaractereMsg === 0? <span> {nbCaractereMsg} caractère (min : 20  max : 300)</span> : <label> {nbCaractereMsg} caractères(min : 20  max : 300)</label>}
                </p>
              </div>
              <div>
                <p>
                  <span>{errorMsgVide}</span>
                </p>
                <p>
                  <span>{errorMsgNbCaractere}</span>
                </p>
              </div>
          </div>
          <button className='btnValiderFormPost' onClick={creerPost}  id='creer'>Créér</button>
        </div>

        <h1 className='titre1'>Mes posts</h1>
        
        <div className='contenuPost'>
            <div className='ententePost'>
                <p>
                    <span>Créé le date</span>
                    <span>par nom prenom</span>
                    <span>Allis pseudonyme</span>
                </p>
                <p>
                    titre  
                </p>
            </div>
            <div className='corpsPost'>
                <div className='descriptionMessage'>
                      <div className='englobeInfo'>
                          <div>
                            <p>
                               <span>Message créé le date</span>
                            </p>
                            <p>
                              <span>Par nom prénom</span>
                            </p>
                          </div>
                          <div>
                            <span>Allias Pseudonyme</span>
                          </div>
                      </div>
                </div>
                <p className='PartieContenuMsgPost'>
                  azertyuiopazertyuiopazertyuiopaz ertyuiopazertyuiopazertyuiopazert yuiopazertyuiopazertyuiopazertyuiopaze rtyuiopazertyuiopazertyuiopazertyuiopazertyuiopazertyuiopazertyuiopazertyuiopazertyuiopazertyuiop
                  azertyuiopazertyuiopazertyuiopazertyuiopazertyuiopazerty uiopazertyuiopazertyui opazertyuiopazertyuiop
                </p>
                <div className='descriptionMessage'>
                      <div className='englobeInfo'>
                          <div>
                            <p>
                               <span>Message créé le date</span>
                            </p>
                            <p>
                              <span>Par nom prénom</span>
                            </p>
                          </div>
                          <div>
                            <span>Allias Pseudonyme</span>
                          </div>
                      </div>
                </div>
                <p className='PartieContenuMsgPost'>
                  azertyuiopazertyuiopazertyuiopaz ertyuiopazertyuiopazertyuiopazert yuiopazertyuiopazertyuiopazertyuiopaze rtyuiopazertyuiopazertyuiopazertyuiopazertyuiopazertyuiopazertyuiopazertyuiopazertyuiopazertyuiop
                  azertyuiopazertyuiopazertyuiopazertyuiopazertyuiopazerty uiopazertyuiopazertyui opazertyuiopazertyuiop
                </p>
            </div>        
        </div>
        {/* {listePost.map((element)=>{
          return(
              <div style={{marginBottom : 80}} key={element._id}>
                <p>date création : {element.createdAt}</p>
                <p>titre : {element.titre}</p>
                <p>description : {element.description}</p>
                {messageAnnonce.map((message)=>{
                    if(message.idPost === element._id){
                      return(
                        <p key={message._id}>message {message.contenu}</p>
                      )
                    }

                  })}
                <button onClick={()=>supPost(element._id)}>supprimer Post</button>
                <button onClick={()=>pageModifPost(element._id)}>modifier Post</button>
                {boolSupPost === true && element._id === listePost[nb]._id?
                <div>
                  <span>Etes-vous sûr de vouloir supprimer ce post ? Si oui tous les messages de ce post seront supprimés également.</span>
                  <p>
                    <button onClick={()=>validationSupPost(element._id)}>oui</button>
                    <button onClick={nonSupPost}>non</button>
                  </p>
                </div>
                :
                <p></p>
                }
                 <p>
                  <input   onChange={(e)=>setmsgMessage(e.target.value)} type="text" placeholder= "message" />
                  <button onClick={()=>creerMessage(element._id)}>créer message</button>
                </p>
              </div>          
            )
        })} */}
       
        

    </div>
  )
}

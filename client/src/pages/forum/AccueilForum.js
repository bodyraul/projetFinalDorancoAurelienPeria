import React from 'react'
import { useState } from 'react'
import axios from 'axios';
import { useContext } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { useEffect } from 'react';
import { useRef } from 'react';
import "../forum/accueilForum.css";
import { useNavigate } from 'react-router-dom';


export default function AccueilForum() {
const [listePost, setlistePost] = useState([]);
const [categories, setcategories] = useState([]);
const {token,settoken}  = useContext(AuthContext);
const [recherchePost, setrecherchePost] = useState("");
const [categorieBoolean, setcategorieBoolean] = useState(false);
const [errorMsg, seterrorMsg] = useState("");
const [errorMsgCreerPost, seterrorMsgCreerPost] = useState("");
const [valueElementCheckbox, setvalueElementCheckbox] = useState("Stratégie tournois");
const [valueTextarea, setvalueTextarea] = useState("");
const refListeCategories =useRef();
const navigate = useNavigate();

// affichage des post au chargement de la page
useEffect(() => {
  
    axios.get("/post")
    .then((res)=>setlistePost(res.data))
    .catch((err)=>console.log(err));

    axios.get("/categorie/afficherAllCategories")
    .then((res)=>setcategories(res.data))
    .catch((err)=>console.log(err));

    const btnCheckbox = document.getElementById("tournois");
    btnCheckbox.checked=true;
}, [])

// gestion du boutton rechercher
const valideRecherche= ()=>{
    const selecteur = document.getElementById("selecteur");
    if(recherchePost===""){
        return seterrorMsg("La recherche ne peut être vide");
    }
    if(selecteur.value === "sujet"){
        const mot = recherchePost;
        axios.get(`/post/recherchepostesParmot/${mot}`)
        .then((res)=>{
            setlistePost(res.data);
        })
        .catch((err)=>
        {
            seterrorMsg(recherchePost+" "+err.response.data);
        });
    }

    if(selecteur.value === "auteur"){
        const pseudoCreateur = recherchePost;
        axios.get(`/post/recherchepostesParPseudo/${pseudoCreateur}`)
        .then((res)=>setlistePost(res.data))
        .catch((err)=>
        {
            if(err.response.status === 404){
                seterrorMsg(recherchePost+" : "+err.response.data);
            }
        });
    }
    setrecherchePost("");
}

// gestion du clique categorie et de laffichage des postes de la categorie choisie
const triageCategorie=(categorie)=>{
    axios.get(`/post/posteParCategorie/${categorie}`)
    .then((res)=>setlistePost(res.data))
    .catch((err)=>console.log(err));

    setcategorieBoolean(false);
    seterrorMsg("");
}

// gestion de l'affichage de la div invisible ou visible des catégories
const etatCategorie =()=>{
    setcategorieBoolean(!categorieBoolean);
}

// gestion du clique du boutton "tous les posts"
const afficherAllPost =()=>{
    axios.get("/post")
    .then((res)=>setlistePost(res.data))
    .catch((err)=>console.log(err));

    seterrorMsg("");
}

//gestion du rendu visible de la div catégorie si boolean est true ou false
useEffect(() => {
    if(categorieBoolean===true){
        refListeCategories.current.classList.remove("invisible");
        refListeCategories.current.classList.add("visible");
    }
    if(categorieBoolean===false){
        refListeCategories.current.classList.remove("visible");
        refListeCategories.current.classList.add("invisible");
    }
    
}, [categorieBoolean])

// gestion de la checkbox et du checked = false de tous élément excépté celui qui est cliqué
const test2 =(id,element1,element2,element3,element4)=>{
    const elementprincipal = document.getElementById(id);
    const elements2 = document.getElementById(element1);
    const elements3 = document.getElementById(element2);
    const elements4 = document.getElementById(element3);
    const elements5 = document.getElementById(element4);
    const tab = [elements5,elements2,elements3,elements4];

    tab.forEach(element => {
        element.checked=false;
    });
    setvalueElementCheckbox(elementprincipal.value);
}

// ce qu'il se passe quant on valide le formulaire
const  validerFormPost  = async () => {
    const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };

    const elements1 = document.getElementById("tournois");
    const elements2 = document.getElementById("spin");
    const elements3 = document.getElementById("cashGame");
    const elements4 = document.getElementById("general");
    const elements5 = document.getElementById("logiciel");

    if(elements1.checked === false & elements2.checked === false & elements3.checked === false & elements4.checked === false & elements5.checked === false ){
       return seterrorMsgCreerPost("Vous devez choisir une catégorie.");
    }

    if(valueTextarea.length===0){
       return seterrorMsgCreerPost("le titre ne doit pas être vide.");
    }
    if(valueTextarea.length<10){
      return  seterrorMsgCreerPost("le titre ne peux pas contenir moins de 10 caractères.");
    }
    if(valueTextarea.length>150){
      return  seterrorMsgCreerPost("le titre ne peux pas contenir plus de 150 caractères.");
    }
   
    const newPost = {};
    newPost.categorie=valueElementCheckbox;
    newPost.titre=valueTextarea;

    await axios.post("/post/creerPost",newPost,config)
    .then((res)=>{ 
        setlistePost([res.data,...listePost]);
        seterrorMsgCreerPost("Post créé avec succès.")
    })
    .catch((err)=>console.log(err));

    await axios.get("/categorie/afficherAllCategories")
    .then((res)=>setcategories(res.data))
    .catch((err)=>console.log(err));

    setvalueTextarea("");
}

// permet de rediriger lutilisateur vers la création du post en cliquand sur "nouveau sujet"
const scrollDownSmooth =()=>{
    document.querySelector('#creationNewPostForm').scrollIntoView({
        behavior: 'smooth'
      });
}

// navigation vers les messages du post quand on clique sur le post
const accesPageMessagePost= (idPost)=>{
    navigate(`/forum/messagePost/${idPost}`);
}

  return (
    <div>
       <h1>forum Poker</h1>
       <div className='partieMsgErreurSectionTriage'>
            <p>{errorMsg}</p>
       </div>
       <div className='sectionTriage'>
            <div  ref={refListeCategories} className='listeCategories invisible'>
                {
                    categories.map((element)=>{
                        return(
                        <div onClick={()=>triageCategorie(element.titre)} key={element.titre} className='uneCategorie'>
                            <p>{element.titre} - {element.nombrePost} </p>
                            <p >{element.contenu}</p>
                        </div>
                        )
                    })
                }
            </div>
            <button onClick={etatCategorie} className='nouveauSujet'>Catégorie</button>
            <div className='partieRecherchePost'>
                <input value={recherchePost} onChange={(e)=>{
                    setrecherchePost(e.target.value);
                    seterrorMsg("");
                    }} type="text" placeholder="rechercher Sujet"/>
                <select id='selecteur' name="nyc">
                    <option value="sujet">sujet</option>
                    <option value="auteur">Auteur</option>
                </select>
                <button className='bouttonRecherche2' onClick={valideRecherche}>rechercher</button>
            </div>
            <p className='paraBouttons'>
                <button onClick={afficherAllPost} className='bouttonAllPost'>Tous les posts</button>
                <button onClick={scrollDownSmooth} className='creerNewPost'>Nouveau sujet</button>
            </p>
       </div>
       <div className='tableauPost'>    
            <table >
                <thead>
                    <tr>
                        <td>Sujet</td>
                        <td>Réponses</td>
                        <td>Auteur</td>
                        <td>date</td>
                    </tr>
                </thead>
                <tbody>
                    {listePost.map((element)=>{
                        return(
                            <tr className='la' key={element._id}>
                                <td className='titreDuPost' onClick={()=>accesPageMessagePost(element._id)}>{element.titre}</td>
                                <td>{element.nombreMessages}</td>
                                <td>{element.pseudoCreateur}</td>
                                <td>{element.dateCreation}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
       </div>
       <div id='creationNewPostForm' className='formulaireCreerNewPost'>
            <h1 className='titreNewSujet'>Nouveau Sujet</h1>
            <div className='partieTitreTextPost'>
                <p className='labelTitrePost'>
                    titre : 
                </p>
                <p className='texteareaFormPost'>
                    <textarea value={valueTextarea} onChange={(e)=>{
                        setvalueTextarea(e.target.value);
                        seterrorMsgCreerPost("");
                        }} placeholder='Saisir titre'></textarea>
                </p>
            </div>
            <div className='partieCheckbox'>
                <div className='titreCheckbox'>
                    Catégorie :
                </div>
                <div className='allCheckbox'>
                    <p>
                        <input onClick={()=>test2("tournois","cashGame","spin","general","logiciel")} type="checkbox" id="tournois" name="vehicle1" value="Stratégie tournois"/>
                        <label > Stratégie tournois</label>
                    </p>
                    <p>
                        <input onClick={()=>test2("cashGame","tournois","spin","general","logiciel")} type="checkbox" id="cashGame" name="vehicle2" value="Stratégie cash game"/>
                        <label > Stratégie cash game</label>
                    </p>
                    <p>
                        <input onClick={()=>test2("spin","tournois","cashGame","general","logiciel")} type="checkbox" id="spin" name="vehicle3" value="Stratégie Spin & Go"/>
                        <label > Stratégie Spin & Go</label>
                    </p>
                    <p>
                        <input onClick={()=>test2("general","tournois","spin","cashGame","logiciel")} type="checkbox" id="general" name="vehicle3" value="Général"/>
                        <label > Général</label>
                    </p>
                    <p>
                        <input onClick={()=>test2("logiciel","tournois","spin","general","cashGame")} type="checkbox" id="logiciel" name="vehicle3" value="Logiciel de poker"/>
                        <label > Logiciel de poker</label>
                    </p>
                </div>
            </div>
            <p className='errorMsgCreerPost2'>
                {errorMsgCreerPost}
            </p>
            <button onClick={validerFormPost} className='creerFormPost'>Créér</button>
       </div>
    </div>
  )
}


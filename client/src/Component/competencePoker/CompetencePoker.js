import React from 'react'
import "./competencePoker.css"
import { useRef } from 'react'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

export default function CompetencePoker() {

    const paraTestUn = useRef();const paraTestDeux = useRef();const paraTestTrois = useRef();const paraTestQuatre = useRef();const paraTestCinq = useRef();const paraTestSix = useRef();const paraTestSept= useRef();const paraTestHuigt = useRef();const paraTestNeuf = useRef();const paraTestDix = useRef();
    const titreAllCompetence = useRef();
    const { ref:refAllCompetence,inView:visible1 } = useInView({threshold:0.8,triggerOnce:true});
    const refAdaptationInvisible = useRef();
    const refAdaptationVisible =useRef();
    const refTitreAdaptation =useRef();
    const refCalmeInvisible = useRef();
    const refCalmeVisible =useRef();
    const refTitreCalme =useRef();
    const refConcentrationInvisible = useRef();
    const refConcentrationVisible =useRef();
    const refTitreConcentration =useRef();
    const refCompetitionInvisible = useRef();
    const refCompetitionVisible =useRef();
    const refTitreCompetition =useRef();
    const refMotivationInvisible = useRef();
    const refMotivationVisible =useRef();
    const refTitreMotivation =useRef();
    const traitDisparaitre = useRef();
    const  [stat1, setstat1] = useState(1);
    const  [stat2, setstat2] = useState(1);
    const  [stat3, setstat3] = useState(1);
    const  [stat4, setstat4] = useState(1);
    const  [stat5, setstat5] = useState(1);
    const [titreUn, settitreUn] = useState("Adaptation");
    const [titreDeux, settitreDeux] = useState("Calme");
    const [titreTrois, settitreTrois] = useState("Concentation");
    const [titreQuatre, settitreQuatre] = useState("Competition");
    const [titreCinq, settitreCinq] = useState("Motivation");
   

    const cliqueEUnpremiereCompetence = (element1,element2,refTitre,titre,setTitre,paravisible,paraInvisible,classeARemove,classeAAjouter,DeuxiemeClasseAajouter,setstats)=>{
        element1.current.disabled=true;
        element2.current.disabled=true;
        paraInvisible.current.classList.remove(classeARemove);
        paraInvisible.current.classList.add(classeAAjouter);
        element1.current.classList.add("rotationDeBaseDeux");
        element1.current.classList.remove("deuxiemeRotations");
        element1.current.classList.add("premiereRotations");
        refTitre.current.classList.remove("visible");
        refTitre.current.classList.remove("afficherParaTitreCompetencesUn");
        refTitre.current.classList.add("cacherParaTitreCompetences");
        var tempsBarreUne = setInterval(() => {
            setstats((Math.round(paraInvisible.current.clientWidth/paravisible.current.clientWidth*100)));
        }, 100);
        setTimeout(() => {
            paraInvisible.current.classList.remove(classeAAjouter);
            paraInvisible.current.classList.add(DeuxiemeClasseAajouter);
            element2.current.classList.add("deuxiemeRotations");
            refTitre.current.classList.remove("deuxiemeTransformation");
            refTitre.current.classList.remove("cacherParaTitreCompetences");
            setTitre(titre);
            refTitre.current.classList.add("premiereTransformation");
            refTitre.current.classList.add("afficherParaTitreCompetencesUn");
           
        }, 500);
        setTimeout(() => {
            element2.current.disabled=false;
            element1.current.classList.add("rotationDeBase");
            element1.current.classList.remove("premiereRotations");
            clearInterval(tempsBarreUne);
        }, 1100);
    }

    const cliqueEDeuxpremiereCompetence = (element1,element2,refTitre,titre,setTitre,paravisible,paraInvisible,classeARemove,classeAAjouter,DeuxiemeClasseAajouter,setstats)=>{
        element2.current.disabled=true;
        element2.current.classList.add("rotationDeBaseDeux");
        element2.current.classList.remove("deuxiemeRotations");
        element2.current.classList.add("premiereRotations");
        refTitre.current.classList.remove("afficherParaTitreCompetencesUn");
        refTitre.current.classList.add("cacherParaTitreCompetences");
        paraInvisible.current.classList.remove(classeARemove);
        paraInvisible.current.classList.add(classeAAjouter);
        var tempsBarreUne = setInterval(() => {
            setstats((Math.round(paraInvisible.current.clientWidth/paravisible.current.clientWidth*100)));
        }, 100);
        setTimeout(() => {
            paraInvisible.current.classList.remove(classeAAjouter);
            paraInvisible.current.classList.add(DeuxiemeClasseAajouter);
            element1.current.classList.add("deuxiemeRotations");
            refTitre.current.classList.remove("cacherParaTitreCompetences");
            refTitre.current.classList.remove("premiereTransformation");
            setTitre(titre);
            refTitre.current.classList.add("deuxiemeTransformation");
            refTitre.current.classList.add("afficherParaTitreCompetencesUn");
        },500);
        setTimeout(() => {
            element1.current.disabled=false;
            clearInterval(tempsBarreUne);
        }, 1100);
    }

    const affichageStat = (paraTestNumero,refTitreNom,refNomVisible,refNomInvisible,timerUn,timerDeux,timerTrois,classe,setstat)=>{
        setTimeout(() => {
            paraTestNumero.current.classList.add("deuxiemeRotations");
            refTitreNom.current.classList.remove("invisible");
            refTitreNom.current.classList.add("visible");
            refNomVisible.current.classList.remove("invisible");
            refNomVisible.current.classList.add("visible");
        }, timerUn);

        setTimeout(() => {
            refNomInvisible.current.classList.add(classe);
            var tempsBarreUne = setInterval(() => {
                setstat((Math.round(refNomInvisible.current.clientWidth/refNomVisible.current.clientWidth*100)));
            }, 100);
            setTimeout(() => {
                clearInterval(tempsBarreUne);
            }, timerTrois);
        }, timerDeux);
    }
    
    useEffect(() => {
      if(visible1===true){

        affichageStat(paraTestUn,refTitreAdaptation,refAdaptationVisible,refAdaptationInvisible,0,500,1000,"quinzePourCent",setstat1);
        affichageStat(paraTestTrois,refTitreCalme,refCalmeVisible,refCalmeInvisible,500,1000,1100,"dixPourCent",setstat2);
        affichageStat(paraTestCinq,refTitreConcentration,refConcentrationVisible,refConcentrationInvisible,1000,1500,2000,"OnzePourCent",setstat3);
        affichageStat(paraTestSept,refTitreCompetition,refCompetitionVisible,refCompetitionInvisible,1500,2000,2500,"OnzePourCent",setstat4);
        affichageStat(paraTestNeuf,refTitreMotivation,refMotivationVisible,refMotivationInvisible,2000,2500,3000,"OnzePourCent",setstat5);
        setTimeout(() => {
            traitDisparaitre.current.classList.add("apparitionTraitMilieu");
        }, 3000);
      }
    }, [visible1])
    
    
  return (
    <div ref={refAllCompetence} className='containerCompetencePoker'>
        <div ref={titreAllCompetence} className='titreCompetencePoker invisible'>
            <p>
                Compétences nécéssaires pour jouer au poker
            </p>
        </div>
        <div className='allCompetences'>
            <div className='partieBulleCompetence'>
                <div className='enteteCompetence'>
                    <div className='premiereCompetence'>
                        <button onClick={()=>cliqueEUnpremiereCompetence(paraTestUn,paraTestDeux,refTitreAdaptation,"Patience",settitreUn,refAdaptationVisible,refAdaptationInvisible,"quinzePourCent","MoinsquinzePourCent","DouzePourCent",setstat1)} ref={paraTestUn} className='eUnpremiereCompetence'>Adaptation</button>
                        <button onClick={()=>cliqueEDeuxpremiereCompetence(paraTestUn,paraTestDeux,refTitreAdaptation,"Adaptation",settitreUn,refAdaptationVisible,refAdaptationInvisible,"DouzePourCent","diminutionDouzePourCent","quinzePourCent",setstat1)}  ref={paraTestDeux} className='eDeuxpremiereCompetence'>Patience</button>
                    </div>
                </div>
                <div className='milieuCompetence'>
                    <div className='deuxiemeCompetence'>
                        <button ref={paraTestTrois} onClick={()=>cliqueEUnpremiereCompetence(paraTestTrois,paraTestQuatre,refTitreCalme,"Emotion",settitreDeux,refCalmeVisible,refCalmeInvisible,"dixPourCent","MoinsdixPourCent","treizePourCent",setstat2)} className='eUnpremiereCompetence'>Calme</button>
                        <button ref={paraTestQuatre} onClick={()=>cliqueEDeuxpremiereCompetence(paraTestTrois,paraTestQuatre,refTitreCalme,"Calme",settitreDeux,refCalmeVisible,refCalmeInvisible,"treizePourCent","diminutionTreizePourCent","dixPourCent",setstat2)}   className='eDeuxpremiereCompetence'>Emotion</button>
                    </div>
                    <div className='troisiemeCompetence'>
                        <button ref={paraTestCinq} onClick={()=>cliqueEUnpremiereCompetence(paraTestCinq,paraTestSix,refTitreConcentration,"Mathématique",settitreTrois,refConcentrationVisible,refConcentrationInvisible,"OnzePourCent","diminutionOnzePourCent","treizePourCent",setstat3)}   className='eUnpremiereCompetence'>Concentration</button>
                        <button ref={paraTestSix} onClick={()=>cliqueEDeuxpremiereCompetence(paraTestCinq,paraTestSix,refTitreConcentration,"Concentration",settitreTrois,refConcentrationVisible,refConcentrationInvisible,"treizePourCent","diminutionTreizePourCent","OnzePourCent",setstat3)}   className='eDeuxpremiereCompetence'>Mathématique</button>
                    </div>
                    <div className='quatriemeCompetence'>
                        <button ref={paraTestSept} onClick={()=>cliqueEUnpremiereCompetence(paraTestSept,paraTestHuigt,refTitreCompetition,"Sociable",settitreQuatre,refCompetitionVisible,refCompetitionInvisible,"OnzePourCent","diminutionOnzePourCent","cinqPourCent",setstat4)}   className='eUnpremiereCompetence'>Compétition</button>
                        <button ref={paraTestHuigt} onClick={()=>cliqueEDeuxpremiereCompetence(paraTestSept,paraTestHuigt,refTitreCompetition,"Compétition",settitreQuatre,refCompetitionVisible,refCompetitionInvisible,"cinqPourCent","MoinsCinqPourCent","OnzePourCent",setstat4)}  className='eDeuxpremiereCompetence'>Sociable</button>
                    </div>
                </div>
                <div className='finCompetence'>
                    <div className='cinquiemeCompetence'>
                        <button ref={paraTestNeuf} onClick={()=>cliqueEUnpremiereCompetence(paraTestNeuf,paraTestDix,refTitreMotivation,"Intelligence",settitreCinq,refMotivationVisible,refMotivationInvisible,"OnzePourCent","diminutionOnzePourCent","dixPourCent",setstat5)} className='eUnpremiereCompetence'>Motivation</button>
                        <button ref={paraTestDix} onClick={()=>cliqueEDeuxpremiereCompetence(paraTestNeuf,paraTestDix,refTitreMotivation,"Motivation",settitreCinq,refMotivationVisible,refMotivationInvisible,"dixPourCent","MoinsdixPourCent","OnzePourCent",setstat5)}  className='eDeuxpremiereCompetence'>Intelligence</button>
                    </div>
                </div>
            </div>
            <div className='traitMilieuCompetence'>
                <div ref={traitDisparaitre} className='traitMilieuCompetenceDessus'>

                </div>
            </div>
            <div className='GraphiqueCompetence'>
                <div className='premiereBarreGraphique'>
                    <div className='titreDugraphique'>
                        <p ref={refTitreAdaptation} className='titreDugraphiqueDeux invisible '>{titreUn}</p>
                    </div>
                    <div ref={refAdaptationVisible} className='barreDuGraphique invisible'>
                        {stat1} %
                        <p ref={refAdaptationInvisible} className='barreDuGraphiqueInvisible '>

                        </p>
                    </div>
                </div>
                <div className='DeuxiemeBarreGraphique'>
                    <div className='titreDugraphique'>
                        <p ref={refTitreCalme} className='titreDugraphiqueDeux invisible'>{titreDeux}</p>
                    </div>
                     <div ref={refCalmeVisible}  className='barreDuGraphique invisible'>
                        {stat2} %
                        <p ref={refCalmeInvisible} className='barreDuGraphiqueInvisible'>

                        </p>
                    </div>
                </div>
                <div className='TroisiemeBarreGraphique'>
                    <div className='titreDugraphique'>
                         <p ref={refTitreConcentration} className='titreDugraphiqueDeux invisible'>{titreTrois}</p>
                    </div>
                     <div ref={refConcentrationVisible} className='barreDuGraphique invisible'>
                        {stat3} %
                        <p ref={refConcentrationInvisible}  className='barreDuGraphiqueInvisible'>

                        </p>
                    </div>
                </div>
                <div className='QuatriemeBarreGraphique'>
                     <div className='titreDugraphique'>
                         <p ref={refTitreCompetition} className='titreDugraphiqueDeux invisible'>{titreQuatre}</p>
                    </div>
                     <div ref={refCompetitionVisible} className='barreDuGraphique invisible'>
                       {stat4} %
                        <p ref={refCompetitionInvisible} className='barreDuGraphiqueInvisible'>

                        </p>
                    </div>
                </div>
                <div className='CinquiemeBarreGraphique'>
                    <div className='titreDugraphique'>
                         <p ref={refTitreMotivation} className='titreDugraphiqueDeux invisible'>{titreCinq}</p>
                    </div>
                     <div ref={refMotivationVisible} className='barreDuGraphique invisible'>
                        {stat5} %
                        <p ref={refMotivationInvisible} className='barreDuGraphiqueInvisible'>

                        </p>
                    </div>
                </div>
            </div>  

        </div>
    </div>
  )
}

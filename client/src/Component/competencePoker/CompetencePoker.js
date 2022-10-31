import React from 'react'
import "./competencePoker.css"
import { useRef } from 'react'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';

export default function CompetencePoker() {

    const paraTestUn = useRef();const paraTestDeux = useRef();const paraTestTrois = useRef();const paraTestQuatre = useRef();const paraTestCinq = useRef();const paraTestSix = useRef();const paraTestSept= useRef();const paraTestHuigt = useRef();const paraTestNeuf = useRef();const paraTestDix = useRef();
    const titreAllCompetence = useRef();
    const { ref:refAllCompetence,inView:visible1 } = useInView({threshold:0.8,triggerOnce:true});

    const cliqueEUnpremiereCompetence = (element1,element2)=>{
        element1.current.disabled=true;
        element2.current.disabled=true;
        element1.current.classList.add("rotationDeBaseDeux");
        element1.current.classList.remove("deuxiemeRotations");
        element1.current.classList.add("premiereRotations");
        setTimeout(() => {
            element2.current.classList.add("deuxiemeRotations");
        }, 500);
        setTimeout(() => {
            element2.current.disabled=false;
            element1.current.classList.add("rotationDeBase");
            element1.current.classList.remove("premiereRotations");
        }, 1100);
    }

    const cliqueEDeuxpremiereCompetence = (element1,element2)=>{
        element2.current.disabled=true;
        element2.current.classList.add("rotationDeBaseDeux");
        element2.current.classList.remove("deuxiemeRotations");
        element2.current.classList.add("premiereRotations");
        setTimeout(() => {
            element1.current.classList.add("deuxiemeRotations");
        },500);
        setTimeout(() => {
            element1.current.disabled=false;
        }, 1100);
    }
    
    useEffect(() => {
      if(visible1===true){
        titreAllCompetence.current.classList.remove("invisible");
        titreAllCompetence.current.classList.add("visible");
        paraTestUn.current.classList.add("deuxiemeRotations");
        setTimeout(() => {
            paraTestTrois.current.classList.add("deuxiemeRotations");
        }, 250);
        setTimeout(() => {
            paraTestCinq.current.classList.add("deuxiemeRotations");
        }, 500);
        setTimeout(() => {
            paraTestSept.current.classList.add("deuxiemeRotations");
        }, 750);
        setTimeout(() => {
            paraTestNeuf.current.classList.add("deuxiemeRotations");
        }, 1000);
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
            <div className='enteteCompetence'>
                <div className='premiereCompetence'>
                    <button onClick={()=>cliqueEUnpremiereCompetence(paraTestUn,paraTestDeux)} ref={paraTestUn} className='eUnpremiereCompetence'>Adaptation</button>
                    <button onClick={()=>cliqueEDeuxpremiereCompetence(paraTestUn,paraTestDeux)}  ref={paraTestDeux} className='eDeuxpremiereCompetence'>Patience</button>
                </div>
            </div>
            <div className='milieuCompetence'>
                <div className='deuxiemeCompetence'>
                    <button ref={paraTestTrois} onClick={()=>cliqueEUnpremiereCompetence(paraTestTrois,paraTestQuatre)} className='eUnpremiereCompetence'>Calme</button>
                    <button ref={paraTestQuatre} onClick={()=>cliqueEDeuxpremiereCompetence(paraTestTrois,paraTestQuatre)}   className='eDeuxpremiereCompetence'>Emotion</button>
                </div>
                <div className='troisiemeCompetence'>
                    <button ref={paraTestCinq} onClick={()=>cliqueEUnpremiereCompetence(paraTestCinq,paraTestSix)}   className='eUnpremiereCompetence'>Concentration</button>
                    <button ref={paraTestSix} onClick={()=>cliqueEDeuxpremiereCompetence(paraTestCinq,paraTestSix)}   className='eDeuxpremiereCompetence'>Mathématique</button>
                </div>
                <div className='quatriemeCompetence'>
                    <button ref={paraTestSept} onClick={()=>cliqueEUnpremiereCompetence(paraTestSept,paraTestHuigt)}  className='eUnpremiereCompetence'>Compétition</button>
                    <button ref={paraTestHuigt} onClick={()=>cliqueEDeuxpremiereCompetence(paraTestSept,paraTestHuigt)}  className='eDeuxpremiereCompetence'>Sociable</button>
                </div>
            </div>
            <div className='finCompetence'>
                <div className='cinquiemeCompetence'>
                    <button ref={paraTestNeuf} onClick={()=>cliqueEUnpremiereCompetence(paraTestNeuf,paraTestDix)} className='eUnpremiereCompetence'>Motivation</button>
                    <button ref={paraTestDix} onClick={()=>cliqueEDeuxpremiereCompetence(paraTestNeuf,paraTestDix)}  className='eDeuxpremiereCompetence'>Intelligence</button>
                </div>
            </div>
        </div>
    </div>
  )
}

import React from 'react'
import roiCoeur from "../../photo/roiCoeur.svg"
import roiTrefle from "../../photo/roiTrefle.svg"
import asCoeur from "../../photo/asCoeur.svg"
import asPique from "../../photo/asPique.svg"
import asTrefle from "../../photo/asTrefle.svg"
import dameTrefle from "../../photo/dameTrefle.svg"
import dameCoeur from "../../photo/dameCoeur.svg"
import valetCarreau from "../../photo/valetCarreau.svg"
import valetTrefle from "../../photo/valetTrefle.svg"
import { Fragment } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import "./statistiqueCarte.css"

export default function Statistiquecarte() {
 const refParaInvisible1 =useRef();const refParaVisible1 =useRef();const refParaInvisible2 =useRef();const refParaVisible2 =useRef();const refParaInvisible3 =useRef();const refParaVisible3 =useRef();const refParaInvisible4 =useRef();const refParaVisible4 =useRef();const refParaInvisible5 =useRef();const refParaVisible5 =useRef();const refParaInvisible6 =useRef();const refParaVisible6 =useRef();const refParaInvisible7 =useRef();const refParaVisible7 =useRef();const refParaInvisible8 =useRef();const refParaVisible8 =useRef();const refParaInvisible9 =useRef();const refParaVisible9 =useRef();const refParaInvisible10 =useRef();const refParaVisible10 =useRef();const refParaInvisible11 =useRef();const refParaVisible11 =useRef();const refParaInvisible12 =useRef();const refParaVisible12 =useRef();const refParaInvisible13 =useRef();const refParaVisible13 =useRef();const refParaInvisible14 =useRef();const refParaVisible14 =useRef();const refParaInvisible15 =useRef();const refParaVisible15 =useRef();const refParaInvisible16 =useRef();const refParaVisible16 =useRef();const refParaInvisible17 =useRef();const refParaVisible17 =useRef();const refParaInvisible18 =useRef();const refParaVisible18 =useRef();const refParaInvisible19 =useRef();const refParaVisible19 =useRef();const refParaInvisible20 =useRef();const refParaVisible20 =useRef();
const [stat1, setstat1] = useState(1);const [stat2, setstat2] = useState(1);const [stat3, setstat3] = useState(1);const [stat4, setstat4] = useState(1);const [stat5, setstat5] = useState(1);const [stat6, setstat6] = useState(1);const [stat7, setstat7] = useState(1);const [stat8, setstat8] = useState(1);const [stat9, setstat9] = useState(1);const [stat10, setstat10] = useState(1);const [stat11, setstat11] = useState(1);const [stat12, setstat12] = useState(1);const [stat13, setstat13] = useState(1);const [stat14, setstat14] = useState(1);const [stat15, setstat15] = useState(1);const [stat16, setstat16] = useState(1);const [stat17, setstat17] = useState(1);const [stat18, setstat18] = useState(1);const [stat19, setstat19] = useState(1);const [stat20, setstat20] = useState(1);

  useEffect(() => {
   console.log(refParaInvisible14);
   console.log(refParaVisible14);
    refParaInvisible1.current.classList.add("tallerParaUn");
    refParaInvisible2.current.classList.add("tallerParaDeux");
    refParaInvisible3.current.classList.add("tallerParaTrois");
    refParaInvisible4.current.classList.add("tallerParaQuatre");
    refParaInvisible5.current.classList.add("tallerParaCinq");
    refParaInvisible6.current.classList.add("tallerParaSix");
    refParaInvisible7.current.classList.add("tallerParaSept");
    refParaInvisible8.current.classList.add("tallerParaHuight");
    refParaInvisible9.current.classList.add("tallerParaNeuf");
    refParaInvisible10.current.classList.add("tallerParaDix");
    refParaInvisible11.current.classList.add("tallerParaOnze");
    refParaInvisible12.current.classList.add("tallerParaDouze");
    refParaInvisible13.current.classList.add("tallerParaTreize");
    refParaInvisible14.current.classList.add("tallerParaQuatorze");
    refParaInvisible15.current.classList.add("tallerParaQuinze");
    refParaInvisible16.current.classList.add("tallerParaSeize");
    refParaInvisible17.current.classList.add("tallerParaDixsept");
    refParaInvisible18.current.classList.add("tallerParaDixhuight");
    refParaInvisible19.current.classList.add("tallerParaDixneuf");
    refParaInvisible20.current.classList.add("tallerParaVinght");

    
    const interval1 = setInterval(() => {
       setstat1(Math.round(refParaInvisible1.current.clientWidth/refParaVisible1.current.clientWidth*100));
    }, 100);
    const interval2 = setInterval(() => {
        setstat2(Math.round(refParaInvisible2.current.clientWidth/refParaVisible2.current.clientWidth*100));
     }, 100);
    const interval3 = setInterval(() => {
        setstat3(Math.round(refParaInvisible3.current.clientWidth/refParaVisible3.current.clientWidth*100));
     }, 100);
    const interval4 = setInterval(() => {
        setstat4(Math.round(refParaInvisible4.current.clientWidth/refParaVisible4.current.clientWidth*100));
     }, 100);
     const interval5 = setInterval(() => {
        setstat5(Math.round(refParaInvisible5.current.clientWidth/refParaVisible5.current.clientWidth*100));
     }, 100);
     const interval6 = setInterval(() => {
        setstat6(Math.round(refParaInvisible6.current.clientWidth/refParaVisible6.current.clientWidth*100));
     }, 100);
     const interval7 = setInterval(() => {
        setstat7(Math.round(refParaInvisible7.current.clientWidth/refParaVisible7.current.clientWidth*100));
     }, 100);
     const interval8 = setInterval(() => {
        setstat8(Math.round(refParaInvisible8.current.clientWidth/refParaVisible8.current.clientWidth*100));
     }, 100);
     const interval9 = setInterval(() => {
        setstat9(Math.round(refParaInvisible9.current.clientWidth/refParaVisible9.current.clientWidth*100));
     }, 100);
     const interval10 = setInterval(() => {
        setstat10(Math.round(refParaInvisible10.current.clientWidth/refParaVisible10.current.clientWidth*100));
     }, 100);
     const interval11 = setInterval(() => {
        setstat11(Math.round(refParaInvisible11.current.clientWidth/refParaVisible11.current.clientWidth*100));
     }, 100);
     const interval12 = setInterval(() => {
        setstat12(Math.round(refParaInvisible12.current.clientWidth/refParaVisible12.current.clientWidth*100));
     }, 100);
     const interval13 = setInterval(() => {
        setstat13(Math.round(refParaInvisible13.current.clientWidth/refParaVisible13.current.clientWidth*100));
     }, 100);
     const interval14 = setInterval(() => {
        setstat14(Math.round(refParaInvisible14.current.clientWidth/refParaVisible14.current.clientWidth*100));
     }, 100);
     const interval15 = setInterval(() => {
        setstat15(Math.round(refParaInvisible15.current.clientWidth/refParaVisible15.current.clientWidth*100));
     }, 100);
     const interval16 = setInterval(() => {
        setstat16(Math.round(refParaInvisible16.current.clientWidth/refParaVisible16.current.clientWidth*100));
     }, 100);
     const interval17 = setInterval(() => {
        setstat17(Math.round(refParaInvisible17.current.clientWidth/refParaVisible17.current.clientWidth*100));
     }, 100);
     const interval18 = setInterval(() => {
        setstat18(Math.round(refParaInvisible18.current.clientWidth/refParaVisible18.current.clientWidth*100));
     }, 100);
     const interval19 = setInterval(() => {
        setstat19(Math.round(refParaInvisible19.current.clientWidth/refParaVisible19.current.clientWidth*100));
     }, 100);
     const interval20 = setInterval(() => {
        setstat20(Math.round(refParaInvisible20.current.clientWidth/refParaVisible20.current.clientWidth*100));
     }, 100);
    setTimeout(() => {
        clearInterval(interval1);clearInterval(interval2);clearInterval(interval3);clearInterval(interval4);clearInterval(interval5);clearInterval(interval6);clearInterval(interval7);clearInterval(interval8);clearInterval(interval9);clearInterval(interval10);clearInterval(interval11);clearInterval(interval12);clearInterval(interval13);clearInterval(interval14);clearInterval(interval15);clearInterval(interval16);clearInterval(interval17);clearInterval(interval18);clearInterval(interval19);clearInterval(interval20);
    }, 2100);
    
  }, [])
  

  return (
    <Fragment>
        <div className='titreStatCarte'>
            <p>Statistique de combinaison de cartes de poker.</p>
        </div>
        <div className='sectionStatCarte'>
          <div className='ligneStat'>
              <div className='carteStatCarte'>
                  <p>
                      <img alt='as de coeur' src={asCoeur}></img>
                      <img alt='as de pique' src={asPique}></img>
                  </p>
                  <p>
                        contre
                  </p>
                  <p>
                      <img alt='roi de coeur' src={roiCoeur}></img>
                      <img alt='roi de trefle' src={roiTrefle}></img>
                  </p>
              </div>
              <div className='proportionStatCarte'>
                  <div ref={refParaVisible1}>
                      {stat1} %
                      <p ref={refParaInvisible1}>
                    
                      </p>
                  </div>
                  <div ref={refParaVisible2}>
                      {stat2} %
                      <p ref={refParaInvisible2}>
                        
                      </p>
                  </div>
              </div>
              <div className='explicationStat'>
                    <p>
                        Paire Supérieur contre paire inférieur.
                    </p>
              </div>
          </div>

          <div className='ligneStat'>
              <div className='carteStatCarte'>
                  <p>
                      <img alt='as de coeur' src={asCoeur}></img>
                      <img alt='as de pique' src={asPique}></img>
                  </p>
                  <p>
                        contre
                  </p>
                  <p>
                      <img alt='roi de coeur' src={roiCoeur}></img>
                      <img alt='as de trefle' src={asTrefle}></img>
                  </p>
              </div>
              <div className='proportionStatCarte'>
                  <div ref={refParaVisible3}>
                      {stat3} %
                      <p ref={refParaInvisible3}>
                    
                      </p>
                  </div>
                  <div ref={refParaVisible4}> 
                      {stat4} %
                      <p ref={refParaInvisible4}>
                        
                      </p>
                  </div>
              </div>
              <div className='explicationStat'>
                    <p>
                        Paire contre une carte de même valeur et une carte inférieur.
                    </p>
              </div>
          </div>

          <div className='ligneStat'>
              <div className='carteStatCarte'>
                  <p>
                      <img alt='as de coeur' src={asCoeur}></img>
                      <img alt='as de pique' src={asPique}></img>
                  </p>
                  <p>
                        contre
                  </p>
                  <p>
                      <img alt='dame de trefle' src={dameTrefle}></img>
                      <img alt='roi de trefle'  src={roiTrefle}></img>
                  </p>
              </div>
              <div className='proportionStatCarte'>
                  <div ref={refParaVisible5}>
                    {stat5} %
                      <p ref={refParaInvisible5}>
                    
                      </p>
                  </div>
                  <div ref={refParaVisible6}>
                    {stat6} %
                      <p ref={refParaInvisible6}>
                        
                      </p>
                  </div>
              </div>
              <div className='explicationStat'>
                    <p>
                          Paire contre deux cartes connectées de même couleur inférieures.
                    </p>
              </div>
          </div>

          <div className='ligneStat'>
              <div className='carteStatCarte'>
                  <p>
                      <img alt='as de coeur' src={asCoeur}></img>
                      <img alt='roi de coeur' src={roiCoeur}></img>
                  </p>
                  <p>
                        contre
                  </p>
                  <p>
                      <img alt='dame de coeur' src={dameCoeur}></img>
                      <img alt='dame de trefle' src={dameTrefle}></img>
                  </p>
              </div>
              <div className='proportionStatCarte'>
                  <div ref={refParaVisible7}>
                  {stat7} %
                      <p ref={refParaInvisible7}>
                    
                      </p>
                  </div>
                  <div ref={refParaVisible8}>
                  {stat8} %
                      <p ref={refParaInvisible8}>
                        
                      </p>
                  </div>
              </div>
              <div className='explicationStat'>
                    <p>
                      Deux cartes supérieures contre une paire.
                    </p>
              </div>
          </div>

          <div className='ligneStat'>
              <div className='carteStatCarte'>
                  <p>
                      <img alt='as de coeur' src={asCoeur}></img>
                      <img alt='roi de coeur' src={roiCoeur}></img>
                  </p>
                  <p>
                        contre
                  </p>
                  <p>
                      <img alt='roi de trefle' src={roiTrefle}></img>
                      <img alt='dame de trefle' src={dameTrefle}></img>
                  </p>
              </div>
              <div className='proportionStatCarte'>
                  <div ref={refParaVisible9}>
                  {stat9} %
                      <p ref={refParaInvisible9}>
                    
                      </p>
                  </div>
                  <div ref={refParaVisible10}>
                  {stat10} %
                      <p ref={refParaInvisible10}>
                        
                      </p>
                  </div>
              </div>
              <div className='explicationStat'>
                    <p>
                          Une carte commune et une carte inférieure
                    </p>
              </div>
          </div>
          <div className='ligneStat'>
              <div className='carteStatCarte'>
                  <p>
                      <img alt='as de coeur' src={asCoeur}></img>
                      <img alt='roi de trefle' src={roiTrefle}></img>
                  </p>
                  <p>
                        contre
                  </p>
                  <p>
                      <img alt='dame de trefle' src={dameTrefle}></img>
                      <img alt='valet de carreau' src={valetCarreau}></img>
                  </p>
              </div>
              <div className='proportionStatCarte'>
                  <div ref={refParaVisible11}>
                  {stat11} %
                      <p ref={refParaInvisible11}>
                    
                      </p>
                  </div>
                  <div ref={refParaVisible12}>
                  {stat12} %
                      <p ref={refParaInvisible12}>
                        
                      </p>
                  </div>
              </div>
              <div className='explicationStat'>
                    <p>
                      2 cartes supérieures contre 2 cartes inférieures
                    </p>
              </div>
          </div>

          <div className='ligneStat'>
              <div className='carteStatCarte'>
                  <p>
                      <img alt='as de coeur' src={asCoeur}></img>
                      <img alt='roi de trefle' src={roiTrefle}></img>
                  </p>
                  <p>
                        contre
                  </p>
                  <p>
                      <img alt='dame de trefle' src={dameTrefle}></img>
                      <img alt='valet de trefle'  src={valetTrefle}></img>
                  </p>
              </div>
              <div className='proportionStatCarte'>
                  <div ref={refParaVisible13}>
                  {stat13} %
                      <p ref={refParaInvisible13}>
                    
                      </p>
                  </div>
                  <div ref={refParaVisible14}>
                  {stat14} %
                      <p ref={refParaInvisible14}>
                        
                      </p>
                  </div>
              </div>
              <div className='explicationStat'>
                    <p>
                          2 cartes supérieures contre 2 cartes connectées inférieures de même couleur.
                    </p>
              </div>
          </div>

          <div className='ligneStat'>
              <div className='carteStatCarte'>
                  <p>
                      <img alt='as de coeur' src={asCoeur}></img>
                      <img alt='dame de trefle' src={dameTrefle}></img>
                  </p>
                  <p>
                        contre
                  </p>
                  <p>
                      <img alt='roi de trefle' src={roiTrefle}></img>
                      <img alt='dame de coeur' src={dameCoeur}></img>
                  </p>
              </div>
              <div className='proportionStatCarte'>
                  <div ref={refParaVisible15}>
                  {stat15} %
                      <p ref={refParaInvisible15}>
                    
                      </p>
                  </div>
                  <div ref={refParaVisible16}>
                  {stat16} %
                      <p ref={refParaInvisible16}>
                        
                      </p>
                  </div>
              </div>
              <div className='explicationStat'>
                    <p>
                        Une carte commune et une carte intercalée.
                    </p>
              </div>
          </div>

          <div className='ligneStat'>
              <div className='carteStatCarte'>
                  <p>
                      <img alt='as de coeur' src={asCoeur}></img>
                      <img alt='dame de trefle'  src={dameTrefle}></img>
                  </p>
                  <p>
                        contre
                  </p>
                  <p>
                      <img alt='roi de coeur' src={roiCoeur}></img>
                      <img alt='valet de trefle'  src={valetTrefle}></img>
                  </p>
              </div>
              <div className='proportionStatCarte'>
                  <div ref={refParaVisible17}>
                  {stat17} %
                      <p ref={refParaInvisible17}>
                    
                      </p>
                  </div>
                  <div ref={refParaVisible18}>
                  {stat18} %
                      <p ref={refParaInvisible18}>
                        
                      </p>
                  </div>
              </div>
              <div className='explicationStat'>
                    <p>
                        Une carte intercalée et une carte inférieure.
                    </p>
              </div>
          </div>

          <div className='ligneStat'>
              <div className='carteStatCarte'>
                  <p>
                      <img alt='as de coeur' src={asCoeur}></img>
                      <img alt='valet de trefle' src={valetTrefle}></img>
                  </p>
                  <p>
                        contre
                  </p>
                  <p>
                      <img alt='roi de coeur' src={roiCoeur}></img>
                      <img alt='dame de trefle' src={dameTrefle}></img>
                  </p>
              </div>
              <div className='proportionStatCarte'>
                  <div ref={refParaVisible19}>
                  {stat19} %
                      <p ref={refParaInvisible19}>
                    
                      </p>
                  </div>
                  <div ref={refParaVisible20}>
                  {stat20} %
                      <p ref={refParaInvisible20}>
                        
                      </p>
                  </div>
              </div>
              <div className='explicationStat'>
                    <p>
                          Contre 2 cartes intercalées.
                    </p>
              </div>
          </div>
      </div>
    </Fragment>
  )
}

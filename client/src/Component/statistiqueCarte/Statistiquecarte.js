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
import "./statistiqueCarte.css"

export default function Statistiquecarte() {
  return (
    <Fragment>
        <div className='titreStatCarte'>
            <p>Statistique de combinaison de cartes de poker.</p>
        </div>
        <div className='sectionStatCarte'>
          <div className='ligneStat'>
              <div className='carteStatCarte'>
                  <p>
                      <img src={asCoeur}></img>
                      <img src={asPique}></img>
                  </p>
                  <p>
                        contre
                  </p>
                  <p>
                      <img src={roiCoeur}></img>
                      <img src={roiTrefle}></img>
                  </p>
              </div>
              <div className='proportionStatCarte'>
                  <div>
                      80%
                      <p>
                    
                      </p>
                  </div>
                  <div>
                      20%
                      <p>
                        
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
                      <img src={asCoeur}></img>
                      <img src={asPique}></img>
                  </p>
                  <p>
                        contre
                  </p>
                  <p>
                      <img src={roiCoeur}></img>
                      <img src={asTrefle}></img>
                  </p>
              </div>
              <div className='proportionStatCarte'>
                  <div>
                      87%
                      <p>
                    
                      </p>
                  </div>
                  <div>
                      13%
                      <p>
                        
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
                      <img src={asCoeur}></img>
                      <img src={asPique}></img>
                  </p>
                  <p>
                        contre
                  </p>
                  <p>
                      <img src={dameTrefle}></img>
                      <img src={roiTrefle}></img>
                  </p>
              </div>
              <div className='proportionStatCarte'>
                  <div>
                      77%
                      <p>
                    
                      </p>
                  </div>
                  <div>
                      23%
                      <p>
                        
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
                      <img src={asCoeur}></img>
                      <img src={roiCoeur}></img>
                  </p>
                  <p>
                        contre
                  </p>
                  <p>
                      <img src={dameCoeur}></img>
                      <img src={dameTrefle}></img>
                  </p>
              </div>
              <div className='proportionStatCarte'>
                  <div>
                      49%
                      <p>
                    
                      </p>
                  </div>
                  <div>
                      51%
                      <p>
                        
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
                      <img src={asCoeur}></img>
                      <img src={roiCoeur}></img>
                  </p>
                  <p>
                        contre
                  </p>
                  <p>
                      <img src={roiTrefle}></img>
                      <img src={dameTrefle}></img>
                  </p>
              </div>
              <div className='proportionStatCarte'>
                  <div>
                      73%
                      <p>
                    
                      </p>
                  </div>
                  <div>
                      27%
                      <p>
                        
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
                      <img src={asCoeur}></img>
                      <img src={roiTrefle}></img>
                  </p>
                  <p>
                        contre
                  </p>
                  <p>
                      <img src={dameTrefle}></img>
                      <img src={valetCarreau}></img>
                  </p>
              </div>
              <div className='proportionStatCarte'>
                  <div>
                      64%
                      <p>
                    
                      </p>
                  </div>
                  <div>
                      36%
                      <p>
                        
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
                      <img src={asCoeur}></img>
                      <img src={roiTrefle}></img>
                  </p>
                  <p>
                        contre
                  </p>
                  <p>
                      <img src={dameTrefle}></img>
                      <img src={valetTrefle}></img>
                  </p>
              </div>
              <div className='proportionStatCarte'>
                  <div>
                      60%
                      <p>
                    
                      </p>
                  </div>
                  <div>
                      40%
                      <p>
                        
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
                      <img src={asCoeur}></img>
                      <img src={dameTrefle}></img>
                  </p>
                  <p>
                        contre
                  </p>
                  <p>
                      <img src={roiTrefle}></img>
                      <img src={dameCoeur}></img>
                  </p>
              </div>
              <div className='proportionStatCarte'>
                  <div>
                      70%
                      <p>
                    
                      </p>
                  </div>
                  <div>
                      30%
                      <p>
                        
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
                      <img src={asCoeur}></img>
                      <img src={dameTrefle}></img>
                  </p>
                  <p>
                        contre
                  </p>
                  <p>
                      <img src={roiCoeur}></img>
                      <img src={valetTrefle}></img>
                  </p>
              </div>
              <div className='proportionStatCarte'>
                  <div>
                      60%
                      <p>
                    
                      </p>
                  </div>
                  <div>
                      40%
                      <p>
                        
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
                      <img src={asCoeur}></img>
                      <img src={valetTrefle}></img>
                  </p>
                  <p>
                        contre
                  </p>
                  <p>
                      <img src={roiCoeur}></img>
                      <img src={dameTrefle}></img>
                  </p>
              </div>
              <div className='proportionStatCarte'>
                  <div>
                      58%
                      <p>
                    
                      </p>
                  </div>
                  <div>
                      42%
                      <p>
                        
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

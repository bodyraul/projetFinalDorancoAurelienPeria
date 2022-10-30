import React from 'react'
import "./competencePoker.css"

export default function CompetencePoker() {
  return (
    <div className='containerCompetencePoker'>
        <div className='titreCompetencePoker'>
            <p>
                Compétences nécéssaires pour jouer au poker
            </p>
        </div>
        <div className='allCompetencePoker'>
            <div className='premiereComptence'>
                <p> Concentration</p>
            </div>
            <div className='troisComptence'>
                <p>Mathématiques</p>
                <p>Compétition</p>
                <p>Emotions</p>
            </div>
            <div className='derniereComptence'>
                <p>Motivation</p>
            </div>
        </div>
    </div>
  )
}

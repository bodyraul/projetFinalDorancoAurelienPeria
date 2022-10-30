import React from 'react'
import Contact from"../contact/Contact"
import Statistiquecarte from '../../Component/statistiqueCarte/Statistiquecarte'
import CompetencePoker from '../../Component/competencePoker/CompetencePoker'


export default function Accueil() {
  return (
    <div>
          <Statistiquecarte/>
          <CompetencePoker/>
          <Contact/>
    </div>
  )
}

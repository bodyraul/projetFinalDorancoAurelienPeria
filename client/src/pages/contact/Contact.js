import React from 'react'
import './contact.css'
import { useRef } from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import telephone from"../../photo/telephone2.svg"
import mail from"../../photo/mail.svg"
import linkedin from "../../photo/linkedin.svg"

export default function Contact() {

    const { ref:refDivInvisible,inView:visible5 } = useInView({threshold:0.8,triggerOnce:true});
    const [booleanTitre, setbooleanTitre] = useState(false);
    const allInfoPhotoContact =useRef();
    const allPhotoContact =useRef();
    const refContainerContacts = useRef();
    const refTitreContact = useRef();
    const refCopiright = useRef();

    const [messageTitre, setmessageTitre] = useState("Notre site vous plaît?");

    

    useEffect(() => {
        if(visible5===true){
            refContainerContacts.current.classList.add("ApparitionBlocContact");
            setTimeout(() => {
                allPhotoContact.current.classList.add("ApparitionLogoContact");
            }, 1000);
            setTimeout(() => {
                allInfoPhotoContact.current.classList.add("ApparitionLogoContact");
            }, 1500);
            setTimeout(() => {
                refTitreContact.current.classList.add("apparatitionDuTitreContact");
            }, 2500);
            setTimeout(() => {
                refTitreContact.current.classList.remove("apparatitionDuTitreContact");
                refTitreContact.current.classList.remove("invisibleContact");
                refTitreContact.current.classList.add("disparitionDuTitreContact");
            }, 4000);
            setTimeout(() => {
                setbooleanTitre(true);
            }, 5000);
            setTimeout(() => {
                refTitreContact.current.classList.remove("disparitionDuTitreContact");
                refTitreContact.current.classList.add("apparatitionDuTitreContact");
            }, 5500);
            setTimeout(() => {
                refCopiright.current.classList.add("apparatitionDuTitreContact");
            }, 6500);
        }
    }, [visible5])

    useEffect(() => {
        if(booleanTitre){
            setmessageTitre("Contactez-nous");
        }
    }, [booleanTitre])


  return (
    <section >
        <div ref={refDivInvisible}  className='contactBasDePage '>
            <div className='hautPageContact'>
                <div ref={refTitreContact} className='titreContact invisibleContact'>
                    <p>{messageTitre}</p>
                </div>
                <div ref={allPhotoContact} className='photoContact'>
                    <img alt='telephone' src={telephone}></img>
                    <img alt='mail' src={mail}></img>
                    <img alt='linkedin' src={linkedin}></img>
                </div>
                <div ref={allInfoPhotoContact} className='contenuContact'>
                    <p>0101010101</p>
                    <p>
                        <a href="mailto:aurelien.peria@gmail.com">aurelien.peria@gmail.com</a>
                    </p>
                    <p>
                         <a  target="blank" href='https://www.linkedin.com/in/aur%C3%A9lien-peria-424224187/'>Linkedin</a> 
                    </p>
                </div>
            </div>
            <div ref={refCopiright} className='basDePageContact invisibleContact'>
                <p>Copyright @ 2022.Tous droits réservés à AURELIEN PERIA </p>
            </div>
        </div>
        <div ref={refContainerContacts} className='contactBasDePage2'>

        </div>
    </section>
  )
}

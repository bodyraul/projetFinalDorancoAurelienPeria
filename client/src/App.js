import React from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Accueil from './pages/Accueil/Accueil';
import Admin from './pages/Admin/Admin';
import Connexion from "./pages/Connexion/Connexion"
import Inscription from './pages/Inscription/Inscription';
import Navbar from './Component/Navbar';
import { AuthContext } from './Context/AuthContext';
import { useState } from 'react';
import SignalementMessage from './pages/Admin/SignalementMessage';
import SignalementPost from './pages/Admin/SignalementPost';
import DetailsSignalementPost from './pages/Admin/DetailsSignalementPost';
import DetailsSignalementMsg from './pages/Admin/DetailsSignalementMsg';
import AccueilForum from './pages/forum/AccueilForum';
import MessagePost from '../src/pages/messagePost/MessagesDesPost';
import Contact from './pages/contact/Contact';



export default function App() {

  const initToken = localStorage.getItem("token")?localStorage.getItem("token"):"";
  const [token, settoken] = useState(initToken);
 
  return (
    <div>
        
        <BrowserRouter>
            <AuthContext.Provider value={{token,settoken}}>
            <Navbar/> 
            <Routes>
                <Route path="/" element={<Accueil/>} />
                <Route path="/inscription" element={<Inscription/>} />
                <Route path="/connexion" element={<Connexion/>} />
                <Route path="/forum" element={<AccueilForum/>} />
                <Route path="/forum/messagePost/:id" element={<MessagePost/>} />
                <Route path="/admin" element={<Admin/>} />
                <Route path="/admin/signalementMessage" element={<SignalementMessage/>} />
                <Route path="/admin/signalementPost" element={<SignalementPost/>} />
                <Route path="/admin/signalementPost/details/:id" element={<DetailsSignalementPost/>} />
                <Route path="/admin/signalementMessage/details/:id" element={<DetailsSignalementMsg/>} />
            </Routes>
            </AuthContext.Provider>
        </BrowserRouter>
    </div>
  )
}


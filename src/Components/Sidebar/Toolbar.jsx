import React, { useContext, useEffect } from 'react'
import {AiOutlineHome, AiOutlineMenu} from 'react-icons/ai';
import './Toolbar.css'
import { useNavigate } from 'react-router-dom';
import notesContext from '../../Context/notes/NotesContext';

export default function Toolbar({openSidebar}) {
  const context = useContext(notesContext);
  const {getUser,user1 , setAuth, setNote , setUser1} = context;



  useEffect(() => {
    getUser();
    console.log(user1);
  },[])

  const navigate = useNavigate();
  //  console.log(loading)
  let hadleLogout=()=>{
    localStorage.removeItem('auth-token');
    setAuth(null);
    setNote({ title: "", description: "", tag: "" });
    setUser1({ name:"", email:""});
    navigate('/login');
  }

  return (
    <div>
        <div className="tool-bar">
            <div className="burger" onClick={openSidebar}>
             <AiOutlineMenu/>
            </div>
            <div className="bar-title">
               <AiOutlineHome/>
            </div>
            <div className="user-name">
            <p  className="user-name-text"
            >
            {user1.name}
            </p>
            </div>
            <div className="logout-btn">
            <button onClick={hadleLogout}> LogOut </button>
            </div>
        </div>

    </div>
  )
}

import React, { useContext } from "react";
import Backdrop from "../Sidebar/Backdrop";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";
import { Notespage } from "./Notespage";
import { Loader } from "../Loader/Loader";
import notesContext from "../../Context/notes/NotesContext";
import { useNavigate } from "react-router-dom";

export default function NotesSpace() {
  const context = useContext(notesContext);
  const navigate = useNavigate()
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };

  // if(!localStorage.getItem('auth-token')) navigate('/login')
  return (
    <div>
      {/* <Loader/> */}
      <Backdrop sidebar={sidebar} closesidebar={toggleSidebar} />
      <Sidebar sidebar={sidebar} />
      <Notespage sidebar={sidebar} openSidebar={toggleSidebar} />
    </div>
  );
}

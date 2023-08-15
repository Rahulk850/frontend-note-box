import { useContext, useEffect, useState } from "react";
import "./App.css";
import { About } from "./Components/About/About";
import { Hero } from "./Components/Hero/Hero";
import { Loginform } from "./Components/Loginform/Loginform";
import { Navbar } from "./Components/Navbar/Navbar";
import { Services } from "./Components/Services/Services";
import Backdrop from "./Components/Sidebar/Backdrop";
import Sidebar from "./Components/Sidebar/Sidebar";
import Toolbar from "./Components/Sidebar/Toolbar";
import { Signupform } from "./Components/Signupform/Signupform";
import { Notespage } from "./Components/Notespage/Notespage";
import { useRef } from "react";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import NotesSpace from "./Components/Notespage/NotesSpace";
import NotesState from "./Context/notes/NotesState";
import notesContext from "./Context/notes/NotesContext";

function App() {
  return (
    <>
      <NotesState>
        <BrowserRouter>
          {/* <Navbar/> */}
          {/* <NotesSpace /> */}
          {/* <Loginform/> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Loginform/>} />
            <Route path="/signup" element={<Signupform />} />
            <Route path="/allnotes" element={<NotesSpace />} />
          </Routes>

          {/* <Loginform/> */}
          {/* <Signupform/> */}
        </BrowserRouter>
      </NotesState>
    </>
  );
}

export default App;

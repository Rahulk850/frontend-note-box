import "./App.css";
import { Loginform } from "./Components/Loginform/Loginform";
import { Signupform } from "./Components/Signupform/Signupform";
import { BrowserRouter, Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import NotesSpace from "./Components/Notespage/NotesSpace";
import NotesState from "./Context/notes/NotesState";
import { Protected } from "./Components/Protected/Protected";


// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from 'react-toastify';
// import React from "react";
// import 'react-toastify/dist/ReactToastify.css';

function App() {

  // const navigate = useNavigate();
  // const showToastMessage = () => {
  //   toast.error('error Notification !', {
  //       position: toast.POSITION.TOP_CENTER
  //   });}

  // const notify = () => toast("Wow so easy!");
  return (
    <>
    {/* <button onClick={showToastMessage}>
       this is toastify button
       <ToastContainer/>
      </button> */}
      <NotesState>
        <BrowserRouter>
          {/* <Navbar/> */}
          {/* <NotesSpace /> */}
          {/* <Loginform/> */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Loginform/>} />
            <Route path="/signup" element={<Signupform />} />
            <Route path="/allnotes" element= {<Protected/>}>
            <Route path="/allnotes" element={<NotesSpace />} />
            </Route>
          </Routes>

          {/* <Loginform/> */}
          {/* <Signupform/> */}
        </BrowserRouter>
      </NotesState>
    </>
  );
}

export default App;

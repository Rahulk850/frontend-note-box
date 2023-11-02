import React, { useContext } from 'react'
import "./Navbar.css"
import logo from "./diary.jpg"
import { HashLink, NavHashLink } from 'react-router-hash-link';
import { useRef } from 'react'
import { Link } from 'react-router-dom'
// import notesContext from '../../Context/notes/NotesContext';
export const Navbar = () => {

  // const ref = useRef(null);
  // const handleClick = () => {
  //   ref.current?.scrollIntoView({behavior: 'smooth'});

  // }/

  // const con = useContext(notesContext);
  // console.log(con);

  // useEffect(() => {
  //    con.update();
  //   },[])

  //   console.log(con.state);
  return (
    <>

     <div className="container">
      <div className="logo-container">
        <img src={logo} alt="#" />
      </div>
      <div className="list-items">
        <li><HashLink smooth to="/#home">HOME</HashLink></li>
        <li><HashLink smooth to="/#about">ABOUT</HashLink></li>
        <li><HashLink smooth to="/#services">SERVICES</HashLink></li>
        <li><Link smooth to="/contact">CONTACT</Link></li>
      </div>
      <div className="login-signup">
        <button className="login"><Link to="/login">LOGIN</Link></button>
        <button  className="signup"><Link to="/signup">SIGNUP</Link></button>
      </div>
     </div>
    </>
  )
}

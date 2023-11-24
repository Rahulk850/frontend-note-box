// import { useBeforeUnload } from "react-router-dom";
import NotesContext from "./NotesContext";
import {  useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

const NotesState = (props) => {

  const host = "https://note-box.onrender.com";
  // const initialnotes = [];
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const [id, setId] = useState();
  const [loading, setLoading] = useState(false);
  const [login, setLogin] = useState({ email: "", password: "" });
  const [sign, setSign] = useState({name:"",email:"",password:""});
  const initailuser = { name:"", email:""};
  const [user1, setUser1] = useState(initailuser);
  const [auth , setAuth] = useState(false);

  const [succes, setSucces] = useState(null);
  const [message, setMessage] = useState({message:""});

  const errorValue = useRef(null);

  const successValue = useRef("");



  /// SIGNUP <==> creatign a new user ////////////////////////
  const userSignup = async ({name,email,password }) => {
    setLoading(true);
    const url = `${host}/api/auth/createuser`;
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({name,email,password}),
    });
    const json = await response.json();


    setAuth(json.authtoken);

    if (json.success) {
      localStorage.setItem("auth-token", json.authtoken);
      setSucces(true);
      successValue.current = true;
      // console.log("success true");
    }
    console.log(json.success);


    if (!json.success){
         setSucces(json.success);
         successValue.current = false;
         errorValue.current= json.errors[0]['msg'];
         console.log("yerror",errorValue.current);
        console.log("in state",successValue);

    }
    // console.log(succes);
    setLoading(false);
  };


  // Login //////////////////////////////
  const userLogin = async ({ email, password }) => {
    console.log("userLogin running.....");
    setLoading(true);
    const url = `${host}/api/auth/login`;
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await response.json();
    setAuth(json.authtoken);
    // console.log(json.success);
    // console.log(json.errors);
    if(json.success === true){
      localStorage.setItem("auth-token", json.authtoken);
    };

    setSucces(json.success);
    // console.log(json.message);
    setMessage(json.message);
    setTimeout(() => {
      // console.log(message);
      console.log("inside "+succes);
      console.log(json.error);
    }, 2000);
    // if (json.success===true) {
    //   console.log('inside')
    //   setSucces(json.success);
    // }
    console.log("outside "+succes);
    setLoading(false);//success
  };


  /////////////////getuserdetails////////////
  const getUser = async () => {
    console.log("getuser is running.....");
    const url = `${host}/api/auth/getuser`;
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("auth-token"),

      },

    });
    const json = await response.json();

    // console.log(json.user.name);
    // setUser(json);
    setUser1({
      name: json.user.name,
      email: json.user.email
    });

    console.log(user1);
    // if (json.success) {
    //   localStorage.setItem("auth-token", json.authtoken);
    //   setSucces(true);
    // }
    // console.log(succes);
  };

////////////////////////////////////////////////
  //fetch all notes
  const fetchAll = async () => {
    console.log("fetchAll notes is running");
    const url = `${host}/api/notes/fetchallnotes`;
    const response = await fetch(url, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",

        "auth-token": localStorage.getItem("auth-token"),

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const json = await response.json();
    //  console.log(json);
    setNotes(json);
    // setNotes(notes.concat(note));
    //   console.log(notes)
  };

  // adding the notes
  const addNote = async ({ title, description, tag }) => {
    console.log("adding a new note");
    setLoading(true);
    const url = `${host}/api/notes/addnotes`;
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem("auth-token"),

        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const note = await response.json();

    // console.log(res);

    setNotes(notes?.concat(note));
    setId(note._id);
    // setNote(note);
    console.log(notes);
    console.log("note is added");
    setLoading(false);
  };
  /////////////////////////////////////////////////////

  //deleting the notes

  const deleteNote = async (id) => {
    const url = `${host}/api/notes/deletenotes/${id}`;
    const response = await fetch(url, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      headers: {
        "Content-Type": "application/json",
        "auth-token":localStorage.getItem("auth-token"),
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    const json = await response.json();
    console.log(json);

    console.log("deleting node with id " + id);
    const newnotes = notes.filter((notes) => {
      return notes._id !== id;
    });
    setNotes(newnotes);
  };

  //updatigng the notes
  const updateNote = async (id, { title, description, tag }) => {
    if (id) {
      const url = `${host}/api/notes/updatenotes/${id}`;
      setLoading(true);
      console.log("updating the note");
      const response = await fetch(url, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        headers: {
          "Content-Type": "application/json",

          "auth-token":localStorage.getItem("auth-token"),
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },

        body: JSON.stringify({ title, description, tag }),
      });
      const json = await response.json();
      console.log(json);
      setLoading(false);
      if (json) fetchAll();
    } else {
      addNote({ title, description, tag });
      setLoading(false);
    }
    // if (json) setTimeout(() => setLoading(false), 500);
    console.log("note is updated");

    // for (let index = 0; index < notes.length; index++) {
    //   const element = notes[index];
    //   if (element._id === id) {
    //     element.title = title;
    //     element.description = description;
    //     element.tag = tag;
    //   }
    // }
  };
  return (
    <NotesContext.Provider
      value={{
        note,
        setNote,
        notes,
        addNote,
        deleteNote,
        updateNote,
        fetchAll,
        id,
        setId,
        loading,
        setLoading,
        userLogin,
        login,
        setLogin,
        succes,
        setSucces,
        userSignup,
        setSucces,
        sign,
        setSign,
        getUser,
        user1,
        setUser1,
        auth,
        setAuth,
        message,
        successValue,
        errorValue
      }}
    >
      {props.children}
    </NotesContext.Provider>
  );
};

export default NotesState;

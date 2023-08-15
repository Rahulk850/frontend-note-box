import React, { useEffect, useState } from "react";
import { useContext } from "react";
import {IoIosAddCircleOutline} from "react-icons/io"
import {BiBookOpen} from "react-icons/bi"
import notesContext from "../../Context/notes/NotesContext";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiEdit } from "react-icons/bi";
import { Loader } from "../Loader/Loader";

export default function Sidebar({ sidebar }) {
  const context = useContext(notesContext);
  const { notes, deleteNote, updateNote, fetchAll, setNote, id, setId, note } =
    context;
  const [loader, setLoader] = useState(false);
  console.log(loader);

  useEffect(() => {
    fetchAll();
    console.log(notes)
  }, [note.title || note.description]);

  const UpdateNote = (currentnote) => {
    // console.log('sidebar')
    setLoader(true);
    // console.log(note,currentnote ,id);
    setTimeout(() => {
      setId(currentnote._id);
      setNote(currentnote);
      setLoader(false);
    }, 1000);
  };

  const DeleteNote = (did) => {
    console.log("called deleted", did);
    deleteNote(did);
    setNote({ title: "", description: "", tag: "" });
    // console.log(note);
    console.log(deleteNote);
  };

  const newEntry = () => {
    setId(null);
    setNote({ title: "", description: "", tag: "" });
    console.log("id" + id);
  };

  // console.log(notes);
  return (
    <div>
      <div className={sidebar ? "sidebar sidebar--open" : "sidebar"}>
        {/* <div className="sidebar sidebar--open"> */}
        <li  style={{
          color:"ffffff",
          position:"sticky",
          top:0,
          zIndex:80,
          background:"#353a42"
        }}>
          <BiBookOpen className="notes-list-icon"/>
          Notes List
        </li>
        <li style={{
          position:"sticky",
          top:"3rem",
          zIndex:80,
          background:"#353a42"
        }} onClick={() => newEntry()}>
          <IoIosAddCircleOutline  className="notes-list-icon newEntry" />
          New Entry
        </li>
        {/* <li> */}

        {
          notes.length>0 &&

          notes.map((noteitem, index) => {
            return (
              <li key={index} className="notes-list">
                <p
                  className="notes-list-title"
                  onClick={() => UpdateNote(noteitem)}
                  >
                  {noteitem.title}
                </p>
                <RiDeleteBinLine
                  className="notes-list-icon deleteIcon"
                  onClick={() => DeleteNote(noteitem._id)}
                  />
                {/* <BiEdit
                  className="notes-list-icon"
                  onClick={() => UpdateNote(noteitem)}
                /> */}
              </li>
            );
          })
        }


        {/* </li>
        <li>Note - 2</li>
            <li>Note - 3</li>
            <li>Note - 4</li> */}
      </div>
      {loader && <Loader />}
    </div>
  );
}

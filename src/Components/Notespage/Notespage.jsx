import React, { useContext } from "react";
import "./Notespage.css";
import { BsPen } from "react-icons/bs";
import Toolbar from "../Sidebar/Toolbar";
import notesContext from "../../Context/notes/NotesContext";

export const Notespage = ({ sidebar, openSidebar }) => {
  const context = useContext(notesContext);
  const {
    updateNote,
    note,
    setNote,
    id,
    loading
  } = context;

  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    updateNote(id, note);

    // console.log(note)
    // fetchAll();
    // setLoading(false)
    console.log(note);
  };
  return (
    <div
      className={sidebar ? "notes-body notes-container--open" : "notes-body"}
    >
      <Toolbar openSidebar={openSidebar} />

      <div className={sidebar ? "notes-container" : "notes-container"}>
        <div className="head-note">
          <div className="pen-icon1">
            <BsPen className="pen-icon" />
          </div>
          <div className="head-text">
            <textarea
              className="textarea-heading"
              rows={1}
              placeholder="Enter Title"
              name="title"
              onChange={onChange}
              value={note.title}
              onBlur={(e) => handleBlur(e)}
            ></textarea>
            {loading && (
              <img className="img-spinner" src={require("./spinner.gif")} />
            )}
          </div>
        </div>
        <textarea
          className="textarea-details"
          placeholder="Write your notes ❤️"
          name="description"
          onChange={(e) => onChange(e)}
          onBlur={(e) => handleBlur(e)}
          // onKeyDown={(e)=>handleClick(e)}
          value={note.description}
          // on={handleClick}
        ></textarea>
      </div>
    </div>
  );
};

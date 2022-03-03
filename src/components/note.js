import React from "react";
import { MdDeleteForever } from "react-icons/md";
const Note = ({ id, text, date, handleDelNote }) => {
  return (
    <div className="note">
      <span>{text}</span>
      <div className="note_footer">
        <small>{date}</small>
        <MdDeleteForever
          className="delIcon"
          size="1.3em"
          onClick={() => handleDelNote(id)}
        />
      </div>
    </div>
  );
};

export default Note;

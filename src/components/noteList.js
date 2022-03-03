import React from "react";
import AddNote from "./addNote";
import Note from "./note";

const NoteList = ({ notes, handleAddnote, handleDelNote }) => {
  return (
    <div className="note_list">
      {notes.map((item, key) => (
        <Note
          key={key}
          id={item.id}
          text={item.text}
          date={item.date}
          handleDelNote={handleDelNote}
        />
      ))}
      <AddNote handleAddnote={handleAddnote} />
    </div>
  );
};

export default NoteList;

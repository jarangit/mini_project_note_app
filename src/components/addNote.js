import React, { useState } from "react";
const AddNote = ({ handleAddnote }) => {
  const [NoteText, setNoteText] = useState("");
  const characterLimit = 200;
  function handleChange(e) {
    if ((characterLimit - e.target.value.length >= 0)) {
      setNoteText(e.target.value);
    }
  }
  function handleSaveClick() {
    if (NoteText.trim().length > 0) {
      handleAddnote(NoteText);
      setNoteText("");
    }
  }
  return (
    <div className="note new">
      <textarea
        onChange={handleChange}
        value={NoteText}
        name="8"
        id=""
        cols="10"
        rows="10"
        placeholder="Type to add your note..."
      />
      <div className="note_footer">
        <small>{characterLimit - NoteText.length} remmining</small>
        <button className="save" onClick={handleSaveClick}>
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNote;

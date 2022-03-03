import "./App.css";
import Note from "./components/note";
import NoteList from "./components/noteList";
import { useState } from "react";
import { nanoid } from "nanoid";
import Search from "./components/search";

function App() {
  const [notes, setNote] = useState([
    {
      id: nanoid(),
      text: "This is my first note",
      date: "15/45/2102",
    },
    {
      id: nanoid(),
      text: "This is my Second note",
      date: "15/45/2102",
    },
    {
      id: nanoid(),
      text: "Today is a good day for me",
      date: "15/45/2102",
    },
    {
      id: nanoid(),
      text: "If you think, You have to do",
      date: "15/45/2102",
    },
  ]);
  const [SearchText, setSearchText] = useState("");
  console.log(SearchText);
  console.log(notes);
  function addNote(text) {
    const data = new Date();

    const newNote = {
      id: nanoid(),
      text: text,
      date: data.toLocaleDateString(),
    };

    const newNotes = [...notes, newNote];
    setNote(newNotes);
  }

  function delNote(id) {
    const filter = notes.filter((note) => note.id !== id);
    setNote(filter);
  }

  return (
    <div className="jr_container">
      <Search handleSearch={setSearchText} />
      <NoteList
        handleAddnote={addNote}
        notes={notes.filter((note) =>
          note.text.toLowerCase().includes(SearchText)
        )}
        handleDelNote={delNote}
      />
    </div>
  );
}

export default App;

import "./App.css";
import Note from "./components/note";
import NoteList from "./components/noteList";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import Search from "./components/search";
import Header from "./components/header";

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
  const [DarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("react-notes-app-data", JSON.stringify(notes));
  }, [notes]);

  console.log(SearchText);
  console.log(DarkMode);
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
    <div className={`${DarkMode && "dark_mode"}`}>
      <div className="jr_container">
        <Header handleToggleDarkNode={setDarkMode} />
        <Search handleSearch={setSearchText} />
        <NoteList
          handleAddnote={addNote}
          notes={notes.filter((note) =>
            note.text.toLowerCase().includes(SearchText)
          )}
          handleDelNote={delNote}
        />
      </div>
    </div>
  );
}

export default App;

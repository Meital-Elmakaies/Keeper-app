import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {

  const [notes, setNotes] = useState([]);



  function addNote(inputNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, inputNote];
    });
  }

  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea add={addNote} />
      {notes.map((noteItem, index) => {
        return(
      <Note
       key={index}
        id={index}
       title={noteItem.title} 
       note={noteItem.content}
      onChecked={deleteNote} />
      );
      })}
      <Footer />
    </div>
  );
}

export default App;
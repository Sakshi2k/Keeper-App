import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  var [notes, setNotes] = useState([]);

  function handleClick(inputText, inputContent) {
    setNotes((prevNotes) => {
      return [
        ...prevNotes,
        {
          title: inputText,
          desc: inputContent
        }
      ];
    });
  }

  function deleteItem(index) {
    setNotes((notes) => {
      return notes.filter((note, indexofArr) => {
        return indexofArr !== index;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={handleClick} />
      {notes.map((note, index) => {
        return (
          <Note
            key={index}
            noteIndex={index}
            title={note.title}
            content={note.desc}
            onDelete={deleteItem}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;

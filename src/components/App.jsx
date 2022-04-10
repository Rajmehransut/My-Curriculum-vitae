import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import useVisiblityToggle from "./useVisiblityToggler";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }
  function deleteNote(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }
  const [contactCardComponent, toggleCardVisiblity] = useVisiblityToggle(
    <CreateArea onAdd={addNote} />,
    true
  );
  return (
    <div>
      <div>
        <Header />

        {notes.map((noteItem, index) => {
          return (
            <Note
              key={index}
              id={index}
              name={noteItem.name}
              address={noteItem.address}
              discrip={noteItem.discrip}
              mb_no={noteItem.mb_no}
              img={noteItem.img}
              onDelete={deleteNote}
            />
          );
        })}

        <Footer />
      </div>
      <button className="toggler" onClick={toggleCardVisiblity}>
        +
      </button>
      <div>{contactCardComponent}</div>
    </div>
  );
}

export default App;

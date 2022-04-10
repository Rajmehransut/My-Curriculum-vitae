import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    name: "",
    address: "",
    discrip: "",
    mb_no: "",
    img: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      name: "",
      address: "",
      discrip: "",
      mb_no: "",
      img: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="name"
          onChange={handleChange}
          value={note.name}
          placeholder="Name"
        />
        <textarea
          name="address"
          onChange={handleChange}
          value={note.address}
          placeholder="Address"
        />
        <textarea
          name="discrip"
          onChange={handleChange}
          value={note.discrip}
          placeholder="Discription"
        />
        <textarea
          name="mb_no"
          onChange={handleChange}
          value={note.mb_no}
          placeholder="Contect"
        />
        <textarea
          name="img"
          onChange={handleChange}
          value={note.img}
          placeholder="Your Image link"
        />
        <button onClick={submitNote}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;

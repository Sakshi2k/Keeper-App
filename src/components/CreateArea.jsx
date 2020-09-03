import React, { useState } from "react";

function CreateArea(props) {
  const [titleText, setTitle] = useState("");
  const [contentText, setContent] = useState("");

  function handleChange1(event) {
    var newTitle = event.target.value;
    setTitle(newTitle);
  }

  function handleChange2(event) {
    var newContent = event.target.value;
    setContent(newContent);
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange1}
          placeholder="Title"
          value={titleText}
          required
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange2}
          value={contentText}
          required
        />
        <button
          onClick={(event) => {
            props.addNote(titleText, contentText);
            setTitle("");
            setContent("");
            event.preventDefault();
          }}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;

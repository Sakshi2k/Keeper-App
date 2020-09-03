import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const [titleText, setTitle] = useState("");
  const [contentText, setContent] = useState("");
  const [cursorClicked, setCursorClicked] = useState(false);

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
      <form className="create-note">
        <input
          name="title"
          onChange={handleChange1}
          placeholder="Title"
          value={titleText}
          onClick={() => {setCursorClicked(true)}}
          autocomplete="off"
          required
        />
        {cursorClicked && <textarea                                   // conditionally rendering
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange2}
          value={contentText}
          autocomplete="off"
        /> }
        <Zoom in={cursorClicked}>
          <Fab
            onClick={(event) => {
              props.addNote(titleText, contentText);
              setTitle("");
              setContent("");
              // event.preventDefault();
              setCursorClicked(false)
            }}
          >
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;

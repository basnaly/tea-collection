import React, { useState } from "react";
import EditInput from "./EditInput";

const EditableText = (props) => { //props from TeaItem

  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState(props.text);

  const openEdit = () => setIsOpen(true); 

  const close = () => setIsOpen(false);

  const save = (newText) => {
    setText(newText);
    props.onSave(newText);
  }

  return (
    <div>
      { isOpen ? <EditInput text={ text } save={ save } close={ close }/> 
               : <div onClick={ openEdit }>{ text }</div>}
    </div>
  )
}

export default EditableText;

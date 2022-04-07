import React, { useState } from "react";
import { Button } from "react-bootstrap";

const EditInput = (props) => { // props from EditableText

    const [editInput, setEditInput] = useState(props.text); 

    const onSubmit = (e) => {
        e.preventDefault();

        console.log(editInput)

        props.save(editInput);

        props.close();
        
    }

    return(
        <div className="d-flex align-items-center">
            <input
                name="editInput"
                placeholder="Enter text"
                value={ editInput } //typed in input
                onChange={e => setEditInput(e.target.value)}
            />
            <Button className="mx-2"
                        onClick={ onSubmit }
                        variant={ 'info' } size='sm' >
                    Save
            </Button>
        </div>
    )
}

export default EditInput;

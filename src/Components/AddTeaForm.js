import React, { useState } from "react";
import { Button, Dropdown } from 'react-bootstrap';
import { useDispatch } from "react-redux";

import { AddItem } from "../Actions/TeaAction"; 

const AddTeaForm = (props) => { //props from TeaList

    const [name, setName] = useState('');
    const [type,setType] = useState('');
    const [price, setPrice] = useState('');
    const [amount, setAmount] = useState('');

    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();

        let addedTea = {
            id: new Date().getTime(),
            name: name,
            type: type,
            price: price,
            amount: amount
        }

        dispatch(AddItem(addedTea)); 

        props.close();
    }

    return (
        <div className="d-flex flex-column px-2 py-3">
            <form className="d-flex flex-column">
                <label className="d-flex justify-content-between py-1">Name
                    <input className="mx-2" 
                        type='text'
                        value={ name }
                        onChange={ (e) => setName(e.target.value)}
                    />
                </label>

                <label className="d-flex justify-content-between py-1 align-items-center">Type
                    <Dropdown className="mx-2"
                        onSelect={ (param) => setType(param) }>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                        { type }
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="black">Black Tea</Dropdown.Item>
                            <Dropdown.Item eventKey="green">Green Tea</Dropdown.Item>
                            <Dropdown.Item eventKey="white">White Tea</Dropdown.Item>
                            <Dropdown.Item eventKey="puer">Puer tea</Dropdown.Item>   
                            <Dropdown.Item eventKey="smoked">Smoked</Dropdown.Item>  
                        </Dropdown.Menu>
                    </Dropdown>
                </label>

                <label className="d-flex justify-content-between py-1">Price
                    <input className="mx-2"
                        type='number'
                        value={ price }
                        onChange={ (e) => setPrice(e.target.value)}
                    />
                </label>

                <label className="d-flex justify-content-between py-1">Amount
                    <input className="mx-2"
                        type='text'
                        value={ amount }
                        onChange={ (e) => setAmount(e.target.value)}
                    />
                </label>
            </form>
            <Button onClick={ submit }
                    variant={ 'info' }
                    className="align-self-center">
                    Submit
            </Button>
            
        </div>
    )
}

export default AddTeaForm;
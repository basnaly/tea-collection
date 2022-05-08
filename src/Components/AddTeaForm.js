import React, { useState } from "react";
import { Button, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";

import { AddTea, ChangeExistingTea, EditTea } from "../Actions/TeaAction";

const styles = {
    div: {
        fontSize: '18px',
    },
    save: {
        backgroundColor: 'honeydew',
        color: 'black',
        borderColor: 'gray',
        fontSize: '18px',
    },
    cancel: {
        color: 'black',
        backgroundColor: 'lightpink',
        borderColor: 'gray',
        fontSize: '18px',
    },
    type: {
        border: '1px solid gray',
        borderRadius: '3px',
        fontSize: '18px',
    },
}


const AddTeaForm = (props) => { //props from TeaList

    let teaObject = useSelector(state => state.teaList.find(el => el.id === state.editTea));
    console.log(teaObject);

    const [name, setName] = useState(teaObject?.name ?? '');
    const [type, setType] = useState(teaObject?.type ?? '');
    const [price, setPrice] = useState(teaObject?.price ?? '');
    const [amount, setAmount] = useState(teaObject?.amount ?? '');
    const [url, setUrl] = useState(teaObject?.url ?? '');

    //const filterTea = useSelector(state => state.filterTea);

    const editTea = useSelector(state => state.editTea);

    const dispatch = useDispatch();

    const submit = (e) => {
        e.preventDefault();

        let addedTea = {
            //id: editTea ?? new Date().getTime(), // for Locale store
            name: name,
            type: type,
            price: price,
            amount: amount,
            url: url
        }

        if (!editTea) {
            dispatch(AddTea(addedTea));
        } else {
            dispatch(ChangeExistingTea(addedTea))
        }

        setName('');
        props.close(); // from List
    }

    const cancel = () => {
        if (!editTea) { //if new mode - close;
            props.close();
        } else { //if edit mode - edit tea === undefined
            dispatch(EditTea())
        }
    }

    return (
        <div className="d-flex flex-column px-2 py-3"
            style={ styles.div }>
            <form className="d-flex flex-column">
                <label className="d-flex justify-content-between py-1">
                    Name
                    <input className="mx-2"
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>

                <label className="d-flex justify-content-between py-1 align-items-center">
                    Type
                    <Dropdown className="mx-2"
                        onSelect={(param) => setType(param)}
                        style={ styles.type }>
                        <Dropdown.Toggle variant="light" id="dropdown-basic">
                            {type}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item eventKey="black">Black Tea</Dropdown.Item>
                            <Dropdown.Item eventKey="green">Green Tea</Dropdown.Item>
                            <Dropdown.Item eventKey="white">White Tea</Dropdown.Item>
                            <Dropdown.Item eventKey="oolong">Oolong Tea</Dropdown.Item>
                            <Dropdown.Item eventKey="puer">Puer tea</Dropdown.Item>
                            <Dropdown.Item eventKey="smoked">Smoked</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </label>

                <label className="d-flex justify-content-between py-1">
                    Price
                    <input className="mx-2"
                        type='number'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </label>

                <label className="d-flex justify-content-between py-1">
                    Amount
                    <input className="mx-2"
                        type='text'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />
                </label>

                <label className="d-flex justify-content-between py-1">
                    URL
                    <input className="mx-2"
                        type='text'
                        value={ url }
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </label>
            </form>
            <div className="d-flex justify-content-evenly p-2">
                <Button onClick={ submit }
                    variant={'info'} size='sm'
                    style={ styles.save }>
                    Save
                </Button>

                <Button onClick={ cancel }
                    variant={'success'} size='sm'
                    style={ styles.cancel}>
                    Cancel 
                </Button>
            </div>


        </div>
    )
}

export default AddTeaForm;
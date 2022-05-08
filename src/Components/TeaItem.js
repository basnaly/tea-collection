import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { FiExternalLink } from 'react-icons/fi';
import { Button, Modal } from 'react-bootstrap';
import { DeleteTea, EditTea } from "../Actions/TeaAction";

const styles = {
    td: {
        border: '1px solid gray',
        borderRadius: '2px',
        padding: '5px',
        fontSize: '22px',
    },
    edit: {
        backgroundColor: 'honeydew',
        borderColor: 'gray',
        fontSize: '18px',
    },
    delete: {
        color: 'black',
        backgroundColor: 'lightpink',
        borderColor: 'gray',  
        fontSize: '18px', 
    },
} 

const TeaItem = (props) => { //props from TeaList

    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    //const handleShow = () => setShowModal(true);

    const dispatch = useDispatch();

    const deleteTea = () => dispatch(DeleteTea(props.tea.id));

    const editTea = () => dispatch(EditTea(props.tea.id));
    
    //const changeName = (newName) => dispatch(SaveName(props.tea.id, newName));
    //const changePrice = (newPrice) => dispatch(SavePrice(props.tea.id, newPrice));
    //const changeAmount = (newAmount) => dispatch(SaveAmount(props.tea.id, newAmount));

        return (
        
        <tr>
            <td className="text-center" style={ styles.td }>{ props.index }</td>
            <td style={ styles.td }>
                { props.tea.name } 
            </td>
            <td className="text-center" style={ styles.td }>
                { props.tea.type }
            </td>
            <td className="text-center" style={ styles.td }>
                { props.tea.price }
            </td>
            <td className="text-center" style={ styles.td }>
                { props.tea.amount }
            </td>
            <td className="text-center" style={ styles.td }>
                <a href={ props.tea.url } target='_blank' rel="noreferrer">
                    <FiExternalLink />
                </a>
            </td>

            <td style={ styles.td }> 
                <Button className="align-self-center"
                    onClick={ editTea }
                    variant={ 'info' } size='sm'
                    style={ styles.edit }>
                    Edit
                </Button>
            </td>

            <td style={ styles.td }> 
                <Button className="align-self-center"
                    onClick={ () => setShowModal(true) }
                    variant={ 'danger' } size='sm'
                    style={ styles.delete }>
                    Delete
                </Button>

                <Modal show={showModal} onHide={ handleClose }>
                    <Modal.Header closeButton>
                        <Modal.Title>Delete the tea</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Are you sure you want to delete the tea?</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary"
                            onClick={ handleClose }>
                            Close
                        </Button>
                        <Button variant="primary"
                            onClick={ deleteTea }>
                            Delete
                        </Button>
                    </Modal.Footer>
                </Modal>
            </td>
        </tr>

    )
}

export default TeaItem;
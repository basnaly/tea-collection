import React from "react";
import { Button } from 'react-bootstrap';
import { useDispatch } from "react-redux";
import EditableText from "../Components/EditableText";
import EditInput from "../Components/EditInput";
import { DeleteItem, SaveAmount, SavePrice } from "../Actions/TeaAction";
import { EditItem, SaveName } from "../Actions/TeaAction";


const styles = {
    td: {
        border: '1px solid gray',
        borderRadius: '2px',
        padding: '5px',
        fontSize: '18px',
    },
} 

const TeaItem = (props) => { //props from TeaList

    const dispatch = useDispatch();

    const deleteTea = () => dispatch(DeleteItem(props.tea.id));
    const editTea = () => dispatch(EditItem(props.tea.id));
    
    const changeName = (newName) => dispatch(SaveName(props.tea.id, newName));
    const changePrice = (newPrice) => dispatch(SavePrice(props.tea.id, newPrice));
    const changeAmount = (newAmount) => dispatch(SaveAmount(props.tea.id, newAmount));

    const tea = props.tea ? (
        
        <tr>
            <td className="text-center" style={ styles.td }>{ props.index }</td>
            <td style={ styles.td }>
                <EditableText text={ props.tea.name } 
                    onSave={ changeName } />
            </td>
            <td className="text-center" style={ styles.td }>{ props.tea.type }</td>
            <td className="text-center" style={ styles.td }>
                <EditableText text={ props.tea.price }
                    onSave={ changePrice } />
            </td>
            <td className="text-center" style={ styles.td }>
                <EditableText text={ props.tea.amount }
                    onSave={ changeAmount } />
            </td>
            <td style={ styles.td }>
                <Button className="align-self-center"
                        onClick={ editTea }
                        variant={ 'info' } size='sm'>
                        Edit
                </Button>
            </td>

            <td style={ styles.td }> 
                <Button className="align-self-center"
                    onClick={ deleteTea }
                    variant={ 'danger' } size='sm'>
                    Delete
                </Button>
            </td>
        </tr>

    ) : (<div>Loading tea...</div>)

    return tea 
}

export default TeaItem;
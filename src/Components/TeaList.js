import React, { useState } from "react";
import { Button, Dropdown } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";

import AddTeaForm from "../Components/AddTeaForm";
import TeaItem from "../Components/TeaItem";
import { ChangeTypeOfTea } from "../Actions/TeaAction";

const styles = {
    table: {
        margin: '10px',
        borderCollapse: 'collapse',
        height: '100%',
    },
    th: {
        border: '1px solid gray',
        borderRadius: '2px',
        padding: '5px',
        textAlign: 'center',
        fontSize: '18px',
    },
}

const TeaList = () => {

    const [addItem, setAddItem] = useState(false)

    const filteredTea = useSelector(state => state.teaList.filter(el =>
        el.type === state.filterTea || state.filterTea === 'all'));
    
    const typeOfFilter = useSelector(state => state.filterTea);

    const dispatch = useDispatch();

    const ChangeFilter = (param) => dispatch(ChangeTypeOfTea(param));

    return(
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex align-items-center">
                <Dropdown onSelect={ ChangeFilter }>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Filter by type { typeOfFilter }
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="all">All</Dropdown.Item>
                        <Dropdown.Item eventKey="black">Black Tea</Dropdown.Item>
                        <Dropdown.Item eventKey="green">Green Tea</Dropdown.Item>
                        <Dropdown.Item eventKey="white">White Tea</Dropdown.Item>
                        <Dropdown.Item eventKey="puer">Puer tea</Dropdown.Item>   
                        <Dropdown.Item eventKey="smoked">Smoked</Dropdown.Item>  
                    </Dropdown.Menu>
                </Dropdown>

            </div>

            <table style={ styles.table }>
                <thead>
                    <tr>
                        <th style={ styles.th }>NN</th>
                        <th style={ styles.th }>Name</th>
                        <th style={ styles.th }>Type</th>
                        <th style={ styles.th }>Price, NIS</th>
                        <th style={ styles.th }>Amount</th>
                        <th style={ styles.th }></th>
                        <th style={ styles.th }></th>
                    </tr>    
                </thead>
                <tbody>
                    {filteredTea.map((el, i) => 
                    <TeaItem key={ el.id } tea={ el } index={ i + 1} />
                    )} 
                </tbody>   
            </table>

            {addItem ?
            <AddTeaForm close={ () => setAddItem(false) } />//props
            : 
            <Button className="mx-5"
                variant={ 'success' }
                onClick={ () => setAddItem(prev => !prev) }>
                Add
            </Button>
            }

            
        </div>
    )
}

export default TeaList;
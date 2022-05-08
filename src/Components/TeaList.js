import React, { useState } from "react";
import { Button, Dropdown, Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";

import AddTeaForm from "../Components/AddTeaForm";
import TeaItem from "../Components/TeaItem";
import { ChangeTypeOfTea } from "../Actions/TeaAction";

const styles = {
    parent: {
        margin: 'auto',
        height: '100vh',
        fontFamily: "'Karla', sans-serif",
    },
    div: {
        fontSize: '36px',
        color: 'deeppink',
        textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
    },
    table: {
        borderCollapse: 'collapse',
        height: '100%',
    },
    th: {
        border: '1px solid gray',
        padding: '5px',
        textAlign: 'center',
        fontSize: '22px',
    },
    span: {
        fontSize: '22px',
        color: 'deeppink',
        padding: '10px',
    },
    button: {
        backgroundColor: 'honeydew',
        color: 'black',
        fontSize: '20px',
    },   
    add: {
        backgroundColor: 'honeydew',
        color: 'black',
        borderColor: 'gray',
        fontSize: '20px',
    },
    dropdown: {
        backgroundColor: 'honeydew',
        fontSize: '22px',
    },
    items: {
        color: 'deeppink',
    },
    head: {
        position: 'sticky',
        top: '1px',
        backgroundColor: 'floralwhite',
        outline: '1px solid gray',
    },
}

const TeaList = () => {

    const [addTea, setAddTea] = useState(false)

    const filteredTea = useSelector(state => state.teaList.filter(el =>
        el.type === state.filterTea || state.filterTea === 'all'));

    const loading = useSelector(state => state.loading);

    const typeOfFilter = useSelector(state => state.filterTea);

    const editTea = useSelector(state => state.editTea);

    //const teaList = useSelector(state => state.tea)

    const dispatch = useDispatch();

    const ChangeFilter = (param) => dispatch(ChangeTypeOfTea(param));

    console.log(loading)
    if (loading === true) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    }

    return (
        <div className="d-flex flex-column align-items-center"
            style={styles.parent}>
            <div className="d-flex flex-column align-items-center my-3"
                style={styles.div}>
                My Tea Collection
            </div>
            <div className="d-flex align-items-center mb-4">
                <Dropdown onSelect={ChangeFilter}>
                    <Dropdown.Toggle variant="outline-secondary"
                        id="dropdown-basic"
                        style={styles.button}>
                        Filter by type of tea:
                        <span style={styles.span}>
                            {typeOfFilter}
                        </span>
                    </Dropdown.Toggle>

                    <Dropdown.Menu style={styles.dropdown}>
                        <Dropdown.Item eventKey="all"
                            style={styles.items}>
                            All
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="black"
                            style={styles.items}>
                            Black Tea
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="green"
                            style={styles.items}>
                            Green Tea
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="white"
                            style={styles.items}>
                            White Tea
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="oolong"
                            style={styles.items}>
                            Oolong Tea
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="puer"
                            style={styles.items}>
                            Puer tea
                        </Dropdown.Item>
                        <Dropdown.Item eventKey="smoked"
                            style={styles.items}>
                            Smoked
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

            </div>

            <div className="d-flex flex-column overflow-auto align-items-center">
                <table style={styles.table}>
                    <thead style={styles.head}>
                        <tr>
                            <th style={styles.th}>NN</th>
                            <th style={styles.th}>Name</th>
                            <th style={styles.th}>Type</th>
                            <th style={styles.th}>Price</th>
                            <th style={styles.th}>Amount</th>
                            <th style={styles.th}>URL</th>
                            <th style={styles.th} colSpan='2'>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredTea.map((el, i) =>
                            <TeaItem key={ el.id } tea={ el } index={ i + 1 } />
                        )}
                    </tbody>
                </table>
            </div>

            {addTea || editTea ?
                <AddTeaForm close={() => setAddTea(false)} />//props
                :
                <Button className="m-3"
                    variant={'success'}
                    style={ styles.add }
                    onClick={() => setAddTea(prev => !prev)}>
                    Add new tea
                </Button>
            }
        </div>
    )
}

export default TeaList;
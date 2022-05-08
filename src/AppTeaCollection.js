import React, { useEffect } from "react";
import TeaList from "./Components/TeaList";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch } from "react-redux";
import { fetchTea } from "./Actions/TeaAction";

const styles = {
    parent: {
    backgroundImage: 'url("/img/tea.jpeg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    },
}

const AppTeaCollection = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTea())
    }, [dispatch])

    return(
        <div style={ styles.parent }>
            <TeaList />
        </div>
        
    )
}

export default AppTeaCollection;


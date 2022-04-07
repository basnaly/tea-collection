import React, { useEffect } from "react";
import TeaList from "./Components/TeaList";
import "bootstrap/dist/css/bootstrap.css";
import { useDispatch } from "react-redux";
import { fetchTea } from "./Actions/TeaAction";

const AppTeaCollection = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTea())
    }, [])

    return(
        <TeaList />
    )
}

export default AppTeaCollection;


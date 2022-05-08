import axios from "axios";
import { env } from "../env";
import { FETCH_TEA_REQUEST, FETCH_TEA_FAILURE, FETCH_TEA_SUCCESS } from "../Constants/Constants";

const API_KEY = env.firebase;

export const ChangeTypeOfTea = typeOfTea => {
    return {
        type: 'CHANGE_TYPE',
        typeOfTea
    }
}

export const EditTea = id => {
    return {
        type: 'EDIT_TEA',
        id
    } 
}

export const ChangeExistingTea = teaObject => {
    return (dispatch, getState) => {
        const id = getState().editTea;
        dispatch(fetchTeaRequest())
        axios.put(`https://learn-266e7-default-rtdb.firebaseio.com/teaCollection/${ id }.json?auth=${API_KEY}`, teaObject)
            .then(response => {
                console.log(response)
                dispatch({type: 'CHANGE_EXISTING_TEA'})
            })
            .catch(error => {
                const errorMessage = error.message
                console.log(errorMessage)
            })
            .finally( () => {
                dispatch(fetchTea())
            })
    }
}

export const DeleteTea = id => {
    return (dispatch) => {
        dispatch(fetchTeaRequest())
        axios.delete(`https://learn-266e7-default-rtdb.firebaseio.com/teaCollection/${ id }.json?auth=${API_KEY}`)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                const errorMessage = error.message
                console.log(errorMessage)
            })
            .finally( () => {
                dispatch(fetchTea())
            })
    }
}

export const AddTea = addTea => {
    return (dispatch) => {
        dispatch(fetchTeaRequest())
        axios.post(`https://learn-266e7-default-rtdb.firebaseio.com/teaCollection.json?auth=${API_KEY}`,addTea)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                const errorMessage = error.message
                console.log(errorMessage)
            })
            .finally( () => {
                dispatch(fetchTea())
            })
    }
}

export const fetchTeaRequest = () => {
    return {
        type: FETCH_TEA_REQUEST
    }
}

export const fetchTeaSuccess = teaData => {
    return {
        type: FETCH_TEA_SUCCESS,
        teaData
    }
}

export const fetchTeaFailure = error => {
    return {
        type: FETCH_TEA_FAILURE,
        error
    }
}

export const fetchTea = () => {
    return (dispatch) => {
        dispatch(fetchTeaRequest())
        axios.get(`https://learn-266e7-default-rtdb.firebaseio.com/teaCollection.json?auth=${API_KEY}`)
            .then(response => {
                const teaData = response.data
                dispatch(fetchTeaSuccess(teaData))
            })
            .catch(error => {
                const errorMessage = error.message
                dispatch(fetchTeaFailure(errorMessage))
            })
    }
}

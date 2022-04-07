import axios from "axios";
import { FETCH_TEA_REQUEST, FETCH_TEA_FAILURE, FETCH_TEA_SUCCESS } from "../Constants/Constants";

const API_KEY = 'quyg001xNfy9ty9eJMtCl0DKDGzzO6T7xZXKageu';

export const ChangeTypeOfTea = (value) => {
    return {
        type: 'CHANGE_TYPE',
        value
    }
}

export const DeleteItem = (id) => {
    return {
        type: 'DELETE_ITEM',
        id
    }
}

export const AddItem = (addItem) => {
    return (dispatch) => {
        dispatch(fetchTeaRequest)
        axios.post(`https://learn-266e7-default-rtdb.firebaseio.com/teaCollection.json?auth=${API_KEY}`,addItem)
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                const errorMessage = error.message
                console.log(error)
            })
    }
}

export const EditItem = (id) => {
    return {
        type: 'EDIT_ITEM',
        id
    }
}

export const SaveName = (id, newName) => {
    return {
        type: 'SAVE_NAME',
        id,
        newName
    }
}

export const SavePrice = (id, newPrice) => {
    return {
        type: 'SAVE_PRICE',
        id,
        newPrice
    }
}

export const SaveAmount = (id, newAmount) => {
    return {
        type: 'SAVE_AMOUNT',
        id,
        newAmount
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
        dispatch(fetchTeaRequest)
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

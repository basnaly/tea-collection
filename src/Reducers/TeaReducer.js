import { FETCH_TEA_REQUEST, FETCH_TEA_FAILURE, FETCH_TEA_SUCCESS } from "../Constants/Constants";

const initState = {
    filterTea: 'black',
    loading: false,
    error: '',
    teaList: [
        { name: 'Mauntain Blue', type: 'black', price: '32', amount: '100 gr', id: 1 },
        { name: 'White Peony', type: 'white', price: '36', amount: '57 gr', id: 2 },
        { name: 'Malty Assam', type: 'black', price: '40', amount: '100 gr', id: 3 },
        { name: 'Topaz', type: 'puer', price: '32', amount: '100 gr', id: 4 },
        { name: 'Jasmine Pearls', type: 'green', price: '58', amount: '85 gr', id: 5 }
    ]
}

const TeaReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_TYPE':
            return {
                ...state,
                filterTea: action.value
            }
        case 'DELETE_ITEM':
            let restTeaList = state.teaList.filter(el => {
                return el.id !== action.id
            });
            return {
                ...state,
                teaList: restTeaList
            }
        case 'ADD_ITEM':
            let newTeaList = [...state.teaList, action.addItem]
            return {
                ...state,
                teaList: newTeaList
            }

        case 'SAVE_NAME':
            let changedNameTea = [...state.teaList].map(el =>
                el.id === action.id ? {
                    ...el,
                    name: action.newName
                } : el)
            return {
                ...state,
                teaList: changedNameTea
            }
        case 'SAVE_PRICE':
            let changedPriceTea = [...state.teaList].map(el =>
                el.id === action.id ? {
                    ...el,
                    price: action.newPrice
                } : el)
            return {
                ...state,
                teaList: changedPriceTea
            }
        case 'SAVE_AMOUNT':
            let changedAmounTea = [...state.teaList].map(el =>
                el.id === action.id ? {
                    ...el,
                    amount: action.newAmount
                } : el)
            return {
                ...state,
                teaList: changedAmounTea
            }

        case FETCH_TEA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_TEA_SUCCESS:
            let loadedTeaData = Object.values(action.teaData); // transform object to array
            return {
                ...state,
                loading: false,
                teaList: loadedTeaData
            }
        case FETCH_TEA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            }

        default:
            return state
    }
}

export default TeaReducer;



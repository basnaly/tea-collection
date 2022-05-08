import { FETCH_TEA_REQUEST, FETCH_TEA_FAILURE, FETCH_TEA_SUCCESS } from "../Constants/Constants";

// const loadState = () => {
//     try {
//         const serialState = localStorage.getItem('teaList');
//         if (serialState === null) {
//             return {}
//         }
//         return { teaList: JSON.parse(serialState) };
//     } catch (err) {
//     return {};
//     }
// };

// const teaListFromLs = loadState();
// console.log(teaListFromLs)

const initState = {
    filterTea: 'black',
    editTea: undefined,
    loading: false,
    error: '',
    teaList: []
        // ...teaListFromLs,
}

const TeaReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CHANGE_TYPE':
            return {
                ...state,
                filterTea: action.typeOfTea
            }

        case 'ADD_TEA':
            return {
                ...state,
                teaList: [...state.teaList, action.addTea]
            }

        case 'EDIT_TEA':
            return {
                ...state,
                editTea: action.id
            }

        case 'CHANGE_EXISTING_TEA':
            return {
                ...state,
                // teaList: state.teaList.map(el => el.id === state.editTea ?
                //     action.teaObject : el),
                editTea: undefined
            }

        case 'DELETE_TEA':
            let restTeaList = state.teaList.filter(el => {
                return el.id !== action.id
            });
            return {
                ...state,
                teaList: restTeaList
            }

        case FETCH_TEA_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_TEA_SUCCESS:
            let loadedTeaData = Object.keys(action.teaData).map(el =>
                ({...action.teaData[el], id: el})); // transform object to array
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



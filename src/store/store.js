import { createStore } from 'redux';
import repository from './localManager'

const repos = repository()

function reducer(state = repos.getData(), action){
    switch(action.type){
        case 'ADD_NOTE':
            let storedNotas = [...state, action.payload]
            repos.saveData(storedNotas) ///
            return storedNotas

        case 'DELETE_NOTE':
            repos.deleteElement(action.payload.id) ///
            return state.filter(e => e.id !== action.payload.id)

        case 'UPDATE_NOTE':
            let newState = state.map(e => {
                if(e.id === action.payload.id){
                    return action.payload;
                }
                return e
            })
            repos.saveData(newState) ///
            return newState
            
        default:
            return state;
    }
}
export const store = createStore(reducer);
const redux = require('redux');
const produce = require('immer').produce;

const createStore = redux.legacy_createStore;

const initialState = {
    name: "Nandakumar",
    address: {
        street: "123 Main st",
        city: "Boston",
        state: "MA"
    }
}

const STREET_UPDATED = "STREET_UPDATED";

function updateStreet(street){
    return {
        type: STREET_UPDATED,
        payload: street
    }
}

const streetReducer = (state = initialState, action) => {
    switch(action.type){
        case STREET_UPDATED: {
            /* 
            return {
                ...state,
                address: {
                    ...state.address,
                    street: action.payload
                }
            }
            */

            return produce(state, (draft) => {
                draft.address.street = action.payload
            })
        }
        default: {
            return state;
        }
    }
}

const store = createStore(streetReducer);
console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => {
    console.log('Updated state', store.getState());
})
store.dispatch(updateStreet('987 St Luis Street'));
unsubscribe();
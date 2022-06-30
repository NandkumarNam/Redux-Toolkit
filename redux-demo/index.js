const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore =  redux.legacy_createStore;
const bindActionCreators = redux.bindActionCreators;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const CAKE_ORDERED = 'CAKE_ORDERED';
const CAKE_RESTOCKED = 'CAKE_RESTOCKED';
const ICECREAM_ORDERED = 'ICECREAM_ORDERED';
const ICECREAM_RESTOCKED = 'ICECREAM_RESTOCKED';

function orderCake() {
    return {
        type: CAKE_ORDERED,
        payload: 1
    }
}

function restockedCake(qty = 1) {
    return {
        type: CAKE_RESTOCKED,
        payload: qty
    }
}

function orderIceCream(qty = 1) {
    return {
        type: ICECREAM_ORDERED,
        payload: qty
    }
}

function restockedIceCream(qty = 1) {
    return {
        type: ICECREAM_RESTOCKED,
        payload: qty
    }
}

const initialCakeState = {
    numberOfCake: 10
}

const initialIceCreamState = {
    numberOfIceCream: 20
}

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type){
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfCake: state.numberOfCake - action.payload
            }
        case CAKE_RESTOCKED:
            return {
                ...state,
                numberOfCake: state.numberOfCake + action.payload
            }
        default: return state;
    }
}

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type){
        case ICECREAM_ORDERED:
            return {
                ...state,
                numberOfIceCream: state.numberOfIceCream - action.payload
            }
        case ICECREAM_RESTOCKED:
            return {
                ...state,
                numberOfIceCream: state.numberOfIceCream + action.payload
            }
        case CAKE_ORDERED:
            return {
                ...state,
                numberOfIceCream: state.numberOfIceCream - action.payload
            }
        default: return state;
    }
}
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});
const store = createStore(rootReducer, applyMiddleware(logger));
console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => {});

/* store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(orderCake());
store.dispatch(restockedCake(3)); */

const actions = bindActionCreators({orderCake, restockedCake, orderIceCream, restockedIceCream}, store.dispatch);
actions.orderCake();
actions.orderIceCream(2);
actions.orderCake();
actions.orderCake();
actions.orderIceCream(2);
actions.restockedCake(3);
actions.restockedIceCream(4);

unsubscribe();
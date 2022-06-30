const store = require('./app/store');
const cakeActions = require('./features/cake/cakeSlice').cakeActions;
const iceCreamActions = require('./features/icecream/iceCreamSlice').iceCreamActions;
const fetchUsers = require('./features/user/userSlice').fetchUsers;

console.log("Initial state", store.getState());

const unsubscribe = store.subscribe(() => {});
/*
store.dispatch(cakeActions.ordered());
store.dispatch(iceCreamActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.ordered());
store.dispatch(cakeActions.restocked(3));
store.dispatch(iceCreamActions.restocked(4));
*/
store.dispatch(fetchUsers());
unsubscribe();
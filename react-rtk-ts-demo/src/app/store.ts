import {configureStore} from '@reduxjs/toolkit';
//const reduxLogger = require('redux-logger');

import cakeReducer  from '../features/cake/cakeSlice';
import iceCreamReducer from '../features/icecream/iceCreamSlice';
import userReducer from '../features/user/userSlice';

//const logger = reduxLogger.createLogger();

const store = configureStore({
    reducer: {
        cake: cakeReducer,
        icecream: iceCreamReducer,
        user: userReducer
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
import {createSlice} from '@reduxjs/toolkit';
import { ordered as cakeOrdered } from '../cake/cakeSlice';

const initialState = {
    numberOfIceCreams: 20
}

const iceCreamSlice = createSlice({
    name: 'iceream',
    initialState,
    reducers: {
        ordered: state => {
            state.numberOfIceCreams--
        },
        restocked: (state, action) => {
            state.numberOfIceCreams += action.payload
        }
    },
    /*
    extraReducers: {
        ['cake/ordered']: (state) => {
            state.numberOfIceCreams--
        }
    }
    */
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, state => {
            state.numberOfIceCreams--
        })
    }
});

export default iceCreamSlice.reducer;
export const {ordered, restocked} = iceCreamSlice.actions;
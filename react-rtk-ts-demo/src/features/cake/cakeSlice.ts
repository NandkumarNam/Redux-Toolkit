import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type InitialState = {
    numberOfCakes: number
}
const initialState: InitialState = {
    numberOfCakes: 10
}

const cakeSlice = createSlice({
    name: 'cake',
    initialState,
    reducers: {
        ordered: state => {
            state.numberOfCakes--
        },
        restocked: (state, action: PayloadAction<number>) => {
            state.numberOfCakes += action.payload
        }
    }
});

export default cakeSlice.reducer;
export const {ordered, restocked} = cakeSlice.actions;
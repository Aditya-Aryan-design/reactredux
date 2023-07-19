import { createSlice } from "@reduxjs/toolkit";

const amountSlice = createSlice({
    name: 'amount',
    initialState: 0,
    reducers: {
        addAmount(state, action){
            return state+=action.payload
        },
        subAmount(state, action){
            return state-=action.payload
        }
    }
    
})

export default amountSlice

export const {addAmount, subAmount} = amountSlice.actions
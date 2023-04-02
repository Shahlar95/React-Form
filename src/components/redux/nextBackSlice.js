import {createSlice} from '@reduxjs/toolkit';

const nextBackSlice = createSlice({
    name: 'nextBackSlice',
    initialState:{
        step:1
    },
    reducers:{
        changeStep:(state,action)=>{
            state.step = action.payload
        }
    }
})

export default nextBackSlice.reducer
export const {changeStep} = nextBackSlice.actions
import {createSlice} from '@reduxjs/toolkit';

const goalReducer=createSlice({
    name:'goal',
    initialState:{ids:[{id:Math.random(),text:'Welcome to the app'}]},
    reducers:{
        addGoal(state,action){
            state.ids.push(action.payload);
        },
        deleteGoal(state,action){
            state.ids.splice(state.ids.indexOf(action.payload.id),1);
        },
    },
});

export const {addGoal,deleteGoal}=goalReducer.actions;
export default goalReducer.reducer;
import { createReducer } from "@reduxjs/toolkit";

const intitalstate={

  values:'',
  user:""
};


 export const customReducer=createReducer({intitalstate},{


    selectCategry:(state,action)=>{

        state.values=action.payload 
    },

    getUser: (state, action)=>{
      state.user = action.payload
      console.log("paylod data",state.user)
    }

})

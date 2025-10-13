import { createSlice } from "@reduxjs/toolkit";

export const counterSlice =  createSlice({
    name: "counter",
    initialState: { value: 0 },
    reducers: {
      increment: (state) => {
              // Avec les store, on n'est pas 'censé' modifier directement le state
      // Avec ReduxToolkit, nous pouvons le faire
        state.value += 1;
      },
      decrement: (state) => {
        state.value -= 1;
      }
    }
  });
  // return (
  //   <div>
      
  //   </div>
  // );

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
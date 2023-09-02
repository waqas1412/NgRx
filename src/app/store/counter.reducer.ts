import {createReducer, on} from "@ngrx/store";
import {decrement, increment, set} from "./counter.actions";

const initialState = 0;
export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => {
    return state + action.value;
  }),
  on(decrement, (state, action) => {
    return state - action.value;
  }),
  on(set, (state, action) => {
    return action.value;
  }));

import { INCREAMENT, DECREAMENT, RESET } from "../constant/constant";

const initialState = { value: 0 };

export const reducer = (state = initialState, action) => {
  if (action.type === INCREAMENT) {
    return { value: state.value + 1 };
  }
  else if (action.type === DECREAMENT) {
    return { value: state.value - 1 };
  }
  else if (action.type === RESET) {
    return { value: action.payload ? action.payload : 0 };
  }
  return state;
}
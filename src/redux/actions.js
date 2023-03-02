import { DECREAMENT, INCREAMENT, RESET } from "../constant/constant";

export const increamentAction = (count) => {
  return {
    type: INCREAMENT,
    payload: count
  }
}

export const resetAction = (count) => {
  return {
    type: RESET,
    payload: count
  }
}

export const decreamentAction = (count) => {
  return {
    type: DECREAMENT,
    payload: count
  }
}
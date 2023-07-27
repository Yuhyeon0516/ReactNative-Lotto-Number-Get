import { CREATE_NEW_NUMBERS } from "../action/lottoNumbers";

const defaultState = {
  currentNumber: [],
  history: [],
};

export function lottoNumberReducer(state = defaultState, action) {
  if (action.type === CREATE_NEW_NUMBERS) {
    return {
      ...state,
      currentNumber: action.numbers,
      history: [{ date: new Date(), numbers: action.numbers }, ...state.history],
    };
  }

  return {
    ...state,
  };
}

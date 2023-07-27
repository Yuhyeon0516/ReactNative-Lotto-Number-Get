import { CREATE_NEW_NUMBERS } from "../action/lottoNumbers";

const defaultState = {
  currentNumber: [],
  history: [],
};

export function lottoNumberReducer(state = defaultState, action) {
  if (action.type === CREATE_NEW_NUMBERS) {
    const date = new Date();
    return {
      ...state,
      currentNumber: action.numbers,
      history: [
        {
          date: `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
          numbers: action.numbers,
        },
        ...state.history,
      ],
    };
  }

  return {
    ...state,
  };
}

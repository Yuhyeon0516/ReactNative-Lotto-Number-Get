import { getRandomSixNumber } from "../util/util";

export const CREATE_NEW_NUMBERS = "CREATE_NEW_NUMBERS";

export function createNewNumbers() {
  const numbers = getRandomSixNumber();

  return {
    type: CREATE_NEW_NUMBERS,
    numbers,
  };
}

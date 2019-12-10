import { incrementKey } from "./Helpers";

export const limitedString = `${incrementKey(localStorage.length)}_limited`;
export const constructedString = `${incrementKey(
  localStorage.length
)}_constructed`;

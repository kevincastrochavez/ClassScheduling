import { FETCH_COURSES, TOGGLE_ENROLLED } from "../actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_COURSES:
      return [...state, ...action.payload];
    case TOGGLE_ENROLLED:
      return state;
    default:
      return state;
  }
}

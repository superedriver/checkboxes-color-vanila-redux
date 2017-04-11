import { CHANGE_SQUARE_COLOR, CHANGE_CIRCLE_COLOR } from './constants'

export function todoApp(state, action) {
  switch (action.type) {
    case CHANGE_SQUARE_COLOR:
      return {
        ...state,
        squareColor: action.payload,
      };
    case CHANGE_CIRCLE_COLOR:
      return {
        ...state,
        circleColor: action.payload,
      };
    default:
      return state
  }
}

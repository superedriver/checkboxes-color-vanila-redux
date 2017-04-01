import { CHANGE_COLOR } from './constants';
//
// export const changeColor = (color) => ({
//   type: CHANGE_COLOR,
//   payload: color,
// });

export const changeColor = (color) => {
  return {
    type: CHANGE_COLOR,
    payload: color,
  }
};

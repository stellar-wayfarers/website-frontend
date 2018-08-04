// Rekit uses a new approach to organizing actions and reducers. That is
// putting related actions and reducers in one file. See more at:
// https://medium.com/@nate_wang/a-new-approach-for-managing-redux-actions-91c26ce8b5da

import { COMMON_CHANGE_BACKGROUND } from './constants';

export function changeBackground(url) {
  return {
    type: COMMON_CHANGE_BACKGROUND,
    url,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case COMMON_CHANGE_BACKGROUND:
      return {
        ...state,
        background: action.url,
      };

    default:
      return state;
  }
}

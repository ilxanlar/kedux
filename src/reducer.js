import { REMOVE, SET } from './actions';

export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case SET:
      return {
        ...state,
        [action.name]: {
          value: action.value
        }
      };

    case REMOVE:
      return {
        ...state,
        [action.name]: undefined
      };

    default:
      return state;
  }
}

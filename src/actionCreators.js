import { REMOVE, SET } from './actions';

export function set(name, value) {
  return {
    type: SET,
    name,
    value
  };
}

export function remove(name) {
  return {
    type: REMOVE,
    name
  };
}

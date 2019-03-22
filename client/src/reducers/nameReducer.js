import { FETCH_NAME } from '../actions/types';

export default function (state = null, action) {
  switch (action.type) {
    case FETCH_NAME:
      return action.payload || false;
    default:
      return state;
  }
}

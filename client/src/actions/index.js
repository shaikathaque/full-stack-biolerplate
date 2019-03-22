import axios from 'axios';
import { FETCH_NAME } from './types';

// eslint-disable-next-line
export const fetchName = () => async dispatch => {
  const res = await axios.get('/api/name');
  dispatch({ type: FETCH_NAME, payload: res.data });
};

import axios from 'axios';
import { FETCH_NAME } from './types';

// eslint-disable-next-line
export const fetchName = name => async dispatch => {
  try {
    const res = await axios.get(`/api/name/${name}`);
    dispatch({ type: FETCH_NAME, payload: res.data });
  } catch (err) {
    console.log('error fetching name:', err);
    dispatch({ type: FETCH_NAME, payload: null });
  }
};

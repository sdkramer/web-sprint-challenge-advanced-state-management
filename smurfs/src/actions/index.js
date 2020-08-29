import axios from 'axios';

export const FETCHING_DATA_START = 'FETCHING_DATA_START';
export const FETCHING_DATA_SUCCESS = 'FETCHING_DATA_SUCCESS';
export const FETCHING_DATA_FAILURE = 'FETCHING_DATA_FAILURE';

export const getSmurf = () => dispatch => {
// dispatch({ type: FETCHING_DATA_START });
axios.get("http://localhost:3333/smurfs")
.then(res => {
  console.log("data from get request: ", res.data);
  dispatch({ type: FETCHING_DATA_SUCCESS, payload: res.data})
}
  )
  .catch(err => {
    console.log(err);
  })
}
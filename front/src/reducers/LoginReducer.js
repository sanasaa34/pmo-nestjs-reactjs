import * as types from '../actions';

const initialState = {
  loading: false
};


export default function(state = initialState, action) {
  //const response = action.response;
  console.log('response', state)

  switch(action.type) {
    case types.LOGIN_USER_SUCCESS:
      return { ...state, response };
      
    case types.LOGIN_USER_ERROR:
      return { ...state, response };
    default:
      return state;
  }
};
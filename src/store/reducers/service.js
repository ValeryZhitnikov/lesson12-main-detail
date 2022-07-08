import { REQUEST_SERVICE, SUCCES_REQUEST_SERVICE, ERROR_REQUEST_SERVICE } from "../actions/actionTypes";

const initialState = {
  id: null,
  service: {},
  loading: false,
  error: null
}

export default function serviceReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SERVICE:
      const { id } = action.payload;
      return {
        ...state,
        id,
        loading: true,
        error: null
      };
    case SUCCES_REQUEST_SERVICE:
      const { service } = action.payload; 
      return {
        ...state,
        service,
        loading: false,
        error: null
      };
    case ERROR_REQUEST_SERVICE:
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error
      }
    default:
      return state;
  }
}
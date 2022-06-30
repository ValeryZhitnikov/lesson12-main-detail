import { REQUEST_SERVICES_LIST, SUCCES_REQUEST_SERVICES_LIST, ERROR_REQUEST_SERVICES_LIST } from "../actions/actionTypes";

const initialState = {
  loading: false,
  services: [],
  error:null
};

export default function servicesListReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SERVICES_LIST:
      return {
        ...state,
        loading: true,
        error: null
      }
    case SUCCES_REQUEST_SERVICES_LIST:
      const { servicesList } = action.payload;
      return {
        ...state,
        loading: false,
        services: servicesList,
        error: null
      };
    case ERROR_REQUEST_SERVICES_LIST:
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
import { REQUEST_SERVICES_LIST, 
    SUCCES_REQUEST_SERVICES_LIST, ERROR_REQUEST_SERVICES_LIST } from "./actionTypes";

export function requestServicesList() {
    return { type: REQUEST_SERVICES_LIST };
}

export function succesServices(servicesList) {
    return { type: SUCCES_REQUEST_SERVICES_LIST, payload: servicesList };
}

export function errorServices(error) {
    return { type: ERROR_REQUEST_SERVICES_LIST, payload: error };
}
import { REQUEST_SERVICES_LIST, 
    SUCCES_REQUEST_SERVICES_LIST, ERROR_REQUEST_SERVICES_LIST,
    REQUEST_SERVICE, SUCCES_REQUEST_SERVICE, ERROR_REQUEST_SERVICE } from "./actionTypes";

export function requestServicesList() {
    return { type: REQUEST_SERVICES_LIST };
}

export function succesServices(servicesList) {
    return { type: SUCCES_REQUEST_SERVICES_LIST, payload: {servicesList} };
}

export function errorServices(error) {
    return { type: ERROR_REQUEST_SERVICES_LIST, payload: {error} };
}

export function requestService(id) {
    return { type: REQUEST_SERVICE, payload: {id} }
}

export function succesService(service) {
    return { type: SUCCES_REQUEST_SERVICE, payload: {service} };
}

export function errorService(error) {
    return { type: ERROR_REQUEST_SERVICE, payload: {error} };
}
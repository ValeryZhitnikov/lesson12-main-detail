import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { REQUEST_SERVICES_LIST } from '../actions/actionTypes';
import { succesServices, errorServices } from '../actions/actionCreators';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export const getServicesList = action$ => action$.pipe(
  ofType(REQUEST_SERVICES_LIST),
  switchMap(action => ajax.getJSON(`${process.env.REACT_APP_SERVER_URL}/services`).pipe(
    map(o => succesServices(o)),
    catchError(error => of(errorServices(error)))
    )
  )
)
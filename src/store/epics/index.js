import { ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { REQUEST_SERVICES_LIST, REQUEST_SERVICE } from '../actions/actionTypes';
import { succesServices, errorServices, succesService, errorService } from '../actions/actionCreators';
import { map, switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

export const getServicesList = action$ => action$.pipe(
  ofType(REQUEST_SERVICES_LIST),
  switchMap(action => ajax.getJSON(`${process.env.REACT_APP_SERVER_URL}/services`).pipe(
    map(o => succesServices(o)),
    catchError(error => of(errorServices(error)))
    )
  )
);

export const getService = action$ => action$.pipe(
  ofType(REQUEST_SERVICE),
  map(o => o.payload.id),
  switchMap(id => ajax.getJSON(`${process.env.REACT_APP_SERVER_URL}/services/${id}`).pipe(
    map(o => succesService(o)),
    catchError(error => of(errorService(error)))
    )
  )
);

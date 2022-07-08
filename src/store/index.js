import { combineReducers, legacy_createStore, applyMiddleware, compose,} from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import servicesListReducer from "./reducers/servicesList";
import serviceReducer from "./reducers/service";
import { getServicesList, getService } from "./epics";

const reducer = combineReducers({
  servicesList: servicesListReducer,
  service: serviceReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
  getServicesList,
  getService
);

const epicMiddleware = createEpicMiddleware();

const store = legacy_createStore(reducer, composeEnhancers(
  applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);

export default store;
import { combineReducers, legacy_createStore, applyMiddleware, compose,} from "redux";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import servicesListReducer from "../reducers/servicesList";
import { getServicesList } from "../epics";

const reducer = combineReducers({
  servicesList: servicesListReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epic = combineEpics(
  getServicesList
);

const epicMiddleware = createEpicMiddleware();

const store = legacy_createStore(reducer, composeEnhancers(
  applyMiddleware(epicMiddleware)
));

epicMiddleware.run(epic);

export default store;
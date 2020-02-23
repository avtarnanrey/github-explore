import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./Store";
import rootEpic from "./Epics";
import { createEpicMiddleware } from "redux-observable";

const epicMiddleware = createEpicMiddleware();

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer,
    composeEnhancers(applyMiddleware(epicMiddleware))
);

epicMiddleware.run(rootEpic);

export default store;
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import rootReducer from "./reducer";
import rootSaga from "./saga";

const sagaMiddleWare = createSagaMiddleware();

// redux 스토어를 정의
const configureStore = () => {
    const store = createStore(
      rootReducer,
      applyMiddleware(sagaMiddleWare)
    );
    sagaMiddleWare.run(rootSaga)
    return store;
}

export default configureStore;
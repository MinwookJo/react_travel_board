import { createStore } from "redux";
import rootReducer from "./reducer";


// redux 스토어를 정의
const configureStore = () => {
    const store = createStore(
      rootReducer,
    );
    return store;
}

export default configureStore;
import { createStore } from "redux";
import counterReducer from "./services/actions/reducers/counterReducer";




const store = createStore(counterReducer);


export default store;
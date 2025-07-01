import { createStore } from "redux";
import counterReducer from "./reduce";

const store = createStore(counterReducer)

export default store
import { createStore } from "redux";
import rootRedducer from "./reducer/Rootreducer";

const store = createStore(rootRedducer);

export default store;
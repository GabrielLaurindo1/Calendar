import { createStore } from "redux";
import { Reducers } from "./ducks";

export const store = createStore(Reducers);

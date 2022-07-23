import { createStore } from 'redux';

import { colorReducer } from "./reducers/buttons";

export const store = createStore(colorReducer);
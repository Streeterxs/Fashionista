import {createStore, combineReducers} from 'redux';

import {cartReducer} from './Reducers';
import {productsReducer} from'./Reducers';

const reducers = combineReducers({cartReducer, productsReducer});

export type RootState = ReturnType<typeof reducers>;

export const store = createStore(reducers);
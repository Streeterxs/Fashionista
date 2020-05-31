import {createStore} from 'redux';

import {cartReducer} from './Reducers';

export const store = createStore(cartReducer);
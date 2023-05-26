import {legacy_createStore as createStore} from 'redux';
import reducer from './Login-Signup/reducer';

export const store = createStore(reducer);
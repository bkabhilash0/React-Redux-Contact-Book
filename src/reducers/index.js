import {combineReducers} from 'redux';
import { contactsReducer } from './contactReducer';

export default combineReducers({
    contacts: contactsReducer
})
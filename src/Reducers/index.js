import {combineReducers} from 'redux';
import {userlists,userloading} from './users';
export default combineReducers({
    userlists,
    userloading
});
import loadReducer from './loadReducer';
import authReducer from './authReducer';
import {combineReducers} from 'redux';
import locationReducer from './locationReducer';
import unitReducer from './unitReducer';

const allReducers = combineReducers({
    loadStatus: loadReducer,
    authentication: authReducer,
    location: locationReducer,
    unit: unitReducer
});

export default allReducers;
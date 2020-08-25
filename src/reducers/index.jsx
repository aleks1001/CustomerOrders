import {combineReducers} from 'redux'
import customerReducer from './customer'
import templateReducer from './template'
import modalReducer from './modal'

/**
 * Combine all reducers.
 */
export default combineReducers({
    customer: customerReducer,
    template: templateReducer,
    modal: modalReducer,
})
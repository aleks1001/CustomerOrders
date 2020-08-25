import {takeLatest, all} from 'redux-saga/effects';
import {getCustomers, addCustomer, updateCustomer, deleteCustomer, searchCustomer} from './customer';
import {getTemplates, updateTemplate, addTemplate, deleteTemplate} from "./template";

/**
 * Listening for all these sagas
 * Once action is fired, call a particular worker
 * @returns {Generator<CombinatorEffect<"ALL", *>|SimpleEffect<"FORK", ForkEffectDescriptor<never>>, void, *>}
 */
export default function* rootSaga() {
    yield all([
        yield takeLatest('GET_CUSTOMERS', getCustomers),
        yield takeLatest('ADD_CUSTOMER', addCustomer),
        yield takeLatest('UPDATE_CUSTOMER', updateCustomer),
        yield takeLatest('DELETE_CUSTOMER', deleteCustomer),
        yield takeLatest('SEARCH_CUSTOMER', searchCustomer),

        yield takeLatest('GET_TEMPLATES', getTemplates),
        yield takeLatest('UPDATE_TEMPLATE', updateTemplate),
        yield takeLatest('ADD_TEMPLATE', addTemplate),
        yield takeLatest('DELETE_TEMPLATE', deleteTemplate),
    ]);
}
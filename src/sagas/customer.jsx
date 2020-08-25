import {put, select} from 'redux-saga/effects';
import {selectNewCustomer} from "../selectors/customer";
import {closeModal} from "../actions/modal";
import {getCustomers as getAllCustomers} from "../actions/customer";

/**
 * Get all customers
 * @returns {Generator<Promise<any>|SimpleEffect<"PUT", PutEffectDescriptor<{payload: *, type: string}>>, void, *>}
 */
export function* getCustomers() {
    const json = yield fetch('http://localhost:3000/customers')
        .then(response => response.json());
    yield put({type: "SAVE_CUSTOMERS", payload: json});
}

/**
 * Update a customer
 * @returns {Generator<SimpleEffect<"PUT", PutEffectDescriptor<{payload: {data: *, isNew: boolean}, type: string}>>|Promise<any>|SimpleEffect<"SELECT", SelectEffectDescriptor>|SimpleEffect<"PUT", PutEffectDescriptor<{type: string}>>, void, *>}
 */
export function* updateCustomer() {
    const newCustomer = yield select(selectNewCustomer);
    const json = yield fetch(`http://localhost:3000/customers/${newCustomer.id}`, {
        method: 'PUT',
        body: JSON.stringify(newCustomer),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json());
    yield put({type: "SAVE_CUSTOMER", payload: {data: json, isNew: false}});
    yield put(closeModal());
}

/**
 * Add a new customer
 * @returns {Generator<SimpleEffect<"PUT", PutEffectDescriptor<{payload: {data: *, isNew: boolean}, type: string}>>|Promise<any>|SimpleEffect<"SELECT", SelectEffectDescriptor>|SimpleEffect<"PUT", PutEffectDescriptor<{type: string}>>, void, *>}
 */
export function* addCustomer() {
    const newCustomer = yield select(selectNewCustomer);
    const json = yield fetch('http://localhost:3000/customers', {
        method: 'POST',
        body: JSON.stringify(newCustomer),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json());
    yield put({type: "SAVE_CUSTOMER", payload: {data: json, isNew: true}});
    yield put(closeModal());
}

/**
 * Delete a customer
 * @param payload customer id
 * @returns {Generator<Promise<Response>|SimpleEffect<"PUT", PutEffectDescriptor<{type: string}>>, void, *>}
 */
export function* deleteCustomer({payload}) {
    yield fetch(`http://localhost:3000/customers/${payload}`, {
        method: 'DELETE',
    })
    yield put(getAllCustomers())
}

/**
 * Search for a customer by email
 * @param payload email string
 * @returns {Generator<Promise<any>|SimpleEffect<"PUT", PutEffectDescriptor<{payload: *, type: string}>>, void, *>}
 */
export function* searchCustomer({payload}) {
    const json = yield fetch(`http://localhost:3000/customers?email_like=${payload}`)
        .then(response => response.json());
    yield put({type: "SAVE_CUSTOMERS", payload: json});
}
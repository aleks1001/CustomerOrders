import {put, select} from 'redux-saga/effects';
import {closeModal} from "../actions/modal";
import {getTemplates as getAllTemplates} from "../actions/template";
import {selectNewTemplate} from "../selectors/template";


/**
 * Get all templates
 * @returns {Generator<Promise<any>|SimpleEffect<"PUT", PutEffectDescriptor<{payload: *, type: string}>>, void, *>}
 */
export function* getTemplates() {
    const json = yield fetch('http://localhost:3000/templates')
        .then(response => response.json());
    yield put({type: "SAVE_TEMPLATES", payload: json});
}

/**
 * Update a template
 * @returns {Generator<SimpleEffect<"PUT", PutEffectDescriptor<{type: string}>>|SimpleEffect<"PUT", PutEffectDescriptor<{payload: {data: *, isNew: boolean}, type: string}>>|Promise<any>|SimpleEffect<"SELECT", SelectEffectDescriptor>, void, *>}
 */
export function* updateTemplate() {
    const newTemplate = yield select(selectNewTemplate);
    const json = yield fetch(`http://localhost:3000/templates/${newTemplate.id}`, {
        method: 'PUT',
        body: JSON.stringify(newTemplate),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json());
    yield put({type: "SAVE_TEMPLATE", payload: {data: json, isNew: false}});
    yield put(closeModal());
}

/**
 * Add a new template
 * @returns {Generator<SimpleEffect<"PUT", PutEffectDescriptor<{payload: {data: *, isNew: boolean}, type: string}>>|Promise<any>|SimpleEffect<"SELECT", SelectEffectDescriptor>|SimpleEffect<"PUT", PutEffectDescriptor<{type: string}>>, void, *>}
 */
export function* addTemplate() {
    const newTemplate = yield select(selectNewTemplate);
    const json = yield fetch('http://localhost:3000/templates', {
        method: 'POST',
        body: JSON.stringify(newTemplate),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json());
    yield put({type: "SAVE_TEMPLATE", payload: {data: json, isNew: true}});
    yield put(closeModal());
}

/**
 * Delete a template
 * @param payload template id
 * @returns {Generator<Promise<any>|SimpleEffect<"PUT", PutEffectDescriptor<{type: string}>>, void, *>}
 */
export function* deleteTemplate({payload}) {
    yield fetch(`http://localhost:3000/templates/${payload}`, {
        method: 'DELETE',
    })
        .then(response => response.json());
    yield put(getAllTemplates());
    yield put(closeModal());
}
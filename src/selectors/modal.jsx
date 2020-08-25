import {createSelector} from 'reselect'
import {addCustomerModalBody, addCustomerModalFooter} from '../components/Customer/AddCustomerModal';
import {editCustomerModalBody, editCustomerModalFooter} from "../components/Customer/EditCustomerModal";
import {editTemplateModalBody, editTemplateModalFooter} from "../components/Template/EditTemplateModal";
import {addTemplateModalBody, addTemplateModalFooter} from "../components/Template/AddTemplateModal";

export const modalName = state => state.modal.key;
const templates = state => state.template.plates;

/**
 * Choose a modal template base on a modal key.
 * @type {OutputSelector<unknown, unknown, (res1: ([]|*[]), res2: *) => unknown>}
 */
export const selectModalTemplate = createSelector(
    [templates, modalName],
    (plates, name) => {
        if (!name) return null;
        switch (name) {
            case 'addCustomer': {
                return {
                    title: 'Add Customer',
                    body: addCustomerModalBody,
                    footer: addCustomerModalFooter
                }
            }
            case 'editCustomer': {
                return {
                    title: 'Edit Customer',
                    body: editCustomerModalBody,
                    footer: editCustomerModalFooter,
                }
            }
            case 'editTemplate': {
                return {
                    title: 'Edit Template',
                    body: editTemplateModalBody,
                    footer: editTemplateModalFooter,
                }
            }
            case 'addTemplate': {
                return {
                    title: 'Add Template',
                    body: addTemplateModalBody,
                    footer: addTemplateModalFooter,
                }
            }
            default: {
                return {
                    title: 'Unknown!'
                };
            }
        }
    }
)
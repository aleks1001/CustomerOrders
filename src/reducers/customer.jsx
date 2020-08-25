import set from 'lodash.set';

const initialState = {
    customers: [],
    isCustomerSelected: false,
}

/**
 *
 * @param state
 * @param type
 * @param payload
 * @returns {{isCustomerSelected: boolean, customers: *}|{isCustomerSelected: boolean, customers: [], selectedCustomerId: *}|{isCustomerSelected: boolean, customers: *[]}|{isCustomerSelected: boolean, customers: [], customer: {[p: string]: *}}|{isCustomerSelected: boolean, editedCustomerIndex: number, customers: [], customer: {[p: string]: *}}|{isCustomerSelected: boolean, customers: []}}
 */
export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'CHANGE_CUSTOMER_PROPERTY': {
            set(state, payload.path, payload.value);
            return {
                ...state,
                customer: {
                    ...state.customer,
                }
            }
        }
        case 'SAVE_CUSTOMERS': {
            return {...state, customers: payload};
        }
        case 'SAVE_CUSTOMER':
            if (payload.isNew) {
                const customers = [...state.customers, payload.data];
                return {
                    ...state,
                    customers
                }
            } else {
                state.customers[state.editedCustomerIndex] = payload.data;
                const customers = [...state.customers]
                return {
                    ...state,
                    customers,
                }
            }
        case 'SELECT_CUSTOMER': {
            if (state.isCustomerSelected && state.selectedCustomerId === payload) {
                delete state.selectedCustomerId;
                return {
                    ...state,
                    isCustomerSelected: false,
                }
            }
            return {
                ...state,
                selectedCustomerId: payload,
                isCustomerSelected: true,
            }
        }
        case 'EDIT_CUSTOMER': {
            const index = state.customers.findIndex((c) => c.id === payload);
            return {
                ...state,
                editedCustomerIndex: index,
                customer: {
                    ...state.customers[index],
                },
            }
        }
        case 'CLOSE_MODAL': {
            delete state.customer;
            delete state.editedCustomerIndex;
            return {
                ...state,
            }
        }
        default:
            return state;
    }
}
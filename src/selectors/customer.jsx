import {createSelector} from 'reselect'

export const selectedCustomerId = state => state.customer.selectedCustomerId;
export const selectNewCustomer = state => state.customer.customer;
export const selectCustomers = state => state.customer.customers;
export const selectIsCustomerSelected = state => state.customer.isCustomerSelected;

/**
 * Select a customer that we clicked on
 * @type {OutputSelector<unknown, unknown, (res1: *, res2: *) => unknown>}
 */
export const selectSelectedCustomer = createSelector(
    [selectCustomers, selectedCustomerId],
    (items, id) => {
        if (id) {
            return items.filter(i => i.id === id)[0]
        }
        return id;
    }
)

/**
 * Select a customer order
 * @type {OutputSelector<unknown, unknown, (res1: *, res2: *) => unknown>}
 */
export const selectCustomerOrder = createSelector(
    [selectCustomers, selectedCustomerId],
    (items, id) => {
        if (id) {
            return items.filter(i => i.id === id)[0].last_order
        }
        return id;
    }
)
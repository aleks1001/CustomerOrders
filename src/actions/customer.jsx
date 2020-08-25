export const getCustomers = () => ({
    type: 'GET_CUSTOMERS',
});

export const getCustomer = (payload) => ({
    type: 'GET_CUSTOMER',
    payload,
})

export const selectCustomer = (payload) => ({
    type: 'SELECT_CUSTOMER',
    payload,
})

export const changeCustomerProperty = (payload) => ({
    type: 'CHANGE_CUSTOMER_PROPERTY',
    payload,
})

export const addCustomer = (payload) => ({
    type: 'ADD_CUSTOMER',
    payload
})

export const deleteCustomer = (payload) => ({
    type: 'DELETE_CUSTOMER',
    payload
})

export const editCustomer = (payload) => ({
    type: 'EDIT_CUSTOMER',
    payload,
})

export const updateCustomer = (payload) => ({
    type: 'UPDATE_CUSTOMER',
    payload,
})

export const customerSearch = (payload) => ({
    type: 'SEARCH_CUSTOMER',
    payload
})
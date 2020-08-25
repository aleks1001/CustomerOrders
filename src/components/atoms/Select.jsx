import React, {useEffect} from 'react';
import {Box, Label, Select} from "pcln-design-system";
import {useDispatch, useSelector} from "react-redux";
import {getCustomers, selectCustomer} from "../../actions/customer";
import {selectCustomers} from "../../selectors/customer";

const toFullName = (firstname, lastname) => {
    let str = '';
    if (firstname) {
        str += firstname
    }
    if (lastname) {
        if (firstname) {
            str += ' ';
        }
        str += lastname
    }
    return `${str}`;
}

export default () => {
    const dispatcher = useDispatch();
    const customers = useSelector(selectCustomers);
    useEffect(() => {
        dispatcher(getCustomers());
    }, [])

    const handleSelect = (value) => {
        dispatcher(selectCustomer(value));
    }
    return (
        <Box m={2}>
            <Label htmlFor="customer">Customer</Label>
            <Select
                defaultValue='default'
                onChange={(e) => handleSelect(e.target.value)}
                id="customer"
                name="customerTemplate"
            >
                <option value="default" disabled>Choose customer..</option>
                {customers.map(c => <option key={c.id} value={c.id}>{toFullName(c.firstname, c.lastname)}</option>)}
            </Select>
        </Box>
    )
}
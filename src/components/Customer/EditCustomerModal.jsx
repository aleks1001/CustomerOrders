import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeCustomerProperty, updateCustomer} from "../../actions/customer";
import {Box, Button, Flex, Input, Label} from "pcln-design-system";
import {closeModal} from "../../actions/modal";
import {selectNewCustomer} from "../../selectors/customer";

export const editCustomerModalBody = () => {
    const dispatcher = useDispatch()
    const customer = useSelector(selectNewCustomer);

    const handleChange = (value, path) => {
        dispatcher(changeCustomerProperty({value, path}))
    }

    return customer ? (
        <Box p={2}>
            <Box>
                <Label htmlFor='firstName'>FirstName</Label>
                <Input
                    onChange={(e) => handleChange(e.target.value, 'customer.firstname')}
                    id='firstName'
                    name='firstName'
                    value={customer.firstname}
                />
            </Box>
            <Box>
                <Label htmlFor='lastName'>LastName</Label>
                <Input
                    onChange={(e) => handleChange(e.target.value, 'customer.lastname')}
                    id='lastName'
                    name='lastName'
                    value={customer.lastname}
                />
            </Box>
            <Box>
                <Label htmlFor='email'>Email Address</Label>
                <Input
                    onChange={(e) => handleChange(e.target.value, 'customer.email')}
                    id='email'
                    name='email'
                    value={customer.email}
                />
            </Box>
        </Box>
    ) : null;
}

export const editCustomerModalFooter = () => {
    const dispatcher = useDispatch()

    const handleAction = () => {
        dispatcher(updateCustomer());
    }
    const handleClose = () => {
        dispatcher(closeModal());
    }
    return (
        <Flex p={2} justifyContent='space-between'>
            <Button onClick={handleAction}>Save</Button>
            <Button color='error' onClick={handleClose}>Close</Button>
        </Flex>
    )
}
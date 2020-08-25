import React from 'react';
import {useDispatch} from "react-redux";
import {Box, Button, Flex, Input, Label} from "pcln-design-system";
import {addCustomer, changeCustomerProperty} from "../../actions/customer";
import {closeModal} from "../../actions/modal";

export const addCustomerModalBody = () => {
    const dispatcher = useDispatch()
    const handleChange = (value, path) => {
        dispatcher(changeCustomerProperty({value, path}))
    }
    return (
        <Box p={2}>
            <Box>
                <Label htmlFor='firstName'>FirstName</Label>
                <Input
                    onChange={(e) => handleChange(e.target.value, 'customer.firstname')}
                    id='firstName'
                    name='firstName'
                />
            </Box>
            <Box>
                <Label htmlFor='lastName'>LastName</Label>
                <Input
                    onChange={(e) => handleChange(e.target.value, 'customer.lastname')}
                    id='lastName'
                    name='lastName'
                />
            </Box>
            <Box>
                <Label htmlFor='email'>Email Address</Label>
                <Input
                    onChange={(e) => handleChange(e.target.value, 'customer.email')}
                    id='email'
                    name='email'
                />
            </Box>
        </Box>
    )
}

export const addCustomerModalFooter = () => {
    const dispatcher = useDispatch()

    const handleAction = () => {
        dispatcher(addCustomer());
    }
    const handleClose = () => {
        dispatcher(closeModal());
    }
    return (
        <Flex p={2} justifyContent='space-between'>
            <Button onClick={handleAction}>Add</Button>
            <Button color='error' onClick={handleClose}>Close</Button>
        </Flex>
    )
}

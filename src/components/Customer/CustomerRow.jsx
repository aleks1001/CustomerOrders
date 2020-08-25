import {useDispatch, useSelector} from 'react-redux'
import React from "react";
import {Box, Flex, Text} from 'pcln-design-system';
import {selectCustomer} from "../../actions/customer";
import {selectSelectedCustomer} from '../../selectors/customer';
import Row from '../atoms/Row';
import {Edit, Close} from "pcln-icons";

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

export default ({id, firstname, lastname, email, onEdit, onDelete, ...rest}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(selectCustomer(id));
    }
    const handleEdit = () => {
        if (onEdit) {
            onEdit();
        }
    }
    const handleDelete = () => {
        if (onDelete) {
            onDelete();
        }
    }
    return (
        <Row p={2} {...rest} justifyContent='space-between'>
            <Box width='95%' mr={2} onClick={handleClick}>
                <Flex justifyContent='space-between' alignItems='center'>
                    <Box>{toFullName(firstname, lastname)}</Box>
                    <Text color='gray' italic ml={2} fontSize={0}>{email}</Text>
                </Flex>
            </Box>
            <Box>
                <Flex alignItems='center'>
                    <Edit color='primary' onClick={handleEdit} size={18}/>
                    <Close color='error' onClick={handleDelete} size={20}/>
                </Flex>
            </Box>

        </Row>
    )
}
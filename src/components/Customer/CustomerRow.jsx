import {useDispatch, useSelector} from 'react-redux'
import React from "react";
import {Box} from 'pcln-design-system';
import {selectCustomer} from "../../actions/customer";
import {selectOneCustomer} from '../../selectors/customer';
import Row from '../atoms/Row';
import {Edit} from "pcln-icons";

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

export default ({id, firstname, lastname, email, onEdit,...rest}) => {
    const dispatch = useDispatch();
    const customer = useSelector(selectOneCustomer);
    const handleClick = () => {
        if (!customer || customer.id !== id) {
            dispatch(selectCustomer(id));
        }
    }
    const handleEdit = () => {
        if (onEdit) {
            onEdit();
        }
    }
    return (
        <Row p={2} {...rest} justifyContent='space-between'>
            <Box width='95%' onClick={handleClick}>{toFullName(firstname, lastname)}</Box>
            <Edit onClick={handleEdit} size={18}/>
        </Row>
    )
}
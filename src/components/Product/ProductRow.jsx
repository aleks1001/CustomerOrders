import {useDispatch, useSelector} from 'react-redux'
import React from "react";
import {Box, Flex, Text} from 'pcln-design-system';
import {selectCustomer} from "../../actions/customer";
import Row from '../atoms/Row';
import {Edit, Close} from "pcln-icons";

export default ({id, product_name, product_desc, onEdit, onDelete,...rest}) => {
    // const dispatch = useDispatch();
    // const customer = useSelector(selectCustomers);
    const handleClick = () => {
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
            <Text>{product_name}</Text>
            <Box>
                <Flex>
                    <Edit color='primary' onClick={handleEdit} size={18}/>
                    <Close color='error' onClick={handleDelete} size={20} />
                </Flex>
            </Box>

        </Row>
    )
}
import React from "react";
import Row from '../atoms/Row';
import {Text} from 'pcln-design-system';
import {Edit} from "pcln-icons";

export default ({id, name, onEdit, ...rest}) => {
    const handleEdit = () => {
        if (onEdit) {
            onEdit();
        }
    }
    return (
        <Row p={2} {...rest} justifyContent='space-between'>
            <Text>{name}</Text>
            <Edit onClick={handleEdit} size={18}/>
        </Row>
    )
}
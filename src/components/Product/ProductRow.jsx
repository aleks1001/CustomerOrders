import React from "react";
import {Box, Flex, Text} from 'pcln-design-system';
import Row from '../atoms/Row';
import {Close} from "pcln-icons";

export default ({id, product_name, product_desc, onDelete, ...rest}) => {
    const handleDelete = () => {
        if (onDelete) {
            onDelete();
        }
    }
    return (
        <>
            <Row p={2} {...rest} justifyContent='space-between' alignItems='center'>
                <Box>
                    <Text>{product_name}</Text>
                    <Text color='gray' fontSize={0}>{product_desc}</Text>
                </Box>
                <Box>
                    <Flex>
                        <Close color='error' onClick={handleDelete} size={20}/>
                    </Flex>
                </Box>
            </Row>
        </>
    )
}
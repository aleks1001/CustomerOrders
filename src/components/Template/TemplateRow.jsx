import React from "react";
import Row from '../atoms/Row';
import {Flex, Text, Box} from 'pcln-design-system';
import {Edit, Close, Download} from "pcln-icons";
import styled, {keyframes} from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(180deg);
  }
`;

const AnimatedEdit = styled(Edit)`
    &:hover {
        animation: ${rotate} 0.2s linear 1;
    }
`

export default ({id, name, content, onClick, onEdit, onDelete, ...rest}) => {
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

    const handleAction = () => {
        if (onClick) {
            onClick();
        }
    }
    return (
        <Row p={2} {...rest} justifyContent='space-between'>
            <Box width='95%' onClick={handleAction}>
                <Text>{name}</Text>
            </Box>
            <Box>
                <Flex>
                    <AnimatedEdit color='primary' onClick={handleEdit} size={18}/>
                    <Close color='error' onClick={handleDelete} size={20}/>
                </Flex>
            </Box>
        </Row>
    )
}
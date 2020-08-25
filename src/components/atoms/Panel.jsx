import {Badge, Box, Card, Flex, Text, IconButton} from "pcln-design-system";
import React from "react";
import Header from "./Header";
import {Plus} from "pcln-icons";

const HeaderBox = ({text, count, onAdd, ...rest}) => {
    const handleClick = () => {
        if (onAdd) {
            onAdd()
        }
    }
    return (
        <Header {...rest} p={2} justifyContent='space-between'>
            <Box>
                <Text fontSize={18} color='white'>{text}</Text>
            </Box>
            <Box>
                <Flex>
                    {count > 0 && <IconButton data-testid='clicker' onClick={handleClick} icon={<Plus color='white' />} />}
                    {count > 0 && <Badge bg='green' mr={2}>{count}</Badge>}
                </Flex>
            </Box>
        </Header>
    )
}

export default ({text, children, onAdd, count, ...rest}) => {
    return (
        <Card
            {...rest}
            boxShadowSize='xl'
            borderWidth={1}
            borderRadius={2}
        >
            <HeaderBox onAdd={onAdd} text={text} count={count}/>
            <Box>
                {children}
            </Box>
        </Card>
    )
}
import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Box, Button, Flex, Input, Label, TextArea} from "pcln-design-system";
import {selectNewTemplate} from "../../selectors/template";
import {closeModal} from "../../actions/modal";
import {addTemplate, changeTemplateProperty, updateTemplate} from "../../actions/template";

export const addTemplateModalBody = () => {
    const dispatcher = useDispatch()
    const handleChange = (value, path) => {
        dispatcher(changeTemplateProperty({value, path}))
    }
    return (
        <Box p={2}>
            <Box>
                <Label htmlFor='name'>TemplateName</Label>
                <Input
                    onChange={(e) => handleChange(e.target.value, 'plate.name')}
                    id='name'
                    name='name'
                />
            </Box>
            <Box>
                <Label htmlFor='content'>Content</Label>
                <TextArea
                    onChange={(e) => handleChange(e.target.value, 'plate.content')}
                    id='content'
                    name='content'
                />
            </Box>
        </Box>
    );
}

export const addTemplateModalFooter = () => {
    const dispatcher = useDispatch()

    const handleAction = () => {
        dispatcher(addTemplate());
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
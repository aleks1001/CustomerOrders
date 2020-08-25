import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Box, Button, Flex, Input, Label, TextArea} from "pcln-design-system";
import {selectNewTemplate} from "../../selectors/template";
import {closeModal} from "../../actions/modal";
import {changeTemplateProperty, updateTemplate} from "../../actions/template";

export const editTemplateModalBody = () => {
    const dispatcher = useDispatch()
    const template = useSelector(selectNewTemplate);

    const handleChange = (value, path) => {
        dispatcher(changeTemplateProperty({value, path}))
    }

    return template ? (
        <Box p={2}>
            <Box>
                <Label htmlFor='name'>TemplateName</Label>
                <Input
                    onChange={(e) => handleChange(e.target.value, 'plate.name')}
                    id='name'
                    name='name'
                    value={template.name}
                />
            </Box>
            <Box>
                <Label htmlFor='content'>Content</Label>
                <TextArea
                    onChange={(e) => handleChange(e.target.value, 'plate.content')}
                    id='content'
                    name='content'
                    value={template.content}
                />
            </Box>
        </Box>
    ) : null;
}

export const editTemplateModalFooter = () => {
    const dispatcher = useDispatch()

    const handleAction = () => {
        dispatcher(updateTemplate());
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
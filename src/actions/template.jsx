export const getTemplates = () => ({
    type: 'GET_TEMPLATES',
});

export const saveTemplates = (payload) => ({
    type: 'SAVE_TEMPLATES',
    payload,
})

export const addTemplate = (payload) => ({
    type: 'ADD_TEMPLATE',
    payload,
})

export const editTemplate = (payload) => ({
    type: 'EDIT_TEMPLATE',
    payload,
})

export const selectTemplate = (payload) => ({
    type: 'SELECT_TEMPLATE',
    payload,
})

export const updateTemplate = (payload) => ({
    type: 'UPDATE_TEMPLATE',
    payload,
})

export const deleteTemplate = (payload) => ({
    type: 'DELETE_TEMPLATE',
    payload,
})

export const changeTemplateProperty = (payload) => ({
    type: 'CHANGE_TEMPLATE_PROPERTY',
    payload,
})
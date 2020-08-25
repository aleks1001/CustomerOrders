/**
 * Action to open a modal
 * @param payload modal key
 * @returns {{payload: *, type: string}}
 */
export const openModal = (payload) => ({
    type: 'OPEN_MODAL',
    payload,
});

/**
 * Action to close a modal
 * @returns {{type: string}}
 */
export const closeModal = () => ({
    type: 'CLOSE_MODAL'
})
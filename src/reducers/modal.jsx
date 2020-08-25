const initialState = {
    isOpen: false,
    key: null,
}

/**
 *
 * @param state
 * @param type
 * @param payload
 * @returns {{isOpen: boolean, key: null}|{isOpen: boolean, key: *}}
 */
export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'OPEN_MODAL': {
            return {
                ...state,
                isOpen: true,
                key: payload
            }
        }
        case 'CLOSE_MODAL': {
            return {
                ...state,
                isOpen: false,
                key: null
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}
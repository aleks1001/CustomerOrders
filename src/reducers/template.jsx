import set from "lodash.set";

const initialState = {
    plates: [],
    isTemplateSelected: false,
}

/**
 *
 * @param state
 * @param type
 * @param payload
 * @returns {{plates: [], plate: {[p: string]: *}, isTemplateSelected: boolean}|{plates: *[], isTemplateSelected: boolean}|{plates: *, isTemplateSelected: boolean}|{plates: [], isTemplateSelected: boolean}|{plates: [], selectedTemplateId: *, isTemplateSelected: boolean}|{plates: [], editedTemplateIndex: number, plate: {[p: string]: *}, isTemplateSelected: boolean}}
 */
export default (state = initialState, {type, payload}) => {
    switch (type) {
        case 'CHANGE_TEMPLATE_PROPERTY': {
            set(state, payload.path, payload.value);
            return {
                ...state,
                plate: {
                    ...state.plate,
                }
            }
        }
        case 'SAVE_TEMPLATES': {
            return {
                ...state,
                plates: payload
            }
        }
        case 'SAVE_TEMPLATE':
            if (payload.isNew) {
                const plates = [...state.plates, payload.data];
                return {
                    ...state,
                    plates
                }
            } else {
                state.plates[state.editedTemplateIndex] = payload.data;
                const plates = [...state.plates]
                return {
                    ...state,
                    plates,
                }
            }
        case 'EDIT_TEMPLATE': {
            const index = state.plates.findIndex((t) => t.id === payload);
            return {
                ...state,
                editedTemplateIndex: index,
                plate: {
                    ...state.plates[index],
                },
            }
        }
        case 'SELECT_TEMPLATE': {
            if (state.isTemplateSelected && state.selectedTemplateId === payload) {
                delete state.selectedTemplateId;
                return {
                    ...state,
                    isTemplateSelected: false,
                }
            }
            return {
                ...state,
                isTemplateSelected: true,
                selectedTemplateId: payload,
            }
        }
        case 'CLOSE_MODAL': {
            delete state.plate;
            delete state.editedTemplateIndex;
            return {
                ...state,
            }
        }
        default: {
            return {
                ...state,
            }
        }
    }
}
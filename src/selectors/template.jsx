import {createSelector} from 'reselect'

export const selectTemplates = state => state.template.plates;
export const selectNewTemplate = state => state.template.plate;
export const selectIsTemplateSelected = state => state.template.isTemplateSelected;
export const selectSelectedTemplateId = state => state.template.selectedTemplateId;

/**
 * Select a template we cliked on
 * @type {OutputSelector<unknown, unknown, (res1: ([]|*[]), res2: *) => unknown>}
 */
export const selectSelectedTemplate = createSelector(
    [selectTemplates, selectSelectedTemplateId],
    (items, id) => {
        if (id) {
            return items.filter(t => t.id === id)[0]
        }
        return id
    }
)
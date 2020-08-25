import {createSelector} from 'reselect'

export const templates = state => state.template.plates;

export const selectAddCustomerPlate = createSelector(
    [templates],
    (items) => items[1]
)
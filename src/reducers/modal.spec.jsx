import modalReducer from './modal'
import {openModal, closeModal} from '../actions/modal'

describe('Modal Reducer', () => {
    it('set the key and isOpen true', () => {

        const initialState = {
            isOpen: false,
            key: null
        }
        expect(modalReducer(initialState, openModal('add')))
            .toEqual({
                isOpen: true,
                key: 'add'
            });
    });
    it('set clears the key and isOpen false', () => {

        const initialState = {
            isOpen: true,
            key: 'add'
        }
        expect(modalReducer(initialState, closeModal()))
            .toEqual({
                isOpen: false,
                key: null
            });
    });
})
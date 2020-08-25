import {selectSelectedCustomer} from './customer'
import {customers} from '../../data/data.json'

describe('Test customer selectors', function () {
    it('should call selectSelectedCustomer', function () {
        const mockObject = {
            items: customers,
            id: customers[5].id
        }

        const result = selectSelectedCustomer.resultFunc(mockObject.items, mockObject.id)
        expect(result.email).toEqual(customers[5].email)
    });
});
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {deleteCustomer, editCustomer, getCustomers} from "../../actions/customer";
import {Flex, Flag} from "pcln-design-system";
import {selectCustomerOrder, selectIsCustomerSelected, selectCustomers} from "../../selectors/customer";
import {openModal} from "../../actions/modal";
import Panel from "../atoms/Panel";
import CustomerRow from "../Customer/CustomerRow";
import ProductRow from "../Product/ProductRow";

const LeftSide = (props) => {
    const dispatcher = useDispatch();
    const customers = useSelector(selectCustomers);
    const handleEdit = (id) => {
        dispatcher(editCustomer(id));
        dispatcher(openModal('editCustomer'));
    }
    const handleAdd = () => {
        dispatcher(openModal('addCustomer'));
    }
    const handleDelete = (id) => {
        dispatcher(deleteCustomer(id));
    }
    return (
        <Panel {...props} onAdd={handleAdd} count={customers.length}>
            {customers.map((c) => <CustomerRow
                onDelete={() => handleDelete(c.id)}
                key={c.id}
                {...c}
                onEdit={() => handleEdit(c.id)}
            />)}
        </Panel>
    )
}

const RightSide = (props) => {
    const order = useSelector(selectCustomerOrder);
    return order ? (
        <Panel {...props} count={order.products.length}>
            <Flag mt='6px' width={190} bg='green'>
                {order.timestamp}
            </Flag>
            {order.products.map(p => <ProductRow key={p.id} {...p} />)}
        </Panel>
    ) : null;
}

const Center = (props) => {
    return (
        <Panel {...props}>

        </Panel>
    )
}

const OrderPage = () => {
    const dispatcher = useDispatch();
    const customers = useSelector(selectCustomers)
    const isCustomerSelected = useSelector(selectIsCustomerSelected)

    useEffect(() => {
        dispatcher(getCustomers());
    }, [])
    return (
        <>
            <Flex>
                {customers && customers.length > 0 && (
                    <LeftSide style={{height: 'max-content'}} text='Customers' width={isCustomerSelected ? 1 / 2 : 1}/>
                )}
                {isCustomerSelected && <RightSide style={{height: 'max-content'}} text='Order' width={1 / 2} ml={3}/>}
            </Flex>
        </>
    )
}

export default OrderPage
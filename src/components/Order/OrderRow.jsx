import React from "react";
import Row from '../atoms/Row';

export default ({product_desc, product_id, product_name}) => {
    return (
        <>
            <Row p={2}>{product_name}</Row>
        </>
    )
}
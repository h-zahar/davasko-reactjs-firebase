import React from 'react';

const Order = (props) => {
    const { fullName, email, offerName } = props.order;
    return (
        <div>
            <div>
                <h3>{offerName}</h3>
                <p>{fullName}</p>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Order;
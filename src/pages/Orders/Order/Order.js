import React from 'react';
import { Button } from 'react-bootstrap';

const Order = (props) => {
    const { _id, fullName, email, offerName } = props.order;
    const { orders, setOrders } = props;

    const handleDelete = (id) => {
        if(window.confirm('Are you sure to cancel booking?'))
        {
            fetch(`http://localhost:5000/orders/${_id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            .then(res => res.json())
            .then(data => {
                const remaining = orders.filter(single => single._id !== id);
                setOrders(remaining);
            });
        }
    };
    return (
        <div>
            <div>
                <h3>{offerName}</h3>
                <p>{fullName}</p>
                <p>{email}</p>
                <Button onClick={() => handleDelete(_id)} className="fs-6 px-2 py-0 rounded-circle" variant="danger">x</Button>
            </div>
        </div>
    )
}

export default Order;
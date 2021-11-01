import React from 'react';
import { Button } from 'react-bootstrap';
import './Order.css';

const Order = (props) => {
    const { _id, fullName, email, offerName, isAproved } = props.order;
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
        <div style={{minWidth: '250px', backgroundColor: 'rgba(0, 0, 0, 0.1)', boxShadow: '1px 1px 8px rgba(0, 0, 0, 0.7)'}} className="rounded mx-3 my-4 d-flex justify-content-center">
            <div className="text-center p-4">
                <h3>{offerName}</h3>
                <p>{fullName}</p>
                <p>{email}</p>
                {
                    isAproved ?
                    <p>Status: <span className="text-success">Approved</span></p> :
                    <p>Status: <span className="text-danger">Pending</span></p>
                }

                <Button onClick={() => handleDelete(_id)} className="btn-cross fs-6 px-2 py-0 rounded-circle" variant="danger">x</Button>
            </div>         
        </div>
    )
}

export default Order;
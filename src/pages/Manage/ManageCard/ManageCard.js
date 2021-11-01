import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';

const ManageCard = (props) => {
    const { _id, fullName, email, offerName, phoneNumber, address } = props.all;
    const {allOrders, setAllOrders} = props;

    // const handleIsAproved = (id) => {
    //     fetch(`http:localhost:5000/orders/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(props.all)
    //     })
    //     .then(data => console.log(data));
    // };

    const handleDelete = (id) => {
        if (window.confirm('Do you really wanna cancel?')) {
            fetch(`http://localhost:5000/orders/${_id}`, {
                method: 'DELETE',
                'Content-Type': 'application/json'
            })
            .then(res => res.json)
            .then(data => {
                if(data) {
                    const remaining = allOrders.filter(single => single._id !== id);
                    setAllOrders(remaining);
                }
            });
        }
    }

    return (
        <div>
            <div className="d-flex">
                <p>{_id}</p>
                <p>{fullName}</p>
                <p>{email}</p>
                <p>{phoneNumber}</p>
                <p>{address}</p>
                {/* {
                    isAproved ?
                    <p>Approved</p> :
                    <p>Pending</p>
                } */}
                <p>{offerName}</p>
                <Button variant="danger" onClick={() => handleDelete(_id)}>Cancel</Button>
            </div>
        </div>
    )
}

export default ManageCard;
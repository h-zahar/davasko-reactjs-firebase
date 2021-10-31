import React from 'react';
import { Button } from 'react-bootstrap';

const ManageCard = (props) => {
    const { _id, fullName, email, offerName, phoneNumber, address, isAproved } = props.all;

    // const updatedStatus = { isAproved: isAproved };

    // const handleIsAproved = (id, reverseAproved) => {
    //     fetch(`http://localhost:5000/orders/${id}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(props.all)
    //     })
    //     .then(data => console.log(data));
    // };

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
                    <Button variant="success">Approved</Button> :
                    <Button onClick={() => handleIsAproved(_id, !isAproved)} variant="danger">Pending</Button>
                } */}
                <p>{offerName}</p>
            </div>
        </div>
    )
}

export default ManageCard;
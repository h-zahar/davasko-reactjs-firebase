import React from 'react';

const ManageCard = (props) => {
    const { _id, fullName, email, offerName, phoneNumber, address } = props.all;

    return (
        <div>
            <h2>{fullName}</h2>
        </div>
    )
}

export default ManageCard;
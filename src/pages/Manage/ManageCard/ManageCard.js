import { Button } from 'react-bootstrap';
import './ManageCard.css';

const ManageCard = (props) => {
    const {all} = props;
    const { _id, fullName, email, offerName, phoneNumber, address } = props.all;
    const {allOrders, setAllOrders} = props;

    const handleIsAproved = (id) => {
        fetch('https://api-davasko.onrender.com/orders', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(all)
        })
        .then(res => res.json())
        .then(data => {
            all.isAproved = data.isAproved;
            const updated = allOrders.map(single => {
                if (single._id === id) {
                    single.isAproved = all.isAproved;
                    return single;
                }
                else {
                    return single;
                }
            });
            setAllOrders(updated);
        })
    };

    const handleDelete = (id) => {
        if (window.confirm('Do you really wanna cancel?')) {
            fetch(`https://api-davasko.onrender.com/orders/${_id}`, {
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
        <div style={{minWidth: '280px', backgroundColor: 'rgba(0, 0, 0, 0.1)', boxShadow: '1px 1px 8px rgba(0, 0, 0, 0.7)'}} className="rounded mx-3 my-4 d-flex justify-content-center text-center">
        <div className="p-4">
        <p><strong>{_id}</strong></p>
        <p>{fullName}</p>
        <p><strong>{email}</strong></p>
        <p>{phoneNumber}</p>
        <p>{address}</p>
        <p><strong>{offerName}</strong></p>
        <div className="my-4">
        {
            all.isAproved ?
            <Button className="btn-aproved" onClick={() => handleIsAproved(_id)}><span>Approved</span></Button> :
            <Button className="btn-pending" onClick={() => handleIsAproved(_id)}><span>Pending</span></Button>
        }
        </div>
        <Button variant="danger" onClick={() => handleDelete(_id)}>Cancel</Button>
    
        </div>
    </div>
    )
}

export default ManageCard;
import React, { useEffect, useState } from 'react';
import ManageCard from '../ManageCard/ManageCard';

const Manage = () => {
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('https://morning-ridge-69827.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setAllOrders(data));
    }, []);
    return (
        <div style={{minHeight: '70vh'}}>
            <h2 className="my-5 text-center">Manage Orders</h2>
            <div className="d-flex flex-wrap justify-content-center mb-5">
                {
                    allOrders.map(all => {
                        return <ManageCard key={all?._id} all={all} allOrders={allOrders} setAllOrders={setAllOrders} />
                    })
                }
            </div>
        </div>
    )
}

export default Manage;
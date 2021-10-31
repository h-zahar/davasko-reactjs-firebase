import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import ManageCard from '../ManageCard/ManageCard';

const Manage = () => {
    const {isLoading} = useAuth();
    const [allOrders, setAllOrders] = useState([]);
    useEffect(() => {
        fetch('https://morning-ridge-69827.herokuapp.com/orders')
        .then(res => res.json())
        .then(data => setAllOrders(data));
    }, [isLoading, allOrders]);
    return (
        <div>
            <h2 className="my-5 text-center">Manage Orders</h2>
            <div>
                {
                    allOrders.map(all => {
                        return <ManageCard key={all?._id} all={all} />
                    })
                }
            </div>
        </div>
    )
}

export default Manage;
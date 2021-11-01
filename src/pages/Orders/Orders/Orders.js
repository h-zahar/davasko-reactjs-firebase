import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useHistory } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import Order from '../Order/Order';

const Orders = () => {
    const { user } = useAuth();

    const [orders, setOrders] = useState([]);
    
    useEffect(() => {
        if(user?.email) {
            console.log(user.email);
            fetch(`https://morning-ridge-69827.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data.filter(elem => elem.email === user?.email)));
        }
    }, [user?.email]);

    return (
        <div style={{minHeight: '70vh'}}>
            <h2 className="my-5 text-center">Your Orders</h2>
            <Container>
                <div className="d-flex flex-wrap justify-content-center">
                    {
                        orders.map(order => {
                            return <Order key={order?._id} order={order} orders={orders} setOrders={setOrders} />
                        })
                    }
                </div>
            </Container>
        </div>
    )
}

export default Orders;
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const {id} = useParams();
    const history = useHistory();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const redirected_uri = '/orders';

    const [orderInPlace, setOrderInPlace] = useState({});
    useEffect(() => {
        fetch(`https://morning-ridge-69827.herokuapp.com/offerings/${id}`)
        .then(res => res.json())
        .then(data => setOrderInPlace(data));
    }, []);

    const onSubmit = data => {
        console.log(data);
        data.isAproved = false;
        
        fetch('https://morning-ridge-69827.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(data => { })
        .finally(() => { history.push(redirected_uri) });

    }
    const { user } = useAuth();

    return (
        <div style={{minHeight: '70vh'}}>
            <Container>
                <div className="d-flex flex-wrap justify-content-around">
                    <div className="mt-5" style={{maxWidth: '400px', minWidth: '250px'}}>
                        <h2>{orderInPlace?.name}</h2>
                        <div className="mt-4 mb-3 text-secondary">
                            {
                                <p>
                                    {orderInPlace?.short_description}
                                </p>
                            }
                        </div>

                        <div style={{maxWidth: '400px', minWidth: '250px'}}>
                            {
                                <img className="w-100" src={orderInPlace?.img_i} alt="" />
                            }
                        </div>
                        <div className="mt-3 mb-5">
                            {
                                <p>
                                    {orderInPlace?.long_description}
                                </p>
                            }
                        </div>
                    </div>
                    

                    <div className="d-flex align-items-center">
                        <div className="d-flex justify-content-center my-5">
                        { orderInPlace?.name &&
                        <form style={{maxWidth: '450px', minWidth: '280px'}} className="d-flex flex-column p-5 shadow-lg rounded" onSubmit={handleSubmit(onSubmit)}>
                            <h4 className="text-center mb-3">Place Order</h4>
                            <input className="my-2" placeholder="Full Name" {...register("fullName", { required: true})} defaultValue={user?.displayName} />
                            {errors.fullName && <span className="mb-2 text-danger">Something's not correct</span>}

                            <input className="my-2" placeholder="Email" type="email" {...register("email", { required: true })} defaultValue={user?.email} />
                            {errors.email && <span className="mb-2 text-danger">Something's not correct</span>}

                            <input className="my-2" placeholder="Offering" {...register("offerName", { required: true })} defaultValue={orderInPlace?.name} />
                            {errors.offerName && <span className="mb-2 text-danger">Something's not correct</span>}

                            <input className="my-2" placeholder="Phone Number" {...register("phoneNumber", { required: true, pattern: /^[0-9]+$/i })} />
                            {errors.phoneNumber && <span className="mb-2 text-danger">Something's not correct</span>}

                            <input className="my-2" placeholder="Address" {...register("address", { required: true })} />
                            {errors.address && <span className="mb-2 text-danger"> Something's not correct</span>}

                            <p className="mt-3 text-center">Status: <span className="text-danger">Pending</span></p>

                            <input className="btn-submit my-2 py-2 text-light" type="submit" value="Place" />
                        </form> }
                    </div>
                    </div>

                </div>
            </Container>
        </div>
    )
}

export default PlaceOrder;
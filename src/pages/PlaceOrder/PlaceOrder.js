import React from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import './PlaceOrder.css';

const PlaceOrder = () => {
    const {id} = useParams();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
            <div className="d-flex justify-content-center my-5">
                <form style={{maxWidth: '450px', minWidth: '280px'}} className="d-flex flex-column p-5 shadow-lg rounded" onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="text-center mb-3">Place Order</h4>
                    <input className="my-2" placeholder="Full Name" {...register("fullName", { required: true})} />
                    <input className="my-2" placeholder="Email" typw="email" {...register("email", { required: true })} />
                    <input className="my-2" placeholder="Offering" {...register("offerName", { required: true })} value={id} />
                    <input className="btn-submit my-2 py-2 text-light" type="submit" />
                </form>
            </div>
        </div>
    )
}

export default PlaceOrder;
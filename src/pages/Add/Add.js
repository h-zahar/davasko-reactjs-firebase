import React from 'react';
import { useForm } from 'react-hook-form';

const Add = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/offerings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(data => { });
    };

    return (
        <div>
            <div class="my-5 d-flex justify-content-center">
            <form style={{maxWidth: '450px', minWidth: '280px'}} className="d-flex flex-column p-5 shadow-lg rounded" onSubmit={handleSubmit(onSubmit)}>
                    <h4 className="text-center mb-3">Entry</h4>
                    <input className="my-2" placeholder="Title" {...register("name", { required: true})} />
                    {errors.name && <span className="mb-2 text-danger">Something's not correct</span>}

                    <input className="my-2" placeholder="Short Description" {...register("short_description", { required: true, maxLength: 20 })} />
                    {errors.short_description && <span className="mb-2 text-danger">Something's not correct</span>}

                    <input className="my-2" placeholder="Image URL" {...register("img_i", { required: true })} />
                    {errors.img_i && <span className="mb-2 text-danger">Something's not correct</span>}

                    <input className="my-2 py-2" type="submit" value="Submit" />
                </form> 
            </div>
        </div>
    )
}

export default Add;
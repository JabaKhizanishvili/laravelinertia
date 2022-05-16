import { Link } from '@inertiajs/inertia-react'
import React, { useState } from 'react'
import { Inertia } from '@inertiajs/inertia'
import { usePage } from '@inertiajs/inertia-react'
import { useForm } from '@inertiajs/inertia-react'
import Swal from 'sweetalert2'


function About({ name, sharedData, welcome, success }) {
    const Swal = require('sweetalert2')
    if (success) {
        Swal.fire({
            title: 'success',
            text: 'წარმატებით დაემატა',
            icon: 'success',
            confirmButtonText: 'Cool'
        })
    }

    const { errors } = usePage().props

    const [values, setValues] = useState({
        name: "",
        weight: "",
    })

    function handleChange(e) {
        setValues(values => ({
            ...values,
            [e.target.id]: e.target.value,
        }))
    }


    function handleSubmit(e) {
        e.preventDefault()
        Inertia.post('/products', values)
    }

    // const { data, setData, post, processing, errors } = useForm({
    //     name: '',
    //     weight: '',
    // })


    // const { error } = usePage().props

    // console.log(error);

    // function submit(e) {
    //     e.preventDefault()
    //     post('/products')
    // }



    return (
        <>
            <h2>{welcome}</h2>
            {
                sharedData.map((e, k) => {
                    return (
                        <div key={k} className='shadow p-3 mb-5 bg-body rounded' style={{ width: '200px' }}>
                            <p>{e.name}</p>
                            <p> {e.weight}</p>
                            {/* <p> {e.id}</p> */}
                            <Link href={`/del/${e.id}`} className='btn btn-danger'>del</Link>
                        </div>
                    )
                })
            }
            <div>
                <h2>About</h2>
                <p>Hello {name}</p>
                <Link href='/' >about</Link>
            </div >


            <form onSubmit={handleSubmit} className='w-25 shadow p-3 mb-5 bg-body rounded'>
                <input className="form-control" id="name" placeholder='name' type="text" onChange={handleChange} />
                {errors.name && <div className="alert-danger">{errors.name}</div>}
                <input className="form-control" id="weight" placeholder='weight' type="text" onChange={handleChange} />
                {errors.weight && <div className="alert-danger">{errors.weight}</div>}
                <button type="submit" className="btn btn-primary mt-2">Login</button>
            </form>

        </>
    )
}

export default About;

import React from "react";
import { Link } from '@inertiajs/inertia-react'
import { usePage } from '@inertiajs/inertia-react'

export default function Home() {
    const { name, age } = usePage().props
    return (
        <div>
            <p>{name} ang age {age}</p>
            <h2>Home Page</h2>
            <Link className='btn btn-primary' href='/about'>about</Link>
        </div >
    )
}

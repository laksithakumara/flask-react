import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => (
    <div>
        <h1>Homepage page</h1>
        <Link to='/login'>Go Login page</Link>
    </div>
)

export default HomePage
import React from 'react'
import {Link} from 'react-router'

const NotFound = () => (
      <article>
        <h1>Page not found.</h1>
        <Link to='/' className='btn'>Home</Link>
      </article>
)

export default NotFound

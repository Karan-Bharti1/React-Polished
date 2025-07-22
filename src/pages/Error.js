import React from 'react'
import { Link } from 'react-router-dom'
import { useRouteError } from 'react-router-dom'
function Error() {
    const error=useRouteError()
  return (
    <div className='error-page'>
        
        <h2>Opps! Something went Wrong</h2>
        <h3>{error.status}: {error.statusText}</h3>
        <Link className='secondary-button' to="/">Back to Flames</Link>
        
    </div>
  )
}

export default Error
import React from 'react'
import { useOutlet, useRouteError } from 'react-router-dom'

const Error = () => {
  const errObj = useRouteError()
  console.log(errObj);
  return (
      <div style={{marginLeft: 425, marginTop: 200}}>
        <h1>Sorry for the inconvenience caused!</h1>
        <h2>The error is: {errObj.error.message}</h2>
    </div>
  )
}

export default Error

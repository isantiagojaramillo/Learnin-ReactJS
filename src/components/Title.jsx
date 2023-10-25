import React from 'react';


export const Title = ({user = "usuario", color="yellow"}) => {
  return (
    <h1 className='title' style = {{color: color}}>Hello {user}</h1>
  )
}


import React from 'react';
import { Title } from "./Title";

const country = null;
const friends = ['Alejo', 'Santi', 'El lindo'];

// COMPONENT
export const User = () => {
  return (
    <>
        <Title user = "Sara" color="red" />
        <Title user = "Santiago" color="gray" />
        <Title />
        <p>Have a nice day!</p>
        {country && <p>you're from: {country}</p>}
        <ul>
          {friends.map((friend, id) => <li key={id}>{friend}</li> )}
        </ul>
      </>
  )
}

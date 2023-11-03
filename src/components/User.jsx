import React from 'react';
import { Title } from "./Title";
import styled from 'styled-components';

const country = null;
const friends = ['El hermoso', 'Santi', 'El lindo'];

// COMPONENT
export const User = () => {
  return (
    <>
        <Title user = "Sara" color="red" />
        <Title user = "Santiago" color="gray" />
        <Title />
        <Paragraph>Have a nice day!</Paragraph>
        {country && <p>you're from: {country}</p>}
        <ul>
          {friends.map((friend, id) => <li key={id}>{friend}</li> )}
        </ul>
      </>
  )
}

const Paragraph = styled.p`
  margin-bottom: 10px;

`;

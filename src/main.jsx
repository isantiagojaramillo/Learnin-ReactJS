import React from 'react';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import  { User }  from "./components/User";

const session = true;

const App = () => {
  return (
    <>
    {session === true ? <User /> : <p>You havent logged in</p>}
  </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

import React, {useState} from 'react';
// import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
// import ClassCounter, {  } from "./components/ClassCounter";
import { FunctionalCounter } from "./components/FunctionalCounter";
import styles from "./components/css/main.module.css";


// Exported Components
import  { User  }  from "./components/User";
import { FormLogIn } from "./components/FormLogIn";


const App = () => {
  
  const [session, changeSessionState] = useState(true);

  return (
    <section className={styles.container}>
    {session === true ?
      <>
        <User /> 
        <FunctionalCounter increaseQuantity={100} decreaseQuantity={20} />
        {/* <ClassCounter increaseQuantity={100} decreaseQuantity={20} /> */}
        <button onClick={() => changeSessionState(false)}>Log Out</button>
      </>
    : 
      <>
        <FormLogIn changeSessionState = {changeSessionState} />

        {/* <button onClick={() => changeSessionState(true)}>Log in</button> */}
      </>
    }
  </section>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

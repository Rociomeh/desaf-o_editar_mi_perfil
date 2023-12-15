import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Registro from './components/Registro'
import Alert from './components/Alert'


function App(
) {

  const [errorV, setErrorV] = useState("");
  const [success, setSuccess] = useState("");

  return (
    <>
      <Registro 
        errorV={errorV}
        success={success}
        setErrorV={setErrorV} 
        setSuccess={setSuccess}
      />
    </>
  );
};

export default App;

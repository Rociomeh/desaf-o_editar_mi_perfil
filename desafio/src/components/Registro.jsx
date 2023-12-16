import { useState } from 'react'
import Alert from './Alert';
import Formulario from './Formulario'
import SocialButton from './SocialButton'

export default function Registro({errorV, success, setErrorV ,setSuccess}) {

  return (
    <div className="registro-container">
    <h2>Crea una cuenta</h2>
    <div className='botones'>
        <SocialButton icono='fa-brands fa-facebook fa-3x'/>
        <SocialButton icono='fa-brands fa-github fa-3x'/>
        <SocialButton icono='fa-brands fa-linkedin fa-3x'/>
    </div>
    <p>O usa tu email para registrarte</p>
      <Formulario
        setErrorV = {setErrorV}
        setSuccess = {setSuccess}
      /> 
      <Alert
        errorV = {errorV}
        success = {success}
      />
    </div>
  );
};


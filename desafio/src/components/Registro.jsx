import { useState } from 'react'
import Alert from './Alert';
import Formulario from './Formulario'
import SocialButton from './SocialButton'

export default function Registro({errorV, success, setErrorV ,setSuccess}) {

  return (
    <div className="registro-container">
    <h2>Crea una cuenta</h2>
      <SocialButton 
          icono1="fa-brands fa-facebook"
          icono2="fa-brands fa-github"
          icono3="fa-brands fa-linkedin"
    />
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


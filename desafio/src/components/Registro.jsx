import { useState } from 'react'
import Formulario from './Formulario'
import SocialButton from './SocialButton'
//import Alert from './Alert'

function Registro() {
  const [count, setCount] = useState(0)

  return (
    <div className="registro-container">
    <h2>Crea una cuenta</h2>
      <SocialButton 
          icono1="fa-brands fa-facebook"
          icono2="fa-brands fa-github"
          icono3="fa-brands fa-linkedin"
    />
    <p>O usa tu email para registrarte</p>
      <Formulario /> 
    </div>
  );
};

export default Registro;

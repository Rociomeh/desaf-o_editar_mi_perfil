import { useState } from "react";


export default function Formulario({setErrorV, setSuccess}) {

    const validName = /^[a-zA-Z]+$/;
    const validEmail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');


    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [confirma, setConfirma] = useState("");


    const validarDatos = (e) => { //Confirma si los datos están en las casillas para mostrar o no el mensaje de completar
        e.preventDefault(); 

        if (nombre === '' || email === '' || contraseña === '' || confirma === '')
        {

            setErrorV("Faltan datos en el formulario");
            setSuccess("");
            return; 
        }else if(!validName.test(nombre)){
            setErrorV('Nombre invalido')
            setSuccess('')
            return;
        }else if(!validEmail.test(email)){
            setErrorV('Correo invalido')
            setSuccess('')
            return;
        }else if(contraseña !== confirma){
            setErrorV('No coincide contraseña')
            setSuccess('')
            return;
        }
        setErrorV("");
        setSuccess("Registro exitoso")
    };
    
    return (
        <>
        <form className = "formulario" onSubmit={validarDatos}> 
            <div className="form-group">
                <input className = "form-control" 
                        type="text" 
                        name = "Nombre" 
                        onChange = {(e) => setNombre(e.target.value)} 
                        placeholder = "Nombre"/>
                <br></br>
                <input className = "form-control" 
                        type="text" 
                        name = "Email" 
                        onChange = {(e) => setEmail(e.target.value)} 
                        placeholder = "tuemail@ejemplo.com"/>
                <br></br>
                <input className = "form-control" 
                    type="password" 
                    name = "Contraseña"
                    onChange = {(e) => setContraseña(e.target.value)} 
                    placeholder = "Contraseña"/>
                <br></br>
                <input className = "form-control" 
                        type="password" 
                        name = "Confirma" 
                        onChange = {(e) => setConfirma(e.target.value)} 
                        placeholder = "Confirma tu contraseña"/>
                <br></br>
                <button className = "btn btn-success" type="submit" name = "Boton">Registrarse</button> 
                
            </div>
        </form>
        </>
    );
}

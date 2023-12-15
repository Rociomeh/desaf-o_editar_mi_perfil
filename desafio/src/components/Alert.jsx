const Alert = () => {
    const validar = () => {
        //verifica si las claves son iguales
        if (contraseña === confirma) {
            alert("Las contraseñas son iguales")
        }
        else {
            alert("Reintenta") //Las claves no son iguales
        }
    };

    return (
        <>
        </>
    );
};

export default Alert;
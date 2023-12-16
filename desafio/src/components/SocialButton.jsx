import Button from 'react-bootstrap/Button';


const SocialButton = (props) => {
    return (
        <>
        <Button variant="outline-dark"><i className={props.icono}></i></Button>
        </>
    );
};

export default SocialButton;
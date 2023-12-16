import Button from 'react-bootstrap/Button';


const SocialButton = (props) => {
    return (
        <>
        <Button variant="outline-dark"><i class={props.icono}></i></Button>
        </>
    );
};

export default SocialButton;
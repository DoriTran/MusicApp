import "./Dialog.scss";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
    return <div className="backdrop" onClick={props.onClick} />;
};

const Overlay = (props) => {
    return (
        <div className="overlay">
            {props.children}
        </div>
    );
};

const portal = document.getElementById("root-portal");

const Dialog = (props) => {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onClick={props.onBackdropClick} />,
                portal
            )}
            {ReactDOM.createPortal(
                <Overlay onCloseClick={props.onCloseClick}>{props.children}</Overlay>, 
                portal
            )}
        </>
    );
};

export default Dialog;

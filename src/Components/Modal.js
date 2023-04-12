import React from "react";

const Modal = ({clicked, setClicked }) => {

    const handleClick = (e) => {
        if(e.target.classList.contains("close")) {
            setClicked(null);
        }
    };
    return <>
        <div className="overlay close" onClick={handleClick}>
            <img src={clicked} alt="detailed"></img>
            <span className="close" onClick={handleClick}>X</span>
        </div>
    </>
}

export default Modal;
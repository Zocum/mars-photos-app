import React, { useState } from "react";
import Modal from "../Modal";

const Curiosity = ({ photos1, loading }) => {
    const [clicked, setClicked] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

    const toggleClick = (photo, index) => {
        setCurrentIndex(index)
        setClicked(photo.img_src);
    }

    if (loading) {
        return <h2>Loading...</h2>
    } 

    return (
        <div className="container">
           {photos1.map((photo,index) => (
                    <div className="card" key={photo.id}>
                        <img className="image" src={photo.img_src} alt={photo.id} onClick={() => toggleClick(photo,index)}/>
                        <h3 className="h3">{photo.earth_date}, Status: {photo.rover.status}</h3>
                    </div>
            ))}
            {clicked && <Modal clicked={clicked}  setClicked={setClicked}/>}
        </div>
    );
}

export default Curiosity
import React, { useState } from "react";
// import axios from "axios";
import Modal from "../Modal";


const Perseverance = ({photos, loading}) => {
    //For Modal Window...
    const [clicked, setClicked] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);
   
    const toggleClick = (photo, index) => {
        setCurrentIndex(index)
        setClicked(photo.img_src);
    }
    //...For Modal Window

    if (loading) {
        return <h2>Loading...</h2>
    } 
    return (
        <div className="container">
        {photos.map((photo, index) => (
            <div className="card" key={photo.id} >
                <img  className="image"  src={photo.img_src} alt={photo.id} onClick={() => toggleClick(photo,index)}/>
                <h3 className="h3">{photo.earth_date}, Status: {photo.rover.status}</h3>
            </div>
            ))}
            {clicked && <Modal clicked={clicked}  setClicked={setClicked}/>}
        </div>
    )    
}

export default Perseverance
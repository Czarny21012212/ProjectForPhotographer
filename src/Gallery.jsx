import React from "react";
import Photo1 from '/photo/Portretowe1.jpg'
import Photo2 from '/photo/Slubne1.jpg'
import Photo3 from '/photo/Koncertowe1.jpg'
import Photo4 from '/photo/Komunijne1.jpg'
import Photo5 from '/photo/Chrzecinne1.jpg'


const Gallery = () => {
    return (  
        <>
        <div className="GallryAll" id='Galeria'>
            <div className="GalleryBox">
            <div className="CennikText">
            <h1 >Magia Ujęć: <span>Galeria Fotograficzna</span></h1>
            </div>
                <div className="GalleryPhoto">
                    <img src={Photo1}></img>
                    <img src={Photo2}></img>
                    <img src={Photo3}></img>
                    <img src={Photo4}></img>
                    <img src={Photo5}></img>
                    <img src={Photo1}></img>
                    <img src={Photo2}></img>
                    <img src={Photo3}></img>
                    <img src={Photo4}></img>
                    <img src={Photo5}></img>
                    <img src={Photo1}></img>
                    <img src={Photo2}></img>
                    <img src={Photo3}></img>
                    <img src={Photo4}></img>
                    <img src={Photo5}></img>
                    <img src={Photo1}></img>
                    <img src={Photo2}></img>
                    <img src={Photo3}></img>
                    <img src={Photo4}></img>
                    <img src={Photo5}></img>
                    <img src={Photo1}></img>
                </div>
            </div>
        </div>


        </>
    );
}
 
export default Gallery;
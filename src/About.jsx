import React, { useEffect } from 'react';
import photo from '/photo/photo.png'; // Upewnij się, że ścieżka jest poprawna
import './App.css'; // Upewnij się, że plik CSS jest poprawnie załadowany

const About = () => {

    return (  
        <div className='About' >
            <div className="about-p">
                <p>
                    <span>Tworzę obrazy,</span><br /><br />
                    które <strong className="highlight">zatrzymują</strong> czas i pozwalają wracać do <strong className="highlight">najpiękniejszych</strong> chwil życia, uchwycając magiczne momenty, które definiują nasze wspomnienia.
                </p>
            </div>
            <img src={photo} className='photo' alt="Photography Example" />
        </div>
    );
}

export default About;

import Jacek from '/photo/Jacek.jpg';
import React, { useEffect, useState } from 'react';

const AboutMe = () => {
    const [widoczny, ustawWidoczny] = useState(false);

    const obslugujePrzewijanie = () => {
        const element = document.getElementById("AboutMeBox");
        const element2 = document.getElementById("JacekPhoto");
        if (!element) return; 

        const pozycja = element.getBoundingClientRect();
        if (pozycja.top < window.innerHeight && pozycja.bottom >= 0) {
            ustawWidoczny(true);
        } else {
            ustawWidoczny(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', obslugujePrzewijanie);
        obslugujePrzewijanie(); // Sprawdź widoczność przy załadowaniu

        return () => {
            window.removeEventListener('scroll', obslugujePrzewijanie);
        };
    }, []);

    return (
        <div className="AllAboutMe"  >
            <div className={`AboutMeBox ${widoczny ? 'visible' : 'hidden'}`} id="AboutMeBox">
                <div className="AboutMeNapis">
                    <h1>Coś o mnie</h1>
                </div>
                <div className="AboutMeOpis">
                    <div className="AboutMeText">
                        <p>
                            Nazywam się <strong className='JacekName'>Jacek Kozieł</strong> i od ponad 25 lat pasjonuję się fotografią, a profesjonalnie zajmuję się nią od 10 lat. Moje doświadczenie obejmuje szeroki zakres tematów i stylów, co pozwala mi tworzyć wyjątkowe i osobiste zdjęcia. Miałem przyjemność pracować z ponad 100 klientami, z których każdy był pozytywnie zaskoczony rezultatami mojej pracy. Moje portfolio obejmuje sesje prywatne, komunijne, ślubne, chrzcinowe oraz wiele innych, dostosowanych do indywidualnych potrzeb i oczekiwań.
                            <br /><br />
                            Współpracuję również z różnymi firmami i klubami piłkarskimi, tworząc zdjęcia, które pomagają uchwycić istotne momenty i budować markę. Moje doświadczenie zawodowe oraz pasja do fotografii sprawiają, że każda sesja jest dla mnie wyjątkowym wyzwaniem, które traktuję z najwyższą starannością. Zapraszam do odkrywania mojej pracy, gdzie każdy kadr opowiada swoją własną historię i pozostaje niezatarte w pamięci.
                        </p>
                    </div>
                    <div className="AboutMephoto">
                        <img className={`JacekPhoto ${widoczny ? 'visible' : 'hidden'}`} id="AboutMeBox" src={Jacek} alt="Jacek Kozieł" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;

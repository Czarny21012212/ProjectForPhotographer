import React, { useState } from 'react';
import Logo from '/photo/logo.png';

function Kontakt() {
    const [name, setName] = useState('');
    const [nazwisko, setNazwisko] = useState('');
    const [email, setEmail] = useState('');
    const [wiadomosc, setWiadomosc] = useState('');
    const test = document.getElementById('test');
    

    const handleSubmit = async (e) => {
        e.preventDefault(); // Zapobiega domyślnej akcji formularza
    
        const formData = new FormData();
        formData.append('name', name);
        formData.append('nazwisko', nazwisko);
        formData.append('email', email);
        formData.append('wiadomosc', wiadomosc);
    
        try {
            const response = await fetch('http://localhost/my-backend/save_data.php', {
                method: 'POST',
                body: formData,
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
    
            const result = await response.text();
            test.textContent = "wiadomość została wysłana!"
            console.log("Siema"); 
    
        } catch (error) {
            test.textContent = "Coś poszło nie tak!"
            console.error('Error:', error); // Loguje szczegóły błędu
        }
    };

    return (
        <>
            <div className="KontaktAll" id='Kontakt'>
                <div className="KontaktBox">
                    <div className="KontaktLeft">
                        <div className="KontaktLogo">
                            <img src={Logo} style={{ width: '400px' }} alt="Logo" />
                        </div>
                        <div className="KontaktOpis">
                            <h2><strong style={{ color: '#d0ff00' }}>Skontaktuj się z nami</strong></h2>
                            <p>Email: <a href="mailto:kontakt@example.com">kontakt@example.com</a></p>
                            <p>Telefon: <a href="tel:+48123456789">+48 123 456 789</a></p>
                        </div>
                        <div className="farewell">
                            <h3><strong style={{ color: '#d0ff00' }}>Dziękujemy za odwiedzenie naszej strony!</strong></h3>
                            <p>Mamy nadzieję, że nasza galeria zdjęć sprawiła Ci przyjemność i zainspirowała. Jeśli masz pytania lub chcesz po prostu się przywitać, skontaktuj się z nami. Czekamy na Twoje wiadomości!</p>
                        </div>
                    </div>
                    <div className="Kontaktright">
                        
                            <h1>Potrzebujesz Pomocy? Napisz</h1>
                            <form onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    placeholder="Imie"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                />
                                <input
                                    type="text"
                                    placeholder="Nazwisko"
                                    value={nazwisko}
                                    onChange={(e) => setNazwisko(e.target.value)}
                                />
                                <br></br>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <br></br>
                                <textarea
                                    placeholder="Wiadomość"
                                    value={wiadomosc}
                                    maxLength={100} // Opcjonalnie, możesz ograniczyć maksymalną długość tekstu
                                    onChange={(e) => setWiadomosc(e.target.value)}
                                    style={{ width: '22vw', height: '10vh' }}
                                ></textarea>
                                <br></br>
                                <button type="submit">Wyślij</button>
                                <p id='test'></p>
                            </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Kontakt;

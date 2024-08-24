import React from 'react';
import './Cennik.css';  
import Slubne1 from '/photo/Slubne1.jpg';
import Portretowe1 from '/photo/Portretowe1.jpg';
import Chrzecinne1 from '/photo/Chrzecinne1.jpg';
import Koncertowe1 from '/photo/Koncertowe1.jpg';
import Komunijne1 from '/photo/Komunijne1.jpg';

function Cennik() {
  return (
    <>
      <div className='AllCennik' id='Cennik'>
        <div className="CennikBox">
          <div className="CennikText">
            <h1 >Cennik sesji <span>fotograficznych</span></h1>
          </div>
          <div className="CennikElements">
            <div className="CennikElement">
              <h2>Sesje Modowe</h2>
              <img className='CennikPhoto' src={Portretowe1} alt="Sesja modowa" />
              <p className='p1'>Sesje modowe obejmują profesjonalne zdjęcia w stylizacjach zgodnych z najnowszymi trendami mody.</p>
              <ul>
                <li>1 godzina: <strong className='PLN'>500 PLN</strong></li>
                <li>2 godziny:  <strong className='PLN'>900 PLN</strong></li>
                <li>Sesja w plenerze:  <strong className='PLN'>1200 PLN</strong></li>
              </ul>
              <p className='p2'>Ceny zawierają sesję zdjęciową oraz obróbkę graficzną. Cena nie obejmuje kosztów dojazdu do pleneru.</p>
            </div>

            <div className="CennikElement">
              <h2>Sesje ślubne</h2>
              <img className='CennikPhoto' src={Slubne1}  alt="Sesja ślubna" />
              <p className='p1'>Uwiecznij najpiękniejsze chwile swojego ślubu w eleganckich i romantycznych zdjęciach.</p>
              <ul>
                <li>Pakiet podstawowy (przygotowania + ceremonia): <strong className='PLN'>1500 PLN</strong></li>
                <li>Pakiet rozszerzony (przygotowania + ceremonia + przyjęcie): <strong className='PLN'>2500 PLN</strong></li>
                <li>Pakiet premium (cały dzień, w tym sesja plenerowa): <strong className='PLN'>3500 PLN</strong></li>
              </ul>
              <p className='p2'>Ceny zawierają pełną obróbkę zdjęć oraz album. Możliwość dostosowania pakietu do indywidualnych potrzeb.</p>
            </div>

            <div className="CennikElement">
              <h2>Sesje chrzcielne</h2>
              <img className='CennikPhoto' src={Chrzecinne1}  alt="Sesja chrzcielna" />
              <p className='p1'>Specjalne sesje zdjęciowe na chrzcinach, które uchwycą te wyjątkowe chwile.</p>
              <ul>
                <li>Sesja 1 godzina: <strong className='PLN'>400 PLN</strong></li>
                <li>Sesja 2 godziny: <strong className='PLN'>700 PLN</strong></li>
                <li>Pakiet z albumem: <strong className='PLN'>900 PLN</strong></li>
              </ul>
              <p className='p2'>Ceny zawierają obróbkę zdjęć oraz możliwość wydrukowania wybranych fotografii. Cena nie obejmuje kosztów dojazdu.</p>
            </div>

            <div className="CennikElement">
              <h2>Sesje koncertowe</h2>
              <img className='CennikPhoto' src={Koncertowe1}  alt="Sesja koncertowa" />
              <p className='p1'>Relacje z koncertów, festiwali i innych wydarzeń muzycznych.</p>
              <ul>
                <li>1 koncert (do 2 godzin): <strong className='PLN'>800 PLN</strong></li>
                <li>2 koncerty: <strong className='PLN'>1500 PLN</strong></li>
                <li>Pakiet długi (cały dzień): <strong className='PLN'>2500 PLN</strong></li>
              </ul>
              <p className='p2'>Ceny zawierają edycję zdjęć oraz dostarczenie gotowych materiałów. Możliwość negocjacji w przypadku większej liczby koncertów.</p>
            </div>

            <div className="CennikElement">
              <h2>Sesje komunijne</h2>
              <img className='CennikPhoto' src={Komunijne1}  alt="Sesja komunijna" />
              <p className='p1'>Profesjonalne zdjęcia z okazji I Komunii Świętej.</p>
              <ul>
                <li>Pakiet podstawowy (ceremonia + zdjęcia w plenerze): <strong className='PLN'>800 PLN</strong></li>
                <li>Pakiet rozszerzony (ceremonia + zdjęcia w plenerze): <strong className='PLN'>1200 PLN</strong></li>
                <li>Pakiet premium (cały dzień, w tym sesja plenerowa i album): <strong className='PLN'>1600 PLN</strong></li>
              </ul>
              <p className='p2'>Ceny zawierają pełną obróbkę zdjęć oraz możliwość dostosowania pakietu do indywidualnych życzeń.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cennik;

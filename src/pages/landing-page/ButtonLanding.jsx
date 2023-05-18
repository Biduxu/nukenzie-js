import imageLanding from './../../assets/Image-landing-page.png';
import './ButtonLanding.css';

export function LandingPageButton({setPageTransation}){

    function turnPageTransation(){
        return setPageTransation(true)
    }

    return(
        <div className="div-landing">
            <div className='div-content'>
                <section className="section-button-start">
                    <h2><span>Nu</span> Kenzie</h2>
                    <h1>Centralize o controle das suas finanças</h1>
                    <p>de forma rápida e segura</p>
                    <button onClick={(e)=>{turnPageTransation()}}>Iniciar</button>
                </section>
                <section>
                    <img src={imageLanding} alt="" />
                </section>
            </div>
        </div>
    )
}
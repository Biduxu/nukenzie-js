
import './../../styles/header.css';

export function HeaderTransation({setPageTransation}){

    function turnPageLanding(){
        return setPageTransation(false)
    }

    return (
        <header>
            <div>
                <h1><span>Nu</span> Kenzie</h1>
                <button onClick={(e)=>{turnPageLanding()}}>Início</button>
            </div>
        </header>
    )
}
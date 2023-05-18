
import { useState } from 'react';

import './../../styles/form.css'
import './../../styles/inputs.css'
import './../../styles/select.css';
import './../../styles/buttons.css';

export function FormTransaction ({setListTransactions, listTransactions}){

    const [data, setData] = useState({description: "", type: "entrada", value: 0})
    
    function resetInputs(){
        let inputs = document.querySelectorAll("input")
        inputs.forEach((input)=>{
            input.value = ""
        })
    }
    
    function getDescription (value){
        let obj = {
            description: value
        }
        return setData({...data, ...obj})
    }

    function getNumberOfTransation(number){
        let obj = {
            value: parseFloat(number)
        }
        return setData({...data, ...obj})
    }

    function getTypeTransaction(value){
        let obj = {
            type: value
        }
        return setData({...data, ...obj})
    }

    function validateData (e){
        e.preventDefault()
        if(data.value === 0 || data.description === ""){
            alert("Você deve inserir a descrição e o valor da transação!")
        } else{
            setListTransactions([...listTransactions, {...data}])
            resetInputs()
            setData({description: "", type: "entrada", value: 0})
        }

    }

    return(
        <form action="" onSubmit={(e)=>validateData(e)}>
            <div className='div-inputs'>
                <div className='div-description'>
                    <label htmlFor="">Descrição</label>
                    <div>
                        <input type="text" placeholder="Digite aqui sua descrição" onChange={(e)=>{getDescription(e.target.value)}}/>
                        <span>Ex: Compra de roupas</span>
                    </div>
                </div>
                <div className='div-data'>
                    <div className='div-data-one'>
                        <label htmlFor="">Valor</label>
                        <div>
                            <input type="number" placeholder="1"  onChange={(e)=>{getNumberOfTransation(e.target.value)}}/>
                            <p>R$</p>
                        </div>
                    </div>
                    <div className='div-data-two'>
                        <label htmlFor="">Tipo de valor</label>
                        <select name="" id="" onChange={(e)=>{getTypeTransaction(e.target.value)}}>
                            <option value="entrada">Entrada</option>
                            <option value="saída">Saída</option>
                        </select>
                    </div>
                </div>
            </div>
            <button type="submit">Inserir valor</button>
        </form>
    )
}
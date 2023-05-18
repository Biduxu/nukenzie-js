
import './ListTransactions.css';
import './../../styles/buttons.css';
import './../../styles/card.css';

import trash from './../../assets/trash.svg';

export function ListTransactions({setListTransactions, listTransactions, setListAuxTransactions, listAuxTransactions}){

    function identifyTypeByColor(type){
        if(type === "entrada"){
            return "identify-green"
        }else{
            return "identify-grey"
        }
    }

    function removeTransaction(item){
        let arrayListTransactions = [...listTransactions]
        let newArrayListTransactions = arrayListTransactions.filter((transaction)=>{
            return transaction.description !== item
        })
        if(listAuxTransactions.lenght !== 0){
            let newArrayAux = listAuxTransactions.filter((transaction)=>{
                return transaction.description !== item
            })
            setListAuxTransactions(newArrayAux)
        }
        return setListTransactions(newArrayListTransactions)
    }

    function filterTransactions(button){
        let buttonSelectedBeforeClick = document.querySelector(".selected")
        buttonSelectedBeforeClick.className = "to-select"

        button.className = "selected"
        
        if(button.innerText === "Todos"){
            if(listAuxTransactions.length === 0){
                
            }else{
                setListTransactions([...listAuxTransactions])
                setListAuxTransactions([])
            }
        }else{
            if(button.innerText === "Entradas"){
                if(listAuxTransactions.length === 0){
                    setListAuxTransactions([...listTransactions])
                    let newArrayListTransactions = listTransactions.filter((transaction)=>{
                        return transaction.type === "entrada"
                    })

                    setListTransactions([...newArrayListTransactions])

                }else{
                    let newArrayListTransactions = listAuxTransactions.filter((transaction)=>{
                        return transaction.type === "entrada"
                    })

                    setListTransactions([...newArrayListTransactions])

                }
            }else{
                if (listAuxTransactions.length === 0){
                    setListAuxTransactions([...listTransactions])
                    let newArrayListTransactions = listTransactions.filter((transaction)=>{
                        return transaction.type === "saída"
                    })

                    setListTransactions([...newArrayListTransactions])
                }else{
                    let newArrayListTransactions = listAuxTransactions.filter((transaction)=>{
                        return transaction.type === "saída"
                    })

                    setListTransactions([...newArrayListTransactions])
                }
            }
        }
    }


    return (
        <div className="div-content-list">
            <div className="div-header-list">
                <h3>Resumo financeiro</h3>
                <div className="div-buttons">
                    <button className='selected' onClick={(e)=>{filterTransactions(e.target)}}>Todos</button>
                    <button className='to-select' onClick={(e)=>{filterTransactions(e.target)}}>Entradas</button>
                    <button className='to-select' onClick={(e)=>{filterTransactions(e.target)}}>Saídas</button>
                </div>
            </div>
            {listTransactions.length === 0 ? (
                <div className='without-transactions'>
                    <h2>Você ainda não possui nenhum lançamento</h2>
                </div>
            ):(
                <ul className='list-cards'>
                    {listTransactions.map((transaction)=>{
                        return(
                            <li key={transaction.description} className="card">
                                <div className={identifyTypeByColor(transaction.type)}>

                                </div>
                                <div className='card-content'>
                                    <div className='description-type'>
                                        <h2>{transaction.description}</h2>
                                        <p>{transaction.type[0].toUpperCase() + transaction.type.substring(1)}</p>
                                    </div>
                                    <div className='value-trash'>
                                        <p>{`R$ ${transaction.value}`}</p>
                                        <button onClick={(e)=>{removeTransaction(transaction.description)}}><img src={trash} alt="" /></button>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}
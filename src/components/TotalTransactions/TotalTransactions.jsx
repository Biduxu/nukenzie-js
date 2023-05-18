
import './TotalTransaction.css'

export function TotalTransactions({listTransactions, listAuxTransactions}){

    function balance(){
        let balancePositive = 0
        let balanceNegative = 0

        if(listAuxTransactions.length === 0){
            listTransactions.forEach((transaction)=>{
                if(transaction.type === "entrada"){
                    balancePositive += transaction.value
                } else{
                    balanceNegative += transaction.value
                }
            })
    
            return balancePositive - balanceNegative
        }else{
            listAuxTransactions.forEach((transaction)=>{
                if(transaction.type === "entrada"){
                    balancePositive += transaction.value
                } else{
                    balanceNegative += transaction.value
                }
            })
    
            return balancePositive - balanceNegative
        }
    }

    return(
        <div>
            {listTransactions.length === 0 && listAuxTransactions.length === 0 ? (
                <div>

                </div>
            ):(
                <div className='div-total'>
                    <div>
                        <h4>Valor total:</h4>
                        <strong>$ {balance()}</strong>
                    </div>
                    <span>O valor se refere ao saldo</span>
                </div>
            )}
        </div>
    )
}
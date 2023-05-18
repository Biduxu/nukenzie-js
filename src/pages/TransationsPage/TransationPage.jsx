import { useState } from 'react';

import {HeaderTransation} from '../../components/HeaderTransaction/HeaderTransation';
import {FormTransaction} from '../../components/FormTransaction/FormTransaction';
import {ListTransactions} from '../../components/ListTransactions/ListTransactions';
import {TotalTransactions} from '../../components/TotalTransactions/TotalTransactions';

import './TransationPage.css'

export function TransationPage({setPageTransation}){

    const [listTransactions, setListTransactions] = useState([])
    
    const [listAuxTransactions, setListAuxTransactions] = useState([])

    return(
        <div>
            <HeaderTransation setPageTransation={setPageTransation}/>
            <main>
                <section className='section-form-total'>
                    <FormTransaction setListTransactions={setListTransactions} listTransactions={listTransactions}/>
                    <TotalTransactions listTransactions={listTransactions} listAuxTransactions={listAuxTransactions}/>
                </section>
                <section className='section-list'>
                    <ListTransactions setListTransactions={setListTransactions} listTransactions={listTransactions} setListAuxTransactions={setListAuxTransactions} listAuxTransactions={listAuxTransactions}/>
                </section>
            </main>
        </div> 
    )
}
import '../styles/styles.css';
import React from 'react'
import { Header } from './Header';
import { Body } from './Body';

export default _ => {
    
    return (
        <div className='Page'>
            <Header />
            <Body />
        </div>
    )
}
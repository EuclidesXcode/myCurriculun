import '../styles/styles.css';
import React from 'react'

import Header from './Header';
import Body from './Body';
// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    
    return (
        <div className='Page'>
            <Header />
            <Body />
        </div>
    )
}
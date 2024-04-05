import '../styles/styles.css';
import React from 'react';

// eslint-disable-next-line import/no-anonymous-default-export
export default function() {
    return (
        <div className='Header'>
            <div className='HeaderName'>
                <p>Euclides Rufo Silva do Nascimento</p>
                <p>Cell: +55 (44) 9 9114-4705</p>
                <p>E-mail: euclideslione@icloud.com</p>
            </div>
            <div className='Divisor'></div>
            <div className='Links'>
                <a href="https://github.com/EuclidesXcode">GitHub ( link )</a>
                <a href="https://www.linkedin.com/in/euclides-silva-48b1b2157/">Linkedin ( link )</a>
            </div>
        </div>
    )
}
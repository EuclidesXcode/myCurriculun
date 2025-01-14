/* eslint-disable import/no-anonymous-default-export */
import '../../styles/styles.css';
import React from 'react';
import { starImg } from '../../icons/star.png'
import { unStarImg } from '../../icons/unstar.png'

import skills from '../../dados';

export default function() {

    return (
        <div>
            {skills.map((obj, i) => {
                return (
                    <div key={i} className='StarsContainer'>
                        <img src={star >= 1 ? starImg : unStarImg} alt='stars' />
                        <img src={star >= 2 ? starImg : unStarImg} alt='stars' />
                        <img src={star >= 3 ? starImg : unStarImg} alt='stars' />
                        <img src={star >= 4 ? starImg : unStarImg} alt='stars' />
                        <img src={star >= 5 ? starImg : unStarImg} alt='stars' />
                    </div>
                )
            })}
        </div>
    )
}
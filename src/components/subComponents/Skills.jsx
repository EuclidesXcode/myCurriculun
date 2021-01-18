/* eslint-disable import/no-anonymous-default-export */
import React from 'react';

import skills from '../../dados';

export default function() {

    return (
        <div>
            {skills.map((obj, i) => {
                const skill = obj.skill

                return (
                <div key={i} className='SkillsStyle'>
                    <p>{skill}</p>
                </div>
                )
            })}
        </div>
    )
}
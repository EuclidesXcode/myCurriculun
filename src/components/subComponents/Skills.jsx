import React from 'react';
import skillCategories from '../../dados';

export default function Skills() {
    return (
        <div className="skills-container">
            {skillCategories.map((cat) => (
                <div key={cat.category}>
                    <p className="skill-category-title">{cat.category}</p>
                    <div className="skill-chips">
                        {cat.skills.map((skill) => (
                            <span key={skill} className="skill-chip">{skill}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}

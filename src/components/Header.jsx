import React from 'react';
import '../styles/styles.css';
import Skills from './subComponents/Skills';

export default function Header() {
    return (
        <div className="cv-sidebar">
            <div>
                <p className="cv-name">Euclides Rufo Silva<br />do Nascimento</p>
                <p className="cv-title">Tech Lead · Full Stack Sênior</p>
            </div>

            <hr className="sidebar-divider" />

            <div>
                <p className="sidebar-section-title">Contato</p>
                <div className="contact-list">
                    <div className="contact-item">
                        <span className="contact-icon">📞</span>
                        <span>+55 (44) 9 9114-4705</span>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon">✉</span>
                        <span>euclideslione@icloud.com</span>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon">🐙</span>
                        <a href="https://github.com/EuclidesXcode" target="_blank" rel="noreferrer">
                            github.com/EuclidesXcode
                        </a>
                    </div>
                    <div className="contact-item">
                        <span className="contact-icon">💼</span>
                        <a href="https://www.linkedin.com/in/euclides-silva-48b1b2157/" target="_blank" rel="noreferrer">
                            linkedin/euclides-silva
                        </a>
                    </div>
                </div>
            </div>

            <hr className="sidebar-divider" />

            <div>
                <p className="sidebar-section-title">Skills</p>
                <Skills />
            </div>
        </div>
    );
}

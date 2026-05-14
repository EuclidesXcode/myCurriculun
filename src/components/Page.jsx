import React, { useRef } from 'react';
import '../styles/styles.css';
import Header from './Header';
import Body from './Body';

export default function Page() {
    const cvRef = useRef();

    const downloadPDF = async () => {
        const html2pdf = (await import('html2pdf.js')).default;
        const opt = {
            margin: 0,
            filename: 'Euclides_Nascimento_CV.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2, useCORS: true, logging: false },
            jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
        };
        html2pdf().set(opt).from(cvRef.current).save();
    };

    return (
        <div>
            <div className="download-bar">
                <button className="pdf-btn" onClick={downloadPDF}>
                    ⬇ Download PDF
                </button>
            </div>
            <div ref={cvRef} className="cv-wrapper">
                <Header />
                <Body />
            </div>
        </div>
    );
}

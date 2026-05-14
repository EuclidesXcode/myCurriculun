import React from 'react';
import Experience from './subComponents/Experience';

const projects = [
    {
        num: '01',
        name: 'API BFF — Internet Banking Parabank',
        company: 'Kaspper · 2025',
        desc: 'Arquitetura e implementação de uma API BFF (Backend for Frontend) em Node.js com Clean Architecture, princípios SOLID e DDD. Responsável por consolidar dados de múltiplos microsserviços bancários em contratos otimizados para o frontend React e o app Flutter.'
    },
    {
        num: '02',
        name: 'Meu Técnico — Gestão de Campo',
        company: 'Accurate Software · 2022–2025',
        desc: 'Sistema multiplataforma de 3 anos de desenvolvimento para gestão de técnicos de campo. Composto por APIs REST em Node.js, app Android em Java com sincronização offline e painel administrativo em Ionic com dashboard operacional e relatórios gerenciais.'
    },
    {
        num: '03',
        name: 'Sistema IBFC — Gestão de Concursos Públicos',
        company: 'Vivitech · 2019–2020',
        desc: 'Sistema centralizado para gestão de concursos públicos em todo o Brasil: controle de candidatos, importação de provas e gabaritos, cálculo de acertos e classificação final. Frontend em Vue.js + Vuetify e backend com endpoints de alto volume em Node.js.'
    },
    {
        num: '04',
        name: 'Apps NFC — Pagamento e Recarga em Transporte Público',
        company: 'FastProbr · 2020',
        desc: 'Dois aplicativos Android em React Native: um para recebimento de pagamentos via NFC e outro para recarga de bilhetes eletrônicos com integração a hardware especializado. Módulo nativo Kotlin para comunicação direta com o hardware NFC, garantindo transações rápidas e seguras.'
    },
];

export default function Body() {
    return (
        <div className="cv-main">
            <div>
                <p className="summary-text">
                    Desenvolvedor Full Stack Sênior e Tech Lead com mais de 6 anos de experiência em desenvolvimento
                    de aplicações web, mobile e APIs escaláveis. Especialista em Node.js, Flutter, React e
                    arquiteturas modernas como Clean Architecture e BFF. Experiência sólida em cloud (GCP, AWS, Azure),
                    DevOps e liderança técnica de equipes. Apaixonado por boas práticas, código limpo e soluções que
                    entregam valor real ao usuário.
                </p>
            </div>

            <div>
                <div className="section-header">
                    <h2>Experiência</h2>
                    <div className="section-line" />
                </div>
                <Experience />
            </div>

            <div>
                <div className="section-header">
                    <h2>Projetos em Destaque</h2>
                    <div className="section-line" />
                </div>
                <div className="projects-grid">
                    {projects.map((p) => (
                        <div key={p.num} className="project-card">
                            <div className="project-card-header">
                                <span className="project-number">{p.num}</span>
                                <span className="project-name">{p.name}</span>
                            </div>
                            <p className="project-company">{p.company}</p>
                            <p className="project-desc">{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div>
                <div className="section-header">
                    <h2>Formação</h2>
                    <div className="section-line" />
                </div>
                <div className="education-item">
                    <div>
                        <p className="education-degree">Ciência da Computação</p>
                        <p className="education-school">Estácio de Sá</p>
                    </div>
                    <span className="education-year">2023</span>
                </div>
            </div>

            <p className="cv-footer-note">
                Este currículo foi desenvolvido em React —{' '}
                <a href="https://github.com/EuclidesXcode/myCurriculun" target="_blank" rel="noreferrer">
                    ver no GitHub
                </a>
            </p>
        </div>
    );
}

import React from 'react';
import Experience from './subComponents/Experience';

const projects = [
    {
        num: '01',
        name: 'Internet Banking Parabank — React + Segurança de Aplicações',
        company: 'Kaspper · 2025',
        desc: 'Internet Banking desenvolvido em React com TypeScript (Hooks, Vite), com toda a arquitetura de frontend e as APIs criadas do zero. Forte foco em segurança de aplicação bancária: Secure Coding, mitigação do OWASP Top 10, autenticação/autorização com JWT, proteção de dados sensíveis e ambiente DevOps com CI/CD no Google Cloud.'
    },
    {
        num: '02',
        name: 'Segurança de Aplicações — Setor Financeiro',
        company: 'GM Financial (via Accurate) · 2024–2025',
        desc: 'Correção de vulnerabilidades e aplicação de Secure Coding e OWASP Top 10 em aplicações financeiras críticas. APIs RESTful seguras (JWT, controle de acesso por perfil), apoio à conformidade com LGPD, análise de qualidade e segurança com SonarQube, frontend em React (TypeScript) e pipelines de CI/CD com práticas de DevSecOps.'
    },
    {
        num: '03',
        name: 'Projetos Python (Django / FastAPI) — Eucode',
        company: 'Eucode · 2015–Atual',
        desc: 'Entrega de projetos full-stack sob demanda com backends em Python usando Django e FastAPI, APIs RESTful seguras e frontends em React. Aplicação de Secure Coding, boas práticas de OWASP, proteção de dados (LGPD), bancos MySQL/PostgreSQL e versionamento via Git/Bitbucket.'
    },
    {
        num: '04',
        name: 'Sistema IBFC — Gestão de Concursos Públicos',
        company: 'ViViTECH · 2019–2020',
        desc: 'Sistema centralizado para gestão de concursos públicos em todo o Brasil: controle de candidatos, importação de provas e gabaritos, cálculo de acertos e classificação final. Frontend em Vue.js + Vuetify e backend com endpoints de alto volume em Node.js.'
    },
];

export default function Body() {
    return (
        <div className="cv-main">
            <div>
                <p className="summary-text">
                    Engenheiro de Software Sênior fullstack com mais de 10 anos de experiência e foco em
                    <strong> Python</strong> (<strong>Django</strong> e <strong>FastAPI</strong>) e <strong>React</strong>,
                    com forte atuação em <strong>Segurança de Aplicações</strong>. Desenvolvo e evoluo APIs RESTful
                    seguras, aplicando <strong>Secure Coding</strong>, mitigação de vulnerabilidades do
                    <strong> OWASP Top 10</strong>, autenticação/autorização robusta e conformidade com a
                    <strong> LGPD</strong> — incluindo correção de vulnerabilidades apontadas em Pentest. No frontend,
                    construo interfaces modernas e responsivas em React (com TypeScript, Hooks e Vite). Atuo em todo o
                    ciclo de desenvolvimento (análise, codificação, testes, deploy e manutenção), com CI/CD, SonarQube,
                    code review e práticas de DevSecOps, sempre em times ágeis (Scrum/Kanban).
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
                    <span className="education-year">Cursando</span>
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

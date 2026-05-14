import React from 'react';

const experiences = [
    {
        role: 'Tech Lead & Desenvolvedor Full Stack Sênior',
        company: 'Kaspper — São Paulo, SP',
        period: 'Fev/2025 – Atual',
        bullets: [
            'Liderou o desenvolvimento do app mobile (Flutter) e Internet Banking (React) do banco Parabank.',
            'Projetou e implementou a API BFF com Node.js, aplicando Clean Architecture, SOLID e DDD.',
            'Estruturou infraestrutura no Google Cloud Platform: Cloud Run, Cloud Functions, CI/CD e monitoramento.',
            'Definiu padrões técnicos, conduziu code reviews e mentoria da equipe de desenvolvimento.',
        ]
    },
    {
        role: 'Desenvolvedor Full Stack Sênior',
        company: 'Accurate Software — São Paulo, SP',
        period: 'Mai/2020 – Fev/2025',
        highlight: 'Projeto de destaque: "Meu Técnico" — 3 anos de duração',
        bullets: [
            'Desenvolveu e manteve APIs REST em Node.js para gestão operacional de técnicos de campo.',
            'Criou o app Android em Java com integração a serviços externos e sincronização offline.',
            'Construiu o painel administrativo em Ionic com dashboard, relatórios e controle operacional.',
            'Atuou em projetos mobile multiplataforma: Android (Java/Kotlin), iOS (Swift) e React Native.',
        ]
    },
    {
        role: 'Desenvolvedor Full Stack Pleno',
        company: 'FastProbr — São Paulo, SP',
        period: 'Ago/2020 – Dez/2020',
        desc: 'Contrato de 4 meses. Desenvolveu dois aplicativos Android em React Native para o setor de transporte público: um para recebimento de pagamentos via NFC e outro para recarga de bilhetes eletrônicos com integração a hardware especializado. Criou módulo nativo em Kotlin para comunicação direta com o hardware NFC.'
    },
    {
        role: 'Desenvolvedor Full Stack Pleno',
        company: 'Outsmart Digital — São Paulo, SP',
        period: 'Fev/2020 – Mai/2020',
        desc: 'Contrato de 4 meses. Desenvolveu template React Native para padronização interna de componentes e aplicativo mobile que simplificava o acesso a um sistema web existente. Adotou Clean Code e Clean Architecture, reduzindo o custo de manutenção futura.'
    },
    {
        role: 'Desenvolvedor Pleno Node.js & Vue.js',
        company: 'Vivitech — São Paulo, SP',
        period: 'Nov/2019 – Jul/2020',
        desc: 'Desenvolvedor fullstack no sistema do IBFC (Instituto Brasileiro de Formação e Capacitação) para gestão de concursos públicos. Implementou o frontend em Vue.js com Vuetify e endpoints backend com alto volume de acessos e processamento de dados em tempo real.'
    },
];

export default function Experience() {
    return (
        <div className="timeline">
            {experiences.map((exp, i) => (
                <div key={i} className="timeline-item">
                    <div className="timeline-dot-col">
                        <div className="timeline-dot" />
                        {i < experiences.length - 1 && <div className="timeline-line" />}
                    </div>
                    <div className="timeline-content">
                        <div className="timeline-header">
                            <span className="timeline-role">{exp.role}</span>
                            <span className="timeline-period">{exp.period}</span>
                        </div>
                        <p className="timeline-company">{exp.company}</p>
                        {exp.highlight && (
                            <span className="highlight-badge">{exp.highlight}</span>
                        )}
                        {exp.bullets && (
                            <ul className="timeline-bullets">
                                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                            </ul>
                        )}
                        {exp.desc && <p className="timeline-desc">{exp.desc}</p>}
                    </div>
                </div>
            ))}
        </div>
    );
}

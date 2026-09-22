import React from 'react';

const experiences = [
    {
        role: 'Engenheiro de Software Sênior',
        company: 'Kaspper — São Paulo, SP',
        period: 'Mar/2025 – Atual',
        highlight: 'Aplicação bancária com forte foco em segurança',
        bullets: [
            'Desenvolve o Internet Banking em React + TypeScript (Hooks, componentes funcionais, Vite) do banco Parabank, criando toda a arquitetura de frontend do zero.',
            'Implementa Secure Coding e mitigação de vulnerabilidades do OWASP Top 10 em uma aplicação bancária: autenticação/autorização com JWT, controle de acesso por perfil e proteção de dados sensíveis.',
            'Estruturou do zero as APIs RESTful e todo o ambiente DevOps no Google Cloud (CI/CD, monitoramento), com contratos documentados e testes cobrindo fluxos críticos.',
            'Participa de code reviews e definições técnicas, com atenção contínua à segurança, privacidade de dados e qualidade das entregas.',
        ]
    },
    {
        role: 'Engenheiro de Software & CEO',
        company: 'Eucode Desenvolvimento de Software LTDA — Rio de Janeiro, RJ',
        period: 'Jan/2015 – Atual',
        desc: 'Empresa própria de desenvolvimento de software. Atuação full-stack na entrega de projetos sob demanda, com Python (Django e FastAPI) e React entre as principais tecnologias. Foco em APIs RESTful seguras, Secure Coding, boas práticas de OWASP e proteção de dados (LGPD), com bancos MySQL/PostgreSQL e versionamento via Git/Bitbucket.'
    },
    {
        role: 'Engenheiro de Software Sênior — Segurança & Backend · React',
        company: 'GM Financial (alocado via Accurate Software) — Remoto',
        period: 'Abr/2024 – Mar/2025',
        highlight: 'Segurança de aplicações e correção de vulnerabilidades no setor financeiro',
        bullets: [
            'Corrigiu vulnerabilidades e aplicou Secure Coding e mitigação do OWASP Top 10 em aplicações financeiras críticas, com autenticação JWT e controle de acesso por perfil.',
            'Apoiou iniciativas de conformidade com a LGPD, garantindo proteção e tratamento adequado de dados sensíveis.',
            'Desenvolveu, consumiu e documentou APIs RESTful seguras, integrando sistemas via REST e SOAP.',
            'Implementou interfaces web em React (TypeScript) e validou qualidade e segurança do código com SonarQube, testes automatizados e code reviews.',
            'Atuou em pipelines de CI/CD com práticas de DevSecOps em arquitetura distribuída.',
        ]
    },
    {
        role: 'Engenheiro de Software Sênior',
        company: 'Accurate Software — São Paulo, SP',
        period: 'Mai/2021 – Mar/2025',
        highlight: 'Projeto de destaque: "Meu Técnico" — 3 anos de duração',
        bullets: [
            'Criou o app Android nativo em Java com integração a serviços externos e sincronização offline.',
            'Atuou em projetos mobile multiplataforma com Java/Kotlin (Android), React Native e iOS (Swift).',
            'Desenvolveu e manteve APIs REST em Node.js (e GraphQL) para gestão operacional de técnicos de campo.',
            'Construiu o painel administrativo em Ionic com dashboard, relatórios e controle operacional.',
            'Claro Brasil (Fev/2023–Abr/2024): desenvolvimento de software para o setor de e-care.',
        ]
    },
    {
        role: 'Engenheiro de Software Pleno',
        company: 'Outsmart Digital — São Paulo, SP',
        period: 'Fev/2021 – Mai/2021',
        desc: 'Desenvolveu template em React Native para padronização interna de componentes e aplicativo mobile que simplificava o acesso a um sistema web existente. Trabalhou com GraphQL e adotou Clean Code e Clean Architecture, reduzindo o custo de manutenção futura.'
    },
    {
        role: 'Engenheiro de Software',
        company: 'FastProbr — São Paulo, SP',
        period: 'Ago/2020 – Fev/2021',
        desc: 'Desenvolveu aplicativos Android em React Native para o setor de transporte público: um para recebimento de pagamentos via NFC e outro para recarga de bilhetes eletrônicos com integração a hardware especializado. Criou módulo nativo em Kotlin para comunicação direta com o hardware NFC.'
    },
    {
        role: 'Engenheiro de Software',
        company: 'ViViTECH — São Paulo, SP',
        period: 'Nov/2019 – Ago/2020',
        desc: 'Desenvolvedor full-stack no sistema do IBFC (Instituto Brasileiro de Formação e Capacitação) para gestão de concursos públicos. Implementou o frontend em Vue.js com Vuetify e endpoints backend em Node.js, com Docker, alto volume de acessos e processamento de dados em tempo real.'
    },
    {
        role: 'Desenvolvedor Java Full Stack (Júnior)',
        company: 'Autocom Automação Comercial — Rio de Janeiro, RJ',
        period: 'Jan/2015 – Nov/2019',
        bullets: [
            'Atuação no ciclo de vida de desenvolvimento de software (SDLC) para sistemas internos de gestão.',
            'Desenvolvimento e manutenção do sistema de controle de chamados e ordens de serviço com Java (backend) e Vue.js (frontend).',
            'Suporte técnico especializado a usuários finais, garantindo usabilidade e resolução de problemas críticos em sistemas internos e de revenda.',
            'Foco na melhoria da experiência do usuário e na otimização de fluxos operacionais através de novas funcionalidades.',
        ]
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

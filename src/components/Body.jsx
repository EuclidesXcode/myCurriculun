/* eslint-disable import/no-anonymous-default-export */
import '../styles/styles.css';
import React from 'react';

import Skills from './subComponents/Skills';
import Experience from './subComponents/Experience';

export default function () {
    return (
        <div className='NewBody'>
            <div className='BodyColl1'>
                <div className='Tittle'>
                    <p>Skills</p>
                </div>
                <div className='SkillsStyle'>
                    <Skills className='Skill' />
                    <Experience />
                </div>
            </div>
            <div className='BodyColl2'>
                <div className='Tittle'>
                    <p>Experience</p>
                </div>
                <div className='ExperienceStyle'>

                    <strong>Formação</strong>
                    <p>
                        Ensino superior cursando em Ciência da Computação - Estácio - Conclusão 2023
                    </p>

                    <strong className='StrongExp'>Experiência Profissional</strong>
                    <p>
                        Desenvolvedor Pleno Node.js e Vue.js, atuando em microserviços e aplicações web em tempo real.
                        <b>Vivitech - SP</b> | Nov/2019 - Jul/2020
                        <br />
                        <small>vide projeto 1</small>
                    </p>

                    <p>
                        Desenvolvedor FullStack Pleno, contrato de 4 meses, responsável por dois aplicativos React Native com módulos em Kotlin para leitura NFC.
                        <b>FastProbr - SP</b> | Ago/2020 - Dez/2020
                        <br />
                        <small>vide projetos 2 e 3</small>
                    </p>

                    <p>
                        Desenvolvedor FullStack Pleno, contrato de 4 meses, atuando em soluções web e mobile.
                        <b>Outsmart Digital - SP</b> | Fev/2020 - Mai/2020
                        <br />
                        <small>vide projeto 4</small>
                    </p>

                    <p>
                        Desenvolvedor FullStack Sênior, contrato indeterminado, responsável por aplicações web e mobile em múltiplas frentes.
                        <b>Accurate Software - SP</b> | Mai/2020 - Fev/2025
                        <br />
                        <small>vide projeto 5</small>
                    </p>

                    <p>
                        Tech Lead e Desenvolvedor FullStack Sênior, atuando na gestão e desenvolvimento do app e internet banking do banco Parabank.
                        <b>Kaspper - SP</b> | Fev/2025 - Atual
                        <br />
                        Principais responsabilidades:
                        <ul>
                            <li>Gestão técnica do time de desenvolvimento, definindo arquitetura e boas práticas.</li>
                            <li>Desenvolvimento de backend escalável e seguro para o Internet Banking.</li>
                            <li>Atuação como DevOps no Google Cloud Platform, estruturando CI/CD, monitoramento e infraestrutura.</li>
                            <li>Desenvolvimento mobile em Flutter, focado em performance e experiência do usuário.</li>
                            <li>Desenvolvimento front-end do Internet Banking em React, garantindo acessibilidade e responsividade.</li>
                        </ul>
                    </p>

                    <strong className='StrongExp'>Projetos</strong>

                    <p>
                        1{`)`} <b>Sistema para o IBFC (Instituto Brasileiro de Formação e Capacitação)</b>
                        Atuei como desenvolvedor fullstack em um sistema robusto para gestão de concursos públicos em todo o Brasil.
                        O sistema foi responsável por centralizar e automatizar relatórios, controle de projetos e gerenciamento de candidatos, além de importar provas e gabaritos para o cálculo de acertos e classificação final.
                        Minha atuação envolveu a implementação de grande parte do front-end em Vue.js utilizando Vuetify, garantindo uma interface intuitiva e responsiva.
                        No backend, fui responsável pela estruturação de endpoints que suportavam alto volume de acessos e processamento de dados em tempo real, contribuindo para a escalabilidade e confiabilidade da plataforma.
                    </p>
                    <br />

                    <p>
                        2{`)`} <b>App de pagamentos contactless em transporte público</b>
                        Participei do desenvolvimento de um aplicativo Android em React Native voltado para recebimento de pagamentos via NFC em ônibus e terminais de transporte coletivo.
                        O projeto envolveu a criação de um módulo em Kotlin para comunicação direta com o hardware NFC, permitindo leitura dos cartões de forma rápida e segura.
                        Os dados coletados eram tratados e enviados para uma API que validava as transações, retornando a aprovação ou reprovação quase em tempo real.
                        O app foi projetado para alta disponibilidade e performance, garantindo uma experiência fluida para o usuário final e eficiência para as empresas de transporte.
                    </p>
                    <br />

                    <p>
                        3{`)`} <b>App de recarga de bilhetes de transporte público</b>
                        Atuei no desenvolvimento de um aplicativo Android em React Native com foco em recargas de bilhetes eletrônicos.
                        Assim como no projeto anterior, o app utilizava módulos Kotlin para leitura NFC, mas com a adição de uma segunda camada de integração com um hardware externo especializado, responsável por realizar a gravação da recarga diretamente no bilhete físico.
                        Essa solução trouxe maior comodidade para o usuário e reduziu a dependência de pontos de recarga presenciais.
                        Trabalhei tanto na integração técnica quanto na criação de fluxos que garantissem a segurança e rastreabilidade das transações financeiras.
                    </p>
                    <br />

                    <p>
                        4{`)`} <b>Aplicativos mobile internos e simplificação de sistema web existente</b>
                        Fui responsável pelo desenvolvimento de um template em React Native utilizado internamente pela empresa contratante, com foco em padronização e reuso de componentes.
                        Além disso, liderei a criação de um aplicativo mobile que simplificava o acesso a um sistema web já existente, adaptando funcionalidades-chave para o ambiente mobile.
                        Adotei princípios de Clean Code e Clean Architecture, estruturando a aplicação com classes centralizadoras de dados, o que aumentou a escalabilidade e reduziu custos de manutenção futura.
                    </p>
                    <br />

                    <p>
                        5{`)`} <b>Desenvolvimento de soluções multiplataforma</b>
                        Durante minha atuação em projetos diversos, desenvolvi aplicações mobile em Java (Android), Swift (iOS) e Kotlin, além de construir APIs escaláveis em Node.js e interfaces modernas em React.
                        Essa diversidade de tecnologias me permitiu atuar de ponta a ponta no ciclo de desenvolvimento, desde a concepção da arquitetura até a entrega final ao cliente.
                        Trabalhei em soluções que integravam diferentes plataformas, sempre priorizando qualidade, performance e segurança.
                        Essa experiência ampliou minha visão como desenvolvedor fullstack e me trouxe domínio para lidar com ecossistemas complexos e heterogêneos.
                    </p>

                    <br />
                    <br />
                    <br />
                    <small>
                        Obs: Este currículo foi desenvolvido em React e se encontra no meu <a href='https://github.com/EuclidesXcode/myCurriculun'>github</a>.
                    </small>
                </div>
            </div>
        </div>
    )
}
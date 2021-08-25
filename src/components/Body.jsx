/* eslint-disable import/no-anonymous-default-export */
import '../styles/styles.css';
import React from 'react';

import Skills from './subComponents/Skills';
import Experience from './subComponents/Experience';

export default function() {
    return (
        <div className='NewBody'>
            <div className='BodyColl1'>
                <div className='Tittle'>
                    <p>Skills</p>
                </div>
                <div className='SkillsStyle'>
                    <Skills className='Skill'/>
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
                
                <strong className='StrongExp'>Experiência Profissional</strong>
                <p>
                    Atuei como Dev. Pleno Node.js e Vue.js, Microserviços, APlicações Web em realtime. Vivitech - SP  Nov/2019 - julho/2020
                    <br />
                    <small>vide projeto 1</small>
                </p>
                <p>
                    Contrato de 4 meses para atuar como Dev FullStack Pleno desenvolvendo 2 App’s React Native com módulos em Kotlin para 
                    leitura NFC - FastProbr - SP Ago/2020 - Dezembro/2020
                    <br />
                    <small>vide projetos  2 e 3</small>
                </p>
                <p>
                    Contrato de 4 meses para atuar como Dev FullStack Pleno - Outsmart Digital - SP Fevereiro/2020 - Maio/2020
                    <br />
                    <small>vide projeto 4</small>
                </p>
                <p>
                    Contrato indeterminado para atuar como Dev FullStack Senior - Accurate Software - SP Maio/2020 até agora
                    <br />
                    <small>vide projeto 5</small>
                </p>
                <strong className='StrongExp'>Projetos</strong>
                    <p>1) Atuei como desenvolvedor fullstack no desenvolvimento de um sistema 
                        para o IBFC (Instituto Brasileiro de formação e capacitação). O sistema consiste em gerar
                        relatórios de concursos públicos, fazendo também todo o controle dos projetos do concurso
                        e também dos seus condidatos. Provas e Gabaritos são importados para o sistema para ser 
                        feito o cálculo de acertos dos candidados e assim poder ser classificado. Desenvolvi boa 
                        parte do front-end em Vue utilizando Vuetify. Atuei também no back-end estruturando os
                        endpoints.
                    </p>
                    <br />
                    <p>2) Atuei como desenvolvedor Android React-native para o desenvolvimento de um App
                        que consistia em receber pagamentos via contacless em transportes públicos.
                        O app contém um módulo em Kotlin para comunicar com o Hardware NFC para efetuar
                        a leitura do cartão. retornando assim os dados em json para serem tratados e 
                        enviados em uma API, que gera o retorno de aprovação ou reprovação. Sendo assim
                        retornamos e liberamos o terminal para novo pagamento.
                    </p>    
                    <br />
                    <p>3) Atuei como desenvolvedor Android React-native para o desenvolvimento de um App
                        que consistia em efetuar recargas de bilhetes de transportes públicos.
                        O app contém um módulo em Kotlin para comunicar com o Hardware NFC para efetuar
                        a leitura do cartão. retornando assim os dados em json para serem tratados e 
                        enviados em uma API, que gera o retorno de aprovação ou reprovação. Após essa aprovação
                        do valor da recarga, existe um segundo módulo Kotlin para efetuar a comunicação 
                        com um hardware externo que efetua a comunicação com o bilhete. 
                    </p>   
                    <br />
                    <p>4) Atuei como desenvolvedor Mobile, desenvolvendo em React Native um template 
                        para uso interno da empresa contratante!
                            Desenvolvi também um app para simplificar um sistema web existente. App 
                        desenvolvido em React Native com Clean Code e Clean Architecture, utilizando 
                        classes para centralização de dados.
                    </p>   
                    <br />
                    <p>5) Atuando como desenvolvedor Mobile Java Android, desenvolvedor API com node e front com React.
                    </p> 
                </div>
            </div>
        </div>
    )
}
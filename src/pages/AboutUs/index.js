import React from 'react';
import { Image } from 'react-bootstrap';
import Header from '../../components/Header';
import './index.css';
import { FaEnvelope, FaGithub, FaLinkedin, FaInfoCircle, FaBriefcase, FaInstagram } from 'react-icons/fa';
import palavrinhaDesktop from '../../assets/about-us/palavrinha-desktop-img.png';
import palavrinhaBrokeLineLogo from '../../assets/break-line-logo.png'

import LAE from '../../assets/integrants/lucas-araujo-emmerich.jpg';
import PVA from '../../assets/integrants/patricia-do-valle-alves.png';
// import TBA from '../../assets/integrants/tatiana-bagetti.png';
import LHS from '../../assets/integrants/luma-heidenfelder-schwantes.png';


import CustomPopover from '../../components/CustomPopover';
const PopoverComponent = integrant => {
    return <div style={{
        padding: 25,
        borderRadius: 10,
        backgroundColor: '#F28F05',
        color: 'white',
        minWidth: 200,
        minHeight: 80
    }}>
        <h5>Conheça mais:</h5>
        {integrant.info?.map(i => {
            return (
                <div style={{ marginBottom: 3 }}>
                    {i.icon}
                    <a
                        style={{
                            textDecoration: 'none',
                            color: 'white',
                            paddingLeft: 5
                        }}
                        href={i.url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {i.label}
                    </a>
                </div>
            )
        })}
    </div>
}

const integrants = [
    {
        photo: PVA,
        name: 'Patrícia do Valle Alves',
        academics: 'Estudante de fonoaudiologia na Universidade Federal Fluminense, Instituto de Saúde de Nova Friburgo (UFF - ISNF)',
        responsability: 'Como bolsista PIBIT durante um ano, idealizou o site junto da professora e orientadora Tatiana Bagetti. Elaborou todo o conteúdo do Palavrinha referente à teoria e prática fonoaudiológica.',
        info:[
            {
                label: 'Instagram Profissional',
                icon: <FaInstagram color="#0e76a8" style={{ cursor: 'pointer' }} size={16} />,
                url: 'https://www.instagram.com/fonoa.patricia/'
            },
        ]
    },
    {
        photo: '',
        name: 'Tatiana Bagetti',
        academics: 'Professora de fonoaudiologia na Universidade Federal Fluminense, Instituto de Saúde de Nova Friburgo (UFF - ISNF)',
        responsability: 'Professora responsável pelo projeto e orientadora dos estudantes envolvidos. Orientou e idealizou o site junto da estudante Patrícia do Valle Alves como bolsista PIBITI. Corrigiu, supervisionou e orientou a elaboração dos conteúdos fonoaudiológicos. Elaborou o conteúdo referente à parte de fonoaudiologia sistêmica.'
    },
    {
        photo: LHS,
        name: 'Luma Heidenfelder Schwantes',
        academics: 'Estudante de Comunicação Visual Design na Escola de Belas Artes da Universidade Federal do Rio de Janeiro.',
        responsability: 'Designer responsável por toda a construção visual e estrutural do site - desde a concepção da identidade visual e naming até a UX/UI.',
        info:[
            {
                label: 'Linkedin',
                icon: <FaLinkedin color="#0e76a8" style={{ cursor: 'pointer' }} size={16} />,
                url: 'https://www.linkedin.com/in/lumaschwantes/'
            },
            {
                label: 'Portfólio',
                icon: <FaBriefcase color="#333" style={{ cursor: 'pointer' }} size={16} />,
                url: 'https://www.behance.net/lumaschwantes'
            },
        ]
    },
    {
        photo: LAE,
        name: 'Lucas Araujo Emmerich',
        academics: 'Estudante de Sistemas de Informação no Centro Federal de Educação Tecnológica Celso Suckow da Fonseca (CEFET - RJ)',
        responsability: 'Desenvolvedor responsável pela escolha das tecnologias, estrutura, desenvolvimento, testes e implantação do aplicativo.',
        info: [
            {
                label: 'Linkedin',
                icon: <FaLinkedin color="#0e76a8" style={{ cursor: 'pointer' }} size={16} />,
                url: 'https://www.linkedin.com/in/lucas-araujo-6213aa199/'
            },
            {
                label: 'GitHub',
                icon: <FaGithub color="#333" style={{ cursor: 'pointer' }} size={16} />,
                url: 'https://www.linkedin.com/in/lucas-araujo-6213aa199/'
            },
            {
                label: 'lucas.emmerich@aluno.cefet-rj.br',
                icon: <FaEnvelope color="#333" style={{ cursor: 'pointer' }} size={16} />,
                url: 'mailto:lucas.emmerich@aluno.cefet-rj.br'
            },
        ]
    }
]
export default function AboutUs() {
    return (
        <>
            <Header />
            <section className="about-us">
                <section className="about-us-text d-flex col-lg-12 flex-wrap">
                    <div className="col-lg-5 flex-box">
                        <Image
                            src={palavrinhaDesktop}
                            width={387}
                            height={480}
                        />
                    </div>
                    <div className="col-lg-7" style={{ paddingRight: 10 }}>
                        <Image
                            src={palavrinhaBrokeLineLogo}
                            style={{ marginBottom: 20 }}
                        />
                        <p className="middle-text">
                            O Palavrinha é um site para orientar, sugerir atividades e auxiliar na
                            disseminação de informações confiáveis sobre o <b>desenvolvimento infantil </b>
                            no que se refere à <b>comunicação</b>.
                        </p>
                        <p className="middle-text">
                            O projeto foi idealizado originalmente pela estudante de fonoaudiologia
                            Patrícia do Valle. Com orientação da professora Tatiana Bagetti,
                            mais 2 estudantes se juntaram à iniciativa, contribuindo cada um com sua
                            área de conhecimento.
                        </p>
                        <p className="middle-text">
                            Todo o conteúdo disponibilizado no Palavrinha foi baseado na
                            <b> literatura científica </b>e passou por avaliação de juízes fonoaudiólogos
                            que atuam no campo da linguagem infantil.
                        </p>
                    </div>
                </section>
                <section className="about-us-integrants col-lg-12 flex-wrap">
                    <h1 className="title">Quem Somos</h1>
                    {
                        integrants.map((integrant, idx) => {
                            let card;
                            if (idx % 2 === 1) {
                                card =
                                    <div key={integrant.name}>
                                        <div className="integrant-card d-flex">
                                            <div className="col-md-9 column-space">
                                                <h3 className="integrant-name" style={{ textAlign: 'right' }}>
                                                    <CustomPopover 
                                                        placement="left" 
                                                        component={PopoverComponent(integrant)}>
                                                        <span> <FaInfoCircle /> </span>
                                                    </CustomPopover>
                                                    {integrant.name}
                                                </h3>
                                                <h4 className="integrant-text" style={{ textAlign: 'right' }}>
                                                    {integrant.academics}
                                                </h4>
                                                <h4 className="integrant-text" style={{ textAlign: 'right' }}>
                                                    {integrant.responsability}
                                                </h4>
                                            </div>
                                            <div className="col-md-3">
                                                <Image
                                                    src={integrant.photo}
                                                    roundedCircle
                                                    className="integrant-photo align-right"
                                                />
                                            </div>
                                        </div>
                                    </div>
                            } else {
                                card =
                                    <div key={integrant.name}>
                                        <div className="integrant-card d-flex">
                                            <div className="col-md-3">
                                                <Image
                                                    src={integrant.photo}
                                                    roundedCircle
                                                    className="integrant-photo align-left"
                                                />
                                            </div>
                                            <div className="col-md-9 column-space">
                                                <h3 className="integrant-name" style={{ textAlign: 'left' }}>
                                                    {integrant.name}
                                                    <CustomPopover 
                                                        placement="right" 
                                                        component={PopoverComponent(integrant)}>
                                                        <span> <FaInfoCircle /> </span>
                                                    </CustomPopover>
                                                </h3>
                                                <h4 className="integrant-text" style={{ textAlign: 'left' }}>
                                                    {integrant.academics}
                                                </h4>
                                                <h4 className="integrant-text" style={{ textAlign: 'left' }}>
                                                    {integrant.responsability}
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                            }
                            return card;
                        })
                    }
                </section>
            </section>
        </>
    )
}
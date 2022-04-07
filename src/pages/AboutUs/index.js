import React from 'react';
import { Image } from 'react-bootstrap';
import './index.css';
import { FaGithub, FaLinkedin, FaInfoCircle, FaBriefcase, FaInstagram, FaFileAlt } from 'react-icons/fa';
import palavrinhaDesktop from '../../assets/about-us/desktop-palavrinha.png';
import palavrinhaBrokeLineLogo from '../../assets/break-line-logo.png'
// import palavrinhaArrow from '../../assets/about-us/arrow.png';

import LAE from '../../assets/integrants/lucas-araujo-emmerich.jpg';
import PVA from '../../assets/integrants/patricia-do-valle-alves.png';
import TBA from '../../assets/integrants/tatiana-bagetti.jpeg';
import LHS from '../../assets/integrants/luma-heidenfelder-schwantes.png';
import GVF from '../../assets/integrants/gabrielle-vicente-ferreira.png'

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
        <h5>Acesse:</h5>
        {integrant.info?.map(i => {
            return (
                <div style={{ marginBottom: 3 }} key={i.url}>
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
        academics: 'Estudante de fonoaudiologia na Universidade Federal Fluminense, Instituto de Saúde de Nova Friburgo (UFF - ISNF).',
        responsability: 'Como bolsista PIBIT durante 11 meses, idealizou a plataforma digital (aplicativo e site) junto à professora e Tatiana Bagetti. No seu trabalho de conclusão de curso abordou o desenvolvimento e a validação do site.',
        info: [
            {
                label: 'Instagram',
                icon: <FaInstagram color="#0E76A8" style={{ cursor: 'pointer' }} size={16} />,
                url: 'https://www.instagram.com/fonoa.patricia/'
            },
            {
                label: 'Currículo lattes',
                icon: <FaFileAlt color="white" style={{ cursor: 'pointer' }} size={16} />,
                url: 'http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K8697387U6&tokenCaptchar=03AGdBq25VxyAB5r_AKBjQwEM_Y0SPWQ__CEvSwrseKlKEc9m3zAs_sQVYe_f_8VqTh1sD5kMbxHA_PcKT-3zu20_Ht3dQbRuhxGUspC_IKLk8J5sF3XZo-yUenA0G0BA_peu7rE1ffVlxiznpoEgbPFUM01pqDluaKSdjpT_SHAUL1n8bD270E9dgB5fRR7Et7GH6dgCI3AMDvJ3gI2IuEBM5-8JTyZj4pQ0wDOjalGXChnuU6ui_adfm1cvd08BJGmo5NS0ZRa2s2bMZuoQzQi-ctEzXGH65LwnhrFwKGCpoxI5UXAAhHPPuOm79UFZcppZjTgfyD-ULlApWizUqTrXPtjHfHPvWlR-_p9TuGPCzWysD0nmvKsIk17VkRrvrvqPHIGV82MbxVIhsTVAS3_ktQIjnM-EP4xPfpv56XX_Zc0Wtm2MOBN6Zw65cNfhKeuAzWgWZGglokbeMnbZKSnxpxoOPUAXh_-jsGCqRIVeSuozHwrSSr9diIhfkf6FYSFWv4fjf54TkETJ4q7BTU2nWo4_YWubg3g'
            }
        ]
    },
    {
        photo: TBA,
        name: 'Tatiana Bagetti',
        academics: 'Fonoaudióloga, Mestre em Distúrbios da Comunicação Humana e Dra. em Estudos da Linguagem. Profa Adjunta do curso de graduação em Fonoaudiologia da UFF (Universidade Federal Fluminense).',
        responsability: 'Profa. responsável pelo projeto e orientadora dos estudantes. Idealizou  a plataforma digital (aplicativo e site)  junto a  estudante Patŕicia do Valle Alves e orientou Patrícia em seu TCC.',
        info: [
            {
                label: 'Currículo lattes',
                icon: <FaFileAlt color="white" style={{ cursor: 'pointer' }} size={16} />,
                url: 'http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4708670J6&tokenCaptchar=03AGdBq24FKsFeRTDHfdU7vMi8u65xhoc2bFLjGk1qfhSysUJCXlDcWUYqFKCZnB257e3WrUc8990_UzsDKArybR1LAZU2JTnnzJkL9lLHvpP1Npy1onco5LKPNse2icoxVhKarOuuj3JnQXIgGHr8OBSfFpky3f3Pw4Dyp72e3geAEJVQs-0vg_U-UO-bN_XIakErDaSWOjBL1FYNDmGS7XfFD_mTjkiGgv6hRP4UrGQzbrtdVPT-WEfFeFxCW0BoD7MCeO6rHDMMJxpvYagOzbX4omb0_q6olRCqOJEbwbShf1kvvVsFAFhj7bWjqowpKDsRMbCzbpixpWktdi-hwmxNMd5ghXvxRmZmue69oqFPQLyHR1jfdqodyzvDOf0T46NUTWCGQJ0jbh4n-rw3VMbq5WK3dHjOQnuOFHY3omOCyICs8wIo0hIv86q-skaSJzSgnRyDY4K2P5aFR3-NQHanpzId6AB2q56rK2hrbW1WZ91XK6N-eS6GN_HyLrf4WT5ouk2XPABnBLlczavthN5BD_Z_pa9L8w'
            },
            {
                label: 'Instagram',
                icon: <FaInstagram color="#0E76A8" style={{ cursor: 'pointer' }} size={16} />,
                url: 'https://www.instagram.com/tatiana.bagetti/'
            }
        ]
    },
    {
        photo: LHS,
        name: 'Luma Heidenfelder Schwantes',
        academics: 'Estudante de Comunicação Visual Design na Escola de Belas Artes da Universidade Federal do Rio de Janeiro.',
        responsability: 'Designer responsável por toda a construção visual e estrutural do site - desde a concepção da identidade visual e naming até a UX/UI.',
        info: [
            {
                label: 'Linkedin',
                icon: <FaLinkedin color="#0e76a8" style={{ cursor: 'pointer' }} size={16} />,
                url: 'https://www.linkedin.com/in/lumaschwantes/'
            },
            {
                label: 'Portfólio',
                icon: <FaBriefcase color="#333" style={{ cursor: 'pointer' }} size={16} />,
                url: 'https://www.behance.net/lumaschwantes'
            }
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
                url: 'https://github.com/LucasEmmerich'
            }
        ]
    }
]
export default function AboutUs() {
    return (
        <section className="about-us">
            <section className="about-us-text col-lg-12">
                <div className="col-lg-12 flex-box" style={{ paddingTop: 50 }}>
                    <div className="col-md-6 d-flex justify-content-end">
                        <Image src={palavrinhaDesktop} />
                    </div>
                    <div className="col-md-6" style={{ textAlign: 'left', paddingLeft: 30, paddingRight: 40 }}>
                        <Image src={palavrinhaBrokeLineLogo} />
                        <p className="middle-text" style={{ maxWidth: 600 }}>
                            O Palavrinha é um site para orientar, sugerir atividades e auxiliar na disseminação de informações confiáveis sobre o <b>desenvolvimento infantil</b> no que se refere à comunicação. Vamos contar um pouquinho da nossa história, de como o projeto foi criado e desenvolvido.
                        </p>
                    </div>
                </div>
                <div className="col-md-12 d-flex justify-content-center">
                    <span className="middle-text" style={{ textAlign: 'center', paddingTop: 20, width: 1200 }}>
                        Este projeto foi realizado em parceria por professora do curso de Fonoaudiologia e estudantes de Fonoaudiologia, Comunicação Visual e Sistemas de Informação.
                    </span>
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
                                        <div className="col-md-8" style={{ maxWidth: '80%' }}>
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
                                        <div className="col-md-4">
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
                                        <div className="col-md-4">
                                            <Image
                                                src={integrant.photo}
                                                roundedCircle
                                                className="integrant-photo align-left"
                                            />
                                        </div>
                                        <div className="col-md-8" style={{ maxWidth: '80%' }}>
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

                <hr style={{ color: 'white', border: '2px solid white', width: '80%', margin: 'auto' }} />
                <h1 className="title">Colaboradores</h1>
                <div>
                    <div className="integrant-card">
                        <div className="col-md-4">
                            <Image
                                src={GVF}
                                roundedCircle
                                className="integrant-photo align-left"
                            />
                        </div>
                        <div className="col-md-8 column-space">
                            <h3 className="integrant-name" style={{ textAlign: 'left' }}>
                                Gabrielle Vicente Ferreira
                                <CustomPopover
                                    placement="right"
                                    component={PopoverComponent(
                                        {
                                            info: [
                                                {
                                                    label: 'Currículo lattes',
                                                    icon: <FaFileAlt color="white" style={{ cursor: 'pointer' }} size={16} />,
                                                    url: 'http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K9673337Y7&tokenCaptchar=03AGdBq27cnPNxF_rE0Zfxosa2pUP_PkMgOjgyuBxKnjBOLpFDTTtMEq2Wcmb1VNug1CJldwmnhK8-9g0KPanB9ARA170Jzk4L0sEGPErSuIKTilWtbkAw4PkNS0YLeW6QJ01HpF66RVzTPL1KHjDds_tYtFGvN4yNFC0LHFy3fARjX7VFB2r0SShLYcEOkrW0hgQSQNXbcvuutqF4fgyGzAIysu5DliZxAYU_Hwm-g8EsSWlBEjZboxGwvX0Mjbm49QRN14T6MevIA2jSCP01Jq-Ailhhqu8omNe12w-MK7XdpxIqwAXyaGKR_GeZSpKITzmTZGfLlAwlIND3guhD4xigH49ad3MlGOqJjIiTVZBUqdLA17rVECK0AV2s31wW6hojYIh0RTAMksusYZ_-If8w-g02Z8hYtvwda77cJGiEf_gm0Cp6CAUm2cgRi0fPg3wVtOp0OoPJ22kslEwmk-4X6m5Tg54LJWEXbKgRC8ItXPtwjStsoLyFHI-BjQM723EkfqUNlDOKY1AhLIbQeZe7e1w1s9Gtjg'
                                                },
                                                {
                                                    label: 'Instagram',
                                                    icon: <FaInstagram color="#0E76A8" style={{ cursor: 'pointer' }} size={16} />,
                                                    url: 'https://www.instagram.com/gabyferreirav/'
                                                }
                                            ]
                                        }
                                    )}>
                                    <span> <FaInfoCircle /> </span>
                                </CustomPopover>
                            </h3>
                            <div>
                                <h4 className="integrant-text" style={{ textAlign: 'left' }}>
                                    Estudante do curso de graduação em Fonoaudiologia da UFF.
                                </h4>
                            </div>
                            <div>
                                <h4 className="integrant-text" style={{ textAlign: 'left' }}>
                                    Auxiliou na elaboração de brincadeiras do site e na inserção das normas Vancouver. Foi bolsista PIBITI do projeto durante 1 mês.
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div style={{ backgroundColor: '#038C3E' }}>
                        <h1 className="title">Agradecimentos</h1>

                        <div style={{ padding: 50, margin: 'auto' }}>
                            <h3 className="integrant-text">
                                Agradecemos o apoio financeiro do PIBITI-UFF e a todas as pessoas que contribuíram de alguma forma para que este Projeto pudesse ser concretizado.
                            </h3>
                        </div>
                    </div>
                </div>

            </section>
        </section>
    )
}
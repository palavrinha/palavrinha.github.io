import React from 'react';
import { Image } from 'react-bootstrap';
import './index.css';
import { FaGithub, FaLinkedin, FaInfoCircle, FaBriefcase, FaInstagram, FaFileAlt } from 'react-icons/fa';
import palavrinhaDesktop from '../../assets/about-us/palavrinha-desktop-img.png';

import LAE from '../../assets/integrants/lucas-araujo-emmerich.jpg';
import PVA from '../../assets/integrants/patricia-do-valle-alves.png';
import TBA from '../../assets/integrants/tatiana-bagetti.png';
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
        academics: 'Estudante de fonoaudiologia na Universidade Federal Fluminense, Instituto de Saúde de Nova Friburgo (UFF - ISNF)',
        responsability: 'Como bolsista PIBIT durante um ano, idealizou o site junto da professora e orientadora Tatiana Bagetti. Elaborou todo o conteúdo do Palavrinha referente à teoria e prática fonoaudiológica.',
        info: [
            {
                label: 'Instagram Profissional',
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
        academics: 'Fonoaudióloga, Dra. em Estudos da Linguagem, Mestre em Distúrbios da Comunicação Humana e Profa Adjunta do curso de graduação em Fonoaudiologia da UFF (Universidade Federal Fluminense).',
        responsability: 'Professora responsável pelo projeto e orientadora dos estudantes envolvidos. Idealizou o site, juntamente com Patŕicia do Valle Alves. Elaborou conteúdos do ”Palavrinha”, corrigiu textos, supervisionou e orientou os estudantes. Também elaborou o conteúdo referente ao “Cantinho sistêmico”.',
        info: [
            {
                label: 'Currículo lattes',
                icon: <FaFileAlt color="white" style={{ cursor: 'pointer' }} size={16} />,
                url: 'http://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K4708670J6&tokenCaptchar=03AGdBq24FKsFeRTDHfdU7vMi8u65xhoc2bFLjGk1qfhSysUJCXlDcWUYqFKCZnB257e3WrUc8990_UzsDKArybR1LAZU2JTnnzJkL9lLHvpP1Npy1onco5LKPNse2icoxVhKarOuuj3JnQXIgGHr8OBSfFpky3f3Pw4Dyp72e3geAEJVQs-0vg_U-UO-bN_XIakErDaSWOjBL1FYNDmGS7XfFD_mTjkiGgv6hRP4UrGQzbrtdVPT-WEfFeFxCW0BoD7MCeO6rHDMMJxpvYagOzbX4omb0_q6olRCqOJEbwbShf1kvvVsFAFhj7bWjqowpKDsRMbCzbpixpWktdi-hwmxNMd5ghXvxRmZmue69oqFPQLyHR1jfdqodyzvDOf0T46NUTWCGQJ0jbh4n-rw3VMbq5WK3dHjOQnuOFHY3omOCyICs8wIo0hIv86q-skaSJzSgnRyDY4K2P5aFR3-NQHanpzId6AB2q56rK2hrbW1WZ91XK6N-eS6GN_HyLrf4WT5ouk2XPABnBLlczavthN5BD_Z_pa9L8w'
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
                url: 'https://github.com/LucasEmmerich'
            }
        ]
    }
]
export default function AboutUs() {
    return (
        <section className="about-us">
            <section className="about-us-text col-lg-12">
                <div className="col-lg-12 text-center">
                    <Image
                        src={palavrinhaDesktop}
                        width={720}
                        height={300}
                    />
                </div>
                <div className="col-lg-12">
                    <p className="middle-text">O Palavrinha é um site para orientar, sugerir atividades e auxiliar na disseminação de informações confiáveis sobre o desenvolvimento infantil no que se refere à comunicação. Vamos contar um pouquinho da nossa história, de como o projeto foi criado e desenvolvido.</p>
                    <p className="middle-text">A ideia original era a criação de um aplicativo para orientar pais e professores sobre o desenvolvimento infantil e foi idealizado pela professora Tatiana Bagetti, que escreveu o projeto e submeteu para concorrer a bolsa PIBITI-UFF. O projeto foi desenvolvido de forma ativa pela estudante de fonoaudiologia Patricia do Valle Alves, que foi bolsista de Iniciação Tecnológica -PIBITI-UFF durante a maior parte de vigência do Projeto.</p>
                    <p className="middle-text">Aos poucos, percebemos que precisávamos de uma equipe para a elaboração do projeto e convidamos Luma e Lucas, estudantes de Comunicação Visual Design e Sistemas de Informação, respectivamente. A equipe foi ampliada e nosso objetivo ficou cada vez mais possível.</p>
                    <p className="middle-text">Inicialmente, seria desenvolvido um aplicativo mobile para a área de linguagem e fala infantil (LINFI). Em virtude da natureza das informações que seriam disponibilizadas, Patrícia e Luma sugeriram que a plataforma fosse, na verdade, um site. A sugestão foi super bem recebida pela professora Tatiana e por todos os integrantes.</p>
                    <p className="middle-text">Após passar por um processo de naming, o site recebeu o nome de “Palavrinha”. Dessa forma, pôde transmitir com mais clareza para seu público sobre qual assunto se tratava e que objetivos tinha. O novo nome representa o universo infantil e de linguagem reunidos em uma palavra.</p>
                    <p className="middle-text">Mais tarde, outra aluna do curso de Fonoaudiologia, Gabrielle, se juntou ao projeto e auxiliou na elaboração de alguns conteúdos.</p>
                    <p className="middle-text">Uma prévia da apresentação do Palavrinha já foi apresentada no ETARSERRA-RJ. Enviamos também um projeto para apreciação do Comitê de Ética (CEP) do ISNF para que pudéssemos contar com a avaliação do site por outros fonoaudiólogos da área de linguagem infantil e recebemos aprovação do Comitê.</p>
                    <p className="middle-text">Portanto,  o conteúdo disponibilizado no Palavrinha foi baseado na literatura científica e passou por avaliação de juízes fonoaudiólogos que atuam no campo da linguagem infantil.</p>
                    <p className="middle-text">Esperamos que vocês gostem do site e do conteúdo aqui disponibilizado. É um prazer contribuir para a disseminação de informação de qualidade e  conteúdos científicos. Agradecemos imensamente o apoio financeiro da PIBITI-UFF e a todos que acreditaram na realização deste lindo trabalho em parceria entre diferentes áreas do saber.</p>
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
                </div>

                <hr style={{ color: 'white', border: '2px solid white', width: '80%', margin: 'auto' }} />
                <h1 className="title">Agradecimentos</h1>

                <div style={{marginBottom: 150, width: '90%', margin: 'auto' }}>
                    <h3 className="integrant-text">
                        Agradecemos o apoio financeiro do PIBITI-UFF e a todas as pessoas que contribuíram de alguma forma para que este Projeto pudesse ser concretizado.
                    </h3>
                </div>
            </section>
        </section>
    )
}
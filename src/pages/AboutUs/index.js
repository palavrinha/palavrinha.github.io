import React from 'react';
import { Image } from 'react-bootstrap';
import Header from '../../components/Header';
import './index.css';
import { FaBriefcase, FaEnvelope, FaGithub, FaGraduationCap, FaLaptopCode, FaLinkedin, FaUniversity } from 'react-icons/fa'

import LAE from '../../assets/integrants/lucas-araujo-emmerich.jpg';

const integrants = {
    LAE,
}

export default function AboutUs() {
    return (
        <>
            <Header />
            <section className="about-us d-flex col-lg-12 flex-wrap">
                <div className="col-lg-6">
                    <div className="integrant-section d-flex">
                        <Image src={integrants['LAE']} roundedCircle className="integrant-photo" />
                        <div className="integrant-info d-flex flex-column">
                            <div className="d-flex justify-content-between integrant-title">
                                <span><FaLaptopCode size={16} /> Lucas Araujo Emmerich</span>
                                <span>
                                    <FaLinkedin color="#0e76a8" style={{ cursor: 'pointer' }} size={16} onClick={() => window.open('https://www.linkedin.com/in/lucas-araujo-6213aa199/', '_blank')} />
                                    <FaGithub color="#333" style={{ cursor: 'pointer' }} size={16} onClick={() => window.open('https://github.com/LucasEmmerich', '_blank')} />
                                </span>
                            </div>
                            <span><FaGraduationCap size={16} /> Bacharelando em Sistemas de Informação </span>
                            <span><FaUniversity size={16} /> CEFET-RJ </span>
                            <span><FaBriefcase size={16} /> Full Stack Developer </span>
                            <span><FaEnvelope color="grey" size={16} /> lucas.emmerich@aluno.cefet-rj.br </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
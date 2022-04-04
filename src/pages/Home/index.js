import React, { useState } from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import sisters_reading from '../../assets/home/sisters-reading.png';
import sisters_drawing from '../../assets/home/sisters-drawing.png';
import father_and_daughter from '../../assets/home/father-and-daughter.png';
import break_line_logo from '../../assets/break-line-logo.png';
import './index.css';

export default function Home() {
    const [carouselIndex, setCarouselIndex] = useState(0);
    const history = useHistory();

    const prevIcon = (
        <svg width="48" height="65" viewBox="0 0 48 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M44 5L10 32.5L44 60" stroke="#DE4E8D" strokeWidth="12" />
        </svg>
    )
    const nextIcon = (
        <svg width="48" height="65" viewBox="0 0 48 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 60L38 32.5L4 5" stroke="#DE4E8D" strokeWidth="12" />
        </svg>
    )

    return (
        <section>
            <div className="carousel-area">
                <Carousel
                    activeIndex={carouselIndex}
                    onSelect={setCarouselIndex}
                    className="carousel"
                    prevIcon={prevIcon}
                    nextIcon={nextIcon}>
                    <Carousel.Item>
                        <div className="carousel-item-area">
                            <img
                                className="carousel-img desktop-only"
                                src={sisters_reading}
                                alt="Irmãs lendo."
                            />
                            <div className="carousel-description">
                                <section>
                                    <img src={break_line_logo} alt="Palavrinha" />
                                    <br />
                                    <br />
                                    <span className="middle-text">
                                        O Palavrinha é um
                                        <b> site </b>
                                        para orientar e sugerir atividades e auxiliar na disseminação de informações confiáveis sobre o
                                        <b> desenvolvimento infantil </b>
                                        no que se refere a comunicação.
                                    </span>
                                    <Button onClick={() => { history.push('/about-us') }}>
                                        Saiba mais sobre nós
                                    </Button>
                                </section>
                            </div>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-item-area">
                            <div className="carousel-description-2">
                                <section>
                                    <span>Comunicação infantil</span>
                                    <p className="middle-text">
                                        Uma grande preocupação de quem convive com crianças é: <b>quando elas começarão a falar?</b>
                                    </p>
                                    <Button onClick={() => { history.push('/about-us') }}>
                                        Saiba mais
                                    </Button>
                                </section>
                            </div>
                            <img
                                className="carousel-img desktop-only"
                                src={father_and_daughter}
                                alt="Pai lendo com a filha."
                            />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="carousel-item-area">
                            <img
                                className="carousel-img desktop-only"
                                src={sisters_drawing}
                                alt="Irmãs desenhando."
                            />
                            <div className="carousel-description-3">
                                <section>
                                    <h5>Como ajudar a criança?</h5>
                                    <span className="middle-text">
                                        Dicas para auxiliar no desenvolvimento da <b>comunicação e linguagem</b> da criança.
                                    </span>
                                    <Button onClick={() => { history.push('/about-us') }}>
                                        Veja as dicas
                                    </Button>
                                </section>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </section>
    );
}
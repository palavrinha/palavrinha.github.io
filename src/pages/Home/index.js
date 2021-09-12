import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import foto_home from '../../assets/home-images/foto_home.png';
import Header from '../../components/Header';
import './index.css';


export default function Home() {
    const history = useHistory();
    const [carouselIndex, setCarouselIndex] = useState(0);

    return (
        <section>
            <Header />
            <div className="carousel-area">
                <Carousel activeIndex={carouselIndex} onSelect={setCarouselIndex} className="carousel">
                    <Carousel.Item>
                        <img
                            className="d-block carousel-img"
                            src={foto_home}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>4x1 Ex: 1200px x 300px</h3>
                            <p>4x1 Ex: 1200px x 300px</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block carousel-img"
                            src={foto_home}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>4x1 Ex: 1200px x 300px</h3>
                            <p>4x1 Ex: 1200px x 300px</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block carousel-img"
                            src={foto_home}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>4x1 Ex: 1200px x 300px</h3>
                            <p>4x1 Ex: 1200px x 300px</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                <h1 className="text-center"> Apresentações e atalhos...</h1>
            </div>
        </section>
    );
}
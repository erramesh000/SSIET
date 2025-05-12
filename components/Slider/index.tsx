import React from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="#"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First Slide Label</h3>
                    <p>Some representative placeholder content for the first slide.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="#"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second Slide Label</h3>
                    <p>Some representative placeholder content for the second slide.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="#"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third Slide Label</h3>
                    <p>Some representative placeholder content for the third slide.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;

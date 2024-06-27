import React from "react";
import "./Clients.css";
import Carousel from 'react-bootstrap/Carousel';

function Clients(){
    
    return(
        <div>
            <h3 className='client-title'>Some Of Our Valued Clients</h3>
            <Carousel data-bs-theme="dark" interval={null}>
                <Carousel.Item>
                    <div className="carousal-img-div">
                        <img
                            className="d-block"
                            src="client1.webp"
                            alt="Image 1"
                            height="100px"
                            width="150px"
                        />
                        <img
                            className="d-block"
                            src="client2.webp"
                            alt="Image 2"
                            height="100px"
                            width="150px"
                        />
                        <img
                            className="d-block"
                            src="client3.webp"
                            alt="Image 3"
                            height="100px"
                            width="150px"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                <div className="carousal-img-div">
                        <img
                            className="d-block"
                            src="client4.webp"
                            alt="Image 4"
                            height="100px"
                            width="150px"
                        />
                        <img
                            className="d-block"
                            src="client5.webp"
                            alt="Image 5"
                            height="100px"
                            width="150px"
                        />
                        <img
                            className="d-block"
                            src="client6.webp"
                            alt="Image 6"
                            height="100px"
                            width="150px"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>

        </div>
    )
}

export  default Clients;

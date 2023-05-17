import React from 'react';
import "./ClassMain.css"
import {Carousel, Col} from "react-bootstrap";
import {BsChevronRight} from "react-icons/bs";

export default function ClassMain() {
    return(
        <>
            <Carousel className=" my-4 ">
                <Carousel.Item>
                    <div className="d-flex justify-content-center">
                        <img
                            className="d-block rounded"
                            src="https://images.unsplash.com/photo-1676028793913-d1b089954d10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1495&q=80"
                            alt="First slide"
                            width="1200px"
                            height="400px"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex justify-content-center">
                        <img
                            className="d-block rounded"
                            src="https://images.unsplash.com/photo-1639048759250-47646c3f3c0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                            alt="Second slide"
                            width="1200px"
                            height="400px"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex justify-content-center">
                        <img
                            className="d-block rounded"
                            src="https://plus.unsplash.com/premium_photo-1663050712656-f240e3cdd7d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                            alt="Third slide"
                            width="1200px"
                            height="400px"
                        />
                    </div>
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )




}
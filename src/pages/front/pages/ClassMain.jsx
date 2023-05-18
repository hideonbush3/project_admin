import React from 'react';
import "./ClassMain.css";
import all from "../img/nav/011-all-2.png";
import fitness from "../img/nav/013-dumbbell.png";
import cook from "../img/nav/016-bake.png";
import craft from "../img/nav/018-paper-crafts.png";
import music from "../img/nav/002-live-music.png";
import art from "../img/nav/003-art.png";
import activity from "../img/nav/019-flyboard.png";
import others from "../img/nav/007-more.png";
import {Carousel, Col, Row} from "react-bootstrap";


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
                            width="960"
                            height="300"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex justify-content-center">
                        <img
                            className="d-block rounded"
                            src="https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                            alt="Second slide"
                            width="960"
                            height="300"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex justify-content-center">
                        <img
                            className="d-block rounded"
                            src="https://images.unsplash.com/photo-1684166220037-d94a15745f9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                            alt="Third slide"
                            width="960"
                            height="300"
                        />
                    </div>
                </Carousel.Item>
            </Carousel>

            <Row>
                <Col className="offset-xl-3 col-xl-6">
                    <div className="mainNavContainer">
                        <ul>
                            <li><img src={all} alt="all" /></li>
                            <li><img src={fitness} alt="fitness" /></li>
                            <li><img src={cook} alt="cook" /></li>
                            <li><img src={craft} alt="craft" /></li>
                            <li><img src={music} alt="music" /></li>
                            <li><img src={art} alt="art" /></li>
                            <li><img src={activity} alt="activity" /></li>
                            <li><img src={others} alt="others" /></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </>
    )




}
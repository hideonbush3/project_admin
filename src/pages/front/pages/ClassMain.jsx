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
            <Carousel className=" mt-4 mb-5 ">
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
                        <ul className={"d-flex justify-content-between text-center flex-wrap"}>
                            <li className="px-3 pb-1 pt-2 mb-4"><img src={all} alt="all" /><p>전체</p></li>
                            <li className="px-3 pb-1 pt-2 mb-4"><img src={fitness} alt="fitness" /><p>피트니스</p></li>
                            <li className="px-3 pb-1 pt-2 mb-4"><img src={cook} alt="cook" /><p>요리</p></li>
                            <li className="px-3 pb-1 pt-2 mb-4"><img src={craft} alt="craft" /><p>공예</p></li>
                            <li className="px-3 pb-1 pt-2 mb-4"><img src={music} alt="music" /><p>음악</p></li>
                            <li className="px-3 pb-1 pt-2 mb-4"><img src={art} alt="art" /><p>미술</p></li>
                            <li className="px-3 pb-1 pt-2 mb-4"><img src={activity} alt="activity" /><p>액티비티</p></li>
                            <li className="px-3 pb-1 pt-2 mb-4"><img src={others} alt="others" /><p>기타</p></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </>
    )




}
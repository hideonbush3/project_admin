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
import Card from 'react-bootstrap/Card';



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
                            width="912"
                            height="380"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex justify-content-center">
                        <img
                            className="d-block rounded"
                            src="https://images.unsplash.com/photo-1661956601349-f61c959a8fd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                            alt="Second slide"
                            width="912"
                            height="380"
                        />
                    </div>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="d-flex justify-content-center">
                        <img
                            className="d-block rounded"
                            src="https://images.unsplash.com/photo-1684166220037-d94a15745f9b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                            alt="Third slide"
                            width="912"
                            height="380"
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

            <Row>
                <Col className="offset-xl-3 col-xl-6">
                    <p className="m-0">필터자리1</p>
                </Col>
            </Row>


            <div className="mainCardContainer">
                <Row>
                    <Col className="offset-xl-3 col-xl-6 mb-5">
                        <Row>
                            <Col className="col-4 mt-4">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/3d6446b750d54cff8e2f8eba1c946358.jpg" width="100%" height="218px" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-4  mt-4">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/107245ea89a24b5484bef665c9a3b947.jpg" width="100%" height="218px" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-4 mt-4">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/9aaa99bb62c44b38adcf441b5256b782.jpg" width="100%" height="218px" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-4 mt-4">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/ede7841e7fd242259f201dc7dd73a91d.jpg" width="100%" height="218px" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-4 mt-4">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/c573170218414d0ca49314b80559c780.jpg" width="100%" height="218px" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-4 mt-4">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/4eb9426e3d1f433eb0c22242d97edfc2.jpg" width="100%" height="218px" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-4 mt-4">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/57b1ad459a8f40e4bc0e0e2914977fb1.JPG" width="100%" height="218px" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-4 mt-4">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/5988c7de06a14b45bd8354cc285f092c.jpg" width="100%" height="218px" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-4 mt-4">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/18a922ad06e74794a5bce4fa68d30264.JPG" width="100%" height="218px" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-4 mt-4">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/c16d3620cc6548109303d7033f62ab24.jpg" width="100%" height="218px" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-4 mt-4">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/f01c9f5cbdb641b1adc91c6c02c07300.jpg" width="100%" height="218px" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col className="col-4 mt-4">
                                <Card style={{ width: '18rem' }}>
                                    <Card.Img variant="top" src="https://s3.ap-northeast-2.amazonaws.com/umclassuploadboardimg/74f88105855744a19c1e308d48d696f7.jpg" width="100%" height="218px" />
                                    <Card.Body>
                                        <Card.Title>Card Title</Card.Title>
                                        <Card.Text>
                                            Some quick example text to build on the card title and make up the
                                            bulk of the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </div>


        </>
    )




}
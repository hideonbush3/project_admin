import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import "./Join.css"


export default function Join () {
    return (
        <div className="registerMain mt-5">
            <Row>
                <Col className={"offset-xl-4 col-xl-4 joinContainer"}>
                    <h3 className={"text-center registerHeader"} style={{marginBottom:"60px"}}>회원가입</h3>
                    <div id="joinForm" className="ps-3 border-top border-2 border-dark">
                        <Row className={"mb-4 mt-3"}>
                            <Col className={"col-3 align-self-center"}>
                                <p style={{margin:"0"}}>이메일 <span className={"text-danger"}>*</span></p>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="text" style={{width:"100%",height:"40px"}} />
                            </Col>
                            <Col className={"col-3"}>
                               <button className="joinButton">중복확인</button>
                            </Col>
                        </Row>
                        <Row className={"mb-4"}>
                            <Col className={"col-3 align-self-center"}>
                                <p style={{margin:"0"}}>닉네임 <span className={"text-danger"}>*</span></p>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="text" style={{width:"100%",height:"40px"}} />
                            </Col>
                        </Row>
                        <Row className={"mb-4"}>
                            <Col className={"col-3 align-self-center"}>
                                <p style={{margin:"0"}}>비밀번호 <span className={"text-danger"}>*</span></p>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="password" style={{width:"100%",height:"40px"}} />
                            </Col>
                        </Row>
                        <Row className={"mb-4"}>
                            <Col className={"col-3 align-self-center"}>
                                <p style={{margin:"0"}}>비밀번호 확인 <span className={"text-danger"}>*</span></p>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="password" style={{width:"100%",height:"40px"}} />
                            </Col>
                        </Row>
                        <Row className={"mb-4"}>
                            <Col className={"col-3 align-self-center"}>
                                <p style={{margin:"0"}}>이름 <span className={"text-danger"}>*</span></p>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="text" style={{width:"100%",height:"40px"}} />
                            </Col>
                        </Row>
                        <Row className={"mb-4"}>
                            <Col className={"col-3 align-self-center"}>
                                <p style={{margin:"0"}}>휴대폰 번호 <span className={"text-danger"}>*</span></p>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="text" style={{width:"100%",height:"40px"}} />
                            </Col>
                        </Row>
                        <Row className={"mb-4"}>
                            <Col className={"col-3 align-self-center"}>
                                <p style={{margin:"0"}}>구분 <span className={"text-danger"}>*</span></p>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="text" style={{width:"100%",height:"40px"}} />
                            </Col>
                        </Row>
                        <Row className={"mb-4"}>
                            <Col className={"col-3 align-self-center"}>
                                <p style={{margin:"0"}}>성별 <span className={"text-danger"}>*</span></p>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="text" style={{width:"100%",height:"40px"}} />
                            </Col>
                        </Row>
                        <Row className={"mb-5"}>
                            <Col className={"col-3 align-self-center"}>
                                <p style={{margin:"0"}}>생년 월일 <span className={"text-danger"}>*</span></p>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="text" style={{width:"100%",height:"40px"}} />
                            </Col>
                        </Row>
                        <Row style={{marginBottom:"100px"}}>
                            <Col className={"offset-3 col-6 d-flex justify-content-center"}>
                                <button className="joinSubmitButton">가입하기</button>
                            </Col>
                        </Row>
                    </div>

                </Col>
            </Row>
        </div>
    );
}
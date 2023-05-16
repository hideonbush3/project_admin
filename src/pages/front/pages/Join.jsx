import React from 'react';
import {Button, Col, Row} from "react-bootstrap";
import "./Join.css"


export default function Join () {
    return (
        <div className="registerMain">
            <Row>
                <Col className={"offset-lg-4 col-lg-4 pt-4 joinContainer"}>
                    <h2 className={"text-center mb-5"}>회원가입</h2>
                    <hr />
                    <div id="joinForm" className="ps-3">
                        <Row className={"mb-3"}>
                            <Col className={"col-3 align-self-center"}>
                                <p style={{margin:"0"}}>이메일 <span className={"text-danger"}>*</span></p>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="text" style={{width:"100%",height:"40px"}} />
                            </Col>
                            <Col className={"col-3"}>
                               <Button>중복확인</Button>
                            </Col>
                        </Row>
                        <Row className={"mb-3"}>
                            <Col className={"col-3 align-self-center"}>
                                <p style={{margin:"0"}}>닉네임 <span className={"text-danger"}>*</span></p>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="text" style={{width:"100%",height:"40px"}} />
                            </Col>
                        </Row>
                        <Row className={"mb-3"}>
                            <Col className={"col-3 align-self-center"}>
                                <p style={{margin:"0"}}>비밀번호 <span className={"text-danger"}>*</span></p>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="text" style={{width:"100%",height:"40px"}} />
                            </Col>
                        </Row>
                        <Row className={"mb-3"}>
                            <Col className={"col-3 align-self-center"}>
                                <p style={{margin:"0"}}>비밀번호 확인 <span className={"text-danger"}>*</span></p>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="text" style={{width:"100%",height:"40px"}} />
                            </Col>
                        </Row>
                        <Row className={"mb-3"}>
                            <Col className={"col-3 align-self-center"}>
                                <p style={{margin:"0"}}>이름 <span className={"text-danger"}>*</span></p>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="text" style={{width:"100%",height:"40px"}} />
                            </Col>
                        </Row>
                        <Row className={"mb-3"}>
                            <Col className={"col-3 align-self-center"}>
                                <p style={{margin:"0"}}>휴대폰 번호 <span className={"text-danger"}>*</span></p>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="text" style={{width:"100%",height:"40px"}} />
                            </Col>
                        </Row>
                        <Row className={"mb-3"}>
                            <Col className={"col-3 align-self-center"}>
                                <p style={{margin:"0"}}>생년 월일 <span className={"text-danger"}>*</span></p>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="text" style={{width:"100%",height:"40px"}} />
                            </Col>
                        </Row>
                        <Row className={"mb-3"}>
                            <Col className={"col-3 align-self-center"}>
                                <p style={{margin:"0"}}>성별 <span className={"text-danger"}>*</span></p>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="text" style={{width:"100%",height:"40px"}} />
                            </Col>
                        </Row>
                        <Row className={"mb-5"}>
                            <Col className={"col-3 align-self-center"}>
                                <p style={{margin:"0"}}>구분 <span className={"text-danger"}>*</span></p>
                            </Col>
                            <Col className={"col-6"}>
                                <input type="text" style={{width:"100%",height:"40px"}} />
                            </Col>
                        </Row>
                        <Row style={{marginBottom:"100px"}}>
                            <Col className={"offset-4 col-4"}>
                                <Button style={{width:"100%"}}>가입하기</Button>
                            </Col>
                        </Row>
                    </div>

                </Col>
            </Row>
        </div>
    );
}
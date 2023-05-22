import React from 'react';
import {Button, Col, Form, Row, NavLink, Image} from "react-bootstrap";
import "./Login.css"
import kakao  from '../../../assets/kakaologin.png';


export default function Login () {
    return (
        <div className="container text-center">
          <div className="loginMain">
            <Row>
                <Col className={"offset-xl-4 col-xl-4 pt-4 LoginContainer"}>
                    <h2 className={"text-center mb-xl-5 loginLogo"}>양조장</h2>
                    <div id="joinForm" className="ps-3">
                        <Row className={"mb-3"}>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicId">
                                    <Col className={"offset-1 col-10"}>
                                    <Form.Control type="email" placeholder="아이디를 입력하세요" />
                                    </Col>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Col className={"offset-1 col-10"}>
                                    <Form.Control type="password" placeholder="비밀번호" />
                                    </Col>
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Row>
                                        <Col xs={{span: 5, offset: 1}}>
                                            <Form.Check type="checkbox" label="아이디 기억하기" />
                                        </Col>
                                        <Col xs={5} className={"text-end"}>
                                            <NavLink to="#">아이디/비밀번호 찾기</NavLink>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Col className={"offset-1 col-10"}>
                                <Button className={"loginbtn"} variant="secondary" type="submit">
                                    로그인
                                </Button>
                                </Col>
                                <Col className={"offset-1 col-10 mt-2"}>
                                    <div className="kakaoLogin">
                                        <Image src={kakao} className={"kakaoImg"}/>
                                    </div>
                                </Col>
                            </Form>
                        </Row>
                    </div>

                </Col>
            </Row>
        </div>
        </div>
    );
}
import React from 'react';
import "./Header.css"
import {Container, Form, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

export default function Header() {
  return (
      <header>
          <Navbar className="headerNav" bg="light" expand="lg">
              <Container>
                  <div className="logo"><Link href="/" className='navbar-brand'>양조장</Link></div>
                      <Form className="d-flex col-7">
                          <Form.Control className={"border-success"} placeholder={"클래스를 찾아보세요!"} aria-label="findlocation" aria-describedby="basic-addon1"/>
                      </Form>
              </Container>
          </Navbar>
      </header>
  );
}
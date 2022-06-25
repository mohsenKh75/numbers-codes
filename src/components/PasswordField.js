import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
//import Image from "../../components/image/image";
//import Link from "../../components/Link/mLink";
//import Logo from "../../logo.svg";

function PasswordField() {
  const [password, setPassword] = useState({
    first: "",
    second: "",
    third: "",
    forth: "",
  });
  let first = password.first,
    second = password.second,
    third = password.third,
    forth = password.forth;
  function passHandler(evt, name) {
    let value = evt.target.value;
    setPassword({ ...password, [evt.target.name]: value });
  }

  return (
    <div className="min-vh-100 py-3 bg-primary d-flex justify-content-center align-items-center">
      <Container>
        <Row>
          <Col xs={7} md={7} lg={4} className="bg-white mx-auto radius-4">
            <div className="d-flex justify-content-center">
              {/* <Image height="100px" width="100px" src={Logo} /> */}
            </div>
            <div className="mx-5">
              <Form>
                <div className="d-flex row justify-content-center align-items-center">
                  <div className="d-flex row justify-content-center align-items-center p-3">
                    <Col>
                      <h3>کد تایید را وارد کنید</h3>
                      <small className="text-muted mt-5">
                        کد تایید برای شماره
                        <span className="text-secondary">
                          &nbsp; 09120000000 &nbsp;
                        </span>{" "}
                        پیامک شد
                      </small>
                    </Col>
                    <Col className="d-flex flex-nowrap row justify-content-center align-items-center">
                      <div className="col">
                        <Form.Group className="mb-3 w-60" controlId="passField">
                          <Form.Control
                            size="lg"
                            className="p-1 pe-4 no-border"
                            type="text"
                            placeholder=""
                            style={{ alignContent: "middle" }}
                            required
                            name={first}
                            value={first}
                            onChange={(evt, first) => passHandler(evt, first)}
                          />
                        </Form.Group>
                      </div>
                      <div className="col">
                        <Form.Group className="mb-3 w-60" controlId="passField">
                          <Form.Control
                            size="lg"
                            className="my-1 p-1 pe-4 no-border"
                            type="text"
                            placeholder=""
                            required
                          />
                        </Form.Group>
                      </div>
                      <div className="col">
                        <Form.Group className="mb-3 w-60" controlId="passField">
                          <Form.Control
                            size="lg"
                            className="my-1 p-1 pe-4 no-border"
                            type="text"
                            placeholder=""
                            required
                          />
                        </Form.Group>
                      </div>
                      <div className="col">
                        <Form.Group className="mb-3 w-60" controlId="passField">
                          <Form.Control
                            size="lg"
                            className="my-1 p-1 pe-4 no-border"
                            type="text"
                            placeholder=""
                            required
                          />
                        </Form.Group>
                      </div>
                    </Col>
                    <div>
                      <p className="text-muted mt-5 text-center">
                        <span className="text-secondary"> 000 &nbsp;</span>
                        مانده تا دریافت مجدد کد.
                      </p>
                    </div>
                  </div>
                  <Col xs={10} md={8} lg={5} className="mx-auto my-3">
                    <Button
                      variant="primary"
                      type="submit"
                      size="lg"
                      className="rounded-pill w-100 text-light"
                    >
                      ثبت‌نام
                    </Button>
                  </Col>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PasswordField;

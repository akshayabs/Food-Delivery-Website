import React, { useRef } from "react";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/common-section/CommonSection";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import "../styles/product-details.css";

const Login = () => {
  const loginNameRef = useRef();
  const loginPasswordRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    if (loginNameRef.current.value && loginPasswordRef.current.value) {
      alert("Your message has been successfully sent");
      
    } else {
      alert("Please fill in both email and password fields");
    }
  };

  return (
    <Helmet title="Contact Us">
      <CommonSection title="Contact Us" />
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12" className="m-auto text-center">
              <form className="form mb-5" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Full Name"
                    required
                    ref={loginNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    ref={loginNameRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Phone Number"
                    required
                    ref={loginPasswordRef}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="textarea"
                    placeholder="Message"
                    required
                    ref={loginPasswordRef}
                  />
                </div>
               <button type="submit" className="addTOCart__btn">
                  Send Message ✉

                </button>
              </form>
              
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Login;

import React from "react";
import { Container,Row,Col } from "reactstrap";
import { ListGroup,ListGroupItem } from "reactstrap";
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import logo from "../../assets/images/res-logo.png";
import "../../styles/footer.css";
import {Link} from "react-router-dom";
const Footer = () => {
  return (
    <footer className="footer">
    <Container>
       <Row>
       <Col lg="3" md="4" sm="6">
            <div className="footer__logo">
            <img src={logo} alt="logo" />
            <h5>Starvy</h5>
            <p>Welcome to Starvy, your trusted companion for all your delivery needs.</p>
            </div>
       </Col>
    <Col lg="3" md="4" sm="6">
        <h5 className="footer__title mb-3">Delivery Time</h5>
        <ListGroup className="deliver__time-list">
          <ListGroupItem className="delivery__time-item border-0 ps-0">
            <span>Monday - Friday</span>
            <p>10:00am - 11:00pm</p>
          </ListGroupItem>
          <ListGroupItem className="delivery__time-item border-0 ps-0">
            <span>Saturday - Sunday</span>
            <p>Off day</p>
          </ListGroupItem>
          </ListGroup>
    </Col>
    <Col lg="3" md="4" sm="6">
          <h5 className="footer__title mb-3">Contact</h5>
        <ListGroup className="deliver__time-list">
          <ListGroupItem className="delivery__time-item border-0 ps-0">
            <p>Location : RS puram Coimbatore Tamil Nadu</p>
          </ListGroupItem>
          <ListGroupItem className="delivery__time-item border-0 ps-0">
            <span>Phone : 9045039876</span>
          </ListGroupItem>
          <ListGroupItem className="delivery__time-item border-0 ps-0">
            <span>Email : starvy@gmail.com</span>
            
          </ListGroupItem>
          </ListGroup>
    </Col>
    <Col lg="3" md="4" sm="6">
        <h5 className="footer__title">Newsletter</h5>
        <p>Subscribe our newsletter</p>
        <div className="newletter">
        <input type="email" placeholder="Enter your email"/>
        <span>
        <i class="ri-send-plane-line"></i>
        </span>
        </div>
        </Col>
    </Row>

    <Row className="mt-5">
       <Col lg='6' md='6' className="copyright__text">
            <p>Copyright - 2022, website made by Leash.
            All Rights Reserved.</p>
       </Col>
       <Col lg='6' md='6'>
          <div className="social_links d-flex align-items-center gap-4
          justify-content-end">
             <p className="m-0">Follow: </p>
             <span>
                <FacebookTwoToneIcon/>
             </span>
             <span>
                <i class="ri-github-line"></i>
             </span>
             <span>
                <i class="ri-youtube-line"></i>
             </span>
             <span>
                <i class="ri-linkedin-line"></i>
             </span>
          </div>
       </Col>
    </Row>
    </Container>
    </footer>
    );
};

export default Footer;
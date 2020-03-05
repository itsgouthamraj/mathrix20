import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';

const Contact = (props) => {
    return (
        <>
            <div className="mobtop">
                    <div className="mtt">CONTACT US</div>
                </div>
            <div className="e-c">
                <div className="blog-slider events-box">
                    <Row>
                        <Col xs={12} md={12} style={{overflowY:'scroll'}}>
                            <h3><strong>Secretaries</strong></h3>
                            <p className=""><i className="fas fa-user-circle	"></i>{' '}Meera R - <a href="tel:7448567788">7448567788</a></p>
                            <p className=""><i className="fas fa-user-circle	"></i>Goutham Raj - <a href="tel:7358551069">{' '}7358551069</a></p>
                        </Col>
                        <Col xs={12} md={12}>
                            <h3><strong>Coordinators</strong></h3>
                            <p className=""><i className="fas fa-user-circle	"></i>{' '}Mayavel P - <a href="tel:9092098984 ">9092098984 </a></p>
                            <p className=""><i className="fas fa-user-circle	"></i>Sowndarya M - <a href="tel:9003462357 ">{' '}9003462357 </a></p>
                        </Col>
                        <Col xs={12} md={12}>
                            <h3><strong>Social Media</strong></h3>
                            <p>
                                <a href="https://facebook.com/mathrixt20"><i className="contact fab fa-facebook"></i></a>{' |  '}
                                <a href="https://instagram.com/mathrixt20_official"><i className="contact fab fa-instagram"></i></a>{'  |  '}
                                <a href="https://twitter.com/mathrixt20"><i className="contact fab fa-twitter"></i></a>{' |  '}
                                <a href="mailto:info@mathrix.in"><i className="contact fas fa-envelope"></i></a>
                            </p>
                            
                        </Col>

                    </Row>
                </div>
            </div>
        </>
    )
};

export default Contact;
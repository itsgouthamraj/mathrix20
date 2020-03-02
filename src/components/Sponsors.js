import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import poorvika from '../assets/poorvika.png';
import adsprint from '../assets/adsprint.png';
import uniq from '../assets/uniq.jpg';
import cottonhouse from '../assets/cottonhouse.png';
import aws from '../assets/awsche.png';
import rajam from '../assets/rajam.png';

class Sponsor extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('Sponsor');
        return (
            <>
                <div className="efix">
                    <div className="mt">SPONSORS</div>
                </div>
                <div className="e-c">
                    <div className="blog-slider events-box" style={{ backgroundColor: 'transparent' }}>
                        <Row>
                            <Col xs={12} md={4} className="p-1">
                                <img className="sponsors" src={aws}></img>
                            </Col>
                            <Col xs={12} md={4} className="p-1">
                                <img className="sponsors" src={poorvika}></img>
                            </Col>
                            <Col xs={12} md={4} className="p-1">
                                <img className="sponsors" src={uniq}></img>
                            </Col>
                            <Col xs={12} md={4} className="p-1">
                                <img className="sponsors" src={adsprint}></img>
                            </Col>
                            <Col xs={12} md={4} className="p-1">
                                <img className="sponsors" src={cottonhouse}></img>
                            </Col>
                            <Col xs={12} md={4} className="p-1">
                                <img className="sponsors" src={rajam}></img>
                            </Col>

                        </Row>
                    </div>
                </div>
            </>
        )
    }
}

export default Sponsor;
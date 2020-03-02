import React, { Component } from 'react';
import {Row,Col} from 'reactstrap';

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
          <div className="blog-slider events-box">
            <Row>
            <Col xs={12} md={4}>
                    cdc
                </Col>
                <Col xs={12} md={4}>
                    cdc
                </Col>
                <Col xs={12} md={4}>
                    cdc
                </Col>
            </Row>
          </div>
        </div>
            </>
        )
    }
}

export default Sponsor;
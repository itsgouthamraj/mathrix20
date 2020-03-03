import React, { Component } from 'react';
import axios from 'axios';
import { Row, Col } from 'reactstrap';

// const Success = (props) => {
//     return (

//     )
// }

export default class Payment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            details:{}
        }
    }
    verifyPayment = async (id) => {
        const response = await axios.post(
            "https://api.mathrix.in/check",
            {
                fetch_id: id
            },
            {}
        );
        console.log(response.data);
        let dat = response.data.stud;
        if (dat.payment_status === true) {
            this.setState({
                details:dat
            })
        } else {

        }
    }
    componentDidMount() {
        const { id } = this.props.match.params;

        this.verifyPayment(id);
    }
    render() {
        let d = this.state.details;
        return (
            <div className="payment-div">
                <Row>
                    <Col className="text-center" xs={12} md={{offset:3,size:6}}>
                        <div style={{paddingTop:'30px'}}>
                            <h1 style={{ color: 'green' }}>Payment Success</h1>
                            <p style={{textAlign:"left",padding:"5px"}}> Hi , {d.student_name} thank you for registering in Mathrix'20. We successfully received your payment of Rs. {d.amount} and will send the confirmation mail shortly. </p>
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}
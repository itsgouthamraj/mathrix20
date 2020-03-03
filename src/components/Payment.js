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
            details: {
                student_name: 'WAITFORCONFO',
                payment_status: false,
                subscriptions: [
                    {
                        item: '',
                        amount: ''
                    }
                ]
            }
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
                details: dat
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

        let a = 0;

        let subs = d.subscriptions.map((s, k) => {
            a += s.amount;
            return (
                <tr key={k}>
                    <td>{k + 1}</td>
                    <td>{s.item}</td>
                    <td>₹ {s.amount}</td>
                </tr>
            )
        })

        return (
            <div className="payment-div">
                {d.student_name === 'WAITFORCONFO' ? <div>Loading .....</div> : <Row>
                    <Col className="text-center" xs={12} md={{ offset: 3, size: 6 }}>
                        {d.payment_status ? <><div style={{ paddingTop: '30px' }}>
                            <h1 style={{ color: 'green' }}>Payment Success</h1>
                            <p style={{ textAlign: "left", padding: "5px" }}> Hi , {d.student_name} thank you for registering in Mathrix'20. We successfully received your payment of ₹ {d.amount} and will send the confirmation mail shortly. </p>
                            <h2>Subscribed Items</h2>
                            <div className="table-responsive">
                                <table className="table">
                                    <tr>
                                        <th>S.No</th>
                                        <th>Item</th>
                                        <th>Amount</th>
                                    </tr>
                                    {subs}
                                    <tr>
                                        <td>

                                        </td>
                                        <td>
                                            Payment Gateway Charges
                                        </td>
                                        <td>
                                            ₹ {(Math.round((d.amount - a) * 100) / 100).toFixed(2)}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>

                                        </td>
                                        <td>
                                            Total
                                        </td>
                                        <td>
                                            ₹ {d.amount}
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                            <Col xs={12} md={{ size: 4, offset: 4 }}>
                                <img src={"https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=" + this.props.match.params.id + "&choe=UTF-8"} />
                            </Col></> : <div>
                                <h1 style={{ color: 'red' }}>Payment Pending</h1>
                                <p>Any money detucted will be tranfered to your account soon.</p>
                            </div>}
                        <Col xs={12} md={{ size: 6, offset: 3 }}>
                            <h3>Venue and Timings</h3>
                            <div className="table-responsive">
                                <table className="table">
                                    <tr>
                                        <td>IoT - Paper to Prototype (Workshop)</td>
                                        <td>March 7th , 2020</td>
                                        <td>9 AM , Dept. of Mathematics</td>
                                    </tr>
                                    <tr>
                                        <td>AWS - Cloud Foundation (Workshop)</td>
                                        <td>March 7th , 2020</td>
                                        <td>12.30 PM , Dept. of Mathematics</td>
                                    </tr>
                                    <tr>
                                        <td>On Day Events</td>
                                        <td>March 9th , 2020</td>
                                        <td>8.30 AM , Dept. of Mathematics</td>
                                    </tr>
                                </table>
                            </div>
                        </Col>
                    </Col>
                </Row>}
            </div>
        )
    }
}
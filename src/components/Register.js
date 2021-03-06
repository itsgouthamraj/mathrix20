import React, { Component } from 'react';

import { Container, Row, Col, Card, CardHeader, CardBody, Button, Input, InputGroup, FormGroup, Form, Label } from 'reactstrap';

import Select from 'react-select';

import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student_name: '',
            college_name: '',
            college_id: '',
            department: '',
            year: '',
            mobile: '',
            email: '',
            options: [
                { value: 'EVENT', label: 'On Day Events Subscription - ₹150' },
                { value: 'CLOUD', label: 'Cloud Computing Introduction - ₹300 ' },
                { value: 'IOT', label: 'IoT - Paper to Prototype - ₹300' }
            ],
            items: null,
            amount: 0

        }
    }



    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleNum = e => {
        let v = e.target.value;
        if (!isNaN(parseInt(v)) && v.length <= 10) {
            this.setState({
                mobile: v
            })
        }
    }

    PAY = async () => {
        const response = await axios.post(
            "https://api.mathrix.in/register",
            {
                student_name: this.state.student_name,
                college_name: this.state.college_name,
                college_id: this.state.college_id,
                department: this.state.department,
                year: this.state.year,
                mobile: this.state.mobile,
                email: this.state.email,
                items: this.state.items,
            },
            { }
        );
        console.log(response.data);
        let dat = response.data;
        if(dat.status===201){
            window.location = dat.url;
        }

        return false;
    }

    render() {

        // let bn = '';
        // let dt = this.state.selectedDate;

        // let da = dt.getMonth() + 1 + '/' + dt.getDate() + '/' + dt.getFullYear();
        const depts = [
            'CSE', 'IT', 'ECE', 'EEE', 'EIE', 'ICE', 'MECH', 'PRODUCTION', 'AUTO', 'CIVIL', 'PRINTING', 'ARCHITECTURE', 'AEROSPACE', 'MATHEMATICS', 'ENGLISH', 'PHYSICS', 'CHEMISTRY', 'MEDIA SCIENCE', 'OTHERS'
        ];

        const year = [1, 2, 3, 4, 5];

        let op = '';

        let am = 0;

        if (depts.length > 0) {
            op = depts.map((b, k) => {

                return (
                    <option value={b} key={k}>{b}</option>
                )
            })
        }

        let y = year.map((y, k) => {
            return (
                <option value={y} key={k}>{y}</option>
            )
        })

        if (this.state.items !== null) {
            this.state.items.forEach(i => {
                if (i.value === 'EVENT') {
                    am += 150;
                }
                if (i.value === 'CLOUD') {
                    am += 300;
                }
                if (i.value === 'IOT') {
                    am += 300;
                }
            });
        }




        return (
            <>
                <div className="mobtop">
                    <div className="mtt">REGISTRATION</div>
                </div>
                <div className="e-c">
                    <div className="regbox events-box" style={{ backgroundColor: 'transparent' }}>
                        <Row>
                            <Col md={{ size: 8, offset: 2 }}>
                                <h2 className="text-center text-white">
                                    <p>Online Registrations are closed.</p>
                                    <p>Interested Students can register at onspot Registration Desks.</p>
                                </h2>
                                {/* <Card body style={{ backgroundColor: '#F2E3E7', borderColor: '#333' }}>
                                    <CardHeader tag="h3" className="text-center">Student Registration</CardHeader>
                                    <CardBody>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="fname">Student Name (*)</Label>
                                                    <Input value={this.state.student_name} onChange={this.handleChange} type="text" name="student_name" id="fname" placeholder="Student Name" />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label for="lname">College Name (*)</Label>
                                                    <Input value={this.state.college_name} onChange={this.handleChange} type="text" name="college_name" id="lname" placeholder="College Name" />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Registration Number (*)</Label>
                                                    <Input type="text" name="college_id" placeholder="Registration Number" onChange={this.handleChange} value={this.state.college_id} />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Items to Register</Label><br />
                                                    <Select
                                                        className="react-select info"
                                                        classNamePrefix="react-select"
                                                        placeholder="Choose Items"
                                                        name="items"
                                                        closeMenuOnSelect={false}
                                                        isMulti
                                                        value={this.state.items}
                                                        onChange={value =>
                                                            this.setState({ items: value })
                                                        }
                                                        options={this.state.options}

                                                    />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Department (*)</Label>
                                                    <select onChange={(e) => {
                                                        this.setState({
                                                            department: e.target.value
                                                        })
                                                    }} className="custom-select">
                                                        <option value="empty">Select Department</option>
                                                        {op}
                                                    </select>
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Year (*)</Label>
                                                    <select onChange={(e) => {
                                                        this.setState({
                                                            year: e.target.value
                                                        })
                                                    }} className="custom-select">
                                                        <option value="empty">Select Year</option>
                                                        {y}
                                                    </select>
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row form>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Mobile (*)</Label>
                                                    <Input type="text" name="mobile" placeholder="Mobile" value={this.state.mobile} onChange={this.handleNum} />
                                                </FormGroup>
                                            </Col>
                                            <Col md={6}>
                                                <FormGroup>
                                                    <Label>Email (*)</Label>
                                                    <Input type="email" name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />

                                                </FormGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col md={{ size: 6, offset: 3 }}>
                                                <small style={{ color: 'red' }}>* Onspot registrations starts at 8 AM and finishes at 9AM</small><br />
                                                {am === 0 ? <Button onClick={this.PAY} color="primary" disabled className="btn-block">Pay ₹ - {am}</Button> : <Button onClick={this.PAY} color="primary" className="btn-block">Pay ₹ - {am}</Button>}

                                            </Col>
                                        </Row>
                                    </CardBody>
                                </Card> */}
                            </Col>
                        </Row>
                    </div>
                </div>
            </>
        )
    }

}

export default Register;
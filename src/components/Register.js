import React, { Component } from 'react';

import { Container, Row, Col, Input, InputGroup, FormGroup, Form, Label } from 'reactstrap';

const depts = [
    'CSE', 'IT', 'ECE', 'EEE', 'EIE', 'ICE', 'MECH', 'PRODUCTION', 'AUTO', 'CIVIL', 'PRINTING', 'ARCHITECTURE', 'AEROSPACE', 'MATHEMATICS', 'ENGLISH', 'PHYSICS', 'CHEMISTRY', 'MEDIA SCIENCE'
];

const years = [1, 2, 3, 4, 5];

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student_name: 'hh'
        }
    }

    handleChange = e => {
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    render() {
        return (
            <>
            <div className="efix">
            <div className="mt">REGISTRATION</div>
          </div>
            <div className="e-c">

                    <Col xs={12} md={{ size: 6, offset: 3 }}>
                        <Form>
                            <FormGroup>
                                <Label>Name *</Label>
                                <Input type="text" name="student_name" className="r-in" onChange={this.handleChange} value={this.state.student_name} placeholder="Enter your name" />
                            </FormGroup>
                        </Form>
                    </Col>

            </div>
            </>
        )
    }
}

export default Register;
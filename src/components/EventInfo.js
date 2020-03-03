import React, { Component } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import classnames from 'classnames';
import { render } from '@testing-library/react';
let ac = '1';

class EventInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: '1',
            modal: this.props.show,
            rules: this.props.rules,
            format: this.props.format,
            contact: this.props.contact,
            title: this.props.title
        }
    }

    static getDerivedStateFromProps(props, state) {
       
        return {
            activeTab: '1',
            modal: props.show,
            rules: props.rules,
            format: props.format,
            contact: props.contact,
            title: props.title
        }
    }

    toggleTab = tab => {
        console.log('toggle called');
        ac = tab;

        this.setState({
            activeTab: tab
        })
    }

    toggle = () => {
        let m = !this.state.modal;
        this.setState({
            modal: m
        })
        this.props.close();
    }

    OpenPay = () => {
        window.location = "https://mathrix.in/register";
    }

    render() {


        const rules = this.state.rules.map((r, k) => {
            return (
                <li className="list-group-item" key={k}>{r}</li>
            )
        })
        const format = this.state.format.content.map((f, k) => {
            return (
                <li className="list-group-item" key={k}>{f}</li>
            )
        })
        const contact = this.state.contact.map((c, k) => {
            return (
                <p>{c.name} - {c.mob}</p>
            )
        })
        
        return (
            <div>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>{this.state.title}</ModalHeader>
                    <ModalBody>
                        <Nav tabs>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: ac === '1' })}
                                    onClick={() => { this.toggleTab('1'); }}
                                >
                                    Rules
                            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: ac === '2' })}
                                    onClick={() => { this.toggleTab('2'); }}
                                >
                                    Format
                            </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className={classnames({ active: ac === '3' })}
                                    onClick={() => { this.toggleTab('3'); }}
                                >
                                    Contact
                            </NavLink>
                            </NavItem>
                        </Nav>
                        <TabContent activeTab={ac}>
                            <TabPane tabId="1">
                                <Row>
                                    <Col sm="12">
                                        <div style={{ textAlign: "left" }}>
                                            <p>Rounds : {this.state.format.rounds}</p>
                                            <ul className="list-group">
                                                {format}
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col sm="12">
                                        <div style={{ textAlign: "left" }}>
                                            <ul className="list-group">
                                                {rules}
                                            </ul>
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row>
                                    <Col sm="12">
                                        <div style={{ textAlign: "left" }}>
                                            {contact}
                                        </div>
                                    </Col>
                                </Row>
                            </TabPane>
                        </TabContent>
                    </ModalBody>
                    <ModalFooter>
                    <Button color="primary" onClick={this.OpenPay}>Register</Button>
                    <Button color="secondary" onClick={this.toggle}>Close</Button>
                </ModalFooter>
                </Modal>

            </div>
        );
    }


}

export default EventInfo;
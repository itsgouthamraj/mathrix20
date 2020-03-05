import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';

const GenRules = (props) => {
    return (
        <>
            <div className="mobtop">
                    <div className="mtt">General Rules</div>
                </div>
            <div className="e-c">
                <div className="blog-slider events-box">
                    <Row>
                        <Col xs={12} md={12} style={{textAlign:'left'}}>
                            <ul>
                                <li>Spot Registration will be done between 8.00 am and 9.30 am on 9th March, 2020.</li>
                                <li>Registration fee is Rs.150 per student.</li>
                                <li>Each participant should have a Valid ID/Bonafide certificate from the respective institution.</li>
                                <li>Each participant can take part in maximum of four events, provided there is no time clash.</li>
                                <li>Those who applied through online must produce the printout of the transaction receipt.</li>
                                <li>Participants should wear the MATHRIX 2020 identity card issued at the registration desk.</li>
                                <li>Online applicants must also collect the MATHRIX 2020 identity card and kit at the registration desk before 9:30 AM</li>
                                <li>Members of each team should be from the same institution. Team members should remain the same till the completion of the particular event.</li>
                                <li>Participant should be present in the place of event on time. No additional time shall be given for later comers.</li>
                                <li>Event convener's decision will be final in case of any disputes.</li>

                            </ul>
                        </Col>
                        

                    </Row>
                </div>
            </div>
        </>
    )
};

export default GenRules;
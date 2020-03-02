import React, { Component } from 'react';
import axios from 'axios';

export default class Payment extends Component {
    constructor(props) {
        super(props);
    }
    verifyPayment = async (prid, pid, pstat) => {
        const response = await axios.post(
            "http://localhost:5000/check",
            {
                payment_request_id:prid,
                payment_id:pid,
                payment_status:pstat
            },
            {}
        );
        console.log(response.data);
        let dat = response.data;
        if (dat.status === 201) {
            //
        }
    }
    componentDidMount() {
        let {prid,pid,pstat} = this.props.location.query;
        
        this.verifyPayment(prid, pid, pstat);
    }
    render() {
        <div></div>
    }
}
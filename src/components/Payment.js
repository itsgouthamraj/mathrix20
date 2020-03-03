import React, { Component } from 'react';
import axios from 'axios';

export default class Payment extends Component {
    constructor(props) {
        super(props);
    }
    verifyPayment = async (id) => {
        const response = await axios.post(
            "https://api.mathrix.in/check",
            {
                fetch_id:id
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
        const { id } = this.props.match.params;
        
        this.verifyPayment(id);
    }
    render() {
        return (
            <div>hi</div>
        )
    }
}
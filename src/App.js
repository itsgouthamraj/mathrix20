import React, { Component } from 'react';
import MarchAnna from './components/MarchAnna';
import logo from './assets/mathrix_logo.svg';
import Menu from './components/Menu';

export default class App extends Component {
    constructor(props){
        super(props);
    }
    handleExpand = () => {
        console.log("Clicked");
    }
    render() {
        return (
            <>
            <Menu />
                <div className="expand-bar">
                    <i className="exp fas fa-bars" onClick={this.handleExpand}></i>
                </div>
                <div className="logo-container">
                    <div>
                        <img src={logo} className="lheader" height={300} />
                    </div>
                    <div className="mtext">
                        <div className="mt">MATHRIX</div>
                    </div>
                </div>
                <MarchAnna />
            </>
        )
    }
}
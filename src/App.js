import React, { Component } from 'react';
import MarchAnna from './components/MarchAnna';
import logo from './assets/mathrix_logo.svg';


export default class App extends Component {
    render() {
        return (
            <>
                <div className="expand-bar">
                    <i className="exp fas fa-expand-arrows-alt"></i>
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
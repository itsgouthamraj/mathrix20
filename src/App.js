import React, { Component } from 'react';
import MarchAnna from './components/MarchAnna';
import logo from './assets/mathrix_logo.svg';
import Menu from './components/Menu';


export default class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            isMenuOpened : false
        }
    }
    
    handleExpand = () => {
        let opened = false;
        if(!this.state.isMenuOpened){
            opened = true;
        }
        this.setState({
            isMenuOpened:opened
        })
        console.log('App = '+this.state.isMenuOpened);
    }

    closeExpand = () => {
        this.setState({
            isMenuOpened:false
        })
    }

    render() {
        return (
            <>
                <Menu closed={this.closeExpand} open={this.state.isMenuOpened} />
                <div className="expand-bar">
                    <i className="exp fas fa-bars" onClick={this.handleExpand}></i>
                </div>
                <div className="logo-container">
                    <div>
                        <img alt="mathrix header" src={logo} className="lheader" height={300} />
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
import React,{Component} from 'react';
import MarchAnna from './components/MarchAnna';
import logo from './assets/mathrix_logo.svg';

export default class App extends Component{
    render(){
        return (
            <>
            <div className="logo-container">
                <h1 className="mtext">MATHRIX 20</h1>
                <img src={logo} className="lheader" height={300}/>
                
            </div>
            <MarchAnna />
            </>
        )
    }
}
import React from 'react';
import MarchAnna from './MarchAnna';
import logo from '../assets/mathrix_logo.svg';

const MainPage = () => {
    return (
        <>
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

export default MainPage;
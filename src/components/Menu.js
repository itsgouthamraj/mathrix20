import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { withRouter } from 'react-router-dom';
const navs = [
    {
        nav_name: 'Home',
        nav_link: '/',
    },
    {
        nav_name: 'Events',
        nav_link: '/events',
    },
    {
        nav_name: 'Workshops',
        nav_link: '/workshops',
    },
    {
        nav_name: 'Register',
        nav_link: '/register',
    },
    {
        nav_name: 'About Us',
        nav_link: '/about',
    },
    {
        nav_name: 'Contact Us',
        nav_link: '/contact',
    },
    {
        nav_name: 'Our Sponsors',
        nav_link: '/sponsors',
    },
]

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open,
        }
    }


    static getDerivedStateFromProps(props, state) {
        if(state.open !== props.open){
            return {
                open: props.open
            }
        }
    }
    closeM = () => {
        this.props.closed();
    }


    render() {
        let style = '0%';
        if (this.state.open) {

            style = '100%'

        }
        let nav_ui = navs.map((nav, key) => {
            return (
                <Col onClick={() => {
                    window.location = 'https://www.mathrix.in'+nav.nav_link;
                    this.closeM();
                }} className="nav-box p-1" xs={12} md={4} key={key}>
                    <div className="nav-center text-center">
                        <h2>{nav.nav_name}</h2>
                    </div>
                </Col>
            )
        });
        return (
            <div className="menu-overlay text-center" style={{ width: style }}>
                {this.state.open ? <div className="expand-bar">
                    <i className="exp fas fa-arrow-left" onClick={this.closeM}></i>
                </div> : <></>}
                <div className="mtext py-2">
                    <div className="mt">MATHRIX</div>
                </div>
                <Container>
                    <Row className="p-2">
                        {nav_ui}
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withRouter(Menu);
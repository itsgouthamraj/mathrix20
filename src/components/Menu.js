import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';

const navs = [
    {
        nav_name: 'Events',
        nav_link: '/events',
    },
    {
        nav_name: 'Workshops',
        nav_link: '/workshops',
    },
    {
        nav_name: 'Login',
        nav_link: '/login',
    },
    {
        nav_name: 'Profile',
        nav_link: '/profile',
    },
    {
        nav_name: 'Contact Us',
        nav_link: '/contact',
    },
]

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: this.props.open,
        }
    }


    static getDerivedStateFromProps(props, state) {
        console.log(props);
        console.log(state);
        return {
          open:props.open
        }
      }
    closeM = () => {
        this.props.closed();
    }

    render() {
        let style = '0%';
        if (this.state.open) {

                style= '100%'
            
        }
        console.log(this.state.open)
        let nav_ui = navs.map((nav, key) => {
            return (
                <Col className="nav-box p-1" xs={12} md={4} key={key}>
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
import React,{Component} from 'react';
import {Container,Row,Col} from 'reactstrap';

const navs = [
    {
        nav_name:'Events',
        nav_link:'/events',
    },
    {
        nav_name:'Workshops',
        nav_link:'/workshops',
    },
    {
        nav_name:'Login',
        nav_link:'/login',
    },
    {
        nav_name:'Profile',
        nav_link:'/profile',
    },
    {
        nav_name:'Contact Us',
        nav_link:'/contact',
    },
]

export default class Menu extends Component{
    constructor(props){
        super(props);
    }
    render(){
        let nav_ui = navs.map((nav,key)=>{
            return (
                <Col className="nav-box p-1" xs={12} md={4} key={key}>
                    <div className="nav-center text-center">
                        {nav.nav_name}
                    </div>
                </Col>
            )
        });
        return (
            <div className="menu-overlay text-center">
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
import React, { Component } from 'react';
import MainPage from './components/MainPage';
import Menu from './components/Menu';
import Events from './components/Events';
import { Switch, Route, withRouter } from 'react-router-dom';
import Workshop from './components/Workshop';
import Contact from './components/Contact';
import Register from './components/Register';
import About from './components/About';
import Sponsor from './components/Sponsors';
import Payment from './components/Payment';
import GenRules from './components/GenRules';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isMenuOpened: false
        }
    }

    handleExpand = () => {
        let opened = false;
        if (!this.state.isMenuOpened) {
            opened = true;
        }
        this.setState({
            isMenuOpened: opened
        })
        console.log('App = ' + this.state.isMenuOpened);
    }

    closeExpand = () => {
        this.setState({
            isMenuOpened: false
        })
    }

    render() {
        return (
            <>
                <Menu closed={this.closeExpand} open={this.state.isMenuOpened} />
                {this.state.isMenuOpened ? <></> : <div className="expand-bar">
                    <i className="exp fas fa-bars" onClick={this.handleExpand}></i>
                </div>}
                <Switch>
                    <Route path="/" component={MainPage} exact />
                    <Route path="/events" component={Events} exact />
                    <Route path="/workshops" component={Workshop} exact />
                    <Route path="/register" component={Register} exact />
                    <Route path="/contact" component={Contact} exact />
                    <Route path="/about" component={About} exact />
                    <Route path="/sponsors" component={Sponsor} exact />
                    <Route path="/payment/:id" component={Payment} exact />
                    <Route path="/general-rules" component={GenRules} exact />
                </Switch>

            </>
        )
    }
}

export default withRouter(App);
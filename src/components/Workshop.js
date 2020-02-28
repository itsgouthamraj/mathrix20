import React, { Component } from "react";
import '../styles/Deck.css';
import cloud from "../assets/cloud.png";
import iot from "../assets/iot.png";
const w = [
    {
      name: 'Cloud Computing Foundation',
      description: "We will take you through AWS core services such as Compute, Storage, Security (IAM) and Network. Also we will have a small demo how to host website in AWS with continuous deployment. At the end of the session, you will have good understanding of AWS core and application services. ",
      image: cloud,
      category: 'Workshop',},
      {
        name: 'IoT Paper to Prototype',
        description: '"If you think that the internet has changed your life, think again. The Internet of Things is about to change it all over again". It’s a digital pulse made up of data that we can aggregate to improve the world around us. REGISTER to understand the pulse of digital world.'
        image: iot,
        category: 'Workshop',}
    ];
class Workshops extends Component {
    constructor(props) {
      super(props);
      this.state = {
        events: w,
        modal: false,
        selectedEvent: 0,
      }
      this.forceUpdate();
      console.log('Component Reload');
    }

    componentDidMount(){
        this.setState({
            a:true
        })
    }
    selectEvent = event => {

      this.setState({
        selectEvent: event
      },
        this.openModal()
      )
    }
    closeModal = () => {
      this.setState({
        modal: false
      })
    }
    openModal = () => {
      this.setState({
        modal: true
      })
    }
  
    render() {


      let ui_react = this.state.events.map((e, k) => {
        return (
          <div key={k} className="blog-slider__item swiper-slide">
            <div className="blog-slider__img">
  
              <img src={e.image} alt="" />
            </div>
            <div className="blog-slider__content">
              <span className="blog-slider__code">{e.name}</span>
              <div className="blog-slider__title">{e.category}</div>
              <div className="blog-slider__text">{e.description}</div>
              <a href="#" className="blog-slider__button">REGISTRATIONS OPENS SOON</a>
            </div>
          </div>
        )
      })
      return (
        <>
          <div className="efix">
            <div className="mt">WORKSHOPS</div>
          </div>
        
          <div className="e-c">
            <div className="blog-slider events-box">
              <div className="blog-slider__wrp swiper-wrapper">
                {ui_react}
              </div>
              <div className="blog-slider__pagination"></div>
            </div>
          </div>
        </>
      )
    }
  }
  
  export default Workshops;
  
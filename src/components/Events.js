import React, { Component } from "react";
import '../styles/Deck.css';
import EventInfo from "./EventInfo";
const events = [
  {
    name: 'Code Relay',
    description: "Attention geeks out there! It's a coding event with a pinch of fun. Get ready to solve our questions in a relay trying to cope with the flow. You might know what your friends think. Come as a team of three, we will set you on track.",
    image: 'https://mathrixt20.s3.ap-south-1.amazonaws.com/web_coderelay+(1).png',
    category: 'Tech',
    format: {
      rounds: 1,
      content: [
        "The team will be given a problem statement with five minutes to discuss among themselves.",
        "Each player will be given 7 minutes' time to code. At the end of the 7th minute, the 2nd player will take his/her position on the system and continue coding left by his/her teammate and then followed by the 3rd player.",
        "Each team will be given a time of 21 minutes to solve the problem.",
        "Participants are free to use any language of their choice."
      ]
    },
    rules: [
      "Three members per team.",
      "Team members are not allowed to discuss after the coding session begins.",
      "Usage of mobile phones, electronic gadgets during the event is not allowed.",
      "Any kind of malpractice will lead to disqualification.",
      "The organizer’s decision is final."
    ],
    contact: [
      { name: 'Sanjay', mob: '9092701806' },
      { name: 'Vignesh Kumar', mob: '7418968656' },
    ]
  },
  {
    name: 'BrainStorm',
    description: "Brainstorming is a nexus of ideas. An idea can turn to dust or magic depending on the talent that rubs against it. Get ready with your ideas and make a product and say why it is the best with the goal to forge the product that contributes to welfare of the society.",
    image: 'https://mathrixt20.s3.ap-south-1.amazonaws.com/brainstorm+(1)+(1).png',
    category: 'Tech',
    format: {
      rounds: 1,
      content: [
        "Round : 1",
        "Duration : 1 hour",
        "Rules :",
        "1. Teams will be given a common theme from which they have to come up with an innovative product idea",
        "2. Initially, the teams will be awarded set of points",
        "3. Auction will take place for choosing the necessities required for developing the product, using the points awarded to them",
        "4. Winners will be chosen based on the creativity, plan and expenditure."
      ]
    },
    rules: [
      "Two to three members per team.",
      "Usage of mobile phones, electronic gadgets during the event is not allowed.",
      "Any kind of malpractice will lead to disqualification.",
      "The organizer’s decision is final."
    ],
    contact: [
      { name: 'Divya Praba', mob: '8056794320' },
      { name: 'Ruvanthika', mob: '8124625257' },
    ]

  },
  {
    name: 'Sherlock',
    description: "There is nothing more deceptive than an obvious fact. Come with your Watson. We have an interesting case to solve, Sherlock. Remain focused and have presence of mind.",
    image: 'https://mathrixt20.s3.ap-south-1.amazonaws.com/Newsherlk_web+(1)+(1).png',
    category: 'Tech',
    format: {
      rounds: 2,
      content: [
        "Prelims:",
        "Duration: 30 minutes.",
        "There will be a limited number of clues, the quickest to crack the clues will enter the finals.",

        "Finals:",

      ]
    },
    rules: [
      "Two members per team.",
      "Usage of mobile phones, electronic gadgets during the event is not allowed.",
      "Any kind of malpractice will lead to disqualification.",
      "The organizer’s decision is final."
    ],
    contact: [
      { name: 'Kalaipritha', mob: '7395911610' },
      { name: 'Nalini', mob: '8190959099' },
    ]

  }, {
    name: 'Beat the Clock',
    description: "Are you good at turning caffeine to code? Then here is an event for you. Get ready with your coffee we will make code out of it. Come with an efficient code, crack it. You have got to BEAT THE CLOCK!!",
    image: 'https://mathrixt20.s3.ap-south-1.amazonaws.com/beat+d+clock+(1)+(1).png',
    category: 'Tech',
    format: {
      rounds: 2,
      content: [
        "Prelims:",
        "Duration: 30 minutes.",
        "This will be a pen-paper round which consists of 20 questions.",
        "Participants who score high will be shortlisted for the final round.",
        "Finals:",
        "Duration: 1 hour",
        "Each participant will be three questions to solve.",
        "Participants are free to use any language of their choice.",
        "This round will be hosted on an online platform."
      ]
    },
    rules: [
      "It is a one-man show!!",
      "Usage of mobile phones, electronic gadgets during the event is not allowed.",
      "Any kind of malpractice will lead to disqualification.",
      "The organizer’s decision is final."
    ],
    contact: [
      { name: 'Keerthana', mob: '9094926445' },
      { name: 'Vaishnavi', mob: '9962801075' },
    ]

  },
  {
    name: 'Math Quiz',
    description: '"Mathematics is the music of reason". Solving the quiz problems will restore your belief that every problem has a solution. It is a challenge to your creativity and a feast to your love for mathematics',
    image: 'https://mathrixt20.s3.ap-south-1.amazonaws.com/web_mathquiz+(1)+(1).png',
    category: 'Math',
    format: {
      rounds: 4,
      content: [
        "Prelims : (Pen and Paper)",
        "Multiple choice questions",
        "Finals comprises of various surprising rounds",

        
      ]
    },
    rules: [
      "Maximum 2 teams per college is allowed",
      "Maximum 2-3 per team. ",
      "Usage of mobile phones, electronic gadgets during the event is not allowed.",
      "Any kind of malpractice will lead to disqualification.",
      "The organizer’s decision is final."
    ],
    contact: [
      { name: 'Vasunthra ', mob: '8870911987' },
      { name: 'Dhivya dharshini ', mob: '8939538919' },
    ]

  },
  {
    name: 'TREASURE HUNT',
    description: '"The essence of mathematics lies in its freedom." Come in as a team of three and find clues using general mathematics. We will make you explore the unvisited parts of your brain. Get your eyes sharp and mind ready. The fastest wins!',
    image: 'https://mathrixt20.s3.ap-south-1.amazonaws.com/treasure+(1)+(1).png',
    category: 'Math',
    format: {
      rounds: 1,
      content: [
        "Round 1",
        "Duration: 50 minutes",
        "The team should find answers using the clues given.",
        "Each team will be given an assistant to guide through the campus."
      ]
    },
    rules: [
      "Three participants per team. ",
      "Only one team per shift is allowed.",
      "The participants have to keep all the clue chits carefully until the end of the game.",
      "If the team fails to show all the clue chits by the end of the game, the team will be disqualified.",
      "Usage of mobile phones, electronic gadgets during the event is not allowed.",
      "Any kind of malpractice will lead to disqualification.",
      "The decision of the organising committee will be final."
    ],
    contact: [
      { name: 'Priyanka  ', mob: '8220877853' },
      { name: 'Shanthini ', mob: '9150853987' },
    ]

  },
  {
    name: 'Sudoku',
    description: 'Are you bored of solving sudoku in mobile phones and newspapers? It is absolutely not a thing to be gone unnoticed. We adore your talent! Come and participate. We will delight you with gifts',
    image: 'https://mathrixt20.s3.ap-south-1.amazonaws.com/sudoku_web+(1).png',
    category: 'Math',
    format: {
      rounds: 1,
      content: [
        "Round 1",
        "Duration: 45 minutes",
        "1.Each participant is expected to solve an easy, medium and a hard level puzzle ",
        "2.Points will be given according to the difficulty level of the puzzle "
      ]
    },
    rules: [
      "Individual participants only.",
      "For every correct cell, the participant gets 1 point. The participant with the highest point wins.",
      "In the case of a tie, the participant who took minimum time to solve will be considered as the winner.",
      "Usage of mobile phones, electronic gadgets during the event is not allowed.",
      "Any kind of malpractice will lead to disqualification.",
      "The organizer’s decision is final."
    ],
    contact: [
      { name: 'Anu   ', mob: '9710522745' },
      { name: 'Jayashree  ', mob: '9791024038' },
    ]

  },
  {
    name: 'CREATIVE MATH',
    description: 'Mathematics is not to make simple things complicated, but to make complicated things look simpler. Come explore the fun side of Mathematics. ',
    image: 'https://mathrixt20.s3.ap-south-1.amazonaws.com/Cmath_web+(1)+(1).png',
    category: 'Math',
    format: {
      rounds: 4,
      content: [
        "Duration : 20 + 60 minutes",
        "Prelims : (Pen and Paper)",
        "Objective type with 30 minutes duration.",
        "Round 1 : (DUMB CHAMBERS)",
        "One member miming various mathematical terms to his/her team members within the specified time limit.",
        "Round 2 : (PICTIONARY)",
        "An object will be given. One contestant must describe the object using mathematical shapes. Other contestants must guess the object.",
        "Round 3 : (CONNECTIONS)",
        "A Mathematical term will be denoted with pictures. Contestants are expected to guess the correct term in one attempt.",
        
      ]
    },
    rules: [
      "A team of three participants",
      "Maximum of two teams per college",
      "An ID card or bonafide is compulsory",
      "Obscenity in language and action will lead to disqualification",
      "Any kind of malpractice will lead to disqualification.",
      "The organizer’s decision is final."
    ],
    contact: [
      { name: 'Yaasmin ', mob: '8012353773' },
      { name: 'Sowndarya', mob: '9003462357' },
    ]
  }
  
]

let sel = 0;

class Events extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: events,
      modal: false,
      selectedEvent: 0
    }
    console.log('Component Reload');
  }
  selectEvent = event => {
    sel = event;
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
    console.log('Selected EVent - ' + this.state.selectedEvent);
    let r = this.state.events[sel];
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
            <a href="#" onClick={() => this.selectEvent(k)} className="blog-slider__button">READ MORE</a>
          </div>
        </div>
      )
    })
    return (
      <>
        <div className="efix">
          <div className="mt">EVENTS</div>
        </div>
        <EventInfo close={this.closeModal} title={r.name} rules={r.rules} contact={r.contact} format={r.format} show={this.state.modal} />
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

export default Events;

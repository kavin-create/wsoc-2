import React from 'react'
import "./Homepage.css"
import club from "./club-pic.jpg"
function Homepage() {
    return (
        <div>
                <div class="front-col-1">
                <img src={club} className='pic'/>
                    <div className="style-1">
                    <p className='intro-1'>Clubspot is an event management platform built for our university,
                    which will help users to join various club events without any hassle.
                    Users can view details of various events/clubs and register for events all in one place!
                    </p>
                    <div className="style-2">
                    <p className='intro-2'>A centralized hub for all clubs and events.
                    </p>
                    </div>
                    </div>
                </div>
                <section class="event-slider">
                <div class="slider-heading">
                    <h3 class="top">
                    LIVE EVENTS</h3>
                </div>
                <div className="event-box">
                <a href ='#'>
                  <strong>Raise your mic</strong>  
                  <img src="https://ci3.googleusercontent.com/proxy/o04uAvGVLNVLmCUX1expFVbJ2R2A54_ADg0L17p6EawA7-XxheR1banhffSRmriYXd1eaBrwkojIjmSM78duikY7v-7Bq9Dydubx8wSghfc5pWOSEguFlEyiwqWWLxEP_GdQYEtuOVRXRF4D3rythx4_mciUcRanS6laXskqi_3gWxtjoCCuRBcE8_Q-0wo=s0-d-e1-ft#https://s3.amazonaws.com/unroll-images-production/projects%2F8345%2F1642489776142-republic+day+poster+completed+modified.jpg"></img>
                  <p>Solo singing competition</p>
                  </a>
                </div>
                
                </section>
                <section class="event-slider">
                <div class="slider-heading">
                    <h3 class="top">
                    REGISTRATION OPEN</h3>
                </div>
                <div className="event-box">
                <a href ='#'>
                  <strong>Sculpt the republic</strong>  
                  <img src="https://lh3.googleusercontent.com/weuTv4XqEwGD7oKUNB6UnRwSiR4u3vtjuZwZ5asedYU7QUEapjttScRZtVwsudbOsNmTBxJnadrxrFmpMwgdTl8hryMLWXBsiTKwvE6QFQMJ1UzWZA1xPv2dPgBXVfZUOSCG5Djh9Q=w2400"></img>
                  <p>Food carving event</p>
                  </a>
                </div>
                </section>
                
            </div>         
    )
}

export default Homepage;

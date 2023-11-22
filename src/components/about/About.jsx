import React from 'react'
import "./about.css"
import ab from '../../img/ab.jpg'
import Award from '../../img/award.png'

const About = () => {
    return (
        <div className='a'>
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={ab} alt="" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className='a-title'>About Me</h1>
                <p className='a-sub'>It is a long established fact that a reader will be distracted by the readable content</p>
                <p className="a-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit nulla expedita blanditiis quibusdam harum repellendus vel odit dignissimos autem omnis officiis eligendi sit aspernatur ab iure qui laudantium, eius dolore.</p>
                <div className="a-award">
                    <img src={Award} alt="" className="a-award-img" />
                </div>
            </div>
        </div>
    )
}

export default About
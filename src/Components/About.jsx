import React from 'react'
import './About.css';
function About() {
    return (
        <div className='about_main'>
            <div className='left_about'>
                <p>    Hi everyone! </p>
                <p>I am very happy to share my cooking journey and experiences with you.I belive in healthy eating and that starts with healthy cooking.So I am here to share some healthy & delicious cooking ideas.Hope that will add some healthy and yummy flavours in your life!</p>
                <br />
                <p>COOK WELL. EAT WELL</p>
                <img className="sign" src='./images/sign.png' alt='' />
            </div>
            <div className='right_about'>
                <img className='mypic' src='./images/khyati.JPG' alt='image'></img>
            </div>
        </div>

    )
}
export default About

import React from 'react'
import profileImg from '../../../public/images/anjaliphoto.png'
import HireMe from '../../../public/images/approved.png'
import './intro.css'
import { Link } from 'react-scroll'


const Intro = () =>{
    return(
       <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introtxt">I'm <span className="introName">Anjali Saxena</span> <br /> Web Developer </span>
            <p className='introPara'>I am a skilled web developer with experience in creating 
               <br /> visually appealing and user friendly website</p>
            <Link> <button className="btn"> <img src={HireMe} alt="" className="btnImg" /> Hire Me </button></Link>

        </div>
        <img src={profileImg} alt="" className="bg" />
       </section>
    )
}

export default Intro
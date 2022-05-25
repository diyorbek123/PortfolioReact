import React, { useEffect } from 'react'
import Typewriter from 'typewriter-effect';
import { MotionAnimate } from 'react-motion-animate';
import {Link} from 'react-router-dom'
import { useSelector } from 'react-redux';

const About = () => {
    useEffect(() => {
        window.scrollTo(0,0)
      }, [])

    const lan = useSelector((state) => state.languageReducer)

    return (
        <div className="Container-all w-100">
            <MotionAnimate animation="fadeInUp" reset={true}>
            <div className="row mt reverse position-relative container">
                <div className="col-lg-12 col-xl-5">
                    <div className="about-info">
                        <div className="row hover">
                            <div className="col-xl-12 col-lg-12 col-12">
                                <div className="about-info-top">
                                    <h1>{lan.about}<span><Typewriter
                                        options={{
                                            strings: ['Diyorbek', 'Programmer', 'Developer'],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    /></span></h1>
                                    <p>{lan.hobby}</p>
                                    <div className="about-info-footer">
                                        <div className="info">
                                            <img src='file.png' />
                                            <span>{lan.hobbywork}</span>
                                        </div>
                                        <div className="info">
                                            <img src='message.png' />
                                            <span>diyorbektoychiyev001@gmail.com</span>
                                        </div>
                                        <div className="info">
                                            <img src='location.png' />
                                            <span>{lan.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 col-12">
                                <div className="about-info-bottom">
                                    <p>{lan.download}</p>
                                    <div className="about-buttons d-flex">
                                        <a href="resume.pdf" download target="_blank" ><button className="btn-black me-5">{lan.downloadCv}<span></span></button></a>
                                        <Link to='contact'><button className="btn-black">{lan.contactMe}<span></span></button></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-xl-7 hover">
                    <div className="about-bg-image">
                        <div className="about_img" style={{ height: '100%' }}>
                            <img src="about.jpg" />
                        </div>
                    </div>
                </div>
            </div>
            </MotionAnimate>    
        </div>
    )
}

export default About
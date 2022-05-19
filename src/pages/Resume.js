import React from 'react'
import { Progress } from 'antd';
import { MotionAnimate } from 'react-motion-animate';
import { Link, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Resume = (props) => {
    const lan = useSelector((state) => state.languageReducer)
    return (
        <>
            <div id="edications" className="education-area section-education section-gap mt-5">
                <div className="row ">
                    <div className="col-lg-12" style={{ color: 'white' }}>
                        <div data-aos="fade-down" className="education-title text-center aos-init aos-animate">
                            {/* <span className="subtitle">{lan.visitResume}</span> */}
                            <h2 className="title">{lan.myResume}</h2>
                        </div>
                    </div>
                </div>
                <div className="row w-90 mt-5">
                    <ul className="rn-nav-list nav aos-init nav-tabs" id="myTabs" role="tablist">
                        <li className="nav-item">
                            <Link className="nav-link active" role="tab" aria-selected="true" to="educationresume">{lan.education}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" role="tab" aria-selected="false" to="skills" >{lan.skills}</Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div>
                <MotionAnimate animation="fadeInUp" reset={true}>
                    <Outlet />
                </MotionAnimate>
            </div>
        </>
    )
}

export default Resume
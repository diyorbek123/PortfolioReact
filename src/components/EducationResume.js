import React from 'react'
import { Timeline } from 'antd'
import { MotionAnimate } from 'react-motion-animate'
import { useSelector } from 'react-redux'

const EducationResume = () => {
  const lan = useSelector((state) => state.languageReducer)
  return (
    <>
      <MotionAnimate animation="fadeInUp" reset={true}>

        <div className="row w-90 m-top mt-5">
          <div className="col-lg-6 col-12 mt-5">
            <Timeline pending={lan.recording}>
              <Timeline.Item>
                <div className="resume-card">
                  <div className="col-xl-12 col-lg-12 col-12">
                    <div className="about-info-top1 resume-nav mb-5">
                      <h1 style={{ lineHeight: '30px' }}>{lan.educationFirst}</h1>
                      <p style={{ lineHeight: '20px' }}>{lan.bachelour}</p>
                      <h5 style={{ fontSize: '16px' }}> 2020-2024</h5>
                      <div className="about-info-footer1">
                        {lan.educationDescFirst}
                      </div>
                    </div>
                  </div>
                </div>
              </Timeline.Item>
              <Timeline.Item>
                <div className="resume-card">
                  <div className="col-xl-12 col-lg-12 col-12">
                    <div className="about-info-top1 resume-nav">
                      <h1 style={{ lineHeight: '30px' }}>{lan.educationSecond}</h1>
                      <h5 style={{ fontSize: '16px' }}>2009-2020</h5>
                      <div className="about-info-footer1">
                        {lan.educationSecondDesc}
                      </div>
                    </div>
                  </div>
                </div>
              </Timeline.Item>
            </Timeline>
          </div>
          <div className="col-lg-6 col-12 m-top mt-5">
            <Timeline pending={lan.recording}>
              <Timeline.Item>
                <div className="resume-card">
                  <div className="col-xl-12 col-lg-12 col-12">
                    <div className="about-info-top1 resume-nav mb-5">
                      <h1 style={{ lineHeight: '30px' }}>{lan.educationThird}</h1>
                      <p style={{ lineHeight: '20px' }}>{lan.course}</p>
                      <h5 style={{ fontSize: '16px' }}> 2021-2022</h5>
                      <div className="about-info-footer1">
                        {lan.educationCourseDesc}<br></br>{lan.locationCourse}
                      </div>
                    </div>
                  </div>
                </div>
              </Timeline.Item>
              <Timeline.Item>
                <div className="resume-card">
                  <div className="col-xl-12 col-lg-12 col-12">
                    <div className="about-info-top1 resume-nav">
                      <h1 style={{ lineHeight: '30px' }}>{lan.educationSecond}</h1>
                      <h5 style={{ fontSize: '16px' }}>2009-2020</h5>
                      <div className="about-info-footer1">
                        {lan.educationSecondDesc}
                      </div>
                    </div>
                  </div>
                </div>
              </Timeline.Item>  
            </Timeline>
          </div>
        </div>
      </MotionAnimate>
    </>
  )
}

export default EducationResume
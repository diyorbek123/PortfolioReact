import React, { useEffect } from 'react'
import { MotionAnimate } from 'react-motion-animate'
import { useSelector } from 'react-redux'
import FormContact from '../components/FormContact'

const Contact = () => {
  const lan = useSelector((state) => state.languageReducer)
  useEffect(() => {
    window.scrollTo(0,0)
  }, [])
  return (
    <>
      <div id="edications" className="education-area section-education section-gap mt-5">
        <div className="row ">
          <div className="col-lg-12" style={{ color: 'white' }}>
            <div data-aos="fade-down" className="education-title text-center aos-init aos-animate">
              <h2 className="title">{lan.myContact}</h2>
            </div>
          </div>
        </div>
      </div>
      <MotionAnimate style={{ position: 'relative' }} animation="fadeInUp" reset={true}>
        <div className="row w-90 mt--50" style={{ position: 'relative' }}>
          <div className="col-lg-5">
            <div className="contact-about-area h-auto">
              <div className="info">
                <div className="address d-flex flex-row">
                  <div className="svg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16"><path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"></path><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"></path></svg></div><div className="info_1"><h4>{lan.locationLan}:</h4><p>{lan.location}</p></div></div>
                <div className="address d-flex"><div className="svg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"></path></svg></div><div className="info_1"><h4>{lan.email}:</h4><p>diyorbektoychiyev001.com</p></div></div>
                <div className="address d-flex"><div className="svg"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-phone" viewBox="0 0 16 16"><path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"></path><path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg></div><div className="info_1"><h4>{lan.phone}:</h4><p>+998945082412</p></div></div>
              </div>
              <div className="social-area">
                <div className="name" style={{ color: 'white' }}>{lan.link}</div>
                <div className="social-icone">
                  <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                  <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                  <a><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"  className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 contact-input">
            <div className="contact-form-wrapper">
              <div className="introduce">
                <FormContact/>
              </div>
            </div>
          </div>
        </div>
      </MotionAnimate>
    </>
  )
}

export default Contact
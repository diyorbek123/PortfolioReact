import React, { useEffect } from 'react'
import  AOS  from 'aos';
import 'aos/dist/aos.css'

const Education = () => {
    useEffect(() => {
        AOS.init({duration:1000});
        window.scrollTo(0,0);
    },[])
  return (
        <div id="edications" className="education-area section-education section-gap mt-5">
        <div className="row">
            <div className="col-lg-12" style={{color: 'white'}}>
                <div data-aos="fade-up"  className="education-title text-center aos-init aos-animate">
                    <span className="subtitle">Zako It Academy</span>
                    <h2 className="title">Education</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Education
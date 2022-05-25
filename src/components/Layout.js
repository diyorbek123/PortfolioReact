import { Select } from 'antd';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Particles from 'react-tsparticles'
import { loadFull } from 'tsparticles';
import { changeUz, changeEn, changeRu} from '../redux/actions/languageAction';
import { useDispatch, useSelector } from "react-redux";

const Layout = ({children}) => {

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const showDrawer = () => {
    const menu = document.querySelector(".navbar-right");
    if(menu.style.display!=="flex"){
      menu.style.display="flex"
    }else{
      menu.style.display="none";
    }
  };

  const { Option } = Select;
  
  function handleChange(value) {
    if(value == "En") {
      dispatch(changeEn())
    }
    if(value == "Uz") {
      dispatch(changeUz())
    }
    if(value == "Ru") {
      dispatch(changeRu())
    }
  }

  const lan = useSelector((state) => state.languageReducer)

  const dispatch = useDispatch()

  const active =(e)=>{
    const menu = document.querySelector(".navbar-right");
    const link = document.querySelectorAll(".navbar-link");
    for( let i=0; i < link.length; i++){
     if(link[i].innerText===e.target.innerText){
       link[i].classList="navbar-link active"
       menu.style.display="none"
     }else{
       link[i].classList="navbar-link"
     }
    }

  }

  return (
    <>
    <div className="Container-navbar fixed">
     <div className="navbar-all d-flex justify-content-between align-items-center">
      <div className="navbar-left d-flex align-items-center">
        <img src="logome.jpg"/>
        <h3 className="ms-4 mt-4 d-flex align-items-center" style={{fontSize:'32px',color: 'white' }}>{lan.diyorbek}</h3>
      </div>
      <div className="navbar-right">
        <ul className="d-flex align-items-center">
          <li><Link className="navbar-link" onClick={(e)=>active(e)} to="/">{lan.Home} <span/><span/></Link></li>
          <li><Link className="navbar-link" onClick={(e)=>active(e)} to="resume">{lan.Resume} <span/><span/></Link></li>
          <li><Link className="navbar-link" onClick={(e)=>active(e)} to="portfolio">{lan.Portfolio}<span/><span/></Link></li>
          <li><Link className="navbar-link" onClick={(e)=>active(e)} to="contact">{lan.Contact} <span/><span/></Link></li>
         <li>
         <Select defaultValue="En" style={{ width: 90 }} onChange={handleChange}>
              <Option value="En">En<img className="ms-3" style={{ width: '20px', height: '20px' }}src='flagEn.png'/></Option>
              <Option value="Uz">Uz<img className="ms-3" style={{ width: '20px', height: '20px' }}src='flagUzb.png'/></Option>
              <Option value="Ru">Ru<img className="ms-3" style={{ width: '20px', height: '20px' }}src='flagRu.png'/></Option>
            </Select>
         </li>
        </ul>
      </div>
      <div className="navbar-menu"><img src="menu.png" onClick={showDrawer}/></div>
      {/* <div className="navbar-menu-btn" onClick={showDrawer}>
        <div className="btn-nav"></div>
        <div className="btn-nav mt-3"></div>
        <div className="btn-nav mt-3"></div>
      </div> */}
     </div>
    </div>
   <div className="padding">
   <Particles
          canvasClassName="canvas"
          id="tsparticles"
          init={particlesInit}
          options={{
            background: {
              color: {
                value: '#212428',
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onClick: {
                  enable: true,
                  mode: "push",
                },
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 0.5,
                width: 2,
              },
              collisions: {
                enable: true,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 2,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.3,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
        />
   {children}
   </div>
    </>
  )
}

export default Layout
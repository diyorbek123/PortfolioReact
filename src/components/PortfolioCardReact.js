import { Card } from 'antd'
import React from 'react'
import { PortfolioReactBaza } from '../Baza/BazaPage'
import { FaGithubSquare, FaBootstrap, FaGithub, FaCss3Alt } from 'react-icons/fa';
import { SiJavascript, SiNetlify, SiReact } from 'react-icons/si'

const PortfolioCardReact = () => {
  return (
    <div className="portfolio-cards">
                {PortfolioReactBaza.map((item, index) => (
                    <div key={index}>
                        <div className="site-card-border-less-wrapper w-100 px-3 mt-3">
                            <Card className="portfolio-card-relative" title={item.name} bordered={true} style={{ width: '100%', textAlign: 'center', marginBottom: '20px' }}>
                                <a href={item.href} target="_blank">
                                    <img src={item.img} style={{ width: '100%', height: '200px' }} />
                                </a>
                                <div className="portfolio-span">
                                    <div className="portfolio-span-top">
                                        <div className="me-5"><SiReact size={50} /></div>
                                        <div className="me-5"><FaBootstrap size={50} /></div>
                                        <div className="pt-2"><SiJavascript size={40} /></div>
                                    </div>
                                    <div className=" mt-5 portfolio-span-bottom">
                                    <a href={item.hrefGithub} target="_blank"><div className="portfolio-bottom-demo mx-3 d-flex align-items-center"><FaGithubSquare size={20} /><h4 className="ms-3" style={{ color: 'white', margin: '0px' }}>Github</h4></div></a>
                                        <a href={item.href} target="_blank"><div className="portfolio-bottom-demo mx-3 d-flex align-items-center"><SiNetlify size={20} /><h4 className="ms-3" style={{ color: 'white', margin: '0px' }}>Demo</h4></div></a>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    </div>
                ))}
            </div>
  )
}

export default PortfolioCardReact
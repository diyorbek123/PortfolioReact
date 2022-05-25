import { AOS } from 'aos';
import React, { useEffect, useState } from 'react'
import { Card } from 'antd';
import { MotionAnimate } from 'react-motion-animate';
import PortfolioCardAll from '../components/PortfolioCardAll';
import PortfolioCardReact from '../components/PortfolioCardReact';
import PortfolioCardJavascript from '../components/PortfolioCardJavascript';
import { useSelector } from 'react-redux';


const tabListNoTitle = [
    {
        key: 'All',
        tab: 'All',
    },
    {
        key: 'React',
        tab: 'React',
    },
    {
        key: 'Javascript',
        tab: 'Javascript',
    },
];

const contentListNoTitle = {
    All:
        <div>
            <MotionAnimate animation="fadeInUp" reset={true} speed="1" delay="0.2">
                <PortfolioCardAll />
            </MotionAnimate>
        </div>,
    React: <div>
        <MotionAnimate animation='fadeInUp' reset={true} speed="1" delay="0.2">
            <PortfolioCardReact />
        </MotionAnimate>
    </div>,
    Javascript: <div>
        <MotionAnimate animation='fadeInUp' reset={true} speed="1" delay="0.2">
            <PortfolioCardJavascript />
        </MotionAnimate>
    </div>,
};


const Portfolio = () => {
    const [activeTabKey2, setActiveTabKey2] = useState('All');

    const onTab2Change = key => {
        setActiveTabKey2(key);
    };

    useEffect(() => {
        window.scrollTo(0,0)
      }, [])

    const lan = useSelector((state) => state.languageReducer)
    return (
        <>
            <div id="edications" className="education-area section-education section-gap mt-5">
                <div className="row ">
                    <div className="col-lg-12" style={{ color: 'white' }}>
                        <div data-aos="fade-down" className="education-title text-center aos-init aos-animate">
                            <h2 className="title">{lan.myPortfolio}</h2>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="w-90">
                <Card
                    style={{ width: '100%', border: '0', background: 'linear-gradient(145deg, #1e2024, #23272b)' }}
                    tabList={tabListNoTitle}
                    activeTabKey={activeTabKey2}
                    onTabChange={key => {
                        onTab2Change(key);
                    }}
                >
                    {contentListNoTitle[activeTabKey2]}
                </Card>
            </div>
        </>
    )
}

export default Portfolio
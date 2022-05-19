import { Progress } from 'antd'
import React from 'react'
import { MotionAnimate } from 'react-motion-animate'

const Skills = () => {
    return (
        <div>
            <MotionAnimate animation="fadeInUp" reset={true}>
                <div style={{ color: 'white' }}>
                    <div className="row w-90 mt-5">
                        <div className="col-lg-6 col-12 media" style={{ position: 'relative' }}>
                            <h2 className="colorwhite">Html</h2>
                            <div>
                                <Progress
                                    strokeColor={{
                                        '0%': 'red',
                                        '100%': 'blue',
                                    }}
                                    percent={99.9} />
                            </div>
                            <h2 className="colorwhite">Css</h2>
                            <div>
                                <Progress
                                    strokeColor={{
                                        '0%': 'blue',
                                        '100%': 'green',
                                    }}
                                    percent={99.9} />
                            </div>
                            <h2 className="colorwhite">Scss</h2>
                            <div>
                                <Progress
                                    strokeColor={{
                                        '0%': 'green',
                                        '100%': 'yellow',
                                    }}
                                    percent={90.9} />
                            </div>
                            <h2 className="colorwhite">Bootstrap</h2>
                            <div>
                                <Progress
                                    strokeColor={{
                                        '0%': 'red',
                                        '100%': 'green',
                                    }}
                                    percent={95.9} />
                            </div>
                        </div>
                        <div className="col-lg-6 col-12 media" style={{ position: 'relative' }}>
                            <h2 className="colorwhite">JavaScript</h2>
                            <div>
                                <Progress
                                    strokeColor={{
                                        '0%': 'green',
                                        '100%': 'red',
                                    }}
                                    percent={85.9} />
                            </div>
                            <h2 className="colorwhite">Jquery</h2>
                            <div>
                                <Progress
                                    strokeColor={{
                                        '0%': 'blue',
                                        '100%': 'yellow',
                                    }}
                                    percent={80.9} />
                            </div>
                            <h2 className="colorwhite">React</h2>
                            <div>
                                <Progress
                                    strokeColor={{
                                        '0%': 'blue',
                                        '100%': 'green',
                                    }}
                                    percent={95.9} />
                            </div>
                            <h2 className="colorwhite">Redux</h2>
                            <div>
                                <Progress
                                    strokeColor={{
                                        '0%': 'red',
                                        '100%': 'blue',
                                    }}
                                    percent={80.9} />
                            </div>
                        </div>
                    </div>

                </div>
            </MotionAnimate>
        </div>
    )
}

export default Skills
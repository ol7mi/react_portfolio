import React from 'react'
import './pure.scss'

function Pure() {
    return (
        <section className='pure section' id='pure'>
            <h2 className='section_title'>PURE CSS ANIMATION</h2>
            <span className='section_subtitle'>
                PURE CSS로 구현된 모션 이모티콘입니다. <br/>
                애니메이션으로 반복적인 라이언과 이모티콘을 제작하였습니다.
            </span>

            <div className='pure_container container grid'>
                <div className="ryan ryanno">
                    <div className="ears"></div>
                        <div className="face">
                            <div className="eyebrows"></div>
                            <div className="eyes"></div>
                            <div className="nose"></div>
                            <div className="mouth"></div>
                        </div>
                </div>
                <div className="ryan yUp">
                    <div className="ears"></div>
                        <div className="face">
                            <div className="eyebrows"></div>
                            <div className="eyes"></div>
                            <div className="nose"></div>
                            <div className="mouth"></div>
                        </div>
                </div>
                <div className="ryan ryanno">
                    <div className="ears"></div>
                        <div className="face">
                            <div className="eyebrows"></div>
                            <div className="eyes"></div>
                            <div className="nose"></div>
                            <div className="mouth"></div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default Pure
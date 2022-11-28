import React from 'react'

function ScrollDown() {
    // 아래로 내리는 스크롤
    return (
        <div className='home_scroll'>
            <a href='#about' className='home_scroll-button'>

                <span>scroll</span>
                <p className='home_scroll-name'>Scroll Down</p>
                <i className="uil uil-angle-double-down home_scroll-arrow"></i>
            </a>
        </div>
    )
}

export default ScrollDown
import React from 'react'
import './about.scss'
import Eunmi from '../../images/eunmi.png'

function About() {
  return (
    <section className='about section' id='about'>
        <h2 className='section_title'>About Me</h2>
        <span className='section_subtitle'>My introduction</span>

        <div className='about_container container grid'>
            <img src={Eunmi} className="about_img"></img>

            <div className='about_data'>
                <p className='about_description'>
                안녕하세요, 프론트앤드 개발자를 꿈꾸는 <b>전은미</b>입니다.
                <br/>
                <br/>
                저는 다양한 학습 환경을 만드는 것을 좋아하며,
                <br/>
                상상한 무궁무진한 아이디어를 
                <br/>
                제가 배운 기술로 구현해가는 과정이 재밌습니다.
                <br/>
                <br/>
                꾸준히 공부하고 계속해서 앞으로 나아갈 자신이 있습니다.<br/>
                성실하게 쌓은 지식으로, 항상 새로운 시도를 두려워하지 않고<br/>
                회사에 실질적인 도움이 되는 프론트앤드 개발자로 일하고 싶습니다.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About
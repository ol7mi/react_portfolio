import React from 'react'
import KaKaodata from './KakaoImg'
import './dataStyle.scss'

function Kakao() {
  return (
    <section className='Kakao section' id='about'>
        <h2 className='section_title'>Kakao Talk App</h2>
        <span className='section_subtitle'>Frontend using React.js SPA<br/> Kakao Talk을 React와 Flex Box를 사용하여 git-hub에 배포하였습니다.</span>

        <div className='Kakao_container container grid'>
            <div className='imgBox'>
              <a href='https://ol7mi.github.io/kakao_app_2022/' target="_blank" className='hoverImg'>
                <KaKaodata />
              </a>
            </div>
        </div>
    </section>
  )
}

export default Kakao
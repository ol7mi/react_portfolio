import React from 'react'
import MovieImg from './MovieImg'
import './dataStyle.scss'

function Movie() {
  return (
    <section className='Kakao section' id='about'>
    <h2 className='section_title'>Movie App</h2>
    <span className='section_subtitle'>Frontend using React.js SPA Axios<br/> 20개의 애니메이션 추천 사이트 입니다.</span>

    <div className='Kakao_container container grid'>
        <div className='imgBox'>
            <a href='https://ol7mi.github.io/movie_app_2022/' target="_blank" className='hoverImg'>
                <MovieImg />
            </a>
        </div>
    </div>
</section>
  )
}

export default Movie
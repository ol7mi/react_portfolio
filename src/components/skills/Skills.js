import React from 'react'
import './skills.scss'
import Frontends from './Frontends'
import Frontend from './Frontend'

function Skills() {
  return (
    <section className='skills section' id='skills'>
        <h2 className='section_title'>Skills</h2>
        <span className='section_subtitle'>저는 이런 것을 다룰 줄 압니다.</span>

        <div className='skills_container container grid'>
            <Frontend />
            <Frontends />
        </div>
    </section>
  )
}

export default Skills
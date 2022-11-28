import React from 'react'
import './footer.scss'

function Footer() {
  return (
    <footer className='footer'>
        <div className='footer_container container'>
            <div className='footer_social'>
                <a 
                    href='https://github.com/ol7mi/' 
                    className='footer_social-link'
                    target='_blank'>
                    <i className='bx bxl-github' ></i>
                </a>
                <a 
                    href='https://blog.naver.com/ol7mi/' 
                    className='footer_social-link'
                    target='_blank'>
                    <i className='bx bxl-blogger'></i>
                </a>
                <a 
                    href='https://www.instagram.com/ol7mi/' 
                    className='footer_social-link'
                    target='_blank'>
                    <i className='bx bxl-instagram-alt' ></i>
                </a>
            </div>
        </div>
    </footer>
  )
}

export default Footer
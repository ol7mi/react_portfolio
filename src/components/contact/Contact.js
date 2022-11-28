import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';
import './contact.scss'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_n2gqpmg', 
            'template_579nntq', 
            form.current, 
            'wsEdZRVjS1LPUBhWX'
        )
        // 이벤트 - 입력후 전송하면 초기화
        e.target.reset()
    };





  return (
    <section className='contact section' id='contact'>
        <h2 className='section_title'>Contact</h2>
        <span className='section_subtitle'>
            <i className='uil uil-phone-volume'></i>
        </span>

        <div className='contact_container container grid'>
            <div className='contact_content'>
                    <div className='contact_info'>
                        <div className='contact_card'>
                            <i className='bx bx-message-dots contact_card-icon'></i>
                            <span className='contact_card-data'>dmsal9865@gmail.com</span>
                        </div>
                        <div className='contact_card'>
                            <i className='bx bx-message-dots contact_card-icon'></i>
                            <span className='contact_card-data'>ol7mi@naver.com</span>
                        </div>
                        <div className='contact_card'>
                            <i className='bx bx-message-dots contact_card-icon'></i>
                            <span className='contact_card-data'>010-5503-3025</span>
                        </div>
                    </div>
            </div>

            <div className='contact_content'>
                    <form ref={form} onSubmit={sendEmail} className='contact_form'>
                        <div className='contact_form-div'>
                            <label className='contact_form-tag'>Mail</label>
                            <input 
                                type="email"
                                name='email'
                                className='contact_form-input'
                                placeholder='Insert your email'
                            ></input>
                        </div>

                        <div className='contact_form-div'>
                            <label className='contact_form-tag'>Name</label>
                            <input 
                                type="text"
                                name='name'
                                className='contact_form-input'
                                placeholder='Insert your name'
                            ></input>
                        </div>

                        <div className='contact_form-div contact_form-area'>
                            <label className='contact_form-tag'>Project</label>
                            <textarea name='project' cols='30' rows='10' className='contact_form-input' placeholder=':-)'></textarea>
                        </div>

                        <button className='button button--flex send'>
                            Send Message
                        </button>
                    </form>
            </div>
        </div>
    </section>
  )
}

export default Contact
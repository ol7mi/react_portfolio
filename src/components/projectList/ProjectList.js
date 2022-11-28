import React,{useState} from 'react'
import './projectList.scss'

function ProjectList() {
    const [toggle, setToggle] = useState(0);
    const toggleTab = (index) => {
        setToggle(index);
    }
  return (
    <section className='services section' id='projectlist'>
        <h2 className='section_title'>PROJECT LIST</h2>
        <span className='section_subtitle'>다양한 기업사이트를 순수 css와 JavaScript를 사용하여 클론코딩하였습니다.</span>

        <div className='services_container container grid'>

            {/* 삼성전기 */}
            <div className='services_content'>
                <div>
                    <i className='uil uil-map services__icon'></i>
                    <h3 className='services_title'> 삼성전기 </h3>
                    <a href="https://ol7mi.github.io/samsung/" target="_blank" className="btn">Veiw WebSite</a>
                    <i className='uil uil-arrow-right services__button-icon'></i>
                </div>

                <span className='services_button' onClick={()=>toggleTab(1)}>View More 
                    <i className='uil uil-arrow-right services__button-icon'></i>
                </span>

                <div className={toggle === 1 ? 'services_modal active-modal' : "services_modal"}>
                    <div className='services_modal-content'>
                        <i className='uil uil-times services_modal-close' onClick={()=>toggleTab(0)}></i>
                        <h3 className='services_modal-title'>Web Standard Essence verify</h3>
                        <p className='services_modal-description colors'>
                                    웹콘텐츠 접근성 지침과 웹 표준을 준수하여 <br/>
                                    웹페이지를 제작하였습니다. <br/>
                                    또한 크로스 브라우징 검사를 완료하여 <br/>
                                    웹브라우저에서 동일한 웹페이지를 볼 수 있습니다.</p>
                        <ul className='services_madal-services grid'>
                            <li className='services_madal-service'>
                                <i className='bx bx-radio-circle-marked'></i>
                                <p className='services_modal-inpo'>Language</p>
                            </li>

                            <li className='services_madal-service'>
                                <i className='bx bx-radio-circle'></i>
                                <p className='services_modal-inpo colors'>HTML5 , CSS3 , jQuery , javascript</p>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
            {/* CJ */}
            <div className='services_content'>
                <div>
                    <i className='uil uil-arrow services__icon'></i>
                    <h3 className='services_title'> CJone </h3>
                    <a href="https://ol7mi.github.io/cjone/" target="_blank" className="btn">Veiw WebSite</a>
                    <i className='uil uil-arrow-right services__button-icon'></i>
                </div>

                <span className='services_button' onClick={()=> toggleTab(2)}>View More 
                    <i className='uil uil-arrow-right services__button-icon'></i>
                </span>
                <div className={toggle === 2 ? 'services_modal active-modal' : "services_modal"}>
                    <div className='services_modal-content'>
                        <i className='uil uil-times services_modal-close' onClick={()=>toggleTab(0)}></i>
                        <h3 className='services_modal-title'>Responsive Web <br/> CJone</h3>
                        <p className='services_modal-description colors'>
                            반응형웹으로 제작한 웹사이트입니다. <br/>
                            미디어쿼리를 이용하여 <br/>
                            PC, 노트북, 태블릿과 모바일에서<br/>
                            자동으로 해상도와 레이아웃이 변경됩니다.
                        </p>
                        <ul className='services_madal-services grid'>
                            <li className='services_madal-service'>
                                <i className='bx bx-radio-circle-marked'></i>
                                <p className='services_modal-inpo'>Language</p>
                            </li>

                            <li className='services_madal-service'>
                                <i className='bx bx-radio-circle'></i>
                                <p className='services_modal-inpo colors'>HTML5 , CSS3 , jQuery , javascript</p>
                            </li>
                            <li className='services_madal-service'>
                                <i className='bx bx-radio-circle-marked'></i>
                                <p className='services_modal-inpo'>Effect</p>
                            </li>

                            <li className='services_madal-service'>
                                <i className='bx bx-radio-circle'></i>
                                <p className='services_modal-inpo colors'>Transition , Animation</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* 락앤락 */}
            <div className='services_content'>
                <div>
                    <i className='uil uil-edit services__icon'></i>
                    <h3 className='services_title'>LocknLock</h3>
                    <a href="https://ol7mi.github.io/locknlock/" target="_blank" className="btn">Veiw WebSite</a>
                    <i className='uil uil-arrow-right services__button-icon'></i>
                </div>

                <span className='services_button' onClick={()=>toggleTab(3)}>View More 
                    <i className='uil uil-arrow-right services__button-icon'></i>
                    </span>
                <div className={toggle === 3 ? 'services_modal active-modal' : "services_modal"}>
                    <div className='services_modal-content'>
                        <i className='uil uil-times services_modal-close' onClick={()=>toggleTab(0)}></i>
                        <h3 className='services_modal-title'>responsive website <br/> LocknLock</h3>
                        <p className='services_modal-description colors'>
                            반응형으로 제작한 웹사이트입니다. <br/>
                            미디어쿼리를 이용하여<br/> 
                            PC, 노트북, 태블릿과 모바일에서 <br/>
                            자동으로 해상도와 레이아웃이 변경됩니다.
                        </p>
                        <ul className='services_madal-services grid'>
                            <li className='services_madal-service'>
                                <i className='bx bx-radio-circle-marked'></i>
                                <p className='services_modal-inpo'>Language</p>
                            </li>

                            <li className='services_madal-service'>
                                <i className='bx bx-radio-circle'></i>
                                <p className='services_modal-inpo colors'>HTML5 , CSS3 , jQuery</p>
                            </li>
                            <li className='services_madal-service'>
                                <i className='bx bx-radio-circle-marked'></i>
                                <p className='services_modal-inpo'>Effect</p>
                            </li>

                            <li className='services_madal-service'>
                                <i className='bx bx-radio-circle'></i>
                                <p className='services_modal-inpo colors'>Transition , Animation</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProjectList
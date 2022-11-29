import React,{useState} from 'react'
import './header.scss'

function Header () {
    //scroll내렸을때 header아랫부분 그림자 효과
    window.addEventListener("scroll", function(){
        const header = document.querySelector(".header")
        if(this.scrollY >= 80)header.classList.add("header-scroll");
        else header.classList.remove("header-scroll")
    })

    // toggle
    const [Toggle, showMenu] = useState(false)
    const [activeNav, setActiveNav] = useState("#home")

    return (
        <header className='header'>
            <nav className='nav container'>
                <a href='index.html' className='nav_logo'>Eunmi</a>

                <div className={Toggle ? 'nav_menu show-menu' : 'nav_menu'}>
                    <ul className='nav_list grid'>
                        <li className='nav_item'>
                            <a href='#home' 
                                onClick={()=> setActiveNav('#home')} 
                                className={ 
                                    activeNav === "#home" ? "nav_link active-link" :
                                    "nav_link"
                                }
                            >
                                <i className='uil uil-estate nav_icon'></i> Home
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href='#about'
                                onClick={()=> setActiveNav('#about')} 
                                className={ 
                                    activeNav === "#about" ? "nav_link active-link" :
                                    "nav_link"
                                }
                            >
                                <i className='uil uil-user nav_icon'></i> About
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href='#skills'
                                onClick={()=> setActiveNav('#skills')} 
                                className={ 
                                    activeNav === "#skills" ? "nav_link active-link" :
                                    "nav_link"
                                }
                            >
                                <i className='uil uil-file-alt nav_icon'></i> Skills
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href='#projectlist'
                                onClick={()=> setActiveNav('#projectlist')} 
                                className={ 
                                    activeNav === "#projectlist" ? "nav_link active-link" :
                                    "nav_link"
                                }
                            >
                                <i className="uil uil-folder nav_icon"></i> Project
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href='#pure'
                            onClick={()=> setActiveNav('#pure')} 
                            className={ 
                                activeNav === "#pure" ? "nav_link active-link" :
                                "nav_link"
                            }>
                                <i className="uil uil-surprise nav_icon"></i> Pure CSS
                            </a>
                        </li>

                        <li className='nav_item'>
                            <a href='#contact'
                                onClick={()=> setActiveNav('#contact')} 
                                className={ 
                                    activeNav === "#contact" ? "nav_link active-link" :
                                    "nav_link"
                                }
                            >
                                <i className="uil uil-message nav_icon"></i> contact
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav_close" onClick={()=> showMenu(!Toggle)}></i>
                </div>
                <div className='nav_toggle' onClick={()=> showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>

        </header>
    )
}

export default Header
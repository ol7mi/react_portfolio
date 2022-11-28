import React from 'react'

function Frontend() {
  return (
    <div className='skills_content'>
        <h3 className='skills_title'>
        <i className='bx bx-blanket'></i>
        </h3>

        <div className='skills_box'> 
            <div className='skills_group'>
                <div className='skills_data'>
                <i className='bx bxl-html5'></i>
                <div>
                    <h3 className='skills_name'>HTML</h3>
                    <span className='skills_level'>&nbsp;</span>
                </div>
                </div>

                <div className='skills_data'>
                <i className='bx bxl-html5'></i>
                <div>
                    <h3 className='skills_name'>CSS</h3>
                    <span className='skills_level'>&nbsp;</span>
                </div>
                </div>

                <div className='skills_data'>
                <i className='bx bxl-sass' ></i>
                <div>
                    <h3 className='skills_name'>SCSS</h3>
                    <span className='skills_level'>&nbsp;</span>
                </div>
                </div>
            </div>

            <div className='skills_group'>
                <div className='skills_data'>
                <i className='bx bxl-react'></i>
                <div>
                    <h3 className='skills_name'>React</h3>
                    <span className='skills_level'>&nbsp;</span>
                </div>
                </div>

                <div className='skills_data'>
                <i className='bx bxl-javascript' ></i>
                <div>
                    <h3 className='skills_name'>JS</h3>
                    <span className='skills_level'>&nbsp;</span>
                </div>
                </div>

                <div className='skills_data'>
                <i className='bx bxl-jquery' ></i>
                <div>
                    <h3 className='skills_name'>Jquery</h3>
                    <span className='skills_level'>&nbsp;</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frontend
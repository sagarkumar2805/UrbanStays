import React from 'react'
import img1 from '../../images/img1.webp'
import img2 from '../../images/img2.webp'
import img3 from '../../images/img3.webp'
import img4 from '../../images/img4.jpeg'
import img5 from '../../images/img5.jpeg'
import img6 from '../../images/img6.jpeg'
import './Featured.css'
const Featured = () => {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <img className='featuredImg' src={img1} alt=""/>
        <div className='featuredTitles'>
          <h3>Hotel Paradise</h3>
          <h4>hello</h4>
        </div>
      </div>
      <div className="featuredItem">
        <img className='featuredImg' src={img2} alt=""/>
        <div className='featuredTitles'>
          <h3>Hotel Heritage</h3>
          <h4>hello</h4>
        </div>
      </div>
      <div className="featuredItem">
        <img className='featuredImg' src={img3} alt=""/>
        <div className='featuredTitles'>
          <h3>UrbanStays.Inn</h3>
          <h4>hello</h4>
        </div>
      </div>      
    </div>
  )
}

export default Featured
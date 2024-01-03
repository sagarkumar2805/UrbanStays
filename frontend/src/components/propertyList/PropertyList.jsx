import React from 'react'
import './PropertyList.css'
import img6 from '../../images/img6.jpeg'
import img1 from '../../images/img1.webp'
import img2 from '../../images/img2.webp'
import img3 from '../../images/img3.webp'
import img4 from '../../images/img4.jpeg'
import img5 from '../../images/img5.jpeg'

const PropertyList = () => {
  return (
    <div className='pList'>
        <div className="pListItem">
            <img src={img6} alt="" className='pListImg' />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>112 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={img1} alt="" className='pListImg'  />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>112 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={img3} alt="" className='pListImg'  />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>112 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={img4} alt="" className='pListImg'  />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>112 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={img5} alt="" className='pListImg' />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>112 Hotels</h2>
            </div>
        </div>
        <div className="pListItem">
            <img src={img6} alt="" className='pListImg'  />
            <div className="pListTitles">
                <h1>Hotels</h1>
                <h2>112 Hotels</h2>
            </div>
        </div>

    </div>
  )
}

export default PropertyList
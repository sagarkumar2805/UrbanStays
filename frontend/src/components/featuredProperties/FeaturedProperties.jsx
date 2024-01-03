import React from 'react';
import './FeaturedProperties.css';
import img6 from '../../images/img6.jpeg'
import img1 from '../../images/img1.webp'
import img2 from '../../images/img2.webp'
import img3 from '../../images/img3.webp'
import img4 from '../../images/img4.jpeg'
import img5 from '../../images/img5.jpeg'

const FeaturedProperties = () => {
    return (
        <div className='fp'>
            <div className="fpItem">
                <img src={img1} alt="" className='fpImg' />
                <span className="fpName">Heritage Hotel Inn</span>
                <span className="fpCity">Hyderabad</span>
                <span className="fpPrice">Starting Price 800</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src={img2} alt="" className='fpImg' />
                <span className="fpName">Heritage Hotel Inn</span>
                <span className="fpCity">Hyderabad</span>
                <span className="fpPrice">Starting Price 800</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src={img6} alt="" className='fpImg' />
                <span className="fpName">Heritage Hotel Inn</span>
                <span className="fpCity">Hyderabad</span>
                <span className="fpPrice">Starting Price 800</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img src={img5} alt="" className='fpImg'/>
                <span className="fpName">Heritage Hotel Inn</span>
                <span className="fpCity">Hyderabad</span>
                <span className="fpPrice">Starting Price 800</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>

        </div>
    )
}

export default FeaturedProperties
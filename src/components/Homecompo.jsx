import React from 'react'
import { Carousel } from 'antd';
const contentStyle = {
    height: '560px',
    color: '#fff',
    lineHeight: '560px',
    textAlign: 'center',
    background: 'black',
};
import banner_1 from '../assets/banner_1.jpg'
import banner_2 from '../assets/banner_2.jpg'
import banner_3 from '../assets/banner_3.jpg'
import banner_4 from '../assets/banner_4.jpg'

const Homecompo = () => {
    return (
        <div className='carousel1' style={{ marginTop: "20px" }}>
            <Carousel autoplay>
                <div>
                    <img style={contentStyle} src={banner_2} alt="" />
                </div>
                <div>
                    <img style={contentStyle} src={banner_1} alt="" />
                </div>
                <div>
                    <img style={contentStyle} src={banner_3} alt="" />
                </div>
                <div>
                    <img style={contentStyle} src={banner_4} alt="" />
                </div>
            </Carousel>
        </div>
    )
}

export default Homecompo
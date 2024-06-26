import React from 'react'
import { Card, Avatar } from 'antd';
import Homecarddata from '../assets/Homecarddata';

const { Meta } = Card;
import { useNavigate } from 'react-router-dom';
const Homecards = () => {
    const navigate = useNavigate();

    const handleCardClick = (id)=>{
        navigate(`/product/${id}`)
        window.scrollTo(0, 0);
    }
    return (
        <div className="homecard">
            <div className='cards1' style={{
                padding: "10px",
                marginLeft: "15px",
                display: "flex",
                gap: "20px",
                justifyContent: "space-around",
                flexWrap: "wrap",
            }}>
                {Homecarddata.map((item, index) => (
                    <Card
                        key={index}
                        style={{
                            marginTop: "50px",
                            width: 200,
                        }}
                        cover={
                            <img onClick={() => handleCardClick(item.id)}
                                alt="example"
                                src={item.img}
                                className="card-appear" style={{
                                    width:'210px',
                                    height:'250px',
                                    objectFit: 'cover',
                                }}
                            />
                        }

                    >
                        <Meta
                            avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />}
                            title={item.productName}
                            description={item.price}
                        />
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Homecards
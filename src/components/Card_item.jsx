import React from 'react';
import { Card, Avatar } from 'antd';
import men_img from '../assets/men_avatar.png'
import { useNavigate } from 'react-router-dom'
import '../pages/Style.css';

const { Meta } = Card;

const Card_item = ({data}) => {
    const navigate = useNavigate();

    const handleCardClick = (id)=>{
        navigate(`/product/${id}`)
        window.scrollTo(0, 0);
    }


    return (
        <div className="mencard">
            <div className='cards1' style={{
                padding: "10px",
                marginLeft: "15px",
                display: "flex",
                gap: "20px",
                justifyContent: "space-around",
                flexWrap: "wrap",
            }}>
                {data.map((item, index) => (
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
                            avatar={<Avatar src={men_img} />}
                            title={item.productName}
                            description={item.price}
                        />
                    </Card>
                ))}
            </div>
        </div>
    )
}


export default Card_item;



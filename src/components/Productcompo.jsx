import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Mendata from '../assets/Mendata';
import Womendata from '../assets/Womendata';
import Kidsdata from '../assets/Kidsdata';
import { useDispatch } from 'react-redux';
import { AddItem } from '../redux/action/Action';

const allData = [...Mendata, ...Womendata, ...Kidsdata];

const Productcompo = () => {
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const { id } = useParams();
    const product = allData.find((item) => item.id === parseInt(id));

    const handleAddToCart =()=>{
        dispatch(AddItem(product));
    }

    return (
        <div className='product' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' , backgroundImage:"linear-gradient(#0000007e , #0000007e) , url(/bg_cloth1.avif)"}}>
            {product ? (
                <>
                    <div className="product-img" style={{ marginTop: "50px" }}>
                        <img src={product.img} alt="" />
                    </div>
                    <div className="details" style={{ marginTop: "20px", textAlign: "center" }}>
                        <p>{product.name}</p>
                        <p>{product.brand}</p>
                        <p>{product.price}</p>
                        <p>{product.description}</p>
                        <label htmlFor="size">Size:     </label>
                        <select id="size">
                            {product.sizes.map((size, index) => (
                                <option key={index} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div style={{ marginTop: "10px" ,marginBottom:"30px",display:"flex",gap:"10px"}}>
                        <button className="btn btn-outline btn-primary" onClick={handleAddToCart}>Add To Cart</button>
                        <button className="btn btn-outline btn-primary" onClick={()=>{Navigate('/Cart')}}>Go to Cart</button>
                    </div>
                </>
            ) : (
                    <p>Product not found</p>
                )}
        </div>
    );
};

export default Productcompo;

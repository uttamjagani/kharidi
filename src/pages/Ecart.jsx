import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DelItem } from '../redux/action/Action';

const Ecart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const handleRemoveItem = (item) => {
        dispatch(DelItem(item));
    };

    const totalAmount = cart.items.reduce((acc, item) => acc + item.totalPrice, 0);


    return (
        <div className="cart" style={{ padding: '20px' }}>
            <h2>Cart</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {cart.items.map((item, index) => (
                    <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
                        <img src={item.img} alt="" style={{ width: '150px', height: '150px', objectFit: 'cover', marginRight: '20px' }} />
                        <div style={{ flex: 1 }}>
                            <p style={{ fontWeight: 'bold', fontSize: '1.2em' }}>{item.name}</p>
                            <p>{item.brand}</p>
                            <p>Price: {item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Total Price: {item.totalPrice}</p>
                            <button onClick={() => handleRemoveItem(item)} style={{ padding: '5px 10px', background: '#ff4d4f', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Remove</button>
                        </div>
                    </li>
                ))}
            </ul>
            <h3 style={{color:"white"}}>Total Items: {cart.totalCount}</h3>
            <h3 style={{color:"white"}}>Total Amount: {cart.totalAmount}</h3>
        </div>
    );
};

export default Ecart;

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const totalCount = useSelector(state => state.cart.totalCount);

    return (
        <>
            <div className="navbar bg-base-200 ">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl" style={{ marginLeft: "10%" }}>KHARIDI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/men'>Men</Link></li>
                        <li><Link to='/women'>Women</Link></li>
                        <li><Link to='/kids'>Kids</Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to='/login' className="btn" style={{ marginRight: "10px" }}><i className='fa fa-sign-in me-1'></i>Login</Link>
                    <Link to='/cart' className="btn" style={{ marginRight: "20%" }}><i className='fa fa-shopping-cart me-1'></i>Cart({totalCount})</Link>
                </div>
            </div>
        </>
    );
};

export default Navbar;

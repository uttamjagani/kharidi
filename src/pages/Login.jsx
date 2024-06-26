import React, { useState } from 'react';
import logo from '../assets/Web_logo.jpg';
import {useNavigate} from 'react-router-dom'

const Login = () => {
  const [sign , setSign] = useState("Sign In");
  const navigate = useNavigate();
  const navigatehomefun = ()=>{
    navigate('/');
  }

  return (
    <div className='login' style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      backgroundColor: '#8f7f6f'
    }}>
      <div style={{
        background: '#faf6f7',
        padding: '40px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        maxWidth: '400px',
        width: '100%'
      }}>
        
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1px' }}>
          <img src={logo} alt="Kharidi Logo" style={{ width: '150px' }} />
        </div>
        <div className="name" style={{color:"black",fontSize:"25px",marginBottom: '15px',fontWeight:"500" }}>
          <h2>{sign}</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          
          <form style={{ width: '100%' }}>
            {sign === "Sign Up" ?
              <input type="text" placeholder='Enter Name' style={{
                width: '100%',
                height: '40px',
                marginBottom: '15px',
                padding: '10px',
                border: '1px solid #ddd',
                borderRadius: '4px'
              }} />
              : <></>}
            <input type="email" placeholder='Email' style={{
              width: '100%',
              height: '40px',
              marginBottom: '15px',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }} />
            <input type="password" placeholder='Password' style={{
              width: '100%',
              height: '40px',
              marginBottom: '15px',
              padding: '10px',
              border: '1px solid #ddd',
              borderRadius: '4px'
            }} />
            <button type='submit' className="btn btn-neutral" style={{
              width: '100%',
              cursor: 'pointer',
              marginTop: '10px'
            }} onClick={navigatehomefun}>Submit</button>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '10px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input type="checkbox" id="rememberMe" />
                <label htmlFor="rememberMe" style={{ marginLeft: '5px', color: "black" }}>Remember me</label>
              </div>
              <p style={{ color: 'black', cursor: 'pointer' }}>Need Help?</p>
            </div>
          </form>
          <div className="spanchange" style={{ marginTop: '20px', color: 'black', alignSelf: "auto" }}>
            {sign === "Sign In"
              ? <p>New in Kharidi? <span onClick={()=>{setSign("Sign Up")}} style={{ color: 'blue', cursor: 'pointer' }}>Sign Up Now</span></p>
              : <p>Already Have An Account? <span onClick={()=>{setSign("Sign In")}}style={{ color: 'blue', cursor: 'pointer' }}>Sign In Now</span></p>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

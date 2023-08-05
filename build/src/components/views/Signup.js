import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Signup.css';
import { toast } from 'react-toastify';
function Signup() {
  let navigate=useNavigate();
  const [getvalue, setvalue] = useState({ name: "", email: "", phone: "", username: "", password: "", conformpassword: "" })
  const changedata = (event) =>{
    let name = event.target.name;
    let value = event.target.value;
    setvalue({ ...getvalue, [name]: value })
  }
  const submitdetails = async (event) => {
    event.preventDefault();
    try {
      const { name, email, username, phone, password, conformpassword } = getvalue;
      const res = await fetch('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name,email,username,password,phone,conformpassword})
      })
      if (res.status === 200) {
        toast.success('Registration sucess');
        navigate('/login');
      }
      if (res.status === 500) {
        toast.error('All field require');

      }
      if (res.status === 201) {
        toast.error('Email id already exist');
      }
      if (res.status === 401) {
        toast.error('Password and conform password are not matched');
      }

    }
    catch (error) {
      console.log('this time summ technical issues');
      
    }


  }
  return (
    <>
      <main className='signup-main-container'>
        <div className="signup-m-container">
          <div className="leftside-container">
            {/* <img src={img22} alt="" style={{borderRadius:'10%'}}/> */}
          </div>

          <div className="rightside-input">
            <div className="signup-heading-container">
              <h1>Signup</h1>
            </div>
            <form action="/signup" className="signup-input-form-container" method="post">
              <input
                type="text"
                name="name"
                id="name"
                className="input-fields"
                placeholder="Name"
                value={getvalue.name}
                onChange={changedata}
              />
              <input
                type="email"
                name="email"
                id="email"
                className="input-fields"
                placeholder="Email"
                value={getvalue.email}
                onChange={changedata}


              />
              <input
                type="tel"
                name="phone"
                id="phone"
                className="input-fields"
                placeholder="Phone"
                value={getvalue.phone}
                onChange={changedata}


              />

              <input
                type="text"
                name="username"
                id="username"
                className="input-fields"
                placeholder="Username"
                value={getvalue.username}
                onChange={changedata}


              />

              <input
                type="password"
                name="password"
                id="password"
                className="input-fields"
                placeholder="Password"
                value={getvalue.password}
                onChange={changedata}


              />
              <input
                type="text"
                name="conformpassword"
                id="conformpassword"
                className="input-fields"
                placeholder="Conformpassword"
                value={getvalue.conformpassword}
                onChange={changedata}


              />
              <div className="submit-container">
                <input type="submit" id="submit" value="submit" onClick={submitdetails} /><br />
              </div>
              <div className="loginpage-container">
                <p className='name-login'>Have an account?</p>
                <Link to='/login' className='login-page-name'>Log in</Link>
              </div>
            </form>
            
          </div>
        </div>
      </main>
    </>
  )
}

export default Signup

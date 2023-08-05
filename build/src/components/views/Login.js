import React, { useState } from 'react'
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function Login() {
  let navigate = useNavigate();
  const [getdata, setdata] = useState({ email: "", password: "" });
  const changedata = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setdata({ ...getdata, [name]: value })
  }
  const submitdetails = async (event) => {
    event.preventDefault();
    try {
      const { email, password } = getdata;
      const res = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      })
      if (res.status === 500) {
        toast.error("All field require");
      }
     else if (res.status === 403) {
        toast.error("Invalid login details");
      }
      else if (res.status === 200) {
        toast.success("Login sucessfully");
        navigate('/');
        window.location.reload();

      }

    }
    catch (error) {
      toast.error("This time sum technical issues");
    }
  }
  return (
    <>
      <main className='login-main-container'>
        <div className="login-container">
          <div className="login-heading">
            <h1 className='pagename'>Login</h1>
          </div>
          <div className="login-input">
            <form action="/" className="login-input-form" method="post">
              <input
                type="email"
                name="email"
                id="email"
                className="input-field"
                placeholder="Email"
                value={getdata.name}
                onChange={changedata}

              /><br />
              <input
                type="password"
                name="password"
                id="password"
                className="input-field"
                placeholder="Password"
                value={getdata.password}
                onChange={changedata}

              /><br />
              <div className="submit-container">
                <input type="submit" id="submit" value="Login" onClick={submitdetails} /><br />
              </div>
              <div className="usernot-login-container">
                <p style={{ color: "white", fontWeight: 700 }}>Dont have an account?</p>
                <Link to='/signup' className='signup-link'>Sign up</Link>
              </div>
            </form>
          </div>
        </div>
      </main>

    </>
  )
}

export default Login

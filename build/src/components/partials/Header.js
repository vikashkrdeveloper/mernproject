import React, { useState, useEffect } from 'react'
import './Header.css'
import { Link, NavLink } from 'react-router-dom'

function Header() {

    const showfun = () => {
        document.getElementById('search-con').style.display = "block"
    }
    const dblshowfun = () => {
        document.getElementById('search-con').style.display = "none"
    }

    const Logotext = () => {
        window.location.assign('/')
    }

    const [show, setshow] = useState(true);
    const [getdata, setData] = useState({ name: "" });
    let Login;
    if (getdata.role === 1) {
        Login = show ? '/login' : '/superadmin/dashboard'

    }
    else {
        Login = show ? '/login' : '/user/dashboard'

    }
    const Signup = show ? '/signup' : '/logout'
    const Signinvar = show ? 'Sign up' : 'Log out'
    const Loginvar = show ? 'Log in' : getdata.name + " 🞃"
    const callaboutpage = async () => {
        try {
            const res = await fetch('/getdata', {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            const data = await res.json();
            setData(data);
            setshow(false);
        }
        catch (error) {

        }


    }

    useEffect(() => {
        callaboutpage();
    }, [])
    const showelement = () => {
document.getElementById('ul-bar').style.left="0"
    }
    const dblshowelement = () => {
document.getElementById('ul-bar').style.left="-100%"
    }

    return (
        <>
            <header className="header-container">

                <div className="name-container">
                    <h1 className="sign-name" id="sign-name" onClick={Logotext}>@Vikash kumar</h1>
                </div>
                <nav className="nav-bar-container">
                    <ul className="ul-bar-container" id="ul-bar">
                        <li className="list-items-container " id="home">
                            <NavLink to='/' className='navlink'>

                                <p className="link-texts ">Home</p>
                            </NavLink>

                        </li>
                        <li className="list-items-container" id="about">
                            <NavLink to='/about' className='navlink' >

                                <p className="link-texts">About Me</p>
                            </NavLink>

                        </li>

                        <li className="list-items-container" id="project">
                            <NavLink to='/contact' className='navlink'>

                                <p className="link-texts">Contact</p>
                            </NavLink>

                        </li>
                        <li className="list-items-container" id="education">
                            <NavLink to={Signup} className='navlink'>

                                <p className="link-texts">{Signinvar}</p>
                            </NavLink>

                        </li>
                        <li className="list-items-container" id="skills">
                            <NavLink to={Login} className='navlink'>

                                <p className="link-texts">{Loginvar} </p>
                            </NavLink>

                        </li>
                        <li className="list-items-container last-container" id="contact">

                            <input type="text" name='search' id='search-con' />
                            <label htmlFor="search-con">
                                <p className="link-texts"><i class="fi-xnsuhl-search search-ion" onClick={showfun} onDoubleClick={dblshowfun}></i></p>
                            </label>

                        </li>
                    </ul>
                    <input type="checkbox" name="check" id="check" />
                    <label for="check" className="label-box"><i className="fi-xnsuxl-three-bars-solid font-dot" id="font-btn" onDoubleClick={dblshowelement} onClick={showelement}></i></label>
                </nav>



            </header>

        </>
    )
}

export default Header

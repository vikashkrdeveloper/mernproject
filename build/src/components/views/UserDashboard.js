import React, { useEffect,useState } from 'react'
import './UserDashboard.css';
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import LoaderComponent from '../partials/Loader';

function UserDashboard() {
  const navigate = useNavigate();
  const dashboardauth = async () => {
    try {
      const res = await fetch('https://mern-project-p30h.onrender.com/user/dashboard/pannel', {
        method: "GET",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        credentials: "include"
      })

      await res.json();

    }
    catch (error) {
      navigate('/', { replace: true });

    }

  }
  useEffect(() => {
    dashboardauth();
  })

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      // Simulating content loading time
      setTimeout(() => {
          setIsLoading(false);
      }, 1000);
  }, []);







  return (
    <>
      {isLoading ? (
        <LoaderComponent />
      ) : (
      <main className='dashboard-main-container'>
        <div className="dashbord-side-bar-container">
          <div className="dashbord-side-bar-top-box-container">
            <div className="dashbord-side-bar-top-box">
              <div className="heading-dashbord-side-bar-container">
                <span class="material-symbols-outlined  icon"  >
                  dashboard
                </span>
                <span className='dashboard-heading'>Dashboard</span>
              </div>
              <div className="dashbord-side-bar">
                <NavLink to='/user/dashboard/alldetails' className="dashbord-side-bar">
                  <span class="material-symbols-outlined icon">
                    inventory_2
                  </span>
                  <span className='dashboard-products'>All Details</span>
                  <span class="material-symbols-outlined dropdown-arrow"  >
                    arrow_drop_down
                  </span>
                </NavLink>
              </div>
              <div className="dashbord-side-bar  dropdown-product-con">
                <NavLink to='/user/dashboard/editprofile' style={{ textDecoration: 'none' }}>

                  <span className='dashboard-products dropdown-pro'>Add Details</span>
                </NavLink>
              </div>
              <div className="dashbord-side-bar  dropdown-product-con">
                <NavLink to='/user/dashboard/productslist' style={{ textDecoration: 'none' }}>

                  <span className='dashboard-products dropdown-pro'>Products List</span>
                </NavLink>
              </div>
              <div className="dashbord-side-bar  dropdown-product-con">
                <NavLink to='/user/dashboard/logout' style={{ textDecoration: 'none' }}>

                  <span className='dashboard-products dropdown-pro'>Log out</span>
                </NavLink>
              </div>
              <div className="dashbord-side-bar">
                <NavLink to='/user/dashboard/user/profile' className="dashbord-side-bar">
                  <span class="material-symbols-outlined icon">
                    person
                  </span>

                  <span className='dashboard-products'>Profile</span>
                  <span class="material-symbols-outlined dropdown-arrow"  >
                    arrow_drop_down
                  </span>
                </NavLink>
              </div>
            </div>
          </div>
          <div className="dashbord-side-bar-bottom-box-container">
            <div className="dashbord-side-bar-bottom-box"></div>
          </div>

        </div>
        <div className="renderother-container">
          <Outlet />
        </div>
      </main>
      )}
    </>
  )
}

export default UserDashboard

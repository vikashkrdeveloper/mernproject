import { Routes, Route } from 'react-router-dom'
import Footer from './components/partials/Footer';
import Header from './components/partials/Header';
import Main from './components/views/Main';
import Error from './error'
import Login from './components/views/Login';
import Signup from './components/views/Signup';
import Logout from './components/views/logout';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Admindashboard from './components/views/Admindashboard';
import Addproject from './components/context/addproject';
import Allproducts from './components/context/allproducts';
import Productslist from './components/context/productslist';
import Categoties from './components/context/categoties';
import Orders from './components/context/orders';
import UserDashboard from './components/views/UserDashboard';
import Contact from './components/views/Contact';
import About from './components/views/About';
import Pollingboothdata from './components/views/Pollingboothdata';
function App() {
  return (
    <>
      <Header />
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/superadmin/dashboard' element={<Admindashboard />} >
          <Route path='/superadmin/dashboard/alldetails' element={<Allproducts />} />
          <Route path='/superadmin/dashboard/adddetails' element={<Addproject />} />
          <Route path='/superadmin/dashboard/productslist' element={<Productslist />} />
          <Route path='/superadmin/dashboard/logout' element={<Logout />} />
          <Route path='/superadmin/dashboard/admin/profile' element={<Orders />} />

        </Route>
        <Route path='/user/dashboard' element={<UserDashboard />} >
          <Route path='/user/dashboard/alldetails' element={<Allproducts />} />
          <Route path='/user/dashboard/editprofile' element={<Addproject />} />
          <Route path='/user/dashboard/productslist' element={<Productslist />} />
          <Route path='/user/dashboard/logout' element={<Logout />} />
          <Route path='/user/dashboard/user/profile' element={<Orders />} />

        </Route>
        <Route path='/pollingbooth/data/create' element={<Pollingboothdata />} />
        <Route path='*' element={<Error />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;

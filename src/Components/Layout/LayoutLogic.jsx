import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/NavbarLogic';

const Layout = () => (
  <div>
    <Navbar />
    <Outlet />
  </div>
);

export default Layout;
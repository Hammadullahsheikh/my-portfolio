import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet /> {/* This is crucial for rendering child routes */}
        </div>
    );
};

export default Layout;
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Layout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet /> {/* This is crucial for rendering child routes */}
            <Footer />
        </div>
    );
};

export default Layout;
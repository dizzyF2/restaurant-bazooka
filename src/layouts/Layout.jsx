import Header from '../components/layouts/Header';
import Footer from '../components/layouts/Footer';
import { Outlet } from 'react-router-dom';
import CartSidebar from '../components/CartSidebar';

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen bg-black text-white">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <CartSidebar />
            <Footer />
        </div>
    );
};

export default Layout;
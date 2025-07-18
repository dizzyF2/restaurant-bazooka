import { useState } from "react"
import BrandLogo from "../BrandLogo"
import CartStatus from "../CartStatus"
import SearchBar from "../SearchBar"
import { Menu, X } from "lucide-react"
import { Link } from "react-router-dom"


function Header() {
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
            <div className='bg-[#000000b7] flex items-center justify-between gap-5 w-[70%] mx-auto mt-2 py-2 px-3 rounded-full backdrop-blur-md'>
                <ul className="order-1 hidden md:flex items-center justify-center gap-5 md:text-xs lg:text-sm">
                    <Link to={"/menu"} className="text-white hover:text-primary duration-300 cursor-pointer">Menu</Link>
                    <Link to={"/menu/wishlist"} className="text-white hover:text-primary duration-300 cursor-pointer">Wishlist</Link>
                    <li className="text-white hover:text-primary duration-300 cursor-pointer">About</li>
                    <Link to={"/contact"} className="text-white hover:text-primary duration-300 cursor-pointer">Contact Us</Link>
                </ul>

                <div className="order-2 md:hidden block">
                    {isMobileNavOpen ? (
                        <X
                            onClick={() => setIsMobileNavOpen(false)}
                            className="cursor-pointer hover:bg-[#ffa60027] p-1 rounded-full"
                            color="white"
                            size={25}
                        />
                    ) : (
                        <Menu
                            onClick={() => setIsMobileNavOpen(true)}
                            className="cursor-pointer hover:bg-[#ffa60027] p-1 rounded-full"
                            color="white"
                            size={25}
                        />
                    )}
                </div>

                <BrandLogo onclick={() => setIsMobileNavOpen(false)} />
                <div className="order-3 flex items-center justify-center gap-3">
                    <SearchBar />
                    <CartStatus />
                </div>
            </div>
            
            {isMobileNavOpen && (
                <ul className="md:hidden flex flex-col items-center gap-4 bg-black/60 py-6 rounded-lg mx-4 text-white text-sm z-40 backdrop-blur-md">
                    <Link 
                        to="/menu" onClick={() => setIsMobileNavOpen(false)}
                        className="text-white hover:text-primary duration-300"
                    >
                        Menu
                    </Link>
                    <Link 
                        to="/menu/wishlist" 
                        onClick={() => setIsMobileNavOpen(false)}
                        className="text-white hover:text-primary duration-300"
                    >
                        Wishlist
                    </Link>
                    <li 
                        onClick={() => setIsMobileNavOpen(false)}
                        className="text-white hover:text-primary duration-300 cursor-pointer"
                    >
                        About
                    </li>
                    <Link 
                        to="/contact" 
                        onClick={() => setIsMobileNavOpen(false)}
                        className="text-white hover:text-primary duration-300"
                    >
                        Contact Us
                    </Link>
                </ul>
            )}
        </header>
    )
}

export default Header
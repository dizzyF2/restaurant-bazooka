import BrandLogo from "../BrandLogo"
import SearchBar from "../SearchBar"
import Cart from "../Cart"
import { Menu } from "lucide-react"
import { Link } from "react-router-dom"


function header() {
    return (
        <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
            <div className='bg-[#000000b7] flex items-center justify-between gap-5 w-[70%] mx-auto mt-2 py-2 px-3 rounded-full backdrop-blur-md'>
                <ul className="order-1 hidden md:flex items-center justify-center gap-5 md:text-xs lg:text-sm">
                    <Link to={"/menu"} className="text-white hover:text-primary duration-300 cursor-pointer">Menu</Link>
                    <li className="text-white hover:text-primary duration-300 cursor-pointer">About</li>
                    <Link to={"/contact"} className="text-white hover:text-primary duration-300 cursor-pointer">Contact Us</Link>
                </ul>
                <Menu
                    className="order-2 block md:hidden cursor-pointer hover:bg-[#ffa60027] p-1 rounded-full"
                    color="white"
                    size={25}
                />
                <BrandLogo />
                <div className="order-3 flex items-center justify-center gap-3">
                    <SearchBar />
                    <Cart />
                </div>
            </div>
        </header>
    )
}

export default header
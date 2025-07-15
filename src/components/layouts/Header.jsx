import BrandLogo from "../BrandLogo"
import SearchBar from "../SearchBar"
import Cart from "../Cart"
import { Menu } from "lucide-react"


function header() {
    return (
    <div className='flex items-center justify-between gap-5 w-[70%] mx-auto  py-2 px-3 mt-5 rounded-full'>
        <ul className="order-1 hidden md:flex items-center justify-center gap-5 md:text-xs lg:text-sm">
            <li>Menu</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
        <Menu
            className="order-2 block md:hidden cursor-pointer hover:bg-[#d3d3d33b] p-1 rounded-full"
            color="white"
            size={25}
        />
        <BrandLogo />
        <div className="order-3 flex items-center justify-center gap-3">
            <SearchBar />
            <Cart />
        </div>
    </div>
    )
}

export default header
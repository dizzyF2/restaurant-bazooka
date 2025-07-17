import { Link } from "react-router-dom"

function BrandLogo() {
    return (
    <Link to={"/"} className="order-1 md:order-2 cursor-pointer border-none outline-none">
        <img 
            src="/images/bazooka-logo-origin.png"
            alt="brand logo"
            className="w-32 h-10 border-none outline-none"
        />
    </Link>
    )
}

export default BrandLogo
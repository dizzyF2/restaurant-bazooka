import { ShoppingCart } from "lucide-react"
import { useCart } from "../context/CartContext";


function CartStatus() {

    const { toggleCart, cartItems } = useCart();
    const count = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    return (
        <button
            onClick={toggleCart}
            className="relative p-1 hover:bg-[#ffa60027] cursor-pointer rounded-full"
        >
            <ShoppingCart color="white" size={20}/>
            <span 
                className={`absolute bottom-0 -right-0.5  ${count > 9 ? 'px-0.5' : (count < 100 ? 'px-1' : 'px-2')} bg-red-500 text-white text-xs rounded-full`}
            >
                {count}
            </span>
        </button>
    )
}

export default CartStatus
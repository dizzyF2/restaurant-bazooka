import { ShoppingCart } from "lucide-react"


//TODO.. span -> when number is 9 or less ? px-1 : px-0.5
function Cart() {
    return (
        <div className="relative p-1 hover:bg-[#ffa60027] cursor-pointer rounded-full">
            <ShoppingCart color="white" size={20}/>
            <span className="absolute bottom-0 -right-0.5 px-1 bg-red-500 text-white text-xs rounded-full">
                0
            </span>
        </div>
    )
}

export default Cart
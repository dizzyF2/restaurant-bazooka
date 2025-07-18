import { Minus, Plus, X } from "lucide-react";
import { useCart } from "../context/CartContext";

function CartSidebar() {
    const { cartItems,
            removeFromCart,
            isCartOpen,
            closeCart,
            increaseQuantity,
            decreaseQuantity
        } = useCart()

        const totalAmount = cartItems.reduce(
            (acc, item) => acc + (item.caloriesPerServing / 10).toFixed(2) * item.quantity,
            0
        )

    return (
        <div
        className={`fixed top-0 left-0 h-full w-80 bg-[#0a0a0a] text-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out
        ${isCartOpen ? "translate-x-0" : "-translate-x-full"}`}
        >
        <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-bold">Your Cart</h2>
            <button onClick={closeCart} className="cursor-pointer rounded-full p-0.5  hover:bg-[#80808060]">
            <X className="h-5 w-5" />
            </button>
        </div>

        <div className="flex flex-col items-center justify-start gap-4 px-4 py-10 overflow-y-auto h-[calc(100%-64px)]">
            {cartItems.length === 0 ? (
            <p className="text-gray-500">Your cart is empty.</p>
            ) : (
                cartItems.map((item) => (
                    <div
                        key={item.id}
                        className="flex items-start gap-3 border rounded-lg p-2"
                    >
                    <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex flex-col flex-grow">
                        <h3 className="text-sm font-semibold line-clamp-1">
                            {item.name}
                        </h3>
                        <p className="text-sm text-gray-600">${(item.caloriesPerServing / 10).toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                        <button
                            onClick={() =>
                            item.quantity === 1
                                ? removeFromCart(item.id)
                                : decreaseQuantity(item.id)
                            }
                            className="p-1 rounded border text-gray-600 hover:bg-[#8080808a] cursor-pointer"
                        >
                            <Minus size={14} color="white"/>
                        </button>
                        <span className="text-sm font-medium">{item.quantity}</span>
                        <button
                            onClick={() => increaseQuantity(item.id)}
                            className="p-1 rounded border text-gray-600 hover:bg-[#8080808a] cursor-pointer"
                        >
                            <Plus size={14} color="white"/>
                        </button>
                    </div>
                    <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 cursor-pointer hover:bg-red-400 rounded-md"
                    >
                        <X size={16}/>
                    </button>
                    </div>
                ))
            )}
            {totalAmount > 0 &&
                <div className="p-4 border-t bg-gray-50 rounded-xl">
                    <div className="flex justify-between gap-1 items-center text-sm font-semibold text-black">
                        <span>Total:</span>
                        <span>${totalAmount.toFixed(2)}</span>
                    </div>
                </div>
            }
        </div>
        
        </div>
    );
}

export default CartSidebar;
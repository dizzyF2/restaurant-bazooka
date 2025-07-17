import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState(() => {
        const stored = localStorage.getItem("cart");
        return stored ? JSON.parse(stored) : [];
    });
    const [isCartOpen, setIsCartOpen] = useState(false);
    

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);


    const increaseQuantity = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCartItems((prev) =>
            prev.map((item) =>
                item.id === id
                ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 }
                : item
            )
        );
    };

    const addToCart = (item) => {
        setCartItems((prev) => {
            const existing = prev.find((i) => i.id === item.id);
            if (existing) {
            return prev.map((i) =>
                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
            );
            }
            return [...prev, { ...item, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCartItems((prev) => prev.filter((item) => item.id !== id));
    };

    const clearCart = () => setCartItems([]);

    const toggleCart = () => setIsCartOpen((prev) => !prev);
    const closeCart = () => setIsCartOpen(false);


    return (
        <CartContext.Provider
        value={{
            cartItems,
            increaseQuantity,
            decreaseQuantity,
            addToCart,
            removeFromCart,
            clearCart,
            isCartOpen,
            toggleCart,
            closeCart,
        }}
        >
        {children}
        </CartContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => useContext(CartContext);
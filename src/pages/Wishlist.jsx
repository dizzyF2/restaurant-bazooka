import ProductCard from "../components/ProductCard";
import { useWishlist } from "../context/WishlistContext";



function Wishlist() {
    const { wishlist } = useWishlist();

    return (
        <section className="flex flex-col items-center justify-center mt-28 py-10 px-5 min-h-[60vh]">
            <h1 className="text-3xl font-bold mb-6 text-center">Your Wishlist</h1>

            {wishlist.length === 0 ? (
                <p className="text-center text-gray-600">Your wishlist is empty.</p>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center gap-6">
                {wishlist.map((recipe) => (
                    <ProductCard key={recipe.id} recipe={recipe} />
                ))}
                </div>
            )}
        </section>
    );
}

export default Wishlist;
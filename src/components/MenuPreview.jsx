import { Check, Plus } from "lucide-react"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useCart } from "../context/CartContext";

function MenuPreview() {
    const [recipes, setRecipes] = useState([])
    const [added, setAdded] = useState({});
    
    const { addToCart } = useCart()

    useEffect(() => {
        const fetchRecipes = async () => {
        try {
            const res = await fetch("https://dummyjson.com/recipes?limit=6")
            const data = await res.json()
            setRecipes(data.recipes)
        } catch (error) {
            console.error("Failed to fetch sample recipes:", error)
        }
    }

    fetchRecipes()
    }, [])

    return (
        <section className="bg-inherit py-16 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center max-w-7xl mx-auto">
                <div className="text-center mb-12">
                <p className="text-primary text-lg font-medium mb-2">From Our Menu</p>
                <h2 className="text-white text-4xl md:text-5xl font-bold">
                    <span className="text-yellow-500">Preview</span> Our Menu
                </h2>
                </div>

                <div className="w-[80%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recipes.map(recipe => (
                        <div key={recipe.id} className="flex flex-col items-start gap-4 bg-white rounded-lg p-4 ">
                            <div className="flex items-start gap-4">
                                <img
                                    src={recipe.image || "/placeholder.svg"}
                                    alt={recipe.name}
                                    className="w-20 h-20 rounded-md object-cover"
                                />
                                <div>
                                    <h3 className="text-black font-bold text-md">{recipe.name}</h3>
                                    <p className="text-gray-800 text-xs line-clamp-2">{recipe.instructions.slice(0, 60)}...</p>
                                </div>
                            </div>

                            <div className="flex items-center justify-between w-full px-2 py-1">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-lg font-bold text-gray-900">
                                        ${(recipe.caloriesPerServing / 10).toFixed(2)}
                                    </span>
                                </div>
                                <button
                                    onClick={() => {
                                        addToCart(recipe)
                                        setAdded((prev) => ({ ...prev, [recipe.id]: true }))
                                        setTimeout(() => {setAdded((prev) => (
                                            { ...prev, [recipe.id]: false }
                                        ))}, 1000)
                                    }}
                                    className={`
                                        inline-flex self-end items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium text-white
                                        transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer
                                        ${added[recipe.id] ? "bg-green-600 scale-105" : "bg-blue-600 hover:gap-2 hover:scale-105"}
    `}
                                >
                                    {added[recipe.id] ? (
                                        <>
                                        <Check className="h-3 w-3" />
                                        Added
                                        </>
                                    ) : (
                                        <>
                                        <Plus className="h-3 w-3" />
                                        Add
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <Link
                        to="/menu"
                        className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition duration-200"
                    >
                        View Full Menu
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default MenuPreview
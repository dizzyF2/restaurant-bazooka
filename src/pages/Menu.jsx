import { useEffect, useState } from "react";
import Categories from "../components/Categories";
import RecipesList from "../components/RecipesList";
import { useNavigate, useLocation } from "react-router-dom"
import { Loader2 } from "lucide-react";


function Menu() {
    const navigate = useNavigate();
    const location = useLocation()

    const [recipes, setRecipes] = useState([])
    const [filtered, setFiltered] = useState([])
    const [categories, setCategories] = useState([])
    const [selected, setSelected] = useState(null)
    const [loading, setLoading] = useState(true)

    const query = new URLSearchParams(location.search).get("q")

    useEffect(() => {
        const fetchRecipes = async () => {
        setLoading(true)
        try {
            const res = query
            ? await fetch(`https://dummyjson.com/recipes/search?q=${query}`)
            : await fetch(`https://dummyjson.com/recipes`)
            const data = await res.json()
            
            setRecipes(data.recipes || [])

            const cuisines = [...new Set(data.recipes.map(recipe => recipe.cuisine))]
            setCategories(cuisines)
        } catch (err) {
            console.error("Error fetching recipes:", err)
        } finally {
            setLoading(false)
        }
        }

        fetchRecipes()
    }, [query])

    useEffect(() => {
        if (selected) {
        setFiltered(recipes.filter(r => r.cuisine === selected))
        } else {
        setFiltered(recipes)
        }
    }, [selected, recipes])


    const handleResetFilter = async () => {
        setLoading(true);
        try {
            navigate("/menu", { replace: true });

            const res = await fetch(`https://dummyjson.com/recipes`);
            const data = await res.json();
            setRecipes(data.recipes || []);
            setSelected(null);
        } catch (err) {
            console.error("Error refetching all recipes:", err);
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <div className="text-white flex flex-col justify-center gap-16">
            <div className="absolute top-0 h-[100vh] w-full opacity-10 z-0">
                <img src="/images/menu-bg.png" alt="menu background image" className="object-cover size-full" />
            </div>
            <div className="z-10 mt-16 flex flex-col gap-24 items-center justify-center ">
                <div className="mt-20 md:w-1/2 self-start flex flex-col items-start gap-5 h-auto pl-20 md:pl-32">
                    <h2 className="text-4xl md:text-6xl font-bold">
                        <span className="text-primary">Full</span> menu
                    </h2>
                    <p className="text-gray-300 w-72 md:w-96">
                        Discover our delicious menu featuring a wide selection of sandwiches, snacks, drinks and more.
                    </p>
                </div>
                <Categories categories={categories} onSelect={setSelected} onReset={handleResetFilter}  />
                {loading && 
                    <div className="flex items-center justify-center gap-2 text-primary text-4xl text-center">
                        <Loader2 size={25} className="animate-spin"/> Loading...
                    </div>
                }
                <RecipesList recipes={filtered} />
            </div>
        </div>
    )
}

export default Menu
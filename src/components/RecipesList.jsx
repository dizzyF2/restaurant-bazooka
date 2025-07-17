import ProductCard from "./ProductCard";

function RecipesList({ recipes }) {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-5">
            {recipes.map(recipe => (
                <ProductCard
                    key={recipe.id}
                    image={recipe.image}
                    title={recipe.name}
                    description={recipe.instructions.slice(0, 100) + "..."}
                    price={(recipe.caloriesPerServing / 10).toFixed(2)}
                    category={recipe.cuisine}
                />
            ))}
        </div>
    );
}

export default RecipesList;
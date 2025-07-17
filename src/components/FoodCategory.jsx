

const foodItems = [
    {
        id: 1,
        image: "/images/categories/burger.png",
        label: 'Save 30% Fast Food Dish',
        highlight: true,
    },
    {
        id: 2,
        image: "/images/categories/donuts.png",
    },
    {
        id: 3,
        image: "/images/categories/ramen.png",
    },
    {
        id: 4,
        image: "/images/categories/sushi.png",
    },
];

function FoodCategory(){
    return (
        <div className="bg-black text-white py-16 px-6 md:px-20 text-center relative">
            <p className="text-primary italic mb-2">Food Category</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-10">
                <span className="text-yellow-500">Choose</span> Food Item
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-center items-center">
                {foodItems.map((item) => (
                <div key={item.id} className="relative rounded-lg overflow-hidden shadow-lg group cursor-pointer">
                    <img
                    src={item.image}
                    alt={`food-${item.id}`}
                    loading="lazy"
                    className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
                    />

                    {item.highlight && (
                    <div className="absolute top-4 left-4 bg-yellow-400 text-black font-semibold px-3 py-1 text-sm rounded">
                        {item.label}
                    </div>
                    )}
                </div>
                ))}
            </div>
        </div>
    );
};

export default FoodCategory
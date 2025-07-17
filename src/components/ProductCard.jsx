import { Heart, Plus } from "lucide-react"


function ProductCard({image, title, description, price, category}) {

    return (
        <div className="group relative w-full max-w-[300px] flex flex-col items-start justify-between overflow-hidden rounded-lg bg-white transition-all duration-300 border border-gray-200">
            <div className="relative size-full aspect-[4/3] overflow-hidden">
                <img
                    src={image}
                    alt="product image"
                    className="absolute object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <button
                    className="absolute top-2 right-2 z-10 rounded-full bg-white/90 p-1.5 text-black hover:text-red-500 transition-all duration-200 hover:bg-white hover:scale-110 cursor-pointer"
                >
                    <Heart
                        className={`h-3 w-3 transition-colors duration-200 `}
                    />
                </button>


                <div className="absolute top-2 left-2 rounded-full bg-black/80 px-2 py-0.5 text-xs font-medium text-white">
                    {category}
                </div>
            </div>

            <div className="flex flex-col gap-2 p-3">
                <h3 className="font-semibold text-base leading-tight text-gray-900 line-clamp-1">
                    {title}
                </h3>

                <p className="text-xs text-gray-600 line-clamp-2 leading-relaxed">
                    {description}
                </p>
            </div>

            <div className="flex items-center justify-between w-full px-2 py-1">
                <div className="flex items-baseline gap-1">
                    <span className="text-lg font-bold text-gray-900">
                        {price}
                    </span>
                </div>

                <button
                    className={`
                    inline-flex items-center gap-1 rounded-md px-3 py-1.5 text-xs font-medium text-white
                    transition-all duration-200 hover:gap-2 focus:outline-none bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 cursor-pointer`}
                >
                    <Plus className="h-3 w-3" />
                    add
                </button>
            </div>
        </div>
    )
}

export default ProductCard
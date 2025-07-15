import { Hamburger, Sandwich, Wine } from "lucide-react";

const foodItems = [
    {
        id: 1,
        image: "/images/showcase/food1.png",
    },
    {
        id: 2,
        image: "/images/showcase/food2.png",
    },
    {
        id: 3,
        image: "/images/showcase/food3.png",
    },
    {
        id: 4,
        image: "/images/showcase/food4.png",
    },
    {
        id: 5,
        image: "/images/showcase/food5.png",
    },
    {
        id: 6,
        image: "/images/showcase/food6.png",
    },
];

function ShowCase() {
    return (
        <div className="bg-black text-white px-6 md:px-20 py-16 flex flex-col-reverse md:flex-row gap-12">
            <div className="grid grid-cols-2 gap-4 flex-1">
                {foodItems.map((item) => (
                    <img
                        key={item.id}
                        src={item.image}
                        alt={`food${item.id}`}
                        className="rounded-lg object-cover size-auto"
                    />
                ))}
            </div>

            <div className="flex-1 space-y-6">
                <p className="text-yellow-400 italic">Why Choose us</p>
                <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-yellow-500">Exta</span> ordinary taste<br />
                <span className="text-white">And Experienced</span>
                </h2>
                <p className="text-gray-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vulputate feugiat pretium donec id elementum.
                </p>

                <div className="flex gap-6">
                <div className="bg-yellow-500 text-black px-4 py-3 rounded-lg flex flex-col items-center">
                    <Hamburger className="text-xl mb-1" />
                    <span className="text-sm">Fast Food</span>
                </div>
                <div className="bg-yellow-500 text-black px-4 py-3 rounded-lg flex flex-col items-center">
                    <Sandwich className="text-xl mb-1" />
                    <span className="text-sm">Lunch</span>
                </div>
                <div className="bg-yellow-500 text-black px-4 py-3 rounded-lg flex flex-col items-center">
                    <Wine className="text-xl mb-1" />
                    <span className="text-sm">Dinner</span>
                </div>
                </div>

                <div className="flex items-center justify-center gap-5 bg-white rounded-r-lg border-l-8 border-primary w-fit px-5">
                    <span className="text-yellow-500 text-3xl font-bold px-5 py-3">
                        30+
                    </span>
                    <div className="flex flex-col text-sm">
                        <p className="text-gray-500">Years of</p>
                        <p className="font-bold text-black">Experienced</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowCase
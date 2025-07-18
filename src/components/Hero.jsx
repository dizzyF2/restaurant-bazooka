import { Link } from "react-router-dom";


function Hero() {
    return (
        <div className="bg-black text-white flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 relative overflow-hidden">
            <div className="md:w-1/2 space-y-6 z-10">
                <h4 className="text-primary italic font-semibold text-lg">It`s Quick & Amusing!</h4>
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-yellow-500">The</span> Art of speed<br />
                food <span className="text-white">Quality</span>
                </h1>
                <p className="text-gray-300 max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue.
                </p>
                <Link to={"/menu"} className="bg-primary text-black font-semibold px-6 py-3 rounded-full hover:bg-yellow-700 transition cursor-pointer">
                    See Menu
                </Link>
            </div>

            <div className="relative mt-10 md:mt-0 md:w-1/2 flex justify-center items-center bg-black">
                <img
                    src="/images/hero-origin.jpg"
                    alt="Hero Food"
                    loading="lazy"
                    className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full object-cover z-10 bg-inherit"
                />
            </div>
        </div>
    );
};


export default Hero
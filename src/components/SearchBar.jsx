import { Search } from "lucide-react"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"


function SearchBar() {
    const [query, setQuery] = useState("")
    const navigate = useNavigate()
    const inputRef = useRef(null);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!query.trim()) return

        navigate(`/menu?q=${encodeURIComponent(query.trim())}`)
        setQuery("")
    }


    window.addEventListener("resize", () => {
        setIsMobile(window.innerWidth < 768);
    });

    const handleIconClick = () => {
        if (isMobile) {
        inputRef.current?.focus();
        }
    };

    return (
        <form onSubmit={handleSearch} className="flex items-center">
            <div className="group relative flex items-center justify-between py-2 px-3 outline-none border border-transparent focus-within:border-primary bg-black rounded-full transition-all duration-300 ease-in-out w-10 focus-within:w-64 md:w-32 md:border-primary lg:w-fit">
                <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="bg-inherit w-0 opacity-0 focus:w-full focus:opacity-100 focus:ml-2 md:w-[90%] md:opacity-100 md:ml-0 border-none outline-none placeholder:text-white text-white transition-all duration-300 ease-in-out"
                />
                <button
                    type="submit"
                    onClick={handleIconClick}
                    className="size-fit flex-shrink-0 border-none outline-none"
                >
                    <Search
                        size={20}
                        className="text-white hover:text-primary md:hover:text-white cursor-pointer border-none outline-none transition-colors duration-200"
                    />
                </button>
            </div>
        </form>
    )
}

export default SearchBar
import { Search } from "lucide-react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"


function SearchBar() {
    const [query, setQuery] = useState("")
    const navigate = useNavigate()

    const handleSearch = async (e) => {
        e.preventDefault()
        if (!query.trim()) return

        navigate(`/menu?q=${encodeURIComponent(query.trim())}`)
        setQuery("")
    }

    return (
    <form onSubmit={handleSearch} className="flex items-center">
        <div className="flex items-center justify-between md:w-32 lg:w-fit py-2 px-3 outline-none md:border border-primary bg-black rounded-full">
            <input 
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="hidden md:block w-[90%] border-none outline-none bg-inherit placeholder:text-white"
            />
            <button type="submit" className="size-fit">
                <Search size={20} className="rounded-full text-white hover:text-primary md:hover:text-white cursor-pointer"/>
            </button>
        </div>
    </form>
    )
}

export default SearchBar
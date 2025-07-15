import { Search } from "lucide-react"


function SearchBar() {
    return (
    <div className="flex items-center justify-between md:w-32 lg:w-fit py-2 px-3 outline-none md:border border-primary bg-black rounded-full">
        <input 
            type="text"
            placeholder="Search..."
            className="hidden md:block w-[90%] border-none outline-none bg-inherit placeholder:text-white"
        />
        <Search color="white" size={20} className="cursor-pointer"/>
    </div>
    )
}

export default SearchBar
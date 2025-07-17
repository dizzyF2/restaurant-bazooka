

function Categories({ categories, onSelect, onReset }) {


    return (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 text-black mx-5">
            <button 
                onClick={() => {
                    onSelect(null);
                    onReset()
                }} 
                className="bg-gray-300 px-3 py-1 rounded cursor-pointer"
            >
                All
            </button>
            {categories.map(cat => (
                <button key={cat} onClick={() => onSelect(cat)} className="bg-yellow-400 hover:bg-primary px-3 py-1 rounded cursor-pointer">
                {cat}
                </button>
            ))}
        </div>
    );
}

export default Categories
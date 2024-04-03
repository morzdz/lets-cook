import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

// Ensure that handleReset is being called properly
const SearchBar = ({ handleChange, searchTerm }) => {

    return (
            <label className="relative block grow">
                <span className="sr-only">Search</span>
                <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-theme1-main">
                    <MagnifyingGlassIcon className="w-4"/>
                </span>
                <input 
                    className="placeholder:italic placeholder:text-theme1-main block bg-white w-full border border-theme1-main rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-theme1-main focus:ring-theme1-main focus:ring-1 sm:text-sm" 
                    placeholder="Search for anything..." 
                    type="search" 
                    name="search" 
                    value={searchTerm} 
                    onChange={handleChange}
                />
            </label>
    );
}

export default SearchBar;

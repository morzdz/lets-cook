import { useState } from 'react';
import data from '../../data/recettes.json';
import 'tailwindcss/tailwind.css';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredRecipe, setFilteredRecipe] = useState([]);

    const handleSearch = (term) => {
        // Vérification si le terme de recherche est vide
        if (!term.trim()) {
            setFilteredRecipe([]);
            return;
        }

        // Filtrage des recettes en fonction du titre et mise à jour de l'état filteredRecipe
        const filteredList = data.filter((recipe) => recipe.category.toLowerCase().includes(term.toLowerCase()));
        setFilteredRecipe(filteredList);
        console.log(filteredRecipe);
    }

    const handleChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term); // Mise à jour du terme de recherche
        handleSearch(term); // Appel de la fonction de recherche avec le nouveau terme
    }

    return (
        <label className="relative block">
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
    )
}

export default SearchBar;

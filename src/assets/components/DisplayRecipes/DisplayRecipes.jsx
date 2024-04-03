import { useState } from 'react';
import Card from "../Card/Card"
import SearchBar from "../SearchBar/SearchBar"
import FavButton from '../FavButton/FavButton';
import Reset from '../Reset/Reset';
import data from '../../data/recettes.json';
import 'tailwindcss/tailwind.css';

const DisplayRecipes = () => {

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

    const handleReset = () => {
        console.log("Reset button clicked");
        setSearchTerm(""); // Update the searchTerm state in the parent component
    };

    return (
        <>
            <div className="bg-white py-12 sm:py-12">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="my-4 text-6xl text-theme1-main">Let's Cook</h2>
                        <div className="flex items-center gap-4 mt-8 mb-2">
                        <SearchBar handleChange={handleChange} handleSearch={handleSearch} searchTerm={searchTerm}/>
                        <FavButton />
                        <Reset handleReset={handleReset}/>
                        </div>
                    </div>
                    <div>
                        {searchTerm === "" ? (
                            <h2 className="my-4 text-2xl">Toutes les recettes</h2>
                        ) : (
                            <h2 className="my-4 text-2xl">Search results for : {searchTerm}</h2>
                        )}
                    </div>
                    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {filteredRecipe.length > 0 && searchTerm.length > 0 ? (
                            // Affichage des recettes filtrées
                            filteredRecipe.map((post) => (
                                <Card 
                                    key={post.id} 
                                    id={post.id} 
                                    image={post.imageUrl}
                                    title={post.title}
                                    author={post.author}
                                    date={post.date}
                                    difficulty={post.difficulty}
                                    category={post.category}
                                    description={post.description}
                                />
                            ))
                        ) : (
                            // Affichage de toutes les recettes
                            data.map((post) => (
                                <Card 
                                    key={post.id} 
                                    id={post.id} 
                                    image={post.imageUrl}
                                    title={post.title}
                                    author={post.author}
                                    date={post.date}
                                    difficulty={post.difficulty}
                                    category={post.category}
                                    description={post.description}
                                />
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    )
    
}

export default DisplayRecipes
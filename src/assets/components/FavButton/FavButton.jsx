import { HeartIcon } from '@heroicons/react/24/solid';

const FavButton = ({ setShowFavorites, showFavorites }) => {
    const openFav = () => {
        setShowFavorites(!showFavorites); // Inverser l'état showFavorites lorsque le bouton est cliqué
        // Vous pouvez appeler la fonction handleAddToFav ici si nécessaire
    };

    return (
        <button
            className="text-center px-4 py-2 font-semibold border border-theme1-main rounded-md text-gray-400 hover:text-gray-600 transition-colors duration-300"
            onClick={openFav}
        >
            <HeartIcon className="w-6 h-6" />
        </button>
    );
};

export default FavButton;

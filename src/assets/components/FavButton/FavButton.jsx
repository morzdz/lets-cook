import { HeartIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

const FavButton = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <button
            className={`text-center px-4 py-2 font-semibold border border-theme1-main rounded-md ${isClicked ? 'text-red-500 transition-colors duration-300' : 'text-gray-400 hover:text-gray-600 transition-colors duration-300'}`}
            onClick={handleClick}
        >
            <HeartIcon className="w-6 h-6" />
        </button>
    );
};

export default FavButton;

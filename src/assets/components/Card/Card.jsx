import data from '../../data/recettes.json';
import { TagIcon, StarIcon } from '@heroicons/react/24/solid'

const Card = ({ id, image, title, author, date, difficulty, category, description  }) => {

    console.log(data);
    function DisplayStar(difficulty) {
        let stars = [];
        for (let i = 0; i < difficulty; i++) {
            stars.push(<StarIcon key={i} className="w-4 h-4 text-yellow-500" />);
        }
        return stars;
    }

    return (
        <article key={id} className="flex max-w-xl flex-col items-start justify-between shadow-lg rounded-lg">
            <img src={image} alt={title} className="rounded-t-lg"/>
            <div className="mx-6 mb-4">
                <div className="relative mt-4 flex items-center gap-x-4">
                    <img src="src\assets\images\user-icon-palecholder.jpg" alt={author} className="h-10 w-10 rounded-full bg-gray-50" />
                    <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                        <span className="absolute inset-0" />
                        {author}
                    </p>
                    </div>
                </div>
                <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={date} className="text-gray-500">
                    {date}
                    </time>
                    <span className="flex">{DisplayStar(difficulty)}</span>
                    
                    <a
                    href={category}
                    className="flex items-center relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-white bg-theme1-main"
                    >
                    <TagIcon className="w-6 mx-1"/>
                    {category}
                    </a>
                    
                </div>
                <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6  text-theme1-green">
                    <a href={title}>
                        <span className="absolute inset-0" />
                        {title}
                    </a>
                    </h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">{description}</p>
                </div>
                <div className="mt-4 text-right w-full text-theme1-green hover:underline underline-offset-4">
                    <a href={title}>
                        <span>
                            En savoir plus
                        </span>
                    </a>
                </div>
            </div>
        </article>
    )
}

export default Card
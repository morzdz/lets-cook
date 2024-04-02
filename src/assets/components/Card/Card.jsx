import data from '../../data/recettes.json';
import 'tailwindcss/tailwind.css';
import { TagIcon, StarIcon } from '@heroicons/react/24/solid'


const Card = () => {
    console.log(data);
    function DisplayStar(difficulty) {
        let stars = [];
        for (let i = 0; i < difficulty; i++) {
            stars.push(<StarIcon key={i} className="w-4 h-4 text-yellow-500" />);
        }
        return stars;
    }

    return (
        <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-theme1-main sm:text-4xl">Let's Cook</h2>
            </div>
            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {data.map((post) => (
                <article key={post.id} className="flex max-w-xl flex-col items-start justify-between shadow-lg rounded-lg">
                    <img src={post.imageUrl} alt={post.title} className="rounded-t-lg"/>
                    <div className="mx-6 mb-4">
                        <div className="relative mt-4 flex items-center gap-x-4">
                            <img src="src\assets\images\user-icon-palecholder.jpg" alt={post.author} className="h-10 w-10 rounded-full bg-gray-50" />
                            <div className="text-sm leading-6">
                            <p className="font-semibold text-gray-900">
                                <span className="absolute inset-0" />
                                {post.author}
                            </p>
                            </div>
                        </div>
                        <div className="flex items-center gap-x-4 text-xs">
                            <time dateTime={post.datetime} className="text-gray-500">
                            {post.date}
                            </time>
                            <span className="flex">{DisplayStar(post.difficulty)}</span>
                            
                            <a
                            href={post.category.href}
                            className="flex items-center relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-white bg-theme1-main"
                            >
                            <TagIcon className="w-6 mx-1"/>
                            {post.category}
                            </a>
                            
                        </div>
                        <div className="group relative">
                            <h3 className="mt-3 text-lg font-semibold leading-6  text-theme1-green">
                            <a href={post.href}>
                                <span className="absolute inset-0" />
                                {post.title}
                            </a>
                            </h3>
                            <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                        </div>
                        <div className="mt-4 text-right w-full text-theme1-green hover:underline underline-offset-4">
                            <a href={post.href}>
                                <span>
                                    En savoir plus
                                </span>
                            </a>
                        </div>
                    </div>
                </article>
            ))}
            </div>
        </div>
        </div>
    )
}

export default Card
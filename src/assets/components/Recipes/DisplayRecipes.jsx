import Card from "../Card/Card"
import SearchBar from "../SearchBar/SearchBar"
import data from '../../data/recettes.json';
import 'tailwindcss/tailwind.css';

const DisplayRecipes = () => {
    return (
        <>
            <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-theme1-main sm:text-4xl">Let's Cook</h2>
                    <SearchBar />
                </div>
                <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                {data.map((post) => (
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
                ))}
                </div>
            </div>
        </div>
        </>
    )
}

export default DisplayRecipes
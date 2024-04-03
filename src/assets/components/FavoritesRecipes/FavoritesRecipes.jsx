import Card from '../Card/Card';

const FavoriteRecipes = ({ favorites, addToFav }) => {
    return (
        <>
            {favorites.length === 0 ? (
                <h3 className='text-lg px-1'>No recipes found</h3>
            ) : (
                favorites.map((post) => (
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
                        addToFav={addToFav} // Passer la fonction addToFav comme prop
                        favorites={favorites} // Passer les favoris comme prop
                    />
                ))
            )}
        </>
    );
};

export default FavoriteRecipes;

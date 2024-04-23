import { XMarkIcon } from '@heroicons/react/24/solid'

const Footer = () => {
    console.log('loaded');

    return (
        <>
            <footer>
                <div>
                    <img src="src/assets/images/footer.svg" alt="footer.svg" />
                </div>
                <div className="min-h-80 bg-theme1-main relative">
                    <XMarkIcon className="cursor-pointer absolute top-5 right-5 text-white w-6" />
                    <div className="flex flex-row flex-wrap mx-auto items-center gap-8 py-8 max-w-5xl">
                        <div className="flex-auto w-32 p-4">
                            <img src="src/assets/images/download.jpg" alt="download.jpg" />
                        </div>
                        <div className="flex flex-col flex-auto w-96 text-white gap-4 px-4">
                            <h2 className="text-2xl font-bold">Téléchargez Notre Livre de Recettes Gratuit !</h2>
                            <p>Plongez dans un monde de saveurs avec notre tout nouveau livre de recettes ! Des entrées succulentes aux desserts irrésistibles, découvrez des recettes exclusives qui émerveilleront vos papilles. Que vous soyez un chef expérimenté ou un novice en cuisine, ce livre est votre passeport pour une aventure culinaire inoubliable. Ne manquez pas cette occasion - votre prochain plat préféré vous attend !</p>
                            <button className="cursor-pointer bg-white text-theme1-green font-bold border-none rounded px-4 py-1">Télécharger Maintenant</button>
                        </div>
                    </div>
                </div>
                <div className="text-white bg-theme1-dark text-center p-4">
                    <p>&copy; Copyright 2024 Let's Cook</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
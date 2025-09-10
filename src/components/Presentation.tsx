import Searchbar from "./SearchBar";

export default function Presentation() {
  return (
    <>
      <section className="py-10 font-body px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="titleStyle">
            Tous les concours de palet au même endroit
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed dark:text-placeholder">
            Amateurs, passionnés ou compétiteurs, découvrez facilement les
            tournois de palet près de chez vous. Du tournoi local à la Coupe de
            France, trouvez l’événement qui vous correspond, quel que soit votre
            niveau ou votre type de palet.
          </p>
          <Searchbar />
        </div>
      </section>
    </>
  );
}

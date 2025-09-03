import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <>
      <div className="flex flex-1 justify-center items-center">
        <img src="/img/logo/404.webp" alt="" height={64} />
        <div className="relative flex bg-body flex-col items-center justify-center gap-12 min-h-screen overflow-hidden px-4 text-center">
          <h1 className="text-9xl font-extrabold mb-4 text-primary font-title">
            404
          </h1>
          <h2 className="text-4xl font-semibold mb-6 text-primary">
            Oups ! Les palets se sont échappés...
          </h2>
          <p className="text-lg mb-6 max-w-md text-primary">
            Les palets ont décidé de faire un petit tour hors de la plaque ! Pas
            de panique, vous pouvez toujours revenir dans le jeu. 😄
          </p>
          <Link
            to="/"
            className="z-10 inline-block px-6 py-3 rounded-full font-semibold shadow hover:opacity-90 transition mb-10"
            style={{ backgroundColor: "#1b2a49", color: "#f2f2f2" }}
          >
            Revenir à l'accueil
          </Link>
        </div>
        <img src="/img/logo/404.webp" alt="" height={64} />
      </div>
    </>
  );
}

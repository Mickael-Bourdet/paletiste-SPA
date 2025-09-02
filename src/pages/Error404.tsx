export default function Error404() {
  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden px-4 text-center"
      style={{ backgroundColor: "#f2f2f2" }} // body
    >
      {/* Texte principal */}
      <h1 className="text-6xl font-extrabold mb-4" style={{ color: "#1b2a49" }}>
        404
      </h1>
      <h2 className="text-2xl font-semibold mb-6" style={{ color: "#1b2a49" }}>
        Oups ! Les palets se sont échappés...
      </h2>
      <p className="text-gray-700 mb-6 max-w-md" style={{ color: "#1b2a49" }}>
        Les palets vendéens ont décidé de faire un petit tour hors du terrain !
        Pas de panique, vous pouvez toujours revenir dans le jeu. 😄
      </p>

      {/* Bouton de retour */}
      <a
        href="/"
        className="z-10 inline-block px-6 py-3 rounded-full font-semibold shadow hover:opacity-90 transition mb-10"
        style={{ backgroundColor: "#1b2a49", color: "#f2f2f2" }}
      >
        Revenir à l'accueil
      </a>

      {/* Palets animés */}
      {[...Array(7)].map((_, i) => (
        <div
          key={i}
          className="absolute w-12 h-12 rounded-full shadow-lg animate-bounce-palets"
          style={{
            backgroundColor: "#1b2a49",
            left: `${Math.random() * 90}%`,
            top: `${Math.random() * 80}%`,
            animationDelay: `${i * 0.2}s`,
            animationDuration: `${1.5 + Math.random()}s`,
          }}
        />
      ))}

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes bounce-palets {
          0% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(30px, -40px) rotate(90deg);
          }
          50% {
            transform: translate(-20px, 30px) rotate(180deg);
          }
          75% {
            transform: translate(40px, 20px) rotate(270deg);
          }
          100% {
            transform: translate(0, 0) rotate(360deg);
          }
        }
        .animate-bounce-palets {
          animation: bounce-palets 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}

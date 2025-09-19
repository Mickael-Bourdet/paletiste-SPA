export default function LegalNotice() {
  return (
    <section className="wrapper py-10">
      <div className="bodyWrapper max-w-4xl">
        <h1 className="titleStyle">Mentions légales</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <h2>Éditeur</h2>
          <p>Paletiste – Contact: contact@paletiste.fr</p>
          <h2>Hébergement</h2>
          <p>Hébergé en Europe. Détails disponibles sur demande.</p>
          <h2>Propriété intellectuelle</h2>
          <p>
            Les contenus et marques cités appartiennent à leurs propriétaires
            respectifs.
          </p>
        </div>
      </div>
    </section>
  );
}

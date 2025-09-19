export default function PrivacyPolicy() {
  return (
    <section className="wrapper py-10">
      <div className="bodyWrapper max-w-4xl">
        <h1 className="titleStyle">Politique de confidentialité</h1>
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p>
            Nous accordons une grande importance à la protection de vos données.
            Cette page décrit quelles informations nous collectons, pourquoi, et
            comment nous les protégeons.
          </p>
          <h2>Données collectées</h2>
          <ul>
            <li>Données de compte (nom, e‑mail, paramètres)</li>
            <li>Données de navigation (pages visitées, préférences)</li>
          </ul>
          <h2>Utilisation</h2>
          <p>
            Fournir le service, améliorer l’expérience et assurer la sécurité.
          </p>
          <h2>Conservation</h2>
          <p>
            Nous conservons les données le temps nécessaire aux finalités
            ci‑dessus.
          </p>
          <h2>Vos droits</h2>
          <p>
            Accès, rectification, suppression et opposition: contactez{" "}
            <a href="mailto:contact@paletiste.fr">contact@paletiste.fr</a>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Contact() {
  return (
    <section className="wrapper py-10">
      <div className="bodyWrapper max-w-3xl">
        <h1 className="titleStyle">Contact</h1>
        <p className="text-slate-700 dark:text-slate-200 mb-6">
          Une question, une suggestion ou un partenariat ? Écrivez-nous.
        </p>
        <div className="space-y-3 text-slate-700 dark:text-slate-200">
          <p>
            Email:{" "}
            <a className="underline-link" href="mailto:contact@paletiste.fr">
              contact@paletiste.fr
            </a>
          </p>
          <p>Réponse sous 48h ouvrées en moyenne.</p>
        </div>
      </div>
    </section>
  );
}

export default function DisplayCalendar() {
  const months = [
    { name: "Janvier" },
    { name: "Février" },
    { name: "Mars" },
    { name: "Avril" },
    { name: "Mai" },
    { name: "Juin" },
    { name: "Juillet" },
    { name: "Août" },
    { name: "Septembre" },
    { name: "Octobre" },
    { name: "Novembre" },
    { name: "Décembre" },
  ];

  const date = new Date();
  console.log(date);

  return (
    <>
      <section className="wrapper py-10">
        <h2 className="text-3xl mb-6 font-title text-center md:text-left md:pl-6 mdl:pl-14 xlg:pl-10 2xl:pl-0">
          Les concours par mois
        </h2>
        <div className="mt-2">
          <div className="grid grid-cols-1 xxs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6 w-full max-w-8xl mx-auto pl-1 xxs:px-2 sm:px-6 md:px-10 mdl:px-20 xlg:px-16 xl:px-10 2xl:px-4">
            {months.map((month) => (
              <div
                key={month.name}
                className="border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/60 
                rounded-xl flex flex-col items-center justify-center w-full sm:w-40 md:w-full 2xl:w-50 min-h-[110px] py-6 
                shadow-sm dark:shadow-[#2c2f42] hover:shadow-md transition-shadow duration-200"
              >
                <p className="font-subtitle font-bold text-xl text-primary dark:text-primary mb-1">
                  {month.name}
                </p>
                <p className="font-subtitle text-sm text-Fonte dark:text-primary">
                  {Math.floor(Math.random() * 30)} Concours
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

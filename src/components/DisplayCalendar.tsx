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

  /* const date = new Date();
  console.log(date); */

  return (
    <>
      <section className="wrapper py-8">
        <h2 className="titleStyle">Les concours par mois</h2>
        <div className="mt-2">
          <div className="bodyWrapper grid grid-cols-1 xxs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
            {months.map((month) => (
              <div
                key={month.name}
                className="border-2 border-slate-300/40 dark:border-slate-600/40 
           bg-body-second/80 dark:bg-sideMenu/10 
           rounded-2xl flex flex-col items-center justify-center w-full sm:w-40 md:w-full 2xl:w-50 
           min-h-[130px] py-6
           shadow-lg dark:shadow-[0_8px_24px_rgba(0,0,0,0.6)] backdrop-blur-sm hover:cursor-pointer transition-all duration-300
           hover:shadow-lg hover:shadow-royal/30 hover:scale-[1.1]"
              >
                <p className="font-subtitle font-bold text-xl md:text-2xl text-primary dark:text-primary mb-4">
                  {month.name}
                </p>
                <p className="font-subtitle text-sm md:text-base text-Fonte dark:text-primary">
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

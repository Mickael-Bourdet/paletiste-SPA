import { Link } from "react-router-dom";

export default function DisplayCategories() {
  const categories = [
    {
      name: "Fonte",
      slug: "fonte",
      count: 406,
      image: "/img/categories/fonte.jpg",
    },
    {
      name: "Laiton",
      slug: "laiton",
      count: 31,
      image: "/img/categories/laiton.jpg",
    },
    {
      name: "Bois",
      slug: "bois",
      count: 23,
      image: "/img/categories/bois.webp",
    },
    {
      name: "Terre",
      slug: "terre",
      count: 17,
      image: "/img/categories/terre.webp",
    },
    {
      name: "Multi",
      slug: "multi",
      count: 3,
      image: "/img/categories/terre.webp",
    },
  ];

  const cardClassName =
    "relative h-50 rounded-xl overflow-hidden block focus:outline-none focus-visible:ring-2 focus-visible:ring-royal/30 " +
    "transition-all duration-500 ease-in-out " +
    "hover:scale-105 hover:rotate-2 hover:shadow-[0_8px_32px_0_rgba(58,95,205,0.25)] " +
    "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-gradient-to-t hover:after:from-royal/40 hover:after:to-transparent hover:after:transition-opacity hover:after:duration-500 hover:after:opacity-100";

  return (
    <section className="wrapper py-8">
      <h2 className="titleStyle">Les concours par catégories</h2>
      <div className="mt-2">
        <div className="bodyWrapper flex flex-wrap justify-around">
          {categories.map((category) => (
            <div
              key={category.slug}
              className="basis-[90%] md:basis-[48%] lg:basis-[31%]  xl:[flex-basis:18%]"
            >
              <Link
                to={`/concours?category=${category.name}`}
                className={cardClassName}
              >
                <img
                  src={category.image}
                  alt=""
                  role="presentation"
                  className="absolute inset-0 w-full h-full object-cover brightness-50"
                />
                <div className="absolute inset-0 flex flex-col gap-3 items-center justify-center">
                  <p className="text-body dark:text-primary font-extrabold text-2xl md:text-3xl text-center drop-shadow-lg px-2">
                    {category.name}
                  </p>
                  <p className="text-body dark:text-primary font-extrabold text-base md:text-xl text-center drop-shadow-lg px-2">
                    {category.count} concours
                  </p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
    "relative h-50 rounded-xl overflow-hidden block focus:outline-none focus-visible:ring-2 focus-visible:ring-royal/30";

  return (
    <section className="wrapper py-10">
      <h2 className="titleStyle">Les concours par catégories</h2>
      <div className="mt-2">
        <div className="flex flex-wrap justify-center gap-4 md:gap-6 w-full max-w-6xl mx-auto px-4 md:px-6">
          {categories.map((category) => (
            <div
              key={category.slug}
              className="basis-full xxs:basis-1/2 sm:basis-1/3 lg:basis-1/4 xl:[flex-basis:20%]"
            >
              <Link
                to={`/events?category=${category.slug}`}
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

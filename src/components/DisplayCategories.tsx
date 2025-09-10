import { Link } from "react-router-dom";

export default function DisplayCategories() {
  return (
    <div className="wrapper py-10">
      <h2 className="text-3xl mb-6 font-title text-center md:text-left md:pl-6 mdl:pl-14 xlg:pl-10 2xl:pl-0">
        Les concours par catégories
      </h2>
      <ul className="flex flex-col md:flex-row justify-between items-baseline flex-wrap gap-6">
        <li className="relative max-w-xs w-90 mx-auto">
          <Link to="/events?category=fonte">
            <div className="h-50 relative">
              <img
                src={`/img/categories/fonte.jpg`}
                alt=""
                role="presentation"
                className="rounded-xl brightness-50 w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-10">
                <p className="text-body dark:text-primary font-extrabold text-3xl text-center drop-shadow-lg px-2">
                  {" "}
                  Fonte
                </p>
                <p className="text-body dark:text-primary font-extrabold text-xl text-center drop-shadow-lg px-2">
                  {" "}
                  406 concours
                </p>
              </div>
            </div>
          </Link>
        </li>
        <li className="relative max-w-xs w-90 mx-auto">
          <Link to="/categories/laiton">
            <div className="h-50 relative">
              <img
                src={`/img/categories/laiton.jpg`}
                alt=""
                role="presentation"
                className="rounded-2xl brightness-50 w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 flex flex-col gap-10 items-center justify-center">
                <p className="text-body dark:text-primary font-extrabold text-3xl text-center drop-shadow-lg px-2">
                  {" "}
                  Laiton
                </p>
                <p className="text-body dark:text-primary font-extrabold text-xl text-center drop-shadow-lg px-2">
                  {" "}
                  31 concours
                </p>
              </div>
            </div>
          </Link>
        </li>
        <li className="relative max-w-xs w-90 mx-auto">
          <Link to="/categories/bois">
            <div className="h-50 relative">
              <img
                src={`/img/categories/bois.webp`}
                alt=""
                role="presentation"
                className="rounded-2xl brightness-50 w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 flex flex-col gap-10 items-center justify-center">
                <p className="text-body dark:text-primary font-extrabold text-3xl text-center drop-shadow-lg px-2">
                  {" "}
                  Bois
                </p>
                <p className="text-body dark:text-primary font-extrabold text-xl text-center drop-shadow-lg px-2">
                  {" "}
                  23 concours
                </p>
              </div>
            </div>
          </Link>
        </li>
        <li className="relative max-w-xs w-90 mx-auto">
          <Link to="categories/terre">
            <div className="h-50 relative">
              <img
                src={`/img/categories/terre.webp`}
                alt=""
                role="presentation"
                className="rounded-2xl brightness-50 w-full h-full object-cover absolute inset-0"
              />
              <div className="absolute inset-0 flex flex-col gap-10 items-center justify-center">
                <p className="text-body dark:text-primary font-extrabold text-3xl text-center drop-shadow-lg px-2">
                  {" "}
                  Terre
                </p>
                <p className="text-body dark:text-primary font-extrabold text-xl text-center drop-shadow-lg px-2">
                  {" "}
                  17 concours
                </p>
              </div>
            </div>
          </Link>
        </li>
        <li className="relative max-w-xs w-90 mx-auto">
          <div className="h-50 relative">
            <img
              src={`/img/categories/terre.webp`}
              alt=""
              role="presentation"
              className="rounded-2xl brightness-50 w-full h-full object-cover absolute inset-0"
            />
            <div className="absolute inset-0 flex flex-col gap-10 items-center justify-center">
              <p className="text-body dark:text-primary font-extrabold text-3xl text-center drop-shadow-lg px-2">
                {" "}
                Multi
              </p>
              <p className="text-body dark:text-primary font-extrabold text-xl text-center drop-shadow-lg px-2">
                {" "}
                3 concours
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

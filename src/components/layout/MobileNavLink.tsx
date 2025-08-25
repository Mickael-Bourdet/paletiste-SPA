import { Link, useLocation } from "react-router-dom";

interface INavLinkProps {
  linkTo: string;
  icon: string;
  label: string;
}

export default function MobileNavLink({ linkTo, icon, label }: INavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === linkTo;

  return (
    <div className="md:hidden">
      <Link
        to={linkTo}
        className={`flex flex-col items-center text-sm  ${
          isActive ? "text-hover" : ""
        }`}
      >
        <i className={`${icon}`}></i>
        <span className="whitespace-nowrap">{label}</span>
      </Link>
    </div>
  );
}

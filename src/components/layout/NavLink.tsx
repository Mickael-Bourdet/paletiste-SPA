import { Link, useLocation } from "react-router-dom";

interface INavLinkProps {
  linkTo: string;
  label: string;
  ariaLabel?: string;
}
export default function NavLink({ linkTo, label, ariaLabel }: INavLinkProps) {
  const location = useLocation();
  const isActive = location.pathname === linkTo;
  return (
    <>
      <Link
        to={linkTo}
        aria-label={ariaLabel || label}
        className={`flex flex-col items-center text-lg font-subtitle ${
          isActive ? "text-hover" : ""
        }`}
      >
        <span className="whitespace-nowrap">{label}</span>
      </Link>
    </>
  );
}

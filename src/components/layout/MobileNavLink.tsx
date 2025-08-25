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
    <Link
      to={linkTo}
      className={`flex flex-col items-center text-xl  ${
        isActive ? "text-hover" : ""
      }`}
    >
      <i className={`${icon}`}></i>
      <span className="whitespace-nowrap text-sm">{label}</span>
    </Link>
  );
}

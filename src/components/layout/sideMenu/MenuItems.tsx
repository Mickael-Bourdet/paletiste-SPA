import { NavLink } from "react-router-dom";

interface IMenuItemsProps {
  items: IMenuItem[];
  onItemClick?: () => void;
}
interface IMenuItem {
  label: string;
  link: string;
}
export default function MenuItems({ items, onItemClick }: IMenuItemsProps) {
  return (
    <ul className="text-left py-2 px-6">
      {items.map((item, index) => (
        <li key={index} className="mb-1">
          <NavLink
            to={item.link}
            className="block w-full py-1"
            onClick={onItemClick}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

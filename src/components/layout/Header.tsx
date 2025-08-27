import { useThemeMode } from "../../utils/useThemeMode";

export default function Header() {
  const { theme } = useThemeMode();
  return (
    <div className="py-4 px-10">
      <div className="flex justify-center items-center mx-auto">
        <img
          src={
            theme === "dark"
              ? "/img/logo/logo_paletiste_blanc.webp"
              : "/img/logo/logo_paletiste_noir.webp"
          }
          width={64}
          height={64}
          alt=""
        />
        <p className="text-4xl font-title ml-2">Paletiste</p>
      </div>
    </div>
  );
}

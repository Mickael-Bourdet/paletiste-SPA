export default function Header() {
  return (
    <div className="py-4 px-10">
      <div className="flex justify-center items-center mx-auto">
        <img
          src="/img/logo/logo_paletiste_noir.webp"
          width={64}
          height={64}
          alt=""
        />
        <p className="text-4xl font-title ml-2">Paletiste</p>
      </div>
    </div>
  );
}

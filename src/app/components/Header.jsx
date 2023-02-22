import Image from "next/image";

export default function Header() {
  return (
    <div className="flex items-center justify-between max-w-6xl">
      <div>
        <div className="cursor-pointer h-24 w-24 relative hidden lg:inline-grid ">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1600px-Instagram_logo.svg.png?20160616034027"
            className="object-contain"
            alt="logo"
            fill
          />
        </div>
        <div className="cursor-pointer h-24 w-10 relative inline-grid lg:hidden ">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
            className="object-contain"
            alt="logo"
            fill
          />
        </div>
      </div>

      <h1>Right Side</h1>
    </div>
  );
}

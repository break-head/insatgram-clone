import Image from "next/image";
import { HiOutlineSearch } from "react-icons/hi";

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
      <div className="relative mt-1">
        <div className="absolute top-2 left-2">
          <HiOutlineSearch className="h-5" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
        />
      </div>

      <h1>Right Side</h1>
    </div>
  );
}

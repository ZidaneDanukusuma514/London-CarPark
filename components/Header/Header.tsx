import Link from "next/link";
import * as React from "react";

export interface IHeaderProps {
  title?: string;
}

export default function Header({ title = "London info" }: IHeaderProps) {
  return (
    <header className="bg-white z-10 fixed top-0 left-0 right-0 shadow-lg border-b-2 p-4">
      <div className="flex items-center justify-between container mx-auto">
        <h1 className="font-bold text-xl">{title}</h1>
        <ul className="flex space-x-3">
          <li className="font-semibold text-black/60 hover:text-black">
            <Link href={"/"}>home</Link>
          </li>
          <li className="font-semibold text-black/60 hover:text-black">
            <Link href={"/about"}>about</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}

import Header from "@/components/Header/Header";
import * as React from "react";

export interface IAboutProps {}

export default function About(props: IAboutProps) {
  return (
    <main>
      <Header />
      <div className="my-6"></div>
    </main>
  );
}

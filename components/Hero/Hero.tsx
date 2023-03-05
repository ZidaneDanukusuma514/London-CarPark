import * as React from "react";

export interface IHeroProps {}

export default function Hero(props: IHeroProps) {
  return (
    <section>
      <div className="flex items-center justify-center h-screen w-full bg-[url('https://images.unsplash.com/photo-1542317048-7a6ce1a438c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=929&q=80')]  bg-cover bg-center">
        <div>
          <h1 className="text-7xl font-bold text-center text-white">
            Find your parking space
          </h1>
          <p className="pt-4 text-2xl font-semibold text-center text-white">
            Never drive in circles again - find your perfect parking spot with
            us!
          </p>
        </div>
      </div>
    </section>
  );
}

import * as React from "react";

export interface IInfoContainerProps {
  children?: React.ReactNode;
}

export default function InfoContainer({ children }: IInfoContainerProps) {
  return (
    <div className="flex flex-col items-center justify-center w-5/6 mx-auto h-screen">
      {children}
    </div>
  );
}

import * as React from "react";

export interface IMapscontainerProps {
  children?: React.ReactNode;
}

export default function Mapscontainer({ children }: IMapscontainerProps) {
  return (
    <div className="flex flex-col space-y-4 items-center justify-center w-5/6 mx-auto h-screen m-4">
      {children}
    </div>
  );
}

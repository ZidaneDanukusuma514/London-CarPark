import * as React from "react";

export interface IMapscontainerProps {
  children?: React.ReactNode;
}

export default function Mapscontainer({ children }: IMapscontainerProps) {
  return (
    <div className="flex items-center justify-center w-5/6 mx-auto h-screen">
      {children}
    </div>
  );
}

import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full flex justify-center">
      <div className="w-full max-w-[1920px]">{children}</div>
    </div>
  );
}

"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const isMainPage = pathname === "/";

  return (
    <>
      <main id="main" role="main">
        {children}
      </main>
      {!isMainPage && <Footer />}
    </>
  );
};

export default LayoutWrapper; 
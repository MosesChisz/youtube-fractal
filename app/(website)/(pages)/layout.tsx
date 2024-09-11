import { MobileButton } from "@/components/customs/MobileButton";
import Footer from "@/components/modules/footer";
import Header from "@/components/modules/header";
import * as React from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header />
        <MobileButton />
        {children}
        <Footer />
    </>
  );
}

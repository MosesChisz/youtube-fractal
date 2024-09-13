import Footer from "@/components/modules/footer";
import Header from "@/components/modules/header";
import MobileButton from "@/components/modules/header/MobileButton";
import * as React from "react";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
        <Header />
        {/* <MobileButton /> */}
        {children}
        <Footer />
    </>
  );
}

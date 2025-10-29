import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { NavbarComponent } from "@/components/landingpageLayout/navbar";
import { FooterComponent } from "@/components/landingpageLayout/footer";

const poppinsFont = Poppins({
  weight: "500",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "IBRD",
  description: "Igreja Comutária",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${poppinsFont.className} antialiased bg-gradient-to-tr to-[#601C25] from-[#5530AA]`}>
        <NavbarComponent />
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}

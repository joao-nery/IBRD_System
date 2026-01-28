import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";
import FloatingWhatsApp from "@/components/shared/floating-whatsapp";

const poppinsFont = Poppins({
  weight: "500",
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "IBRD",
  description: "Igreja Comunitária",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${poppinsFont.className} antialiased bg-black`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {children}
          <FloatingWhatsApp />
        </ThemeProvider>
      </body>
    </html>
  );
}

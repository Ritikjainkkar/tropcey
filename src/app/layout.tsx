import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import localfont from "next/font/local";
import Navigation from "@/components/Navigation/Navigation";
import Footer from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

const dDin = localfont({
  src: [
    {
      path: "../../public/fonts/D-DINCondensed.woff",
    },
  ],
  variable: "--font-ddin",
});

const brokeline = localfont({
  src: [
    {
      path: "../../public/fonts/brooklinecondensed-nrl3m.ttf",
    },
  ],
  variable: "--font-brokeline",
});

const franklin = localfont({
  src: [
    {
      path: "../../public/fonts/OPTIFranklinGothic-Medium.otf",
    },
  ],
  variable: "--font-franklin",
});
const franklinHeavy = localfont({
  src: [
    {
      path: "../../public/fonts/Franklin Gothic Heavy Regular.ttf",
    },
  ],
  variable: "--font-franklinHeavy",
});
const franklinBook = localfont({
  src: [
    {
      path: "../../public/fonts/Franklin Gothic Book Regular.ttf",
    },
  ],
  variable: "--font-franklinBook",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${dDin.variable} ${brokeline.variable} ${franklin.variable} ${franklinHeavy.variable} ${franklinBook.variable}`}
      >
        <header>
          <Navigation />
        </header>
        {children}
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}

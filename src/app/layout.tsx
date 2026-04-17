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
const franklinGothic = localfont({
  src: [
    {
      path: "../../public/fonts/FranklinGothic.ttf",
    },
  ],
  variable: "--font-franklinGothic",
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

const futuraBold = localfont({
  src: [
    {
      path: "../../public/fonts/Futura Bold.otf",
    },
  ],
  variable: "--font-futuraBold",
});

const impact = localfont({
  src: [
    {
      path: "../../public/fonts/Impact.ttf",
    },
  ],
  variable: "--font-impact",
});

const archivo = localfont({
  src: [
    {
      path: "../../public/fonts/ArchivoBlack-Regular.ttf",
    },
  ],
  variable: "--font-archivo",
});

const berkShire = localfont({
  src: [
    {
      path: "../../public/fonts/BerkshireSwash-Regular.ttf",
    },
  ],
  variable: "--font-berkShire",
});

export const metadata: Metadata = {
  title: "Tropcey Holdings",
  description: "Tropcey Holdings - Premium Coconut Products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${dDin.variable} ${brokeline.variable} ${franklin.variable} ${franklinHeavy.variable} ${franklinBook.variable} ${futuraBold.variable} ${impact.variable} ${archivo.variable} ${berkShire.variable} ${franklinGothic.variable}`}
      >
        <header>
          <Navigation />
        </header>
        {children}
        {/* <footer>
          <Footer />
        </footer> */}
      </body>
    </html>
  );
}

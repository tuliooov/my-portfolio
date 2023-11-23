import "../styles/globals.css";

import { Inter, Libre_Baskerville } from "next/font/google";

import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { ReactNode } from "react";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const libre_baskerville = Libre_Baskerville({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["400", "700"],
  variable: "--libre-baskerville",
  display: "swap",
});

export default function RootLayout({ children }: {
  children: ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.className} ${libre_baskerville.className}`}
    >
      <head>
        <link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
      </head>
      <body className="overflow-x-hidden antialiased">
        <main>
          {children}
          <PrismicPreview repositoryName={repositoryName} />
        </main>
      </body>
    </html>
  );
}
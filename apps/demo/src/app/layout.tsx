import "material-symbols";
// import "@lit-labs/ssr-react/enable-lit-ssr.js";
import GitHubButton from "../components/GitHubButton";

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

// @TODO: Get static fonts to work somehow, to prevent FOUC
const roboto = Roboto({
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Demo - Material Web Components for React",
  description:
    "Fast, performant, Material 3 compliant. The lightest Material library out there for ReactJS.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.className}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* From BaseUI: https://mui.com/base-ui/getting-started/usage/#responsive-meta-tag */}
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </head>
      <body>
        <main className="bg-[#FDF7FF] max-h-screen w-full">
          <div className="flex flex-col justify-center items-center md:grid md:grid-cols-[1fr_1fr] lg:grid-cols-[auto_1fr_1fr] md:h-screen">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}

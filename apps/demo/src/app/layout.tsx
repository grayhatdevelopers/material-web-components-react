import 'material-symbols';
import '@lit-labs/ssr-react/enable-lit-ssr.js';
import GitHubButton from '../components/GitHubButton';
import NavigationDrawer from "@packages/ui/dist/navigation-drawer"

import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

// @TODO: Get static fonts to work somehow, to prevent FOUC
const roboto = Roboto({ 
  weight: ["400", "500", "700"],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "Demo - Material Web Components for React",
  description: "Fast, performant, Material 3 compliant. The lightest Material library out there for ReactJS.",
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
      <div
        id="titlebar"
        className="backdrop-blur-md z-10 w-full h-16 flex flex-row gap-3 items-center justify-center"
      >
        <h1 className="font-bold text-xl">Material 3 for React</h1>
        <GitHubButton href="https://github.com/grayhatdevelopers/material-web-react">
          Star us on GitHub
        </GitHubButton>
      </div>
      <div className="flex flex-col justify-center items-center md:grid md:grid-cols-[5rem_1fr_1fr] gap-4 md:h-screen">
        <div id="sidebar">
          {/* <NavigationDrawer>
            
          </NavigationDrawer> */}
        </div>
        {children}
        </div>
        </main>
      </body>
    </html>
  );
}

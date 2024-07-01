import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <link href="https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined" rel="stylesheet" />
      <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
      
      {/* From BaseUI: https://mui.com/base-ui/getting-started/usage/#responsive-meta-tag */}
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}

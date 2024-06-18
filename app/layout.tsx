import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import {Header} from "@/app/_components/Header";
import {MobHeader} from "@/app/_components/MobHeader";
import {ThemeProvider} from "@/components/theme-provider";
import {cn} from "@/utils/cn";

;

const poppins = Poppins({weight:["200","300","400","500","600","700","800","900"],style:["normal"],subsets:["latin"]});

export const metadata: Metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(poppins.className,'overflow-x-hidden scroll-smooth')}>
      <ThemeProvider attribute="class">
      <Header />
      <MobHeader />
      {children}
      </ThemeProvider>
      </body>
    </html>
  );
}

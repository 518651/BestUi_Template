"use client"

import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import "./globals.css";
import HeadUI from "@/components/ui/HeadUI";
import { Font_Sc } from "@/utils/Font/font";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={Font_Sc.className}>
        <NextUIProvider>
          <NextThemesProvider attribute="class" defaultTheme="light">
            <main className="text-foreground bg-white dark:bg-background w-full h-full " >
              <HeadUI/>
              <div className="max-w-[1650px] mx-auto h-full py-8 ">
                {children}
              </div>
            </main>
          </NextThemesProvider>
        </NextUIProvider>
      </body>
    </html>
  );
}

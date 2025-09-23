import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import NowShowing from "@/components/NowShowing";
import WhyChoose from "@/components/WhyChoose";
import ComingSoon from "@/components/ComingSoon";
import FooterInfo from "@/components/FooterInfo";

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"], 
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "TicketPrint",
  description: "Created by JosephDev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${poppins.variable} antialiased bg-gray-50`}
      >
        <div className="flex flex-col items-center min-h-screen">
          <Navbar />
          <main className="w-full flex flex-col items-center">
            <section className="mx-auto max-w-[1092px] w-full px-4 py-12 flex flex-col items-center">
              <Hero />
              <NowShowing />
              <WhyChoose />
              <ComingSoon />
              <FooterInfo />
            </section>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700", "800"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Live It Up | Premium Image Consulting & Personal Branding",
  description: "Look Better. Feel Confident. Live It Up. Personalised Image Consulting & Personal Branding to help you look your best, feel confident and create the right first impression.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${playfair.variable} ${jakarta.variable} font-sans bg-[#0B0B0B] text-white antialiased`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}



import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./blocks/nabvar";
import { CTA1 } from "./blocks/top-alert";
import Script from 'next/script'
import Footer3 from "./blocks/footer2";

const AASmart = localFont({
  src: [
    { path: "./fonts/AASmartSans-Thin.woff2", weight: '100', style: 'normal' },
    { path: "./fonts/AASmartSans-Light.woff2", weight: '300', style: 'normal' },
    { path: "./fonts/AASmartSans-Regular.woff2", weight: '400', style: 'normal' },
    { path: './fonts/AASmartSans-LightItalic.woff2', weight: '300', style: 'italic' },
    { path: './fonts/AASmartSans-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: './fonts/AASmartSans-SemiBoldItalic.woff2', weight: '700', style: 'italic' },
    { path: './fonts/AASmartSans-Bold.woff2', weight: '800', style: 'normal' },
  ],
  variable:'--font-AASmart',
});

export const metadata: Metadata = {
  title: "Plataforma de Información Ambiental",
  description: "Plataforma de Información Ambiental - Los Bronces Integrado",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${AASmart.variable} antialiased`}>
        <div className="grid-rows-[20px_1fr_20px] font-aasmart">
          <CTA1></CTA1>
          <Navbar></Navbar>
          {children}
          <Footer3></Footer3>
        </div>
        <Script className="accesibilidad" src="https://www.skynettechnologies.com/accessibility/js/all-in-one-accessibility-js-widget-minify.js?colorcode=#031794&token=ADAAIOA-6E1D54596AE2D6B30EB6F41E209406E4&position=bottom_right" strategy="afterInteractive" />
      </body>
    </html>
  );
}


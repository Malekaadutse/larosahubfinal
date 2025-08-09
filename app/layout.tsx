
import type { Metadata } from "next";
import type { Viewport } from "next";
import { Geist, Geist_Mono, Pacifico } from "next/font/google";
import { CartProvider } from '../components/CartProvider';
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LaRosa Hub - Premium E-commerce Store",
  description: "Discover amazing products at unbeatable prices. Shop electronics, fashion, home & living, and sports items with fast shipping and secure payments.",
  keywords: "ecommerce, online shopping, electronics, fashion, home decor, sports, LaRosa Hub",
  authors: [{ name: "LaRosa Hub" }],
  openGraph: {
    title: "LaRosa Hub - Premium E-commerce Store",
    description: "Discover amazing products at unbeatable prices",
    url: "https://larosa-hub.vercel.app",
    siteName: "LaRosa Hub",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "LaRosa Hub - Premium E-commerce Store",
    description: "Discover amazing products at unbeatable prices",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#f97316" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        <CartProvider>
          <div id="root">
            {children}
          </div>
        </CartProvider>
      </body>
    </html>
  );
}

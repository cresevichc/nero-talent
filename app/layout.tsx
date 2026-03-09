import type { Metadata } from "next";
import './globals.css';
import { metadata } from "./metadata";
import { Playfair_Display, Inter } from 'next/font/google';
import { LanguageProvider } from '../context/LanguageContext';

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  display: 'swap',
});
export { metadata };
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0D0D0F] text-[#F5F7FA]">
        <LanguageProvider>
          <div className={inter.className}>
  {children}
</div>
        </LanguageProvider>
      </body>
    </html>
  );
}

export { inter, playfair };
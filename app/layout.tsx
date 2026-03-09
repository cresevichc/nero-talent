import './globals.css';
import { Playfair_Display, Inter } from 'next/font/google';
import { LanguageProvider } from '../context/LanguageContext';
export const metadata = {
  title: "NERO Talent | Technology Talent Advisory for Startups & Scale-ups",
  description:
    "NERO Talent is a boutique technology talent advisory partnering with startups and scale-ups across Europe. Selective mandates. Structured delivery.",
};

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
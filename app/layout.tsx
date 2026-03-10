import './globals.css';
import { Playfair_Display, Inter } from 'next/font/google';
export const metadata = {
  title: "NERO Talent | Technology Talent Advisory for Startups and Scale-ups",
  description:
    "NERO Talent is a boutique technology talent advisory partnering with startups and scale-ups across Europe. Selective mandates. Structured delivery.",
  openGraph: {
  title: "NERO Talent | Technology Talent Advisory",
  description:
    "Boutique technology talent advisory partnering with startups and scale-ups across Europe.",
  images: ["/og-image.jpg"],
},
metadataBase: new URL('https://nerotalent.com'),  
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
    <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: "NERO Talent",
      url: "https://nerotalent.com",
      description:
        "Boutique technology talent advisory partnering with startups and scale-ups across Europe."
    })
  }}
/>  
  <div className={inter.className}>
    {children}
  </div>
</body>
    </html>
  );
}

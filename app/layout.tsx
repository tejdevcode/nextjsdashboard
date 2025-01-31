import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts'
import { Metadata } from 'next';
import portfoliothimb from "../public/portfolio-thumbnail.jpg";


export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard By Tej R',
    default: 'Acme Dashboard By Tej R',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
  openGraph: {
    title: 'Acme Dashboard By Tej R',
    description: 'The official Next.js Learn Dashboard built with App Router.',
    type: 'website',
    url: "https://nextjsdashapp.vercel.app/",
    siteName: "Acme Dashboard By Tej R",
    images: [
      {
        url: portfoliothimb.src,
        width: 1200,
        height: 630,
        alt: "Tej R Portfolio Thumbnail",
      },
    ]
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}

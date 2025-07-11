import { Metadata } from 'next';
import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
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
export const metadata: Metadata = {
  title: {
    template: '%s | AcmeDashboard',
    default: 'AcmeDashboard',
  },
  description: 'The official Next.js Course Dashboard build with App Router',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

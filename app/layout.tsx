import './globals.css';
import { inter } from './ui/fonts';
import Navbar from './components/Navbar';
import type { Metadata, Viewport } from 'next';

export const metadata: Metadata = {
  title: 'RPS Bal Sainik Vidyalaya',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

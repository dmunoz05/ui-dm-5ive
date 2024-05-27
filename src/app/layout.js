import { GeistMono } from 'geist/font/mono'
import Header from '@ui-dm-5ive/layouts/header/header';
import "./globals.css";


export const metadata = {
  title: "UI dm-5ive",
  description: "Page of library of components",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${GeistMono.variable}`}>
      <body className='font-mono '>
        <Header />
        {children}
      </body>
    </html>
  );
}

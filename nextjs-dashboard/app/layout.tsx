import { monserrat } from './ui/font';
import './ui/global.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${monserrat.className} antialiased`}>
        {children}
        <footer
          className="mt-auto p-2 text-center"
          style={{ backgroundColor: 'grey', color: 'white' }}
        >
          Hecho con Next.js
        </footer>
      </body>
    </html>
  );
}

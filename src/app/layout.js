import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Safiworks Clean',
  description: 'Professional cleaning services for homes and businesses.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="app-shell">
          <Nav />
          <main className="content">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

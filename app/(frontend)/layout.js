import "./globals.css";
import Footer from "../../src/component/Elemen/Footer";
import Navbar from "../../src/component/Elemen/Navbar";

export const metadata = {
  title: "Monica Anastasya Dantina",
  description: "Monica Anastasya Dantina's Personal Web Profile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/700.css";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer"; // <-- Nouvel import

export const metadata: Metadata = {
  title: "Mon Portfolio | Tech & Crypto",
  description: "Portfolio et vitrine professionnelle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="pt-24"> {/* <-- Ajout d'un padding-top pour compenser la navbar fixe */}
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
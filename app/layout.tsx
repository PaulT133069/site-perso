import type { Metadata } from "next";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/700.css";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer"; // <-- Nouvel import

export const metadata: Metadata = {
  title: {
    default: "Paul TEULE . | Portfolio Tech & Crypto", // Le titre par défaut
    template: "%s | Paul TEULE .", // Le format pour les autres pages
  },
  description: "Découvrez le portfolio de Paul, passionné par la tech, la blockchain et le développement web. Projets, parcours et contact.",
  keywords: ["développeur web", "portfolio", "crypto", "blockchain", "Next.js", "React"],
  authors: [{ name: "Paul TEULE" }],
  creator: "Paul TEULE",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://ton-domaine.com", // À remplacer plus tard par ton vrai domaine
    title: "Paul TEULE | Portfolio Tech & Crypto",
    description: "Découvrez mon portfolio et mes projets autour de la tech et de la crypto.",
    siteName: "Paul TEULE Personal Website",
  },
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
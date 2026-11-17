import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "Cresvora — Intelligence in Action. Innovation in Motion.",
    template: "%s | Cresvora"
  },
  description: "Cresvora is an emerging technology venture focused on developing intelligent, AI-powered and IoT-enabled products that solve real-world challenges.",
  keywords: ["Cresvora", "AI products", "IoT", "embedded systems", "wearable technology", "assistive technology", "innovation"],
  authors: [{ name: "Cresvora" }],
  icons: {
    icon: [
      { url: "/logo-mark.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" }
    ],
    shortcut: "/logo-mark.png",
    apple: "/logo-mark.png",
  },
  openGraph: {
    title: "Cresvora — Intelligence in Action. Innovation in Motion.",
    description: "Engineering intelligent products that connect AI, hardware and human innovation to solve meaningful real-world challenges.",
    type: "website",
    locale: "en_IN",
    siteName: "Cresvora"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" data-theme="dark" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/logo-mark.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo-mark.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <ThemeProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

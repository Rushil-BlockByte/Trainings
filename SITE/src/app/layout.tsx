import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";

export const metadata: Metadata = {
  title: "Rushil Kumar | Senior IBM DataPower Developer",
  description:
    "Professional portfolio for Rushil Kumar, a Senior IBM DataPower Developer specializing in API Connect, middleware modernization, secure gateways, and enterprise integration.",
  keywords: [
    "Rushil Kumar",
    "IBM DataPower",
    "IBM API Connect",
    "Middleware",
    "Enterprise Integration",
    "XSLT",
    "SOAP",
    "REST",
  ],
  openGraph: {
    title: "Rushil Kumar | Senior IBM DataPower Developer",
    description:
      "Enterprise integration portfolio covering IBM DataPower, API Connect, secure gateway engineering, and production middleware operations.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <div className="site-shell">
          <Navigation />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

import { Poppins, Montserrat } from "next/font/google";
import "./globals.css";

// Poppins font Configuration
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

// Montserrat font Configuration
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata = {
  title: "Chopinson Bar & Events",
  description:
    "Experience top-tier dining, events, catering, and more in a vibrant atmosphere.",
  keywords: "Chopinson, bar, restaurant, events, catering, rentals, VIP",
  openGraph: {
    title: "Chopinson Bar & Events",
    description: "Dine, host events, and vibe — all in one place.",
    url: "https://chopinsonkitchen.com",
    siteName: "Chopinson",
    images: [
      {
        url: "/images/cbarlogo.png",
        width: 1200,
        height: 630,
        alt: "Chopinson Restaurant and Events",
      },
    ],
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable}`}>
      <body className="min-h-screen bg-white">
        <div className="md:mx-2 mx-1">{children}</div>
      </body>
    </html>
  );
}

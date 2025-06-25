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
  description: "Bar, restaurant, events, and more",
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

import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: {
    default: "Order Details | MedKart",
    template: "%s | MedKart"
  },
  description: "Track your medicine orders with detailed status, delivery information, and payment details. View your order history and get real-time updates.",
  keywords: ["order tracking", "medicine delivery", "pharmacy", "order status", "prescription tracking"],
  authors: [{ name: "MedKart" }],
  creator: "MedKart",
  publisher: "MedKart",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "MedKart",
    title: "Order Details | MedKart",
    description: "Track your medicine orders with detailed status and delivery information",
  },
  twitter: {
    card: "summary_large_image",
    title: "Order Details | MedKart",
    description: "Track your medicine orders with detailed status and delivery information",
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

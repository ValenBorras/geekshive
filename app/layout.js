import { Raleway } from "next/font/google";
import "./globals.css";

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-raleway',
});

export const metadata = {
  title: "Geekshive - Your online geek store",
  description: "Geekshive is your premier destination for all things geek culture, featuring a curated selection of collectibles, games, and merchandise.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} font-raleway antialiased`}>
        {children}
      </body>
    </html>
  );
}

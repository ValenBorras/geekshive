import { Raleway } from "next/font/google";
import "../globals.css";
import I18nProvider from "../i18n/I18nProvider";
import en from "../i18n/dictionaries/en.json";
import es from "../i18n/dictionaries/es.json";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-raleway",
});

export const metadata = {
  title: "Geekshive - Your online geek store",
  description:
    "Geekshive is your premier destination for all things geek culture, featuring a curated selection of collectibles, games, and merchandise.",
};

export default function LocaleLayout({ children, params }) {
  const { locale } = params;
  const dictionary = locale === 'es' ? es : en;
  return (
    <html lang={locale}>
      <body className={`${raleway.variable} font-raleway antialiased`}>
        <I18nProvider dictionary={dictionary}>{children}</I18nProvider>
      </body>
    </html>
  );
}



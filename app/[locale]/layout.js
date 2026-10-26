import { Raleway } from "next/font/google";
import "../globals.css";
import I18nProvider from "../i18n/I18nProvider";
import en from "../i18n/dictionaries/en.json";
import es from "../i18n/dictionaries/es.json";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-raleway",
  display: "swap",
});

export const metadata = {
  title: "GeeksHive - Robotics components & Livox specialists in Latin America",
  description:
    "GeeksHive supplies robotics components across Latin America: Livox LiDAR, Unitree robotic platforms and NVIDIA Jetson embedded AI computing, plus gaming consoles and accessories.",
};

export default function LocaleLayout({ children, params }) {
  const { locale } = params;
  const dictionary = locale === 'es' ? es : en;
  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${raleway.variable} font-raleway antialiased overflow-x-hidden`}>
        <I18nProvider dictionary={dictionary}>{children}</I18nProvider>
      </body>
    </html>
  );
}



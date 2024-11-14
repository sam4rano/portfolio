import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";
import { Montserrat, Nunito } from "next/font/google";


const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  variable: "--font-Montserrat",
  subsets: ["latin"],
});

const nunito = Nunito({
  weight: ["400", "500", "600", "700"],
  variable: "--font-Nunito",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sam Oye",
  description: "Software Engineer || NLP Researcher",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
       className={`${montserrat.variable} ${nunito.variable} `}  
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SalesAI — ИИ-ассистенты продаж",
  description:
    "Внедряем ИИ-продажников в WhatsApp, Instagram и голосовые дозвоны. Конверсия +340%. Запуск за 5 дней.",
  keywords:
    "ИИ продажи, AI ассистент, WhatsApp бот, Instagram автоматизация",
  openGraph: {
    title: "SalesAI — Продаёт за вас 24/7",
    description:
      "Внедряем ИИ-продажников в WhatsApp, Instagram и голосовые дозвоны. Конверсия +340%. Запуск за 5 дней.",
    locale: "ru_RU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17990067230"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17990067230');
            gtag('config', 'AW-18003215133');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}

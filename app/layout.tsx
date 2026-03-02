import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
      <body>{children}</body>
    </html>
  );
}

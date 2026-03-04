import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, phone, selectedPackage } = await req.json();

    if (!name || !phone || !selectedPackage) {
      return NextResponse.json(
        { error: "Все поля обязательны" },
        { status: 400 }
      );
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      return NextResponse.json(
        { error: "Telegram не настроен" },
        { status: 500 }
      );
    }

    const text = [
      "🔔 *Новая заявка с сайта SalesAI*",
      "",
      `👤 *Имя:* ${name}`,
      `📞 *Телефон:* ${phone}`,
      `📦 *Пакет:* ${selectedPackage}`,
      "",
      `🕐 *Дата:* ${new Date().toLocaleString("ru-RU", { timeZone: "Asia/Almaty" })}`,
    ].join("\n");

    const res = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "Markdown",
        }),
      }
    );

    if (!res.ok) {
      const err = await res.text();
      console.error("Telegram API error:", err);
      return NextResponse.json(
        { error: "Ошибка отправки в Telegram" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("send-lead error:", e);
    return NextResponse.json({ error: "Внутренняя ошибка" }, { status: 500 });
  }
}

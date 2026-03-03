// === FILE: lib/content.ts ===

export interface NavLink {
  label: string;
  href: string;
}

export interface Metric {
  value: string;
  label: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}

export interface Channel {
  name: string;
  icon: "whatsapp" | "instagram" | "phone";
  description: string;
  features: string[];
}

export interface Plan {
  name: string;
  price: string;
  currency: string;
  period: string;
  description: string;
  features: string[];
  featured: boolean;
  badge?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

// Navigation
export const NAV_LINKS: NavLink[] = [
  { label: "Как работает", href: "#how-it-works" },
  { label: "Каналы", href: "#channels" },
  { label: "Тарифы", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
  { label: "Политика", href: "/privacy" },
] as const;

export const NAV_CTA = "Получить демо" as const;
export const BRAND_NAME = "SalesAI" as const;

// Hero section
export const HERO = {
  badge: "Новая эра продаж с ИИ",
  title: "ИИ-ассистент, который",
  titleHighlight: "продаёт за вас 24/7",
  description:
    "Внедряем ИИ-продажников в WhatsApp, Instagram и голосовые дозвоны. Конверсия выше на 180%. Запуск за 3 дня.",
  ctaPrimary: "Запустить ИИ-продажника",
  ctaSecondary: "Смотреть демо",
} as const;

// Metrics
export const METRICS: Metric[] = [
  { value: "+180%", label: "Рост конверсии" },
  { value: "24/7", label: "Работает без выходных" },
  { value: "3 дня", label: "Запуск под ключ" },
  { value: "3 канала", label: "WhatsApp, Instagram, Звонки" },
] as const;

// How it works
export const HOW_IT_WORKS = {
  sectionTitle: "Как это работает",
  sectionSubtitle:
    "Три простых шага для запуска ИИ-ассистента, который будет продавать за вас",
  steps: [
    {
      number: "01",
      title: "Анализ и настройка",
      description:
        "Изучаем ваш бизнес, продукт и скрипты продаж. Обучаем ИИ-ассистента на ваших данных и лучших практиках.",
    },
    {
      number: "02",
      title: "Интеграция каналов",
      description:
        "Подключаем WhatsApp, Instagram и телефонию. ИИ-ассистент начинает работать во всех каналах одновременно.",
    },
    {
      number: "03",
      title: "Запуск и оптимизация",
      description:
        "Запускаем продажи и ежедневно оптимизируем скрипты. Вы получаете аналитику и растущую конверсию.",
    },
  ] as Step[],
} as const;

// Channels
export const CHANNELS = {
  sectionTitle: "Каналы продаж",
  sectionSubtitle:
    "ИИ-ассистент работает там, где ваши клиенты — в мессенджерах и по телефону",
  items: [
    {
      name: "WhatsApp",
      icon: "whatsapp" as const,
      description:
        "ИИ-ассистент ведёт переписку в WhatsApp, отвечает на вопросы и доводит до покупки.",
      features: [
        "Мгновенные ответы 24/7",
        "Персонализированные сообщения",
        "Автоматические follow-up",
        "Отправка каталогов и цен",
      ],
    },
    {
      name: "Instagram",
      icon: "instagram" as const,
      description:
        "Обрабатывает входящие сообщения в Direct, реагирует на комментарии и сторис.",
      features: [
        "Ответы в Direct за секунды",
        "Реакция на комментарии",
        "Обработка сторис-ответов",
        "Воронка из подписчика в клиента",
      ],
    },
    {
      name: "Голосовые звонки",
      icon: "phone" as const,
      description:
        "ИИ звонит по базе лидов, проводит квалификацию и записывает на встречу.",
      features: [
        "Естественная речь ИИ",
        "Квалификация лидов",
        "Запись на встречу / демо",
        "Интеграция с CRM",
      ],
    },
  ] as Channel[],
} as const;

// Pricing
export const PRICING = {
  sectionTitle: "Тарифы",
  sectionSubtitle: "Выберите план, который подходит вашему бизнесу",
  plans: [
    {
      name: "Starter",
      price: "150 000",
      currency: "₸",
      period: "",
      description: "Для малого бизнеса и тестирования ИИ-продаж",
      features: [
        "2 канала: WhatsApp + Instagram Direct",
        "До 1 000 диалогов/мес",
        "Разработка продающей Landing Page",
        "Базовая аналитика",
        "Настройка скриптов",
        "Поддержка по email",
      ],
      featured: false,
    },
    {
      name: "Business",
      price: "250 000",
      currency: "₸",
      period: "",
      description: "Для растущего бизнеса с активными продажами",
      features: [
        "Все 3 канала",
        "До 2 000 диалогов/мес",
        "Разработка продающей Landing Page",
        "Продвинутая аналитика",
        "A/B тесты скриптов",
        "Персональный менеджер",
        "Интеграция с CRM",
      ],
      featured: true,
      badge: "Популярный",
    },
    {
      name: "Enterprise",
      price: "400 000",
      currency: "₸",
      period: "",
      description: "Для крупного бизнеса с большими объёмами",
      features: [
        "Все 3 канала",
        "Безлимитные диалоги",
        "Разработка продающей Landing Page",
        "Кастомная аналитика",
        "Выделенная команда",
        "SLA 99.9%",
        "API доступ",
        "Мультиязычность",
      ],
      featured: false,
    },
  ] as Plan[],
  ctaText: "Начать",
  ctaFeaturedText: "Начать сейчас",
} as const;

// FAQ
export const FAQ = {
  sectionTitle: "Частые вопросы",
  sectionSubtitle: "Ответы на популярные вопросы о наших ИИ-ассистентах",
  items: [
    {
      question: "Как быстро можно запустить ИИ-ассистента?",
      answer:
        "Средний срок запуска — 5 рабочих дней. Сюда входит анализ вашего бизнеса, настройка скриптов, обучение ИИ на ваших данных и подключение каналов. Для простых проектов возможен запуск за 3 дня.",
    },
    {
      question: "Как ИИ обучается на моём бизнесе?",
      answer:
        "Мы загружаем в систему ваши скрипты продаж, описание продуктов, FAQ, прайс-листы и примеры успешных диалогов. ИИ анализирует эти данные и создаёт персонализированную модель общения для вашего бизнеса.",
    },
    {
      question: "Что если клиент задаст вопрос, на который ИИ не знает ответа?",
      answer:
        "ИИ-ассистент умеет распознавать сложные ситуации и автоматически переключает диалог на живого оператора. Вы получаете уведомление, и можете подключиться в любой момент.",
    },
    {
      question: "Какие языки поддерживает ИИ-ассистент?",
      answer:
        "ИИ-ассистент работает на русском, казахском и английском языках. На тарифе Enterprise доступна поддержка дополнительных языков по запросу.",
    },
    {
      question: "Можно ли интегрировать с моей CRM?",
      answer:
        "Да, на тарифах Business и Enterprise мы подключаем интеграцию с популярными CRM: Bitrix24, AmoCRM, HubSpot и другими. На тарифе Enterprise доступна интеграция с любой CRM через API.",
    },
    {
      question: "Как измеряется эффективность ИИ-продажника?",
      answer:
        "Мы предоставляем детальную аналитику: количество диалогов, конверсия в продажу, средний чек, время ответа, NPS клиентов. Ежемесячно вы получаете отчёт с рекомендациями по оптимизации.",
    },
  ] as FaqItem[],
} as const;

// Contacts
export const CONTACTS = {
  sectionTitle: "Свяжитесь с нами",
  sectionSubtitle:
    "Оставьте заявку, и мы свяжемся с вами в течение 30 минут",
  formFields: {
    name: "Ваше имя",
    phone: "Телефон",
    packageLabel: "Выберите пакет",
    packages: ["Starter — 150 000 ₸", "Business — 250 000 ₸", "Enterprise — 400 000 ₸"],
    submit: "Отправить заявку",
  },
  whatsapp: {
    label: "Написать в WhatsApp",
    phone: "77071024800",
  },
  telegram: {
    label: "Написать в Telegram",
    username: "nazir_gm",
  },
  info: [
    {
      icon: "person" as const,
      label: "Имя",
      value: "Назир",
    },
    {
      icon: "phone" as const,
      label: "Телефон",
      value: "+7 (707) 102-48-00",
    },
  ],
  successMessage: "Спасибо! Мы свяжемся с вами в ближайшее время.",
} as const;

// CTA Section
export const CTA = {
  title: "Готовы увеличить продажи?",
  description:
    "Запустите ИИ-ассистента за 5 дней и получите первых клиентов уже на следующей неделе.",
  ctaPrimary: "Получить консультацию",
  ctaSecondary: "Написать в WhatsApp",
} as const;

// Footer
export const FOOTER = {
  brand: "SalesAI",
  description:
    "ИИ-ассистенты для продаж в WhatsApp, Instagram и голосовых звонках.",
  sections: [
    {
      title: "Продукт",
      links: [
        { label: "Как работает", href: "#how-it-works" },
        { label: "Каналы", href: "#channels" },
        { label: "Тарифы", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
      ],
    },
    {
      title: "Компания",
      links: [
        { label: "О нас", href: "#" },
        { label: "Блог", href: "#" },
        { label: "Карьера", href: "#" },
        { label: "Контакты", href: "#contacts" },
      ],
    },
    {
      title: "Поддержка",
      links: [
        { label: "Документация", href: "#" },
        { label: "Помощь", href: "#" },
        { label: "Статус", href: "#" },
        { label: "Политика", href: "/privacy" },
      ],
    },
  ],
  copyright: `© ${new Date().getFullYear()} SalesAI. Все права защищены.`,
} as const;

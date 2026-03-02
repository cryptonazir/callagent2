"use client";

import { motion } from "framer-motion";
import { HERO } from "@/lib/content";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
} as const;

export default function Hero() {
  const handleClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background:
          "linear-gradient(135deg, #f6f9fc 0%, #ffffff 40%, #f0edff 100%)",
        overflow: "hidden",
        padding: "120px 24px 80px",
      }}
    >
      {/* Background decorative circles */}
      <div
        style={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: 600,
          height: 600,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,91,255,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,217,126,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{
          maxWidth: 800,
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <span
            style={{
              display: "inline-block",
              padding: "8px 20px",
              background: "rgba(99,91,255,0.08)",
              color: "var(--primary)",
              borderRadius: "var(--radius-full)",
              fontSize: 14,
              fontWeight: 600,
              letterSpacing: "0.5px",
              marginBottom: 24,
            }}
          >
            {HERO.badge}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          variants={itemVariants}
          style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            fontWeight: 800,
            lineHeight: 1.1,
            color: "var(--navy)",
            marginBottom: 24,
            letterSpacing: "-1px",
          }}
        >
          {HERO.title}
          <br />
          <span className="text-gradient">{HERO.titleHighlight}</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          style={{
            fontSize: "clamp(16px, 2vw, 20px)",
            color: "var(--text-secondary)",
            maxWidth: 600,
            margin: "0 auto 40px",
            lineHeight: 1.7,
          }}
        >
          {HERO.description}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#pricing"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#pricing");
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px 36px",
              background: "var(--primary)",
              color: "var(--text-white)",
              borderRadius: "var(--radius-full)",
              fontSize: 16,
              fontWeight: 600,
              textDecoration: "none",
              boxShadow: "var(--shadow-primary)",
              transition:
                "background var(--transition-fast), transform var(--transition-fast), box-shadow var(--transition-fast)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--primary-dark)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--primary)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {HERO.ctaPrimary}
          </a>
          <a
            href="#how-it-works"
            onClick={(e) => {
              e.preventDefault();
              handleClick("#how-it-works");
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px 36px",
              background: "var(--bg-white)",
              color: "var(--text-primary)",
              borderRadius: "var(--radius-full)",
              fontSize: 16,
              fontWeight: 600,
              textDecoration: "none",
              border: "2px solid var(--border-light)",
              transition:
                "border-color var(--transition-fast), transform var(--transition-fast)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--primary)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border-light)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {HERO.ctaSecondary}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

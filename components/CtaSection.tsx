"use client";

import { motion } from "framer-motion";
import { CTA } from "@/lib/content";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
} as const;

export default function CtaSection() {
  return (
    <section
      style={{
        padding: "100px 24px",
        background:
          "linear-gradient(135deg, var(--navy) 0%, #0f3460 50%, var(--navy) 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "-30%",
          right: "-15%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(99,91,255,0.15) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "-10%",
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(0,217,126,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        style={{
          maxWidth: 700,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.h2
          variants={itemVariants}
          style={{
            fontSize: "clamp(28px, 4vw, 44px)",
            fontWeight: 800,
            color: "var(--text-white)",
            marginBottom: 20,
            letterSpacing: "-0.5px",
          }}
        >
          {CTA.title}
        </motion.h2>

        <motion.p
          variants={itemVariants}
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.7)",
            marginBottom: 40,
            lineHeight: 1.7,
          }}
        >
          {CTA.description}
        </motion.p>

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
              document
                .querySelector("#pricing")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px 36px",
              background: "var(--green)",
              color: "var(--navy)",
              borderRadius: "var(--radius-full)",
              fontSize: 16,
              fontWeight: 700,
              textDecoration: "none",
              boxShadow: "var(--shadow-green)",
              transition:
                "background var(--transition-fast), transform var(--transition-fast)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--green-dark)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--green)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {CTA.ctaPrimary}
          </a>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "16px 36px",
              background: "transparent",
              color: "var(--text-white)",
              borderRadius: "var(--radius-full)",
              fontSize: 16,
              fontWeight: 600,
              textDecoration: "none",
              border: "2px solid rgba(255,255,255,0.25)",
              transition:
                "border-color var(--transition-fast), transform var(--transition-fast)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {CTA.ctaSecondary}
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}

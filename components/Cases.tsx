"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { CASES } from "@/lib/content";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Cases() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="cases" style={{ padding: "100px 24px", background: "var(--bg-light)" }}>
      <div style={{ maxWidth: "var(--container-max)", margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "var(--navy)",
              marginBottom: 16,
              letterSpacing: "-0.5px",
            }}
          >
            {CASES.sectionTitle}
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "var(--text-secondary)",
              maxWidth: 600,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            {CASES.sectionSubtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
          }}
        >
          {CASES.items.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                background: "var(--bg-white)",
                borderRadius: "var(--radius-lg)",
                padding: 36,
                border: "1px solid var(--border-light)",
                boxShadow:
                  hoveredIndex === index
                    ? "var(--shadow-md)"
                    : "0 1px 3px rgba(0,0,0,0.04)",
                transform: hoveredIndex === index ? "translateY(-4px)" : "translateY(0)",
                transition:
                  "box-shadow var(--transition-base), transform var(--transition-base)",
                display: "flex",
                flexDirection: "column" as const,
              }}
            >
              {/* Metric */}
              <div
                style={{
                  fontSize: "clamp(36px, 5vw, 52px)",
                  fontWeight: 800,
                  color: "var(--primary)",
                  lineHeight: 1.1,
                  marginBottom: 8,
                }}
              >
                {item.metric}
              </div>
              <div
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--text-secondary)",
                  textTransform: "uppercase" as const,
                  letterSpacing: "1px",
                  marginBottom: 24,
                }}
              >
                конверсия
              </div>

              {/* Company */}
              <div
                style={{
                  fontSize: 22,
                  fontWeight: 700,
                  color: "var(--navy)",
                  marginBottom: 4,
                }}
              >
                {item.company}
              </div>
              <div
                style={{
                  fontSize: 14,
                  color: "var(--text-secondary)",
                  marginBottom: 20,
                }}
              >
                {item.industry} · {item.channel}
              </div>

              {/* Problem */}
              <div style={{ marginBottom: 16 }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "var(--text-secondary)",
                    textTransform: "uppercase" as const,
                    letterSpacing: "1px",
                    marginBottom: 6,
                  }}
                >
                  Проблема
                </div>
                <p
                  style={{
                    fontSize: 15,
                    color: "var(--navy)",
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.problem}
                </p>
              </div>

              {/* Result */}
              <div style={{ marginTop: "auto" }}>
                <div
                  style={{
                    fontSize: 12,
                    fontWeight: 700,
                    color: "var(--green, #00c48c)",
                    textTransform: "uppercase" as const,
                    letterSpacing: "1px",
                    marginBottom: 6,
                  }}
                >
                  Результат
                </div>
                <p
                  style={{
                    fontSize: 15,
                    color: "var(--navy)",
                    lineHeight: 1.6,
                    margin: 0,
                    fontWeight: 500,
                  }}
                >
                  {item.result}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        @media (max-width: 767px) {
          #cases > div > div:last-child {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </section>
  );
}

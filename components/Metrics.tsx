"use client";

import { motion } from "framer-motion";
import { METRICS } from "@/lib/content";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
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

export default function Metrics() {
  return (
    <section
      style={{
        padding: "80px 24px",
        background: "var(--bg-white)",
      }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 32,
        }}
        className="metrics-grid"
      >
        {METRICS.map((metric) => (
          <motion.div
            key={metric.label}
            variants={itemVariants}
            style={{
              textAlign: "center",
              padding: "32px 16px",
            }}
          >
            <div
              style={{
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 800,
                color: "var(--primary)",
                lineHeight: 1.1,
                marginBottom: 8,
              }}
            >
              {metric.value}
            </div>
            <div
              style={{
                fontSize: 15,
                color: "var(--text-muted)",
                fontWeight: 500,
              }}
            >
              {metric.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <style jsx global>{`
        @media (max-width: 767px) {
          .metrics-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
        }
      `}</style>
    </section>
  );
}

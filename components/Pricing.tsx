"use client";

import { motion } from "framer-motion";
import { PRICING } from "@/lib/content";

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

export default function Pricing() {
  return (
    <section
      id="pricing"
      style={{
        padding: "100px 24px",
        background: "var(--bg-light)",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
        }}
      >
        {/* Header */}
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
            {PRICING.sectionTitle}
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "var(--text-secondary)",
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            {PRICING.sectionSubtitle}
          </p>
        </motion.div>

        {/* Plans */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 32,
            alignItems: "center",
          }}
          className="pricing-grid"
        >
          {PRICING.plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={itemVariants}
              style={{
                background: plan.featured ? "var(--navy)" : "var(--bg-white)",
                borderRadius: "var(--radius-xl)",
                padding: plan.featured ? "48px 40px" : "40px",
                position: "relative",
                border: plan.featured
                  ? "none"
                  : "1px solid var(--border-light)",
                boxShadow: plan.featured ? "var(--shadow-xl)" : "var(--shadow-sm)",
                transform: plan.featured ? "scale(1.05)" : "none",
                transition:
                  "box-shadow var(--transition-base), transform var(--transition-base)",
                zIndex: plan.featured ? 2 : 1,
              }}
              onMouseEnter={(e) => {
                if (!plan.featured) {
                  e.currentTarget.style.boxShadow = "var(--shadow-lg)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }
              }}
              onMouseLeave={(e) => {
                if (!plan.featured) {
                  e.currentTarget.style.boxShadow = "var(--shadow-sm)";
                  e.currentTarget.style.transform = "none";
                }
              }}
            >
              {/* Badge */}
              {plan.featured && plan.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: -14,
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "var(--green)",
                    color: "var(--navy)",
                    padding: "6px 20px",
                    borderRadius: "var(--radius-full)",
                    fontSize: 13,
                    fontWeight: 700,
                    whiteSpace: "nowrap",
                    boxShadow: "var(--shadow-green)",
                  }}
                >
                  {plan.badge}
                </div>
              )}

              {/* Plan name */}
              <h3
                style={{
                  fontSize: 20,
                  fontWeight: 700,
                  color: plan.featured
                    ? "rgba(255,255,255,0.7)"
                    : "var(--text-muted)",
                  marginBottom: 8,
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                {plan.name}
              </h3>

              {/* Price */}
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: 4,
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    fontSize: "clamp(32px, 3vw, 44px)",
                    fontWeight: 800,
                    color: plan.featured
                      ? "var(--text-white)"
                      : "var(--navy)",
                  }}
                >
                  {plan.price}
                </span>
                <span
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: plan.featured
                      ? "rgba(255,255,255,0.7)"
                      : "var(--text-muted)",
                  }}
                >
                  {plan.currency}
                </span>
                <span
                  style={{
                    fontSize: 16,
                    color: plan.featured
                      ? "rgba(255,255,255,0.5)"
                      : "var(--text-muted)",
                  }}
                >
                  {plan.period}
                </span>
              </div>

              {/* Description */}
              <p
                style={{
                  fontSize: 15,
                  color: plan.featured
                    ? "rgba(255,255,255,0.6)"
                    : "var(--text-secondary)",
                  marginBottom: 32,
                  lineHeight: 1.6,
                }}
              >
                {plan.description}
              </p>

              {/* Features */}
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  marginBottom: 32,
                }}
              >
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      fontSize: 14,
                      color: plan.featured
                        ? "rgba(255,255,255,0.8)"
                        : "var(--text-secondary)",
                      padding: "8px 0",
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M13.333 4L6 11.333 2.667 8"
                        stroke={plan.featured ? "#00d97e" : "var(--primary)"}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contacts"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" });
                }}
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "14px 32px",
                  borderRadius: "var(--radius-full)",
                  fontSize: 15,
                  fontWeight: 600,
                  textDecoration: "none",
                  transition:
                    "background var(--transition-fast), transform var(--transition-fast)",
                  background: plan.featured ? "var(--green)" : "var(--primary)",
                  color: plan.featured ? "var(--navy)" : "var(--text-white)",
                  boxShadow: plan.featured
                    ? "var(--shadow-green)"
                    : "var(--shadow-primary)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  if (plan.featured) {
                    e.currentTarget.style.background = "var(--green-dark)";
                  } else {
                    e.currentTarget.style.background = "var(--primary-dark)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  if (plan.featured) {
                    e.currentTarget.style.background = "var(--green)";
                  } else {
                    e.currentTarget.style.background = "var(--primary)";
                  }
                }}
              >
                {plan.featured ? PRICING.ctaFeaturedText : PRICING.ctaText}
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        @media (max-width: 767px) {
          .pricing-grid {
            grid-template-columns: 1fr !important;
            max-width: 420px !important;
            margin-left: auto !important;
            margin-right: auto !important;
          }
          .pricing-grid > * {
            transform: none !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .pricing-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

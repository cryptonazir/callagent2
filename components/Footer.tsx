"use client";

import { motion } from "framer-motion";
import { FOOTER } from "@/lib/content";

export default function Footer() {
  const handleLinkClick = (href: string) => {
    if (href.startsWith("#") && href.length > 1) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      style={{
        padding: "64px 24px 32px",
        background: "var(--navy)",
        color: "rgba(255,255,255,0.7)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
        }}
      >
        {/* Top section */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: 48,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          {/* Brand column */}
          <div>
            <div
              style={{
                fontSize: 24,
                fontWeight: 800,
                color: "var(--text-white)",
                marginBottom: 16,
              }}
            >
              {FOOTER.brand}
            </div>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.7,
                maxWidth: 300,
              }}
            >
              {FOOTER.description}
            </p>
          </div>

          {/* Link columns */}
          {FOOTER.sections.map((section) => (
            <div key={section.title}>
              <h4
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "var(--text-white)",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  marginBottom: 20,
                }}
              >
                {section.title}
              </h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {section.links.map((link) => (
                  <li key={link.label} style={{ marginBottom: 12 }}>
                    <a
                      href={link.href}
                      onClick={(e) => {
                        if (link.href.startsWith("#")) {
                          e.preventDefault();
                          handleLinkClick(link.href);
                        }
                      }}
                      style={{
                        color: "rgba(255,255,255,0.6)",
                        textDecoration: "none",
                        fontSize: 14,
                        transition: "color var(--transition-fast)",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--text-white)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          "rgba(255,255,255,0.6)")
                      }
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          style={{
            height: 1,
            background: "rgba(255,255,255,0.1)",
            marginBottom: 24,
          }}
        />

        {/* Copyright */}
        <div
          style={{
            textAlign: "center",
            fontSize: 13,
            color: "rgba(255,255,255,0.4)",
          }}
        >
          {FOOTER.copyright}
        </div>
      </motion.div>

      <style jsx global>{`
        @media (max-width: 767px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}

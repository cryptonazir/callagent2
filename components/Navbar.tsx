"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_LINKS, NAV_CTA, BRAND_NAME } from "@/lib/content";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: "0 24px",
        transition: "background var(--transition-base), border-color var(--transition-base), box-shadow var(--transition-base)",
        background: scrolled ? "rgba(255,255,255,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border-light)" : "1px solid transparent",
        boxShadow: scrolled ? "var(--shadow-sm)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 72,
        }}
      >
        {/* Brand */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          style={{
            fontSize: 24,
            fontWeight: 800,
            color: "var(--primary)",
            textDecoration: "none",
            letterSpacing: "-0.5px",
          }}
        >
          {BRAND_NAME}
        </a>

        {/* Desktop links */}
        <ul
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
            listStyle: "none",
          }}
          className="nav-desktop"
        >
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                style={{
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  fontSize: 15,
                  fontWeight: 500,
                  transition: "color var(--transition-fast)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#pricing");
              }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "10px 24px",
                background: "var(--primary)",
                color: "var(--text-white)",
                borderRadius: "var(--radius-full)",
                fontSize: 14,
                fontWeight: 600,
                textDecoration: "none",
                transition: "background var(--transition-fast), box-shadow var(--transition-fast)",
                boxShadow: "var(--shadow-primary)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--primary-dark)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--primary)";
              }}
            >
              {NAV_CTA}
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Открыть меню"
          style={{
            display: "none",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            width: 40,
            height: 40,
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
        >
          <span
            style={{
              display: "block",
              width: 22,
              height: 2,
              background: "var(--navy)",
              borderRadius: 2,
              transition: "transform var(--transition-fast), opacity var(--transition-fast)",
              transform: mobileOpen ? "rotate(45deg) translate(4px, 4px)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: 22,
              height: 2,
              background: "var(--navy)",
              borderRadius: 2,
              transition: "opacity var(--transition-fast)",
              opacity: mobileOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: 22,
              height: 2,
              background: "var(--navy)",
              borderRadius: 2,
              transition: "transform var(--transition-fast), opacity var(--transition-fast)",
              transform: mobileOpen ? "rotate(-45deg) translate(4px, -4px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="nav-mobile-menu"
            style={{
              position: "fixed",
              top: 72,
              right: 0,
              bottom: 0,
              width: "75vw",
              maxWidth: 320,
              background: "var(--bg-white)",
              boxShadow: "var(--shadow-xl)",
              padding: "32px 24px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(link.href);
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
                style={{
                  padding: "14px 16px",
                  fontSize: 16,
                  fontWeight: 500,
                  color: "var(--text-primary)",
                  textDecoration: "none",
                  borderRadius: "var(--radius-sm)",
                  transition: "background var(--transition-fast)",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "var(--bg-light)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "transparent")
                }
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick("#pricing");
              }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.05 }}
              style={{
                marginTop: 16,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "14px 24px",
                background: "var(--primary)",
                color: "var(--text-white)",
                borderRadius: "var(--radius-full)",
                fontSize: 15,
                fontWeight: 600,
                textDecoration: "none",
                textAlign: "center",
              }}
            >
              {NAV_CTA}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileOpen(false)}
            style={{
              position: "fixed",
              inset: 0,
              top: 72,
              background: "rgba(0,0,0,0.3)",
              zIndex: -1,
            }}
          />
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media (max-width: 767px) {
          .nav-desktop {
            display: none !important;
          }
          .nav-hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
}

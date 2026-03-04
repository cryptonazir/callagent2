"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CONTACTS } from "@/lib/content";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
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

function ContactIcon({ icon }: { icon: string }) {
  if (icon === "person") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
          stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        />
        <circle cx="12" cy="7" r="4" stroke="var(--primary)" strokeWidth="2" />
      </svg>
    );
  }
  // phone
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
        stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Contacts() {
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    selectedPackage: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const res = await fetch("/api/send-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
    } catch {
      setError("Ошибка отправки. Попробуйте ещё раз или напишите в WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "14px 16px",
    fontSize: 15,
    fontFamily: "inherit",
    border: "1px solid var(--border-light)",
    borderRadius: "var(--radius-sm)",
    background: "var(--bg-white)",
    color: "var(--text-primary)",
    outline: "none",
    transition: "border-color var(--transition-fast)",
  };

  const messengerBtnStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 12,
    padding: "18px 32px",
    color: "#ffffff",
    borderRadius: "var(--radius-full)",
    fontSize: 16,
    fontWeight: 600,
    textDecoration: "none",
    transition:
      "background var(--transition-fast), transform var(--transition-fast)",
  };

  return (
    <section
      id="contacts"
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
            {CONTACTS.sectionTitle}
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "var(--text-secondary)",
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            {CONTACTS.sectionSubtitle}
          </p>
        </motion.div>

        {/* Content grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            alignItems: "start",
          }}
          className="contacts-grid"
        >
          {/* Form */}
          <motion.div variants={itemVariants}>
            {submitted ? (
              <div
                style={{
                  background: "var(--bg-white)",
                  borderRadius: "var(--radius-lg)",
                  padding: 48,
                  border: "1px solid var(--border-light)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 64,
                    height: 64,
                    borderRadius: "50%",
                    background: "rgba(0,217,126,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 20px",
                  }}
                >
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6L9 17l-5-5"
                      stroke="var(--green)"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p
                  style={{
                    fontSize: 18,
                    fontWeight: 600,
                    color: "var(--navy)",
                  }}
                >
                  {CONTACTS.successMessage}
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  background: "var(--bg-white)",
                  borderRadius: "var(--radius-lg)",
                  padding: 40,
                  border: "1px solid var(--border-light)",
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {/* Name */}
                <input
                  type="text"
                  name="name"
                  placeholder={CONTACTS.formFields.name}
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--primary)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--border-light)")
                  }
                />

                {/* Phone */}
                <input
                  type="tel"
                  name="phone"
                  placeholder={CONTACTS.formFields.phone}
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={inputStyle}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--primary)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--border-light)")
                  }
                />

                {/* Package selector */}
                <select
                  name="selectedPackage"
                  value={formData.selectedPackage}
                  onChange={handleChange}
                  required
                  style={{
                    ...inputStyle,
                    cursor: "pointer",
                    appearance: "none",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%236b7c93' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 16px center",
                    paddingRight: 44,
                    color: formData.selectedPackage ? "var(--text-primary)" : "var(--text-muted)",
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--primary)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--border-light)")
                  }
                >
                  <option value="" disabled>
                    {CONTACTS.formFields.packageLabel}
                  </option>
                  {CONTACTS.formFields.packages.map((pkg) => (
                    <option key={pkg} value={pkg}>
                      {pkg}
                    </option>
                  ))}
                </select>

                {/* Submit */}
                <button
                  type="submit"
                  style={{
                    padding: "16px 32px",
                    background: "var(--primary)",
                    color: "var(--text-white)",
                    border: "none",
                    borderRadius: "var(--radius-full)",
                    fontSize: 16,
                    fontWeight: 600,
                    fontFamily: "inherit",
                    cursor: "pointer",
                    boxShadow: "var(--shadow-primary)",
                    transition:
                      "background var(--transition-fast), transform var(--transition-fast)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--primary-dark)";
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--primary)";
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                  disabled={sending}
                >
                  {sending ? "Отправка..." : CONTACTS.formFields.submit}
                </button>

                {error && (
                  <p style={{ color: "#e53e3e", fontSize: 14, textAlign: "center", margin: 0 }}>
                    {error}
                  </p>
                )}
              </form>
            )}
          </motion.div>

          {/* Contact info + messenger buttons */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
              paddingTop: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                padding: "24px 28px",
                background: "var(--bg-white)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-light)",
                transition:
                  "box-shadow var(--transition-base), transform var(--transition-base)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "var(--radius-sm)",
                  background: "rgba(99,91,255,0.08)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <ContactIcon icon="person" />
              </div>
              <div>
                <div
                  style={{
                    fontSize: 18,
                    color: "var(--navy)",
                    fontWeight: 700,
                    marginBottom: 4,
                  }}
                >
                  Назир
                </div>
                <div
                  style={{
                    fontSize: 15,
                    color: "var(--text-secondary)",
                    fontWeight: 500,
                  }}
                >
                  +7 (707) 102-48-00
                </div>
              </div>
            </div>

            {/* WhatsApp button */}
            <a
              href={`https://wa.me/${CONTACTS.whatsapp.phone}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...messengerBtnStyle,
                background: "#25D366",
                boxShadow: "0 4px 20px rgba(37,211,102,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#1EBE5A";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#25D366";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"
                  fill="#ffffff"
                />
                <path
                  d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.116-1.138l-.29-.174-3.04.797.812-2.97-.192-.3A7.96 7.96 0 014 12a8 8 0 1116 0 8 8 0 01-8 8z"
                  fill="#ffffff"
                />
              </svg>
              {CONTACTS.whatsapp.label}
            </a>

            {/* Telegram button */}
            <a
              href={`https://t.me/${CONTACTS.telegram.username}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...messengerBtnStyle,
                background: "#0088cc",
                boxShadow: "0 4px 20px rgba(0,136,204,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#006daa";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#0088cc";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22.05 1.577c-.393-.016-.784.08-1.117.235-.484.186-4.92 1.902-9.41 3.64L2.748 8.875c-.34.13-.654.35-.654.35s-.336.166-.336.487c0 .21.104.37.292.51.19.14.478.222.478.222l4.32 1.42.512 2.556 1.143 3.63s.293.727.735.83c.202.047.44.009.667-.114l2.82-2.432 4.157 3.21s.608.486 1.275.486c.36 0 .696-.164.943-.487.246-.32.36-.76.418-1.04 0 0 .88-5.416 1.33-8.19.224-1.39.418-2.57.418-2.57s.14-.763.058-1.272a1.54 1.54 0 00-.58-1.005 1.43 1.43 0 00-.694-.252zm-1.4 2.89s-8.985 5.528-9.35 5.744c-.362.217-.53.09-.53.09L9.66 7.47l11.09-3.003z"
                  fill="#ffffff"
                />
              </svg>
              {CONTACTS.telegram.label}
            </a>
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        @media (max-width: 767px) {
          .contacts-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

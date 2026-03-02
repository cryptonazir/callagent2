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
  if (icon === "email") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <rect x="2" y="4" width="20" height="16" rx="3" stroke="var(--primary)" strokeWidth="2" />
        <path d="M2 7l10 7 10-7" stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (icon === "phone") {
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path
          d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
          stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>
    );
  }
  // location
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
        stroke="var(--primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="3" stroke="var(--primary)" strokeWidth="2" />
    </svg>
  );
}

export default function Contacts() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
                {/* Name + Phone row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                  }}
                  className="form-row"
                >
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
                </div>

                {/* Email + Company row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 16,
                  }}
                  className="form-row"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder={CONTACTS.formFields.email}
                    value={formData.email}
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
                  <input
                    type="text"
                    name="company"
                    placeholder={CONTACTS.formFields.company}
                    value={formData.company}
                    onChange={handleChange}
                    style={inputStyle}
                    onFocus={(e) =>
                      (e.currentTarget.style.borderColor = "var(--primary)")
                    }
                    onBlur={(e) =>
                      (e.currentTarget.style.borderColor = "var(--border-light)")
                    }
                  />
                </div>

                {/* Message */}
                <textarea
                  name="message"
                  placeholder={CONTACTS.formFields.message}
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    minHeight: 100,
                  }}
                  onFocus={(e) =>
                    (e.currentTarget.style.borderColor = "var(--primary)")
                  }
                  onBlur={(e) =>
                    (e.currentTarget.style.borderColor = "var(--border-light)")
                  }
                />

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
                >
                  {CONTACTS.formFields.submit}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            variants={itemVariants}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 24,
              paddingTop: 16,
            }}
          >
            {CONTACTS.info.map((item) => (
              <div
                key={item.label}
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
                  <ContactIcon icon={item.icon} />
                </div>
                <div>
                  <div
                    style={{
                      fontSize: 13,
                      color: "var(--text-muted)",
                      fontWeight: 500,
                      marginBottom: 4,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontSize: 16,
                      color: "var(--navy)",
                      fontWeight: 600,
                    }}
                  >
                    {item.value}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        @media (max-width: 767px) {
          .contacts-grid {
            grid-template-columns: 1fr !important;
          }
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}

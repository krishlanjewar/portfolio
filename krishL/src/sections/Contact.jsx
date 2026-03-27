// Contact.jsx – validated form + social links + photo
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "../components/ui/SocialIcons";
import { SectionWrapper, SectionHeading } from "../components/layout/SectionWrapper";
import { Button } from "../components/ui/Button";
import { useContactForm } from "../hooks/useForm";
import { meta, social } from "../data/portfolioConfig";
import krishPhoto from "../assets/krish photo.png";

const socials = [
  { href: social.linkedin, Icon: LinkedinIcon, label: "LinkedIn", color: "#0A66C2" },
  { href: social.github, Icon: GithubIcon, label: "GitHub", color: "#e0e0e0" },
  { href: social.instagram, Icon: InstagramIcon, label: "Instagram", color: "#E1306C" },
];

function InputField({ id, label, error, textarea, ...props }) {
  const Tag = textarea ? "textarea" : "input";
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-[var(--color-text)]">
        {label}
      </label>
      <Tag
        id={id}
        {...props}
        className={`w-full px-4 py-3 rounded-xl border bg-[var(--color-surface-2)] text-[var(--color-text)] placeholder:text-[var(--color-text-subtle)] transition-all duration-200 outline-none focus:ring-2 focus:ring-[var(--color-primary)] focus:border-transparent resize-none ${
          error ? "border-red-500" : "border-[var(--color-border-subtle)] focus:border-[var(--color-primary)]"
        } ${textarea ? "min-h-[140px]" : ""}`}
      />
      {error && (
        <p className="text-red-400 text-xs flex items-center gap-1" role="alert">
          <AlertCircle size={12} aria-hidden /> {error}
        </p>
      )}
    </div>
  );
}

export default function Contact() {
  const { form, status, onSubmit } = useContactForm();
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <SectionWrapper id="contact" label="Contact">
      <SectionHeading
        eyebrow="Get In Touch"
        title="Contact Information"
        subtitle="Have a project in mind or just want to say hi? Drop me a line!"
        center
      />

      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Left – Photo + Socials */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >
          <div className="relative w-64 h-80 rounded-3xl overflow-hidden border-2 border-[var(--color-border)]">
            <img
              src={krishPhoto}
              alt={meta.name}
              width={256}
              height={320}
              loading="lazy"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/60 to-transparent" />
          </div>

          <div className="flex items-center gap-5">
            {socials.map(({ href, Icon, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="group w-14 h-14 rounded-2xl flex items-center justify-center border border-[var(--color-border-subtle)] bg-[var(--color-surface)] hover:border-[var(--color-border)] hover:-translate-y-1.5 hover:shadow-[var(--shadow-card)] transition-all duration-300"
              >
                <Icon
                  size={24}
                  className="transition-colors duration-200"
                  style={{ color: "var(--color-text-muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = color)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
                  aria-hidden
                />
              </a>
            ))}
          </div>

          <div className="text-center space-y-1">
            <p className="text-[var(--color-text-muted)] text-sm">{meta.email}</p>
            <p className="text-[var(--color-text-muted)] text-sm">{meta.location}</p>
          </div>
        </motion.div>

        {/* Right – Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-8"
        >
          {status === "success" ? (
            <div className="flex flex-col items-center gap-4 py-8 text-center">
              <CheckCircle size={48} className="text-green-500" />
              <h3 className="text-xl font-bold text-[var(--color-text)]">Message Sent!</h3>
              <p className="text-[var(--color-text-muted)]">
                Thanks for reaching out. I'll reply within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="space-y-5" noValidate>
              <InputField
                id="contact-name"
                label="Your Name"
                placeholder="John Doe"
                error={errors.name?.message}
                {...register("name")}
              />
              <InputField
                id="contact-email"
                label="Email Address"
                type="email"
                placeholder="john@example.com"
                error={errors.email?.message}
                {...register("email")}
              />
              <InputField
                id="contact-message"
                label="Message"
                placeholder="Tell me about your project..."
                error={errors.message?.message}
                textarea
                {...register("message")}
              />

              {status === "error" && (
                <p className="text-red-400 text-sm flex items-center gap-2" role="alert">
                  <AlertCircle size={16} aria-hidden />
                  Something went wrong. Please try again.
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full justify-center"
                disabled={status === "loading"}
                aria-disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" aria-hidden /> Sending…
                  </>
                ) : (
                  <>
                    <Send size={18} aria-hidden /> Send Message
                  </>
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}

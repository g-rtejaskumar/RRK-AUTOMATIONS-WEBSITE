import Layout from "./Layout";
import SEOHead from "./SEOHead";
import CTABanner from "./CTABanner";
import TrustedBySection from "./TrustedBySection";
import TestimonialsSection from "./TestimonialsSection";
import CaseStudiesSection from "./CaseStudiesSection";
import { Button } from "./ui/button";
import { useCalendlyGate } from "./CalendlyLeadGate";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Check, Clock, ShieldCheck } from "lucide-react";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildServiceSchema,
  getRelatedServices,
} from "../lib/serviceSchemas";

const ACCENTS = {
  secondary: {
    text: "text-secondary",
    bgSoft: "bg-secondary/10",
    border: "border-secondary/30",
    glow: "bg-secondary/20",
  },
  accent: {
    text: "text-accent",
    bgSoft: "bg-accent/10",
    border: "border-accent/30",
    glow: "bg-accent/20",
  },
};

export default function ServiceLanding({
  slug,
  seo,
  icon: Icon,
  accent = "secondary",
  eyebrow,
  title,
  titleAccent,
  description,
  stats = [],
  problems = [],
  includes = [],
  steps = [],
  faqs = [],
  testimonials = [],
  caseStudy = null,
  trustLabel = "Trusted workflows built on the tools you already use",
  ctaPoints = [],
}) {
  const { openGate } = useCalendlyGate();
  const a = ACCENTS[accent] ?? ACCENTS.secondary;
  const relatedServices = getRelatedServices(slug);
  const structuredData = [
    buildServiceSchema({ slug, seo, eyebrow }),
    buildBreadcrumbSchema({ slug, seo }),
    buildFaqSchema(faqs),
  ];

  return (
    <Layout>
      <SEOHead
        title={seo.title}
        description={seo.description}
        keywords={seo.keywords}
        path={`/${slug}`}
        structuredData={structuredData}
      />

      <section className="page-hero relative overflow-hidden bg-background pb-20">
        <div
          className={`absolute right-0 top-10 h-[480px] w-[480px] ${a.glow} pointer-events-none rounded-full blur-[140px]`}
        />
        <div className="section-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div
              className={`mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 ${a.bgSoft} ${a.text} ${a.border}`}
            >
              {Icon && <Icon className="h-4 w-4" />}
              <span className="text-xs font-semibold uppercase tracking-wide">
                {eyebrow}
              </span>
            </div>
            <h1 className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              {title} <span className={a.text}>{titleAccent}</span>
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              {description}
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                variant="cta"
                size="xl"
                className="w-full sm:w-auto"
                onClick={() => openGate({ source: slug })}
              >
                <span className="flex items-center gap-2">
                  Book Free Audit
                  <ArrowRight className="h-5 w-5" />
                </span>
              </Button>
              <Button variant="outline" size="xl" className="w-full sm:w-auto" asChild>
                <a
                  href="https://wa.me/918341374436"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="h-5 w-5" />
                  Ask on WhatsApp
                </a>
              </Button>
            </div>

            {ctaPoints.length > 0 && (
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
                {ctaPoints.map((point) => (
                  <p
                    key={point}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <ShieldCheck className={`h-4 w-4 shrink-0 ${a.text}`} />
                    {point}
                  </p>
                ))}
              </div>
            )}

            {stats.length > 0 && (
              <div className="mt-14 flex flex-wrap gap-x-10 gap-y-6 border-t border-border pt-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className={`text-2xl font-bold ${a.text}`}>{stat.value}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        </div>
      </section>

      {problems.length > 0 && (
        <section className="bg-muted/20 py-20">
          <div className="section-container">
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">What this fixes</h2>
            <p className="mb-12 max-w-2xl text-muted-foreground">
              The day-to-day problems this removes from your team&apos;s plate.
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {problems.map((problem) => (
                <div
                  key={problem.problem}
                  className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-secondary/40"
                >
                  <p className="mb-3 text-sm text-muted-foreground line-through decoration-red-500/40">
                    {problem.problem}
                  </p>
                  <p className="flex items-start gap-2 text-sm font-semibold text-foreground">
                    <Check className={`mt-0.5 h-4 w-4 shrink-0 ${a.text}`} />
                    {problem.outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {includes.length > 0 && (
        <section className="py-20">
          <div className="section-container">
            <h2 className="mb-12 text-2xl font-bold sm:text-3xl">
              What&apos;s included
            </h2>
            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {includes.map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${a.bgSoft}`}
                  >
                    <Check className={`h-5 w-5 ${a.text}`} />
                  </div>
                  <div>
                    <h3 className="mb-1.5 font-semibold">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <TrustedBySection title={trustLabel} density="compact" />

      {caseStudy && (
        <CaseStudiesSection
          density="compact"
          eyebrow="Relevant Case Study"
          title={caseStudy.title}
          description={caseStudy.description}
          items={caseStudy.items}
          featureTitle={caseStudy.featureTitle}
          featureDescription={caseStudy.featureDescription}
          featureAlt={caseStudy.featureAlt}
          featureImage={caseStudy.featureImage}
          demoSource={`${slug}-case-study`}
        />
      )}

      {steps.length > 0 && (
        <section className="bg-muted/20 py-20">
          <div className="section-container">
            <div className="mb-3 flex items-center gap-2">
              <Clock className={`h-5 w-5 ${a.text}`} />
              <h2 className="text-2xl font-bold sm:text-3xl">
                From call to live in 48-72 hours
              </h2>
            </div>
            <p className="mb-12 max-w-2xl text-muted-foreground">
              A short, predictable path from first conversation to a working system.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative rounded-2xl border border-border bg-card p-6"
                >
                  <span className={`text-sm font-bold ${a.text}`}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-2 mt-2 font-semibold">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {testimonials.length > 0 && (
        <TestimonialsSection
          density="compact"
          items={testimonials}
          eyebrow="Client Proof"
          title={`What clients say about our ${eyebrow.toLowerCase()} work`}
          description="Short feedback from teams that used this service to improve response speed, follow-up quality, and conversion outcomes."
        />
      )}

      {faqs.length > 0 && (
        <section className="py-20">
          <div className="section-container max-w-3xl">
            <h2 className="mb-10 text-2xl font-bold sm:text-3xl">
              Questions, answered
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.q}
                  className="group rounded-2xl border border-border bg-card p-6"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between font-semibold">
                    {faq.q}
                    <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {relatedServices.length > 0 && (
        <section className="bg-muted/20 py-20">
          <div className="section-container">
            <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
                  Related services
                </h2>
                <p className="max-w-2xl text-muted-foreground">
                  Explore the other automation services businesses usually pair with this service.
                </p>
              </div>
              <Link
                to="/services"
                className={`text-sm font-semibold ${a.text} hover:underline`}
              >
                View all services
              </Link>
            </div>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  to={`/${service.slug}`}
                  className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-secondary/40"
                >
                  <h3 className="mb-2 font-semibold">{service.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner
        title={`Ready to put ${eyebrow.toLowerCase()} to work?`}
        description="Book a free audit and we will show you the highest-impact workflow to launch first, the expected outcome, and how quickly we can go live."
        primaryLabel="Book Free Audit"
        source={`${slug}-final-cta`}
        note="Clear next steps, no obligation, and a working recommendation tailored to your current setup."
      />
    </Layout>
  );
}

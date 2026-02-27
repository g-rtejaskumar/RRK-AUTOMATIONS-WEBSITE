import { Phone, Cog, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: "01",
    title: "Free Automation Audit",
    description: "15-minute call to understand your workflows and identify automation opportunities.",
    highlight: "15 Minutes",
  },
  {
    icon: Cog,
    number: "02",
    title: "We Build & Test",
    description: "Our team builds, tests, and deploys your custom automation solution.",
    highlight: "48-72 Hours",
  },
  {
    icon: TrendingUp,
    number: "03",
    title: "You Get Results",
    description: "Start seeing more sales or time saved immediately after deployment.",
    highlight: "Instant ROI",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="section-container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">Process</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg">
            From audit to automation in less than 72 hours. Simple, fast, effective.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection Line (Desktop) */}
          <div className="hidden md:block absolute top-24 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-secondary/20 via-secondary to-accent/20" />

          {steps.map((step, index) => (
            <div key={step.title} className="relative text-center group">
              {/* Number Badge */}
              <div className="relative inline-flex mb-6">
                <div className="w-20 h-20 rounded-2xl bg-card shadow-elevated flex items-center justify-center border border-border group-hover:border-secondary/30 transition-all duration-300 group-hover:shadow-glow">
                  <step.icon className="w-8 h-8 text-secondary" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground text-sm font-bold rounded-full flex items-center justify-center">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="px-4">
                <span className="inline-block px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full mb-4">
                  {step.highlight}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;

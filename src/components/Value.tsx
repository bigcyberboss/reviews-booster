"use client";

const STEPS = [
  {
    num: "01",
    title: "Social Proof",
    desc: "A steady stream of authentic reviews builds a 4.8+ rating. Customers see: \"this business is trusted.\"",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--star)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Trust Before Contact",
    desc: "79% of consumers check reviews BEFORE reaching out. High rating lowers the barrier to purchase.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent-glow)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
        <path d="M12 5.36 8.87 8.5a2.13 2.13 0 0 0 0 3h0a2.13 2.13 0 0 0 3 0L12 11.5" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Conversion Lift",
    desc: "Products with reviews are purchased 3.7x more often. More sales without increasing traffic.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--success)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "SEO & Visibility",
    desc: "Google prioritizes businesses with active review feeds. Higher rank = free organic traffic.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <circle cx="11" cy="11" r="3" strokeDasharray="2 2" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Google Ads Advantage",
    desc: "Star ratings appear next to your ads. Higher CTR, lower CPC. You stand out where competitors don't.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" fill="var(--accent)" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Repeat: The Growth Loop",
    desc: "More reviews → more trust → more sales → more customers willing to leave reviews. A self-reinforcing cycle.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18.178 8c5.096 5.096-.587 10.779-5.683 5.683" />
        <path d="M5.822 16c-5.096-5.096.587-10.779 5.683-5.683" />
      </svg>
    ),
  },
];

export function Value() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20 animate-on-scroll">
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl mb-4">
            How Reviews Become Your{" "}
            <span className="gradient-text">Silent Sales Engine</span>
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 sm:left-8 top-0 bottom-0 w-px hidden sm:block"
            style={{
              background: "linear-gradient(180deg, transparent, var(--accent) 10%, var(--accent) 90%, transparent)",
              opacity: 0.2,
            }}
          />

          <div className="flex flex-col gap-8 sm:gap-6">
            {STEPS.map((step, i) => (
              <div
                key={step.num}
                className={`relative flex items-start gap-5 sm:gap-8 group animate-on-scroll stagger-${Math.min(i + 1, 4)}`}
              >
                {/* Number + icon node */}
                <div className="relative z-10 flex flex-col items-center gap-2 shrink-0">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center border border-border bg-bg-surface/80 backdrop-blur-sm group-hover:border-accent/40 group-hover:shadow-[0_0_24px_var(--glow-soft)] transition-all duration-300">
                    {step.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2 pt-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[11px] font-semibold text-accent/60 uppercase tracking-[0.2em]">
                      Step {step.num}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-semibold text-text-primary mb-2 group-hover:text-white transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed max-w-lg">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom metric */}
        <div className="mt-16 animate-on-scroll">
          <div className="gradient-border rounded-2xl">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8 text-center sm:text-left">
              <span className="text-5xl sm:text-6xl font-heading gradient-text shrink-0">3.7x</span>
              <div>
                <p className="text-text-primary font-semibold text-lg">
                  Higher purchase likelihood with reviews
                </p>
                <a
                  href="https://spiegel.medill.northwestern.edu/how-online-reviews-influence-sales/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent text-sm hover:underline"
                >
                  Spiegel Research Center ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

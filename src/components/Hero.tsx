import { waLinks } from "@/lib/data";
import HeroGraphic from "@/components/HeroGraphic";

export default function Hero() {
  return (
    <section
      id="arxiki"
      className="gradient-hero relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28"
    >
      {/* Decorative animated orbs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <span className="animate-blob absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary/25 blur-3xl" />
        <span
          className="animate-blob absolute -right-20 top-1/3 h-80 w-80 rounded-full bg-accent/15 blur-3xl"
          style={{ animationDelay: "-6s" }}
        />
        <span
          className="animate-blob absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-primary/15 blur-3xl"
          style={{ animationDelay: "-12s" }}
        />
      </div>

      <div className="container-shell relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-muted">
            Η #1 Ελληνική IPTV Υπηρεσία
          </span>

          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Απολαύστε το <span className="text-gradient">IPTV Greek</span>
            <br />σε Κρυστάλλινη 4K
          </h1>

          <p className="mt-6 max-w-2xl text-balance text-base text-muted sm:text-lg">
            Το IPTV Greek σας προσφέρει 50.000+ ελληνικά και διεθνή κανάλια σε
            HD και 4K, μαζί με 200.000+ ταινίες και σειρές. Ιδανικό για όλη την
            οικογένεια — εύκολη εγκατάσταση και σταθερή ροή. Ξεκινήστε σήμερα!
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href={waLinks.freeTrial}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shine rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-transform hover:scale-105"
            >
              Δωρεάν Δοκιμή
            </a>
            <a
              href={waLinks.buyNow}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border bg-surface px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:border-primary/60"
            >
              Αγορά Τώρα
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2 text-sm text-muted">
            <span className="text-accent tracking-widest">★★★★★</span>
            <span>Βαθμολογία 4.9</span>
            <span aria-hidden>·</span>
            <span>10.000+ ικανοποιημένοι πελάτες</span>
          </div>
        </div>

        <HeroGraphic />
      </div>
    </section>
  );
}

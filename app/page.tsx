import { ArrowRight, HeartPulse, MoonStar, TrendingUp } from "lucide-react";

const stats = [
  { label: "weekly strain captured", value: "18.4k" },
  { label: "recovery alerts sent", value: "92%" },
  { label: "athletes avoiding overload", value: "3.2x" },
];

const pillars = [
  {
    title: "Measure the invisible",
    copy:
      "Translate heart rate, workload, sleep, and self-reported effort into a strain score the whole team can understand at a glance.",
    icon: HeartPulse,
  },
  {
    title: "See risk before it spikes",
    copy:
      "Daily readiness bands and trend lines highlight when pressure is compounding so coaches can adjust before performance drops.",
    icon: TrendingUp,
  },
  {
    title: "Build rest into the plan",
    copy:
      "Recovery suggestions turn rest into an intentional part of training instead of something athletes negotiate after burnout.",
    icon: MoonStar,
  },
];

export default function WelcomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.88),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(59,130,246,0.18),_transparent_28%)]" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-8 lg:px-10">
        <header className="flex items-center justify-between rounded-full border-2 border-border bg-secondary-background/90 px-5 py-3 shadow-shadow backdrop-blur">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-foreground/55">
              Show Your Strain
            </p>
            <p className="text-sm text-foreground/70">
              Presentation demo for coaches and high-output teams
            </p>
          </div>

          <a
            href="#story"
            className="rounded-full border-2 border-border bg-main px-4 py-2 text-sm font-semibold text-main-foreground shadow-shadow transition-transform duration-200 hover:-translate-y-0.5"
          >
            View story
          </a>
        </header>

        <div className="grid flex-1 items-center gap-12 py-10 lg:grid-cols-[1.15fr_0.85fr] lg:py-16">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border-2 border-border bg-secondary-background px-4 py-2 text-sm shadow-shadow">
              <span className="h-2.5 w-2.5 rounded-full bg-chart-2" />
              Athlete load is only useful when the whole room can act on it.
            </div>

            <div className="space-y-6">
              <h1 className="max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-7xl">
                A clearer way to present strain, readiness, and recovery.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-foreground/72 sm:text-xl">
                This demo page turns Show Your Strain into a product story: what
                the platform measures, why it matters, and how teams use it to
                keep performance high without normalizing burnout.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href="#story"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-border bg-main px-6 py-3 text-base font-semibold text-main-foreground shadow-shadow transition-transform duration-200 hover:-translate-y-0.5"
              >
                See the narrative
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#metrics"
                className="inline-flex items-center justify-center rounded-full border-2 border-border bg-secondary-background px-6 py-3 text-base font-semibold shadow-shadow transition-transform duration-200 hover:-translate-y-0.5"
              >
                Review proof points
              </a>
            </div>

            <div
              id="metrics"
              className="grid gap-4 sm:grid-cols-3"
            >
              {stats.map((stat) => (
                <article
                  key={stat.label}
                  className="rounded-[28px] border-2 border-border bg-secondary-background p-5 shadow-shadow"
                >
                  <p className="text-3xl font-black tracking-[-0.04em]">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-foreground/68">
                    {stat.label}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 hidden h-28 w-28 rounded-full bg-chart-3/65 blur-2xl lg:block" />
            <div className="absolute -bottom-8 right-4 hidden h-32 w-32 rounded-full bg-chart-1/30 blur-2xl lg:block" />

            <div className="relative overflow-hidden rounded-[36px] border-2 border-border bg-[#10131f] p-6 text-white shadow-[10px_10px_0_0_#000]">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.26em] text-white/55">
                    Live readiness panel
                  </p>
                  <h2 className="mt-2 text-2xl font-bold">
                    Team load at a glance
                  </h2>
                </div>
                <div className="rounded-full border border-white/15 px-3 py-1 text-sm text-white/72">
                  Morning sync
                </div>
              </div>

              <div className="mt-8 grid gap-4">
                <div className="rounded-[28px] bg-white/8 p-5 backdrop-blur">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-sm text-white/60">Current strain</p>
                      <p className="mt-2 text-5xl font-black tracking-[-0.05em]">
                        78
                      </p>
                    </div>
                    <div className="rounded-2xl bg-chart-3 px-4 py-2 text-sm font-semibold text-black">
                      Stable
                    </div>
                  </div>
                  <div className="mt-5 h-3 rounded-full bg-white/10">
                    <div className="h-3 w-[78%] rounded-full bg-chart-3" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[28px] bg-white/8 p-5">
                    <p className="text-sm text-white/60">Recovery window</p>
                    <p className="mt-3 text-2xl font-bold">14 hrs recommended</p>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      One athlete trending red after back-to-back high output sessions.
                    </p>
                  </div>
                  <div className="rounded-[28px] bg-white/8 p-5">
                    <p className="text-sm text-white/60">Coaching action</p>
                    <p className="mt-3 text-2xl font-bold">Reduce volume by 12%</p>
                    <p className="mt-2 text-sm leading-6 text-white/70">
                      Preserve intensity, shift emphasis toward mobility and technique.
                    </p>
                  </div>
                </div>

                <div className="rounded-[28px] border border-dashed border-white/18 bg-white/6 p-5">
                  <div className="flex items-center justify-between text-sm text-white/60">
                    <span>7-day pattern</span>
                    <span>Mon to Sun</span>
                  </div>
                  <div className="mt-4 flex h-32 items-end gap-3">
                    {["34%", "48%", "61%", "72%", "68%", "88%", "52%"].map(
                      (height, index) => (
                        <div key={height} className="flex flex-1 flex-col items-center gap-3">
                          <div
                            className="w-full rounded-t-2xl bg-gradient-to-t from-chart-1 to-chart-3"
                            style={{ height }}
                          />
                          <span className="text-xs text-white/45">
                            {["M", "T", "W", "T", "F", "S", "S"][index]}
                          </span>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section
          id="story"
          className="grid gap-5 pb-10 lg:grid-cols-3"
        >
          {pillars.map(({ title, copy, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[32px] border-2 border-border bg-secondary-background p-6 shadow-shadow"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-border bg-chart-1/15">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-2xl font-bold tracking-[-0.03em]">
                {title}
              </h3>
              <p className="mt-3 text-base leading-7 text-foreground/72">
                {copy}
              </p>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}

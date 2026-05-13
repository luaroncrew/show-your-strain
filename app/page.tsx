import { DailyCheckIn } from "@/components/DailyCheckIn";
import { Logo } from "@/components/Logo";
import { SignInForm } from "@/components/SignInForm";

export default function WelcomePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col lg:flex-row">
        <div className="flex-1 bg-secondary-background p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <h1 className="text-4xl font-bold text-foreground mb-6 md:text-5xl">
            Show Your Strain
          </h1>

          <div className="space-y-6 text-foreground/80">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-2">Why We Built This</h2>
              <p className="leading-relaxed">
                In a world where we&apos;re constantly pushing ourselves, it&apos;s easy to lose
                track of our limits. Show Your Strain helps make effort visible, so training
                decisions become more deliberate and less reactive.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-2">What It Means</h2>
              <p className="leading-relaxed">
                Strain without context turns into guesswork. By comparing workload against
                recovery, you get a fast signal for when to push, when to maintain, and when
                to pull back before fatigue compounds.
              </p>
            </section>
          </div>

          <div className="mt-8 max-w-xl">
            <DailyCheckIn />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-center bg-background p-8 md:p-12 lg:p-16">
          <div className="w-full max-w-sm">
            <div className="mb-8 flex flex-col items-center text-center">
              <Logo size={64} />
              <h2 className="mt-4 text-2xl font-bold text-foreground">Show Your Strain</h2>
              <p className="mt-1 text-foreground/60">Track. Understand. Optimize.</p>
            </div>

            <SignInForm />
          </div>
        </div>
      </div>
    </main>
  );
}

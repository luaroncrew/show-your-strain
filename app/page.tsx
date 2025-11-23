import { Logo } from "@/components/Logo";
import { SignInForm } from "@/components/SignInForm";

export default function WelcomePage() {
  return (
    <main className="min-h-screen flex">
      {/* Left Side - Motivation */}
      <div className="flex-1 bg-secondary-background p-12 flex flex-col justify-center">
        <h1 className="text-4xl font-bold text-foreground mb-6">
          Show Your Strain
        </h1>

        <div className="space-y-6 text-foreground/80">
          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Why We Built This
            </h2>
            <p className="leading-relaxed">
              In a world where we're constantly pushing ourselves, it's easy to lose track
              of our limits. Show Your Strain was created to help you understand and
              visualize the effort you put into your work, fitness, and daily activities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Our Mission
            </h2>
            <p className="leading-relaxed">
              We believe that awareness is the first step to improvement. By tracking and
              displaying your strain levels, we empower you to make informed decisions
              about when to push harder and when to rest.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              What You'll Get
            </h2>
            <ul className="list-disc list-inside space-y-1">
              <li>Real-time strain tracking and visualization</li>
              <li>Personalized insights based on your activity patterns</li>
              <li>Recovery recommendations to optimize performance</li>
              <li>Historical data to track progress over time</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Right Side - Sign In + Logo */}
      <div className="flex-1 bg-background p-12 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center mb-8">
          <Logo size={64} />
          <h2 className="text-2xl font-bold text-foreground mt-4">
            Show Your Strain
          </h2>
          <p className="text-foreground/60 mt-1">
            Track. Understand. Optimize.
          </p>
        </div>

        <SignInForm />
      </div>
    </main>
  );
}

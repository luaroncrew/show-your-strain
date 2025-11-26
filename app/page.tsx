import { Logo } from "@/components/Logo";
import { SignInForm } from "@/components/SignInForm";

export default function WelcomePage() {
  return (
    <main className="min-h-screen flex">
      {/* Left Side - Motivation */}
      <div className="flex-1 bg-secondary-background p-12 flex flex-col justify-center items-center text-center">
        <h1 className="text-5xl font-bold text-foreground mb-4">
          Push Smart, Not Hard
        </h1>
        <p className="text-xl text-foreground/70">
          Track your strain to unlock peak performance
        </p>
      </div>

      {/* Right Side - Sign In + Logo */}
      <div className="flex-1 bg-background p-12 flex flex-col items-center justify-center">
        <div className="flex flex-col items-center mb-8 text-center">
          <Logo size={64} />
          <h2 className="text-3xl font-bold text-foreground mt-4">
            Know Your Limits
          </h2>
          <p className="text-foreground/60 mt-2 text-sm">
            Visualize your effort, optimize your performance
          </p>
        </div>

        <SignInForm />
      </div>
    </main>
  );
}

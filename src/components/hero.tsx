import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background to-muted">
      <div className="container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-tighter">
            The best AI Agent and <br className="hidden sm:block" />
            AI-first Customer Service Platform
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            Fin is the first AI agent that delivers human-quality service.
            Use Fin on your existing platform, or Intercom's complete AI-first customer service platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button asChild size="lg" className="font-medium">
              <Link href="/contact-sales">Contact sales</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-medium">
              <Link href="/view-demos">View demo</Link>
            </Button>
            <Button asChild size="lg" className="font-medium">
              <Link href="/signup">Start free trial</Link>
            </Button>
          </div>

          <div className="mt-12 w-full max-w-5xl">
            <div className="relative rounded-xl overflow-hidden shadow-2xl bg-white p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-card rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold mb-2">Fin AI Agent</h3>
                  <p className="text-sm text-muted-foreground">The human-quality AI agent that works with any help desk</p>
                  <Button variant="link" className="mt-4 px-0">Learn more</Button>
                </div>
                <div className="bg-card rounded-lg p-4 shadow-sm">
                  <h3 className="font-bold mb-2">Customer Service Platform</h3>
                  <p className="text-sm text-muted-foreground">The AI-first platform trusted by thousands of support leaders</p>
                  <Button variant="link" className="mt-4 px-0">Learn more</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient background */}
      <div className="absolute top-0 left-0 right-0 h-full overflow-hidden">
        <div className="absolute inset-0 opacity-30 intercom-gradient"></div>
      </div>
    </section>
  );
};

export default Hero;

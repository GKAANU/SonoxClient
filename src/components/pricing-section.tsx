import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const PricingSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pricing plans for every team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that best fits your needs, whether you're using Fin on your existing platform or Intercom's complete customer service solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <PricingCard
            title="Fin AI Agent on your existing help desk"
            price="$0.99"
            period="per resolution"
            description="Works with Zendesk, Salesforce and more."
            features={[
              "Human-quality AI responses",
              "Tailored to your brand voice",
              "Deep integration with your knowledge base",
              "Simple installation"
            ]}
            buttonText="View pricing"
            buttonLink="/pricing"
          />

          <PricingCard
            title="Fin AI Agent + Intercom's Customer Service Platform"
            price="From $29"
            period="per seat per month"
            description="+ $0.99 per resolution with a 14 day free-trial."
            features={[
              "All Fin AI Agent features",
              "Complete omnichannel support",
              "AI-powered agent tools",
              "Advanced reporting and insights"
            ]}
            buttonText="View pricing"
            buttonLink="/pricing"
            highlighted={true}
          />
        </div>
      </div>
    </section>
  );
};

interface PricingCardProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonLink: string;
  highlighted?: boolean;
}

const PricingCard = ({
  title,
  price,
  period,
  description,
  features,
  buttonText,
  buttonLink,
  highlighted = false
}: PricingCardProps) => {
  return (
    <Card className={`border-none shadow-md overflow-hidden h-full ${highlighted ? 'bg-primary/5' : 'bg-white'}`}>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
        <div className="mt-4">
          <span className="text-4xl font-bold">{price}</span>
          <span className="text-muted-foreground ml-1">{period}</span>
        </div>
        <CardDescription className="mt-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {features.map((feature, i) => (
            <li key={i} className="flex items-start gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 text-primary flex-shrink-0"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                <polyline points="22 4 12 14.01 9 11.01"/>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" variant={highlighted ? "default" : "outline"}>
          <Link href={buttonLink}>{buttonText}</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingSection;

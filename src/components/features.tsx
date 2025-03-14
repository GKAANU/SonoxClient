import { Card } from "@/components/ui/card";

const Features = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Centralize all your channels in one connected platform
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            number="01"
            title="Get complete oversight"
            description="Manage all your channels in a single workspace for total visibility into every conversation and touchpoint."
          />
          <FeatureCard
            number="02"
            title="Consistent, high-quality service"
            description="Maintain a consistent, personalized, and contextual customer experience across every channel."
          />
          <FeatureCard
            number="03"
            title="Modernize your support"
            description="Meet your customers on the channels that suit them best, like WhatsApp, Facebook and Instagram."
          />
        </div>
      </div>
    </section>
  );
};

interface FeatureCardProps {
  number: string;
  title: string;
  description: string;
}

const FeatureCard = ({ number, title, description }: FeatureCardProps) => {
  return (
    <Card className="p-6 border-none shadow-sm bg-muted/40 h-full">
      <div className="mb-4 text-muted-foreground font-semibold">
        {number}
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </Card>
  );
};

export default Features;

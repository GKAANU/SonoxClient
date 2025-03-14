import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Features from "@/components/features";
import AIAgent from "@/components/ai-agent";
import CustomerQuotes from "@/components/customer-quotes";
import PricingSection from "@/components/pricing-section";
import Footer from "@/components/footer";
import ChatWidget from "@/components/chat-widget";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navigation />
      <main className="flex-grow">
        <Hero />
        <Features />
        <AIAgent />
        <CustomerQuotes />
        <PricingSection />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}

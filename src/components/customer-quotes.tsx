"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const CustomerQuotes = () => {
  const [activeTab, setActiveTab] = useState("quote1");

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The results speak for themselves, so do our customers
          </h2>
        </div>

        <Tabs defaultValue="quote1" className="max-w-4xl mx-auto" onValueChange={setActiveTab}>
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-cols-3 w-full max-w-md">
              <TabsTrigger value="quote1">Lightspeed</TabsTrigger>
              <TabsTrigger value="quote2">TravelPerk</TabsTrigger>
              <TabsTrigger value="quote3">MOO</TabsTrigger>
            </TabsList>
          </div>

          <div className="relative">
            <TabsContent value="quote1" className="mt-0">
              <QuoteCard
                quote="The results we have seen with Fin are groundbreaking, double-digit gains in engagement and resolution rates."
                author="Sam Forde"
                role="Merchant Support Manager, Zapiet"
                stats={[
                  { label: "Resolution rate", value: "73%" },
                  { label: "CSAT Score", value: "97%" }
                ]}
              />
            </TabsContent>

            <TabsContent value="quote2" className="mt-0">
              <QuoteCard
                quote="Meeting customer demand has never been smoother, leading to an impressive 98% CSAT."
                author="Jeff Cardoso"
                role="Vice President Operations, Azazie"
                stats={[
                  { label: "CSAT Score", value: "98%" },
                  { label: "First Response Time", value: "Under 1 min" }
                ]}
              />
            </TabsContent>

            <TabsContent value="quote3" className="mt-0">
              <QuoteCard
                quote="Within six months, Fin had resolved over 6,000 conversations, saved the team over 1,300 hours and pushed self-serve support rates as high as 87%."
                author="Dane Burgess"
                role="Customer Support Director, Linktree"
                stats={[
                  { label: "Time Saved", value: "1,300+ hrs" },
                  { label: "Self-serve rate", value: "87%" }
                ]}
              />
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </section>
  );
};

interface QuoteCardProps {
  quote: string;
  author: string;
  role: string;
  stats: { label: string; value: string }[];
}

const QuoteCard = ({ quote, author, role, stats }: QuoteCardProps) => {
  return (
    <Card className="border-none shadow-md bg-white">
      <CardContent className="p-8">
        <blockquote className="text-xl md:text-2xl font-medium mb-8 leading-relaxed">
          "{quote}"
        </blockquote>

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <div className="font-bold">{author}</div>
            <div className="text-muted-foreground text-sm">{role}</div>
          </div>

          <div className="flex gap-8">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-2xl font-bold text-primary">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CustomerQuotes;

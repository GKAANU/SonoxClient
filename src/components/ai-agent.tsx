import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const AIAgent = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            The first human-quality AI agent
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="border-none shadow-md overflow-hidden bg-white">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Fin AI Agent</CardTitle>
              <CardDescription>
                Fin handles all your frontline support with human-quality service
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <div>
                  <h3 className="font-medium">Knowledge</h3>
                  <p className="text-sm text-muted-foreground">
                    Fin uses all of your support knowledge to generate accurate answers.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <div>
                  <h3 className="font-medium">Behaviour</h3>
                  <p className="text-sm text-muted-foreground">
                    Fin speaks in your tone of voice, and follows your policies and procedures.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <div>
                  <h3 className="font-medium">Actions</h3>
                  <p className="text-sm text-muted-foreground">
                    Fin personalizes every interaction and takes actions on behalf of customers.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <div>
                  <h3 className="font-medium">Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    AI-generated insights give you full visibility and trust in Fin's performance.
                  </p>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild variant="link" className="px-0">
                <Link href="/fin">Learn more</Link>
              </Button>
            </CardFooter>
          </Card>

          <div>
            <Card className="border-none shadow-md mb-8 overflow-hidden bg-white">
              <CardHeader className="pb-0">
                <CardTitle className="text-xl">Use Fin with Intercom or your existing platform</CardTitle>
              </CardHeader>
              <CardContent className="pt-4 space-y-2">
                <div className="flex items-center gap-3 p-3 rounded-md border border-border">
                  <div className="flex items-center justify-center h-8 w-8">
                    <span className="font-bold">I</span>
                  </div>
                  <span>Intercom</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-md border border-border">
                  <div className="flex items-center justify-center h-8 w-8">
                    <span className="font-bold">Z</span>
                  </div>
                  <span>Zendesk</span>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-md border border-border">
                  <div className="flex items-center justify-center h-8 w-8">
                    <span className="font-bold">S</span>
                  </div>
                  <span>Salesforce</span>
                </div>
              </CardContent>
            </Card>

            <div className="p-6 bg-accent/10 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Performance beyond what's humanly possible</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium">Fin resolution rate</span>
                    <span className="text-sm font-medium">54%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full" style={{ width: '54%' }}></div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Fin resolves more questions, more accurately than any other AI agent.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAgent;

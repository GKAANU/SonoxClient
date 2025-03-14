import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

const Navigation = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Intercom</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1">
                  Product <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>For customers</DropdownMenuLabel>
                <DropdownMenuItem>
                  <Link href="/fin" className="flex w-full">Fin AI Agent</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/omnichannel" className="flex w-full">Omnichannel</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/help-center" className="flex w-full">Help Center</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>For support agents</DropdownMenuLabel>
                <DropdownMenuItem>
                  <Link href="/inbox" className="flex w-full">Inbox</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/copilot" className="flex w-full">Copilot</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/tickets" className="flex w-full">Tickets</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuLabel>For support leaders</DropdownMenuLabel>
                <DropdownMenuItem>
                  <Link href="/reporting" className="flex w-full">AI Insights & Reporting</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/workflows" className="flex w-full">Workflows</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/integrations" className="flex w-full">Apps & Integrations</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="gap-1">
                  Resources <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuItem>
                  <Link href="/why-intercom" className="flex w-full">Why Intercom?</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/customers" className="flex w-full">Customers</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/help" className="flex w-full">Help Center</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/blog" className="flex w-full">Blog</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/pricing" className="text-sm font-medium">
              Pricing
            </Link>

            <Link href="/demo" className="text-sm font-medium">
              Demo
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/contact-sales" className="hidden md:block text-sm font-medium">
            Contact sales
          </Link>
          <div className="hidden md:flex items-center gap-2">
            <Link href="/a/inbox" className="text-sm font-medium">
              Admin Dashboard
            </Link>
            <Link href="/signin" className="text-sm font-medium">
              Sign in
            </Link>
          </div>
          <Link href="/view-demos">
            <Button variant="ghost" size="sm">
              View demo
            </Button>
          </Link>
          <Link href="/signup">
            <Button size="sm">
              Start free trial
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navigation;

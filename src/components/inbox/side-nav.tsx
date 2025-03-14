"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  BarChart,
  Inbox,
  Users,
  Settings,
  MessageSquare,
  SlidersHorizontal,
  Headphones,
  Book,
  FileText,
  ChevronDown
} from "lucide-react";

const SideNav = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname.startsWith(path);
  };

  return (
    <div className="w-64 h-full bg-white border-r border-gray-200 flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center text-white font-semibold">
            I
          </div>
          <div className="font-semibold">Intercom Clone</div>
        </div>
      </div>

      <div className="flex-1 overflow-auto p-2">
        <nav className="space-y-1">
          <SideNavItem
            href="/a/inbox"
            icon={<Inbox className="h-5 w-5" />}
            label="Inbox"
            isActive={isActive("/a/inbox")}
            badgeCount={12}
          />
          <SideNavItem
            href="/a/customers"
            icon={<Users className="h-5 w-5" />}
            label="Customers"
            isActive={isActive("/a/customers")}
          />
          <SideNavItem
            href="/a/messages"
            icon={<MessageSquare className="h-5 w-5" />}
            label="Messages"
            isActive={isActive("/a/messages")}
          />
          <SideNavItem
            href="/a/help-center"
            icon={<Book className="h-5 w-5" />}
            label="Help Center"
            isActive={isActive("/a/help-center")}
          />
          <SideNavItem
            href="/a/articles"
            icon={<FileText className="h-5 w-5" />}
            label="Articles"
            isActive={isActive("/a/articles")}
          />
          <SideNavItem
            href="/a/workflows"
            icon={<SlidersHorizontal className="h-5 w-5" />}
            label="Workflows"
            isActive={isActive("/a/workflows")}
          />
          <SideNavItem
            href="/a/reports"
            icon={<BarChart className="h-5 w-5" />}
            label="Reports"
            isActive={isActive("/a/reports")}
          />
          <SideNavItem
            href="/a/settings"
            icon={<Settings className="h-5 w-5" />}
            label="Settings"
            isActive={isActive("/a/settings")}
          />
        </nav>
      </div>

      <div className="p-4 border-t border-gray-200">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
              <span className="text-sm font-medium">JD</span>
            </div>
            <div className="text-sm font-medium">John Doe</div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

interface SideNavItemProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive: boolean;
  badgeCount?: number;
}

const SideNavItem = ({ href, icon, label, isActive, badgeCount }: SideNavItemProps) => {
  return (
    <Link href={href} className="block">
      <div
        className={`flex items-center justify-between px-3 py-2 rounded-md ${
          isActive ? "bg-primary/10 text-primary" : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        <div className="flex items-center gap-3">
          {icon}
          <span className="text-sm font-medium">{label}</span>
        </div>
        {badgeCount && (
          <div className="bg-primary text-white text-xs font-medium rounded-full w-5 h-5 flex items-center justify-center">
            {badgeCount > 99 ? "99+" : badgeCount}
          </div>
        )}
      </div>
    </Link>
  );
};

export default SideNav;

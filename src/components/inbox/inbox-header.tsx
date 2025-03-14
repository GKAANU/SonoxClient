"use client";

import { Button } from "@/components/ui/button";
import { Bell, HelpCircle } from "lucide-react";

// Note: This component is no longer used as the header is integrated directly in the inbox dashboard
const InboxHeader = () => {
  return (
    <div className="p-4 flex items-center justify-between border-b border-border">
      <div className="flex items-center">
        <h1 className="font-semibold text-lg">Inbox</h1>
      </div>
    </div>
  );
};

export default InboxHeader;

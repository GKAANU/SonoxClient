"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Search,
  PlusCircle,
  Filter,
  Star,
  ChevronDown,
  Inbox as InboxIcon,
  MessageCircle,
  Users,
  BarChart,
  Settings,
  User,
  FileText,
  Clock,
  BookOpen,
  AlignJustify,
  CheckCheck,
  NotepadText,
  MoreHorizontal
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ConversationView from "./conversation-view";

// Mock data for conversations
const MOCK_CONVERSATIONS = [
  {
    id: "1",
    customer: {
      name: "Deepak Appozhatth",
      email: "manageparthotelsharsha@gmail.com",
      avatar: "",
      company: "Masa Turkish Eatery"
    },
    lastMessage: "Yes, I'm a customer",
    time: "1d",
    unread: false,
    status: "open",
    assignee: "Youssra Bahadi",
    reply: "Quick reply",
    team: "Fineline Customer Support"
  },
  {
    id: "2",
    customer: {
      name: "FB - Level 43 Sky Lounge",
      email: "level43@example.com",
      avatar: "",
      company: "Level 43 Sky Lounge"
    },
    lastMessage: "Merger: Which venue do you wish to upgrade?",
    time: "1d",
    unread: false,
    status: "open",
    assignee: null,
    reply: "",
    team: ""
  },
  {
    id: "3",
    customer: {
      name: "Michael Brown",
      email: "michael.brown@example.com",
      avatar: "",
      company: "Biking Adventures Galore"
    },
    lastMessage: "Thanks for your help! I've sorted it out now.",
    time: "1h ago",
    unread: false,
    status: "closed",
    assignee: "John Doe",
    reply: "",
    team: ""
  },
  {
    id: "4",
    customer: {
      name: "Sarah Williams",
      email: "sarah.williams@example.com",
      avatar: "",
      company: "Global Sales"
    },
    lastMessage: "When will the new feature be available? I've been waiting for it.",
    time: "3h ago",
    unread: false,
    status: "open",
    assignee: null,
    reply: "",
    team: ""
  },
  {
    id: "5",
    customer: {
      name: "David Miller",
      email: "david.miller@example.com",
      avatar: "",
      company: "Mobile Center"
    },
    lastMessage: "The payment failed when I tried to upgrade my plan.",
    time: "5h ago",
    unread: false,
    status: "open",
    assignee: null,
    reply: "",
    team: ""
  }
];

const InboxDashboard = () => {
  const [selectedTab, setSelectedTab] = useState("open");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedConversation, setSelectedConversation] = useState<string | null>("1");
  const [viewType, setViewType] = useState<"list" | "card">("list");

  const filteredConversations = MOCK_CONVERSATIONS.filter(
    conversation =>
      (selectedTab === "all" || conversation.status === selectedTab) &&
      (searchQuery === "" ||
        conversation.customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        conversation.lastMessage.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="flex h-full">
      {/* Left sidebar - Navigation */}
      <div className="w-[60px] bg-slate-900 h-full flex flex-col items-center">
        <div className="p-4 mt-1 mb-4">
          <div className="w-8 h-8 bg-slate-800 flex items-center justify-center rounded-md">
            <InboxIcon className="text-white h-5 w-5" />
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center space-y-5 py-2">
          <Button variant="ghost" className="h-9 w-9 rounded-md p-0 text-slate-400 hover:text-white hover:bg-slate-700">
            <InboxIcon className="h-5 w-5" />
          </Button>
          <Button variant="ghost" className="h-9 w-9 rounded-md p-0 text-slate-400 hover:text-white hover:bg-slate-700">
            <Users className="h-5 w-5" />
          </Button>
          <Button variant="ghost" className="h-9 w-9 rounded-md p-0 text-slate-400 hover:text-white hover:bg-slate-700">
            <MessageCircle className="h-5 w-5" />
          </Button>
          <Button variant="ghost" className="h-9 w-9 rounded-md p-0 text-slate-400 hover:text-white hover:bg-slate-700">
            <BarChart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" className="h-9 w-9 rounded-md p-0 text-slate-400 hover:text-white hover:bg-slate-700">
            <Settings className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-4 mb-2">
          <Avatar className="h-9 w-9 border-2 border-green-500">
            <AvatarImage src="" alt="User" />
            <AvatarFallback className="bg-slate-700 text-white text-xs">YB</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Left panel - Conversation list */}
      <div className="w-[250px] border-r border-gray-200 h-full flex flex-col bg-white">
        <div className="flex items-center p-4 border-b border-gray-200">
          <div className="text-lg font-medium">Inbox</div>
          <div className="ml-auto flex items-center gap-2">
            <Button variant="ghost" size="sm" className="p-1 h-8 w-8 text-gray-500">
              <Search className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm" className="p-1 h-8 w-8 text-gray-500">
              <PlusCircle className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center px-3 py-2">
          <Button variant="ghost" size="sm" className="text-xs flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-gray-400" />
              <span>All</span>
            </div>
          </Button>
        </div>

        <div className="overflow-y-auto flex-grow">
          <div className="px-4 py-1.5 text-xs text-gray-500 flex items-center">
            <div className="flex items-center gap-2 flex-1">
              <User className="h-3 w-3" />
              <span>Your Inbox</span>
            </div>
            <span>0</span>
          </div>
          <div className="px-4 py-1.5 text-xs text-gray-500 flex items-center">
            <div className="flex items-center gap-2 flex-1">
              <MessageCircle className="h-3 w-3" />
              <span>Mentions</span>
            </div>
            <span>0</span>
          </div>
          <div className="px-4 py-1.5 text-xs text-gray-500 flex items-center">
            <div className="flex items-center gap-2 flex-1">
              <NotepadText className="h-3 w-3" />
              <span>Created by you</span>
            </div>
            <span>0</span>
          </div>
          <div className="px-4 py-1.5 text-xs text-gray-500 flex items-center">
            <div className="flex items-center gap-2 flex-1">
              <FileText className="h-3 w-3" />
              <span>All</span>
            </div>
            <span>2</span>
          </div>
          <div className="px-4 py-1.5 text-xs text-gray-500 flex items-center">
            <div className="flex items-center gap-2 flex-1">
              <AlignJustify className="h-3 w-3" />
              <span>Unassigned</span>
            </div>
            <span>0</span>
          </div>
          <div className="px-4 py-1.5 text-xs text-gray-500 flex items-center">
            <div className="flex items-center gap-2 flex-1">
              <BarChart className="h-3 w-3" />
              <span>Dashboard</span>
            </div>
            <span></span>
          </div>

          <div className="mt-3 px-4 py-2 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="text-xs font-medium text-gray-500 flex items-center gap-1">
                Team inboxes
                <ChevronDown className="h-3 w-3" />
              </div>
            </div>

            <div className="mt-2 text-xs text-gray-500">
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 rounded-full bg-blue-500 flex items-center justify-center text-white">
                    <span className="text-[10px]">F</span>
                  </div>
                  <span>Finedine Customer Support</span>
                </div>
                <span>0</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center text-white">
                    <span className="text-[10px]">C</span>
                  </div>
                  <span>Customer Success Team</span>
                </div>
                <span>0</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center gap-1">
                  <div className="w-4 h-4 rounded-full bg-pink-500 flex items-center justify-center text-white">
                    <span className="text-[10px]">F</span>
                  </div>
                  <span>Finedine Sales Team</span>
                </div>
                <span>0</span>
              </div>
            </div>
          </div>

          <div className="mt-3 px-4 py-2 border-t border-gray-100">
            <div className="flex items-center justify-between">
              <div className="text-xs font-medium text-gray-500 flex items-center gap-1">
                Teammates
                <ChevronDown className="h-3 w-3" />
              </div>
            </div>

            <div className="mt-2 text-xs text-gray-500">
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center gap-1">
                  <Avatar className="h-4 w-4">
                    <AvatarFallback className="text-[8px] bg-gray-200">M</AvatarFallback>
                  </Avatar>
                  <span>Munzer</span>
                </div>
                <span>1</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <div className="flex items-center gap-1">
                  <Avatar className="h-4 w-4">
                    <AvatarFallback className="text-[8px] bg-gray-200">JZ</AvatarFallback>
                  </Avatar>
                  <span>Jose Zollo</span>
                </div>
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Middle panel - Conversation filters and list */}
      <div className="w-[300px] border-r border-gray-200 h-full flex flex-col bg-white">
        <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200">
          <div className="flex items-center gap-1 text-sm">
            <div className="flex items-center">
              <span className="font-medium">2 Open</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <div className="flex items-center">
              <span className="font-medium">Newest activity</span>
              <ChevronDown className="h-4 w-4 ml-1" />
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-auto divide-y divide-gray-100">
          {filteredConversations.slice(0, 2).map((conversation) => (
            <button
              key={conversation.id}
              className={`w-full text-left hover:bg-gray-50 ${
                selectedConversation === conversation.id ? "bg-blue-50 border-l-4 border-blue-500 pl-3" : "px-4"
              } py-3`}
              onClick={() => setSelectedConversation(conversation.id)}
            >
              <div className="flex items-start gap-2">
                <div className="flex-shrink-0 mt-1">
                  {conversation.id === "1" ? (
                    <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white text-xs">
                      D
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                      FB
                    </div>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <div className="font-medium text-sm truncate max-w-[170px]">
                        {conversation.id === "1" ? "Deepak · Masa Turkish Eatery" : conversation.customer.name}
                      </div>
                      <div className="text-xs text-gray-500">
                        {conversation.time}
                      </div>
                    </div>

                    {conversation.id === "1" && (
                      <div className="text-xs text-orange-500 mb-1">
                        Youssra: Masa Turkish Eatery
                      </div>
                    )}

                    <div className="text-sm text-gray-700 truncate">
                      {conversation.lastMessage}
                    </div>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Right side - Conversation view and details */}
      <div className="flex-1 h-full flex">
        {selectedConversation ? (
          <ConversationView
            conversation={MOCK_CONVERSATIONS.find(c => c.id === selectedConversation)!}
          />
        ) : (
          <div className="flex flex-col items-center justify-center h-full text-center p-4">
            <Clock className="h-16 w-16 text-gray-400 mb-4" />
            <h2 className="text-xl font-semibold">No conversation selected</h2>
            <p className="text-gray-500 mt-2 max-w-md">
              Select a conversation from the list to begin helping your customers.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default InboxDashboard;

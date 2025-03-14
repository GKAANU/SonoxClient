"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Star,
  Info,
  Send,
  Smile,
  Paperclip,
  MoreHorizontal,
  User,
  BookmarkIcon,
  Link2,
  ChevronDown,
  ArrowDown
} from "lucide-react";

interface Conversation {
  id: string;
  customer: {
    name: string;
    email: string;
    avatar: string;
    company: string;
  };
  lastMessage: string;
  time: string;
  unread: boolean;
  status: string;
  assignee: string | null;
  reply: string;
  team: string;
}

interface Message {
  id: string;
  text: string;
  sender: "agent" | "customer" | "bot";
  time: string;
  read?: boolean;
  seen?: boolean;
  agentName?: string;
}

// Mock messages for the conversation
const MESSAGES: Message[] = [
  {
    id: "1",
    text: "Yes, I'm a customer",
    sender: "customer",
    time: "1d"
  },
  {
    id: "2",
    text: "Welcome back!",
    sender: "agent",
    time: "1d",
    agentName: "Youssra"
  },
  {
    id: "3",
    text: "You'll get a reply from the support team.",
    sender: "agent",
    time: "1d",
    agentName: "Youssra"
  },
  {
    id: "4",
    text: "Thank you for reaching out! This is Youssra, and I'm here to assist you. I'll go ahead and extend your subscription and connect you with one of our success team members, who will guide you through the renewal process.",
    sender: "agent",
    time: "1d",
    agentName: "Youssra",
    seen: true
  },
  {
    id: "5",
    text: "Meryem could you please send him the renewal link please. I'll extend his subscription meanwhile. Thank you",
    sender: "agent",
    time: "1d",
    agentName: "Youssra"
  },
  {
    id: "6",
    text: "I found no need to extend his subscription because it will expire until 03/04/2025. I think we can proceed with the renewal before it gets expired",
    sender: "agent",
    time: "1d",
    agentName: "Youssra"
  },
  {
    id: "7",
    text: "Could you plz send me the shop ID 🙏",
    sender: "customer",
    time: "1d"
  },
  {
    id: "8",
    text: "CS_ZwVRLZ",
    sender: "agent",
    time: "1d",
    agentName: "Youssra"
  },
  {
    id: "9",
    text: "Masa Turkish Eatery",
    sender: "agent",
    time: "1d",
    agentName: "Youssra"
  }
];

interface ConversationViewProps {
  conversation: Conversation;
}

const ConversationView = ({ conversation }: ConversationViewProps) => {
  const [newMessage, setNewMessage] = useState("");
  const [isNoteMode, setIsNoteMode] = useState(false);

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    // In a real app, you would send this to your API
    console.log("Sending message:", newMessage);

    // Clear the input
    setNewMessage("");
  };

  return (
    <div className="flex flex-1 h-full bg-gray-50">
      {/* Main conversation area */}
      <div className="flex-1 flex flex-col h-full">
        {/* Conversation header */}
        <div className="p-2 border-b border-gray-200 flex items-center justify-between bg-white">
          <div className="flex items-center gap-2">
            <div className="flex items-center space-x-2 ml-2">
              <div className="font-medium">Deepak Appozhatth</div>
              <Button variant="ghost" size="sm" className="text-gray-500 h-6 px-2 rounded-full">
                <Star className="h-3 w-3 mr-1" />
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="sm" className="text-gray-500 h-8">
              Snooze
            </Button>
            <Button size="sm" className="h-8 bg-gray-900 hover:bg-gray-800">
              Close
            </Button>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Messages area */}
        <div className="flex-1 overflow-auto p-4">
          <div className="space-y-4 max-w-3xl mx-auto">
            {MESSAGES.map((message, index) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "agent" ? "justify-end" : "justify-start"}`}
              >
                {message.sender === "customer" && (
                  <div className="flex gap-2">
                    <Avatar className="h-8 w-8 mt-1">
                      <AvatarImage src="" alt="Deepak" />
                      <AvatarFallback className="bg-red-500 text-white">
                        D
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <div className="bg-white border border-gray-200 p-3 rounded-lg max-w-md break-words">
                        {message.text}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {message.time}
                      </div>
                    </div>
                  </div>
                )}

                {message.sender === "agent" && (
                  <div className="flex gap-2 flex-row-reverse">
                    <Avatar className="h-8 w-8 mt-1">
                      <AvatarImage src="" alt="Agent" />
                      <AvatarFallback className="bg-blue-500 text-white">
                        {message.agentName?.substring(0, 1) || 'Y'}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col items-end">
                      <div className={`${
                        message.id === "5" || message.id === "8" || message.id === "9"
                          ? "bg-amber-100 text-amber-900"
                          : "bg-blue-100 text-blue-900"
                      } p-3 rounded-lg max-w-md break-words`}>
                        {message.text}
                      </div>
                      <div className="text-xs text-gray-500 mt-1 flex items-center">
                        {message.time}
                        {message.seen && ' · Seen'}
                        {message.agentName && ' · '}
                        {message.agentName && (
                          <span className="font-medium ml-1">{message.agentName}</span>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {message.sender === "bot" && (
                  <div className="w-full">
                    <div className="bg-gray-200 p-2 rounded-lg text-xs text-center text-gray-500">
                      {message.text}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Input area */}
        <div className="p-0 border-t border-border">
          <div className="bg-amber-50 px-4 py-2 border-b border-amber-200 flex justify-between items-center">
            <div className="flex gap-2 items-center">
              <Button
                variant="ghost"
                size="sm"
                className={`px-2 py-1 h-auto text-sm ${isNoteMode ? 'text-gray-900' : 'text-amber-600'}`}
                onClick={() => setIsNoteMode(false)}
              >
                Note
              </Button>
            </div>
            <div className="flex items-center">
              <Button variant="ghost" size="sm" className="text-amber-600 h-7 px-3 text-sm">
                Add note
              </Button>
            </div>
          </div>

          <div className="bg-white p-4">
            <div className="max-w-3xl mx-auto flex items-center gap-2">
              <div className="flex-1 relative">
                <Input
                  placeholder="Type your message..."
                  className="pr-20 py-6 border-gray-300"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
                    <Smile className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-gray-400">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <Button size="icon" onClick={handleSendMessage} className="h-10 w-10">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-2 max-w-3xl mx-auto flex items-center justify-between">
              <div className="text-xs text-gray-500">
                Use Ctrl⌘ for shortcuts
              </div>
              <div className="flex items-center">
                <Button variant="ghost" size="sm" className="h-7 text-xs text-gray-500">
                  <BookmarkIcon className="h-3 w-3 mr-2" />
                  <Send className="h-3 w-3 mr-2" />
                  <Smile className="h-3 w-3 mr-2" />
                  <Paperclip className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side panel */}
      <div className="w-[300px] border-l border-gray-200 bg-white h-full">
        <div className="p-3 border-b border-gray-200 flex items-center justify-between">
          <div className="text-base font-medium">Details</div>
          <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 6L18 18M18 6L6 18" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Button>
        </div>

        <div className="p-3 border-b border-gray-200">
          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">Assignee</div>
              <div className="flex items-center">
                <Avatar className="h-5 w-5 mr-2">
                  <AvatarFallback className="bg-orange-100 text-orange-600 text-[10px]">YB</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">Youssra Bahadi</span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">Team Inbox</div>
              <div className="flex items-center text-sm">
                <div className="flex items-center gap-1">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 12a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" stroke="#4F46E5" strokeWidth="2"/>
                    <path d="M3 12c0 2.394 1.085 4.535 2.798 5.96l.028.026a11.064 11.064 0 0 0 3.115 2.136l.2.008c.141.056.283.11.427.158l.126.04.3.008q.51.014.103.026l.102.023.062.012.048.009a7.168 7.168 0 0 0 .472.066l.102.01c.276.025.553.038.831.038.278 0 .555-.013.831-.039l.102-.01c.16-.015.318-.037.475-.065l.048-.01.062-.012.102-.023.102-.026.031-.008.126-.04c.144-.048.286-.102.427-.159l.02-.007a11.064 11.064 0 0 0 3.115-2.136l.027-.027A8.953 8.953 0 0 0 21 12c0-2.395-1.085-4.536-2.798-5.96l-.028-.026a11.064 11.064 0 0 0-3.115-2.137l-.02-.007a9.118 9.118 0 0 0-.427-.159l-.126-.04-.03-.007q-.051-.014-.103-.026l-.102-.023-.062-.012-.048-.01a7.168 7.168 0 0 0-.472-.065l-.102-.01a9.015 9.015 0 0 0-.831-.038c-.278 0-.555.013-.831.039l-.102.01c-.16.014-.318.036-.475.065l-.048.01-.062.012-.102.023-.102.025-.031.008-.126.04c-.144.048-.286.102-.427.159l-.02.007a11.064 11.064 0 0 0-3.115 2.137l-.027.027A8.953 8.953 0 0 0 3 12Z" stroke="#4F46E5" strokeWidth="2"/>
                  </svg>
                  <span className="font-medium text-indigo-600">Finedine Customer Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-3">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium text-gray-500">Links</div>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0 ml-auto">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="p-3 border-t border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium text-gray-500">User data</div>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0 ml-auto">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">Name</div>
              <div className="text-sm font-medium flex items-center">
                Deepak Appozhatth
                <Button variant="ghost" size="sm" className="h-6 w-6 p-0 ml-1">
                  <MoreHorizontal className="h-3 w-3" />
                </Button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">Company</div>
              <div className="text-sm font-medium">Masa Turkish Eatery</div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">Type</div>
              <div className="text-sm font-medium">User</div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">Location</div>
              <div className="text-sm font-medium">7:01 PM · Dubai, United Arab Emirates</div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">Owner</div>
              <div className="text-sm font-medium">—</div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">Email</div>
              <div className="text-sm font-medium">manageparthotelsharsha@gmail.com</div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">User Id</div>
              <div className="text-sm font-medium">623854895508100159f3a54</div>
            </div>

            <div className="flex items-center pt-2">
              <Button variant="ghost" size="sm" className="h-6 p-1 text-xs">
                See all
              </Button>
            </div>

            <div className="flex items-center justify-between bg-amber-50 p-2 rounded-md border border-amber-200">
              <div className="flex items-center gap-1">
                <div className="text-amber-600">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 9v4m0 4h.01M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <span className="text-xs text-amber-700">1 potential duplicate</span>
              </div>
            </div>
          </div>
        </div>

        <div className="p-3 border-t border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium text-gray-500">Qualification</div>
            <Button variant="ghost" size="sm" className="h-6 w-6 p-0 ml-auto">
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-2">
            <div className="flex items-center gap-2">
              <div className="flex-shrink-0 text-green-500">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4m6 4a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="text-sm">Name</div>
                <div className="text-sm font-medium">Deepak Appozhatth</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex-shrink-0 text-green-500">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12l2 2 4-4m6 4a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="text-sm">Email</div>
                <div className="text-sm font-medium">manageparthotel...</div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="flex-shrink-0 text-gray-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
                </svg>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="text-sm">Phone</div>
                <Button variant="ghost" size="sm" className="h-6 py-0 px-1 text-xs text-blue-600">+ Add</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConversationView;

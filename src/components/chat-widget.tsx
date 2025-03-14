"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { MessageSquare, X, Send, ChevronDown, Info, LifeBuoy, FileText, Mail } from "lucide-react";

type MessageType = {
  sender: "user" | "bot";
  content: string;
  time: string;
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<MessageType[]>([
    {
      sender: "bot",
      content: "Hi there! 👋 I'm Fin, your AI assistant. How can I help you today?",
      time: "Just now"
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessages: MessageType[] = [
      ...messages,
      { sender: "user", content: message, time: "Just now" },
    ];

    setMessages(newMessages);
    setMessage("");

    // Simulate bot response after a short delay
    setTimeout(() => {
      setMessages([
        ...newMessages,
        {
          sender: "bot",
          content: "Thanks for your message! Our team will get back to you as soon as possible. In the meantime, can you tell me more about what you're looking for?",
          time: "Just now"
        }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed right-4 bottom-4 z-50">
      {isOpen ? (
        <Card className="w-80 md:w-96 shadow-xl border-none">
          <CardHeader className="bg-primary text-white px-4 py-3 flex flex-row justify-between items-center space-y-0">
            <div>
              <CardTitle className="text-base font-medium">Intercom Support</CardTitle>
              <CardDescription className="text-primary-foreground/80 text-xs">We usually respond in a few minutes</CardDescription>
            </div>
            <Button variant="ghost" size="icon" className="text-white hover:bg-primary/90 h-8 w-8" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>

          <CardContent className="p-0 h-80 overflow-y-auto">
            <div className="p-4 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`flex gap-2 max-w-[80%] ${msg.sender === "user" ? "flex-row-reverse" : "flex-row"}`}>
                    {msg.sender === "bot" && (
                      <Avatar className="h-8 w-8">
                        <AvatarImage src="" alt="AI" />
                        <AvatarFallback className="bg-primary text-white">AI</AvatarFallback>
                      </Avatar>
                    )}
                    <div>
                      <div className={`p-3 rounded-lg text-sm ${
                        msg.sender === "user"
                          ? "bg-primary text-white"
                          : "bg-muted"
                      }`}>
                        {msg.content}
                      </div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {msg.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>

          <CardFooter className="flex-col p-0">
            <div className="flex items-center p-2 space-x-2 border-t">
              <Button variant="ghost" size="icon" className="text-muted-foreground h-9 w-9">
                <Mail className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground h-9 w-9">
                <FileText className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground h-9 w-9">
                <LifeBuoy className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground h-9 w-9">
                <Info className="h-5 w-5" />
              </Button>
            </div>
            <div className="flex items-center p-2 space-x-2 w-full">
              <Input
                placeholder="Send a message..."
                className="flex-1"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
              />
              <Button onClick={handleSendMessage} size="icon" className="h-9 w-9">
                <Send className="h-5 w-5" />
              </Button>
            </div>
            <div className="p-2 text-xs text-center text-muted-foreground border-t">
              <p>Powered by Fin AI</p>
            </div>
          </CardFooter>
        </Card>
      ) : (
        <Button
          onClick={() => setIsOpen(true)}
          size="icon"
          className="h-14 w-14 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
        >
          <MessageSquare className="h-6 w-6" />
        </Button>
      )}
    </div>
  );
};

export default ChatWidget;

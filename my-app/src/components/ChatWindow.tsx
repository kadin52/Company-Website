"use client";
import { useEffect, useState, useRef } from "react";
import { db } from "@/lib/firebase";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { Textarea } from "@/components/ui/textarea";
import { Message } from "@/types/Message";
import { sendMessage, listenToMessages } from "@/service/ChatService";
import { useMessages } from "@/hooks/useMessages";
import {
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerProvider,
  MessageScrollerViewport,
  MessageScrollerItem,
} from "@/components/ui/message-scroller";
type ChatWindowProps = {
  sessionId: string | null;
  role: "customer" | "support";
  className?: string;
};
export default function ChatWindow({
  sessionId,
  role,
  className,
}: ChatWindowProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");

  useEffect(() => {
    if (!sessionId) {
      setMessages([]);
      return;
    }

    const unsub = listenToMessages(sessionId, setMessages);

    return unsub;
  }, [sessionId]);

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!sessionId) return;
    if (text.trim() === "") return;

    await sendMessage(sessionId, text, role);
    setText("");
  };

  return (
    <>
      <div className={`flex h-full w-full min-h-0 flex-col ${className ?? ""}`}>
        <div className={`flex flex-1 min-h-0 gap-2 px-4 py-3`}>
          <MessageScrollerProvider autoScroll>
            <MessageScroller>
              <MessageScrollerViewport>
                <MessageScrollerContent>
                  {messages.map((msg) => (
                    <MessageScrollerItem
                      key={msg.id}
                      messageId={msg.id}
                      className="flex flex-col"
                    >
                      <div
                        className={`p-2 rounded-xl mb-2 text-black max-w-3/4 wrap-anywhere ${
                          msg.role === role
                            ? "bg-orange-300 self-end ml-auto"
                            : "bg-blue-300 self-start mr-auto"
                        }`}
                      >
                        <span
                          className={`block text-xs font-bold text-orange-800 md:text-base ${msg.role === role ? "" : ""}`}
                        >
                          {msg.role}
                        </span>
                        {msg.text}
                      </div>
                    </MessageScrollerItem>
                  ))}
                </MessageScrollerContent>
              </MessageScrollerViewport>
              <MessageScrollerButton className="" />
            </MessageScroller>
          </MessageScrollerProvider>
        </div>
        <form
          onSubmit={handleSendMessage}
          className="flex shrink-0 p-3 border-t border-gray-200 bg-white gap-2"
        >
          <Textarea
            placeholder="Enter your message"
            rows={1}
            disabled={!sessionId}
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="min-h-16 max-h-32 field-sizing-fixed resize-none overflow-y-auto ring-1 ring-gray-400"
          />

          <button
            type="submit"
            disabled={!sessionId || text.trim() === ""}
            className="bg-orange-600 text-white px-3 py-1 rounded text-sm font-bold hover:bg-orange-700 transition"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
}

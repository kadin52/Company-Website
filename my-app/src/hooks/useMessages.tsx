import { useEffect, useState, useRef } from "react";
import { Message } from "@/types/Message";
import { listenToMessages, sendMessage } from "@/service/ChatService";

export function useMessages(
  sessionId: string | null,
  role: "customer" | "support",
) {
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  useEffect(() => {
    if (!sessionId) {
      setMessages([]);
      return;
    }
    const unsub = listenToMessages(sessionId, setMessages);
    return () => unsub();
  }, [sessionId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return { messages, scrollRef, scrollToBottom };
}

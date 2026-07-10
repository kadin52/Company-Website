"use client";
import { useEffect, useState, useRef } from "react";
import { db } from "@/lib/firebase";
import { query, collection, onSnapshot, orderBy } from "firebase/firestore";
import { Textarea } from "@/components/ui/textarea";
type Message = {
  id: string;
  text?: string;
  createdAt?: Date;
  senderId: string;
  role: "customer" | "support";
};

export default function ChatWindow({ selectedChat }: any) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [text, setText] = useState("");
  useEffect(() => {
    if (!selectedChat) {
      setMessages([]);
      return;
    }
    const q = query(
      collection(db, "chats", selectedChat, "messages"),
      orderBy("createdAt", "asc"),
    );
    const unsubcribe = onSnapshot(q, (snapshot) => {
      const fetchedMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Message[];
      setMessages(fetchedMessages);
    });

    return () => unsubcribe();
  }, [selectedChat]);

  return (
    <>
      <div className="flex flex-col">
        <Textarea
          placeholder="Enter your message"
          className=""
          rows={1}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey && text) {
              handleSend();
            }
          }}
        />
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-2 rounded-xl mb-2 ${msg.role === "support" ? "bg-orange-300 self-end ml-auto" : "bg-blue-300 self-start mr-auto"}`}
          >
            {msg.text}
          </div>
        ))}
      </div>
    </>
  );
}

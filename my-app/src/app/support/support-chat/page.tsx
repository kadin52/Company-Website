"use client";
import { useEffect, useState, useRef } from "react";
import { signOut } from "firebase/auth";
import { auth, db } from "@/lib/firebase";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
type Message = {
  id: string;
  text?: string;
  createdAt?: Date;
  senderId: string;
  senderRole: "customer" | "support";
};

export default function Admin() {
  const [chats, setChats] = useState<{ id: string }[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const q = query(collection(db, "chats"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedChats = snapshot.docs.map((doc) => {
        return { id: doc.id };
      });
      setChats(fetchedChats);
    });
    return () => unsubscribe();
  }, []);

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

    setSelectedChat("0.j702x077tj");

    return () => unsubcribe();
  }, [selectedChat]);

  return (
    <>
      <div className="flex flex-col gap-4 mx-auto border-4">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`p-3 ${msg.senderRole === "support" ? "bg-blue-100 self-end ml-auto" : "bg-gray-200 self-start mr-auto"}`}
          >
            <p className="text-sm">{msg.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}

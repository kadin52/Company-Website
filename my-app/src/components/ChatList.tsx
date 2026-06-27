"use client";
import { useEffect, useState, useRef } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function ChatList(props: {
  selectedChat: string | null;
  onChatSelect: any;
}) {
  const [chats, setChats] = useState<{ id: string; read: boolean }[]>([]);

  useEffect(() => {
    const q = query(collection(db, "chats"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const fetchedChats = snapshot.docs.map((doc) => {
          return { id: doc.id };
        });
        setChats(fetchedChats);
      },
      (error) => {
        console.error("Error fetching chats: ", error);
      },
    );
    return () => unsubscribe();
  }, []);

  return (
    <>
      <div>
        {chats.map((chat) => (
          <button
            key={chat.id}
            onClick={() => props.onChatSelect(chat.id)}
            className={`block w-full text-left p-3 ${props.selectedChat === chat.id ? "bg-orange-400" : "bg-gray-200"}`}
          >
            Chat: {chat.id}
          </button>
        ))}
      </div>
    </>
  );
}

"use client";
import { useEffect, useState, useRef } from "react";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { markChatReadBySupport } from "@/service/ChatService";

export default function ChatList(props: {
  selectedChat: string | null;
  onChatSelect: any;
}) {
  const [chats, setChats] = useState<
    { id: string; read: boolean; lastMessage: string }[]
  >([]);

  const handleChatSelect = async (chatId: string) => {
    props.onChatSelect(chatId);
    setChats((currentChats) =>
      currentChats.map((chat) =>
        chat.id === chatId ? { ...chat, read: true } : chat,
      ),
    );
    await markChatReadBySupport(chatId);
  };

  useEffect(() => {
    const q = query(collection(db, "chats"), orderBy("lastMessageAt", "desc"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const fetchedChats = snapshot.docs.map((doc) => {
          const chatData = doc.data();
          return {
            id: doc.id,
            read: chatData.supportHasRead ?? false,
            lastMessage: chatData.lastMessage ?? "",
          };
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
      <div className="overflow-y-auto bg-gray-300">
        {chats.map((chat) => (
          <button
            type="button"
            key={chat.id}
            onClick={() => handleChatSelect(chat.id)}
            className={`block w-full text-left p-3 ${props.selectedChat === chat.id ? "bg-orange-400" : "bg-gray-200"}`}
          >
            <div className="flex items-center justify-between gap-2">
              <div className="overflow-hidden">
                <p className="truncate text-black ">Chat: {chat.id}</p>
                <p className="truncate text-sm">
                  {chat.lastMessage || "No Last Message"}
                </p>
              </div>
              {!chat.read && (
                <span
                  aria-label="Unread chat"
                  className="h-3 w-3 shrink-0 rounded-full bg-red-500"
                />
              )}
            </div>
          </button>
        ))}
      </div>
    </>
  );
}

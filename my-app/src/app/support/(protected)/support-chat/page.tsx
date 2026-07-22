"use client";
import { useEffect, useState, useRef } from "react";
import { db } from "@/lib/firebase";
import ChatList from "@/components/ChatList";
import ChatWindow from "@/components/ChatWindow";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

export default function SupportChat() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <>
      <div className="mt-10 flex max-w-7xl mx-auto">
        <div className="w-1/4 max-h-[75vh] overflow-y-auto border-orange-300 border-4">
          <ChatList
            selectedChat={selectedChat}
            onChatSelect={setSelectedChat}
          />
          <p>test</p>
        </div>
        <div className="w-3/4 bg-gray-300 h-[75vh]">
          <ChatWindow sessionId={selectedChat} role="support" />
        </div>
      </div>
    </>
  );
}

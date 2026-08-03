"use client";
import { useEffect, useState, useRef } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

import ChatList from "@/components/ChatList";
import ChatWindow from "@/components/ChatWindow";
import { Rnd } from "react-rnd";

export default function SupportChat() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [size, setSize] = useState({ width: 1000, height: 1000 });
  const [position, setPosition] = useState({ x: 0, y: 0 });

  return (
    <>
      <div className="mt-10 flex max-w-7xl mx-auto px-10">
        <div className="w-1/4 max-h-[75vh] overflow-y-auto border-orange-300 border-4">
          <ChatList
            selectedChat={selectedChat}
            onChatSelect={setSelectedChat}
          />
        </div>

        <div className="relative w-3/4 h-[75vh] bg-1">
          <Rnd
            size={{ width: "100%", height: "100%" }}
            minWidth={Math.min(300, window.innerWidth)}
            minHeight={Math.min(350, window.innerHeight)}
            position={{ x: position.x, y: position.y }}
            cancel=".chat-close-button"
            onDragStop={(e, d) => {
              setPosition({ x: d.x, y: d.y });
            }}
            onResizeStop={(e, direction, ref, delta, position) => {
              setSize({
                width: ref.offsetWidth,
                height: ref.offsetHeight,
              });
              setPosition({ x: position.x, y: position.y });
            }}
            bounds="parent"
            dragAxis="both"
            dragHandleClassName="chat-header"
          >
            <ChatWindow sessionId={selectedChat} role="support" />
          </Rnd>
        </div>
      </div>
    </>
  );
}

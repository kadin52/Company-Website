"use client";
import { useState, useEffect } from "react";
import { db } from "../lib/firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { Rnd } from "react-rnd";

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [newMessage, setNewMessage] = useState("");
  const [sessionId, setSessionId] = useState("");

  const [isMounted, setIsMounted] = useState(false);
  // Listen to the database in real-time
  useEffect(() => {
    let currentSession = localStorage.getItem("chat_session_id");
    if (!currentSession) {
      currentSession = Math.random().toString(36);
      localStorage.setItem("chat_session_id", currentSession);
    }
    setSessionId(currentSession);
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen || !sessionId) return;
    const q = query(
      collection(db, "chats", sessionId, "messages"),
      orderBy("createdAt", "asc"),
    );
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fetchedMessages = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setMessages(fetchedMessages);
    });

    return () => unsubscribe();
  }, [isOpen, sessionId]);

  // Send a message to the database
  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === "") return;

    await addDoc(collection(db, "chats", sessionId, "messages"), {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: "Customer",
    });

    setNewMessage("");
  };

  return (
    <>
      {/* Chat Window */}

      {isOpen && isMounted && (
        <Rnd
          style={{ position: "fixed", zIndex: 70 }}
          default={{
            x: window.innerWidth - 350,
            y: window.innerHeight - 450,

            width: 300,
            height: 400,
          }}
          bounds="window"
          dragAxis="both"
          dragHandleClassName="chat-header"
        >
          <div className="h-full w-full bg-gray-300 border border-gray-300 rounded-lg shadow-xl flex flex-col mb-4 overflow-hidden">
            <div className="chat-header bg-orange-600 text-white p-3 font-bold flex justify-between items-center cursor-move">
              <span>Lots Plumbing Support</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200"
              >
                ✕
              </button>
            </div>
            <div className="flex-1 p-3 overflow-y-auto flex flex-col gap-2 bg-gray-300">
              {messages.length === 0 && (
                <p className="text-gray-400 text-sm text-center mt-4">
                  Send a message to start chatting!
                </p>
              )}
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className="bg-orange-100 p-2 rounded-md text-sm w-fit max-w-[80%] self-end break-words"
                >
                  <span className="font-bold text-xs text-orange-800 block ">
                    {msg.user}
                  </span>
                  {msg.text}
                </div>
              ))}
            </div>
            <form
              onSubmit={sendMessage}
              className="p-3 border-t border-gray-200 bg-white flex gap-2"
            >
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 border border-gray-300 rounded px-2 py-1 text-sm outline-none focus:border-orange-600"
              />
              <button
                type="submit"
                className="bg-orange-600 text-white px-3 py-1 rounded text-sm font-bold hover:bg-orange-700 transition"
              >
                Send
              </button>
            </form>
          </div>
        </Rnd>
      )}

      <div className="fixed bottom-6 right-6 z-50">
        {/* Floating Toggle Button */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="bg-orange-600 text-white p-4 rounded-full shadow-lg hover:bg-orange-700 transition flex items-center justify-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
              />
            </svg>

            <span className="ml-2"> Live Chat</span>
          </button>
        )}
      </div>
    </>
  );
}

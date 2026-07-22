"use client";
import { useState, useEffect, useRef } from "react";
import { db } from "../lib/firebase";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import ChatWindow from "@/components/ChatWindow";
// draggable/resizable component
import { Rnd } from "react-rnd";

export default function LiveChat() {
  const [sessionId, setSessionId] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [size, setSize] = useState({ width: 500, height: 600 });

  const marginX = 30;
  const marginY = 90;

  const getResetPosition = () => {
    const width = Math.min(size.width, window.innerWidth - 2 * marginX);
    const height = Math.min(size.height, window.innerHeight - 2 * marginY);

    const newX = window.innerWidth - width - marginX;
    const newY = window.innerHeight - height - marginY;

    setSize({ width, height });

    return { x: newX, y: newY };
  };

  const openChat = () => {
    const resetPosition = getResetPosition();
    setPosition(resetPosition);
    setIsOpen(true);
  };

  // Listen to the database
  useEffect(() => {
    let currentSession = localStorage.getItem("chat_session_id");
    if (!currentSession) {
      currentSession = Math.random().toString(36);
      localStorage.setItem("chat_session_id", currentSession);
    }
    setSessionId(currentSession);
    setIsMounted(true);

    const registerSession = async () => {
      await setDoc(
        doc(db, "chats", currentSession),
        { createdAt: serverTimestamp() },
        { merge: true },
      );
    };
    registerSession();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      //totalwindowlength - chatwidth - margin

      const resetPosition = getResetPosition();
      setIsOpen(false);
      setPosition(resetPosition);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [size]);

  return (
    <>
      {/* Chat Window */}
      {isOpen && isMounted && (
        <div className="fixed inset-0 z-70">
          <Rnd
            // style={{ position: "fixed", zIndex: 70 }}
            size={{ width: size.width, height: size.height }}
            minWidth={Math.min(300, window.innerWidth - marginX)}
            minHeight={Math.min(350, window.innerHeight - marginY)}
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
            <div className="flex-col h-full w-full bg-gray-300 ring ring-gray-400 rounded-lg shadow-2xl flex overflow-hidden">
              <div className="chat-header bg-orange-600 text-white p-3 font-bold flex justify-between items-center cursor-move">
                <span aria-hidden="true" className="text-lg leading-none">
                  ⠿
                </span>
                <span>Lots Plumbing (resizable)</span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="chat-close-button text-white hover:text-gray-200"
                >
                  ✕
                </button>
              </div>
              <ChatWindow sessionId={sessionId} role="customer" />
            </div>
          </Rnd>
        </div>
      )}

      <div className="fixed bottom-6 right-6 z-50">
        {/* Floating Toggle Button */}
        {!isOpen && (
          <button
            onClick={openChat}
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

"use client";
import { useEffect, useState, useRef } from "react";
import { signOut } from "firebase/auth";

type Message = {
  id: string;
  text?: string;
  createdAt?: Date;
  senderId: string;
  senderRole: "customer" | "support";
};

export default function Admin() {
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <p>test</p>
    </>
  );
}

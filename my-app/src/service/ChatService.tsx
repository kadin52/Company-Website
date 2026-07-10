import {
  collection,
  onSnapshot,
  orderBy,
  query,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Message } from "@/types/Message";

export const listenToMessages = (
  sessionId: string,
  onMessages: (messages: Message[]) => void,
) => {
  const q = query(
    collection(db, "chats", sessionId, "messages"),
    orderBy("createdAt", "asc"),
  );

  return onSnapshot(q, (snapshot) => {
    const fetchedMessages = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Message[];

    onMessages(fetchedMessages);
  });
};

export const sendMessage = async (
  sessionId: string,
  text: string,
  role: "customer" | "support",
  senderId?: string,
) => {
  const trimmedText = text.trim();
  if (trimmedText === "") return;
  if (!sessionId) return;
  await addDoc(collection(db, "chats", sessionId, "messages"), {
    text: trimmedText,
    createdAt: serverTimestamp(),
    role: role,
    ...(senderId ? { senderId: senderId } : {}),
  });
};

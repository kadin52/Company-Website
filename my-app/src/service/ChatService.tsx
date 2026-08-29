import {
  doc,
  collection,
  onSnapshot,
  orderBy,
  query,
  addDoc,
  serverTimestamp,
  writeBatch,
  updateDoc,
  setDoc,
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

  const chatRef = doc(db, "chats", sessionId);
  const messageRef = doc(collection(chatRef, "messages"));

  const batch = writeBatch(db);

  batch.set(messageRef, {
    text: trimmedText,
    createdAt: serverTimestamp(),
    role,
    ...(senderId ? { senderId } : {}),
  });

  batch.set(
    chatRef,
    {
      lastMessage: trimmedText,
      lastMessageAt: serverTimestamp(),
      ...(role === "support"
        ? { customerHasRead: false }
        : { supportHasRead: false }),
    },

    { merge: true },
  );

  await batch.commit();
};

export const listenToCustomerUnread = (
  sessionId: string,
  onUnreadChange: (hasUnread: boolean) => void,
) => {
  const chatRef = doc(db, "chats", sessionId);

  return onSnapshot(chatRef, (snapshot) => {
    const chat = snapshot.data();

    onUnreadChange(chat?.customerHasRead === false);
  });
};

export const markChatReadBySupport = async (sessionId: string) => {
  const chatRef = doc(db, "chats", sessionId);

  await updateDoc(chatRef, {
    supportHasRead: true,
  });
};

export const markChatReadByCustomer = async (sessionId: string) => {
  const chatRef = doc(db, "chats", sessionId);

  await updateDoc(chatRef, {
    customerHasRead: true,
  });
};

export const listenToLiveChatAvailability = (
  onAvailabilityChange: (available: boolean) => void,
) => {
  const liveChatRef = doc(db, "settings", "liveChat");

  return onSnapshot(liveChatRef, (snapshot) => {
    const settings = snapshot.data();
    onAvailabilityChange(settings?.available === true);
  });
};

export const setLiveChatAvailability = async (availability: boolean) => {
  const liveChatRef = doc(db, "settings", "liveChat");

  await setDoc(liveChatRef, {
    available: availability,
    updatedAt: serverTimestamp(),
  });
};

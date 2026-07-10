export type Message = {
  id: string;
  text?: string;
  createdAt?: Date;
  senderId?: string;
  role: "customer" | "support";
};

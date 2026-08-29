"use client";
import { useState, useEffect } from "react";
import {
  listenToLiveChatAvailability,
  setLiveChatAvailability,
} from "@/service/ChatService";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
export default function ChatAvailabilityToggle() {
  const [isAvailable, setIsAvailable] = useState(true);
  useEffect(() => {
    const unsubcribe = listenToLiveChatAvailability(setIsAvailable);
    return () => unsubcribe();
  }, []);
  const handleToggle = async (checked: boolean) => {
    try {
      await setLiveChatAvailability(checked);
    } catch (error) {
      console.error("Error updating live chat availability: ", error);
    }
  };
  return (
    <div className="flex items-center space-x-2 bg-orange-300 py-4">
      <Switch
        id="availability"
        checked={isAvailable}
        onCheckedChange={handleToggle}
      />
      <Label htmlFor="availability">
        Live Chat: {isAvailable ? "Available" : "Disabled"}
      </Label>
    </div>
  );
}

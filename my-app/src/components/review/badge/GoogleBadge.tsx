"use client";
import { useEffect, useState } from "react";
type BadgeResponse = {
  google: {
    rating: number;
    userRatingCount: number;
    googleMapsUri: string;
  };
};

export default function GoogleBadge() {
  const [googleData, setGoogleData] = useState<BadgeResponse | null>(null);
  useEffect(() => {
    const controller = new AbortController();
    async function fetchData() {
      try {
        const response = await fetch("/api/badge", {
          cache: "no-store",
          signal: controller.signal,
        });
        if (!response.ok) {
          return;
        }
        const data = await response.json();
        setGoogleData(data);
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError") {
          console.log("Fetch aborted");
          return;
        }

        console.error("Error fetching Google badge data:", error);
      }
    }
    fetchData();
    return () => controller.abort();
  }, []);
  if (!googleData) {
    return <span>Read Our Google Reviews!</span>;
  }

  return (
    <a
      href={googleData.google.googleMapsUri}
      target="_blank"
      rel="noopener noreferrer"
    >
      Google Maps ★ {googleData.google.rating} ·{" "}
      {googleData.google.userRatingCount} reviews
    </a>
  );
}

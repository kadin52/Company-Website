"use client";
import { useEffect } from "react";
import Script from "next/script";

export default function YelpEmbed({ reviewId }: { reviewId: string }) {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://www.yelp.com/embed/widgets.js";
    script.async = true;

    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, [reviewId]);
  return (
    <>
      <div className="flex justify-center w-full ">
        <span
          className="yelp-review"
          data-hostname="www.yelp.com"
          data-review-id={reviewId}
        >
          Refresh to load Yelp review.
        </span>
      </div>
    </>
  );
}

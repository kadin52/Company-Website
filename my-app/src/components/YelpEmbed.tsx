"use client";
import Script from "next/script";

export default function YelpEmbed({ reviewId }: { reviewId: string }) {
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
        <Script
          src="https://www.yelp.com/embed/widgets.js"
          strategy="lazyOnload"
        />
      </div>
    </>
  );
}

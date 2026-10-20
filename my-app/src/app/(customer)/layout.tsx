import Navbar from "@/components/bar/Navbar";
import LiveChat from "@/components/LiveChat";
import Footer from "@/components/Footer";
import Script from "next/script";
export default function CustomerLayout(props: { children: React.ReactNode }) {
  return (
    <div>
      <Script src="https://elfsightcdn.com/platform.js" strategy="lazyOnload" />
      <Navbar />
      <main>{props.children}</main>

      <Footer />
    </div>
  );
}

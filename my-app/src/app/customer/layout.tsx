import Navbar from "@/components/bar/Navbar";
import LiveChat from "@/components/LiveChat";
import Footer from "@/components/Footer";

export default function CustomerLayout(props: { children: React.ReactNode }) {
  return (
    <div>
      <Navbar />
      <main>{props.children}</main>

      <Footer />
      <LiveChat />
    </div>
  );
}

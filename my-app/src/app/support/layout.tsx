import Footer from "@/components/Footer";
export default function SupportLayout(props: { children: React.ReactNode }) {
  return (
    <div>
      <main>{props.children}</main>
    </div>
  );
}

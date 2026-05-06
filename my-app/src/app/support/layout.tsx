import Footer from "@/components/Footer";
export default function AdminLayout(props: { children: React.ReactNode }) {
  return (
    <div>
      <main>{props.children}</main>
    </div>
  );
}

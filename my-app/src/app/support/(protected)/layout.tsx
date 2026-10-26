import SupportAuth from "@/lib/auth";
import SupportNavbar from "@/components/navigation/SupportNavbar";
export default function SupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SupportNavbar />
      <SupportAuth>{children}</SupportAuth>
    </>
  );
}

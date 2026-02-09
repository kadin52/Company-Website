import Link from "next/link";
export default function Sidebar() {
  return (
    <>
      <div className="sticky bg-white left-0 z-40">
        <div className="relative justify-left ">
          <Link href="/">Exampple</Link>
        </div>
      </div>
    </>
  );
}

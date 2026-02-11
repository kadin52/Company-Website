import Link from "next/link";
type SidebarProps = {
  items: string[];
};
export default function Sidebar({ items = [] }: SidebarProps) {
  return (
    <>
      <div className="bg-white sticky left-0 top-40 z-40 ">
        <ul className="relative justify-left text-nowrap ">
          {items.map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-gray-600 hover:text-orange-600"
              >
                {id}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

import Link from "next/link";
type SidebarProps = {
  items: string[];
};
export default function Sidebar({ items = [] }: SidebarProps) {
  return (
    <>
      <div className="bg-white lg:sticky lg:left-0 lg:top-40 z-40 max-w-3xs">
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
        <p className="mt-5 text-orange-600 text-md font-light text-wrap">
          Delivering fast, high-quality and budget-friendly services for nearly
          two decades!
        </p>
      </div>
    </>
  );
}

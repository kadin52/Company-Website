import Link from "next/link";
type SidebarProps = {
  title?: string;
  items: string[];
};
export default function Sidebar({ title, items = [] }: SidebarProps) {
  return (
    <>
      <div className="lg:sticky lg:left-0 lg:top-40 z-40 max-w-3xs">
        {title && (
          <h4 className="text-gray-600 font-semibold text-2xl mb-4">{title}</h4>
        )}
        <ul className="relative justify-left text-nowrap ml-5 text-sm">
          {items.map((id) => (
            <li key={id} className="">
              <a
                href={`#${id}`}
                className="flex text-gray-600 rounded-none hover:text-orange-600 py-3 hover:bg-gray-300 border-b border-gray-300"
              >
                {`▸ `}
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

import Link from "next/link";

type SidebarItem = {
  title: string;
  id: string;
};

type SidebarProps = {
  title?: string;
  items: SidebarItem[];
};
export default function Sidebar({ title, items = [] }: SidebarProps) {
  return (
    <>
      <div className="lg:sticky lg:left-0 lg:top-40 z-40 lg:w-3xs ml-4 w-full mr-4 ">
        {title && (
          <h4 className="text-gray-600 font-semibold text-2xl mb-4">{title}</h4>
        )}
        <ul className="relative justify-left text-nowrap text-sm">
          {items.map((item) => (
            <li key={item.id} className="">
              <a
                href={`#${item.id}`}
                className="flex text-gray-600 rounded-none hover:text-orange-600 py-3 hover:bg-gray-100 border-b border-gray-300"
              >
                {`▸ `}
                {item.title}
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

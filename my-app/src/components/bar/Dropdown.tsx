import Link from "next/link";
type DropdownProps = {
  items: { label: string; href: string }[];
  mobile?: boolean;
};

export default function Dropdown({ items, mobile = false }: DropdownProps) {
  if (mobile) {
    return (
      <div className="flex flex-col border-l border-gray-200 pl-4">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="py-2 text-sm font-normal"
          >
            {item.label}
          </Link>
        ))}
      </div>
    );
  }
  return (
    <div className="absolute flex flex-col group-hover:scale-y-100 rounded-sm px-4 py-5 mt-1 shadow-md scale-y-0 origin-top duration-100 top-full left-0 bg-white space-y-4 font-light text-sm text-black border-t-3 border-orange-600 antialiased">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="hover:text-orange-600"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

import Link from "next/link";
type DropdownProps = {
  items: { label: string; href: string }[];
};

export default function Dropdown({ items }: DropdownProps) {
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

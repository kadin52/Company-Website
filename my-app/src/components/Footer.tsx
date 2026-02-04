export default function Footer() {
  return (
    <div className="bg-gray-300">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 mt-40 text-sm max-w-7xl mx-auto py-10 inset-x-0 bottom-0">
        {/* ------------ Left Section ------------ */}
        <div className="text-left sm:pl-5">
          <p className="text-2xl font-medium mb-5 font-semibold">Contact Us</p>
          <ul className="flex flex-col gap-2 text-md">
            <li>
              Call:{" "}
              <a href="tel:+18888881403" className="text-orange-600">
                (888) 888-1403
              </a>
            </li>
            <li>
              Email:{" "}
              <span className="text-orange-600">cs@lotsplumbing.com</span>
            </li>
            <li>
              Address:{" "}
              <span className="text-orange-600">
                {" "}
                4060 N. Palm Street, Suite 606 Fullerton, CA 92835
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

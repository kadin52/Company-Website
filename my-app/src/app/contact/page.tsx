import Image from "next/image";

export default function Contact() {
  return (
    <>
      <section className="relative w-full h-[220px] z-10 mb-20">
        <Image
          src="/assets/custom-header-contact.jpg"
          alt="Services Header"
          fill
          sizes="100vw"
          className="object-cover object-top"
        />
        <div className="relative h-full max-w-7xl mx-auto my-auto z-20 ">
          <h1 className="absolute bottom-4 right-4 text-4xl text-orange-600 font-light">
            Contact Us
          </h1>
        </div>
      </section>
      <div className="max-w-7xl mx-auto justify-center">
        <h2 className="text-light text-4xl font-light">
          Request for Information
        </h2>
        <p className="text-2xl font-light mt-5">
          Let us know how we can help! Send us a message or give us a call (888)
          888-1403 .
        </p>

        <form action="">
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <InputInfo name="full-name" type="text" placeholder="Your Name" />
              <InputInfo
                name="email"
                type="email"
                placeholder="Your Email Address"
                required={true}
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+"
              />
              <InputInfo name="phone" type="tel" placeholder="Phone Number" />
              <InputInfo name="message" type="text" placeholder="Message" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

function InputInfo({
  name,
  type,
  placeholder,
  required = false,
  pattern,
}: {
  name: string;
  type: string;
  placeholder: string;
  required?: boolean;
  pattern?: string;
}) {
  return (
    <div className="mt-2 group">
      <div className="flex items-center rounded-md bg-white/5 pl-3   outline-1 -outline-offset-2 outline-gray-400">
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className="block min-w-0 grow bg-transparent py-1.5 pr-3 pl-1 text-base text-gray-600 placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
        />
      </div>
      <p className="mt-1 hidden text-sm text-red-500 group-has-[:invalid]:block">
        Please enter a valid {name}.
      </p>
    </div>
  );
}

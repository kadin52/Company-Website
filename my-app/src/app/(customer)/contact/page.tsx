import LiveChat from "@/components/LiveChat";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
export default function Contact() {
  return (
    <>
      <LiveChat />
      <section className="relative w-full h-55 z-10 mb-20">
        <Image
          src="/assets/custom-header-contact-up.jpg"
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
      <div className="max-w-7xl mx-auto justify-center px-10 2xl:px-0">
        <h2 className="text-light text-4xl font-light">
          Request for Information
        </h2>
        <p className="text-2xl font-light mt-5">
          Let us know how we can help! Send us a message or give us a call (888)
          888-1403 .
        </p>
        <ContactForm />
      </div>
    </>
  );
}

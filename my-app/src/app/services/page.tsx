import Image from "next/image";
export default function Services() {
  return (
    <>
      <section className="relative w-full h-[220px] z-10 mb-20">
        <Image
          src="/assets/custom-header-services-up.jpg"
          alt="Services Header"
          fill
          className="object-cover object-top"
        />
        <div className="relative h-full max-w-7xl mx-auto my-auto z-20 ">
          <h1 className="absolute bottom-4 right-4 text-4xl text-orange-600 font-light">
            Our Services
          </h1>
        </div>
      </section>
      <div className=" max-w-7xl mx-auto justify-center">
        <div className="text-left ml-10 text-xl font-light text-gray-600">
          <p>
            At Lots Plumbing, we provide a focused array of repiping services to
            help you solve your plumbing problems.{" "}
            <span className="text-orange-600 font-bold">
              We are proud of our 5-star reputation on Yelp because we aim to
              give every customer 5-star service.
            </span>
          </p>
        </div>

        <section className="text-gray-600">
          <h2 className="font-bold text-3xl mb-15 mt-15">
            Copper & PEX Repipe
          </h2>
          <p className="text-gray-600 ">
            Our team of repipe specialists have nearly two decades of experience
            in Copper and PEX Repiping. Lots Plumbing has successfully replaced
            and installed{" "}
            <span className="font-bold">
              over 500 Copper and PEX repipe projects
            </span>{" "}
            for residential and commercial structures in Southern California
          </p>
          <h3 className="text-orange-600 font-bold text-xl mb-8 mt-8">
            How do you know if your home or business need repiping?
          </h3>

          <p>
            It's time to think about repiping your home or business if you are
            seeing the following signs:
          </p>
          <ul className="list-disc ml-15 space-y-1">
            <li>Water running even when no faucets are on?</li>
            <li>Water meter showing water running when water is turned off?</li>
            <li>Unusual high water bills?</li>
          </ul>
          <p className="text-xl font-light text-gray-600 mt-8">
            Lots Plumbing can help! We offer both copper and PEX repiping
            options. We are fast, reliable and very cost-friendly!
          </p>
          <h3 className="text-orange-600 font-bold text-xl mb-8 mt-8">
            Experience the Benefits of Repiping{" "}
          </h3>
          <ul className="list-disc ml-15 space-y-1">
            <li>Increased water pressure</li>
            <li>Clean & clear water - No more rusty or discoloration</li>
            <li>Use more than one faucet at a time - Finally!</li>
            <li>High quality plumbing with no more leaky pipes</li>
            <li>No scalding in the shower when someone turns on a faucet</li>
            <li>
              Greater peace of mind because your piping system is now secured
            </li>
            <li>Increased property value</li>
          </ul>
        </section>
      </div>
    </>
  );
}

import Sidebar from "@/components/Sidebar";
import Image from "next/image";

export default function Company() {
  return (
    <>
      <section className="relative w-full h-55 z-10">
        <Image
          src="/assets/custom-header-maintenance.jpg"
          alt="Company Header"
          fill
          className="object-cover object-middle"
        />
        <div className="relative h-full max-w-7xl mx-auto my-auto z-20 ">
          <h1 className="absolute bottom-4 right-4 text-4xl text-orange-600 font-light">
            Our Company
          </h1>
        </div>
      </section>

      <div className=" flex relative max-w-7xl mx-auto p-10">
        <div className="flex flex-col lg:flex-row">
          <aside className="pt-15">
            <Sidebar
              title="Our Company"
              items={[
                "Who We Are",
                "Why Choose Us",
                "Our Mission & Values",
                "Our Company Culture",
              ]}
            />
          </aside>
          <div>
            <section id="Who We Are" className="text-gray-600">
              <h2 className="font-bold text-3xl mb-10 mt-15">Who We Are</h2>
              <p className="text-xl font-light text-gray-600 mt-8">
                Lots Plumbing, Inc. (formerly known as Lots Repipe & Plumbing
                Services) reflects the culmination of two decades of repiping
                and plumbing projects. Combining highly professional solutions,
                the latest industry standards and vast expertise,
              </p>
              <span className="text-xl font-semibold text-gray-600">
                We Are The #1 Repipe & Plumbing Specialists in Orange County.
              </span>
              <p className="text-sm font-semilight mt-10">
                Our privately owned company has successfully assembled its best
                in-class professional competence with a highly skilled team,
                creating an evident edge over the competition. Our devoted and
                friendly plumbers are fully licensed, bonded and insured.
              </p>
              <p className="text-sm font-semilight mt-10">
                Lots Plumbing is proud to be one of the most reputable plumbing
                companies in Southern California. We are blazing new trails in
                the complex repiping market, focusing on essential service
                elements like integrity, credibility and excellence. We offer
                our clients unprecedented levels of service, setting new
                standards in the market; from minor fixes to complete piping
                systems renovation, we are committed to provide our clients
                excellent services with the best response time in the industry.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

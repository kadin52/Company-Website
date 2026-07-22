import Sidebar from "@/components/bar/Sidebar";
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

      <div className=" max-w-7xl mx-auto p-10">
        <div className="flex flex-col lg:flex-row gap-5">
          <aside className="pt-15 flex-1">
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
            <section id="who-we-are" className="default-text-color">
              <h2 className="font-bold text-black text-3xl mb-10 mt-15">
                Who We Are
              </h2>
              <p className="text-xl font-light default-text-color mt-8">
                Lots Plumbing, Inc. (formerly known as Lots Repipe & Plumbing
                Services) reflects the culmination of two decades of repiping
                and plumbing projects. Combining highly professional solutions,
                the latest industry standards and vast expertise,{" "}
                <span className="text-xl font-semibold default-text-color">
                  We Are The #1 Repipe & Plumbing Specialists in Orange County.
                </span>
              </p>

              <p className="  mt-10">
                Our privately owned company has successfully assembled its best
                in-class professional competence with a highly skilled team,
                creating an evident edge over the competition. Our devoted and
                friendly plumbers are fully licensed, bonded and insured.
              </p>
              <p className="  mt-10">
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

            <section id="why-choose-us" className="default-text-color">
              <h2 className="font-bold text-black text-3xl mb-10 mt-15">
                Why Choose Us?
              </h2>

              <ul className="mt-6 space-y-4">
                <li>
                  <span className="text-orange-600 font-bold mr-2">
                    Vast Professional Expertise:{" "}
                  </span>
                  <span className="  default-text-color font-normal">
                    Our Founder, Bo, and Lots Plumbing have served the
                    residencial and commercial sectors with repipe and plumbing
                    services in Southern California for nearly 20 years.
                  </span>
                </li>
                <li className="">
                  <span className=" text-orange-600 font-bold mr-2">
                    Highly Professional and Trustworthy:
                  </span>
                  <span className=" default-text-color font-normal">
                    Our team is fully licensed bonded and insured.
                  </span>
                </li>

                <li className="">
                  <span className=" text-orange-600 font-bold mr-2">
                    On-time:
                  </span>
                  <span className=" default-text-color font-normal">
                    We always arrive on time, starting the repiping process
                    immediately. The quick response saves further damage and
                    unnecessary expenses.
                  </span>
                </li>

                <li className="">
                  <span className=" text-orange-600 font-bold mr-2">
                    High-Quality Services:
                  </span>
                  <span className=" default-text-color font-normal">
                    We are committed to using the highest standards of ethics,
                    providing professional excellence and integrity.
                  </span>
                </li>

                <li className="">
                  <span className=" text-orange-600 font-bold mr-2">
                    Cost-friendly:
                  </span>
                  <span className=" default-text-color font-normal">
                    Our vast expertise, knowledge and highly skilled plumbers
                    enable us to perform the repiping job at the best and most
                    cost effective market prices.
                  </span>
                </li>

                <li className="">
                  <span className=" text-orange-600 font-bold mr-2">
                    Service guaranteed:
                  </span>
                  <span className=" default-text-color font-normal">
                    We guarantee 100% Workmanship.
                  </span>
                </li>
              </ul>
            </section>

            <section id="our-mission" className="default-text-color">
              <h2 className="font-bold text-black text-3xl mb-10 mt-15">
                Our Mission
              </h2>
              <ul>
                <li>
                  To serve the residential and commercial sectors in Orange
                  County with high-quality and cost-friendly plumbing and
                  repiping services; through our proven track record of
                  experience in the plumbing industry.
                </li>
                <li>
                  To be the expert solution provider to our customers and
                  partners; offering the most reliable and competitive plumbing
                  and repiping services in Orange County.
                </li>
              </ul>
            </section>

            <section id="our-company-culture" className="default-text-color">
              <h2 className="font-bold text-black text-3xl mb-10 mt-15">
                Our Company Culture
              </h2>
              <h3 className="font-semibold text-xl mb-3">Collaboration</h3>
              <p>
                Lots Plumbing is committed to fostering an environment which
                promotes teamwork and collaboration within our organization, our
                customer, and industry experts.
              </p>
              <h3 className="font-semibold text-xl mt-5 mb-3">Ethics</h3>
              <p>
                Lots Plumbing is committed to operating a business that fosters
                an environment of innovation, collaboration, and trust. Our
                values and behaviors are vital to the success of our company.
                The strength and success of our company is achieved through
                compliance of the ethical principles set forth in our Code of
                Conducts which includes the following:
              </p>
              <ul className="list-disc ml-15 mt-5 space-y-4">
                <li>
                  We promise to conduct business in compliance with all
                  applicable laws and regulations.
                </li>
                <li>
                  We are committed to treating our customers, employees,
                  suppliers, stakeholders and all those with interest in our
                  company with fairness and honesty.
                </li>
                <li>
                  We value and promote teamwork approaches in our relationships
                  within our company as well as those with whom we do business.
                </li>
                <li>
                  We acknowledge that the safety of our employee and customers
                  is our priority, and we promise to continuously improve on
                  quality and efficiency.
                </li>
                <li>
                  We are committed to creating a safe and healthy working
                  environment in all our job sites and our facilities.
                </li>
                <li>
                  We value and promote equal opportunities for all employees,
                  regardless of their race, color, gender, religion, disability,
                  marital status, and any other characteristic protected by
                  applicable employment laws.
                </li>
              </ul>
            </section>

            <section id="diversity">
              <h2 className="font-bold text-black text-3xl mb-10 mt-15">
                Diversity
              </h2>
              <p>
                Essential for Lots Plumbing's competitive advantage, advancement
                and success, our employees represent the diverse communities we
                serve and with whom we do business.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

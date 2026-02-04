import SimpleSlider from "../../components/SimpleSlider";
import Card from "../../components/Card";
import type { Metadata } from "next";
import Image from "next/image";
export const metadata: Metadata = {
  title: "Lots Plumbing, Inc. | Home",
  description: "PEX Repipe, HVAC, Heating and Air Conditioning...",
  keywords: ["plumbing", "repipe", "orange county"],
};

const reasons = [
  {
    title: "Vast Professional Expertise:",
    text: "Our Founder, Bo, and Lots Plumbing served the residential and commercial sectors with repipe and plumbing services in Southern California for over 20 years.",
  },
  {
    title: "Highly Professional and Trustworthy:",
    text: "Our team is fully licensed, bonded, and insured.",
  },
  {
    title: "On-time:",
    text: "We always arrive on time, starting the repiping process immediately. The quick response saves further damage and unnecessary expenses.",
  },
  {
    title: "High-Quality Services:",
    text: "We are committed to using the highest standards of ethics, providing professional excellence and integrity.",
  },
  {
    title: "Cost-friendly:",
    text: "Our vast expertise, knowledge and highly skilled plumbers enable us to perform the repiping job at the best and most cost effective market prices.",
  },
  {
    title: "Service guaranteed:",
    text: "We guarantee 100% Workmanship.",
  },
];

export default function Home() {
  return (
    <>
      <section className="slider-area">
        <SimpleSlider />
      </section>

      <section className="max-w-7xl mx-auto text-center">
        <h1 className="text-center font-bold text-4xl">
          Orange County's #1 <br></br>Plumbing & Repipe Specialists
        </h1>
        <h2 className="text-center text-3xl p-8 font-light pb-16">
          Delivering fast, high-quality and budget-friendly services for nearly
          two decades!
        </h2>
      </section>

      <section className="flex flex-row flex-wrap justify-center items-center gap-10">
        <Card
          imageUrl="/assets/Plumbingservices.jpg"
          learnMoreUrl="/services"
          title="Plumbing Services"
          description="We can help with clogged drains, leaking washing machines,
        sewage backups, fixture installations, water heater replacements, etc.
        Lots Plumbing have been serving the Southland for nearly 20 years. We
        are Orange County's trusted plumbing service providers!"
        ></Card>
        <Card
          imageUrl="/assets/copper-pex.jpg"
          learnMoreUrl="/services"
          title="Copper & PEX Repipes"
          description="Our team of repipe specialists have nearly two decades of experience in Copper and PEX Repiping. Lots Plumbing has successfully replaced and installed many Copper and PEX repipe projects for residential and commercial structures in Southern California."
        ></Card>
      </section>

      <section className="flex flex-row max-w-7xl mx-auto mt-25 justify-center items-center">
        <Image
          src="/assets/owner.jpg"
          alt="Owner"
          width={300}
          height={300}
          unoptimized={true}
          className="object-contain border-2 border-gray-300 p-1 mr-20 "
        ></Image>
        <div>
          <h1 className="text-center font-bold text-4xl py-12">
            Why Choose Us?
          </h1>
          <ul>
            {reasons.map((item, index) => (
              <li key={index} className="mb-4">
                <span className="text-md text-orange-600 font-bold">
                  {item.title}{" "}
                </span>
                <span className="text-md text-gray-600">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Sidebar from "../../components/Sidebar";
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

      <div className="max-w-7xl mx-auto justify-center p-10">
        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="">
            <Sidebar
              items={[
                "Copper & PEX Repipe",
                "Water Heater Installation",
                "Gas Line Installation & Repair",
                "Unclog Drain",
                "Fixture Installation",
              ]}
            />
          </aside>
          <div className="flex-1 flex flex-col flex-wrap">
            <div className="text-left  text-xl font-light text-gray-600">
              <p>
                At Lots Plumbing, we provide a focused array of repiping
                services to help you solve your plumbing problems.{" "}
                <p className="text-orange-600 font-bold">
                  We are proud of our 5-star reputation on Yelp because we aim
                  to give every customer 5-star service.
                </p>
              </p>
            </div>
            <section id="Copper & PEX Repipe" className="text-gray-600">
              <h2 className="font-bold text-3xl mb-10 mt-15">
                Copper & PEX Repipe
              </h2>
              <p className="text-gray-600 ">
                Our team of repipe specialists have nearly two decades of
                experience in Copper and PEX Repiping. Lots Plumbing has
                successfully replaced and installed{" "}
                <span className="font-bold">
                  over 500 Copper and PEX repipe projects
                </span>{" "}
                for residential and commercial structures in Southern California
              </p>
              <h3 className="text-orange-600 font-bold text-xl mb-8 mt-8">
                How do you know if your home or business need repiping?
              </h3>
              <p>
                It's time to think about repiping your home or business if you
                are seeing the following signs:
              </p>
              <ul className="list-disc ml-15 space-y-1 mt-3">
                <li>Water running even when no faucets are on?</li>
                <li>
                  Water meter showing water running when water is turned off?
                </li>
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
                <li>
                  No scalding in the shower when someone turns on a faucet
                </li>
                <li>
                  Greater peace of mind because your piping system is now
                  secured
                </li>
                <li>Increased property value</li>
              </ul>
            </section>
            <section id="Copper & PEX Repipe" className="text-gray-600">
              <h2 className="font-bold text-3xl mb-10 mt-15">
                Water Heater Installation
              </h2>
              <p className="text-xl font-light text-gray-600 mt-8">
                Lots Plumbing provides our clients with the most professional
                installation and repair for water heaters and tankless water
                heaters of all makes and models. Our team is highly experienced;
                we have replace countless water heaters in residential and
                commercial facilities throughout the Southland.
              </p>
              <h3 className="text-orange-600 font-bold text-xl mb-8 mt-8">
                How do you know if your Water Heater needs to be replaced?
              </h3>
              <p>Some of the signs include the following:</p>
              <ul className="list-disc ml-15 space-y-1 mt-3">
                <li>Consistently lukewarm or cold water</li>
                <li>Fluctuating water temperatures</li>
                <li>Water that is far too hot</li>
                <li>Visible signs of water tank rust or corrosion</li>
                <li>Pool of water surrounding water heater</li>
                <li>Deteriorated anode rod</li>
                <li>Sediment build-up due to lack of system-wide flushing</li>
                <li>Rushed installation</li>
                <li>Improperly sized for specific location</li>
                <li>Over-capacity</li>
              </ul>
              <p className="mt-3">
                At Lots Plumbing, we also offer Tankless Water Heater
                Installation. Contact us and our specialists will visit your
                property, assess your needs and the condition of your water
                heater and provide you with the best price estimation.
              </p>
            </section>
            <section id="Copper & PEX Repipe" className="text-gray-600">
              <h2 className="font-bold text-3xl mb-10 mt-15">
                Gas Line Installation and Repair
              </h2>
              <p className="text-xl font-light text-gray-600 mt-8">
                Do you have a sulfur-like odor in your home?Sulfur is added to
                natural gas to let you know when{" "}
                <span className="text-orange-600">
                  Then you already have an emergency!
                </span>{" "}
                there is a leak in your gas pipes. If you can smell the sulfur,
                you’re already in trouble.
              </p>
              <p className="mt-5">
                Gas lines can fail for a number of reasons including worn out
                materials, something falling on the pipe, plant or tree roots
                growing into the pipe, or environmental collapses. Gas line
                installation and repair is not a do-it-yourself kind of project.
                You should always call a professional because this can be
                dangerous work. Older homes often have black steel pipes. When
                these pipes fail, the entire gas line needs to be repaired or
                replaced. More modern approaches use polyethylene pipes for gas
                main underground which last a long time and can be replaced in
                segments.
              </p>
            </section>
            <section id="Copper & PEX Repipe" className="text-gray-600">
              <h2 className="font-bold text-3xl mb-10 mt-15">Unclog Drain </h2>
              <p className="text-xl font-light text-gray-600 mt-8">
                Do you have a clogged drain that home remedies or Drain-O just
                won’t fix? A blocked drain is definitely an incovenience that
                can lead to a waterlogged disaster in your home or business.
                Take action immediately -{" "}
                <span className="text-orange-600">
                  Call Lots Plumbing immediately! We are a licensed and insured
                  plumber with excellent customer reviews on YELP!{" "}
                </span>{" "}
              </p>
            </section>
            <section id="Copper & PEX Repipe" className="text-gray-600">
              <h2 className="font-bold text-3xl mb-10 mt-15">
                Fixture Replacement and Installation
              </h2>
              <p className="text-xl font-light text-gray-600 mt-8">
                Planning the home renovation is the fun part. Actually having
                your house torn up and getting the fixtures installed is the
                not-so-fun part. Let Lots Plumbing make it better with our
                fixture installation service.
              </p>
              <p className="mt-5">
                Our fixture replacement & installation services include the
                following. We remove and disgard your old fixtures and replace
                them with your newly selected device.
              </p>
              <ul className="list-disc ml-15 space-y-1 mt-3">
                <li>Sinks (kitchen, bathrooms, utilities, etc.)</li>
                <li>Faucets</li>
                <li>Bathtubs</li>
                <li>Showers</li>
                <li>Toilets or Urinals</li>
                <li>Garbage Disposals</li>
                <li>Water Filters & Softeners</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

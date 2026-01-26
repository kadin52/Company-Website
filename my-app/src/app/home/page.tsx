import Head from "next/head";
import SimpleSlider from "../../components/SimpleSlider";
import Card from "../../components/Card";
export default function Home() {
  return (
    <>
      <Head>
        <title>Lots Plumbing, Inc. | Home</title>
        <meta
          name="keywords"
          content="plumbing and repipe services in orange county"
        />
        {/* <meta name="author" content="KettSolutions, LLC" /> */}
        <meta
          name="description"
          content="PEX Repipe, HVAC, Heating and Air Conditioning, Copper Repipe, Plumbing Services, Plumbing Inspection, Leak Detection, Sewage Camera Inspection, Unclog Drain, Water Heaters, Water Conditioning, Drainage, Sinks, Toilets, Faucets, Pumps, Tubs & Showers, Disposals, Pipes & Sewers, certified professional plumbers"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
      </Head>

      <div className="slider-area">
        <SimpleSlider />
      </div>

      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-center font-bold text-4xl">
          Orange County's #1 <br></br>Plumbing & Repipe Specialists
        </h1>
        <h2 className="text-center text-3xl p-8 font-light mb-10">
          Delivering fast, high-quality and budget-friendly services for nearly
          two decades!
        </h2>
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-6">
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
      </div>
    </>
  );
}

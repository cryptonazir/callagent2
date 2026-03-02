import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import HowItWorks from "@/components/HowItWorks";
import Channels from "@/components/Channels";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contacts from "@/components/Contacts";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <HowItWorks />
        <Channels />
        <Pricing />
        <FAQ />
        <Contacts />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}

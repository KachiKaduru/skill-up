import Image from "next/image";
import Container from "./_components/Container";
import Heading from "./_components/Heading";
import NavigationBar from "./_components/NavigationBar";

import heroImg from "@/public/skillup-hero.png";
import Button from "./_components/Button";
import ServicesSection from "./_components/ServicesSection";
import FeaturesSection from "./_components/FeaturesSection";

export default function Page() {
  return (
    <section>
      <NavigationBar />

      <main className=" relative text-white">
        <Image
          src={heroImg}
          alt="Skill Up Hero Image"
          fill
          className="object-cover object-center -z-10"
          priority
        />
        <Container className="py-[150px]">
          <div className="max-w-[664px] mx-auto">
            <Heading type="h1" className="mb-6">
              Home service has never been more convenient.
            </Heading>
            <p className="text-xl mb-10">
              Offering comprehensive home service solutions, delivered right to your doorstep.
            </p>
            <span className="flex gap-8">
              <Button>I am a skilled worker</Button>
              <Button type="secondary">I want to hire a skilled worker</Button>
            </span>
          </div>
        </Container>
      </main>

      <ServicesSection />
      <FeaturesSection />
    </section>
  );
}

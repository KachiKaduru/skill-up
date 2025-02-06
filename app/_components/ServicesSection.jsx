import Container from "./Container";
import Heading from "./Heading";
import ScrollEffectComponent from "./ScrollEffectComponent";
import ServicesCard from "./ServicesCard";
import iconOne from "@/public/service-card-icon-1.png";
import iconTwo from "@/public/service-card-icon-2.png";
import iconThree from "@/public/service-card-icon-3.png";

const services = [
  {
    title: "Home Services",
    text: " Easily find local Skilled workers around you and enjoy their services at the comfort of your home.",
    img: iconOne,
  },
  {
    title: "Artisan Centre & Craftsman Hub",
    text: "We advertise skilled Hand-workers, craftsman and Artisans whereby connecting them with potential customers.",
    img: iconTwo,
  },
  {
    title: " Fair Trade Marketplace",
    text: "Bridging Artisans and Customers  with Fixed Budget-Friendly Services",
    img: iconThree,
  },
];

export default function ServicesSection() {
  return (
    <section className="pt-28">
      <ScrollEffectComponent>
        <Container>
          <div className="text-center">
            <Heading type="h3">Our services</Heading>
            <p className="text-accent-50">What we have to offer</p>

            <div className="grid gap-8 auto-fill">
              {services.map((service, i) => (
                <ServicesCard card={service} key={i} />
              ))}
            </div>
          </div>
        </Container>
      </ScrollEffectComponent>
    </section>
  );
}

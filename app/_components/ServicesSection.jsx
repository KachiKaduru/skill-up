import Container from "./Container";
import Heading from "./Heading";
import ScrollEffectComponent from "./ScrollEffectComponent";

export default function ServicesSection() {
  return (
    <section className="pt-28">
      <ScrollEffectComponent>
        <Container>
          <div className="text-center">
            <Heading type="h3">Our services</Heading>
            <p className="text-accent-50">What we have to offer</p>
          </div>
        </Container>
      </ScrollEffectComponent>
    </section>
  );
}

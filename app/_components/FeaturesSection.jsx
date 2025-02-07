import Container from "./Container";
import featuresImgOne from "@/public/homepage/barber.png";
import featuresImgTwo from "@/public/homepage/plumber.png";
import FeaturesRow from "./FeaturesRow";

const features = [
  {
    direction: "flex-row-reverse",
    title: "Reliant.Fast.Efficient.",
    text: "At Skill up we offer a trustworthy, fast, and efficient platform for connecting with skilled artisans and craftsmen, carefully vetting each professional to ensure they meet high standards of quality, skill, and, with customer reviews and secure payment systems for added peace of mind; our user-friendly interface allows for quick service bookings, real-time availability, and instant confirmations, eliminating delays, while automated scheduling, direct communication, and transparent pricing streamline the entire process, ensuring you receive the right expert for your needs without hassle, making it the go-to platform for quality craftsmanship delivered swiftly and safely.",
    buttonType: "primary",
    buttonText: "I want to hire a skilled worker",
    img: featuresImgOne,
    alt: "A barber and a client",
  },
  {
    direction: "flex-row",
    title: "Earn as a skilled worker",
    text: "At Skill up we offer a trustworthy, fast, and efficient platform for connecting with skilled artisans and craftsmen, carefully vetting each professional to ensure they meet high standards of quality, skill, and, with customer reviews and secure payment systems for added peace of mind; our user-friendly interface allows for quick service bookings, real-time availability, and instant confirmations, eliminating delays, while automated scheduling, direct communication, and transparent pricing streamline the entire process, ensuring you receive the right expert for your needs without hassle, making it the go-to platform for quality craftsmanship delivered swiftly and safely.",
    buttonType: "secondary",
    buttonText: "I am a skilled worker",
    img: featuresImgTwo,
    alt: "A plumber working",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-32">
      <Container>
        {features.map(({ direction, title, text, buttonText, buttonType, img, alt }, i) => (
          <FeaturesRow
            direction={direction}
            title={title}
            text={text}
            buttonText={buttonText}
            buttonType={buttonType}
            img={img}
            alt={alt}
            key={i}
          />
        ))}
      </Container>
    </section>
  );
}

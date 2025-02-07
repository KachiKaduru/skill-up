import Image from "next/image";
import Button from "./Button";
import Heading from "./Heading";

export default function FeaturesRow({
  direction = "flex-row",
  title = "",
  text = "",
  buttonType = "",
  buttonText = "",
  img,
  alt = "",
}) {
  return (
    <div className={`grid grid-cols-2 md:${direction}`}>
      <div className="relative">
        <Image src={img} alt={alt} fill className="object-cover object-top" />
      </div>

      <div>
        <Heading type="feature">{title}</Heading>
        <p className="text-accent-100">{text}</p>
        <Button type={buttonType} className="">
          {buttonText}
        </Button>
      </div>
    </div>
  );
}

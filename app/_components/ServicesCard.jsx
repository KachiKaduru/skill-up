import Image from "next/image";
import Heading from "./Heading";

export default function ServicesCard({ card }) {
  const { img, title, text } = card;

  return (
    <div className="grid pt-16 bg-[#31CF301A] rounded-[20px] justify-items-center">
      <div className="rounded-full h-[84px] w-[84px] bg-[#31CF3033] grid">
        <Image src={img} alt="Icon" className="place-self-center w-[45px] h-[45px]" />
      </div>
      <Heading type="h4">{title}</Heading>
      <p className="text-accent-100 font-normal text-base">{text}</p>
    </div>
  );
}

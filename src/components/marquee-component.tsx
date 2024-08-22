import { DotFilledIcon } from "@radix-ui/react-icons";
import Marquee from "react-fast-marquee";

export default function MarqueeComponent() {
  return (
    <Marquee 
			className="py-3 bg-white dark:bg-[#070707] z-10 text-base font-light
			dark:text-neutral-200 text-neutral-400" 
			autoFill 
			speed={30}
		>
			<DotFilledIcon   />
			<h1 className="px-24 cursor-pointer">Follow our News on Whatsapp!</h1>
			<DotFilledIcon  />
			<h1 className="px-24 cursor-pointer">Please check your tracking frequently!</h1>
    </Marquee>
  );
}

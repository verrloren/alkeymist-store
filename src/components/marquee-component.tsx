// import { DotFilledIcon } from "@radix-ui/react-icons";
// import Marquee from "react-fast-marquee";

// export default function MarqueeComponent() {
//   return (
//     <Marquee
// 			className="py-3 bg-white dark:bg-[#070707] z-10 text-base font-light
// 			dark:text-neutral-200 text-neutral-400"
// 			autoFill
// 			speed={30}
// 		>
// 			<DotFilledIcon   />
// 			<h1 className="px-24 cursor-pointer">Follow our News on Whatsapp!</h1>
// 			<DotFilledIcon  />
// 			<h1 className="px-24 cursor-pointer">Please check your tracking frequently!</h1>
//     </Marquee>
//   );
// }

import MarqueeText from "react-marquee-text";
// import "MarqueeText/styles.css"
import "react-marquee-text/dist/styles.css";

export default function MarqueeComponent() {
  return (
    <MarqueeText treshold={0.1} duration={40} direction="right" className="my-3">
      <p className="pr-44 dark:text-neutral-500 font-light">The current UK Order Minimum is 160 Euro.</p>
      <p className="pr-44 dark:text-neutral-500 font-light">Follow our News on Whatsapp!</p>
      <p className="pr-44 dark:text-neutral-500 font-light">Please check your tracking frequently!</p>
    </MarqueeText>
  );
}

import altswitch2 from "../assets/altswitch2.png";
import attendance1 from "../assets/attendance1.png";
import attendance2 from "../assets/attendance2.png";
import cleanup1 from "../assets/cleanup1.png";
import loyalty1 from "../assets/loyalty1.png";
import loyalty2 from "../assets/loyalty2.png";
import loyalty3 from "../assets/loyalty3.png";
import washup1 from "../assets/washup1.png";
import washup2 from "../assets/washup2.png";
import washup3 from "../assets/washup3.png";

import { Marquee } from "./magicui/marquee";

const projectImages = [
  cleanup1,
  attendance1,
  attendance2,
  altswitch2,
  loyalty1,
  loyalty2,
  loyalty3,
  washup1,
  washup2,
  washup3,
];

export function MarqueeDemo() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s] repeat-0">
        {projectImages.map((project) => (
          <img className="h-[120px] w-[120px]" src={project} alt="" />
        ))}
      </Marquee>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background"></div>
    </div>
  );
}

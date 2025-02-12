import avyan from "../src/assets/avyan.jpg";
import bharosa from "../src/assets/bharosa.jpg";
import koyaemer from "../src/assets/koyaemer.jpg";
import mml from "../src/assets/mml.png";
import { MarqueeDemo } from "./components/marquee";
import { MyDock } from "./components/my-dock";
import { Badge } from "./components/ui/badge";

import WorkContainer from "./components/work-container";
export default function App() {
  const skills = [
    "React",
    "Flutter",
    "Typescript",
    "NestJs",
    "Node.js",
    "Java",
    "Docker",
    "Supabase",
    "Firebase",
    "Postgres",
    "Figma",
  ];
  const testimonials: { content: string; person: string }[] = [
    {
      content:
        "As a freelance UI/UX designer, Kyle has been an invaluable resource for me. He helped me to generate new ideas and explore different design options with my clients.",
      person: "Kathlyn Jordan | UI/UX Designer",
    },
    {
      content:
        "Introducing my little brother to Flutter and sharing some essential techniques with him has been a rewarding experience. It's been a pleasure to see his growth in mobile app development, and I'm proud to have been a part of his learning journey. His dedication and progress are truly commendable.",
      person: "Karl Reginaldo | Full Stack Developer",
    },
    {
      content:
        "Kyle has been a great help in building mobile apps and teaching me important developer skills. His commitment to on-time project delivery and attention to detail make him a strong candidate for a project manager role.",
      person: "Jannray Mostajo | Mobile App Developer",
    },
    {
      content:
        "In terms of his thinking, Sir Kyle is quite imaginative. He explains his concept to me using examples from the actual world so that I will know what to design.",
      person: "Kimberly Bay | Graphic Designer",
    },
  ];

  console.log(testimonials);

  return (
    <div className="relative">
      <div className="w-[100%] flex justify-center p-[48px]" id="home">
        <div className="max-w-[700px] flex-col">
          <div className="flex gap-[24px] mb-[24px]">
            <div className="flex-col">
              <h1 className="font-sans text-4xl font-bold">Hi, I'm Kyle 👋</h1>
              <p className="">
                Software Engineer. I love building things and helping people.
                Very active on Facebook.
              </p>
            </div>
            <img
              src={koyaemer}
              alt="koyaemer."
              className="flex-none w-[100px] h-[100px] rounded-full object-cover"
            />
          </div>
          <h3 className="font-bold text-[20px]">About</h3>
          <p className="text-[#758694] mb-[40px]">
            In early 2022,
            <span className="text-[#D2665A] underline cursor-pointer">
              {" "}
              I began my programming journey with Java
            </span>
            , building a strong foundation in object-oriented programming and
            software development. As I explored different technologies, I
            discovered Flutter and became fascinated by its versatility in
            cross-platform app development.
            <span className="text-[#344CB7] underline cursor-pointer">
              {" "}
              Not long after transitioning to Flutter
            </span>
            , I dedicated myself to mastering its framework, working on personal
            projects and honing my skills. Within six months of focused learning
            and practice, I landed my first freelance project, marking the
            beginning of my professional journey as a{" "}
            <span className="text-[#344CB7] underline cursor-pointer">
              Flutter developer.
            </span>
          </p>{" "}
          <h3 className="font-bold text-[20px] mb-[16px]" id="work">
            Work Experience
          </h3>
          <WorkContainer
            image={mml}
            title="Mobile Medical Lab"
            description="Flutter Developer"
            date="May 2024 - Present"
          />{" "}
          <WorkContainer
            image={bharosa}
            title="Bharosa PH"
            description="Flutter & NestJs Developer"
            date="June 2023 - April 2024"
          />
          <WorkContainer
            image={avyan}
            title="Avyan Global"
            description="Mobile App Developer"
            date="August 2022 - December 2022"
          />
          <h3 className="font-bold text-[20px] mt-[40px] mb-[16px]">
            Testimonials
          </h3>
          <div className="flex flex-wrap gap-[16px]">
            {testimonials.map((testimonial) => {
              return (
                <div className="max-w-[200px] border p-[16px] rounded-[8px]">
                  <p>{testimonial.content}</p>
                  <p className="italic text-[14px] text-[#3A4750]">
                    {" "}
                    - {testimonial.person}
                  </p>
                </div>
              );
            })}
          </div>
          <h3 className="font-bold text-[20px] mt-[40px] mb-[16px]" id="skill">
            Skills
          </h3>
          {skills.map((skill) => {
            return <Badge className="mr-[8px]">{skill}</Badge>;
          })}
          <h1 className="mt-[40px] mb-[30px] font-bold text-[32px] flex justify-center">
            Check out my latest work
          </h1>
          <MarqueeDemo />
        </div>
      </div>
      <div className="sticky bottom-4 left-0 right-0 flex justify-center">
        <MyDock />
      </div>
    </div>
  );
}

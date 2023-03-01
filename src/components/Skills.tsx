import { Fragment } from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

import { Fade, Slide } from "react-awesome-reveal";

interface Skills {
  name: string;
  nivel: number;
}
[];

const skills = [
  {
    name: "GIT",
    nivel: 3,
  },
  {
    name: "HTML",
    nivel: 3,
  },
  {
    name: "CSS",
    nivel: 3,
  },
  {
    name: "Javascript",
    nivel: 3,
  },
  {
    name: "Typescript",
    nivel: 2,
  },
  {
    name: "React",
    nivel: 2,
  },
  {
    name: "Vue.js",
    nivel: 2,
  },
  {
    name: "Angular",
    nivel: 1,
  },
  {
    name: "Bootstrap",
    nivel: 3,
  },
  {
    name: "Tailwind",
    nivel: 2,
  },
  {
    name: "Styled-components",
    nivel: 2,
  },
  {
    name: "Scss",
    nivel: 2,
  },
  {
    name: "jQuery",
    nivel: 2,
  },
  {
    name: "PHP",
    nivel: 2,
  },
  {
    name: "Node.js",
    nivel: 3,
  },
  {
    name: "C#",
    nivel: 2,
  },
  {
    name: "Python",
    nivel: 2,
  },
  {
    name: "MongoDB",
    nivel: 1,
  },
  {
    name: "Firebase",
    nivel: 2,
  },
  {
    name: "MySQL",
    nivel: 2,
  },
];

const Skills = () => {
  return (
    <>
      <Slide duration={1500} triggerOnce>
        <div className="flex flex-row justify-center items-center mt-5 mb-5">
        <div className="text-center text-5xl" id="skills">
          <span className="font-poppins font-bold">SKILLS</span>
          </div>
          <Fragment>
            <Popover placement="bottom">
              <PopoverHandler>
                <Button
                  variant="gradient"
                  className="transition hover:bg-slate-600 p-1 h-8 rounded-lg text-base bg-sky-900 ml-3 pl-3 pr-3"
                >
                  <span className="font-poppins">LEGENDA</span>
                </Button>
              </PopoverHandler>
              <PopoverContent className="rounded-xl z-50 w-80 text-white uppercase font-roboto">
                <div className="bg-sky-800 pl-5 pr-5 pt-1 pb-1 rounded-r-lg border-l-4 border-gray-200 ml-3 mr-3 mb-2 text-center hover:bg-gray-200 hover:text-black">
                  Básico
                </div>
                <div className="bg-sky-600 pl-5 pr-5 pt-1 pb-1 rounded-r-lg border-l-4 border-gray-200 ml-3 mr-3 mb-2 text-center hover:bg-gray-200 hover:text-black">
                  Intermediário
                </div>
                <div className="bg-sky-400 pl-5 pr-5 pt-1 pb-1 rounded-r-lg border-l-4 border-gray-200 ml-3 mr-3 mb-2 text-center hover:bg-gray-200 hover:text-black">
                  Avançado
                </div>
              </PopoverContent>
            </Popover>
          </Fragment>
          </div>
        

        <div className="flex flex-row flex-wrap container mx-auto justify-center text-xl text-white mb-5 font-roboto">
          {skills.map((skill: Skills, index: number) => (
            <div key={index}>
              {skill.nivel === 3 && (
                <div className="bg-sky-400 pl-5 pr-5 pt-1 pb-1 rounded-r-lg border-l-4 border-white ml-3 mr-3 mb-4 text-center transition hover:-translate-y-2 hover:bg-white hover:text-black">
                  {skill.name}
                </div>
              )}
              {skill.nivel === 2 && (
                <div className="bg-sky-600 pl-5 pr-5 pt-1 pb-1 rounded-r-lg border-l-4 border-white ml-3 mr-3 mb-4 text-center transition hover:-translate-y-2 hover:bg-white hover:text-black">
                  {skill.name}
                </div>
              )}
              {skill.nivel === 1 && (
                <div className="bg-sky-800 pl-5 pr-5 pt-1 pb-1 rounded-r-lg border-l-4 border-white ml-3 mr-3 mb-4 text-center transition hover:-translate-y-2 hover:bg-white hover:text-black">
                  {skill.name}
                </div>
              )}
            </div>
          ))}
        </div>

        <div></div>
      </Slide>
    </>
  );
};

export default Skills;

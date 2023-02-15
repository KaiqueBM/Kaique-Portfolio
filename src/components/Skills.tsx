import { Fragment } from "react";
import {
  Popover,
  PopoverHandler,
  PopoverContent,
  Button,
} from "@material-tailwind/react";

import { Fade } from "react-awesome-reveal";

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
    nivel: 1,
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
      <Fade direction="right">
        <div className="text-center p-5 text-3xl" id="skills">
          SKILLS
          <Fragment>
            <Popover placement="bottom">
              <PopoverHandler>
                <Button
                  variant="gradient"
                  className="transition hover:bg-slate-600 p-1 rounded-lg text-base bg-sky-900 ml-3 pl-3 pr-3"
                >
                  LEGENDA
                </Button>
              </PopoverHandler>
              <PopoverContent className="rounded-xl z-50 w-80 text-white uppercase">
                <div className="bg-sky-800 pl-5 pr-5 pt-1 pb-1 rounded-lg border-4 border-sky-900 ml-3 mr-3 mb-2 text-center hover:bg-sky-900">
                  Básico
                </div>
                <div className="bg-sky-600 pl-5 pr-5 pt-1 pb-1 rounded-lg border-4 border-sky-700 ml-3 mr-3 mb-2 text-center hover:bg-sky-700">
                  Intermediário
                </div>
                <div className="bg-sky-400 pl-5 pr-5 pt-1 pb-1 rounded-lg border-4 border-sky-500 ml-3 mr-3 mb-2 text-center hover:bg-sky-500">
                  Avançado
                </div>
              </PopoverContent>
            </Popover>
          </Fragment>
        </div>

        <div className="flex flex-row flex-wrap container mx-auto justify-center text-xl text-white mb-5">
          {skills.map((skill: Skills, index: number) => (
            <div key={index}>
              {skill.nivel === 3 && (
                <div className="bg-sky-400 pl-5 pr-5 pt-1 pb-1 rounded-lg border-4 border-sky-500 ml-3 mr-3 mb-4 text-center transition hover:-translate-y-2 hover:bg-sky-500">
                  {skill.name}
                </div>
              )}
              {skill.nivel === 2 && (
                <div className="bg-sky-600 pl-5 pr-5 pt-1 pb-1 rounded-lg border-4 border-sky-700 ml-3 mr-3 mb-4 text-center transition hover:-translate-y-2 hover:bg-sky-700">
                  {skill.name}
                </div>
              )}
              {skill.nivel === 1 && (
                <div className="bg-sky-800 pl-5 pr-5 pt-1 pb-1 rounded-lg border-4 border-sky-900 ml-3 mr-3 mb-4 text-center transition hover:-translate-y-2 hover:bg-sky-900">
                  {skill.name}
                </div>
              )}
            </div>
          ))}
        </div>

        <div></div>
      </Fade>
    </>
  );
};

export default Skills;

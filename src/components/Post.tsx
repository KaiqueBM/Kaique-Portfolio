import { Fragment, useState } from "react";
import {
  BsGithub,
  BsYoutube,
  BsLaptopFill,
  BsXOctagon,
  BsPlusLg,
} from "react-icons/bs";

import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

interface PropsPosts {
  props: {
    id: number;
    title: string;
    description: string;
    image: string;
    video: string | null;
    github: string | null;
    project: string | null;
    tags: {
      name: string;
    }[];
  };
}
[];

interface PropsTags {
  name: string;
}

const Post = (posts: PropsPosts) => {
  const props = posts.props;
  const tags = props.tags;

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <div className="xl:w-2/6 md:w-3/6 w-full md:p-3 pt-3 pb-3 rounded-t-xl hover:transform hover:scale-105 transition duration-500">
      <Fragment>
        <div className="relative">
          <div
            onClick={handleOpen}
            className="font-poppins font-semibold absolute right-0 bg-white text-black p-2 rounded-xl mt-2 mr-2 border-2 border-black hover:bg-black hover:text-white transition cursor-pointer flex flex-row"
          >
            <span className="pt-1 mr-2">
              <BsPlusLg />
            </span>
            MAIS DETALHES{" "}
          </div>

          <img
            className="w-full rounded-t-xl border-b-4 border-black"
            src={props.image}
          />
        </div>
        <div className="bg-white text-center p-2 text-xl uppercase text-black font-overpass font-semibold">
          {props.title}
        </div>
        <div className="bg-white text-right p-2 text-sm rounded-b-xl uppercase flex flex-row flex-wrap justify-end -mt-0.5">
          {tags.map((tag: PropsTags, index: number) => (
            <div key={index} className="md:mb-2 mb-3">
              <span className="font-poppins font-light bg-white text-black border-2 border-black pl-3 pr-3 rounded-xl ml-1 mr-1 hover:bg-black hover:text-white transition cursor-pointer">
                {tag.name}
              </span>
            </div>
          ))}
        </div>

        <Dialog
          className="my-auto mx-auto h-screen flex flex-col items-center justify-center bg-transparent backdrop-blur-3xl w-full"
          open={open}
          handler={handleOpen}
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0.9, y: -100 },
          }}
        >
          <DialogHeader className="bg-white w-full rounded-t-xl container">
            <div className="flex flex-row flex-wrap justify-between w-full border-b-4 border-gray-200 pb-4">
              <div className="font-poppins font-semibold">{props.title}</div>
              <div onClick={handleOpen}>
                <BsXOctagon className="text-3xl hover:text-sky-700 transition cursor-pointer" />
              </div>
            </div>
          </DialogHeader>
          <DialogBody
            className="bg-white rounded-b-xl container overflow-auto"
            divider
          >
            <div className="grid lg:grid-cols-2 gap-4">
              <div>
                {props.video != null ? (
                  <iframe
                    className="w-full h-100 rounded-lg"
                    src={`${props.video}?controls=0&loop=1&autoplay=1&mute=1`}
                  ></iframe>
                ) : (
                  <img className="rounded-lg w-full" src={props.image} />
                )}
              </div>
              <div>
                <div className="text-right  text-white">
                  {tags.map((tag: PropsTags, index: number) => (
                    <div key={index} className="inline-block">
                      <span className="font-poppins font-light bg-white text-black border-2 border-black pl-3 pr-3 rounded-xl ml-1 mr-1 hover:bg-black hover:text-white transition cursor-pointer">
                        {tag.name}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="text-xl pb-2 pt-2 font-poppins font-semibold">
                  Sobre o projeto:
                </div>
                <div className="text-justify font-overpass">
                  {props.description}
                </div>
                <div></div>

                <hr className="border-2 mt-4 mb-6"></hr>

                <div className="sm:pb-10 pb-2 text-right flex sm:flex-row flex-col justify-end">
                  {props.video != null && (
                    <a
                      href={props.video}
                      className="sm:mb-0 mb-6 focus-visible:outline-0"
                    >
                      <span className="font-poppins font-semibold bg-white text-black p-2 pl-5 pr-5 rounded-xl border-2 border-black ml-2  hover:text-white hover:bg-black transition-all cursor-pointer">
                        <BsYoutube className="inline-block text-xl -mt-1 mr-2" />
                        VIDEO
                      </span>
                    </a>
                  )}
                  {props.github != null && (
                    <a
                      href={props.github}
                      className="sm:mb-0 mb-6 focus-visible:outline-0 "
                    >
                      <span className="font-poppins font-semibold bg-white text-black p-2 pl-5 pr-5 rounded-xl border-2 border-black ml-2  hover:text-white hover:bg-black transition-all cursor-pointer">
                        <BsGithub className="inline-block text-xl -mt-1" />{" "}
                        REPOSITÓRIO
                      </span>
                    </a>
                  )}
                  {props.project != null && (
                    <a href={props.project} className="focus-visible:outline-0">
                      <span className="font-poppins font-semibold bg-white text-black p-2 pl-5 pr-5 rounded-xl border-2 border-black ml-2  hover:text-white hover:bg-black transition-all cursor-pointer">
                        <BsLaptopFill className="inline-block text-xl -mt-1 mr-2" />
                        PROJETO
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </DialogBody>
        </Dialog>
      </Fragment>
    </div>
  );
};

export default Post;

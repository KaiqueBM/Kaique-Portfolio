import Post from "./components/Post";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contato from "./components/Contato";

import { Fade, Slide } from "react-awesome-reveal";
import Experiencias from "./components/Experiencias";

import Sobre from "./components/Sobre";
import Header from "./components/Header";
import Skills from "./components/Skills";
import { data } from "./data/DataPosts";

const posts = data;

interface Posts {
  id: number;
  title: string;
  description: string;
  image: string;
  video: string;
  github: string;
  project: string;
  tags: any;
}
[];

console.log(posts);

function Home() {
  return (
    <div id="home">
      <Navbar />

      <Header />

      <div
        className="flex flex-col justify-center pt-5 bg-gradient-to-bl from-sky-900 to-gray-900 text-white border-t-4 border-b-4"
        id="sobre"
      >
        <Sobre />

        <Skills />
      </div>

      <Experiencias />

      <div
        className="flex flex-col justify-center pt-5 bg-gradient-to-bl from-sky-900 to-gray-900 text-white border-t-4 border-b-4"
        id="portfolio"
      >
        <Slide duration={1500} triggerOnce>
          <>
          <div className="text-center p-5 text-3xl">PORTFÓLIO</div>

          <div className="flex flex-row flex-wrap ml-5 mr-5 justify-center">
            {posts.map((post: any, index: number) => (
              <Post key={index} props={post} />
            ))}
          </div>
          </>
        </Slide>

          <div className="flex justify-center pb-10 pt-5">
            <button className="bg-sky-600 p-2 pl-5 pr-5 rounded-xl border-4 border-sky-700 text-white ml-2 hover:bg-sky-900 hover:border-sky-900 transition cursor-pointer md:inline-block block md:mt-0 mt-2 text-center">
              CONFIRA MAIS PROJETOS NO GITHUB
            </button>
          </div>
      </div>

      <Contato />

      <Footer />
    </div>
  );
}

export default Home;

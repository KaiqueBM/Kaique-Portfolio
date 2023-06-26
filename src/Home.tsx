import Post from "./components/Post";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contato from "./components/Contato";

import { Slide } from "react-awesome-reveal";
import Experiencias from "./components/Experiencias";

import Sobre from "./components/Sobre";
import Header from "./components/Header";
import Skills from "./components/Skills";
import { data } from "./data/DataPosts";
import { useState } from "react";
import Cursos from "./components/Cursos";

const posts = data;

interface Posts {
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
}
[];



function Home() {
  
  const [morePosts, setMorePosts] = useState<number>(5);
  const [changeButton, setChangeButton] = useState<string>("flex");
  function updatePosts(){
    setMorePosts(morePosts+3)
    if(morePosts > (posts.length-3))
    {
      setChangeButton("none")
    }
  }
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
            <div className="text-center p-5 text-5xl font-poppins font-bold">
              PORTFÓLIO
            </div>

            <div className="flex flex-row flex-wrap ml-5 mr-5 justify-center">
              {posts.map((post: Posts, index: number) => (
                (index <= morePosts && (<Post key={index} props={post} />))
              ))}
            </div>
          </>
        </Slide>

        <div className="flex justify-center pb-10 pt-5">
            <button onClick={updatePosts} style={{"display": changeButton}} className="font-poppins bg-white p-2 pl-5 pr-5 rounded-xl border-2 border-black text-black ml-2 hover:bg-black hover:text-white transition cursor-pointer md:inline-block block md:mt-0 mt-2 text-center">
              LISTAR MAIS PROJETOS
            </button>
            <a href="https://github.com/KaiqueBM?tab=repositories">
            <button className="font-poppins bg-white p-2 pl-5 pr-5 rounded-xl border-2 border-black text-black ml-2 hover:bg-black hover:text-white transition cursor-pointer md:inline-block block md:mt-0 mt-2 text-center">
              VER MAIS PROJETOS NO GITHUB
            </button>
          </a>
        </div>

        <div className="flex justify-center pb-10 pt-5">
         
        </div>
      </div>

      <Cursos />

      <Contato />

      <Footer />
    </div>
  );
}

export default Home;

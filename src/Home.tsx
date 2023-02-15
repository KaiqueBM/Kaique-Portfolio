import React, { useState } from "react";

import Background from "./assets/fundo1.png";




import Post from "./components/Post";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contato from "./components/Contato";

import { Fade } from "react-awesome-reveal";
import Experiencias from "./components/Experiencias";




import Sobre from "./components/Sobre";
import Header from "./components/Header";
import Skills from "./components/Skills";
import {data} from "./data/DataPosts";


const posts = data

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
        className="flex flex-col justify-center pt-5 bg-gradient-to-bl from-sky-900 to-gray-900 text-white border-t-4"
        id="sobre"
      >
        <Sobre />

        <Skills />
      </div>

      <Experiencias />

      <div
        className="flex flex-col justify-center pt-5 bg-gradient-to-bl from-sky-900 to-gray-900 text-white border-t-4"
        id="portfolio"
      >
        <Fade direction="right">
          <div className="text-center p-5 text-3xl">PORTFÓLIO</div>

          <div className="flex flex-row flex-wrap ml-5 mr-5 justify-center pb-10">
            {posts.map((post: any, index: number) => (
              <Post key={index} props={post} />
              
            ))}
          </div>
        </Fade>
      </div>

      <Contato />

      <Footer />
    </div>
  );
}

export default Home;

import React from 'react'

const dataPosts = [
    {
      id: 0,
      title: "Monte seu hamburger - CRUD",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis tellus at diam.",
      image:
        "https://raw.githubusercontent.com/KaiqueBM/catalogo-de-filmes/master/assets/app_1.png",
      video: null,
      github: "teste",
      project: "teste",
      tags: [
        {
          name: "Vue.js",
        },
        {
          name: "CSS",
        },
        {
          name: "JS",
        },
      ],
    },{
      id: 0,
      title: "Loja do Fortnite",
      description:
        "Essa aplicação foi desenvolvida consumindo a API da loja de itens do Fortnite. Basicamente é atualizado em tempo real com base na loja do jogo, mostrando todos os itens, bundles, com todos os detalhes. Consegue ver informações de preço, desconto, raridade, descrição e entre outras.",
      image:
        "https://raw.githubusercontent.com/KaiqueBM/fortnite_shop/master/assets/app_1.png",
      video: null,
      github: "https://github.com/KaiqueBM/fortnite_shop",
      project: null,
      tags: [
        {
          name: "React",
        },
        {
          name: "TS",
        },
        {
          name: "Bootstrap",
        },
        {
          name: "Axios",
        },
      ],
    },{
      id: 0,
      title: "NLW SETUP - Habits",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis tellus at diam.",
      image:
        "https://www.imagemhost.com.br/images/2023/02/15/app_1.png",
      video: null,
      github: "teste",
      project: "teste",
      tags: [
        {
          name: "React",
        },
        {
          name: "TS",
        },
        {
          name: "Node.js",
        },
        {
          name: "Prisma",
        },
      ],
    },{
      id: 0,
      title: "FPVD",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed iaculis tellus at diam.",
      image:
        "https://www.imagemhost.com.br/images/2023/02/15/Screenshot_346.png",
      video: null,
      github: "teste",
      project: "teste",
      tags: [
        {
          name: "JS",
        },
        {
          name: "PHP",
        },
        {
          name: "WP",
        },
      ],
    },{
      id: 0,
      title: "Catálogo de filmes",
      description:
        "Desenvolvi uma aplicação web de um catálogo de filmes onde você pode ver os filmes mais populares do momento, filtrar por gêneros, pesquisar um filme especifico e entre outras funções. Consumi a api da The Movies DB, uma api bem completa para o que eu queria fazer. Utilizei nesse projeto React, Typescript e Tailwind. A listagem dos filmes é por sua popularidade atualmente. Fiz um esquema de paginação, mostrando 20 filmes por página. Você pode também filtrar pelos gêneros, listando apenas filmes de ação, comédio, e entre outros. Também tem a opção de pesquisar por um filme especifico, podendo até pesquisar por um filme que ainda não lançou. E para finalizar, pode mudar a linguagem do site por meio de um botão na nav.",
      image:
        "https://raw.githubusercontent.com/KaiqueBM/catalogo-de-filmes/master/assets/app_1.png",
      video: "https://www.youtube.com/embed/oS-VuN9uDG0",
      github: "https://github.com/KaiqueBM/catalogo-de-filmes",
      project: null,
      tags: [
        {
          name: "React",
        },{
          name: "TypeScript",
        },{
          name: "Tailwind",
        },
        
      ],
    },{
      id: 0,
      title: "Yappi",
      description:
        "Aplicação criada para a empresa Yappi. Foi feito em Wordpress utilizando HTML, CSS, Javascript, PHP, Bootstrap, jQuery e Ajax. Além do blog, foi desenvolvido uma calculadora de juros composto, precisando criar um back end interno no WP, utilizando o Ajax para realizar a chamada.",
      image:
        "https://www.imagemhost.com.br/images/2023/02/15/Screenshot_345.png",
      video: null,
      github: null,
      project: "https://yappi.com.br/",
      tags: [
        {
          name: "JavaScript",
        },
        {
          name: "PHP",
        },
        {
          name: "Ajax",
        },{
          name: "WP",
        },
      ],
    },
  ];

  export const data = dataPosts.reverse()